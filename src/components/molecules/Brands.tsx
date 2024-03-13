import { memo } from "react";

import { Typography } from "components/atoms/Typography";
import { Icon } from "components/atoms/Icon";
import { Container } from "components/atoms/Container";

import styles from "./Brands.module.scss";

export const Brands = memo(() => {
  return (
    <section className={styles.brands}>
      <header>
        <Container>
          <Typography mode="subtitle">As seen on!</Typography>
        </Container>
        <div className={styles.brands__arrow}></div>
      </header>
      <div className={styles.brands__list}>
        <Icon icon="logoTechCrunch" />
        <Icon icon="logoForbes" />
        <Icon icon="logoWSJ" />
      </div>
    </section>
  );
});

Brands.displayName = "Brands";
