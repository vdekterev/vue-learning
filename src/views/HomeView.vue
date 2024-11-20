<script setup>
import { ref } from 'vue';
import CustomInput from '@/components/ui/CustomInput.vue';

const guests = [
	{
		id: 1,
		name: 'Guest One'
	},
	{
		id: 2,
		name: 'Guest Two'
	},
];

const invitedGuests = ref(guests);

function addGuest(e) {
	let guestName = e.target.value.trim();
	if (guestName === '') {
		return;
	}
	invitedGuests.value.unshift({
		id: Math.random(),
		name: guestName,
	})

	e.target.value = '';
}
</script>

<template>
	<div>
		<h1>Home Page</h1>

		<div class="container">
			<CustomInput
				:name="'test'"
				:placeholder="'Add person to invite...'"
				@keydown.enter="addGuest"
			/>
		</div>

		<ul>
			<TransitionGroup name="invitees">
				<li v-for="guest in invitedGuests" :key="guest.id">
					{{ guest.name }}
				</li>
			</TransitionGroup>
		</ul>
	</div>
</template>

<style scoped lang="scss">
	.container {
		margin-top: 2rem;
	}

	ul {
		font-size: 2rem;
		margin-top: 1rem;
		display: grid;
		gap: .5rem;
		grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));

		li {
			display: flex;
			padding: 8px;
			border: 1px solid #bed600;
			border-radius: 8px;
			overflow: hidden;
			text-overflow: ellipsis;
		}

	}

	.invitees {
		&-enter-from {
			opacity: 0;
			transform: translateY(-100%);
		}
		&-enter-to {
			opacity: 1;
			transform: translateY(0);
		}
		&-enter-active {
			transition: opacity 1s, transform .5s;
		}
		&-move {
			transition: all 2s ease-in-out;
		}
	}
</style>
