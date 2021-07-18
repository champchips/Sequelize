"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@doe.com",
          uuid: "80511f69-94c6-4eee-83b3-bb9d512d910c",
          role: "admin",
          createdAt: "2021-07-18T15:58:05.208Z",
          updatedAt: "2021-07-18T15:58:05.208Z",
        },
        {
          name: "Jane Doe",
          email: "Jane@doe.com",
          uuid: "80511f69-94c6-4eee-83a2-bb9d512d910c",
          role: "admin",
          createdAt: "2021-07-18T15:58:05.208Z",
          updatedAt: "2021-07-18T15:58:05.208Z",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
