<script setup>
	import { ref } from 'vue'
	function getRandomColor() {
		return "hsl(" + Math.random() * 360 + ", 50%, 50%)";
	}
	const isModalOpen = ref(false);
</script>

<template>
	<main>
		<div class="modal" @click.self="isModalOpen=false" v-if="isModalOpen">
				<div class="modal-content">
					<p>Add a new note</p>
					<textarea name="note" id="notes" cols="30" rows="10"/>
					<button>Add</button>
					<div class="close">+</div>
				</div>
		</div>


		<div class="header">
			<h1>Notes</h1>
			<button @click="isModalOpen=true">+</button>
		</div>

		<div id="notes">
			<div class="note" :style="{background: getRandomColor()}">
				<div class="note_title">title1</div>
				<div class="note_content">
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit.
					A accusamus fugiat ipsa laborum
					maiores qui tempora vel veniam
					voluptates voluptatum?
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit.
					A accusamus fugiat ipsa laborum
					maiores qui tempora vel veniam
					voluptates voluptatum?
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit.
					A accusamus fugiat ipsa laborum
					maiores qui tempora vel veniam
					voluptates voluptatum?
				</div>
				<div class="note_date">11.10.2024</div>
			</div>
			<div class="note" :style="{background: getRandomColor()}">
				<div class="note_title">title1</div>
				<div class="note_content">
					Lorem ipsum dolor sit amet,
					consectetur adipisicing elit.
					A accusamus fugiat ipsa laborum
					maiores qui tempora vel veniam
					voluptates voluptatum?
				</div>
				<div class="note_date">11.10.2024</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
	.header {
		display: flex;
		place-content: center space-between;
	}
	.header h1 {
		font-size: 48px;
		font-weight: 700;
	}
	.header button {
		border: none;
		border-radius: 99px;
		display: flex;
		place-items: center;
		place-content: center;
		width: 48px;
		aspect-ratio: 1;
		background: #000;
		color: #f2f2f2;
		cursor: pointer;
		font-size: 20px;
	}
	#notes {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
	}
	.note {
		border-radius: 12px;
		padding: 10px;
		width: 100%;
		max-width: 250px;
		max-height: 250px;
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
		background: #1F1F1F;
	}
	.note_title {
		font-weight: bold;
		padding-bottom: 10px;
		border-bottom: 1px dashed gray;
		text-align: center;
		font-size: 20px;
	}
	.note_content {
		flex-grow: 1;
		overflow: hidden;
	}

	.modal textarea {
		border-radius: 12px;
		padding: 10px;
	}
	.modal button {
		user-select: none;
		width: 100%;
		border: none;
		border-radius: 8px;
		font-size: 20px;
		color: #f2f2f2;
		background: rgb(2,0,36);
		background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(108,105,149,1) 0%, rgba(54,82,198,1) 53%, rgba(34,177,39,1) 100%);
	}
	.modal button:active {
		box-shadow: 2px 2px 5px gray;
	}
	.modal .close {
		position: absolute;
		top: 10px;
		right: 10px;
		border-radius: 99px;
		background-color: gray;
		width: 24px;
		aspect-ratio: 1;
		display: flex;
		place-items: center;
		place-content: center;
		font-weight: bold;
		transform: rotate(45deg);
		cursor: pointer;
		user-select: none;
	}
	.modal .close:active {
		box-shadow: 2px 2px 5px gray;
	}
</style>
