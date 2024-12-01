<script setup>
import Child from '@/components/Child.vue';
import {useNumbersStore} from '@/stores/numbers.js';

const {filterNum, addNumber} = useNumbersStore();

</script>

<template>
	<h1>
		Parent: {{ filterNum(5) }}
		<button @click="addNumber(Math.floor(Math.random() * 10))">Add</button>
	</h1>
	<Child/>
</template>

<style scoped lang="scss">

</style>
