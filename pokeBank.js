const data = [
    {
      id: 1,
      name: "Pikachu",
      type: "Electric",
      trainer: "Ash",
      date: new Date(Date.now() - 15000000),
    },
    {
      id: 2,
      name: "Charizard",
      type: "Fire/Flying",
      trainer: "Ash",
      date: new Date(Date.now() - 90000000),
    },
    {
      id: 3,
      name: "Bulbasaur",
      type: "Grass/Poison",
      trainer: "Ash",
      date: new Date(Date.now() - 80000000),
    },
    {
      id: 4,
      name: "Squirtle",
      type: "Water",
      trainer: "Ash",
      date: new Date(Date.now() - 70000000),
    },
    {
      id: 5,
      name: "Jigglypuff",
      type: "Normal/Fairy",
      trainer: "Misty",
      date: new Date(Date.now() - 60000000),
    },
    {
      id: 6,
      name: "Gengar",
      type: "Ghost/Poison",
      trainer: "Brock",
      date: new Date(Date.now() - 50000000),
    },
    {
      id: 7,
      name: "Eevee",
      type: "Normal",
      trainer: "Gary",
      date: new Date(Date.now() - 40000000),
    },
    {
      id: 8,
      name: "Snorlax",
      type: "Normal",
      trainer: "Ash",
      date: new Date(Date.now() - 30000000),
    },
    {
      id: 9,
      name: "Mewtwo",
      type: "Psychic",
      trainer: "Red",
      date: new Date(Date.now() - 20000000),
    },
    {
      id: 10,
      name: "Lugia",
      type: "Psychic/Flying",
      trainer: "Silver",
      date: new Date(Date.now() - 10000000),
    },
  ];
  
  const list = () => {
    return [...data];
  };
  
  const find = (id) => {
    const pokemon = data.find((pokemon) => pokemon.id === +id);
    return { ...pokemon };
  };
  
  module.exports = { list: list, find: find }; 