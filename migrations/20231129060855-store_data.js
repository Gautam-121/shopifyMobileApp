'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 
     */

    await queryInterface.createTable('Active_Stores', {
      shop : { // Shop Name of User
      type: DataTypes.TEXT,
      allowNull:false,
      unique:true
    },
    isActive: { // Check Shop Install Currently or Unistall
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:false
    },
  });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Active_Stores');

  }
};
