function sumOfSlices(arr) {}
console.log(sumOfSlices([58, 3, 38, 99, 10]));

const testData = `Test.assertSimilar(sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100]), [97, 78, 87, 68, 100])
Test.assertSimilar(sumOfSlices([58,3,38, 99, 10]), [99, 99, 10])
Test.assertSimilar(sumOfSlices([13]), [13])
Test.assertSimilar(sumOfSlices([62, 406, 343, 234, 244, 200, 304, 462, 212, 48, 166, 71, 80, 51, 307, 442, 368, 235, 199, 411, 100, 203, 330, 437, 226, 365, 337, 464, 14, 350]), [62, 406, 343, 234, 244, 200, 304, 462, 212,  48, 166,  71,  80,  51, 307, 442, 368, 235, 199, 411, 100, 203, 330, 437, 226, 365, 337, 464, 14, 350])
Test.assertSimilar(sumOfSlices([315, 47]), [0, 315, 47])`;

// console.log(testData);

// const funk = testData.match(/(?<=\().*(?=,)/g);
// const ergebnis = testData.match(/(?<=\), ).*(?=\))/g);

// const ergebnis = testData.match(/(?<=\), ").*(?="\)))/g);  mit String

// function consolo() {
//         return funk.map((x, i) => `const consolo${i + 1} = ${x}`).join('; <br>');
// }

// function displayErgebnis() {
//         return ergebnis.map((x, i) => `const ergebnis${i + 1} = ${x}`).join('; <br>');
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
//         const farbeTrue = `${funki.toString()}` === ergebnisse;

//         const html = `
//       <div class="playerCard">
//         <h2>${funki}</h2>
//         <p>${ergebnisse}<p>
//         <p>Test ${numm} ist ${farbeTrue}.</p>
//         <p>${fun}</p>
//         <div><button class="delete" type="button">&times; Delete</button></div>
//       </div>
//     `;

//         return html;
// }

// const cards = document.createElement('div');
// cards.classList.add('cards');

// let cardsHTML = [];
// for (let i = 0; i < funk.length; i++) {
//         cardsHTML += generatePlayerCard(eval(funk[i]), ergebnis[i], i + 1, funk[i]);
// }

// cards.innerHTML = cardsHTML;
// div.insertAdjacentElement('beforebegin', cards);

// const buttonsDelete = document.querySelectorAll('.delete');
// // make out delete function
// function deleteCard(event) {
//         const buttonThatGotClicked = event.currentTarget;
//         // buttonThatGotClicked.parentElement.remove();
//         buttonThatGotClicked.closest('.playerCard').remove();
// }

// // loop over them and attach a listener
// buttonsDelete.forEach(button => button.addEventListener('click', deleteCard));

// // console.log(document.getElementsByClassName('playerCard'));
