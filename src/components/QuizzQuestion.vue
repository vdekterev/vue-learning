<script setup>
	const { question } = defineProps(['question']);
	const emit = defineEmits(['selectOption']);

</script>

<template>
	<div class="quizz_question">
		<h1 class="question">
			{{ question.text }}
		</h1>
		<div class="options">
			<div v-for="option in question.options"
				 @click="emit('selectOption', option.isCorrect)"
				 class="option" :key="option.id"
			>
				<div class="option_label">{{ option.label }}</div>
				<div class="option_value">{{ option.text }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.quizz_question {
	user-select: none;
	& .options {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 10px auto;
		& .option {
			display: grid;
			grid-template-columns: 30px auto;
			border: 1px solid yellow;
			border-radius: 8px;
			width: 30%;
			cursor: pointer;
			gap: 8px;
			height: 50px;
			align-items: center;
			transition: transform .3s ease-in-out;

			&_label {
				background-color: yellow;
				color: #141516;
				border-top-left-radius: 5px;
				border-bottom-left-radius: 5px;
				text-align: center;
				font-size: 40px;
				height: 100%;

			}
			&_value {
				font-size: 20px;
			}
			&:hover {
				transform: scale(1.05);
			}
			&:active {
				transform: scale(.95);
			}
			&.selected {
				background-color: yellow;
				color: #141516;
			}
		}
	}
}
</style>
