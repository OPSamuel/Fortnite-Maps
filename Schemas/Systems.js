const { model, Schema } = require("mongoose")

module.exports = model(
    "Systems",
    new Schema({
        Guild_Name: String,
        Guild_ID: String,
        Commands: Boolean,
        SlashCommands: Boolean,
        UserWhitelist: String,
    })
)