<script setup>
	import ProgressBar from '@/components/ui/ProgressBar.vue'
	const { questionStatus, completionPercentage } = defineProps(['questionStatus', 'completionPercentage']);
</script>

<template>
	<div class="quizz_head">
		<h2>{{ questionStatus }}</h2>
		<ProgressBar :progress="completionPercentage"/>
	</div>
</template>

<style scoped lang="scss">
	.quizz_head {
		display: flex;
		flex-direction: column;
		gap: 4px;
		align-items: flex-start;
	}
</style>
