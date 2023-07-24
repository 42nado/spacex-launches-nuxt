<template>
	<v-container>
		<h1 class="text-weight-bold text-center">SpaceX Lauches</h1>
		<div class="d-flex justify-end">
			<div class="my-2">
				<v-btn icon @click="toggleSortDirection">
					<v-icon>{{ sortDirection === 'asc' ? 'mdi-arrow-up' : 'mdi-arrow-down' }}</v-icon>
				</v-btn>
				<span class="mx-2">Sort by Date</span>
			</div>
			<v-select
				v-model="selectedYear"
				:items="getUniqueYears"
				label="Filter by Year"
				density="compact"
				class="my-2"
				style="max-width: 200px"
				variant="solo"
			/>
		</div>

		<v-card v-for="launch in sortedLaunches" :key="launch.mission_name" class="mx-auto my-4">
			<template #progress>
				<v-progress-linear color="deep-purple" height="10" indeterminate />
			</template>
			<v-card-title class="font-weight-bold">{{ launch.mission_name }}</v-card-title>

			<v-card-text>
				<div class="my-3">Launch Date: {{ launch.launch_date_local }}</div>
				<div class="my-3">Launch Site: {{ launch.launch_site || `N/A` }}</div>
				<div>
					{{ launch.details || `No details available for this launch.` }}
				</div>
			</v-card-text>

			<v-divider class="mx-4" />

			<v-card-text>
				<p class="text-subtitle-1">Rocket</p>
				<v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
					<v-chip>{{ launch.rocket.rocket_name }}</v-chip>
				</v-chip-group>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const selectedYear = ref(null)
const sortDirection = ref('desc') // Default to ascending order

const query2 = gql`
	query Launches {
		launches {
			mission_name
			launch_date_local
			launch_site {
				site_name
				site_name_long
			}
			rocket {
				rocket_name
			}
			details
		}
	}
`

const { data: launchesData } = useAsyncQuery<{
	launches: {
		mission_name: string
		launch_date_local: string // Note that launch_date_local is a string
		launch_site: {
			site_name: string
			site_name_long: string
		}
		rocket: {
			rocket_name: string
		}
		details: string
	}[]
}>(query2)

const launches = computed(() => launchesData.value?.launches ?? [])

// Create a computed property to generate unique years from the launches data
const getUniqueYears = computed(() => {
	const years = new Set()
	launches.value.forEach((launch) => {
		const launchYear = new Date(launch.launch_date_local).getFullYear()
		years.add(launchYear)
	})
	return Array.from(years)
})

// Create a computed property to filter the launches based on the selected year
const filteredLaunches = computed(() => {
	if (!selectedYear.value) {
		// If no year is selected, return all launches
		return launches.value
	}

	// Filter the launches based on the selected year
	return launches.value.filter((launch) => {
		const launchYear = new Date(launch.launch_date_local).getFullYear()
		return launchYear === selectedYear.value
	})
})

// Create a computed property to sort the filtered launches based on the selected sort direction
const sortedLaunches = computed(() => {
	const sortedData = [...filteredLaunches.value] // use spread operator to create a copy of the filtered launches
	if (sortDirection.value === 'asc') {
		sortedData.sort((a, b) => new Date(a.launch_date_local) - new Date(b.launch_date_local))
	} else {
		sortedData.sort((a, b) => new Date(b.launch_date_local) - new Date(a.launch_date_local))
	}
	return sortedData
})

// Create a method to toggle the sort direction
const toggleSortDirection = () => {
	sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
}
</script>
<style>
/* Add some styling to the sort button */
.v-btn.sort-btn {
	min-width: 40px;
	height: 40px;
}
</style>
