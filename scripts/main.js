function getXP(obj) {
  const values = Object.values(obj);
  const xpFactor = [5, 10, 20, 40, 80];
  const score = values.reduce(function(accumulator, item, index) {
    return accumulator + item * xpFactor[index];
  }, 0);

  return `${score}XP`;
}

console.log(
  getXP({
    'Very Easy': 89,
    Easy: 77,
    Medium: 30,
    Hard: 4,
    'Very Hard': 1,
  })
);

// const testData = `Test.assertEquals(wordedMath("One plus one"), "Two")
// Test.assertEquals(wordedMath("zero Plus one"), "One")
// Test.assertEquals(wordedMath("one minus one"), "Zero")
// `;

// const funk = testData.match(/(?<=\().*(?=, )/g);

// const ergebnis = testData.match(/(?<=\), ).*(?=\))/g);

// // const ergebnis = testData.match(/(?<=\), ").*(?="\)))/g);  mit String

// function consolo() {
//   return funk.map((x, i) => `const consolo${i + 1} = ${x}`).join('; <br>');
// }

// function displayErgebnis() {
//   return ergebnis.map((x, i) => `const ergebnis${i + 1} = ${x}`).join('; <br>');
// }

// // console.log(consolo());
// // console.log(displayErgebnis());

// const resultFunk = consolo();
// const resultErgebnis = displayErgebnis();

// // Make a div
// const div = document.createElement('div');
// // add a class of wrapper to it
// div.classList.add('wrapper');

// // put it into the body
// document.body.appendChild(div);

// // make an unordered list
// const h2Test = `<h2>
//   ${funk[0]}
// </h2><p>${resultFunk} <br><br> ${resultErgebnis}</p>`;

// // add three list items with the words "one, two three" in them
// // put that list into the above wrapper
// div.innerHTML = h2Test;

// function generatePlayerCard(funki, ergebnisse, numm, fun) {
//   const farbeTrue = `${funki.toString()}` === ergebnisse;

//   const html = `
//       <div class="playerCard">
//         <h2>${funki}</h2>
//         <p>${ergebnisse}<p>
//         <p>Test ${numm} ist ${farbeTrue}.</p>
//         <p>${fun}</p>
//         <div><button class="delete" type="button">&times; Delete</button></div>
//       </div>
//     `;

//   return html;
// }

// const cards = document.createElement('div');
// cards.classList.add('cards');

// let cardsHTML = [];
// for (let i = 0; i < funk.length; i++) {
//   cardsHTML += generatePlayerCard(eval(funk[i]), ergebnis[i], i + 1, funk[i]);
// }

// cards.innerHTML = cardsHTML;
// div.insertAdjacentElement('beforebegin', cards);

// const buttonsDelete = document.querySelectorAll('.delete');
// // make out delete function
// function deleteCard(event) {
//   const buttonThatGotClicked = event.currentTarget;
//   // buttonThatGotClicked.parentElement.remove();
//   buttonThatGotClicked.closest('.playerCard').remove();
// }

// // loop over them and attach a listener
// buttonsDelete.forEach(button => button.addEventListener('click', deleteCard));

// // console.log(document.getElementsByClassName('playerCard'));
