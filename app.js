require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const Sequelize = require("sequelize");
// const db = require("./db");
// const pokeBank = require("./pokeBank");
// const pokeList = require("./views/pokeList");
// const pokeDetails = require("./views/pokeDetails");
// const Pokemon = require("./models/Pokemon");
// const Trainer = require("./models/Trainer");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 
const db = new Sequelize(process.env.DATABASE_URL);

const Pokemon = db.define("Pokemon", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  trainer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
  },
  image: {
    type: Sequelize.STRING,
  },
});

const Trainer = db.define("Trainer", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Trainer.hasMany(Pokemon);
Pokemon.belongsTo(Trainer);
// 

(async () => {
  try {
    await db.sync();
    console.log("Models synced with database");
  } catch (error) {
    console.error(error);
  }
})();

// Create a route to get all Pokemon.
app.get("/pokemon", async (req, res) => {
  try {
    const pokemon = await Pokemon.findAll();
    res.json(pokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a route to get indiv. Pokemon.
app.get("/pokemon/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).send("Pokemon not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a route to create a new Pokemon.
app.post("/pokemon", async (req, res) => {
  try {
    const newPokemon = await Pokemon.create(req.body);
    res.json(newPokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Create a route to update a Pokemon by ID (just dont use : when filtering)
app.put("/pokemon/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (pokemon) {
      await pokemon.update(req.body);
      res.json(pokemon);
    } else {
      res.status(404).send("Pokemon not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a route to delete a Pokemon by ID
app.delete("/pokemon/:id", async (req, res) => {
  try {
    const pokemon = await Pokemon.findByPk(req.params.id);
    if (pokemon) {
      await pokemon.destroy();
      res.status(204).send();
    } else {
      res.status(404).send("Pokemon not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 5433;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

