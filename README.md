# Project Overview
## All-Star Reference

### Project Description
All-Star Reference is a database displaying data teams, players and more from the National Basketball Association. Users can enter terms and have information like stats and biographies returned to them

### API
https://www.balldontlie.io/api/v1/

### API Snippet
{
    "data": [
        {
            "id": 14,
            "first_name": "Ike",
            "height_feet": null,
            "height_inches": null,
            "last_name": "Anigbogu",
            "position": "C",
            "team": {
                "id": 12,
                "abbreviation": "IND",
                "city": "Indiana",
                "conference": "East",
                "division": "Central",
                "full_name": "Indiana Pacers",
                "name": "Pacers"
            },
            "weight_pounds": null
        },
}

### Wireframes
https://www.invisionapp.com/design-defined/wireframes/

### MVP
* For trivia, 5 Questions will be displayed at random out of a possible 15;
* Multiple choice answers
* Scores will be tracked
* Picture of athlete will be displayed with each answer
* Display correct answer if user answers wrong
*Option to choose game/answers on click


### Post-MVP
* "Which Superstar are you?" Users will have the option take a personality test which will ultimately match them up with the NBA player that matches them best.
* Personality test will display 5 questions with multiple choice answers
* Sequence of answers will match up to a certain player as an end result
* For Trivia: If answer is correct, play specific audio and do the same if answer is wrong


## Goals
|Day           |Task                                                                           |Progress    |
|--------------|:-----------------------------------------------------------------------------:|-----------:|
|Monday 5/11   |Approval; test API; Collect research materials;|In Progress |
|Tuesday 5/12  |Design: Work out basic CSS and HTML stuctures; Wireframe; Collect Research     |In Progress |
|Wednesday 5/13|Work on algorithms to randomize questions, etc for Trivia                      |In Progress |
|Thursday 5/14 |Work on Additional styling, picture/sound display                              |In Progress |
|Friday 5/15   |Tighten up Js; Work on anything incomplete                                     |In Progress |
|Saturday 5/16 |Tighten up JS; Work on Post MVP                                                |In Progress |
|Sunday 5/17   |Make final touches; Prepare to present                                         |In Progress |
|Monday 5/18   |Present                                                                        |In Progress |


### Priority Matrix



## Timeframes
|Component                                                    |Priority        |Est. Time  |Time Invested |Actual Time |
|----------------                                             |:--------------:|:---------:|:------------:|------------:
|HTML Structure                                               |       M        |           |              |            |
|CSS                                                          |       M        |           |              |            |
|API to Display Random Questions and Randomize Answer Choices |       H        |           |              |            |
|Record User Answers - Evalute Right/Wrong                    |       H        |           |              |            |
|Keep Track of Score                                          |       M        |           |              |            |
|Complete Game and Display Result                             |       H        |           |              |            |
|Function to Reset Game                                       |       M        |           |              |            |
|Post-MVP: Option to Play 2nd Game.                           |       H        |           |              |            |
|Addition Styling: Display Pictures with Answers              |       M        |           |              |            |
|Add Audio                                                    |       L        |           |              |            |
|Total                                                        |       H        |           |              |            |


## Code Snippet
let questions = [
{ question : "This player played in four different decades.",
choice A: "Vince Carter",
choice B: "Michael Jordan",
Choice C: "Magic Johnson",
Choice D: "Lebron James",
Correct: "A"
}]
## Change Log
