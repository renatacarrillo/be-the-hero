const generateUniqueIde = require("../utils/generateUniqueId");

const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  //LISTAGEM DE TODOS AS ONGS
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  //CADASTRO DE ONG
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueIde();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
