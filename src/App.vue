<script setup>
	import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
	<header>
		<NavComponent/>
	</header>

	<main>
		<router-view v-slot="{ Component }">
			<transition name="route">
				<component :is="Component" />
			</transition>
		</router-view>
	</main>

	<footer></footer>

</template>

<style scoped lang="scss">
	.route {
		&-enter-from {
			opacity: 0;
			transform: translateX(100px);
		}
		&-enter-to {
			opacity: 1;
			transform: translateX(0)
		}
		&-enter-active {
			transition: transform 1s, opacity 0.5s ease-in-out;
		}
	}
</style>
