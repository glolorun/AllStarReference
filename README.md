# Project Overview

## All-Star Reference

### Project Description

All-Star Reference is a database containing players from the National Basketball Association. Basketball fanatics can enter a name and have information and the current season's statistics returned to them.

### API

https://www.balldontlie.io/api/v1/

### API Snippet

{
"data": [
{
"games_played": 60,
"player_id": 237,
"season": 2019,
"min": "34:54",
"fgm": 9.77,
"fga": 19.6,
"fg3m": 2.22,
"fg3a": 6.35,
"ftm": 3.98,
"fta": 5.72,
"oreb": 0.95,
"dreb": 6.9,
"reb": 7.85,
"ast": 10.6,
"stl": 1.23,
"blk": 0.5,
"turnover": 3.98,
"pf": 1.77,
"pts": 25.73,
"fg_pct": 0.498,
"fg3_pct": 0.349,
"ft_pct": 0.697
}
]
}

### Wireframes

https://olutkareem236598.invisionapp.com/freehand/Olu-pWOcpElB7?v=8v7LZJseaJP6p1bFMSkokg%3D%3D&linkshare=urlcopied


### MVP

- Users will input names of players in search bar
- Upon clicking "Submit", results including the player's name, averages will display.
- Successfully linked 2 API urls to display both name and season averages for the current year.

### Post-MVP

- Add Local Storage
- Personality test will display 5 questions with multiple choice answers
- Sequence of answers will match up to a certain player as an end result
- Option to return to homepage

## Goals

| Day            |                                Task                                 |    Progress |
| -------------- | :-----------------------------------------------------------------: | ----------: |
| Monday 5/11    |           Approval; test API; Collect research materials;           | In Progress |
| Tuesday 5/12   |            Work on algorithms to produce search results             | In Progress |
|Wedensday 5/13  | Design: Work out basic CSS and HTML stuctures; JS; Collect Research | In Progress |
| Thursday 5/14  |              Work on Additional styling, JS; Post MVP               | In Progress |
| Friday 5/15    |                               Present                               | In Progress |

### Priority Matrix

## Timeframes

| Component                                              | Priority | Est. Time | Time Invested | Actual Time |
| ------------------------------------------------------ | :------: | :-------: | :-----------: | ----------: |
| HTML Structure                                         |    M     |   4hrs    |               |             |
| CSS                                                    |    M     |   6hrs    |               |             |
| Program algorithm for to Display Player and Statistics |    H     |   15hrs   |               |             |
| Post-MVP: Option to Play Personality Game.             |    M     |    8hr    |               |             |
| Complete Game and Display Result                       |    M     |    4hr    |               |             |
| Addition Styling: Display Pictures with Answers        |    M     |   3hrs    |               |             |
| Total                                                  |    H     |  ~40hrs   |               |             |

## Code Snippet

for (i = 0; i < nameData.length; i++) {
const nameDiv = document.createElement(`div`)

      nameDiv.innerText = `${nameData[i].first_name} ${nameData[i].last_name}. Position: ${nameData[i].position} Team: ${nameData[i].team.full_name}`
      playerBio.appendChild(nameDiv)

## Change Log
