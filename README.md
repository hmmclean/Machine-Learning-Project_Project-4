# Project 4 - Rock, Paper, Scissors, Lizard, Spock Game

Our project was to create a ROCK, PAPER, SCISSORS, LIZARD, and SPOCK game, collect user data from the game, store this data, and then use the data to build machine learning models. 
Our goal was to understand user behavior and potentially develop optimal strategies for the computer to increase its chance of winning.

[View our Website Here!](https://rpslsgame.com/index.html)

## Repo Navigation 
* Assets - Images belonging to the repo
* Game Resources - Preliminary files for cleaning and merging game data
* HMM_Modeling - Folder containing jupyter notebooks for a deep learning model and RL model using an environment built with random choice and an RL model using an environment built with strategy
* Q - Folder containing Tensorflow RL modeling code
* ROOT - HTML, JS, and CSS source documentation for our website - *This is only the front-end of our website*
* Tableau - Tableau workbook of visualizations that came from original game data

## Thought Process

- Below is a representation of our process from game creation to data collection to modeling. 
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/thought_process.png">
    </p>

## Game Design and Website Development
Given that this project relied on creating and compiling our data and creating our own game, we knew there would be many factors that needed to be overcome quickly, as well as several factors we had not initially thought of to create our game. We knew initially that we needed to create a game that:

* Included Game Logic for determining a winner and handling the game execution
* Provided Comprehensive Logging about the round, computer and player choice, and the winner of the round
* Provided a way to have the game hosted somewhere and the ability to allow people to play anywhere and download all the instances of the game data

In addition to those factors, we also needed to consider that because this game is creating our data, we needed to eliminate as much player bias as possible. Given that players are challenged against a computer, we needed to ensure that the player felt like the computer was on an even playing field with the user and that the player did not affect the computer's decision. Several ways we achieved this were:

* The appearance of two "human" hands playing against each other
* The text "computer making a selection" disappears around the same time as a player would choose, giving the illusion that the computer is deciding at the same time as the player
* To eliminate the computer's influence on the player, separate scripts handle the computer and the player's choice
* In addition, while it appears that the computer chooses between 10 and 5 seconds, the computer has chosen its hand at the round opening to avoid player influence for the computer to win


### Website Overview 
The start of our project was to create a working RPSLS game and have it perform specific actions that would create "bias-mitigated" game data. Using HTML as the backbone for the game, CSS incorporates styles across the entire game to execute specific styles and animation keyframes. The "thinking" behind the game lies in Javascripting, which comprises several scripts that run asynchronously within the gameplay until the end of the round. Then, the scripts return to their pre-state and then run again.

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
           * player_choice.js - Script that handles the selection of the button of the player's choice and returns the correct animated hand
           * selection_prompt.js - Script that handles the text "Make a Selection" once the player selects an icon
           * video_popup.js - Script that creates the video popup on the rules page 
           * vs_image.js - Script that shows the VS popup when the animation begins, and the hands begin executing the animation
           * winner_scoreboard.js - Script that determines the winner based on the selection of the hands and appends a score to the appropriate winner
       

### Game Logic, Player and Computer
At the start of our game, the player will see a seamless design that allows them to pick a hand (with buttons) and have the action called via JavaScript and keyframe animation after the countdown. The game was designed to make players “feel” like they are playing a “similar” opponent and elicit real play responses. Inside the console, the game logs all the moves from the player and the computer, the rounds, the winner, and a unique game ID.

* <IMAGE>

While the player is experiencing a simulated game, in reality, much of the game happens right at the round opening and closing. In rounds 1-3, the computer chooses right at the round opening to avoid influence from the player's hand. The round continues until after 4 seconds when the logging is not only logged to the console but also to our backend environment using the Node.JS framework and middleware to make an API call to MongoDB Atlas. 

In addition, in rounds 1-3, the computer only randomly chooses a hand. This is due to the use of the N-gram method. The computer needs 3 rounds of data to begin processing the next possible outcome at round 4. This method is carried through rounds 4-10 using the subsequent 3 rounds to simplify the decision for the computer. 

* <IMAGE>


### Logging and Input/Output Data Aggregation
Inside the console, the game logs all the moves from the player and the computer, the rounds, the winner, and a unique game ID.

* <IMAGE>

In addition to the logging done in the console, we also used an event-driven non-blocking I/O model. This method is listening for an event to happen in the game, and the model will run simultaneous scripts without waiting for another process to complete. Node.js is the heart of our game reporting and assists the flow of the program, which is determined by events such as user actions. Node uses a loop to initiate and execute logging operations, and in our game, Node is listening for the announcement of the round winner. As shown in the image below, there is a front end to our game (the hosted website) and a back end to our game (an environment we created). Node.js is not technically in both environments. However, the framework assists in the execution on both ends, but technically, the node lives on our back end. 

The process starts with logging in to the RPSLS game. An Express.JS script parses the JSON from the logging inside the game and acts as middleware to handle the POST request from the API. In this instance, the script also handles authentication and request processing tasks. Once the request is authenticated, the new document is added to our MongoDB Altas (our NoSQL, SQL cloud-based database) using a Mongoose schema.

On the other hand, when we request game data, the process is similar. The middleware handles a GET request, validates a secret key, queries game data from MongoDB, formats it as CSV, and streams the file to the client for download.

* <IMAGE>

## WEBSITE Survey
#### Main index page
- This page is the site's main index. It starts immediately into the game, giving the player 10 seconds to choose a hand. 
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/index.PNG">
    </p>

#### Rules page
- Upon initial load, a video will play describing the rules of rock, paper, scissors, lizard, and Spock. It goes through each win/lose option and adds two new options (lizard and Spock) to the traditional game of rock, paper, and scissors. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/video.PNG">
    </p>
<br>

- Once the video plays through, that window closes, revealing a list and chart version of the game's rules. 
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
- This page will automatically download a CSV of all logged games if the key is provided. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/data.PNG">
    </p>
<be>

# Data Extraction, Transformation, and Loading
## Extraction 
- We pulled a CSV from the website where the data was collected and stored using MongoDB Atlas.

## Transform
- Several transformation parts included weighting rounds, creating a choice winner column, and normalizing the round numbers. 

## Load
- The initial data collection from the RPSLS website was pushed into our database. After it was downloaded from the database and transformed, it was loaded into the deep learning models.

## Tableau 
[LINK TO OUR TABLEAU](https://public.tableau.com/app/profile/tia.scott/viz/RPSLSOverview/ComputerV_PlayerChoice)


# Modeling

## Intro to Reinforcement Learning
For the RPSLS game, the best type of modeling is reinforcement learning. We took on the task to learn RL modeling to use it with our data. Reinforcement learning is a type of machine learning where an agent learns to make a decision based on actions in an environment to achieve a goal. Unlike supervised and unsupervised learning, reinforcement learning is about training to make actions for cumulative rewards.

## Set Baseline
To determine a baseline a deep learning model and RL model were made (RPSLS_DeepL_Model_Random_Actions and RPSLS_DQN_Model_Random). This allowed us to see how an agent would perform in a truly random environment. 
In the graphic below you can see that the random models are performing just above the expected probability for this game with an accuracy score of 40% for the deep learning model and a positive sum, or cumulative reward, of 1 for the RL model. Implying the model is learning a little but not very well. However, once you add in a strategy to the model (RPSLS_DQN_Model_Strategy), in this case, it was weighting the probabilities for rock, paper, scissors, lizard, and Spock, from the website's player data, the model's ability to learn the game jumps significantly with a much larger positive cumulative reward of 418. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/baseline.PNG">
    </p>
<br>

## Additional Models and Optimization 


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
* Front-end development with HTML, CSS, and JavaScript.
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
