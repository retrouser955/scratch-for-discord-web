import { javascriptGenerator } from 'blockly/javascript'
import Blockly from "blockly"

const generateCode = (isMessageCommand, prefix) => {
    const mainWorkspace = localStorage.getItem("index")

    let handler;

    const headlessWorkspace = new Blockly.Workspace()

    Blockly.serialization.workspaces.load(JSON.parse(mainWorkspace), headlessWorkspace)
    
    if(isMessageCommand) {
        handler = `client.on("messageCreate", async (message) => {
            if(!message.content.startsWith("${prefix}")) return

            const args = message.content.split(" ")
            const command = args.splice(0, 1)

            if(client.commands.has(command)) {
                client.commands.get(command).run(client, message, args)
            }
        })`
    } else {
        handler = `client.on("interactionCreate", async (ctx) => {
            if(ctx.type != InteractionType.ApplicationCommand) return

            client.commands.get(ctx.commandName).run(client, ctx)
        })`
    }

    const localStorageDeepCopy = { ...localStorage }

    delete localStorageDeepCopy.index

    const commandFiles = Object.keys(localStorageDeepCopy)

    const index = `(async () => {
        const { Client, GatewayIntentBits, Collection${isMessageCommand ? ", InteractionType" : ""} } = require("discord.js")
        const fs = require('fs')
        const client = new Client(
            intents: [...Object.values(GatewayIntentBits)]
        )

        client.commands = new Collection()

        const commandFiles = fs.readFileSync('./commands').filter((file) => file.endsWith('.js'))

        for(let cmd in commandFiles) {
            const command = require(\`./commands/\${cmd}\`)

            client.commands.set(command.name, command)

            console.log(\`⏱️ | Loaded \${cmd}\`)
        }

        ${handler}

        ${javascriptGenerator.workspaceToCode(headlessWorkspace)}

        client.login("${localStorage.getItem("token")}").then(() => console.log(\`\${client.user.tag} is alive!\`))
    })
    `

    let commands = {}

    for(let key of commandFiles) {
        const json = localStorageDeepCopy[key]

        console.log(json)

        Blockly.serialization.workspaces.load(JSON.parse(json), headlessWorkspace)

        const code = `module.exports = {
            name: "${key}",
            async run(client, ${isMessageCommand ? "message, args" : "interaction"}) {
                ${javascriptGenerator.workspaceToCode(headlessWorkspace)}
            }
        }`

        commands[key] = code
    }

    const files = {
        index: index,
        commands: commands
    }

    return files
}

export default generateCode