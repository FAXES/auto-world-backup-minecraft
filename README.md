# Automatic Minecraft World Backups
Are you running a Minecraft server for your mates and would like to automatically perform a backup of the world every so often? This simple node package might be perfect for you.

---

## Installation
Before installing ensure you have Node.Js installed along with its package manager NPM to ensure it can fully work.

It's also recommended to use this with screen or another alternative software to ensure the program keeps running.
It can be installed anywhere and ran from anywhere that your operating system permits.

---

### Changing Backup Period
By default there's a few options to set the backup to which is in worded format, or a custom timefram can be set.

### Example configuration file:
```js
CONFIG = {
    // This can be any of the following, or in schedule format for 'node-schedule'.
    // daily
    // 12hours
    // 6hours
    // bi-hourly
    // hourly
    period: 'daily',

    directory: '/home/minecraft', // The minecraft servers root directory
    world: 'world', // This is the world/save folders name that you'd like to backup
    backupdirectory: '/home/minecraft-backups' // This is the directory you'd like to place the zipped back-up in
}
```

Let us know of any dramas if there's any issues with it, or make a PR to improve!
