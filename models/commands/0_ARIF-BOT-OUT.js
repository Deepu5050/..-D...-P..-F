//ARIF-BABU-V2
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT ARIF BABU
module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "ARIF BABU",
    description: "THIS BOT IS MR ARIF BABU",
    commandCategory: "BOT ADMIN ONLY",
    usages: "out",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}