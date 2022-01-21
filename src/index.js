import "./styles.css";

console.clear();

function solution(a, b, c) {
  console.log(`a = ${a}; \nb = ${b}; \nc = ${c};`);

  let D = Math.pow(b, 2) - 4 * a * c;
  console.log(`D = b² - 4ac = ${Math.pow(a, 2)} - 4 * ${b} * ${c} = ${D}`);

  if (D < 0) {
    console.log(`${D} < 0. This quadratic equation has no roots`);
  } else if (D > 0) {
    console.log("x1,2 = -b ± √D / 2a");
    let plus = (-b + Math.sqrt(D)) / (2 * a);
    let minus = (-b - Math.sqrt(D)) / (2 * a);
    console.log(`x1 = -b + √D / 2a = ${plus} \nx2 = -b - √D / 2a ${minus}`);
  } else if (D === 0) {
    console.log((-b + Math.sqrt(D)) / (2 * a));
  }
}

console.log(solution(2, 3, 1));
