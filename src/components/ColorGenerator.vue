<script setup>
import { reactive } from 'vue';

const rgb = reactive({
	red: 0,
	green: 0,
	blue: 0
});

const randomizeColor = () => {
	rgb.red = Math.floor(Math.random() * 100);
	rgb.green = Math.floor(Math.random() * 100);
	rgb.blue = Math.floor(Math.random() * 100);
};

</script>

<template>
	<div class="container">
		<fieldset>
			<label>
				<span>Red:</span>
				<input v-model="rgb.red" type="number" maxlength="3">
			</label>

			<label>
				<span>Green:</span>
				<input v-model="rgb.green" type="number">
			</label>

			<label>
				<span>Blue: </span>
				<input v-model="rgb.blue" type="number">
			</label>
		</fieldset>
		<button @click="randomizeColor">
			Select random
		</button>
		<div class="result" :style="{backgroundColor: `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`}" />
	</div>
</template>

<style scoped lang="scss">

.container	{
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
}

fieldset {
	margin: 16px auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 200px;
	gap: 16px;

	label {
		display: flex;
		gap: 4px;
		align-items: center;
		justify-content: space-between;
	}
}

.result {
	width: 200px;
	height: 200px;
	background-color: #fff;
	margin: 0 auto;
	border-radius: 12px;
}
</style>
