<script setup>
	const { correct, total } = defineProps(['correct', 'total'])

	const completionPercent = Math.floor(correct / total * 100);
	let message;
	let messageColor;
	if (completionPercent < 40) {
		message = 'You have not passed the test'
		messageColor = 'red';
	} else if (completionPercent < 80) {
		message = 'Might be better...'
		messageColor = 'green';
	} else {
		message = 'Congratulations!!!'
		messageColor = '#bed600';
	}
</script>

<template>
	<section class="results">
		<h1 class="title">Results</h1>
		<div class="message" :style="{'color': messageColor}">
			{{ message }}

			<div>{{completionPercent}}% of answers are correct</div>
		</div>
		<RouterLink to="/" class="btn btn--yellow">
			Get Back
		</RouterLink>
	</section>
</template>

<style scoped lang="scss">
	.results {
		display: grid;
		gap: .5rem;
		justify-content: center;
		place-items: center;
		.title {
			font-size: 3rem;
		}
		.message {
			text-align: center;
			font-weight: bolder;
			font-size: 2rem;
			color: #bed600;
		}
	}
</style>
