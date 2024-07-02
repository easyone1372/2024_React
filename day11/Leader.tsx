import { CSSProperties } from "react";
import { useBearStore, useEmergencyStore } from "./store/useStore";

type LeaderProps = {
  msg: string;
};

const Leader = ({ msg }: LeaderProps) => {
  const { bears } = useBearStore();
  const { isEmergency } = useEmergencyStore();

  return (
    <div style={isEmergency ? { color: "red" } : { color: "black" }}>
      중대장께서: {msg} 곰 갯수: {bears}
    </div>
  );
};

export default Leader;
