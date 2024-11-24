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
		align-items: center;
		gap: .5rem;
		height: 100%;

		&_item > a {
			font-size: 1rem;
			transition: color .3s ease-in-out;
			cursor: pointer;
			font-weight: bold;
			color: #1F1F1F;
			&:hover {color: #bed600;}

			&.active {color: #bed600;}
		}
	}
</style>
