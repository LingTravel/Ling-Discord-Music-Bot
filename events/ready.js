const client = require("..");

client.on('ready', () => {
    console.log(`${client.user.username} Is Online`);
    client.user.setActivity(`NotLing.exe`,{type : "Playing", url : "https://discord.gg/HV6rgQrTsH"});
})