import config from "./config.json";

const getToTalOrder = async () => {
  var res = await fetch(
    `http://${config.server_host}:${config.server_port}/YearlyOrder`,
    {
      method: "GET",
    }
  );
  return res.json();
};

export { getToTalOrder };
