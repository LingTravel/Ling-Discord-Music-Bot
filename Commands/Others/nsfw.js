const { Command } = require("reconlx");
const { MessageEmbed } = require("discord.js");
const ee = require('../../settings/nsfw.json')
const config = require('../../settings/config.json')

module.exports = new Command({
    name: 'nsfw',
    description: `Not safe for work`,
    category : "Information",
    run: async ({ client, interaction, args }) => {
        interaction.followUp({
            embeds: [
                new MessageEmbed()
                    .setColor(ee.embed_color)
                    .setTitle(`Ok idk why i cant show images now, gave up.`)
                    .setFooter(ee.embed_footertext,ee.embed_footericon)
            ],
            ephemeral: true
        })
    }
})