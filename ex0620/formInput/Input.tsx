import { CSSProperties } from "react";

export type InputProps = {
  placeholoder?: string;
  inputType?: "text" | "password";
};

const Input = ({ placeholoder = "", inputType = "text" }: InputProps) => {
  const style: CSSProperties = {
    border: "none",
    outline: "none",
    backgroundColor: "#f5f5f5",
    color: "#242424",
    padding: "16px",
    fontSize: "20px",
    width: "80%",
  };

  return <input placeholder={placeholoder} style={style} type={inputType} />;
};
export default Input;
