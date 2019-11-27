/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Get greeted in the morning
//
// Configuration:
//   None
//
// Commands:
//   jarvis guten morgen - STOP! coffee time.

const ruleMatch = /guten.*morgen.*\s*$/i;

const greetings = [
  "Ein jeder Morgen stellt die Weichen, um das tagesziel zu erreichen.",
  "Das beste Mittel jeden Tag gut zu beginnen ist, beim Erwachen daran zu denken,  ob man nicht wenigstens einem Menschen an diesem Tage eine Freude machen könnte. – Friedrich Wilhelm Nietzsche",
  "Guten Morgen mein Freund. Was stellen wir heute wieder dummes an?",
  "Wer am Morgen zerknittert aufsteht, hat am Tag die besten Entfaltungsmöglichkeiten!",
  "Guten Morgen! Hoffe du hast auch gut geschlafen…",
  "Verlieren Sie eine Stunde am Morgen, und Sie werden den ganzen Tag damit verbringen, danach zu suchen. – Richard Whately",
  "Jeder Morgen bringt neue Möglichkeiten, aber wenn man sich auf das Unglück des Vortages konzentriert, übersieht man die enormen Möglichkeiten. – Harvey Mackay",
  "Nach jedem guten Schlaf, folgt ein noch besserer Morgen.",
  "Wer am Morgen mit zu viel Elan in den Tag startet, kommt schneller an seinem Ende an, als einem manchmal vielleicht lieb ist.",
  "Carpe Diem – Nutze den Tag. Denn jeder Tag bringt neue Chancen.",
  "Ich bin „wach“. Mehr möchte ich zu meinem derzeitigen Zustand nicht sagen.",
  "Es heißt ja nur „Guten Morgen“, weil „Halt die Fresse!“ gesellschaftlich nicht so akzeptiert ist.",
  "Guten Morgen!  Der Tag versaut sich nicht von alleine.",
  "Guten Morgen! Wach? Nein! Wir nennen es „Ansprechbar und in der Lage, über die Uhrzeit zu jammern.“",
  "Im Namen des Weckers, des Kaffees und des heiligen Morgenmuffels. Guten Morgen!",
  "Guten Morgen ist umgezogen, er lebt jetzt mit gute Laune und schöner Tag in einem Land vor unserer Zeit.",
  "Ich liebe unsere Kaffeemaschine, weil die morgens einfach die Fresse hält.",
  "Das Gähnen am Morgen ist ein Schrei nach Kaffee. Also rein damit, ich wünsch dir einen guten Start in den Tag!",
  "Guten Morgen! Eine Runde Kaffee für alle meine Freunde bitte!",
  "Guten Morgen! Wie trinkst Du Deinen Kaffee? Ständig!",
  "Guten Morgen! Der Kaffee läuft schon. Sportlicher wird es heute aber nicht."
];

module.exports = (robot) => {
  robot.respond(ruleMatch, (res) => {
    res.finish();
    let greeting = greetings[Math.floor(Math.random() * greetings.length)];
    res.reply(greeting);
  });
};
