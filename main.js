const cardsArray = [...document.querySelectorAll(`.card`)];
const cardLayerArray = [...document.querySelectorAll(`.cardLayer`)];
const buttonOne = document.getElementById(`btn-1`);
const buttonTwo = document.getElementById(`btn-2`);
const buttonThree = document.getElementById(`btn-3`);
const clear = document.querySelector(`.clear`);
const start = document.querySelector(`.start`);
const buttonsArrays = [buttonOne, buttonTwo, buttonThree];
let F = 0;

const blockOtherButtons = () => {
	buttonsArrays.forEach((el, index) => {
		if (el.textContent !== 'X') {
			el.classList.add(`off`);
			el.setAttribute('disabled', true);
		} else if (el.textContent === 'X') {
			F = index;
		}
	});
};

const showSign = (e) => {
	e.preventDefault();

	if (e.target.textContent === '') {
		e.target.textContent = 'X';
		start.style.visibility = 'visible';
		e.target.classList.add('on');
		// console.log(buttonsArrays.indexOf(e.target));
		blockOtherButtons();
	} else {
		return alert('wyczyść klawisze');
	}
};

buttonOne.addEventListener(`click`, showSign);
buttonTwo.addEventListener(`click`, showSign);
buttonThree.addEventListener(`click`, showSign);

start.addEventListener(`click`, () => {
	const wynik = cardsArray[Math.floor(Math.random() * cardsArray.length)];
	console.log(cardsArray.indexOf(wynik));
	wynik.classList.add('cardActive');
	cardLayerArray[cardsArray.indexOf(wynik)].classList.add(`moveCard`);
	start.style.visibility = 'hidden';
	clear.style.visibility = 'visible';
	if (F === cardsArray.indexOf(wynik)) {
		console.log(`YOU WIN`);
	} else {
		console.log(`YOU LOST`);
	}
});

clear.addEventListener(`click`, () => {
	buttonsArrays.forEach((el) => {
		el.classList.remove(`on`);
		el.classList.remove(`off`);
		el.textContent = '';
		el.removeAttribute('disabled');
	});
	cardsArray.forEach((el) => {
		el.classList.remove('cardActive');
	});
	cardLayerArray.forEach((el) => {
		el.classList.remove(`moveCard`);
	});

	clear.style.visibility = 'hidden';
	// start.style.visibility = 'hidden';
});

// disabled selected
