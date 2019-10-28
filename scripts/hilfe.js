'use strict';

// Description:
//   Generates help commands for Hubot.
//
// Commands:
//   hubot hilfe - Zeigt alle verfügbaren Befehle an
//
//

/* global renamedHelpCommands */

module.exports = (robot) => {

  let getHelpCommands = function getHelpCommands(robot) {
    let helpCommands = robot.helpCommands()

    const robotName = robot.alias || robot.name

    helpCommands = helpCommands.map((command) => {
      if (robotName.length === 1) {
        return command.replace(/^hubot\s*/i, robotName)
      }

      return command.replace(/^hubot/i, robotName)
    });

    return helpCommands.sort()
  };

  robot.respond(/hilfe$/i, (msg) => {
    let cmds = getHelpCommands(robot);
    const emit = cmds.join('\n');
    return msg.send(emit)

  });
};
