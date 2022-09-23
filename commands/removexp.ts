import { ApplicationCommandOptionType, bold, ChatInputCommandInteraction, inlineCode } from "discord.js"
import { BlacklistModel, LevelModel } from "../database"
import { Cmd } from "./command-exports"

const removeXPCommand: Cmd = {
    data: {
        name: 'remove-xp',
        description: 'Remove XP from someone! (only bot owner can use this)',
        options: [
            {
                name: 'user',
                description: 'The user to remove XP from',
                type: ApplicationCommandOptionType.User,
                required: true
            },
            {
                name: 'xp',
                description: 'The amount of XP to remove from the user',
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ],
        dmPermission: false
    },
    async execute(interaction: ChatInputCommandInteraction<"cached">) {
        if (interaction.user.id !== '786984851014025286') return await interaction.reply({
            content: 'Only the owner can use this command!',
            ephemeral: true
        })

        const user = interaction.options.getUser('user', true)
        const xp = interaction.options.getNumber('xp', true)

        if (!user) return await interaction.reply({
            content: 'Couldn\'t find that user.',
            ephemeral: true
        })

        const isUserBlacklisted = await BlacklistModel.findOne({
            where: {
                id: user.id
            }
        })

        if (isUserBlacklisted) return await interaction.reply({
            content: 'This user is blacklisted.',
            ephemeral: true
        })

        const userRank = await LevelModel.findOne({
            where: {
                id: user.id
            }
        }) || await LevelModel.create({
            id: user.id,
            lvl: 0,
            xp: 0
        })

        userRank.increment({
            xp: -xp
        })
        .then(async () => {
            try {
                await interaction.reply(`${user} ${bold(`${inlineCode(xp.toString())} XP`)} has been taken away from you.`)
            } finally {
                return
            }
        })
        .catch(async () => {
            try {
                await interaction.reply({ content: 'An error occured.', ephemeral: true })
            } finally {
                return
            }
        })
    }
}

export {
    removeXPCommand
}