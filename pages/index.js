import "../css/styles.css"
import Project from "../components/c-projects"
import ProjectData from "../data/projects"
import ProfilePic from "../components/c-profile-pic"


const Index = () => (
	<div>
		<header className="u-pad-v-md header--default">
			<div className="h3 container container__row container__row--v-center"><img src="/Logo.svg" className="header__logo u-mar-r-md" alt="ian duffy logo"/>Ian Duffy React Project</div></header>
		<div className="c-screen-intro c-screen">
			<div className="container container__row container__row--v-center c-screen u-t-cen@md"> 
				<div className="col-5 container--center"><ProfilePic /></div>
				<div className="col-7 col-12@md container container__column">
					<h1>HI I AM IAN DUFFY</h1>
					<p className="h2">I’M WEB DEVELOPER</p>
					<p className="h3">THIS IS A NUMBER OF REACT PROJECTS BUILT TO HELP IMPROVE MY SKILLS AND SHOWCASE THEM USING NEXT.JS.</p>
					<div className="container container__row u-mar-v-md">
						<a className="c-btn col-3 u-mar-r-md" href="https://www.iankduffy.com/">My Website</a>
						<a className="c-btn col-3 u-mar-r-md" href="https://github.com/iankduffy">My Github</a>
						<a className="c-btn col-3 u-mar-r-md" href="https://github.com/iankduffy/my-react-project">Github Project</a>
					</div>
				</div>
			</div>
		</div>
		<div className="container container__row u-mar-v-lg">
			{ProjectData.map(project => <Project project={project} key={project.id}/>)}
		</div>
	</div>
);
  
export default Index;