import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { CbmOverviewData, DemographyData, EconomicActivityData, HouseholdCharacteristicsData, HousingCharacteristicsData, LiteracyData, PoliticalParticipationData } from "src/datasets";
import { TableHousingCharacteristic } from "src/sections/overview/TableHousingCharacteristic";
import { TableHouseholdCharacteristic } from "src/sections/overview/TableHouseholdCharacteristic";
import { TableDemography } from "src/sections/overview/TableDemography";
import { TableLiteracy } from "src/sections/overview/TableLiteracy";
import { TableCbmOverview } from "src/sections/overview/TableCbmOverview";
import { TableEconomic } from "src/sections/overview/TableEconomic";
import { TablePoliticalParticipation } from "src/sections/overview/TablePoliticalParticipation";

const Page = () => (
  <>
    <Head>
      <title>Overview | CBM</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewBudget difference={12} positive sx={{ height: "100%" }} value="24k" />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: "100%" }}
              value="18k"
            />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTasksProgress sx={{ height: "100%" }} value={75} />
          </Grid>
          <Grid xs={12} sm={6} lg={3}>
            <OverviewTotalProfit sx={{ height: "100%" }} value="6k" />
          </Grid>
          <Grid xs={12} lg={8}>
            <OverviewSales
              chartSeries={[
                {
                  name: "This year",
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                },
                {
                  name: "Last year",
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <OverviewLatestOrders
              orders={[
                {
                  id: "f69f88012978187a6c12897f",
                  ref: "Apas",
                  amount: 30.5,
                  customer: {
                    name: "Ekaterina Tankova",
                  },
                  createdAt: 1555016400000,
                  status: "pending",
                },
                {
                  id: "9eaa1c7dd4433f413c308ce2",
                  ref: "Lahug",
                  amount: 25.1,
                  customer: {
                    name: "Cao Yu",
                  },
                  createdAt: 1555016400000,
                  status: "completed",
                },
                {
                  id: "01a5230c811bd04996ce7c13",
                  ref: "Apas",
                  amount: 10.99,
                  customer: {
                    name: "Alexa Richardson",
                  },
                  createdAt: 1554930000000,
                  status: "flunk",
                },
                {
                  id: "1f4e1bd0a87cea23cdb83d18",
                  ref: "Talamban",
                  amount: 96.43,
                  customer: {
                    name: "Anje Keizer",
                  },
                  createdAt: 1554757200000,
                  status: "pending",
                },
                {
                  id: "9f974f239d29ede969367103",
                  ref: "Tisa",
                  amount: 32.54,
                  customer: {
                    name: "Clarke Gillebert",
                  },
                  createdAt: 1554670800000,
                  status: "completed",
                },
                {
                  id: "ffc83c1560ec2f66a1c05596",
                  ref: "Labangon",
                  amount: 16.76,
                  customer: {
                    name: "Adam Denisov",
                  },
                  createdAt: 1554670800000,
                  status: "completed",
                },
              ]}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <TableCbmOverview
              tally={CbmOverviewData}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <TableHousingCharacteristic
              tally={HousingCharacteristicsData}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <TableHouseholdCharacteristic
              tally={HouseholdCharacteristicsData}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <TableDemography
              tally={DemographyData}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <TableLiteracy
              tally={LiteracyData}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <TablePoliticalParticipation
              tally={PoliticalParticipationData}
              sx={{ height: "100%" }}
            />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <TableEconomic
              tally={EconomicActivityData}
              sx={{ height: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
