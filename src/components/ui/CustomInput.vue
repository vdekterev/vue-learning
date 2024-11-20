<script setup>
	const { placeholder, type, name, isInvalid }
		= defineProps(['placeholder', 'type', 'name', 'isInvalid']);
</script>

<template>
	<div class="custom_input">
		<input
			:placeholder="placeholder"
			:type="type ?? 'text'"
			:name="name"
			class="custom_input__input"
			:class="{'invalid': isInvalid}"
		/>
<!--		<div class="error-hint" x-show="false"></div>-->
	</div>
</template>

<style scoped lang="scss">
.custom_input {
	position: relative;
	&__input {
		position: relative;
		width: 100%;
		padding: 16px;
		background: rgba(242, 242, 242, 0.03);
		border: none;
		border-radius: 6px;
		color:rgba(242, 242, 242, 0.50);
		font-weight: 600;
		font-size: 1rem;
		transition: all 0.3s ease-in-out;
		&:hover { background: rgba(242, 242, 242, 0.06); }
		&::placeholder {
			user-select: none;
		}
		&:focus,
		&:focus-visible {
			border: 1px solid rgba(242, 242, 242, 0.08) !important;
			background: #141516 !important;
		}
	}

	&__input.invalid {
		border: 1px solid crimson !important;
		color: crimson !important;
		&::placeholder { color: crimson !important; }
		&:focus { border: 1px solid var(--color-red) !important; }
	}

	.error-hint {
		margin-top: 4px;
		font-size: 12px;
		color: var(--color-red);
	}
}

</style>
