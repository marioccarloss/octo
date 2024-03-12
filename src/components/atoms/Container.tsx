import { memo, ReactNode } from "react";

import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
};
const Container = memo(({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
});

Container.displayName = "Container";
export { Container }