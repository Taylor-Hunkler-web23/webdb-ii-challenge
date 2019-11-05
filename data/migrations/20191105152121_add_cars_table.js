
exports.up = function(knex) {
  
        return  knex.schema.createTable('cars', function (table) {
            //adds a primary key, called id as an auto-increment intenger, not null and unique
             table.increments();
         table.string('VIN', 128).notNullable();
         table.string('make', 64).notNullable();
         table.string('model', 64).notNullable();
         table.integer('mileage', 255).notNullable();
         table.string('transmission', 128);
         table.string('title', 128);
     
           
           })
     };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
