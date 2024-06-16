//오늘 할일 - 2024 06 14 -
//평소 검은색 토요일 파란색 일요일 빨간색으로 랜더

// import { defaultMaxListeners } from "events";
// import { CSSProperties } from "react";

// type WeekNumberProps = {
//   color?: string;
//   content: string;
// };

// const WeekNumber = ({ color = "black", content }: WeekNumberProps) => {
//   const date = new Date();
//   const dateContent = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`;

//   const isSunday = date.getDate();

//   const weekStyle: CSSProperties = {
//     color,
//   };
//   return (
//     <div style={weekStyle}>
//       {content} -{dateContent}
//     </div>
//   );
// };

// export default WeekNumber;

//-------------강사님 코드------------------------
import { changeColorbyDay } from "./util/daycolor";

const HeaderQuiz = () => {
  const [year, month, date] = new Date()
    .toLocaleString()
    .replaceAll(".", "")
    .split(" ");

  const day = new Date().getDay();

  return (
    <div>
      <span>오늘 할일 </span>
      <span style={{ color: changeColorbyDay(day) }}>
        {year} {month} {date}
      </span>
    </div>
  );
};

export default HeaderQuiz;
