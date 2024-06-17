type HolidayColor = "blue" | "red";
type WeekDayColor = "black";

export const changeColorbyDay = (day: number): HolidayColor | WeekDayColor => {
  const dayColorMap: { [key: number]: HolidayColor } = {
    0: "red",
    6: "blue",
  };
  return dayColorMap[day] || "black";
};
