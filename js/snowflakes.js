function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function startSnowflakeAnimation() {
	var snowflakesContainer = document.getElementById("SnowflakesContainerId");

	var snowflakeCount = 30;
	var positionStart = 100 / snowflakeCount;
	var currentPosition = 0;
	var animationDelay = 1;

	var snowflakes = ["❅", "❆", "❄"];

	var calculatedDelay = 8 / snowflakeCount;
	const delays = [0];
	var delayInc = calculatedDelay;

	for (var i = 0; i <= snowflakeCount; i++) {
		delays.push(delayInc);
		delayInc += calculatedDelay;
	}

	for (var i = 0; i <= snowflakeCount; i++) {
		var snowflake = document.createElement("div");
		snowflake.setAttribute("class", "snowflake");
		snowflake.innerText = snowflakes[getRandomInt(3)];
		snowflake.style.left = currentPosition + "%";

		var randomAnimationDelayIndex = getRandomInt(delays.length);
		animationDelay = delays[randomAnimationDelayIndex];
		delays.splice(randomAnimationDelayIndex, 1);

		snowflake.style.animationDelay = animationDelay + "s, " + animationDelay + "s";
		currentPosition += positionStart;
		snowflakesContainer.appendChild(snowflake);
	}
}

$(document).ready(function () {
	var date = new Date();

	if (date.getMonth() == 11) {
		startSnowflakeAnimation();
	}
});