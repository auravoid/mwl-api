## @void206551/mwl-api

A Node wrapper for [MyWaifuList](https://mywaifulist.moe/).

### Install:

```bash  
npm i @void206551/mwl-api --save  
```  

### Usage:

```javascript  
const MWL = require('@void206551/mwl-api')  
const Waifu = new MWL("Your API Key")  
  
// Logs the daily waifu  
Waifu.dailyWaifu().then(console.log).catch(console.error)  
```  

### Functions:

#### Waifu

- `getWaifu(slugOrId)` → Gets the information about a waifu
- `getWaifuImages(slugOrId)` → Returns up to 10 images of a waifu
- `getWaifuByPage(letter, page)` → Gets a list of waifus from a given letter and page
- `dailyWaifu()` → Returns the daily waifu
- `randomWaifu()` → Returns a random waifu

#### Currently Season

- `getAiring()` → Gets all the currently airing shows
- `getBestWaifus()` → Gets all the best waifus from this season
- `getPopularWaifus()` → Gets the most popular waifus from this season
- `getTrashWaifus()` → Gets the most trashed waifus form this season

#### Series

- `getSeries(slurOrId)` → Gets information about a series
- `getSeriesByPage(letter)` → Gets a list of series from a certain letter
- `getSeriesBySeason(season, year)` → Gets a list of series that aired during a certin season of a year
    - `season`: `spring`, `summer`, `fall`, `winter`
- `getSeriesWaifus(slugOrId)` → Gets the waifus from a certain series from a slur or ID

#### User

- `getUser(userId)` → Gets the information from a user
- `getUserWaifus(userId, type)` → Gets the waifus from a user
    - `type`: `trash`, `like`, `created`
- `getUserLists(userId)` → Gets the lists a user has
- `getUserList(userId, listId)` → Gets the data from a list

#### Search

- `search(string)` → Search a string
- `searchBeta(string)` → Search a string (Better results)
- `searchWaifu(name)` → Search a waifu name
- `searchSeries(name)` → Search a series name
