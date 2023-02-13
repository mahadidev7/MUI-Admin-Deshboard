/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable array-callback-return */
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const deshBoardInformationArray = [
    {
      title: "12,361",
      subtitle: "Emails Sent",
      progress: "0.75",
      increase: "+14%",
      icon: (
        <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
      ),
    },
    {
      title: "431,225",
      subtitle: "Sales Obtained",
      progress: "0.50",
      increase: "+21%",
      icon: (
        <PointOfSaleIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
    {
      title: "32,441",
      subtitle: "New Clients",
      progress: "0.30",
      increase: "+5%",
      icon: (
        <PersonAddIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
    {
      title: "1,325,134",
      subtitle: "Traffic Received",
      progress: "0.80",
      increase: "+43%",
      icon: (
        <TrafficIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
  ];

  return (
    <Grid container spacing={1} rowSpacing={2} mb={2}>
      {/* HEADER */}
      <Grid item xs={12} md={12} ml={2} mr={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
        </Box>
      </Grid>

      {/* ROW 1 */}
      {deshBoardInformationArray.map(
        ({ title, subtitle, progress, increase, icon }, key) => (
          <Grid item xs={12} md={3} key={key}>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              ml={2}
              mr={2}
              pt={3}
              pb={3}
            >
              <StatBox
                title={title}
                subtitle={subtitle}
                progress={progress}
                increase={increase}
                icon={icon}
              />
            </Box>
          </Grid>
        )
      )}

      {/* ROW 2 */}
      <Grid item xs={12} md={8} mt={1}>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          ml={2}
          mr={2}
          pt={3}
          pb={3}
          height={350}
        >
          <Box
            p="20px 30px"
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
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} mt={1}>
        <Box
          height={350}
          backgroundColor={colors.primary[400]}
          overflow="auto"
          ml={2}
          mr={2}
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
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
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
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>

      {/* ROW 3 */}
      <Grid item xs={12} md={4} mt={1}>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          ml={2}
          mr={2}
          p={3}
          height="300px"
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
        </Box>
      </Grid>
      <Grid item xs={12} md={4} mt={1}>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          mr={2}
          ml={2}
          pt={3}
          pb={3}
          height="300px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ padding: "0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} mt={1}>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          ml={2}
          mr={2}
          p={3}
          height="300px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Grid>

      <a
        href="https://mahadidev7-portfolio.web.app/"
        target="_blank"
        style={{
          margin: "20px auto",
          padding: "10px 20px",
          color: colors.grey[100],
          textDecoration: "none",
          backgroundColor: colors.primary[400]
          
        }}
      >
        This is a portfolio Project. Create by Mahadidev7
      </a>
    </Grid>
  );
};

export default Dashboard;
