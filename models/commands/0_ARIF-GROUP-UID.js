//ARIF-BABU-V2
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT ARIF BABU
module.exports.config = {
  name: "gid",        
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "THIS BOT IS MR ARIF BABU", 
  commandCategory: "group",
  usages: "gid",
  cooldowns: 5, 
  dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage("ID of this thread: "+event.threadID, event.threadID, event.messageID);
};