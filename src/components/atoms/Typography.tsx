import { HTMLAttributes, ReactNode } from "react";

import classNames from "shared/classNames";

import styles from "./Typography.module.scss";

interface TypographyProps {
  mode?: "title" | "subtitle" | "body";
  size?: "large" | "medium" | "small";
  align?: "left" | "right" | "center" | "justify";
  children: ReactNode;
}

interface ComponentProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Typography = ({
  mode = "body",
  size = "medium",
  align = "left",
  children,
  ...props
}: TypographyProps & { htmlFor?: string }) => {
  const components: ComponentProps = {
    className: classNames(
      styles.typo,
      styles[`typography--${mode}`],
      styles[`typography--${size}`],
      styles[`typography--${align}`],
    ),
    ...props,
  };

  if (mode === "title") {
    return <h1 {...components}>{children}</h1>;
  }

  if (mode === "subtitle") {
    return <h2 {...components}>{children}</h2>;
  }

  if (mode === "body") {
    return <p {...components}>{children}</p>;
  }

  return <span {...(components as HTMLAttributes<HTMLElement>)} />;
};
