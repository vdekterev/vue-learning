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

	const { name, image, gender, status, species, location  } = defineProps([
		'name', 'image', 'gender', 'status', 'species',
		'location'
	]);
</script>

<template>
	<div class="flip-card">
		<div class="flip-card-inner">
			<div class="flip-card-front">
				<div class="title">{{ name }}</div>
				<img :src="image" alt="">
			</div>
			<div class="flip-card-back">
				<p class="title">Short Info</p>
				<div class="properties">
					<div class="property">
						<div class="prop-name">
							Species
						</div>
						<div>{{ species }}</div>
					</div>
					<div class="property">
						<div class="prop-name">
							Gender
						</div>
						<div>{{ gender }}</div>
					</div>
					<div class="property">
						<div class="prop-name">
							Species
						</div>
						<div>{{ species }}</div>
					</div>
					<div class="property">
						<div class="prop-name">
							Status
						</div>
						<div>{{ status }}</div>
					</div>
					<div class="property">
						<div class="prop-name">
							Location
						</div>
						<div>
							<a :href="location.url"  target="_blank">
							{{ location.name }}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.flip-card {
	background-color: transparent;
	width: 190px;
	height: 254px;
	perspective: 1000px;
	font-family: sans-serif;
	cursor: pointer;

	.title {
		font-size: 1.5em;
		font-weight: 900;
		text-align: center;
		margin: 0;
	}
}

.flip-card-front, .flip-card-back {
	box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	overflow: hidden;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border: 1px solid coral;
	border-radius: 1rem;
}

.flip-card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 1s ease-in-out;
	transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
	transform: rotateY(180deg);
}

.flip-card-front {
	background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%,
		rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
	color: coral;
	padding-top: .5rem;
	& > img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
}

.flip-card-back {
	background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%,
		bisque 40%, rgb(255, 185, 160) 78%);
	color: white;
	transform: rotateY(180deg);

	.properties {
		display: grid;
		grid-row-gap: .5rem;
		.property {
			border-top: 1px dotted white;
			border-bottom: 1px dotted white;
			.prop-name {
				font-size: .75rem;
				color: gray;
			}
		}
	}
}
</style>
