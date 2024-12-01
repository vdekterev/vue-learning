<script setup>
import {useNumbersStore} from '@/stores/numbers.js';

const {addNumber, doubleNumber} = useNumbersStore();
</script>

<template>
	<hr/>
	<h1>
	GreatGrandChild: {{ doubleNumber }}
	<button @click="addNumber(Math.floor(Math.random() * 10))">Add</button>
	</h1>
</template>

<style scoped lang="scss">

</style>
