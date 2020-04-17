function blahBlah(str, n) {
        const arr = str.split(' ');
        const res =
                n > arr.length
                        ? `${`${'blah '.repeat(arr.length - 1)}blah`}...`
                        : `${arr.map((x, i) => (i >= arr.length - n ? 'blah' : x)).join(' ')}...`;
        return res;
}

console.log(blahBlah('A function is a block of code which only runs when it is called', 5));

const testData = `Test.assertEquals(blahBlah("A function is a block of code which only runs when it is called",  5), "A function is a block of code which only blah blah blah blah blah...");
Test.assertEquals(blahBlah("one two three four five", 2), "one two three blah blah...");
Test.assertEquals(blahBlah("Sphinx of black quartz judge my vow", 10), "blah blah blah blah blah blah blah...");
Test.assertEquals(blahBlah("The quadratic formula is negative b plus or minus the square root of b squared subtract four ac all over two a", 5), "The quadratic formula is negative b plus or minus the square root of b squared subtract four blah blah blah blah blah...");
`;

console.log(testData);

const funk = testData.match(/(?<=\().*(?=,)/g);
const ergebnis = testData.match(/(?<=\), ).*(?=\))/g);

// const ergebnis = testData.match(/(?<=\), ").*(?="\)))/g);  mit String

function consolo() {
        return funk.map((x, i) => `const consolo${i + 1} = ${x}`).join('; <br>');
}

function displayErgebnis() {
        return ergebnis.map((x, i) => `const ergebnis${i + 1} = ${x}`).join('; <br>');
}

// console.log(consolo());
// console.log(displayErgebnis());

const resultFunk = consolo();
const resultErgebnis = displayErgebnis();

// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const h2Test = `<h2>
  ${funk[0]}
</h2><p>${resultFunk} <br><br> ${resultErgebnis}</p>`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = h2Test;

function generatePlayerCard(funki, ergebnisse, numm, fun) {
        const farbeTrue = `${funki.toString()}` === ergebnisse;

        const html = `
      <div class="playerCard">
        <h2>${funki}</h2>
        <p>${ergebnisse}<p>
        <p>Test ${numm} ist ${farbeTrue}.</p>
        <p>${fun}</p>
        <div><button class="delete" type="button">&times; Delete</button></div>
      </div>
    `;

        return html;
}

const cards = document.createElement('div');
cards.classList.add('cards');

let cardsHTML = [];
for (let i = 0; i < funk.length; i++) {
        cardsHTML += generatePlayerCard(eval(funk[i]), ergebnis[i], i + 1, funk[i]);
}

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

const buttonsDelete = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
        const buttonThatGotClicked = event.currentTarget;
        // buttonThatGotClicked.parentElement.remove();
        buttonThatGotClicked.closest('.playerCard').remove();
}

// loop over them and attach a listener
buttonsDelete.forEach(button => button.addEventListener('click', deleteCard));

// console.log(document.getElementsByClassName('playerCard'));
