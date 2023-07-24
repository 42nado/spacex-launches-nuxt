<template>
	<v-card class="mx-auto my-4" max-width="374">
		<v-card-title class="font-weight-bold">{{ rocket.name }}</v-card-title>
		<v-card-text>
			<div class="my-4 text-subtitle-1">
				<span class="font-weight-bold">First Flight Date :</span>
				{{ rocket.first_flight }}
			</div>
			<v-divider class="mx-4" />
			<div>
				{{ rocket.description }}
			</div>
		</v-card-text>
		<v-card-actions>
			<NuxtLink :to="`/rockets/${rocket.id}`">
				<v-btn color="deep-purple lighten-2">More Details</v-btn>
			</NuxtLink>
			<v-btn color="deep-purple lighten-2">Favorites</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps(['r'])
const rocket = ref(props.r)
</script>
