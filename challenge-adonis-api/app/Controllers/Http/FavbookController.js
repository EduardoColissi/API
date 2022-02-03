"use strict";

const Favbook = use("App/Models/Favbook");

class FavbookController {
  async store({ request }) {
    const data = request.only([
      "book_id",
      "favbook_description",
      "favbook_title",
      "favbook_authors",
      "favbook_publisher",
    ]);

    console.log("book id: ", data);

    return await Favbook.create(data);
  }

  async list() {
    return await Favbook.all();
  }

  async delete({ params }) {
    const fav = await Favbook.findOrFail(params.id);

    await fav.delete();

    return {
      message: "Excluído",
    };
  }
}

module.exports = FavbookController;
