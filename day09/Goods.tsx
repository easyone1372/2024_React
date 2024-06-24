import { useParams } from "react-router-dom";

const Goods = () => {
  const { id } = useParams();

  // id[33]
  // 33->server->db->33인 학생 엄준식
  // json -> Student.tsx 프롭스 뿌려줌 -> 학생: 엄준식 나이: 23살 반: 저녁반
  // return
  
  return <div>굿즈{id}</div>;
};

export default Goods;
