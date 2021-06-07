import Link from 'next/link'

const Navbar = () => (	
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  		<div className="container">
			<Link href='/'>
			<a className="navbar-brand" href="#">Kinfo</a>
			</Link>
  			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
   	 		<span className="navbar-toggler-icon"></span>
  			</button>
  			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    				<div className="navbar-nav ml-auto">
					<Link href='/dynamic_programming'>
      					<a className="nav-item nav-link">Dynamic programming</a>
					</Link>
					<Link href='/machine_learning'>
      					<a className="nav-item nav-link">Machine learning</a>
					</Link>
					<Link href='/tools'>
      					<a className="nav-item nav-link" href="#">Tools</a>
					</Link>
    				</div>
  			</div>
		</div>
	</nav>		
)
export default Navbar;
