<script setup>
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';
import CardView from '@/components/CardView.vue';

const characters = ref(null),
	info = ref(null),
	page = ref(1);


onMounted(async () => {
	const response = await axios.get('https://rickandmortyapi.com/api/character');
	info.value = response.data.info;
	characters.value = response.data.results;
});

watch(page, async (i) => {
	const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
	info.value = response.data.info;
	characters.value = response.data.results;
})

</script>

<template>
	<div v-if="characters" class="container">
		<div class="cards">
			<CardView
				v-for="char in characters"
				:key="char.id"
				:name="char.name"
				:image="char.image"
				:gender="char.gender"
				:species="char.species"
				:status="char.status"
				:location="char.location"
			/>
		</div>
		<div class="pagination">
			<n-pagination v-model:page="page" :page-count="info.pages" />
		</div>
	</div>
	<div v-else class="spinner">
		<NSpin size="large"/>
	</div>

</template>

<style scoped lang="scss">
	.container {
		display: grid;
		grid-template-rows: auto 100px;
	}
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, 190px);
		grid-gap: 12px;
	}
	.pagination {
		position: sticky;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		.n-pagination {
			padding: 8px;
			border-radius: 8px;
			background-color: #fff;
			border: 1px solid rgb(239, 239, 245);
		}
	}
	.spinner {
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>
