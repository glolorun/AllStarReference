const playerBio = document.querySelector(`.playerBio`);
const searchBar = document.querySelector(`#searchBar`);
const searchButton = document.querySelector(`#searchButton`);
const playerStats = document.querySelector(`.playerStats`);

// document.querySelector(`.results`).remove();

const getInput = async (name) => {
  const nameQuery = `https://www.balldontlie.io/api/v1/players?search=${name}`;

  try {
    const nameResponse = await axios.get(`${nameQuery}`);
    //Makes a request to the database
    console.log(nameResponse);
    const nameData = nameResponse.data.data;
    // for (i = 0; i < nameData.length; i++) {
    const nameDiv = document.createElement(`div`);

    nameDiv.innerText = `Position: ${nameData[0].position} Team: ${nameData[0].team.full_name}`;
    playerBio.appendChild(nameDiv);
    const playerId = `${nameData[0].id}`;
    // const playerTitleDiv = document.createElement(`div`)
    const playerResultTitle = document.querySelector(`#playerResultTitle`);
    playerResultTitle.innerText = `${nameData[0].first_name} ${nameData[0].last_name}`;
    yearResult.innerText = `2019-2020 Averages (Per Game)`;
    // playerResultTitle.appendChild(playerTitleDiv)
    // console.log(playerId)

    const statsQuery = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`;

    const statsResponse = await axios.get(`${statsQuery}`);

    const statData = statsResponse.data.data[0];
    console.log(statData);
    function tenths_round(num) {
      return Math.round(num * 10) / 10;
    }
    function percentage(num) {
      return num * 100 + "%";
    }

    // if (statData.length !== 0) {
    //   for (data in statData) {
    //       const statsDiv = document.createElement("div");
    //       statsDiv.innerHTML = `<div class='stat'>${data}: ${statData[data]}</div>`;

    // statsDiv.innerText = `${data}: ${statData[data]}`;
    const statsDiv = document.createElement("div");
    statsDiv.classList.add("statsGrid");
    ////////////////////////////SEASON//////////////////////////////////////
    const seasonDiv = document.createElement("div");
    seasonDiv.classList.add(`category`);
    const season = document.createElement(`h3`);
    season.innerText = `Season`;
    seasonDiv.appendChild(season);
    const seasonResultDiv = document.createElement("div");
    seasonResultDiv.classList.add(`stat`);
    const seasonResult = document.createElement(`strong`);
    seasonResult.innerText = `${statData.season}-${(statData.season += 1)}`;
    seasonResultDiv.appendChild(seasonResult);
    statsDiv.appendChild(seasonDiv);
    statsDiv.appendChild(seasonResultDiv);
    // /////////////////////////GAMES PLAYED////////////////////////////////

    const gamesDiv = document.createElement("div");
    gamesDiv.classList.add(`category`);
    const games = document.createElement(`h3`);
    games.innerText = `Games`;
    gamesDiv.appendChild(games);
    const gamesResultDiv = document.createElement("div");
    gamesResultDiv.classList.add(`stat`);
    const gamesResult = document.createElement(`strong`);
    gamesResult.innerText = `${statData.games_played}`;
    gamesResultDiv.appendChild(gamesResult);
    statsDiv.appendChild(gamesDiv);
    statsDiv.appendChild(gamesResultDiv);
    // ////////////////////////////Minutes Played//////////////////////////////
    const minutesDiv = document.createElement("div");
    minutesDiv.classList.add(`category`);
    const minutes = document.createElement(`h3`);
    minutes.innerText = `Minutes`;
    minutesDiv.appendChild(minutes);
    const minutesResultDiv = document.createElement("div");
    minutesResultDiv.classList.add(`stat`);
    const minutesResult = document.createElement(`strong`);
    minutesResult.innerText = `${statData.min}`;
    minutesResultDiv.appendChild(minutesResult);
    statsDiv.appendChild(minutesDiv);
    statsDiv.appendChild(minutesResultDiv);
    // ////////////////////////////Points//////////////////////////////////////
    const pointsDiv = document.createElement("div");
    pointsDiv.classList.add(`category`);
    const points = document.createElement(`h3`);
    points.innerText = `Points`;
    pointsDiv.appendChild(points);
    const pointsResultDiv = document.createElement("div");
    pointsResultDiv.classList.add(`stat`);
    const pointsResult = document.createElement(`strong`);
    pointsResult.innerText = `${tenths_round(statData.pts)}`;
    pointsResultDiv.appendChild(pointsResult);
    statsDiv.appendChild(pointsDiv);
    statsDiv.appendChild(pointsResultDiv);
    // ////////////////////////////Assists////////////////////////////////////
    const assistsDiv = document.createElement("div");
    assistsDiv.classList.add(`category`);
    const assists = document.createElement(`h3`);
    assists.innerText = `Assists`;
    assistsDiv.appendChild(assists);
    const assistsResultDiv = document.createElement("div");
    assistsResultDiv.classList.add(`stat`);
    const assistsResult = document.createElement(`strong`);
    assistsResult.innerText = `${tenths_round(statData.ast)}`;
    assistsResultDiv.appendChild(assistsResult);
    statsDiv.appendChild(assistsDiv);
    statsDiv.appendChild(assistsResultDiv);
    // ///////////////////////////D.Rebounds////////////////////////////////////
    const dReboundsDiv = document.createElement("div");
    dReboundsDiv.classList.add(`category`);
    const dRebounds = document.createElement(`h3`);
    dRebounds.innerText = `D.Rebounds`;
    dReboundsDiv.appendChild(dRebounds);
    const dReboundsResultDiv = document.createElement("div");
    dReboundsResultDiv.classList.add(`stat`);
    const dReboundsResult = document.createElement(`strong`);
    dReboundsResult.innerText = `${tenths_round(statData.reb)}`;
    dReboundsResultDiv.appendChild(dReboundsResult);
    statsDiv.appendChild(dReboundsDiv);
    statsDiv.appendChild(dReboundsResultDiv);
    // ///////////////////////////O.Rebounds////////////////////////////////////
    const oReboundsDiv = document.createElement("div");
    oReboundsDiv.classList.add(`category`);
    const oRebounds = document.createElement(`h3`);
    oRebounds.innerText = `O.Rebounds`;
    oReboundsDiv.appendChild(oRebounds);
    const oReboundsResultDiv = document.createElement("div");
    oReboundsResultDiv.classList.add(`stat`);
    const oReboundsResult = document.createElement(`strong`);
    oReboundsResult.innerText = `${tenths_round(statData.oreb)}`;
    oReboundsResultDiv.appendChild(oReboundsResult);
    statsDiv.appendChild(oReboundsDiv);
    statsDiv.appendChild(oReboundsResultDiv);
    // ////////////////////////////Blocks//////////////////////////////////////
    const blocksDiv = document.createElement("div");
    blocksDiv.classList.add(`category`);
    const blocks = document.createElement(`h3`);
    blocks.innerText = `Blocks`;
    blocksDiv.appendChild(blocks);
    const blocksResultDiv = document.createElement("div");
    blocksResultDiv.classList.add(`stat`);
    const blocksResult = document.createElement(`strong`);
    blocksResult.innerText = `${tenths_round(statData.blk)}`;
    blocksResultDiv.appendChild(blocksResult);
    statsDiv.appendChild(blocksDiv);
    statsDiv.appendChild(blocksResultDiv);
    // ////////////////////////////Steals//////////////////////////////////////
    const stealsDiv = document.createElement("div");
    stealsDiv.classList.add(`category`);
    const steals = document.createElement(`h3`);
    steals.innerText = `Steals`;
    stealsDiv.appendChild(steals);
    const stealsResultDiv = document.createElement("div");
    stealsResultDiv.classList.add(`stat`);
    const stealsResult = document.createElement(`strong`);
    stealsResult.innerText = `${tenths_round(statData.stl)}`;
    stealsResultDiv.appendChild(stealsResult);
    statsDiv.appendChild(stealsDiv);
    statsDiv.appendChild(stealsResultDiv);
    // ////////////////////////////3 Pointers Made////////////////////////////
    const threeMDiv = document.createElement("div");
    threeMDiv.classList.add(`category`);
    const threeM = document.createElement(`h3`);
    threeM.innerText = `3 Pointers Made`;
    threeMDiv.appendChild(threeM);
    const threeMResultDiv = document.createElement("div");
    threeMResultDiv.classList.add(`stat`);
    const threeMResult = document.createElement(`strong`);
    threeMResult.innerText = `${tenths_round(statData.fg3m)}`;
    threeMResultDiv.appendChild(threeMResult);
    statsDiv.appendChild(threeMDiv);
    statsDiv.appendChild(threeMResultDiv);
    // ////////////////////////////3 Pointers Attempted////////////////////////
    const threeAttDiv = document.createElement("div");
    threeAttDiv.classList.add(`category`);
    const threeAtt = document.createElement(`h3`);
    threeAtt.innerText = `3 Pointers Attempted`;
    threeAttDiv.appendChild(threeAtt);
    const threeAttResultDiv = document.createElement("div");
    threeAttResultDiv.classList.add(`stat`);
    const threeAttResult = document.createElement(`strong`);
    threeAttResult.innerText = `${tenths_round(statData.fg3a)}`;
    threeAttResultDiv.appendChild(threeAttResult);
    statsDiv.appendChild(threeAttDiv);
    statsDiv.appendChild(threeAttResultDiv);
    // ////////////////////////////3pt Percentage//////////////////////////////
    const threePercentDiv = document.createElement("div");
    threePercentDiv.classList.add(`category`);
    const threePercent = document.createElement(`h3`);
    threePercent.innerText = `3 Point%`;
    threePercentDiv.appendChild(threePercent);
    const threePercentResultDiv = document.createElement("div");
    threePercentResultDiv.classList.add(`stat`);
    const threePercentResult = document.createElement(`strong`);
    threePercentResult.innerText = `${percentage(statData.fg3_pct)}`;
    threePercentResultDiv.appendChild(threePercentResult);
    statsDiv.appendChild(threePercentDiv);
    statsDiv.appendChild(threePercentResultDiv);

    // ////////////////////////////Field Goals Made/////////////////////////////
    const fGMDiv = document.createElement("div");
    fGMDiv.classList.add(`category`);
    const fGM = document.createElement(`h3`);
    fGM.innerText = `Field Goals Made`;
    fGMDiv.appendChild(fGM);
    const fGMResultDiv = document.createElement("div");
    fGMResultDiv.classList.add(`stat`);
    const fGMResult = document.createElement(`strong`);
    fGMResult.innerText = `${tenths_round(statData.fgm)}`;
    fGMResultDiv.appendChild(fGMResult);
    statsDiv.appendChild(fGMDiv);
    statsDiv.appendChild(fGMResultDiv);
    // ////////////////////////////Field Goal Attempts/////////////////////////////
    const fGADiv = document.createElement("div");
    fGADiv.classList.add(`category`);
    const fGA = document.createElement(`h3`);
    fGA.innerText = `Field Goals Attempted`;
    fGADiv.appendChild(fGA);
    const fGAResultDiv = document.createElement("div");
    fGAResultDiv.classList.add(`stat`);
    const fGAResult = document.createElement(`strong`);
    fGAResult.innerText = `${tenths_round(statData.fga)}`;
    fGAResultDiv.appendChild(fGAResult);
    statsDiv.appendChild(fGADiv);
    statsDiv.appendChild(fGAResultDiv);
    // ////////////////////////////Field Goal %/////////////////////////////
    const fGPercentDiv = document.createElement("div");
    fGPercentDiv.classList.add(`category`);
    const fGPercent = document.createElement(`h3`);
    fGPercent.innerText = `Field Goal%`;
    fGPercentDiv.appendChild(fGPercent);
    const fGPercentResultDiv = document.createElement("div");
    fGPercentResultDiv.classList.add(`stat`);
    const fGPercentResult = document.createElement(`strong`);
    fGPercentResult.innerText = `${percentage(statData.fg_pct)}`;
    fGPercentResultDiv.appendChild(fGPercentResult);
    statsDiv.appendChild(fGPercentDiv);
    statsDiv.appendChild(fGPercentResultDiv);
    // ////////////////////////////Free Throws Made/////////////////////////////
    const fTMDiv = document.createElement("div");
    fTMDiv.classList.add(`category`);
    const fTM = document.createElement(`h3`);
    fTM.innerText = `Free Throws Made`;
    fTMDiv.appendChild(fTM);
    const fTMResultDiv = document.createElement("div");
    fTMResultDiv.classList.add(`stat`);
    const fTMResult = document.createElement(`strong`);
    fTMResult.innerText = `${tenths_round(statData.ftm)}`;
    fTMResultDiv.appendChild(fTMResult);
    statsDiv.appendChild(fTMDiv);
    statsDiv.appendChild(fTMResultDiv);
    // ////////////////////////////Free Throws Attempted/////////////////////////////
    const fTADiv = document.createElement("div");
    fTADiv.classList.add(`category`);
    const fTA = document.createElement(`h3`);
    fTA.innerText = `Free Throw Attempts`;
    fTADiv.appendChild(fTA);
    const fTAResultDiv = document.createElement("div");
    fTAResultDiv.classList.add(`stat`);
    const fTAResult = document.createElement(`strong`);
    fTAResult.innerText = `${tenths_round(statData.fta)}`;
    fTAResultDiv.appendChild(fTAResult);
    statsDiv.appendChild(fTADiv);
    statsDiv.appendChild(fTAResultDiv);
    // ////////////////////////////Free Throw %/////////////////////////////
    const fTPercentDiv = document.createElement("div");
    fTPercentDiv.classList.add(`category`);
    const fTPercent = document.createElement(`h3`);
    fTPercent.innerText = `Free Throw%`;
    fTPercentDiv.appendChild(fTPercent);
    const fTPercentResultDiv = document.createElement("div");
    fTPercentResultDiv.classList.add(`stat`);
    const fTPercentResult = document.createElement(`strong`);
    fTPercentResult.innerText = `${percentage(tenths_round(statData.ft_pct))}`;
    fTPercentResultDiv.appendChild(fTPercentResult);
    statsDiv.appendChild(fTPercentDiv);
    statsDiv.appendChild(fTPercentResultDiv);
    // ////////////////////////////Fouls/////////////////////////////////////////
    const foulsDiv = document.createElement("div");
    foulsDiv.classList.add(`category`);
    const fouls = document.createElement(`h3`);
    fouls.innerText = `Fouls`;
    foulsDiv.appendChild(fouls);
    const foulsResultDiv = document.createElement("div");
    foulsResultDiv.classList.add(`stat`);
    const foulsResult = document.createElement(`strong`);
    foulsResult.innerText = `${tenths_round(statData.pf)}`;
    foulsResultDiv.appendChild(foulsResult);
    statsDiv.appendChild(foulsDiv);
    statsDiv.appendChild(foulsResultDiv);
    // ////////////////////////////Turnovers/////////////////////////////////////
    const turnoverDiv = document.createElement("div");
    turnoverDiv.classList.add(`category`);
    const turnover = document.createElement(`h3`);
    turnover.innerText = `Turnovers`;
    turnoverDiv.appendChild(turnover);
    const turnoverResultDiv = document.createElement("div");
    turnoverResultDiv.classList.add(`stat`);
    const turnoverResult = document.createElement(`strong`);
    turnoverResult.innerText = `${statData.turnover}`;
    turnoverResultDiv.appendChild(turnoverResult);
    statsDiv.appendChild(turnoverDiv);
    statsDiv.appendChild(turnoverResultDiv);
    /////////////////////////////////////////////////////////////////////////////
    // statsDiv.classList.add(`statsCell`)
    playerStats.appendChild(statsDiv);
    //   }

    // }
    const imgQuery = `https://nba-players.herokuapp.com/players/${nameData[0].last_name}/${nameData[0].first_name}`;
    // const imgResponse = await axios.get(`${imgQuery}`);
    const imgTag = document.createElement(`img`);
    imgTag.src = imgQuery;
    imgTag.classList.add("playerImage");

    playerBio.appendChild(imgTag);
    console.log(imgQuery);
    //Trying to iterate stat Data inside of the name data because of scope rules but it just keeps looping forever. Asking for help.
    // }
  } catch (error) {
    // Handles errors
    console.log(error);
  }
  // }//executingSearch
};
// console.log(response)
// let searchInput = prompt();

searchButton.addEventListener(`click`, () => {
  playerBio.innerHTML = ``;
  playerStats.innerHTML = ``;
  const name = searchBar.value;
  getInput(name);
  // name.remove()
});
window.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    playerBio.innerHTML = ``;
    playerStats.innerHTML = ``;
    const name = searchBar.value;
    getInput(name);
  }
});

//NOTE: need to attach another axios for stats to the search query. EX: https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&seasons[]=2019
