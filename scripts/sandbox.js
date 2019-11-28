/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Random stuff to try out / in development / WIP

module.exports = (robot) => {
  robot.respond(/test/, (res) => {
    let channel = robot.adapter.client.findChannelByName('botspam');
    res.finish();
    res.envelope.room = channel.id;
    res.reply('test');
  });
  // robot.respond(/guten morgen/i, (res) => {
  //   res.finish();
  //   let user = robot.brain.data.users[res.message.user.name.toLowerCase()];
  //   res.reply('Dir auch einen guten Morgen @' + JSON.stringify(user));
  // });

  robot.respond(/edit/, (res) => {
    res.finish();
    let message = {
      props: {
        attachments: [
          {
            text: "...",
            color: "#FF8000",
            pretext: "Gathering intel."
          }
        ]
      }
    };
    message.id = '18uze3xcop8k5pazh91kkjmsre';
    message.message = '';
    message.props.attachments[0].pretext = "Status";
    message.props.attachments[0].text = "__Done!__";
    res.robot.adapter.client.editPost('18uze3xcop8k5pazh91kkjmsre', message)
  });
};
