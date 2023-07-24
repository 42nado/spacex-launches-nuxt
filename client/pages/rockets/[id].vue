<template>
	<v-container>
		<div v-if="rocket">
			<h1 class="font-weight-bold">{{ rocket?.name }}</h1>
			<p class="my-4">{{ rocket.description }}</p>
			<p>
				<span class="font-weight-bold">First flight:</span>
				{{ rocket.first_flight }}
			</p>
			<p class="my-4">
				<span class="font-weight-bold">Height:</span>
				{{ rocket.height.meters }} meters ({{ rocket.height.feet }} feet)
			</p>
			<p class="my-4">
				<span class="font-weight-bold">Diameter:</span>
				{{ rocket.diameter.meters }} meters ({{ rocket.diameter.feet }} feet)
			</p>
			<p class="my-4">
				<span class="font-weight-bold">Mass:</span>
				{{ rocket.mass.kg }} kg ({{ rocket.mass.lb }} lb)
			</p>
			<p class="my-4">
				<span class="font-weight-bold">Stages:</span>
				{{ rocket.stages }}
			</p>
		</div>
		<div v-else>
			<p>Loading...</p>
		</div>
	</v-container>
</template>

<script setup lang="ts">
const { id } = useRoute().params

const query = gql`
	query getRocket($id: ID!) {
		rocket(id: $id) {
			id
			name
			description
			first_flight
			height {
				meters
				feet
			}
			diameter {
				meters
				feet
			}
			mass {
				kg
				lb
			}
			stages
		}
	}
`

const { data } = useAsyncQuery<{
	rocket: {
		id: string
		name: string
		description: string
		first_flight: string
		height: { meters: number; feet: number }
		diameter: { meters: number; feet: number }
		mass: { kg: number; lb: number }
		stages: number
	} | null
}>(query, { id })

const rocket = computed(() => data.value?.rocket)
</script>
