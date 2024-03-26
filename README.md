# Machine-Learning-Project_Project-4
For our final project, we are creating a website with the game, rock, paper, scissors, lizard, spock to collect data on player choices. We will use this data to train a model and feed it back into the computer to make better choices against the player.
# Visualizing America's State Parks
## Exploring America's Natural Wonders: A Comprehensive National Parks Website Project

[View our Website Here!](https://hmmclean.github.io/Data-Visualization-Project_Project-3/WEBSITE/index.html)

# Overview
We started with the idea of building a website to help people determine which of America’s national parks to visit. We wanted to show activities, distances, states, directions, and weather. This project aims to create a valuable resource for individuals interested in exploring and learning about the diverse national parks across the United States.

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
- Below is a representation of our DTL process
<p align="center">
    <img src="https://github.com/hmmclean/Data-Visualization-Project_Project-3/blob/main/Assets/DTLpng.png" width="650">
    </p>


## Extraction 
- We pulled 5 CSVs from the National Park Services API:
   - Activities
   - Fees and Passes
   - Park Activities
   - Parks List
   - Visitors' Centers

## Transform
- After some deliberation as a team and diving into each spreadsheet, we decided to keep only the Activities database and to merge the Fees/Passes and Parks List datasets.

## Load
- Once data cleaning was complete, the data was loaded into MongoDB and JSONified via PyMongo. We chose MongoDB due to the ease with which it can be integrated into Python/Jupyter Notebooks using PyMongo. The JSON files were hosted on separate Github repos to allow easy access to the data for website construction.
### Note! If you are attempting this project yourself given the data here, the two code lines you need to upload the cleaned CSVs are ```mongoimport --type csv -d national_parks -c parks_list --drop --headerline --file parks_list_cleaned.csv```, and ```mongoimport --type csv -d national_parks -c activities --drop --headerline --file activities.csv```.

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
           * MAIN LOGIC FOR PAGE FUNCTIONALITY
              *  background_logic.js - Script that rotates the background of all the pages
              *  popup_logic.js - Script that handles the popup for the about portion of the page
           * view_logic.js - Script that handles the carousel for the index page
           * park_logic.js - Script that handles the dropdown, filtering and map for the park page
           * park_reset_logic.js - Script that resets the parks page back to initializaiton state
           * activity_logic.js - Script that handles the dropdown, filtering and map for the activity page
           * activity_reset_logic.js - Script that resets the activity page back to initializaiton state
           * state_logic.js - Script that handles the dropdown, filtering and map for the state page
           * state_reset_logic.js - Script that resets the state page back to initializaiton state
           * directions_logic.js - Script that handles the map for the directions page
           * directions_reset.js - Script that resets the activity page back to initializaiton state *only clears icons as the app is in dev and layers are buggy*

## WEBSITE Survey
#### Main index page
- This page is the main index of the site. It starts immediately into the game giving the player 10 seconds to choose a hand. 
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/index.png" width="700">
    </p>

#### Rules page
- Upon initial load, a video will play describing the rules of rock, paper, scissors, lizard, spock. It goes through each win/lose option and adds two new options (lizard and Spock) to the traditional game of rock, paper, scissors. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/video.png" width="700">
    </p>
<br>

- Once the video plays through, that window closes revealing a list and chart version of the rules of the game. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/rules.png" width="700">
    </p>
<br>

#### About Us page
- This page describes the three project coworkers. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/about_us.png" width="700">
    </p>
<br>

#### Data page
- If the key is provided this page will automatically download a csv of all logged games. 
<br>
<br>
<p align="center">
    <img src="https://github.com/hmmclean/Machine-Learning-Project_Project-4/blob/main/Assets/data.png" width="700">
    </p>
<br>

# Project Role Overview
- A summary of efforts for the RPSLS Project

 * State Parks Project
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
* [National Park Service API](https://www.nps.gov/subjects/developer/api-documentation.htm)
* [Database system (MongoDB) for data storage](www.mongodb.com) 
* Frontend development with HTML, CSS, and JavaScript.
* Mapping libraries for map visualization and geospatial tools for distance calculations.
     * [Leaflet](https://leafletjs.com/) 
     * [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/)
     * [Leaflet Control Geocoder](https://github.com/perliedman/leaflet-control-geocoder) 
* [ChatGPT](https://chat.openai.com/)
