import Navbar from './Navbar'

const Layout = ({children}) => (
	<>
	<Navbar/>
	<main className="container py-4">
		{children}
	</main>
	<footer className="bg-dark text-light text-center">
		<div className="container p-4">
			<h1>&copy; Kinfo</h1>
			<p>All rights reserverd.</p>
		</div>
	</footer>
	</>
)
export default Layout;
