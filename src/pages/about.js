import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
  <Layout pageTitle="About Thndr">
    <p>
      here we will add all the about information about our initial site
      thndr-gatsby
    </p>
  </Layout>
);

export const Head = () => <Seo title="About Thndr" />;

export default AboutPage;
