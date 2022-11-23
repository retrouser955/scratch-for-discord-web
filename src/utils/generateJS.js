import javascript from "blockly/javascript"

const generateJSCode = (workspace) => {
    const boilerplate = `(async () => {
        const {
            Client,
            GatewayIntentsBits
        } = require("discord.js")

        const s4dOBJ = {}
        const s4dIntents = []
        for(let key in GatewayIntentsBits) {
            s4dIntents.push(GatewayIntentsBits[key])
        }
        s4dOBJ.client = new Client({
            intents: s4dIntents
        })

        ${javascript.javascriptGenerator.workspaceToCode(workspace)}
    })()`
    return boilerplate
}

export default generateJSCode