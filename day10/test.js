//async - await

//async는 항상 promise를 return함
async function Hello() {
  return "pizza!";
}

Hello().then((v) => console.log(v));

const getPizza = async () => {
  return { name: "하와이안", price: 15000 };
};
getPizza().then((v) => console.log(v.price));

//await는 async 내부 함수에서만 사용가능, promise가 처리될 때 까지 중지
//promise의 결과값을 반환

//promise를 함수화함
const getAPI = async () => {
  const data = await fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
  const jsonData = await data.json();
  return jsonData;
};

getAPI().then((v) => console.log(v));
