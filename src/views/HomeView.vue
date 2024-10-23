<script setup>
import cars from "@/api/cars.json";
import CardComponent from '@/components/CardComponent.vue'

</script>

<template>
	<div class="cards">
		<CardComponent
			v-for="car in cars"
			:key="car.id"
			:id="car.id"
			:name="car.name"
			:price="car.price"
			:year="car.year"
			:image="car.image"
		/>
	</div>
</template>

<style scoped>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 10px;
	}
</style>


