/**MÉTODOS UP = CRIANDO A TABELA */
exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("ong_id").notNullable(); //RELACIONAMENTO

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

/**MÉTODO DOWN = EXCLUINDO A TABELA */
exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
