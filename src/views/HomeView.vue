<script setup>

import GameOfThrones from '@/components/GameOfThrones.vue';
</script>

<template>
	<div>
		<h1>Home Page</h1>
		<section>

			<Suspense>

				<GameOfThrones />

				<template #fallback>
					<h1>Loading!</h1>
				</template>

			</Suspense>

		</section>
	</div>
</template>
