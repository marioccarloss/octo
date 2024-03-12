import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Navigation } from "components/molecules/Navigation";
import Logo from "components/atoms/icons/Logo";
import styles from "./Layout.module.scss";
type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <header className={styles.layout__header}>
        <Link to="/" className={styles.layout__logo}>
          <Logo />
        </Link>
        <Navigation />
      </header>
      {children}
    </div>
  );
};
