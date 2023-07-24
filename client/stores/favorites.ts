// export interface Launch {
// 	mission_name: string
// 	// Add other properties of the launch object as needed
// }
// export const useFavoritesStore = defineStore({
// 	id: 'favorites',
// 	state: () => ({
// 		favoriteLaunches: [],
// 	}),
// 	getters: {
// 		isFavorite: (state) => (launch) => state.favoriteLaunches.includes(launch.mission_name),
// 	},
// 	actions: {
// 		addFavorite(launch) {
// 			this.favoriteLaunches.push(launch.mission_name)
// 		},
// 		removeFavorite(launch) {
// 			const index = this.favoriteLaunches.indexOf(launch.mission_name)
// 			if (index !== -1) {
// 				this.favoriteLaunches.splice(index, 1)
// 			}
// 		},
// 	},
// })
