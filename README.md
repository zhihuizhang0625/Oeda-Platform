# CIS550-Final-Project
## Description of Project

The rapid development of the Internet has made online shopping more and more common. People's shopping habits are also gradually shifting from offline to online. Given the gradual growth of e-commerce, insights from online retail sales data are helpful for businesses. Our project will focus on the sales data of online merchants to create a user-friendly, intuitive Business Intelligence or Business Analytics tool for e-commerce. This project will explore the relationship between people's preferences and Brazilian e-commerce markets and generate relevant graphs based on the data. By analyzing the data of people's online shopping preferences, we can help merchants better understand the entire market, formulate sales strategies that are more in line with market trends, and develop products that meet consumer needs. Typically, analytics for sales and marketing insights only include company sales data. Our analysis will retain geographical data for more in-depth market analysis. Since our data combines geographic information, users can understand the consumption habits of different regions based on the characteristics of areas, which provides convenience for regional market research.

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
- `/bar`: The `index.jsx` file in this folder generates a bar chart for the top 10 rated products.
- `/dashboard`: The `index.jsx` file in the dashboard folder combines all components of a dashboard page, including search bars, graphs, titles, sidebars, etc.
- `/geography`: The `index.jsx` file in this folder generate a map of the Brazilian cities and display products and sales information of specific locations.
- `/global`: The `SiderBar.jsx` file in the global folder should be used for all pages. The `SiderBar.jsx` file contains all styles, links, tokens, and icons. It also has the functionality of collapse.
- `/market`: The `index.jsx` file in the market folder implements a market analysis page containing titles and subtitles and imports the search functionality.
- `/orders`: The orders folder generates a line chart with the top trending products in different years to show changes in popular products over time.
- `/sales`: The sales folder creates a line chart with the best sales products in different categories to display market trends for other products.
- `/search`: The search folder enables the search functionality for market information. Allows users to search based on specified parameters.
- `/searchCity`: The searchCity folder implements the search functionality for market information. Allows users to search market information by city.

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

## Instructions for building it locally
### Set Up
You  will  need  the latest  version  of  Node.js  on  your  machine  for  this  assignment.  You  should  verify that the following commands run and give a reasonable output on your terminal: 
- `npm -v`
- `node - v`

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
