import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PublicIcon from "@mui/icons-material/Public";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useEffect, useState } from "react";
import {
  getTotalOrder,
  getTotalSales,
  getAvgScore,
  getTotalStates,
  getTransaction,
} from "../../fetcher";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [totalOrder, setTotalOrder] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [avgScore, setAvgScore] = useState(0);
  const [totalStates, setTotalStates] = useState(0);
  const [recentTrans, setRecentTrans] = useState([
    {
      order_id: "0",
      Payment_value: "0",
      customer_id: "0",
      order_purchase_timestamp: "0",
    },
  ]);
  const [totalOrderChangeRate, setTotalOrderChangeRate] = useState(0);
  const [totalSalesChangeRate, setTotalSalesChangeRate] = useState(0);
  const [totalScoreChangeRate, setTotalScoreChangeRate] = useState(0);
  const [totalStateChangeRate, setTotalStateChangeRate] = useState(0);

  useEffect(() => {
    getTotalOrder().then((res) => {
      setTotalOrder(res.results[0]["order_2018"]);
      setTotalOrderChangeRate(res.results[0]["difference_2017_2018"]);
    });
    getTotalSales().then((res) => {
      setTotalSales(res.results[0]["sales_2018"]);
      setTotalSalesChangeRate(res.results[0]["difference_2017_2018"]);
    });
    getAvgScore().then((res) => {
      setAvgScore(res.results[0]["review_2018"]);
      setTotalScoreChangeRate(res.results[0]["difference_2017_2018"]);
    });
    getTotalStates().then((res) => {
      setTotalStates(res.results[0]["state_2018"]);
      setTotalStateChangeRate(res.results[0]["difference_2017_2018"]);
    });
    getTransaction().then((res) => {
      setRecentTrans(res.results);
    });
  });

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Oeda Platform"
          subtitle="An User Interactive Ecommerce Platform"
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            // TODO: replace it with accurate data
            title={totalOrder.toLocaleString()}
            subtitle="Total Number of Order in 2018"
            progress={parseFloat(totalSalesChangeRate) / 100}
            increase={"+" + totalOrderChangeRate}
            icon={
              <AddShoppingCartIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={totalSales.toLocaleString()}
            subtitle="Total Sales in 2018"
            progress={parseFloat(totalSalesChangeRate) / 100}
            increase={"+" + totalSalesChangeRate}
            icon={
              <AttachMoneyIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={avgScore.toLocaleString()}
            subtitle="Average Review in 2018"
            progress={parseFloat(totalScoreChangeRate) / 100}
            increase={"+" + totalScoreChangeRate}
            icon={
              <RateReviewIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={totalStates.toLocaleString()}
            subtitle="States Involved in Brazil"
            progress={parseFloat(totalStateChangeRate) / 100}
            increase={totalStateChangeRate}
            icon={
              <PublicIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Top 10 Products
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                With Highest Review Score
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 7"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {recentTrans.map((transaction, i) => (
            <Box
              key={`${transaction.order}-${i}}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.order_id}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.customer_id}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>
                {transaction.order_purchase_timestamp.substring(0, 10)}
              </Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.Payment_value}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box> */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Brazil Map
          </Typography>
          <Box height="200px">
            <GeographyChart />
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
