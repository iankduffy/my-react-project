

const Project = (project) => (
	<a className="c-project col-3 col-12@md" href="www.google.com">
		<div className="c-project__image u-mar-b-md">
			<img src="/example.png" />
		</div>
		<h3>{project.project.projectName}</h3>
		<p>{project.project.description}</p>
		<button className="c-project__btn">View Project</button>
	</a>
);
  
export default Project;