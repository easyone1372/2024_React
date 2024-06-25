import { CSSProperties } from "react";

export type DataResultProps = {
  city: string;
  street: string;
  streetName: string;
  zipcode: string;
};

const DataResult = ({ city, street, streetName, zipcode }: DataResultProps) => {
  const dataResultStyle: CSSProperties = {
    backgroundColor: "white",
    marginBottom: "10px",
  };
  return (
    <div style={dataResultStyle}>
      {city},{street},{streetName},{zipcode}
    </div>
  );
};

export default DataResult;
