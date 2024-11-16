<script setup>
	import {useRoute, useRouter} from 'vue-router'
	import quizzes from '@/api/quizzes.json';
	import GetBackArrow from '@/components/ui/GetBackArrow.vue'
	import QuizzHead from '@/components/QuizzHead.vue'
	import { computed, ref } from 'vue';
	import QuizzQuestion from '@/components/QuizzQuestion.vue'
	const route = useRoute()
	const router = useRouter();

	const currentQuestionIdx = ref(0);
	const quizz = quizzes.find(q => q.slug === route.params.slug);

	const questionStatus = computed(() => `${currentQuestionIdx.value} / ${quizz.questions.length}`)
	const completionPercentage = computed(() => {
		return `${currentQuestionIdx.value / quizz.questions.length * 100}%`;
	});
</script>

<template>
	<GetBackArrow :text="'Back'" :callback="() => router.push('/')"/>
	<div class="quizz" v-if="quizz">
		<QuizzHead :question-status="questionStatus" :completionPercentage="completionPercentage"/>
		<QuizzQuestion :question="quizz.questions[currentQuestionIdx]"/>
		<button @click="currentQuestionIdx++">Next</button>
	</div>

	<div v-else>
		<h1>No such a quizz</h1>
	</div>

</template>

<style scoped lang="scss">
	.start-quiz {
		cursor: pointer;
		padding: 8px;
		width: 100px;
		font-size: 1rem;
	}
</style>
