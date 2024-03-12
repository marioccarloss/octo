import { HTMLAttributes } from "react";

import * as icons from "components/atoms/IconsCollection";

export type IconsType = keyof typeof icons;

import classNames from "shared/classNames";

import styles from "./Icon.module.scss";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: IconsType;
  size?: "small" | "medium" | "large";
}

export const Icon = ({ size = "medium", icon, ...props }: IconProps) => {
  const components = {
    className: classNames(styles.icon, styles[`icon--${size}`]),
  };
  return (
    <span className={components.className} {...props}>
      {icons[icon]()}
    </span>
  );
};
