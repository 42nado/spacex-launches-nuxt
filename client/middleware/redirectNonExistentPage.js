export default function ({ route, redirect }) {
	// Assuming your homepage path is '/'

	// Check if the page does not exist (404 error)
	if (route.path === '/test') {
		// Redirect to the homepage for the '/test' route
		redirect('/')
	}
}
