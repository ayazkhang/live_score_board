export const up = async (knex: any): Promise<void> => {
  return knex.schema.createTable('matches', function(table:any) {
    table.increments('id').primary();
    table.string('home_team').notNullable();
    table.string('away_team').notNullable();
    table.integer('home_score').notNullable();
    table.integer('away_score').notNullable();
    table.timestamp('start_time').notNullable();
  });
};

export const down = async (knex: any): Promise<void> => {
  return knex.schema.dropTableIfExists('matches');
};