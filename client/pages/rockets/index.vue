<template>
	<v-container>
		<h1 class="text-weight-bold text-center">There are {{ rockets?.length || 0 }} rockets.</h1>
		<v-col no-gutters>
			<v-row>
				<RocketCard v-for="rocket in rockets" :key="rocket.name" :r="rocket" />
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
