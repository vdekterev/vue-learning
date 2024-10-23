<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
console.log(route.params.id)
</script>

<template>
	<h1>Nested Route!</h1>
</template>
