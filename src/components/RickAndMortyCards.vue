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
	<div class="container">
		<div class="cards">
			<CardView
				v-for="char in characters"
				:key="char.id"
			/>
		</div>
		<div class="button-container">
			<button :disabled="page <= 1" @click="page--">&lt;</button>
			<button :disabled="false" @click="page++">&gt;</button>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>
