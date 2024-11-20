<script setup>
	import {useRoute, useRouter} from 'vue-router'
	import { computed, ref } from 'vue';

	import quizzes from '@/api/quizzes.json';
	import GetBackArrow from '@/components/ui/GetBackArrow.vue'
	import QuizzHead from '@/components/QuizzHead.vue'
	import QuizzQuestion from '@/components/QuizzQuestion.vue'
	import QuizzResultView from '@/views/QuizzResultView.vue';

	const route = useRoute()
	const router = useRouter();

	const quizz = quizzes.find(q => q.slug === route.params.slug);
	const questionsCount = quizz.questions.length;
	const currentQuestionIdx = ref(0);
	const correctAnswersCount = ref(0);
	const checkAnswer = (isCorrect) => {
		if (isCorrect) {
			correctAnswersCount.value++;
		}
		currentQuestionIdx.value++;
	}

	const isQuizzCompleted = computed(() => currentQuestionIdx.value >= questionsCount);
	const questionStatus = computed(() => `${currentQuestionIdx.value} / ${questionsCount}`)
	const completionPercentage = computed(() => {
		return `${currentQuestionIdx.value / questionsCount * 100}%`;
	});

</script>

<template>
	<GetBackArrow :text="'Back'" :callback="() => router.push('/')"/>
	<div class="quizz" v-if="quizz">
		<QuizzHead
			:question-status="questionStatus"
		   	:completionPercentage="completionPercentage"
		/>
		<QuizzQuestion
			v-if="!isQuizzCompleted"
			@selectOption="checkAnswer"
			:question="quizz.questions[currentQuestionIdx]"
		/>
		<QuizzResultView v-else :correct="correctAnswersCount" :total="questionsCount"/>
	</div>

	<div v-else>
		<h1>No such a quizz</h1>
	</div>

</template>

<style scoped lang="scss">
	.quizz {
		display: grid;
		gap: 1rem;
	}
	.start-quiz {
		cursor: pointer;
		padding: 8px;
		width: 100px;
		font-size: 1rem;
	}
</style>
