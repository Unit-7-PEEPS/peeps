/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('community').del()
  await knex('community').insert([
    {id: 1, name: 'SportsPeeps', creator_id: '8'},
    {id: 2, name: 'PoliticalPeeps', creator_id: '7'},
    {id: 3, name: 'ComicPeeps', creator_id: '6'},
    {id: 4, name: 'ArtPeeps', creator_id: '5' },
    {id: 5, name: 'BLMPeeps', creator_id: '4' },
    {id: 6, name: 'MediaPeeps', creator_id: '1' },
    {id: 7, name: 'ReligionPeeps', creator_id: '1' },
    {id: 8, name: 'TechPeeps', creator_id: '3' },
    {id: 9, name: 'EducationalPeeps', creator_id: '1' },
    {id: 10, name: 'InfluencerPeeps', creator_id: '2' }
  ]);
};