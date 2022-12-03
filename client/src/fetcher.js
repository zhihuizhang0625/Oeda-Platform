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

export {
  getTotalOrder,
  getTotalSales,
  getAvgScore,
  getTotalStates,
  getTransaction,
};
