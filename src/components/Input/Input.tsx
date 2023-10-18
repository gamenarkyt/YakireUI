import {
  FC,
  FormEvent,
  ReactNode,
  memo,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Input.module.css";
import clsx from "clsx";
import { useDebounce } from "@/components/Input/useDebounce";

interface IProps {
  className?: string;
  placeholder?: string;
  leftComponents?: ReactNode;
  rightComponents?: ReactNode;
  onSubmitCallback?: (finalString: string) => void;
  onChangeCallback?: (finalString: string) => void;
}

const Input: FC<IProps> = ({
  className,
  placeholder = "Placeholder",
  leftComponents,
  rightComponents,
  onSubmitCallback,
  onChangeCallback,
}) => {
  const [inputValue, setInputValue] = useState("");
  const debouncedInputValue = useDebounce(inputValue, 10 0);

  const onInputChangeHandler = (newValue: string) => {
    if (onChangeCallback) {
      onChangeCallback(debouncedInputValue);
    }
    setInputValue(newValue);
  };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (onSubmitCallback) {
      onSubmitCallback(inputValue);
    }
  };
  console.log("input rerender");

  const _class = clsx(styles.yuiinput, styles.originalinput, className);
  return (
    <form className={styles.yuiinput} onSubmit={onSubmit}>
      {leftComponents}
      <input
        type="text"
        placeholder={placeholder}
        className={_class}
        value={inputValue}
        onChange={(event) => onInputChangeHandler(event.target.value)}
      />
      {rightComponents}
    </form>
  );
};

export default Input;
