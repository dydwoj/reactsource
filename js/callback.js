// 콜백 함수
// fetch().then().then().catch();
// 1. fetch 실행 (데이터가 언제 올지는 모름)
// 2. 데이터 도착 이후 .then().then() 실행함
//  => .then 부분이 콜백 함수에 해당

// console.log("시작");
// setTimeout(() => {
//   console.log("2초가 지났습니다");
// }, 2000);
// console.log("종료");

// ajax 예전 방식 (jQuery 이용)
// function getData(callbackFunc) {
//   let result;

//   $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
//     // result = res;
//     callbackFunc(res);
//   });
//   return result;
// }

// getData((data) => console.log(data));

// ajax => fetch 함수
function getData1(callbackFunc) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => callbackFunc(data));
}
function getData2(callbackFunc) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => callbackFunc(data));
}

getData1((data) => {
  console.log(data);

  getData2((data) => {
    console.log(data);
  });
});
