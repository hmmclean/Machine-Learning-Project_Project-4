# Machine-Learning-Project_Project-4
# Rock, Paper, Scissors, Lizard, Spock Game

# Repo Navigation 
* ROOT - HTML, JS, and CSS source documentation for our website. 
* Q - Folder containing RL modeling code.
* HMM_Modeling - Folder containing jupyter notebooks for a deep learning model and RL model using an environment built with random choice and an RL model using an environment built with strategy. 
* Data - txt file
* Output - csv file
* Score Export - jupyter notebook file
* Assets - Images belonging to the repo.

## Overview
This project involved creating a website for a specific game, RPSLS, collecting user data from interactions with the game, storing this data, and then using it to build and compare machine learning models, including deep learning and reinforcement learning, to understand user behavior and potentially develop optimal strategies for the game.

[View our Website Here!](https://rpslsgame.com/index.html)

TABLEAU LINK: https://public.tableau.com/app/profile/tia.scott/viz/RPSLSOverview/ComputerV_PlayerChoice?publish=yes

- Below is a representation of our process from game creation, to data collection, to modeling. 
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/thought_process.png">
    </p>

# Game and Website Development

## WEBSITE Navigation 
- Once data was JSONified wireframes were created to contain the main navigation wiring, content containers, map containers, headers and footers. A main page was created as well as a main CSS for implementing color, styling and event specific handling, such as mozilla neglect. Once the main page was created other pages were created and modified to fit the page requirements. Images were created and added at this point. Once the page was built, functionality was added to populate the dropdowns, return map logic, reset the page and navigate away from the page. Other functionality was built such as background_logic.js and popup_logic.js to handle non-page specific requirements. 

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
           * auto_player_selection.js - Script that handles the auto selection for the player if they do not select within the 10 sec time allotment. 
           * computer_textchoice.js - Script that handles 
           * game_id.js - Script that creates a unique game ID for each game.
           * game_logic.js - Script that runs the entire game. 
           * player_choice.js - Script that 
           * popup_logic.js - Script that 
           * selection_prompt.js - Script that
           * video_popup.js - Script that creates the video popup on the rules page. 
           * vs_image.js - Script that

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
ADD INFORMATION


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
