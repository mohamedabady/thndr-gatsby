import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => (
  <Layout pageTitle={"Home Page"}>
    <p>great learning following gatsby documentation</p>
    <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="../images/cuteDog.webp"
    />
  </Layout>
);

export const Head = () => <title>Home Page</title>;

export default IndexPage;
