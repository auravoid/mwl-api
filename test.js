const MWL = require("./src");

const Waifu = new MWL("no");

console.log("Testing!");

(async function () {
  console.log("Waifu");

  await Waifu.getWaifu("ichigo-darling-in-the-franxx")
    .then((data) => {
      console.info({
        function: "getWaifu",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getWaifuImages("ichigo-darling-in-the-franxx")
    .then((data) => {
      console.info({
        function: "getWaifuImages",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getWaifuByPage("I", 3)
    .then((data) => {
      console.info({
        function: "getWaifuByPage",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.dailyWaifu()
    .then((data) => {
      console.info({
        function: "dailyWaifu",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.randomWaifu()
    .then((data) => {
      console.info({
        function: "randomWaifu",
        error: data.error,
      });
    })
    .catch(console.error);

  console.log("Current Season");

  await Waifu.getAiring()
    .then((data) => {
      console.info({
        function: "getAiring",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getBestWaifus()
    .then((data) => {
      console.info({
        function: "getBestWaifus",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getPopularWaifus()
    .then((data) => {
      console.info({
        function: "getPopularWaifus",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getTrashWaifus()
    .then((data) => {
      console.info({
        function: "getTrashWaifus",
        error: data.error,
      });
    })
    .catch(console.error);

  console.log("Series");

  await Waifu.getSeries("darling-in-the-franxx")
    .then((data) => {
      console.info({
        function: "getSeries",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getSeriesByPage("D")
    .then((data) => {
      console.info({
        function: "getSeriesByPage",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getSeriesBySeason("fall", 2019)
    .then((data) => {
      console.info({
        function: "getSeriesBySeason",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getSeriesWaifus("darling-in-the-franxx")
    .then((data) => {
      console.info({
        function: "getSeriesWaifus",
        error: data.error,
      });
    })
    .catch(console.error);

  console.log("User");

  await Waifu.getUser(1)
    .then((data) => {
      console.info({
        function: "getUser",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getUserWaifus(1, "like")
    .then((data) => {
      console.info({
        function: "getUserWaifus",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getUserLists(1)
    .then((data) => {
      console.info({
        function: "getUserLists",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.getUserList(1, 7)
    .then((data) => {
      console.info({
        function: "getUserList",
        error: data.error,
      });
    })
    .catch(console.error);

  console.log("Search");

  await Waifu.search("Ichigo")
    .then((data) => {
      console.info({
        function: "search",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.searchBeta("Ichigo")
    .then((data) => {
      console.info({
        function: "searchBeta",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.searchWaifu("Ichigo")
    .then((data) => {
      console.info({
        function: "searchWaifu",
        error: data.error,
      });
    })
    .catch(console.error);

  await Waifu.searchSeries("Darling In The Franxx")
    .then((data) => {
      console.info({
        function: "searchSeries",
        error: data.error,
      });
    })
    .catch(console.error);
})();
