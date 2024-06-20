import { CSSProperties } from "react";

export type Color = "#71717A";

export type PillButtonProps = {
  content?: string;
  backgroundColor?: Color;
};
const PillButton = ({ content = "Not Content", backgroundColor = "#71717A" }: PillButtonProps) => {
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
    <div style={style}>
      <span>{content}</span>
    </div>
  );
};
export default PillButton;
