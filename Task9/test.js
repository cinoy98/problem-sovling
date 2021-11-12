function one() {
  console.log("1");
}
function two() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve(console.log("2"), 2000));
  });
  return promise
}
function three() {
  console.log("3");
}
async function test() {
  one();
    await two();
  three()
}
test();
