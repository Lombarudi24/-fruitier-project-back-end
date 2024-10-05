const db = require("../db/dbConfig");

const getAllFruits = async () => {
  try {
          const allFruits = await db.any("SELECT * FROM fruits");
          return allFruits
  } catch (error) {
          return error
  }
};

const getOneFruit = async (fruitId) => {
   
  try {
    const oneFruit = await db.one("SELECT * FROM fruits WHERE fruitId=$1", fruitId)
    return oneFruit
  } catch (error) {
    return error
  }
};

// CREATE A FRUIT
const createNewFruit = async (fruit) => {
    try {
        const newFruit = await db.one(
          "INSERT INTO fruits (name, Taste, Color, Nutrition, Season, Origin, images) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
          [
            fruit.name,
            fruit.images,
            fruit.Taste,
            fruit.Color,
            fruit.Nutrition,
            fruit.Origin,
            fruit.Season,
          ]
        );
            return newFruit
  } catch (error) {
    return error
  }
}


const updateAFruit = async (fruitId, fruit) => {
  try {
    const updatedFruit = await db.one(
      "UPDATE fruits SET name=$1, Taste=$2, Color=$3, Nutrition=$4, Season=$5, Origin=$6, Images=$7  WHERE fruitId=$8 RETURNING *",
      [
        fruit.name,
        fruit.Images,
        fruit.Taste,
        fruit.Color,
        fruit.Nutrition,
        fruit.Origin,
        fruit.Season,
        fruitId
      ]
    )
    return updatedFruit
  } catch (error) {
    return error
  }
}

const deleteAFruit = async (fruitId) => {
  try {
    const deletedFruit = await db.one(
      "DELETE FROM fruits WHERE fruitId=$1 RETURNING *", fruitId)
    return deletedFruit
  } catch (error) {
    return error
  }
}




module.exports = {
  getAllFruits,
  getOneFruit,
  createNewFruit,
  updateAFruit,
  deleteAFruit
}

