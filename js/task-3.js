// Задача 3. Ширина елемента

function getElementWidth(content, padding, border) {
  // content — ширина контенту;
  // padding — значення горизонтального падінгу для кожної зі сторін;
  // border — значення товщини бордера для кожної зі сторін.
  // ! Значення всіх параметрів будуть рядками формату Npx, де N — це довільне число, ціле або дробове.
  // ! Значення box-sizing дорівнює border-box.

  // Перетворюю рядок формату Npx на число з плаваючою крапкою за допомогою методу Number.parseFloat()
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  const totalWidth = contentWidth + 2 * (paddingWidth + borderWidth);

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
