const { MessageActionRow, MessageMenuOption, MessageMenu } = require('discord-buttons');
const { MessageEmbed, Client } = require('discord.js');
const { client } = require('../v13/giveaways');
class dropdownroles { 
	constructor() {
		this.roles = [];
		return this;
	}
	// /**
	//  *
	//  * @param {Client} client
	//  * @param {Object} options
	//  */
	// async Messages(client, options) {
	// 	this.client = client;
	// 	client.customMessages.dropdownrolesMessages = merge(defaultManagerOptions, options);
	// }
	/**
	 *
	 * @param {String} label - dropdown label
	 * @param {String} emoji - The emoji id [optional]
	 * @param {String} role - The role id
	 */
	addrole({ label, emoji, role }) {
		if (!label) throw new Error('please provide the dropdown label!');
		if (!emoji) emoji = null;
		if (!role) throw new Error('please provide a role!');
		this.roles.push({ label: label, emoji: emoji, role: role });
		return this;
	}
	toJSON() { return { roles: this.roles }; }

	/**
 *
 * @param {Message} message - The Discord Message
 * @param {String} content - The Discord send data, can be an embed or string
 * @param {String} role - The role ID of the role
 * @param {String} channelID - The channel ID that will be recieving the dropdown
 */
	static async create(client, { content, role, channelID }) {
		if (!client) throw new TypeError('Provide the Discord Client');
		// if(!message.client.customMessages || !message.client.customMessages.dropdownrolesMessages) message.client.customMessages.dropdownrolesMessages = defaultManagerOptions;
		if(!content) throw new Error('please provide content!');
		if(!role) throw new Error('role not provided!');
		if(!channelID) throw new Error('channel ID not provided!');
		const dropdownsOptions = [];
		// Promise.resolve(role).then(console.log);
		// console.log(role);
		for (const buttonObject of role.roles) {
			dropdownsOptions.push(new MessageMenuOption().setEmoji(buttonObject.emoji).setLabel(buttonObject.label).setValue(buttonObject.role).setDescription(`click this to get the ${message.guild.roles.cache.get(buttonObject.role).name} role!`.substr(0, 50)));
		}

		const dropdown = new MessageMenu().setID('dr');
		dropdown.options = dropdownsOptions;
		// console.log(dropdown);
		const row = new MessageActionRow().addComponent(dropdown);
		if(typeof content === 'object') {
			client.channels.cache.get(channelID).send({ embed: content, components: [row] })
		} else {
			client.channels.cache.get(channelID).send(content, { components: [row] });
		}
	}
}

module.exports = dropdownroles;