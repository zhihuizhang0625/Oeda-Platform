# CIS550-Final-Project
Description of Project

This project aims to develop a user-friendly, intuitive BI/BA solution for e-commerce by concentrating on the sales data of online merchants. Data on online retail sales provide helpful information for firms, given the steady expansion of e-commerce. Our research will investigate the connection between consumer preferences and Brazilian online markets and provide valuable graphs based on the information. We can assist retailers in better understanding the overall industry, developing sales strategies that are more in line with market trends and creating products that satisfy customer wants by studying the data of people's online purchasing preferences. Our project will maintain regional data in addition to sales and marketing insights that solely include corporate sales data to conduct a more thorough market study. Since our data combines geographic information, users can efficiently conduct regional market research because they can easily understand the consumption patterns of various regions based on area characteristics.

Here is an explanation of project folders and their respective files: 

/clean_datasets
This folder contains all datasets that we need for retail information. It includes data about products(categories, price, reviews, etc), geographic information, customer information, and payment information.

/client
gitignore : A gitignore file for the client application. Read more on .gitignore files here
package.json : maintains the project dependency tree; defines project properties, scripts,etc 
package-lock.json : saves the exact version of each package in the application dependency tree for installs and maintenance

 /client/public 
This folder contains static files like index.html file and assets like robots.txt for specifying web page titles, crawlability, et cetera

 /client/src 
This folder contains the main source code for the React application. Specifically: 
config.json : Holds server connection information (like port and host). Could be replaced
by a .env file, but students find this easier to manage
fetcher.js : Contains helper functions that wrap calls to API routes. improved testability,
reusability, and usability
index.js : This the main JavaScript entry point to the application and stores the main DOM render call in React. For this application, page routing via components and imports for stylesheets are also embedded in this file.
/pages This folder contains files for React components corresponding to the three pages in the application (see the sections below for more details). These are:
○ HomePage.js : The landing page, provides a brief overview of players and matches in the form of two paginated tables
○ MatchesPage.js : A page specifically for matches: allows users to search for a specific match and view specific details for a selected match
○ PlayersPage.js : A page specifically for players: allows users to search and filter for players and provides a detailed view of the player with visualizations for selected statistics
/components Similar to the /pages folder, but this folder contains files for React components corresponding to smaller, reusable components, especially those used by  pages. In this application, this is only the top navigation bar (described in MenuBar.js ) used by all three pages. This is a good structure to follow for larger applications (such as the project)
package.json: Includes information about packages we use in the application.

/server
This folder holds the server application files, tests, and dependencies (as required by Node.js). 
gitignore:A gitignore file for the Node application.
config.json: Holds the RDS connection credentials/information and application configuration settings (like port and host).
package.json: maintains the project dependency tree; defines project properties, scripts, etc
package-lock.json: saves the exact version of each package in the application dependency tree for installs and maintenance.
routes.js:This is where the code for the API routes' handler functions go. 
server.js: The code for the routed HTTP application. It imports routes. js and maps each route function to an API route and type (like GET, POST, etc). It also 'listens' to a specific port on a host using the parameters in config.json.

/server/_tests
This folder contains the test files for the API:
results.json: Stores (some) expected results for the tests in a json encoding.
tests.js: Stores the tests for the API.
