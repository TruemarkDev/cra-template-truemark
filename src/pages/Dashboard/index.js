import React from "react";

import Layout from "containers/Layout/Layout";

import DashboardComponent from "components/Dashboard/Dashboard";

const Dashboard = () => {
  return (
    <Layout>
      <section>
        <DashboardComponent />
      </section>
    </Layout>
  );
};

export default Dashboard;
