import { useRef, memo } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "components/atoms/NavItem";
import { Button } from "components/atoms/Button";

import { useData, Nav } from "hooks/useData";

import styles from "./Navigation.module.scss";

const Navigation = memo(() => {
  const navRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const { navigation, isLoading, error } = useData();

  const handleHamburger = () => {
    if (navRef.current) {
      if (navRef.current.classList.contains(styles["navigation--open"])) {
        navRef.current.classList.remove(styles["navigation--open"]);
      } else {
        navRef.current.classList.add(styles["navigation--open"]);
      }
    }

    if (btnRef.current) {
      if (
        btnRef.current.classList.contains(styles["navigation__hamburger--open"])
      ) {
        btnRef.current.classList.remove(styles["navigation__hamburger--open"]);
      } else {
        btnRef.current.classList.add(styles["navigation__hamburger--open"]);
      }
    }
  };

  if (error) return null;
  if (isLoading) return null;

  return (
    <>
      <nav className={styles.navigation} ref={navRef}>
        <ul className={styles.navigation__list}>
          {!isLoading &&
            navigation.map((nav: Nav) => (
              <NavItem key={nav.title} title={nav.title} link={nav.link} />
            ))}
        </ul>
        <div className={styles.navigation__ctas}>
          <Link to="/login">Log in</Link>
          <Button to="/contact" mode="secondary">
            Get a quote
          </Button>
        </div>
      </nav>
      <button
        className={styles.navigation__hamburger}
        ref={btnRef}
        aria-hidden="true"
        onClick={handleHamburger}
      >
        <span>Menú</span>
      </button>
    </>
  );
});

Navigation.displayName = "Navigation";

export { Navigation };
