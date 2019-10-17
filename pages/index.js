import "../css/styles.css"
import Project from "../components/c-projects"
import ProjectData from "../data/projects"

const Index = () => (
	<div>
		<header className="u-pad-v-md"><div className="container col-12">React Project</div></header>
		<div className="c-screen-intro c-screen">
			<div className="container container__column container--center c-screen u-t-cen@md"> 
				<div className="col-8 col-12@md u-pad-h-lg@md">
					<h1>My Reach Projects</h1>
					<p className="h2">A number of react projects built to help improve my skills.</p>
					<a className="c-btn col-4" href="https://www.iankduffy.com/">My Website</a>
				</div>
			</div>
		</div>
		<div className="container container__row u-mar-v-lg">
			{ProjectData.map(project => <Project project={project} key={project.id}/>)}
		</div>
	</div>
);
  
export default Index;