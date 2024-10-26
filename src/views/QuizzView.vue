<script setup>
	import {useRoute, useRouter} from 'vue-router'
	import quizzes from '@/api/quizzes.json';
	import GetBackArrow from '@/components/ui/GetBackArrow.vue'
	import { ref } from 'vue'
	import ProgressBar from '@/components/ui/ProgressBar.vue'
	const route = useRoute();
	const router = useRouter();

	const quizzesSolved = ref(0);

	const quizz = quizzes.find(q => q.slug === route.params.slug);
	const questionsCount = quizz.questions.length;

</script>

<template>
	<GetBackArrow :text="'Back'" :callback="() => router.push('/')"/>
	<div class="quizz" v-if="quizz">
		<div class="quizz_head">
			<h2>Question {{quizzesSolved}}/{{ questionsCount }}</h2>
			<ProgressBar/>
		</div>
		<RouterView/>
	</div>

	<div v-else>
		<h1>No such a quizz</h1>
	</div>

</template>

<style scoped lang="scss">
	.quizz {
		&_head {
			display: flex;
			flex-direction: column;
			gap: 4px;
			align-items: flex-start;
		}

	}
</style>
