// async 와 await
// async (params) => {
//     await 비동기메서드명()
// }

// const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const data = await res.json();
// console.log(data);

// async function fetchTodo() {
//   return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
// }
// const todo = await fetchTodo();
// console.log(todo);

async function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
}
async function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json());
}

const todo = await fetchTodo();
console.log(todo);

if (todo.userId == 1) {
  const user = await fetchUser();
  console.log(user);
}
