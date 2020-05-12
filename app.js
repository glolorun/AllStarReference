const playerBio = document.querySelector(`.playerBio`);
const searchBar = document.querySelector(`#searchBar`);
const searchButton = document.querySelector(`#searchButton`);

const getInput = async (name) => {
  const nameQuery = `https://www.balldontlie.io/api/v1/players?search=${name}`;
  const playerStats = document.querySelector(`.playerStats`);
  // const statsQuery =
  // const axios = require(`axios`).default;
  //This lets axios provide autocomplete
  // const executeSearch = async () => {
  //   // const x = document.getElementById(`searchInput`);

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
      // playerResultTitle.appendChild(playerTitleDiv)
      // console.log(playerId)

      const statsQuery = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`;
      const statsResponse = await axios.get(`${statsQuery}`);
      const statData = statsResponse.data.data[0];
      console.log(statData);
      if (statData.length !== 0) {
        for (data in statData) {
          const statsDiv = document.createElement("div");
          statsDiv.innerText = `${data}: ${statData[data]}`;
          playerStats.appendChild(statsDiv);
  
        }
      }
      const imgQuery = `https://nba-players.herokuapp.com/players/${nameData[0].last_name}/${nameData[0].first_name}`;
      // const imgResponse = await axios.get(`${imgQuery}`);
      const imgTag = document.createElement(`img`);
      imgTag.src = imgQuery;
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
  const name = searchBar.value;
  getInput(name);
});

//NOTE: need to attach another axios for stats to the search query. EX: https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&seasons[]=2019
