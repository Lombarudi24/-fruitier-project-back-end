const express = require("express");

const fruits = express.Router();

const {
  getAllFruits,
  getOneFruit,
  createNewFruit,
  updateAFruit,
  deleteAFruit
} = require("../queries/fruitier")




// 
fruits.get("/", async (req, res) => {
  const allFruits = await getAllFruits();
  if (allFruits[0]) {
    res.status(200).json(allFruits)
  } else {
    res.status(500).json({ error: `Internal Server Error` })
  }
});

// Show/Get one of Fruits
// ':id' means the path gets a variable as the parameter

fruits.get(`/:id`, async (req, res) => {
  // const id = req.params.id
  // try {
  //   const oneFruit = await getOneFruit(id)
  //   res.status(200).json(oneFruit)
  // } catch (error) {
  //   res.status(404).json({ error: `Fruit not found` })
  // }

   const { id } = req.params;
   const oneFruit = await getOneFruit(id);
   if (oneFruit) {
     res.json(oneFruit);
   } else {
     res.status(404).json({ error: " Fruit not found" });
   }
})

//Post (create) a new fruit to the fruitier!
fruits.post("/", async (req, res) => {
  const body = req.body
  try {
    const createANewFruit = await createNewFruit(body)
    res.json(createANewFruit)
  } catch (error) {
    res.status(404).json({ error: `The fruit have not been created ` })
  }
})


//Update an existing fruit

fruits.put(`/:fruitId`, async (req, res) => {
  const id = req.params.fruitId
  const body = req.body
  try {
    const updatedFruit = await updateAFruit(id, body)
    res.status(200).json(updatedFruit)
  } catch (error) {
    res
      .status(404)
      .json({ error: `The fruit with the ${id}, has not been updated` })
  }
})

// DELETE an individual resource
fruits.delete("/:fruitId", async (req, res) => {
  const id = req.params.fruitId
  try {
    const deletedAFruit = await deleteAFruit(id)
    res.status(200).json(deletedAFruit)
  } catch (error) {
    res
      .status(404)
      .json({ error: `The fruit with an Id of: ${id}, has been deleted` })
  }
})





module.exports = fruits;
