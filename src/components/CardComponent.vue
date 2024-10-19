<script setup>
import {RouterLink} from 'vue-router';

import PriceFormatter from '@/shared/PriceFormatter.ts';

defineProps({
	id: Number,
	name: String,
	price: Number,
	year: Number,
	image: String
})
</script>

<template>
	<div class="card">
		<div class="card_info">
			<div class="card_info_name">{{ name }}</div>
			<div class="card_info_price">{{ PriceFormatter(price) }}</div>
			<div class="card_info_year">Год: {{ year }}</div>
		</div>
		<div class="card_image">
			<img :src="image" alt="фото">
		</div>
		<div class="card_link">
			<RouterLink :to="`/cars/${id}`" />
		</div>
	</div>
</template>

<style scoped lang="scss">
	.card {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: #cac7c7;
		border-radius: 8px;
		height: 200px;
		padding: 10px;
		color: #1f1f1f;
		&_info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 10px;
			&_name {
				font-weight: bold;
			}
			&_price {
				flex-grow: 1;
			}
		}
		&_image {
			display: flex;
			align-items: flex-start;
			transition: transform 0.5s ease-in-out;
			& > img {
				border-radius: 8px;
				object-fit: cover;
				max-width: 200px;
				min-height: 90%;
			}
		}
		&:hover &_image {
			transform: scale(1.05);
		}
		&_link {
			width: 100%;
			height: 100%;
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			& > a {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
