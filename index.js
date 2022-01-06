var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
	console.log("Discord Status active")
	client.request('SET_ACTIVITY', {
	pid: process.pid,

	activity : {
	details : "YOUR TEXT",
		assets : {
			large_image : "image",
			large_text : "YOUR TEXT"},
			buttons : [{label : "BUTTON 1", url : "YOUR URL"}, {label : "BUTTON 2" , url : "YOUR URL"}]
			}
		})
	})

client.login({ clientId : "YOUR DISCORD CLIENT ID" }).catch(console.error);