/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, content: '', user_id:'1', community_id:'1'},
    {id: 2, content: '', user_id:'2', community_id:'2'},
    {id: 3, content: '', user_id:'3', community_id:'3'},
    {id: 1, content: '', user_id:'4', community_id:'4'},
    {id: 2, content: '', user_id:'5', community_id:'5'},
    {id: 1, content: '', user_id:'6', community_id:'6'},
    {id: 2, content: '', user_id:'7', community_id:'7'},
    {id: 1, content: '', user_id:'8', community_id:'8'},
    {id: 2, content: '', user_id:'9', community_id:'9'},
    {id: 1, content: '', user_id:'10', community_id:'10'}
  ]);
};
