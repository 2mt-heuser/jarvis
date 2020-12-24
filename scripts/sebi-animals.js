/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Get an animalistic password via DM
//
// Configuration:
//   None
//
// Commands:
//   jarvis gib mir tiernamen! - Tierisches Passwort via PM erhalten.

const ruleMatch = /.*tiernamen\s*$/i;

const animals = [
  'Hund',
  'Katze',
  'Maus',
  'Pferd',
  'Esel',
  'Elefant',
  'Gazelle',
  'Giraffe',
  'Löwe',
  'Tiger',
  'Leopard',
  'Fisch',
  'Hai',
  'Rentier',
  'Affe',
  'Lama',
  'Ziege',
  'Elch',
  'Biene',
  'Bär',
  'Biber',
  'Frosch',
  'Leguan',
  'Adler',
  'Taube',
  'Luchs',
  'Koala',
  'Otter',
  'Spinne',
  'Wolf',
  'Gekko',
  'Frettchen',
  'Wombat',
  'Fledermaus',
  'Falke',
  'Libelle',
  'Drache',
  'Beo',
  'Dachs',
  'Wutz',
  'Zebra',
  'Hyäne',
  'Qualle',
  'Yak',
  'Natter',
  'Uhu',
  'Rochen',
  'Igel',
  'Marder',
  'Guppy',
  'Koralle',
  'Hummel',
  'Gorilla',
  'Hamster',
  'Gremlin',
  'Geier',
];

let remaining = animals.splice();
let pwd = '';

module.exports = (robot) => {
  robot.respond(ruleMatch, (response) => {
    response.finish();

    for (let i = 0; i < 3; i += 1) {
      let position = Math.floor(Math.random() * remaining.length);
      pwd += remaining[position];
      remaining.splice(position, 1);
    }

    let message = {
      props: {
        attachments: [
          {
            text: pwd,
            color: '#AA0000',
          },
        ],
      },
    };
    response.envelope.room = response.message.user.name;
    response.send(message);
  });
};
