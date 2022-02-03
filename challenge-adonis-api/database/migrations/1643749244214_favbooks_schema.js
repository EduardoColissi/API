"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FavbooksSchema extends Schema {
  up() {
    this.create("favbooks", (table) => {
      table.increments();
      table.string("book_id", 100).notNullable();
      table.varchar("favbook_description", 10000);
      table.string("favbook_title", 200).notNullable();
      table.string("favbook_publisher", 300);
      table.timestamps();
    });
  }

  down() {
    this.drop("favbooks");
  }
}

module.exports = FavbooksSchema;
