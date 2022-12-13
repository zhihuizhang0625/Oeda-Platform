# CIS550-Final-Project
## Description of Project

This project aims to develop a user-friendly, intuitive BI/BA solution for e-commerce by concentrating on the sales data of online merchants. Data on online retail sales provide helpful information for firms, given the steady expansion of e-commerce. Our research will investigate the connection between consumer preferences and Brazilian online markets and provide valuable graphs based on the information. We can assist retailers in better understanding the overall industry, developing sales strategies that are more in line with market trends, and creating products that satisfy customer wants by studying the data of people's online purchasing preferences.


Our project will maintain regional data in addition to sales and marketing insights that solely include corporate sales data to conduct a more thorough market study. Since our data combines geographic information, users can efficiently conduct regional market research because they can easily understand the consumption patterns of various regions based on area characteristics.

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
- `/orders`: The `index.jsx` file in the orders folder generates a line chart with the top trending products in different years to show changes in popular products over time.
- `/sales`: The `index.jsx` file in the sales folder creates a line chart with the best sales products in different categories to display market trends for other products.
- `/search`: The `index.jsx` file in the search folder enables the search functionality for market information. Allows users to search based on specified parameters.
- `/searchCity`: The `index.jsx` file in the searchCity folder implements the search functionality for market information. Allows users to search market information by city.

`/components` Similar to the `/scenes` folder, this folder contains files for React components corresponding to smaller, reusable components, especially those used by pages. This application has a bar chart for top-rated products (described in `BarChart.jsx`) and a geography chart (described in `GeographyChart.jsx`). It also has the header (described in `Header.jsx`), a line chart of top trending products (described in `LineChartOrder.jsx`), line chart of the highest sales product (described in `LineChartSales.jsx`). Moreover, the progress circle (described in `ProgressCircle.jsx`) and the start box (described in `StatBox.jsx`) are included. All of these components are used on more than one page. This format is excellent for more extensive applications (such as the project).

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

### Instructions for building it locally
#### Set Up
You  will  need  the latest  version  of  Node.js  on  your  machine  for  this  assignment.  You  should  verify that the following commands run and give a reasonable output on your terminal: 
- `npm -v`
- `node - v`

The  recommended   Node  version i s  14.17.x  ,  where  x  can  be  any  number  -  slightly older/newer versions  of  Node  would  probably  work  as  well.
 Users will  also  need  to  use  the  (built-in)  terminal  for  your  operating  system  and should  have  a  code editor (with the ability to open .  md  ,  .js  , and .  json  files).
The users need to first open server, then open the client folder.
