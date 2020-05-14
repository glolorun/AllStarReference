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

    nameDiv.innerText = `${nameData[0].first_name} ${nameData[0].last_name}. Position: ${nameData[0].position} Team: ${nameData[0].team.full_name}`;
    playerBio.appendChild(nameDiv);
    const playerId = `${nameData[0].id}`;
    // const playerTitleDiv = document.createElement(`div`)
    const playerResultTitle = document.querySelector(`#playerResultTitle`);
    playerResultTitle.innerText = `${nameData[0].first_name} ${nameData[0].last_name}`;
    yearResult.innerText = `2019-2020 Stats`;
    // playerResultTitle.appendChild(playerTitleDiv)
    // console.log(playerId)

    const statsQuery = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`;
    const year2017 = `https://www.balldontlie.io/api/v1/season_averages?season=2017&player_ids[]=${playerId}`;

    const statsResponse = await axios.get(`${statsQuery}`);

    const statData = statsResponse.data.data[0];
    console.log(statData);
    if (statData.length !== 0) {
      for (data in statData) {
          const statsDiv = document.createElement("div");
          statsDiv.innerhtml = `<div class='stat'>${data}: ${statData[data]}</div>`;

    // statsDiv.innerText = `${data}: ${statData[data]}`;

    ////////////////////////////SEASON//////////////////////////////////////

    // /////////////////////////GAMES PLAYED////////////////////////////////
    // const gamesDiv = document.createElement("div");
    // const games = document.createElement(`h3`);
    // games.innerText = `Games`;
    // gamesDiv.appendChild(games);
    // const gamesResultDiv = document.createElement("div");
    // const gamesResult = document.createElement(`strong`);
    // gamesResult.innerText = `${statData.games_played}`;
    // gamesResultDiv.appendChild(gamesResult);
    // statsDiv.appendChild(gamesDiv);
    // statsDiv.appendChild(gamesResultDiv);
    // ////////////////////////////Minutes Played//////////////////////////////

    // ////////////////////////////Points//////////////////////////////////////

    // ////////////////////////////Assists////////////////////////////////////

    // ///////////////////////////D.Rebounds////////////////////////////////////

    // ///////////////////////////O.Rebounds////////////////////////////////////

    // ////////////////////////////Blocks//////////////////////////////////////

    // ////////////////////////////Steals//////////////////////////////////////

    // ////////////////////////////3 Pointers Made////////////////////////////

    // ////////////////////////////3 Pointers Attempted////////////////////////

    // ////////////////////////////3pt Percentage//////////////////////////////
    // ///////NOTE: FOR PERCENTAGES USE: ((portion/total) * 100).toFixed(2) + '%'////////////////////

    // ////////////////////////////Field Goals Made/////////////////////////////
    // ////////////////////////////Field Goal Attempts/////////////////////////////
    // ////////////////////////////Field Goal %/////////////////////////////
    // ////////////////////////////Free Throws Made/////////////////////////////
    // ////////////////////////////Free Throws Attempted/////////////////////////////
    // ////////////////////////////Free Throw %/////////////////////////////
    // ////////////////////////////Field Goals Made/////////////////////////////
    // ////////////////////////////Field Goal Attempts/////////////////////////////
    // ////////////////////////////Field Goal %/////////////////////////////
    // ////////////////////////////Fouls/////////////////////////////////////////
    // ////////////////////////////Turnovers/////////////////////////////////////

    playerStats.appendChild(statsDiv);
    }
    }
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
