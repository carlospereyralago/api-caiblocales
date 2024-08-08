class Cataloguecaib extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
        }
        section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .title {
          align-items: center;
          display: flex;
          gap: 0.5rem;
        }
        h1 {
          color: #fff;
          font-size: 5em;
        }
        .data-req {
          align-items: center;
          display: flex;
          gap: 0.5rem;
        }
        .data-req button {
          color: #fff;
          font-family: ubuntu;
          font-size: 2em;
          border-radius: 20px;
          background: #562897;
          cursor: pointer;
        }
        p {
          color: #fff;
        }
      </style>
      <section>
        <div class="title">
          <h1>Consulta CAIB - Locales Comerciales</h1>
        </div>
        <div class="data-req">
          <button class="sent-data">Cargar Datos</button>
        </div>
      </section>
    `

    const fetchButton = this.shadow.querySelector('.sent-data')

    fetchButton.addEventListener('click', async () => {
      try {
        // Obtener los datos del JSON
        let response = await fetch('https://catalegdades.caib.cat/resource/syr2-kez9.json')
        let data = await response.json()

        // Procesar los datos para separar geocoded_column en latitud y longitud
        const processedData = data.map(item => {
          if (item.geocoded_column && item.geocoded_column.coordinates) {
            return {
              ...item,
              latitud: item.geocoded_column.coordinates[1],
              longitud: item.geocoded_column.coordinates[0]
            }
          }
          return item
        })

        // Enviar los datos procesados a la API
        response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/cataloguecaib`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(processedData)
        })

        data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error fetching or sending data:', error)
      }
    })
  }
}

customElements.define('button-cataloguecaib-component', Cataloguecaib)
