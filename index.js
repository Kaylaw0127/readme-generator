const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username",
  })

  .then(function ({ username }) {
      fs.writeFile("username.json", JSON.stringify(username), function (err) {
        if (err) {
          return console.log(err);
        }
      
        console.log(username);

        const queryUrl = `https://api.github.com/users/${username}`;
        console.log(queryUrl)

        axios.get(queryUrl).then(function(userInfo){
          email = userInfo.data.email;
          picture = userInfo.data.avatar_url;
          console.log(email, picture);
        })
      })
    })

  
