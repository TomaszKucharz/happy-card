const cardsArray = [...document.querySelectorAll(`.img`)];
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
	// console.log(cardsArray.indexOf(wynik));
	wynik.classList.add('cardActive');
	cardLayerArray[cardsArray.indexOf(wynik)].classList.add(`moveCard`);
	start.style.visibility = 'hidden';
	clear.style.visibility = 'visible';
	if (F === cardsArray.indexOf(wynik)) {
		document.querySelector(`.form`).textContent = 'Yeee  Wygrałeś!';
		document.querySelector(`.form`).style.background = '#0de289';
	} else {
		document.querySelector(`label`).style.background = 'red';
		document.querySelector(`.form`).textContent = 'Jolly Roger wygrał, szykuj gardło!!';
	}
});

clear.addEventListener(`click`, () => {
	document.querySelector(`.form`).textContent = 'Losowanie szczęśliwej karty';
	document.querySelector(`label`).style.background = 'linear-gradient(145deg, #0d64f0, #168bcf, #8f29ca)';
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
});

// disabled selected
