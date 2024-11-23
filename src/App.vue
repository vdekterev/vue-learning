<script setup>
	import {RouterView} from 'vue-router';
	import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
	<header>
		<NavComponent/>
	</header>

	<main>
		<RouterView/>
	</main>

	<footer></footer>
</template>
