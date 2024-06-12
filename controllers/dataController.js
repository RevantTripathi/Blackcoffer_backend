
const Data = require('../models/data');


const getData = async (req, res) => {
  try {
    
    const data = await Data.find();
    console.log("data retrived")
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getData,
}