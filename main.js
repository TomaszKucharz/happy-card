const cardsArray = document.querySelectorAll(`.card`);
const buttonOne = document.getElementById(`btn-1`);
const buttonTwo = document.getElementById(`btn-2`);
const buttonThree = document.getElementById(`btn-3`);
const clear = document.querySelector(`.clear`);
const start = document.querySelector(`.start`);
const buttonsArrays = [buttonOne, buttonTwo, buttonThree];

const blockOtherButtons = () => {
	buttonsArrays.forEach((el) => {
		if (el.textContent !== 'X') {
			el.classList.add(`off`);
			el.setAttribute('disabled', true);
		}
	});
};

const showSign = (e) => {
	e.preventDefault();

	if (e.target.textContent === '') {
		e.target.textContent = 'X';
		clear.style.visibility = 'visible';
		start.style.visibility = 'visible';

		e.target.classList.add('on');
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
	wynik.classList.add('cardActive');
	start.style.visibility = 'hidden';
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

	clear.style.visibility = 'hidden';
	// start.style.visibility = 'hidden';
});

// disabled selected
