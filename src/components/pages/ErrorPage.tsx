import { Layout } from "components/templates/Layout";
import { Button } from "components/atoms/Button";

export const ErrorPage = () => {
  return (
    <Layout>
      <article
        style={{
          background: "var(--color-quaternary)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "var(--color-primary)", fontSize: "4rem" }}>
          Error 404
        </h1>
        <Button to="/" mode="primary">
          Back to Home
        </Button>
      </article>
    </Layout>
  );
};
