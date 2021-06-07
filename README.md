## @void206551/mwl-api

A Node wrapper for [MyWaifuList](https://mywaifulist.moe/).

Install:

```bash
npm i @void206551/mwl-api --save
```

Usage:

```javascript
const MWL = require('@void206551/mwl-api')
const Waifu = new MWL("Your API Key")

(async function () {
	// Logs the daily waifu
	await Waifu.dailyWaifu().then(console.log).catch(console.error)
})
```