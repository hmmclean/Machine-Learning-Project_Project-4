# Machine-Learning-Project_Project-4
# Rock, Paper, Scissors, Lizard, Spock Game
## Overview
This project involved creating a website for a specific game, RPSLS, collecting user data from interactions with the game, storing this data, and then using it to build and compare machine learning models, including deep learning and reinforcement learning, to understand user behavior and potentially develop optimal strategies for the game.

[View our Website Here!](https://rpslsgame.com/index.html)

# Repo Navigation 
* Resources
    * Cleaned - CSVs of final cleaned data.
    * Data Sources - JSONs of final cleaned data. These are being hosted on a separate GitHub repo ([Activities](https://github.com/QbicleTKG/activities-data-json-hosting) and [Parks List](https://github.com/QbicleTKG/parks-list-data-json-hosting)).
    * Uncleaned - CSVs of data pulled from the NPS API.
    * NPS_API_Data_Pull - Code used to pull the data from the NPS API.
 * WEBSITE - HTML, JS, and CSS source documentation for our website. 
* Project Rubric - Text file containing the standards for our assignment.
* Data Transformation Jupyter Notebook - main code used for initial data cleaning.
* MongoApp - PyMongo Jupyter Notebook used to provide information on loading cleaned CSVs into MongoDB and JSONifying them.
* Assets - Images belonging to the repo.

# Data Extraction, Transformation, and Loading
- Below is a representation of our process from game creation, to data collection, to modeling. 
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/thought_process.png">
    </p>


## Extraction 
- We pulled a CSV from the RPSLS website.

## Transform
- We cleaned and organized the data into different features and bins, to train a deep learning model which then helped the reinforcement learning model perform better. 

## Load
- Data was collected and loaded into MongoDB Atlas via the website. Once it was transformed it was then loaded again into the deep learning model. 

# Website Outline
- Below is a representation of our process for filtering data and how our website logic might look.
<p align="center">
    <img src="https://github.com/hmmclean/Data-Visualization-Project_Project-3/blob/main/Assets/filter%20logic1.png" width="900">
    </p> 
<br>
<br>

- Below is the actual representation of our filtering process
<p align="center">
    <img src="https://github.com/hmmclean/Data-Visualization-Project_Project-3/blob/main/Assets/filter%20logic2.png" width="500">
    </p>



# Website Development

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
<br>

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

# Ethical Considerations
- In the process of creating our website and visulizations, we attempted to create this project with the utmost consideration for both legal and ethical practices. Given the complexity of this project we took several steps to ensure that we did not infringe on either of these duplicitous practices. The steps we did to make sure our project was in compliance were:
  
     * We used the National Parks Service API to gather our data directly from the source.
     * We did not use any web-scraping for any of the data related to our project.
     * While we did use the National Parks Logo for our project, a disclaimer was added to protect the service mark and trademark of the rights to the logo, 
       which belong to the NPS and are fully disclosed.
     * All pictures were purchased through IStock.com or created from scratch.
     * We also included a disclaimer that we were not officially affiliated with or endorsed by the National Parks Service on every page.
     * Lastly since this is a school project, we are not seeking payment, selling, or merchandising this website, and have fully cited our sources and recognition of the true owners of the trademarks.
     * Should we desire to implement this in the larger open public space, appropriate permission would be requested for the use of the NPS Arrowhead, service marks and any other pertinet trademarks. <https://www.nps.gov/subjects/partnerships/arrowhead-requests.htm#:~:text=The%20Arrowhead%20Symbol%20is%20the,Federal%20Regulations%20(36%20CFR)>

       *"This website celebrates our National Parks, and the National Park Service logo is used in conjunction to call
      attention to their service. This site is not officially affiliated with or endorsed by the National Park
      Service. For official information, visit the National Park Service's website. All registered trademarks belong
      to the National Park Service."*
 


# References and Resources
* [Database system (MongoDB Atlas) for data storage](https://www.mongodb.com/atlas/database) 
* Frontend development with HTML, CSS, and JavaScript.
* Libraries for modeling.
     * [TensorFlow](https://www.tensorflow.org/) 
     * [Keras](https://keras.io/examples/rl/)
     * [Keras-rl Agents](https://keras-rl.readthedocs.io/en/latest/agents/overview/)
     * [Building an Environment](https://gymnasium.farama.org/)
     * [Deep Q-Learning Research](https://towardsdatascience.com/self-learning-ai-agents-part-ii-deep-q-learning-b5ac60c3f47) 
* [ChatGPT](https://chat.openai.com/)


Website
Node.js - https://www.w3schools.com/nodejs/
	     - https://cloud.google.com/nodejs/docs/
MongoDB Atlas - https://cloud.mongodb.com/
Shakeeb Ashraf - I/O Project Advisor
 
General
ChatGPT - https://chat.openai.com/
