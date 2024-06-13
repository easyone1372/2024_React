import { CSSProperties } from "react";

export type CategoryButtonProps = {
  color?: string;
  content: string;
};

const CategoryButton = ({ color = "grey", content }: CategoryButtonProps) => {
  const style: CSSProperties = {
    color,
  };

  return <div style={style}>{content}</div>;
};

export default CategoryButton;
