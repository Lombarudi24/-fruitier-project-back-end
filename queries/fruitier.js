const db = require("../db/dbConfig");

const getAllFruitier = async () => {
  try {
    const allFruitier = await db.any("SELECT * FROM fruitier");
    return allFruitier;
  } catch (error) {
    return error;
  }
};

const getOneFruit = async (fruitId) => {
   
  try {
    const oneFruit = await db.one(
      "SELECT * FROM fruitier WHERE fruitId=$1",
      fruitId
    );
    return oneFruit;
  } catch (error) {
    return error;
  }
};

// CREATE A FRUIT
const createNewFruit = async (fruitier) => {
    try {
        const newFruit = await db.one(
            "INSERT INTO fruitier (name, Taste, Color, Nutrition, Origin, Season) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [
              fruitier.name,
              fruitier.Taste,
                fruitier.Color,
                fruitier.Nutrition,
                fruitier.Origin,
                fruitier.Season
            ]
        )
            return newFruit;
  } catch (error) {
    return error;
  }
};


const updateAFruit = async (fruitId, fruitier) => {
  try {
    const updatedFruit = await db.one(
      "UPDATE fruitier SET name=$1, Taste=$2, Color=$3, Nutrition=$4, Origin=$5, Season=$6 WHERE FruitId=$7 RETURNING *",
      [
        fruitier.name,
        fruitier.Taste,
        fruitier.Color,
        fruitier.Nutrition,
        fruitier.Origin,
        fruitier.Season,
        fruitId,
      ]
    );
    return updatedFruit;
  } catch (error) {
    return error;
  }
};

const deleteAFruit = async (fruitId) => {
  try {
    const deletedFruit = await db.one(
      "DELETE FROM fruitier WHERE FruitId=$1 RETURNING *",
      fruitId
    );
    return deletedFruit;
  } catch (error) {
    return error;
  }
};




module.exports = {
  getAllFruitier,
  getOneFruit,
  createNewFruit,
  updateAFruit,
  deleteAFruit,
};

