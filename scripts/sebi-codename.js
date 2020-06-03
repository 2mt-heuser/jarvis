/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Get a cool codename for your next project
//
// Configuration:
//   None
//
// Commands:
//   jarvis codename - Liste von codenamen für das nächste Projekt erhalten

const axios = require('axios');
const HTMLParser = require('node-html-parser');
const ruleMatch = /codename.*\s*$/i;

module.exports = (robot) => {
  robot.respond(ruleMatch, (res) => {
    res.finish();
    axios.get('https://futureboy.us/lookup/codename.pl?count=10')
      .then(response => {
        let html = HTMLParser.parse(response.data);
        let codenames = "";
        let rawCodenames = html.querySelector('HTML').querySelectorAll('P B');
        rawCodenames.forEach(function(item) {
          let codename = "* " + item.innerHTML.toLowerCase().replace(' ', '-') + "\n";
          codenames += codename;
        });
        console.log(codenames);

        let message = {
          props: {
            attachments: [
              {
                pretext: "Ich kann aktuell folgende Codenamen empfehlen:",
                text: codenames,
                color: "#22CC22"
              }
            ]
          }
        };
        res.reply(message);
      })
      .catch(error => {
        let message = {
          props: {
            attachments: [
              {
                text: "Leider fällt mir gerade kein guter Codename ein",
                color: "#CC2222"
              }
            ]
          }
        };
        res.reply(message);
        console.log(error);
      });
  });
};
