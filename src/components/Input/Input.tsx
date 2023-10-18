import { FC, ReactNode } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

interface IProps {
  className?: string;
  placeholder?: string;
  leftComponents?: ReactNode;
  rightComponents?: ReactNode;
}

export const Input: FC<IProps> = ({
  className,
  placeholder = "Placeholder",
  leftComponents,
  rightComponents,
}) => {
  const _class = clsx(styles.root, className);
  return (
    <div className={styles.input}>
      <div>{leftComponents}</div>
      <input type="text" placeholder={placeholder} className={_class} />
      <div>{rightComponents}</div>
    </div>
  );
};
