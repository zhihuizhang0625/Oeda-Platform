# Oeda-Platform
## Description of Project

Online shopping is becoming more and more popular as a result of the Internet's quick development. The way that people purchase is also steadily changing from offline to online. Data on online retail sales provide useful information for firms given the slow but steady expansion of e-commerce. In order to develop a user-friendly, intuitive Business Intelligence or Business Analytics solution for e-commerce, our project will concentrate on the sales data of online merchants. With the use of the data, this project will investigate the connection between consumer preferences and Brazilian e-commerce marketplaces and provide pertinent infographics. We can assist retailers in better understanding the overall industry, developing sales tactics that are more in line with market trends, and creating items that satisfy customer wants by studying the data of people's online purchasing preferences. Analytics for sales and marketing insights often just involve data on firm sales. Geographical information will be kept in our study for a more thorough market analysis. Because our data integrates geographic information, customers may easily do regional market research because they can easily comprehend the consumption patterns of various regions depending on area features.

## Project Structure

`/clean_datasets`
This folder contains all datasets that we need for retail information. It includes data about products(categories, prices, reviews, etc.), geographic information, customer information, and payment information.

`/raw_datasets`
This folder contains the raw datasets from the websites. It includes uncleaned data, including original product information (categories, price, reviews, etc.), geographic information, customer information, and payment information.

`/colab_data_cleaning`
This folder contains the colab notebooks we used to clean raw datasets and generate some queries and explorative data analysis. Pandas and pandasSQL are the primary tools for data-cleaning processes.

### Client
- `gitignore`: A gitignore file for the client application.
- `package.json`: maintains the project dependency tree; defines project properties, scripts, etc 
- `package-lock.json`: saves the exact version of each package in the application dependency tree for installs and maintenance

`/client/public` 
This folder contains static files like `index.html` and assets like `picture.jpg` for specifying web page titles, crawlability, et cetera. The `manifest.json` file and pictures (`logo192.png` and `logo512.png`) create scaffolding for the website. `favicon.icon` provides icons used for the website.

`/client/src` 
This folder contains the main source code for the React application. Specifically: 
- `App.js`: Imports color context, use mode, theme, and baseline for CSS. Allows other parts of the website to access theme and color mode. This file also set up all routes to each page and the default routes.
- `config.json`: Holds server connection information (like port and host). 
- `fetcher.js`: Contains helper functions that wrap calls to API routes. Improved testability, reusability, and usability
- `index.css`: Set up content height, width, and .app display.
- `index.js`: This is the main JavaScript entry point to the application and stores the main DOM render call in React. For this application, page routing via components and imports for stylesheets are also embedded in this file.
- `theme.js`: This file sets up all colors and types of the website. It contains color tokens and applies material UI settings that allow users to change between light and dark color modes or create themes. It also has the topography with font family and font size.

`/scenes` This folder contains files for React components corresponding to the pages in the application (see the sections below for more details):
- `/bar`: This folder correspond to the components for the bar chart visualization. `index.jsx` file in the bar folder renders a bar chart for the top 10 rated products.
- `/dashboard`: The dashboard folder stores components of our main page and it contains all components on the dashboard page. The `index.jsx` file inside this folder acts like a container where we render all the subcomponents of the page. It helps to split the code into small chunks. Also, it implements and combines all components of a dashboard page, including search bars, graphs, titles, sidebars, etc.
- `/geography`: This folder contains a map of the Brazilian cities rendered by the `index.jsx`. It displays products and sales information of specific locations.
- `/global`: The global folder has components that can be utilized for all pages in the website. The `SiderBar.jsx` file allows access to the side bar for all pages. `SiderBar.jsx` implements all components of the side bar, including styles, links, tokens, and icons. It also enables the functionality of collapsing.
- `/market`: This folder corresponds the market analysis page of the website. The `index.jsx` of this folder renders a table with all market analysis related components. It also implements functionalities like search, filter, change table size, export, etc.
- `/orders`: The orders folder stores the page for the Best Selling Products Ranked by Order Amount. Its `index.jsx` file implements and renders a line chart with the top trending products in different years to show changes in popular products over time. It also implements labels, titles, styles, etc.
- `/sales`: This folder has a similar structure with the orders folder. It contains all layouts, styles, infomation, etc. of the Top 10 revenue-generating products by category (with highest sales). The `index.jsx` file implements the page with a a line chart with the best sales products in different categories to display market trends for each product category. 
- `/search`: The search folder stores necessary components for the search functionality. Its `index.jsx` file implements the search functionality especially for the market analysis page. Its search function allows users to search based on specified parameters. 
- `/searchCity`: This folder is similar to the search folder and stores necessary components for the search function by cities. Its `index.jsx` file also implements the search function but especially for the cities parameter. It implements functions for users to access and search market information based on cities.

`/components` Similar to the `/scenes` folder, this folder contains files for React components corresponding to smaller, reusable components, especially those used by pages. This application has a bar chart for top-rated products (implemented by `BarChart.jsx`) and a geography chart (implemented by `GeographyChart.jsx`). It also has the header (implemented by `Header.jsx`), a line chart of top trending products (implemented by `LineChartOrder.jsx`), line chart of the highest sales product (implemented by `LineChartSales.jsx`). Moreover, the progress circle (implemented by `ProgressCircle.jsx`) and the start box (implemented by `StatBox.jsx`) are included. All of these components are used on more than one page. This format is excellent for more extensive applications (such as the project).

### Server
This folder holds the server application files, tests, and dependencies (as required by Node.js). 
- `gitignore`: A gitignore file for the Node application.
- `config.json`: Holds the RDS connection credentials/information and application configuration settings (like port and host).
- `package.json`: maintains the project dependency tree; defines project properties, scripts, etc
- `package-lock.json`: saves the exact version of each package in the application dependency tree for installs and maintenance.
- `routes.js`:This is where the code for the API routes' handler functions go. 
- `server.js`: The code for the routed HTTP application. It imports routes. js and maps each route function to an API route and type (like GET, POST, etc.). It also 'listens' to a specific port on a host using the parameters in config.json.

`/server/_tests`
This folder contains the test files for the API:
- `results.json`: Stores (some) expected results for the tests in a json encoding.
- `tests.js`: Stores the tests for the API.

## Instructions for building the App locally
### Set Up
You  will  need Node.js  on  your  machine  for  this  project.  You  should  verify that the following commands run and give a reasonable output on your terminal: 
- `npm -v`
- `node -v`

Open a new terminal and `cd` into the server folder, then run `npm install`:
```
cd server
```
```
npm install
```
Do the same for the client (you should run `cd ../client` instead of `cd client` if in the `/server` folder):
```
cd client
```
```
npm install
```
This will download and save the required dependencies into the `node_modules` folder within the `/client` and `/server` directories.

### Run the app
1. Start the server application by running the command `npm start` in a terminal window
2. After starting the server application, which should run on port 8080, you should start the React application by running the command `npm start` within the `/client` directory in a terminal window

**Note**: It is imperative that you run the server application before starting the client since the client assumes that the server is able to communicate and return necessary data.
