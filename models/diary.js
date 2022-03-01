const { default: mongoose } = require("mongoose");
const monggose = require("mongoose");

const diaryEntrySchema = new mongoose.Schema({
    title: {type: String,  require: true},
    content: {type: String,  require: true},
    date: {type: Date, default: Date.now}
});


const DiaryEntry = mongoose.model("DiaryEntry",  diaryEntrySchema);

exports.DiaryEntry = DiaryEntry;