const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ response}) {
      fs.writeFile("username.json", JSON.stringify(response), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("it worked!");
        });
      });
  

