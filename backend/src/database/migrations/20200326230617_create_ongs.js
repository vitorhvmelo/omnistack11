//up cria a tabela, o que vai acontecer
exports.up = function(knex) { 
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary() //coluna primaria
        table.string('name').notNullable() //nao pode ser nulo
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable() //o 2 pq so tem duas letras
      });
};
// se der errado o que faz? chama o dow
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
