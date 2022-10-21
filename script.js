const progress = document.querySelector("#progress");
const prev = document.getElementById("prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

const actionNext = () => {
	currentActive++;

	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	update();
};
const actionPrev = () => {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}
	
	update();
};
const update = () => {
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});
	const actives = document.querySelectorAll(".active");

	progress.style.width = (currentActive / 4) * 100 + "%";
	console.log(currentActive);
	if (currentActive === 1) {
		prev.disabled = true;
	} else {
		prev.disabled = false;
	}
};

next.addEventListener("click", actionNext);
prev.addEventListener("click", actionPrev);
