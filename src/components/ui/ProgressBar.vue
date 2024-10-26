<script setup>

</script>

<template>
	<div class="progress-bar">
		<div class="progress-bar_progress"/>
	</div>
</template>

<style scoped lang="scss">
	.progress-bar {
		border-radius: 3px;
		outline: 1px solid yellow;
		height: 20px;
		width: 200px;
		&_progress {
			width: 66.6%;
			height: 100%;
			background-color: yellow;
		}
	}
</style>
