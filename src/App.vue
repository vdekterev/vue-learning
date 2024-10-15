<script setup>
	import q from '@/api/quizzes.json';
	import { ref, watch } from 'vue'

	import QuizCard from '@/components/QuizCard.vue'

	const quizzes = ref(q);
	const search = ref('');

	watch(search, () => {
		quizzes.value = q.filter(item => {
			return item.name.toLowerCase().includes(search.value.toLowerCase());
		})
	})
</script>

<template>
	<header>
		<h1>Quizzes</h1>
		<input v-model.trim="search" class="search-bar" placeholder="Search..."/>
	</header>

	<main>
		<div id="cards">
			<QuizCard v-for="q in quizzes" :key="q.id" :quiz="q"/>
		</div>
	</main>

</template>

<style scoped>
	header {
		display: flex;
		gap: 30px;
		& .search-bar {
			border-radius: 8px;
			padding: 0 8px;
			place-items: center;
		}
	}
	main {
		margin: 32px auto;
	}
	#cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 20px;
	}
</style>
