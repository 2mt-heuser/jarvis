/// <reference path="../../typings/node/node.d.ts"/>
// Description
// Get a farewell quote for the evening
//
// Configuration:
//   None
//
// Commands:
//   jarvis schönen feierabend - Have a nice weekend!

const ruleMatch = /schönen.*feierabend.*\s*$/i;

const farewell = [
  "Feierabend ist erst, wenn ich meine Jogginghose anhabe!",
  "Ich wäre jetzt bereit für Feierabend, oder besser Wochenende oder noch besser Urlaub. Ach, was sage ich ? Rente! Ja, Rente wäre schön.",
  "Die Ehre hat gesetzlichen Anspruch auf Feierabend und Pension.",
  "Feierabend! Jetzt erst mal einen Hopfensmoothie!",
  "Freizeit besteht nicht im Nichtstun sondern in dem, was wir sonst nicht tun.",
  "Stell dir vor, es ist Feierabend und keiner will heim.",
  "Freizeitgestaltung: Liberté - Egalité - Jagertee.",
  "Freizeit und Kaviar schmecken in kleinen Portionen am besten.",
  "Die meiste Freizeit hat, wer eine Arbeit hat, die Spaß macht.",
  "Freie Zeit ist faktisch nutzlos –- sinnlos ist sie aber nicht."
];

module.exports = (robot) => {
  robot.respond(ruleMatch, (res) => {
    res.finish();
    let farewell = farewell[Math.floor(Math.random() * farewell.length)];
    res.reply(farewell);
  });
};
