<template>
	<v-app>
		<v-main>
			<header class="pa-11">
				<nav class="mx-auto d-flex justify-space-between">
					<NuxtLink to="/" class="text-decoration-none font-weight-bold text-h6">
						SpaceX Graphql API
					</NuxtLink>
					<ul class="d-flex">
						<li><NuxtLink to="/">Launches</NuxtLink></li>
						<li><NuxtLink to="/rockets">Rockets</NuxtLink></li>
					</ul>
				</nav>
			</header>
			<slot />
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
	color: #12b488;
}

ul {
	display: flex;
	list-style: none;
	padding: 10px;
}

li {
	padding-left: 10px;
}
</style>
