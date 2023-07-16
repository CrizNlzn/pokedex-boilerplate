// Imports necessary modules
const express = require("express");
const morgan = require("morgan");
const pokeBank = require("./pokeBank");

// Initializes Express application
const app = express();

// Uses Morgan middleware for logging
app.use(morgan("dev"));

// Defines homepage route
app.get("/", (req, res) => {
  const pokemonList = pokeBank.list();
  let html = "<h1>Pokedex</h1>";
  pokemonList.forEach((pokemon) => {
    html += `<p><a href="/pokemon/${pokemon.id}">${pokemon.name}</a></p>`;
  });
  res.send(html);
});

// Defines Pokemon details route
app.get("/pokemon/:id", (req, res) => {
  const pokemon = pokeBank.find(req.params.id);
  if (!pokemon) {
    res.status(404).send("Pokemon not found");
  } else {
    let html = `<h1>${pokemon.name}</h1>`;
    html += `<p>Type: ${pokemon.type}</p>`;
    html += `<p>Trainer: ${pokemon.trainer}</p>`;
    html += `<p>Date: ${pokemon.date}</p>`;
    res.send(html);
  }
});

app.get("/pokemon/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = find(id);
  if (!pokemon.id) {
    // If the post wasn't found, just throw an error
    throw new Error("Not Found");
  }
  // ... Otherwise, send the regular post detail HTML
});


// Starts server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});