const { Command } = require("reconlx");
const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')
const player = require('../../handlers/player')
module.exports = new Command({
  // options
  name: 'stop',
  description: `Stop a Song`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Music",
  // command start
  run: async ({ client, interaction, args }) => {
    let member = interaction.guild.members.cache.get(interaction.member.id)
    let channel = member.voice.channel;
    if (!channel) {
      return interaction.followUp(`You Need to Join Voice Channel`)
    }
    let queue = player.getQueue(interaction.guild.id)
    if (!queue.songs) {
      return interaction.followUp(`No Songs in Queue`)
    }
    distube.on('disconnect', (queue) => {
    queue.textChannel.send(`Song Ended`)
    } )
  }
})