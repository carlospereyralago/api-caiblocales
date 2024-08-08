'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('commercial_premises', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      signatura: {
        type: Sequelize.STRING,
        allowNull: true
      },
      denominaci_comercial: {
        type: Sequelize.STRING,
        allowNull: true
      },
      grup: {
        type: Sequelize.STRING,
        allowNull: true
      },
      subgrup: {
        type: Sequelize.STRING,
        allowNull: true
      },
      inici_d_activitat: {
        type: Sequelize.DATE,
        allowNull: true
      },
      estat: {
        type: Sequelize.STRING,
        allowNull: true
      },
      municipi: {
        type: Sequelize.STRING,
        allowNull: true
      },
      localitat: {
        type: Sequelize.STRING,
        allowNull: true
      },
      direcci: {
        type: Sequelize.STRING,
        allowNull: true
      },
      utm_x: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      utm_y: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      categoria_gold: {
        type: Sequelize.STRING,
        allowNull: true
      },
      activitat_secund_ria: {
        type: Sequelize.STRING,
        allowNull: true
      },
      aforament_m_xim: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      explotador_s: {
        type: Sequelize.STRING,
        allowNull: true
      },
      latitud: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      longitud: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('commercial_premises')
  }
}
