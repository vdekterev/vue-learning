<script setup>
	import { RouterView } from 'vue-router';
	import NavComponent from '@/components/NavComponent.vue';
</script>

<template>
	<header>
		<NavComponent/>
	</header>

	<main>
		<RouterView/>
	</main>

	<footer>
		Footer
	</footer>

</template>

<style lang="scss">
	header {
		display: grid;
		height: 50px;
		align-items: center;
		justify-content: center;
	}
</style>
