import config from "./config.json";

const getTotalOrder = async () => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/YearlyOrder`,
    {
      method: "GET",
    }
  );
  return res.json();
};

const getTotalSales = async () => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/YearlySales`,
    {
      method: "GET",
    }
  );
  return res.json();
};

const getAvgScore = async () => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/YearlyReview`,
    {
      method: "GET",
    }
  );
  return res.json();
};

const getTotalStates = async () => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/YearlyState`,
    {
      method: "GET",
    }
  );
  return res.json();
};

const getTransaction = async () => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/transaction`,
    {
      method: "GET",
    }
  );
  return res.json();
};

const getSearchResult = async (
  category,
  low,
  high,
  year,
  month,
  page,
  pagesize
) => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/search?category=${category}&low=${low}&high=${high}&year=${year}&month=${month}`,
    {
      method: "GET",
    }
  );
  return res.json();
};

const getMarketReport = async (year) => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/allmarket?year=${year}`,
    {
      method: "GET",
    }
  );
  return res.json();
};

const getHabitByState = async (state) => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/habit?state=${state}`,
    {
      method: "GET",
    }
  );
  return res.json();
};

export {
  getTotalOrder,
  getTotalSales,
  getAvgScore,
  getTotalStates,
  getTransaction,
  getSearchResult,
  getMarketReport,
  getHabitByState,
};
