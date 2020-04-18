const mongoose = require("mongoose");
// Formato que tendra nuestra info en MongoDB
const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    require: true,
  },
  date: Date,
});

/* MODEL: Este es el squema, todo lo que se creea tenga este schema y se guarde en la DB con este nombre
 */

const model = mongoose.model("Mensaje", mySchema);
module.exports = model;
