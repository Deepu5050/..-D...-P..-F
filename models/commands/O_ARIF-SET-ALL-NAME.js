//ARIF-BABU-V2
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT ARIF BABU
module.exports.config = {
 name: "set",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "ARIF BABU",
 description: "Set nicknames all tv",
 commandCategory: "other",
 usages: "setall [name]",
 cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
 var threadInfo = await api.getThreadInfo(event.threadID)
    var idtv = threadInfo.participantIDs
 console.log(threadInfo)
 const name = args.join(" ")
 function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    for(let setname of idtv) {
 await delay(3000)
 api.changeNickname(`${name}`, event.threadID, setname);
    }
}