/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Get a random rule from zombieland
//
// Configuration:
//   None
//
// Commands:
//   jarvis wie überlebt man in zombieland? - Cardio!

const ruleMatch = /wie.*überlebt.*zombieland.*\?\s*$/i;

const rules = [
  "**Regel 1**: Fitness",
  "**Regel 2**: Vorsicht auf Toiletten",
  "**Regel 3**: Anschnallen",
  "**Regel 4**: Doppelt hält besser",
  "**Regel 5**: Keine Angehörigen",
  "**Regel 6**: Reise in der Gruppe",
  "**Regel 7**: Hab Idioten in Deiner Nähe",
  "**Regel 8**: Töte effizient",
  "**Regel 9**: Eine Keule muss nicht nachgeladen werden",
  "**Regel 10**: Mach keinen Lärm",
  "**Regel 15**: Halte Dir einen Ausgang frei",
  "**Regel 17**: Spiel nicht den Helden",
  "**Regel 18**: Aufwärmen nicht vergessen",
  "**Regel 19**: Verkleide Dich als Zombie",
  "**Regel 20**: Finde den richtigen Unterschlupf – am besten direkt neben dem Fluchtauto",
  "**Regel 21**: Vermeide  Strip-Clubs",
  "**Regel 22**: Sei gnadenlos",
  "**Regel 23**: God schütze die Rednecks – Sie locken Zombies an und sind bewaffnet",
  "**Regel 24**: Kein Alkohol – mit einem Kater überlebst Du nicht",
  "**Regel 31**: Kontrolliere den Rücksitz",
  "**Regel 32**: Genieße die kleinen Dinge"
];

module.exports = (robot) => {
  robot.respond(ruleMatch, (res) => {
    res.finish();
    let rule = rules[Math.floor(Math.random() * rules.length)];

    let message = {
      props: {
        attachments: [
          {
            author_name: "Columbus",
            author_icon: "https://vignette.wikia.nocookie.net/zombielandmovie/images/d/d7/Columbus.jpg/revision/latest?cb=20111113223554",
            text: rule,
            color: "#AAFFAA"
          }
        ]
      }
    };


    res.reply(message);
  });
};
