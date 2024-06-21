import { CSSProperties, ChangeEvent } from "react";
export type InputProps = {
  placeholoder?: string;
  inputType?: "text" | "password";
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholoder = "", inputType = "text", handleChange }: InputProps) => {
  const style: CSSProperties = {
    border: "1px solid #dbdbdb",
    outline: "none",
    backgroundColor: "#f5f5f5",
    color: "#242424",
    padding: "16px",
    fontSize: "20px",
    width: "80%",
  };

  return <input onChange={handleChange} placeholder={placeholoder} style={style} type={inputType} />;
};
export default Input;
