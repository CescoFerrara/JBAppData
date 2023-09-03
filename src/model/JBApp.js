import mongoose from "mongoose";

const JBAppSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    salary_range: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },

});


const JBApp = mongoose.model("JBApp", JBAppSchema);

export default JBApp;