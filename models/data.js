const mongoose =  require('mongoose')

const dataSchema = new mongoose.Schema({
    
    // end_year: Number,
    // intensity: Number,
    // sector: String,
    // topic: String,
    // insight: String,
    // url: String,
    // region: String,
    // start_year: Number,
    // impact: Number,
    // added: String,
    // published: String,
    // country: String,
    // relevance: Number,
    // pestle: String,
    // source: String,
    // title: String,
    // likelihood:String,
    name: String,
    Age: Number,



});

module.exports = mongoose.model("Data", dataSchema);