import { memo } from "react";

import { Container } from "components/atoms/Container";
import { Typography } from "components/atoms/Typography";
import { Button } from "components/atoms/Button";
import { Card } from "components/molecules/Card";

import { useData } from "hooks/useData";

import image from "assets/images/happy.png";
import cover from "assets/images/cover.png";
import styles from "./Hero.module.scss";

const Hero = memo(() => {
  const { home } = useData();

  return (
    <article className={styles.hero}>
      <Container>
        <Typography mode="title">
          <span
            dangerouslySetInnerHTML={{
              __html: `${home["header-title"]}`,
            }}
          />
        </Typography>
        <Button to="/" mode="primary">
          <img src={image} alt="Usuario" />
          <span>{home["header-cta"]}</span>
        </Button>
      </Container>
      <div className={styles.hero__cover}>
        <Card />
        <figure>
          <img src={cover} alt="cover" />
        </figure>
      </div>
    </article>
  );
});

Hero.displayName = "Hero";

export { Hero };
