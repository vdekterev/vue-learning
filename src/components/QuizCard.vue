<script setup>
	const { quiz } = defineProps(['quiz'])
</script>

<template>
	<div class="card">
		<div class="card_img">
			<img :src="quiz.img" alt="Quiz Image">
		</div>
		<div class="card_content">
			<h3>{{quiz.name}}</h3>
			<p>{{quiz.questions.length}} questions</p>
		</div>
		<div class="card__link">
			<RouterLink :to="`/quizzes/${quiz.slug}`"/>
		</div>
	</div>
</template>

<style scoped lang="scss">
.card {
	display: flex;
	flex-direction: column;
	width: min(300px, 100%);
	height: 200px;
	aspect-ratio: 16/9;
	border-radius: 8px;
	background-color: #545454;
	cursor: pointer;
	margin: 0 auto;
	position: relative;
	&_img {
		overflow: hidden;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		& > img {
			overflow: hidden;
			object-fit: contain;
			width: 100%;
		}
	}
	&__content {
		padding: 0.5rem 1rem;
		& > h3 {
			font-size: 28px;
			font-weight: bold;
			line-height: 36px;
		}
	}
	&__link > a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
</style>
