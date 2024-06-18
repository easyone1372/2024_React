export type TextProps = {
  text: string;
};

const PillText = ({ text }: TextProps) => {
  return <div>{text}</div>;
};

export default PillText;
