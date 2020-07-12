const fs = require("fs");
const moment = require("moment");
const path = require("path");

//middleware sample
const logger = (req, res, next) => {
    //Create folder
    //Write file
    if (!fs.existsSync(path.join(__dirname, "logs.txt"))) {
      fs.writeFileSync(
        path.join(__dirname, "logs.txt"),
        `INITIAL LOG:${moment().format()}`
      );
      appendLog(req, res);
    } else {
      //Append if file exists
      appendLog(req, res);
    }
    next();
  };
  
  appendLog = function (req, res) {
      fs.appendFileSync(
        path.join(__dirname, "logs.txt"),
        `\n-->${req.protocol}://${req.get("host")}${
          req.originalUrl
        }--${moment().format()}`
      );
    };

    module.exports = logger;