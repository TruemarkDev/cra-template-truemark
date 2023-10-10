import React from "react";

import Layout from "containers/Layout/Layout";

import Welcome from "components/Home/Welcome";

const Home = () => {
  return (
    <Layout>
      <section>
        <Welcome />
      </section>
    </Layout>
  );
};

export default Home;
