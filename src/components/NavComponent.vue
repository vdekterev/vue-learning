<script setup>
import {RouterLink} from 'vue-router';

</script>

<template>
	<nav class="nav">
		<div class="nav_item">
			<RouterLink active-class="active" to="/">Home</RouterLink>
		</div>
		<div class="nav_item">
			<RouterLink active-class="active" to="/about">About</RouterLink>
		</div>
	</nav>
</template>

<style scoped lang="scss">
	.nav {
		display: flex;
		gap: .5rem;

		&_item > a {
			font-size: 1rem;
			transition: color 0.3s ease-in-out;
			cursor: pointer;
			font-weight: bold;
			color: #f2f2f2;
			&:hover {color: #bed600;}

			&.active {color: #bed600;}
		}
	}
</style>
