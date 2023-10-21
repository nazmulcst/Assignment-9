1=>  let greeting;
greetign = {};
console.log(greetign);


ans will be (A) {},becouse let is re assignable for that we can re assign value;


2=> function sum(a, b) {
  return a + b;
}

sum(1, "2");

ans will be C: "12" becouse a is number and b is string for that ans will be "12" that is string



3=> const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);


ans will be A: ['🍕', '🍫', '🥑', '🍔'] becouse const value does not change 


4=> function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

ans will be B: Hi there, undefined becouse name of parameters value does not defind


5=> let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

ans wil be C: 3 becouse nums length is 3