import Layout from '../components/Layout'

const Tools = () => (
	<Layout>
	<h1>Tools</h1>
	<div className="row mt-3">
		<h2 className="text-center">Git</h2>
		<div className="col-md-4">
			<img src="https://cdn.iconscout.com/icon/free/png-256/social-285-116319.png" alt="" className="img-fluid" />
		</div>
		<div className="col-md-6">
			<p className="mt-5">Git is a version control software designed by Linus Torvalds, thinking about the efficiency, reliability and compatibility of application version maintenance when applications have a large number of source code files.</p>
		</div>
		<div className="col-md-12 mt-5">
			<h2>Basic commands:</h2>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git add [files]:</h3></u>
 			<p>Add files to the "Staging area"</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git rm [files]:</h3></u>
 			<p>Remove files to the "Staging area"</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git status:</h3></u>
 			<p>Confirm if the files are in the "Staging area" or not</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git config --global user.email [email]:</h3></u>
 			<p>Add the email of the creator of the files</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git config --global user.name:</h3></u>
 			<p>Add the name of the creator of the files</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git branch:</h3></u>
 			<p>See all the sessions you have to do changes</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git checkout [branch]:</h3></u>
 			<p>Change to other session</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git commit -m [message]:</h3></u>
 			<p>Create a version of the app that we are building</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git diff [files]:</h3></u>
 			<p>See the difference with the las file we select and its lastest version</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git checkout -- [files]:</h3></u>
 			<p>Go back to the lastest version of the file that we select</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git log:</h3></u>
 			<p>List all the versions of the app</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git remote add origin [git link]:</h3></u>
 			<p>Add the "origin" session so you can upload the app to github</p>
		</div>
		<div className="col-md-4">
			<u><h3 className="mt-5" style={{color: "red"}}>Git push -u origin master:</h3></u>
			<p>Push the commit to the repository on github</p>
		</div>
	</div>
	</Layout>
)
export default Tools;
