const { Command } = require("reconlx");
const { MessageEmbed } = require("discord.js");
const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')

module.exports = new Command({
    // options
    name: 'fuck',
    description: `:)`,
    category : "Information",
    // command start
    run: async ({ client, interaction, args }) => {
        interaction.followUp({
            embeds: [
                new MessageEmbed()
                    .setColor(ee.embed_color)
                    .setTitle(`Fuck Yourself.`)
            ],
            ephemeral: true
        })
    }
})