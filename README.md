## Introduction
SEI 23 - Project 1
Game is hosted here: https://randallalala.github.io/Pattern-Matching/

#### Game Sequence & Objectives
1. There are 4 colored squares 
2. Click "Start" and the squares will flash in a random sequence
3. Player will need to follow the sequence exactly 

- Correctly clicked sequence will trigger next sequence with added flash count
- Wrongly clicked sequence will deem player lost and end the game
- The game is similar to a physical button pressing simon-says toy (https://en.wikipedia.org/wiki/Simon_(game))

#### Project Objectives
**Technical Requirements**
- Display a game in the browser
- Be interactive
- Include separate HTML / CSS / JavaScript files
- Use Javascript for DOM manipulation that is triggered by a browser event

**Required Deliverables**
- A non-broken game, built by you, hosted somewhere on the internet
- A link to your hosted working game in the URL section of your Github repo
- A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
- A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

## Breakdown
#### Minimum Viable Product Features
- 4 colored squares
- Start button
- Reset button
- Game generate sequence 
- Store player attempt sequence
- Compare sequences 
- Output Win/Lose state
- Continue on for at least 8 levels
- Minimal aesthetics

#### Additional Game Features
- Normal/extreme difficulty levels
- Player name and highscore storing
- Infinity levels as long as player can handle
- Level indicator and Moves counter
- Timer and progressbar
- Sound on square flash / click
- Not hardcoded
  
<img src="./patternmatching.gif">

#### Game Design & Pseudo Code Planning
- Generate random sequence and store array (a)
- Listen and store player sequence array (b)
- Compare (a) and (b) 
  - Compare only when array lengths are same 
  - Compare a
- Win / lose functions
- Start / reset buttons and functions
- Timer and progressbar functions
- level and moves counter functions

#### Technologies used:
1. Javascript
2. CSS
3. HTML
4. Minimal jquery - fadeout().fadein()
5. Minimal bootstrap - styled buttons and table
6. Misc. methods used
- location.reload (reload page)
- JSON.stringify (change array for comparison)
- progressbar (timer)
- audio (tag to click listeners)

#### Bugs & Issues Faced
- Overlapping timer after player win
    - Resolved: Reset intervals in between rounds
- Flashing glitch
    - Resolved: Remove mid-game win alerts
- Empty restart button if player keeps clicking
    - Resolved: Add a remove click listener function
- Blinker glitch which overlaps
    - Resolved: Add a remove click listener function
- Other issues/mistakes which took time to resolve
    - Resolved: Wrong symbols used that caused malfunctions = inplace of ()
    - Resolved: Naming and camelcase errors
    - Resolved: Sequence of which variables or functions are called
- Only allow user to start clicking after pattern fully displayed (unsolved)
- Highscore storing (unsolved)

#### Further Possible Improvements
- Responsive screen size scaling
- Refactor code
- Stopwatch from beginning
- Modal at the end of game to reveal all stats
- Add more colored squares as the game progresses till infinity (non-hard coded)
  - **Pseudo code**
    1. after winning two levels - add three(x) boxes below
       - win counter (var 1) to count 
       - for loop side ++ (var 2)  
       - change grid style row (var 3)
       - function bottom() + three boxes
    2. after winning two levels - add three(x) boxes to side
       - win counter (var 3)  to count 
       - for loop (var 2)  
       - change grid style col (var 4)
       - function side() + three boxes
    3. x++ 
       - 4boxes bottom
       - 4boxes side
    4. x++
