<template>
	<v-app>
		<v-main>
			<header class="px-11 py-8">
				<nav class="mx-auto d-flex justify-space-between">
					<NuxtLink
						to="/"
						class="text-decoration-none font-weight-bold text-h6 text-green-accent-3"
					>
						SpaceX Graphql API
					</NuxtLink>
					<ul class="d-flex">
						<li><NuxtLink to="/" class="text-decoration-none">Launches</NuxtLink></li>
						<li>
							<NuxtLink to="/rockets" class="text-decoration-none">Rockets</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/favorites" class="text-decoration-none">Favorites</NuxtLink>
						</li>
					</ul>
				</nav>
			</header>
			<slot />
			<v-footer cols="12" class="text-center py-4">
				<v-row justify="center">
					<v-col cols="12" class="text-center">&copy; 2023</v-col>
				</v-row>
			</v-footer>
		</v-main>
	</v-app>
</template>
<script>
export default {
	name: 'DefaultLayout',
}
</script>
<style scoped>
.router-link-exact-active {
	color: #00e676;
}

ul {
	display: flex;
	list-style: none;

	/* padding: 10px; */
	color: black;
}

li {
	padding-left: 15px;
}

header {
	box-shadow: 0 4px 2px -2px rgb(201 200 200);
}

nav a {
	color: black;
}
</style>
