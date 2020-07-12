const express = require("express");
const path = require("path");
const fs = require("fs");
const members = require("./Members");
const logger = require("./middleware/logger"); 

const app = express();
const PORT = process.env.PORT || 5000;

//sample middleware
app.use(logger);

//set static folder, it servers files directly from the folder
app.use(express.static(path.join(__dirname, "public")));

//sample use of routes, uses routes on routes/api/members
app.use('/api/members',require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
