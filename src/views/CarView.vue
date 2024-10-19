<script setup>
	import {useRoute} from 'vue-router';

	import cars from "@/api/cars.json";
	import PriceFormatter from '@/shared/PriceFormatter.ts'
	const route = useRoute();

	const car = cars.find(c => c.id === parseInt(route.params.id));


</script>

<template>
	<div class="car">

		<div class="car_info">
			<h1>{{ car.name }}</h1>
			<div class="car_info_price">
				Цена: {{ PriceFormatter(car.price) }}
			</div>
			<div class="car_info_year">
				Год: {{ car.year }}
			</div>
		</div>

		<div class="car_image">
			<img :src="car.image" alt="">
		</div>

	</div>

</template>

<style scoped lang="scss">
	.car {
		display: grid;
		grid-template-columns: 40% 60%;
		font-size: 24px;
		&_info {
			display: flex;
			flex-direction: column;
			gap: 10px;
			&_name {
				font-weight: bold;
			}
		}
		&_image {
			display: flex;
			align-items: flex-start;
			transition: transform 0.5s ease-in-out;
			& > img {
				border-radius: 8px;
				object-fit: cover;
				max-width: 500px;
				min-height: 90%;
			}
		}
	}
</style>
