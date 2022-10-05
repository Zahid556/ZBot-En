import { ApplicationCommandData, ChatInputCommandInteraction, ContextMenuCommandInteraction } from "discord.js";

interface Cmd {
    data: ApplicationCommandData,
    execute(interaction: ChatInputCommandInteraction<"cached"> | ContextMenuCommandInteraction<"cached">): any
}

import { rankCommand } from "./rank";
import { leaderboardCommand } from "./leaderboard";
import { timeoutCommand } from "./timeout";
import { kickCommand } from "./kick";
import { banCommand } from "./ban";
import { tttCommand } from "./tictactoe";
import { gtwCommand } from "./guesstheword";
import { memoryGameCommand } from "./memorygame";
import { blacklistCommand } from "./blacklist";
import { reportCommand } from "./reportproblem";
import { pingCommand } from "./ping"
import { slowmodeCommand } from "./slowmode";
import { helpCommand } from "./help";
import { serverInfoCommand } from "./serverinfo";
import { inviteCommand } from "./invite";
import { updatesCommand } from "./updates";
import { userInfoCommand } from "./userinfo";
import { exchangeCommand } from "./exchange";
import { memberInfoCommand } from "./memberinfo";
import { balanceCommand } from "./balance";
import { depositCommand } from "./deposit";
import { withdrawCommand } from "./withdraw";
import { giveCommand } from "./givecoins";
import { ticketCommand } from "./ticket"
import { imageCommand } from "./image"

const tipsAndTricks = [
  /**
    * A bunch of secret tips and tricks you're not supposed to know.
    * You must pay attention to message embed footers and message responses - you never know, one of these tricks could pop up in one of them!
    * Want to know it all? You just have to be lucky to encounter all of them.
    * Every day this gets longer, so it gets harder to encounter all!
    * For now, just enjoy the source code.
  */
 'Coming soon!'
] as const

export {
    Cmd,
    rankCommand,
    leaderboardCommand,
    timeoutCommand,
    kickCommand,
    banCommand,
    tttCommand,
    gtwCommand,
    memoryGameCommand,
    blacklistCommand,
    reportCommand,
    pingCommand,
    slowmodeCommand,
    helpCommand,
    serverInfoCommand,
    inviteCommand,
    updatesCommand,
    userInfoCommand,
    exchangeCommand,
    tipsAndTricks,
    memberInfoCommand,
    balanceCommand,
    depositCommand,
    withdrawCommand,
    giveCommand,
    ticketCommand,
    imageCommand
}
