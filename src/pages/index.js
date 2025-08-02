import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout pageTitle={"Home Page"}>
    <p>great learning following gatsby documentation</p>
  </Layout>
);

export const Head = () => <title>Home Page</title>;

export default IndexPage;
