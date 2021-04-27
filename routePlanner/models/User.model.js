const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username : String,
    password : String,
    favorite : [{
        type : Schema.Types.ObjectId,
        ref: 'Trip'
    }],
    reviews: [
        {
          user: String,
          comments: String
        }
      ]
});

const User = model("User", userSchema);

module.exports = User;
