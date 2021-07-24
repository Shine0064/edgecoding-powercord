const { Plugin } = require('powercord/entities');

module.exports = class Edgecode extends Plugin {
    startPlugin () {
        powercord.api.commands.registerCommand({
            command: "edgecode",
            description: "Edgecode some text",
            usage: "{c} <text to be edgecoded>",
            executor: (args) => {

                if(args.length == 0) return {
                    send: false,
                    result: "No text to encode provided!"
                }

                var encoded = require("./Util/Encoding.js").edgeEncode(args.join(" "))
                
                return {
                    send: true,
                    result: encoded
                }

            }
        });

        powercord.api.commands.registerCommand({
            command: "deedgecode",
            description: "Deedgecode some edgecoded text",
            usage: "{c} <text to be deedgecoded>",
            executor: (args) => {

                if(args.length == 0) return {
                    send: false,
                    result: "No text to encode provided!"
                }

                var decoded = require("./Util/Decoding.js").edgeDecode(args.join(" "))
                
                return {
                    send: false,
                    result: "```\n"+decoded+"\n```"
                }

            }
        });
    }

    pluginWillUnload() {
        powercord.api.commands.unregisterCommand("edgecode");
        powercord.api.commands.unregisterCommand("deedgecode");
    }
}
