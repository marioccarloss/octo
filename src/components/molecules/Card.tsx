import styles from "./Card.module.scss";

export const Card = () => {
  return (
    <article className={styles.card}>
      <header>Covered</header>
      <section>
        <strong className={styles.card__price}>
          <span className={styles.card__priceDollar}>$</span>
          <span className={styles.card__priceValue}>500k</span>
        </strong>
        <small className={styles.card__priceMonth}>$10.99 / month</small>
      </section>
    </article>
  );
};
