<script setup>
	const { progress } = defineProps(['progress'])
</script>

<template>
	<div class="progress-bar">
		<div :style="{width: progress}" class="progress-bar_progress"/>
	</div>
</template>

<style scoped lang="scss">
	.progress-bar {
		border-radius: 3px;
		outline: 1px solid yellow;
		height: 20px;
		width: 200px;
		&_progress {
			width: 0;
			max-width: 100%;
			height: 100%;
			background-color: yellow;
		}
	}
</style>
