const express = require("express");
const express = require("cors");
const app = express();

const sequelize = require('./config/db');
const User = require('./models/User');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())
app.use(routes)

//testing connection
async function testConnection(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    //{force: true} This creates the table, dropping it first if it already existed
    await User.sync({alter: true})
    console.log('All model synchronize successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection()
app.listen(PORT, () => {
  console.log("tes jalan", PORT);
})