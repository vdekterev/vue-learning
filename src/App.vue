<script setup>

</script>

<template>
	<header>
		<h1>Quizzes</h1>
		<input class="search-bar" placeholder="Search..."/>
	</header>

	<main>
		<div id="cards">
			<div class="card">
				<div class="card_img">
					<img src="https://placehold.co/476x476/black/blue/?text=Quizz" alt="Quiz Image">
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
	header {
		display: flex;
		gap: 30px;
	}
	header .search-bar {
		border-radius: 8px;
		padding: 0 8px;
		place-items: center;
	}
	#cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 20px;
	}
	card {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	.card .card_img > img {
		object-fit: contain;
	}
</style>
