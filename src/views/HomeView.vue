<script>
export default {
	name: "HomeView",
	data() {
		return {
			guests: []
		}
	},
	methods: {
		addGuest() {
			this.guests.push({id: 1, name: 'Vlad'})
		}
	}
}
</script>

<template>
	<form>
		<fieldset>
			<label>
				<input type="email" name="email" placeholder="Email*"/>
			</label>

			<label>
				<input type="number" name="phone" placeholder="Номер Телефона*"/>
			</label>

			<label>
				<input type="text" name="surname" placeholder="Фамилия*"/>
			</label>

			<label>
				<input type="text" name="name" placeholder="Имя*"/>
			</label>
		</fieldset>
		<div class="add-guest" @click="addGuest">
			Добавить гостя: <button type="button">+</button>
		</div>
		<hr style="margin: .5rem auto">
		<template v-for="guest in guests" :key="guest.id">
			<div>{{ guest }}</div>
		</template>
		<button type="submit">Send Data</button>
	</form>
</template>

<style scoped lang="scss">
form > fieldset{
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 1rem auto;
}

input {
	border: 1px solid #181818;
	border-radius: 8px;
	padding: 0.5rem;
}

</style>
