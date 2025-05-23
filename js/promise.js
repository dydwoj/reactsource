// 콜백지옥 해결
// promise

// new Promise((resolve, reject) => {
//   resolve();
//   reject(new Error("에러발생"));
// });

function test() {
  const p1 = new Promise((resolve, reject) => {
    console.log("Hello");
    setTimeout(() => {
      resolve(console.log("2초가 지났습니다"));
    }, 2000);
  })
    .then(() => console.log("Bye"))
    .catch((res) => console.log("Error"));

  console.log("Hello Again");

  console.log(p1);
}

test();

function getData1() {
  return new Promise((resolve, reject) => {
    $.get("https://jsonplaceholder.typicode.com/todos/1", function (res) {
      if (res) {
        resolve(res);
      }
      reject(new Error("에러"));
    });
  });
}

getData1()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
