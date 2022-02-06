const cardsArray = document.querySelectorAll(`.card`);
const buttonOne = document.getElementById(`btn-1`);
const buttonTwo = document.getElementById(`btn-2`);
const buttonThree = document.getElementById(`btn-3`);
const clear = document.querySelector(`.clear`);

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
		e.target.classList.add('on');
		blockOtherButtons();
	} else {
		return alert('wyczyść klawisze');
	}
};

buttonOne.addEventListener(`click`, showSign);
buttonTwo.addEventListener(`click`, showSign);
buttonThree.addEventListener(`click`, showSign);

clear.addEventListener(`click`, () => {
	buttonsArrays.forEach((el) => {
		el.classList.remove(`on`);
		el.classList.remove(`off`);
		el.textContent = '';
		el.removeAttribute('disabled');
	});

	clear.style.visibility = 'hidden';
});

// disabled selected
