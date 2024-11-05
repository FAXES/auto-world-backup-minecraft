// Config //

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

const fs = require('fs'), AdmZip = require("adm-zip"), schedule = require('node-schedule');
process.title = 'MC Backup';
console.log('MCBackup Started')

let period = '0 0 * * *' // daily
switch (CONFIG.period) {
    case '12hours':
        period = '0 */12 * * *'
        break;

    case '6hours':
        period = '0 */6 * * *'
        break;

    case 'bi-hourly':
        period = '0 */2 * * *'
        break;

    case 'hourly':
        period = '0 * * * *'
        break;

    default:
        period = '0 0 * * *'
        break;
}

schedule.scheduleJob(period, function() {
    let createdAt = Date.now();
    let zip = new AdmZip();
    zip.addLocalFolder(`${CONFIG.directory}/${CONFIG.world}`);
    zip.writeZip(`${CONFIG.backupdirectory}/${CONFIG.world}-${createdAt}.zip`);
    console.log(`Performed a backup for ${CONFIG.world}. Took ${Date.now() - createdAt} ms.`)
});
