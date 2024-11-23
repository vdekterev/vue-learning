<script setup>
	import axios from 'axios';

	const response = await axios.get('https://thronesapi.com/api/v2/Characters');
	console.log(response.data);
</script>

<template>
	<h1>Game of Thrones!</h1>

	{{ response }}
</template>

<style scoped lang="scss">

</style>
