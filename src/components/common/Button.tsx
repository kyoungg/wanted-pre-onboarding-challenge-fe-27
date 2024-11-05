import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size: "small" | "large";
  color: "green" | "gray" | "red" | "blue";
  isDisabled?: true | false;
  type: "button" | "submit" | undefined;
}

export default function Button({
  onClick,
  size,
  color,
  title,
  isDisabled = false,
  type,
}: Props) {
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[size]}`}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
    >
      {title}
    </button>
  );
}
