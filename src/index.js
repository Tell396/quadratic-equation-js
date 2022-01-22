
function answer() {
  console.clear()
  
  let a = document.querySelector("#first-coef").value;
  let b = document.querySelector("#second-coef").value;
  let c = document.querySelector("#third-coef").value;
  
  console.log(`a = ${a}; \nb = ${b}; \nc = ${c};`);

  let D = Math.pow(b, 2) - 4 * a * c;
  console.log(`D = b² - 4ac = ${Math.pow(a, 2)} - 4 * ${b} * ${c} = ${D}`);
  
  let formula = document.querySelector('#formula')

  if (D < 0) {
    formula.innerHTML = `
      <p>${D} < 0.<br>This quadratic equation has no roots</p>`
  } else if (D > 0) {
    let plus = (-b + Math.sqrt(D)) / (2 * a);
    let minus = (-b - Math.sqrt(D)) / (2 * a);
    
    formula.innerHTML = `
      <p>x1,2 = -b ± √D / 2a</p>
      <p>x1 = -b + √D / 2a = ${plus} <br> x2 = -b - √D / 2a ${minus}</p>`
  } else if (D === 0) {
    formula.innerHTML = `
      <p>${(-b + Math.sqrt(D)) / (2 * a)}</p>`
  }
  
  formula.style.backgroundColor = "#0001"
  formula.style.borderRadius = "7px"
  formula.style.padding = "10px 5px 10px 5px"
};

