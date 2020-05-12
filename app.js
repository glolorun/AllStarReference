const playerBio = document.querySelector(`.playerBio`);
const getInput = async (name) => {
  const nameQuery = `https://www.balldontlie.io/api/v1/players?search=${name}`;
 const playerStats = document.querySelector(`.playerStats`)
  // const statsQuery =
  // const axios = require(`axios`).default;
  //This lets axios provide autocomplete

  try {
    const nameResponse = await axios.get(`${nameQuery}`);
    //Makes a request to the database

    const nameData = nameResponse.data.data;
    for (i = 0; i < nameData.length; i++) {
      const nameDiv = document.createElement(`div`);

      nameDiv.innerText = `${nameData[i].first_name} ${nameData[i].last_name}. Position: ${nameData[i].position} Team: ${nameData[i].team.full_name}`;
      playerBio.appendChild(nameDiv);
      const playerId = `${nameData[i].id}`;
      // console.log(playerId)

      const statsQuery = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`;
      const statsResponse = await axios.get(`${statsQuery}`);
// console.log(statsResponse)
      const statData = statsResponse.data.data[0];
      console.log(statData)
      if (statData.length !== 0) {
        // for (i = 0; i < statData.length; i++) {
        for (data in statData) {
          const statsDiv = document.createElement("div");
          statsDiv.innerText = `${data}: ${statData[data]}`;
          playerStats.appendChild(statsDiv);
          // console.log(data)
          // console.log(statData[data])
        }
        
      }
      const imgQuery = `https://nba-players.herokuapp.com/players/${nameData[i].last_name}/${nameData[i].first_name}`;
      // const imgResponse = await axios.get(`${imgQuery}`);
      const imgTag = document.createElement(`img`)
      imgTag.src = imgQuery
      playerBio.appendChild(imgTag)
      console.log(imgResponse)
      
      
      //Trying to iterate stat Data inside of the name data because of scope rules but it just keeps looping forever. Asking for help.
      // for (i = 0; i < statData.length; i++) {
      //   const statsDiv = document.createElement("div");
      //   statsDiv.innerText = `${statData[i]}`;
      //   playerStats.appendChild(statsDiv);
      // console.log(statsResponse.data);
      // console.log(playerId)
      // }
    }

    // const statsQuery = `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`
    // const statsResponse = await axios.get(`${statsQuery}`)

    // const statData = statsResponse.data.data

    // for (i = 0; i < statData.length; i++) {
    //   const statsDiv = document.createElement('div')
    //   statsDiv.innerText = `${statData[i]}`
    //   playerStats.appendChild(statsDiv)
    //   console.log(statsResponse.data);

    // }
    // console.log(nameResponse.data.data);
    // console.log(statsResponse.data);
  } catch (error) {
    // Handles errors
    console.log(error);
  }
};
// console.log(response)
let searchInput = prompt();

getInput(searchInput);

//NOTE: need to attach another axios for stats to the search query. EX: https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&seasons[]=2019
