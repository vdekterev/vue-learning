<script setup>
	import { useRoute } from 'vue-router'
	import cars from '@/api/cars.json'
	const route = useRoute();
	const contacts = cars.find(c => c.id === parseInt(route.params.id))?.contacts;

</script>

<template>
	<div v-if="contacts?.allowedToShow">
		<h3>Contact Information</h3>
		<div class="contacts">
			<div class="contacts_item">
				<div class="contacts_item_key">Name:</div>
				<div class="contacts_item_value">{{contacts.name}}</div>
			</div>
			<div class="contacts_item">
				<div class="contacts_item_key">Phone:</div>
				<div class="contacts_item_value">{{contacts.phone}}</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.contacts {
		margin-top: 5px;
		display: flex;
		flex-direction: column;
		gap: .5rem;
		&_item {
			display: flex;
			align-items: flex-end;
			gap: 8px;
			&_key {
				opacity: .5;
			}
		}
	}
</style>
