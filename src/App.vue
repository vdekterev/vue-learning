<script setup>
import { ref } from 'vue'
function getRandomColor() {
	return 'hsl(' + Math.random() * 360 + ', 50%, 50%)'
}
const isModalOpen = ref(false)
const newNote = ref('')
const notes = ref([])
const selectedNote = ref({})
const errorMessage = ref('');

try {
	const lsNotes = JSON.parse(localStorage.getItem('notes'))
	if (Array.isArray(lsNotes)) {
		notes.value = lsNotes
	}
} catch (e) {
	console.warn(e)
}

function validateForm() {
	if (newNote.value.length < 10) {
		errorMessage.value = 'Too few symbols - must be at least 10';
	}
	return errorMessage.value === '';

}

function addNote() {
	const date = new Date()
	validateForm();
	if (validateForm()) {
		notes.value.push({
			id: Math.floor(Math.random() * 10000) + 1,
			text: newNote.value,
			color: getRandomColor(),
			date: date.toLocaleDateString(),
		})
		try {
			localStorage.setItem('notes', JSON.stringify(notes.value))
		} catch (e) {
			console.warn(e)
		}
		isModalOpen.value = false
		newNote.value = ''
	}
}

function selectNote(noteId) {
	const res = notes.value.find(i => i.id === noteId)
	if (res) {
		selectedNote.value = res
	}
}
</script>

<template>
	<main>
		<div class="modal" @click.self="isModalOpen = false" v-if="isModalOpen">
			<div class="modal-content">
				<p>Add a new note</p>
				<textarea
					v-model.trim="newNote"
					@keydown="errorMessage=''"
					name="note"
					id="notes"
					cols="30"
					rows="10"
				/>
				<div v-if="errorMessage" class="error">{{ errorMessage }}</div>
				<button @click="addNote">Add</button>
			</div>
		</div>

		<div class="header">
			<h1>Notes</h1>
			<button @click="isModalOpen = true">+</button>
		</div>

		<div id="notes">
				<div
					v-for="note in notes"
					:key="note.id"
					class="note"
					:style="{ background: note.color }"
					@click="selectNote(note.id)"
					:class="{'selected': selectedNote.id === note.id}"
				>
					<div class="note_title">Note № {{ note.id }}</div>
					<div class="note_content">
						{{ note.text }}
					</div>
					<div class="note_date">{{ note.date }}</div>
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
	color: #1f1f1f;
	text-shadow: 7px 7px 2px rgba(0, 0, 0, 0.23);
	user-select: none;
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
	box-shadow: 7px 7px 5px 0 rgba(0, 0, 0, 0.23);
	user-select: none;
	transition: all 0.2s ease-in-out;
}

.header button:active {
	transform: translate(7px, 7px);
	box-shadow: none;
}

#notes {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
	grid-gap: 20px;
}
.note {
	position: relative;
	cursor: pointer;
	border-radius: 12px;
	padding: 10px;
	width: 100%;

	aspect-ratio: 1;
	display: flex;
	flex-direction: column;
	gap: 10px;
	background: #1f1f1f;
	-webkit-box-shadow: 14px 14px 5px 0 rgba(0, 0, 0, 0.23);
	-moz-box-shadow: 14px 14px 5px 0 rgba(0, 0, 0, 0.23);
	box-shadow: 14px 14px 5px 0 rgba(0, 0, 0, 0.23);
	transition: all 0.2s ease-in-out;
}

.note.selected {
	transform: translate(-10px, -10px);
}

.note:not(.selected):active {
	transform: translate(14px, 14px);
	box-shadow: none;
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

.note_date {
	font-weight: bold;
}

.modal textarea {
	border-radius: 12px;
	padding: 10px;
}

.modal textarea:focus {
	outline: #1f1f1f;
}

.modal button {
	user-select: none;
	width: 100%;
	border: none;
	border-radius: 8px;
	font-size: 20px;
	color: #f2f2f2;
	background-color: blueviolet;
}
.modal button:active {
	box-shadow: 2px 2px 5px gray;
}
</style>
