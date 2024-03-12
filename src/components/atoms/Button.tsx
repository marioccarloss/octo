import { memo, ReactNode, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import classNames from "shared/classNames";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "primary" | "secondary";
  size?: "large" | "medium" | "small";
  to?: string;
  children: ReactNode;
}

interface ButtonWithLinkProps extends ButtonProps {
  to?: string;
}

const hasTo = (props: ButtonProps): props is ButtonWithLinkProps => {
  return !!props.to;
};

const Button = memo(
  ({ mode = "primary", size = "medium", ...props }: ButtonProps) => {
    const components = {
      className: classNames(
        styles.btn,
        styles[`btn--${mode}`],
        styles[`btn--${size}`],
      ),
      ...props,
    };

    if (hasTo(props)) {
      return (
        <Link to={props.to as string} className={components.className}>
          {props.children}
        </Link>
      );
    }

    return <button {...components} />;
  },
);

Button.displayName = "Button";
export { Button };
