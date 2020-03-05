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

      inquirer
        .prompt ([
          {
            message: "What is the tile of your project?",
            name: "title"
          },
          {
            message: "What is a brief description of your project?",
            name: "description"
          },
          {
            message: "Explain how your project is installed",
            name: "installation"
          },
          {
            message: "What will this project be used for?",
            name: "usage"
          },
          {
            message: "Enter a table of contents",
            name:"contents"
          },
          {
            message: "Who contributed to this project?",
            name: "contributing"
          },
          {
            message: "What tests were done on this project?",
            name: "tests"
          }
        ])
      })
    })
 })

  
