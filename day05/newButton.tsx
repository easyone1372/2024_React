//이벤트 발생시키기
// const NewButton = () => {
//   const difficultReact = () => console.log("리액트 진심 개 빡 셈");
//   return <button onClick={difficultReact}>뉴버튼</button>;
// };

//함수 프롭스 전달
type newButtonProps = {
  click: () => void; //함수 타입
};
const NewButton = ({ click }: newButtonProps) => {
  return <button onClick={click}>뉴버튼</button>;
};
export default NewButton;
