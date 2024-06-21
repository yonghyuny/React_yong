import { CSSProperties, MouseEvent } from "react";

export type Color = "#71717A";

export type PillButtonProps = {
  content?: string;
  backgroundColor?: Color;
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
};
const PillButton = ({ content = "Not Content", backgroundColor = "#71717A", handleClick }: PillButtonProps) => {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    color: "white",
    backgroundColor,
    borderRadius: "50px",
    padding: "16px",
    width: "100px",
  };

  return (
    <div onClick={handleClick} style={style}>
      <span>{content}</span>
    </div>
  );
};
export default PillButton;
