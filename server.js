const CyborgService = require('./service')
const {scheduleJob} = require('node-schedule')
const account = require('./account')

const initialCronJob = () => {
  const service = new CyborgService()
  
  // every hour
  scheduleJob('0 * * * *', async () => {
    console.log('[Cron job] spin cyborg telegame')
    account.map(async (item) => {
      await service.playLuckySpin(item.name, item.token)
    })
  })
}
module.exports = initialCronJob