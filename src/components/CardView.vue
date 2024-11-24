<script setup>

	// "id": 2,
	// 	"name": "Morty Smith",
	// 	"status": "Alive",
	// 	"species": "Human",
	// 	"type": "",
	// 	"gender": "Male",
	// 	"origin": {
	// 	"name": "Earth",
	// 		"url": "https://rickandmortyapi.com/api/location/1"
	// },
	// "location": {
	// 	"name": "Earth",
	// 		"url": "https://rickandmortyapi.com/api/location/20"
	// },
	// "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
	// 	"episode": [
	// 	"https://rickandmortyapi.com/api/episode/1",
	// 	"https://rickandmortyapi.com/api/episode/2",
	// 	// ...
	// ],
	// 	"url": "https://rickandmortyapi.com/api/character/2",
	// 	"created": "2017-11-04T18:50:21.651Z"
	// const { name, image, gender, type, alive, actor } = defineProps([
	// 	'name', 'image', 'gender',
	// 	'type', 'alive', 'actor'
	// ])
</script>

<template>
	<n-card :title="'Rick'">
		<template #cover>
			<img src="https://www.redwolf.in/image/cache/catalog/stickers/harry-potter-logo-sticker-india-600x800.jpg?m=1687859161" />
		</template>
		<div class="info">

		</div>
	</n-card>
</template>

<style scoped lang="scss">
.n-card {
	width: 200px;
	margin: 10px 20px;
	img { height: 250px; }
}

p {
	font-size: 10px;
}

.info {
	display: flex;
	flex-direction: column;
}
</style>
