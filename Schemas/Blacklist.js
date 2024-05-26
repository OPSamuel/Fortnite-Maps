const { model, Schema } = require("mongoose")

module.exports = model(
    "Blacklist",
    new Schema({
        Guild_Name: String,
        Guild_ID: String,
        Staff_Name: String,
        Staff_ID: String,
        Member_Name: String,
        Member_ID: String,
        Reason: String,
    })
)