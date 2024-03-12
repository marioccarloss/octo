import { memo } from "react";
import { Link } from "react-router-dom";
import { Nav } from "hooks/useData";

import styles from "./NavItem.module.scss";

const NavItem = memo(({ title, link }: Nav) => {
  return (
    <li className={styles.navItem}>
      <Link to={link}>{title}</Link>
    </li>
  );
});

NavItem.displayName = "NavItem";

export { NavItem };
