<template>
	<v-container>
		<h1 class="text-weight-bold text-center">There are {{ rockets?.length || 0 }} rockets.</h1>

		<v-col no-gutters>
			<v-row>
				<v-card v-for="rocket in rockets" :key="rocket.name" class="mx-auto my-4" max-width="374">
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
			</v-row>
		</v-col>
	</v-container>
</template>
<script lang="ts" setup>
import { computed } from 'vue' // Make sure to import the necessary dependencies here

const query2 = gql`
	query getRockets {
		rockets {
			id
			name
			diameter {
				feet
				meters
			}
			description
			first_flight
			mass {
				kg
				lb
			}
			height {
				meters
				feet
			}
			stages
		}
	}
`

const { data: rocketData } = useAsyncQuery<{
	rockets: {
		id: string
		name: string
		diameter: {
			feet: number
			meters: number
		}
		description: string
		first_flight: string
		mass: {
			kg: number
			lb: number
		}
		height: {
			meters: number
			feet: number
		}
		stages: number
	}[]
}>(query2)

const rockets = computed(() => rocketData.value?.rockets ?? [])
</script>
