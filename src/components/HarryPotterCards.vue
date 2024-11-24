<script setup>
	import axios from 'axios';
	import { computed, ref, watch } from 'vue';
	import CardView from '@/components/CardView.vue';

	const characters = ref(null),
		  currentPage = ref(1),
		  perPage = ref(4);


	const response = await axios.get('https://hp-api.onrender.com/api/characters'),
		  charactersCount = response.data.length;
	characters.value = response.data.slice(0, perPage.value);

	const isLastPage = computed(() => {
		return Math.ceil(charactersCount / perPage.value) <= currentPage.value;
	})
	const isFirstPage = computed(() => currentPage.value <= 1)

	watch(currentPage, (value) => {
		if (isFirstPage.value || isLastPage.value) {
			return;
		}

		const curr = perPage.value * value;
		characters.value = response.data.slice(curr, curr + perPage.value)
	})

</script>

<template>
	<span>CurrentPage: {{ currentPage }}</span>
	<span>curr: {{ perPage * currentPage }}</span>
	<div class="container">
		<h1 class="title">Harry Potter Characters</h1>
		<div class="cards">
			<CardView
				v-for="char in characters"
				:key="char.id"
				:image="char.image"
				:name="char.name"
				:blood="char.ancestry"
				:gender="char.gender"
				:alive="char.alive"
				:actor="char.actor"
			>

			</CardView>
		</div>
		<div class="button-container">
			<button :disabled="currentPage <= 1" @click="currentPage--">&lt;</button>
			<button :disabled="isLastPage" @click="currentPage++">&gt;</button>
		</div>
	</div>



</template>

<style scoped lang="scss">
.title {
	text-align: center;
}
.container {
	background-color: rgb(27, 26, 26);
	padding: 30px;
	height: 100%;
}
.cards {
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	max-height: 700px;
	h3 { font-weight: bold; }
	p { font-size: 10px; }
}

.button-container {
	display: flex;
	justify-content: center;
	padding-top: 30px;

	button {
		border: none;
		width: 50px;
		height: 50px;
		border-radius: 100%;
		margin: 0 5px;
		cursor: pointer;
	}
}
.spinner {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
