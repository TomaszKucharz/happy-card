const cardsArray = document.querySelectorAll(`.card`);
const buttonOne = document.getElementById(`btn-1`);
const buttonTwo = document.getElementById(`btn-2`);
const buttonThree = document.getElementById(`btn-3`);

const blockOtherButtons = () => {};

const showSign = (e) => {
	e.preventDefault();

	if (e.target.textContent === '') {
		e.target.textContent = 'X';
		blockOtherButtons();
	} else {
		return alert('wyczyść klawisze');
	}
};

buttonOne.addEventListener(`click`, showSign);
buttonTwo.addEventListener(`click`, showSign);
buttonThree.addEventListener(`click`, showSign);
