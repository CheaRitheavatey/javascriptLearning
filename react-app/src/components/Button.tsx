// create a button component using bootstrap
// make the text or label dynamic
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
