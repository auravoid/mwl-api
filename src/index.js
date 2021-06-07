const got = require('got')
const host = 'https://mywaifulist.moe/api/v1/'

module.exports = function (apiKey) {
  // Waifu
  async function getWaifu (slugOrId) {
    try {
      const { body } = await got(host + 'waifu/' + slugOrId, {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getWaifuImages (slugOrId) {
    try {
      const { body } = await got(host + 'waifu/' + slugOrId + '/images', {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getWaifuByPage (letter, page) {
    try {
      const { body } = await got(
        host + 'waifu' + `?letter=${letter}&page=${page}`,
        {
          headers: {
            apiKey: apiKey
          }
        }
      )
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function dailyWaifu () {
    try {
      const { body } = await got(host + 'meta/daily', {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function randomWaifu () {
    try {
      const { body } = await got(host + 'meta/random', {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  // Current Season
  async function getAiring () {
    try {
      const { body } = await got(host + 'airing', {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getBestWaifus () {
    try {
      const { body } = await got(host + 'airing/best', {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getPopularWaifus () {
    try {
      const { body } = await got(host + 'airing/popular', {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getTrashWaifus () {
    try {
      const { body } = await got(host + 'airing/trash', {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  // Series
  async function getSeries (slugOrId) {
    try {
      const { body } = await got(host + 'series/' + slugOrId, {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getSeriesByPage (letter) {
    try {
      const { body } = await got(host + 'series/' + `?letter=${letter}`, {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getSeriesBySeason (season, year) {
    try {
      const { body } = await got(host + `airing/${season}/${year.toString()}`, {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getSeriesWaifus (slugOrId) {
    try {
      const { body } = await got(host + `airing/${slugOrId}/waifus`, {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  // User
  async function getUser (userId) {
    try {
      const { body } = await got(host + 'user/' + userId, {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getUserWaifus (userId, type) {
    try {
      const { body } = await got(host + `user/${userId}/${type}`, {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getUserLists (userId) {
    try {
      const { body } = await got(host + 'user/' + userId + '/lists', {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function getUserList (userId, listId) {
    try {
      const { body } = await got(host + 'user/' + userId + '/lists/' + listId, {
        headers: {
          apiKey: apiKey
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  // Search
  async function search (string) {
    try {
      const { body } = await got.post(host + 'search', {
        headers: {
          apiKey: apiKey
        },
        json: {
          term: string
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function searchBeta (string) {
    try {
      const { body } = await got.post(host + 'search/beta', {
        headers: {
          apiKey: apiKey
        },
        json: {
          term: string
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function searchWaifu (name) {
    try {
      const { body } = await got.post(host + 'search/waifus', {
        headers: {
          apiKey: apiKey
        },
        json: {
          term: name
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  async function searchSeries (name) {
    try {
      const { body } = await got.post(host + 'search/series', {
        headers: {
          apiKey: apiKey
        },
        json: {
          term: name
        }
      })
      let data = JSON.parse(body).data
      data = { ...data, error: false }
      return data
    } catch (error) {
      const err = JSON.parse(await error.response.body)
      console.info({
        error: true,
        data: {
          message: err.message,
          code: err.code
        }
      })
    }
  }

  return {
    // Waifu
    getWaifu,
    getWaifuImages,
    getWaifuByPage,
    dailyWaifu,
    randomWaifu,
    // Current Season
    getAiring,
    getBestWaifus,
    getPopularWaifus,
    getTrashWaifus,
    // Series
    getSeries,
    getSeriesByPage,
    getSeriesBySeason,
    getSeriesWaifus,
    // User
    getUser,
    getUserWaifus,
    getUserLists,
    getUserList,
    // Search
    search,
    searchBeta,
    searchWaifu,
    searchSeries
  }
}
