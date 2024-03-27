# Project 4 - Rock, Paper, Scissors, Lizard, Spock Game

Our project was to create a ROCK, PAPER, SCISSORS, LIZARD, SPOCK game, collecting user data from the game, storing this data, and then using the data to build machine learning models. 
Our goal was to understand user behavior and potentially develop optimal strategies for the computer increase it’s chance of winning.

[View our Website Here!](https://rpslsgame.com/index.html)

## Repo Navigation 
* Assets - Images belonging to the repo
* Game Resources - Preliminary files for cleaning and merging game data
* HMM_Modeling - Folder containing jupyter notebooks for a deep learning model and RL model using an environment built with random choice and an RL model using an environment built with strategy
* Q - Folder containing Tensorflow RL modeling code
* ROOT - HTML, JS, and CSS source documentation for our website - *This is only the front-end of our website*
* Tableau - Tableau workbook of visulizations that came from original game data

## Thought Process

- Below is a representation of our process from game creation, to data collection, to modeling. 
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/thought_process.png">
    </p>

## Game Design and Website Development
Given that this project relied on creating and compiling our own data and creating our own game, we knew that there were going to be a lot of factors that needed to be overcome quickly as well as several factors we had not initially thogught of to create our game. We knew initially that we needed to create a game that:

* Included Game Logic for determining a winner and handling the game execution
* Provided Comprehensive Logging about the round, computer and player choice, and the winner of the round
* Provided a way to have the game hosted somewhere and the ability to allow people to play anywhere and download all the instances of the game data

In addition to those factors we also needed to consider that because this game is creating our own data we needed to elimiate as much player bias as possible. Given that players are challenged against a computer, we needed to ensure that the player felt as if the computer was on an even playing field with the user and also that the computer's decision was not being affected by the player. Several ways we achieved this was:

* The appearance of two "human" hands playing against each other
* The text "computer making a selection" dissapears around the same time as a player would choose, giving the illusion that the computer is deciding at the same time as the player
* To eliminate the computer's influence from the player, separate scripts handle the computer and the player choice
* In addition, while it appears that the computer chooses between 10 and 5 seconds, actually the computer has chosen it's hand at the round opening to avoid player inlfluence for the computer to win


### Website Overview 
The start of our project was to create a working RPSLS game and have the game perform specific actions that would create "bias mitigated" game data . Using html as the backbone for the game, CSS incorporates styles across the entire game for executing specific styles and animation keyframes. The "thinking" behind the game lies in javascripting which comprises several scripts that run asynchonously within the gameplay until the end of the round which then the scripts return to their pre-state and then run again.

* ROOT>
    * index.html - Main landing page
    * about.html - about us page
    * rules.html - rules page
    * Images Folder
       * Folder with images for the entire site
    * Static Folder
        * CSS Folder
           * styles.css - CSS styles for the index page
      * JS Folder
           * auto_player_selection.js - Script that handles the auto selection for the player if they do not select by 1 second on the timer, selects a random hand
           * computer_textchoice.js - Script that handles removing text that says "Computer is choosing a hand" at 5 seconds
           * game_id.js - Script that creates a unique game ID for each game
           * game_logic.js - Script that runs the entire game
           * player_choice.js - Script that handles the selection of the button of the player choice and returns the correct animated hand
           * selection_prompt.js - Script that handles the text "Make a Selection" once the player selects and icon
           * video_popup.js - Script that creates the video popup on the rules page 
           * vs_image.js - Script that shows the VS popup when the animation begins and the hands begin executing the animation
           * winner_scoreboard.js - Script that determines the winner based on the selection of the hands and appends a score to the appropriate winner
       

### Game Logic, Player and Computer
The start of our game the player will see a seamless design that allows them to pick a hand (with buttons) and have the action called via javascript and keyframe animation after countdown. The game was designed to make players “feel” like they are playing they are playing a “similar” opponent elicit real play responses. Inside the console the game is logging all the moves from both the player and the computer, as well as the rounds, winner, and a unique game id.

* <IMAGE>

While the player is experiencing a simulated game, in reality much of the game happens right at the round opening and closing. In rounds 1-3 the computer makes a choice right at the round opening to avoid influence from the player's hand. The round continues through until post 4 seconds, where the logging is not only logged to the console but is logged to our backend environment using Node.JS framework and middleware to make an API call to MongoDB Atlas. 

In addition, in rounds 1-3 the computer is only randomly choosing a hand. This is due to the use of the N-gram method. The computer needs 3 rounds of data to begin to process what the next possible outcome would be at round 4. This method is carried through rounds 4-10 using the subsequent 3 rounds to simplify the decision for the computer. 

* <IMAGE>


### Logging and Input/Output Data Aggregation
Inside the console the game is logging all the moves from both the player and the computer, as well as the rounds, winner, and a unique game id.

* <IMAGE>

In addition to the logging done in the console we also used an event-driven non-blocking I/O model. This method is basically listening for an event to happen in the game, and the model will run simultaneous scripts without waiting to another process to complete. Node.js is the heart of our game reporting and is assisting the flow of the program which is determined by events such as user actions. Node uses a loop to initiate and execute logging operations and in the instance of our game, Node is listening for the the annoucement of the round winner. Per the image below, there is a front-end to our game (the hosted website) and the back-end to our game (an evironment we created). Node.js is not technically in both environments, however the framework is assiting execution on both ends, but technically Node lives in our back-end. 

The process starts from the logging in the RPSLS game, which an Express.JS script parses the JSON from the logging inside the game, and acts as middleware to handle the POST request from the API. In this instance the script is also handling tasks such as authentication and request processing. Once the request is authenticated the new documnet is then added to our MongoDB Altas (our noSQL, SQL cloud-based database) using a Mongoose schema.

From the other side, when we request game data the process is similar. The middleware handles a GET request, validates a secret key, query game data from MongoDB, format it as CSV, and stream the file to the client for download.

* <IMAGE>

## WEBSITE Survey
#### Main index page
- This page is the main index of the site. It starts immediately into the game giving the player 10 seconds to choose a hand. 
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/index.PNG">
    </p>

#### Rules page
- Upon initial load, a video will play describing the rules of rock, paper, scissors, lizard, spock. It goes through each win/lose option and adds two new options (lizard and Spock) to the traditional game of rock, paper, scissors. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/video.PNG">
    </p>
<br>

- Once the video plays through, that window closes revealing a list and chart version of the rules of the game. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/rules.PNG">
    </p>
<br>

#### About Us page
- This page describes the three project coworkers. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/about_us.PNG">
    </p>
<br>

#### Data page
- If the key is provided this page will automatically download a csv of all logged games. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/data.PNG">
    </p>
<be>

# Data Extraction, Transformation, and Loading
## Extraction 
- We pulled a csv from the website where the data was collected and stored using MongoDB Atlas.

## Transform
- Several parts of transformation included weighting rounds, creating a choice winner column, normalizing the round numbers. 

## Load
- The initial collection of the data from the RPSLS website pushed into our database. After it was downloaded from the database and transformed it was then loaded into the deep learning models.

## Tableau 
[ADD INFORMATION](https://public.tableau.com/app/profile/tia.scott/viz/RPSLSOverview/ComputerV_PlayerChoice)


# Modeling

## Intro to Reinforcement Learning
For the RPSLS game, the best type of modeling is reinforcement learning. We took on the task to learn RL modeling to use it with our data. 


## Set Baseline
To determine a baseline a deep learning model and RL model were made (RPSLS_DeepL_Model_Random_Actions and RPSLS_DQN_Model_Random). This allowed us to see how an agent would perform in a truly random environment. 
SCREENSHOT OF BASELINE SLIDE

## Optimization 


# Project Role Overview
- A summary of efforts for the RPSLS Project

 * RPSLS Project
    * Repo Organizer - Haylee McLean
    * Presentation - Tia Scott
    * ReadMe - Haylee McLean
    * Data Cleaning - Quentin O'Neal
    * HTML/CSS/JavaScript - Tia Scott
    * Web Hosting - Tia Scott
    * Deep Learning Modeling - Quentin O'Neal, Haylee McLean
    * Reinforcement Learning Modeling - Quentin O'Neal, Haylee McLean


# References and Resources
* [Database system (MongoDB Atlas) for data storage](https://www.mongodb.com/atlas/database) 
* Front end development with HTML, CSS, and JavaScript.
* [Node.js] (https://www.w3schools.com/nodejs/)
* [Cloud Node.js](https://cloud.google.com/nodejs/docs/)
* Shakeeb Ashraf - I/O Project Advisor
* Libraries for modeling.
     * [TensorFlow](https://www.tensorflow.org/) 
     * [Keras](https://keras.io/examples/rl/)
     * [Keras-rl Agents](https://keras-rl.readthedocs.io/en/latest/agents/overview/)
     * [Building an Environment](https://gymnasium.farama.org/)
     * [Deep Q-Learning Research](https://towardsdatascience.com/self-learning-ai-agents-part-ii-deep-q-learning-b5ac60c3f47) 
* [ChatGPT](https://chat.openai.com/)
