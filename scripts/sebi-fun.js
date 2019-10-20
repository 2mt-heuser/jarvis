/// <reference path="../../typings/node/node.d.ts"/>
// Description
// Have fun :)

const likeSebi = /sebi/i;

module.exports = (robot) => {
  robot.hear(likeSebi, (res) => {
    res.robot.adapter.client.react(res.message.id, 'heart_eyes');
  });
};
