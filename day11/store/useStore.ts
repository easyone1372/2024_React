import { create } from "zustand";

type State = {
  bears: number;
  increase: () => void;
  //   bgColor: string;
  //   backgroundChange: () => void;
};

//commander, captain이 리렌더링 됨.
//+다른곳까지 관여할 [양날의 검] 잘 쓰면 좋지만 얘때문에 어디에서 에러가 발생했는지 알 수 없음
export const useBearStore = create<State>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  //   bgColor: "",
  //   backgroundChange: () => set((state) => ({ bgColor: "red" })),
}));

type Emergency = {
  isEmergency: boolean;
  bell: () => void;
};

export const useEmergencyStore = create<Emergency>((set) => ({
  isEmergency: false,
  bell: () => set((state) => ({ isEmergency: !state.isEmergency })),
}));
