
const container = document.querySelector(`.container`)
const getInput = async (name) => {
  const base_Url = `https://www.balldontlie.io/api/v1/players?search=${name}`;
  // const axios = require(`axios`).default;
  //This lets axios provide autocomplete

  try {
    const response = await axios.get(`${base_Url}`);
    //Makes a request to the database
    const data = response.data.data
    for (i = 0; i < data.length; i++) {
      // console.log(data[i].city)
      const newDiv = document.createElement(`div`)
      newDiv.innerText = `${data[i].first_name} ${data[i].last_name}`
      container.appendChild(newDiv)
    }
    console.log(response.data.data);
  } catch (error) {
    // Handles errors
    console.log(error);
  }
};
// console.log(response)
let searchInput = prompt()


getInput(searchInput);


//NOTE: need to attach another axios for stats to the search query. EX: https://www.balldontlie.io/api/v1/season_averages?player_ids[]=237&seasons[]=2019