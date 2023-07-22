<template>
	<div>
		<h1>Rockets {{ id }}</h1>
	</div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style lang="sass" scoped></style>
