import { Layout } from "components/templates/Layout";
import { Hero } from "components/organisms/Hero";
import { Brands } from "components/molecules/Brands";

export const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Brands />
    </Layout>
  );
};
