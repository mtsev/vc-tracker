# Discord Voice Channel Activity Tracker
Look mate I'm bloody tired of whichever asshole keeps joining and leaving voice channels just to be a bloody troll. Said person joining breadsoc vc, making noise, then fucking off all within the span of 10 bloody seconds today was the final straw. Do what you will with this code.

## Installation
Download the source code from the [latest release](https://github.com/mtsev/vc-tracker/releases/latest).

This bot requires Node.js 12.x or higher to run. You can use a process manager such as tmux to keep the bot running in the background.
```sh
$ tmux new -s vc-tracker
$ npm install
$ npm start

```

Logs will be saved to `vc-tracker.log`

On Discord, the bot requires permissions integer `68608` and privileged gateway intents `presence intent`.

## Configuration
Make a file `config.json` with the following content:

```json
{
    "prefix": "bot_prefix",
    "token": "bot_token"
}
```
* `bot_prefix` is a string to precede bot commands
* `bot_token` is the Discord bot token. Get this from the [Discord Developer Portal](https://discordapp.com/developers/applications/)
