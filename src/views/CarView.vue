<script setup>
import { useRoute, RouterView, useRouter } from 'vue-router'
import cars from '@/api/cars.json'
import PriceFormatter from '@/shared/PriceFormatter.ts'
import { ref } from 'vue'

const route = useRoute()
const car = cars.find(c => c.id === parseInt(route.params.id))
const isContactPublic = car?.contacts.allowedToShow;

const router = useRouter();
const isContactShown = ref(false);

const toggleContactView = () => {
	if (!isContactPublic) {
		return;
	}
	isContactShown.value = !isContactShown.value
	if (isContactShown.value) {
		router.push(`/cars/${car.id}/contacts`);
	} else {
		router.replace(`/cars/${car.id}`);
	}
}

</script>

<template>
	<div class="get_back" @click="router.replace('/')">Back to catalog</div>
	<div v-if="car" class="car">
		<div class="car_info">
			<h1>{{ car.name }}</h1>
			<div class="car_info_price">
				Price: {{ PriceFormatter(car.price) }}
			</div>
			<div class="car_info_year">
				Year: {{ car.year }}
			</div>
			<button v-if="isContactPublic" @click="toggleContactView" v-text="isContactShown ? 'Hide contacts' : 'Show contacts'"/>
			<RouterView />
		</div>

		<div class="car_image">
			<img :src="car.image" alt="">
		</div>
	</div>
	<div v-else>
		<h1>Car was not found</h1>
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

		& > button {
			border: none;
			color: #f2f2f2;
			background-color: blueviolet;
			border-radius: 8px;
			cursor: pointer;
			width: 50%;
			padding: 8px;
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
