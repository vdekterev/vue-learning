<script setup>
	import {useRoute, useRouter} from 'vue-router'
	import quizzes from '@/api/quizzes.json';
	import GetBackArrow from '@/components/ui/GetBackArrow.vue'
	const route = useRoute();
	const router = useRouter();
	const quizz = quizzes.find(q => q.slug === route.params.slug);
	const questionsCount = quizz.questions.length
</script>

<template>
	<GetBackArrow :text="'Back'" :callback="() => router.push('/')"/>
	<div class="quizz" v-if="quizz">
		<h1>{{ quizz.name }}</h1>
		<h3>Total questions: {{ questionsCount }}</h3>
		<RouterView/>
	</div>

	<div v-else>
		<h1>No such a quizz</h1>
	</div>

</template>

<style scoped lang="scss">

</style>
