import mock from "@/@fake-db/mock";

const data = {
  subscribersGained: {
    series: [
      {
        name: "Стажеры",
        data: [28, 40, 36, 52, 38, 60, 55],
      },
    ],
    analyticsData: {
      subscribers: 926,
    },
  },
  revenueGenerated: {
    series: [
      {
        name: "Revenue",
        data: [350, 275, 400, 300, 350, 300, 450],
      },
    ],
    analyticsData: {
      revenue: 97500,
    },
  },
  quarterlySales: {
    series: [
      {
        name: "Sales",
        data: [10, 15, 7, 12, 3, 16],
      },
    ],
    analyticsData: {
      sales: "36%",
    },
  },
  ordersRecevied: {
    series: [
      {
        name: "Orders",
        data: [10, 15, 8, 15, 7, 12, 8],
      },
    ],
    analyticsData: {
      orders: 97500,
    },
  },
  siteTraffic: {
    series: [
      {
        name: "Посещаемость",
        data: [150, 200, 125, 225, 200, 250],
      },
    ],
  },
  activeUsers: {
    series: [
      {
        name: "Студенты",
        data: [75, 100, 90, 110, 130, 110, 150],
      },
    ],
  },
  newsletter: {
    series: [
      {
        name: "Newsletter",
        data: [365, 390, 365, 400, 375, 400],
      },
    ],
  },
};

mock
  .onGet("/card/card-statistics/subscribers")
  .reply(() => [200, data.subscribersGained]);

mock
  .onGet("/card/card-statistics/revenue")
  .reply(() => [200, data.revenueGenerated]);

mock
  .onGet("/card/card-statistics/sales")
  .reply(() => [200, data.quarterlySales]);

mock
  .onGet("/card/card-statistics/orders")
  .reply(() => [200, data.ordersRecevied]);

mock
  .onGet("/card/card-statistics/site-traffic")
  .reply(() => [200, data.siteTraffic]);

mock
  .onGet("/card/card-statistics/active-users")
  .reply(() => [200, data.activeUsers]);

mock
  .onGet("/card/card-statistics/newsletter")
  .reply(() => [200, data.newsletter]);
