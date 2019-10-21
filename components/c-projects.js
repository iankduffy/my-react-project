import Link from 'next/link'

const Project = (project) => (
	<Link href={project.project.href}>
		<a className="c-project col-3 col-12@md">
			<div className="c-project__image u-mar-b-md">
				<img src="/example.png" />
			</div>
			<h3>{project.project.projectName}</h3>
			<p>{project.project.description}</p>
			<button className="c-project__btn">View Project</button>
		</a>
	</Link>
);
  
export default Project;