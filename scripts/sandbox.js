/// <reference path="../../typings/node/node.d.ts"/>
// Description
//  Random stuff to try out / in development / WIP

module.exports = (robot) => {
  robot.respond(/attach/, (res) => {
    res.finish();
    let message = {
      props: {
        attachments: [
          {
            text: "test-attachment",
            color: "#FF8000",
            pretext: "this is the attachments pretext"
          },
          {
            text: "test-attachment #2",
            color: "#08AA99",
            pretext: "this is another attachments pretext"
          }
        ]
      }
    };
    res.reply(message);
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
