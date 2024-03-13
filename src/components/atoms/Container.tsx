import { memo, ReactNode } from "react";

import classNames from "shared/classNames";

import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = memo(({ children, className }: ContainerProps) => {
  const components = {
    className: classNames(
      styles.container,
      styles[`${className}`],
    ),
  };
  return <div className={components.className}>{children}</div>;
});

Container.displayName = "Container";
export { Container }