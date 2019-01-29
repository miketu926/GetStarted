import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProjects, fetchProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';


const msp = ({entities}) => {

  return({
    projects: entities.projects,
  });
};

const mdp = (dispatch) => {
  return({
    fetchAllProjects: () => dispatch(fetchAllProjects()),
    fetchProject: (id) => dispatch(fetchProject(id)),
  });
};


class SplashComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getFeatured = this.getFeatured.bind(this);
  }

  componentDidMount() { 
    this.props.fetchAllProjects();
  }

  getFeatured() {
    let featured = null;
    let allProjects = Object.values(this.props.projects);
    if (allProjects.length > 0) {
      featured = allProjects[Math.floor(Math.random() * allProjects.length)];
    }
    return (featured);
  }
  
  // CSS to handle max/min image sizing for window.mainIMG

  render() {

    let featuredBox = null;
    if (this.getFeatured()) {
      let featuredProject = this.getFeatured();
      featuredBox = (
        <div className='flex flex-col margin-lr'>
          <h2>FEATURED PROJECT</h2>
          <Link to={`/projects/${featuredProject.id}`}>{<img src={featuredProject.photo} />}</Link>
          <Link to={`/projects/${featuredProject.id}`}>{featuredProject.project}</Link>
          <Link to={`/projects/${featuredProject.id}`}>{featuredProject.description}</Link>
          <Link to={`/projects/${featuredProject.id}`}>{featuredProject.user_id}</Link>
        </div>
      )
    };

    let recommendedDiv = null;
    let recommendedDiv2 = null;
    let recommendedDiv3 = null;
    let freshFavoriteDiv = null;
    let freshFavoriteDiv2 = null;
    let freshFavoriteDiv3 = null;
    let freshFavoriteDiv4 = null;
    if (this.getFeatured()) {
      let recProject1 = this.getFeatured();
      let recProject2 = this.getFeatured();
      let recProject3 = this.getFeatured();
      let freshProject1 = this.getFeatured();
      let freshProject2 = this.getFeatured();
      let freshProject3 = this.getFeatured();
      let freshProject4 = this.getFeatured();
      recommendedDiv = (
        <div className='flex row-wrap flex-start'>
          <Link to={`/projects/${recProject1.id}`}>{<img src={recProject1.photo} width={"160"} height={"90"} />}</Link>
          <div className='flex flex-col'>
            <Link to={`/projects/${recProject1.id}`}>{<h2>{recProject1.project}</h2>}</Link>
            <h2>{(recProject1.funded_amt / recProject1.goal_amt)*100}% funded</h2>
            <Link to={`/projects/${recProject1.id}`}>{<h2>{recProject1.user_id}</h2>}</Link>
          </div>
        </div>
      );
      recommendedDiv2 = (
        <div className='flex row-wrap flex-start'>
          <Link to={`/projects/${recProject2.id}`}>{<img src={recProject2.photo} width={"160"} height={"90"} />}</Link>
          <div className='flex flex-col'>
            <Link to={`/projects/${recProject2.id}`}>{<h2>{recProject2.project}</h2>}</Link>
            <h2>{(recProject2.funded_amt / recProject2.goal_amt) * 100}% funded</h2>
            <Link to={`/projects/${recProject2.id}`}>{<h2>{recProject2.user_id}</h2>}</Link>
          </div>
        </div>
      );
      recommendedDiv3 = (
        <div className='flex row-wrap flex-start'>
          <Link to={`/projects/${recProject3.id}`}>{<img src={recProject3.photo} width={"160"} height={"90"} />}</Link>
          <div className='flex flex-col'>
            <Link to={`/projects/${recProject3.id}`}>{<h2>{recProject3.project}</h2>}</Link>
            <h2>{(recProject3.funded_amt / recProject3.goal_amt) * 100}% funded</h2>
            <Link to={`/projects/${recProject3.id}`}>{<h2>{recProject3.user_id}</h2>}</Link>
          </div>
        </div>
      );
      freshFavoriteDiv = (
        <div className='flex flex-col margin-lr-20'>
          <Link to={`/projects/${freshProject1.id}`}>{<img src={freshProject1.photo} width={"290"} height={"165"} />}</Link>
          <Link to={`/projects/${freshProject1.id}`}>{<h2>{freshProject1.project}</h2>}</Link>
          <Link to={`/projects/${freshProject1.id}`}>{<h2>{freshProject1.description}</h2>}</Link>
          <Link to={`/projects/${freshProject1.id}`}>{<h2>{freshProject1.user_id}</h2>}</Link>
        </div>
      );
      freshFavoriteDiv2 = (
        <div className='flex flex-col margin-lr-20'>
          <Link to={`/projects/${freshProject2.id}`}>{<img src={freshProject2.photo} width={"290"} height={"165"} />}</Link>
          <Link to={`/projects/${freshProject2.id}`}>{<h2>{freshProject2.project}</h2>}</Link>
          <Link to={`/projects/${freshProject2.id}`}>{<h2>{freshProject2.description}</h2>}</Link>
          <Link to={`/projects/${freshProject2.id}`}>{<h2>{freshProject2.user_id}</h2>}</Link>
        </div>
      );
      freshFavoriteDiv3 = (
        <div className='flex flex-col margin-lr-20'>
          <Link to={`/projects/${freshProject3.id}`}>{<img src={freshProject3.photo} width={"290"} height={"165"} />}</Link>
          <Link to={`/projects/${freshProject3.id}`}>{<h2>{freshProject3.project}</h2>}</Link>
          <Link to={`/projects/${freshProject3.id}`}>{<h2>{freshProject3.description}</h2>}</Link>
          <Link to={`/projects/${freshProject3.id}`}>{<h2>{freshProject3.user_id}</h2>}</Link>
        </div>
      );
      freshFavoriteDiv4 = (
        <div className='flex flex-col margin-lr-20'>
          <Link to={`/projects/${freshProject4.id}`}>{<img src={freshProject4.photo} width={"290"} height={"165"} />}</Link>
          <Link to={`/projects/${freshProject4.id}`}>{<h2>{freshProject4.project}</h2>}</Link>
          <Link to={`/projects/${freshProject4.id}`}>{<h2>{freshProject4.description}</h2>}</Link>
          <Link to={`/projects/${freshProject4.id}`}>{<h2>{freshProject4.user_id}</h2>}</Link>
        </div>
      );
    };


    return(
      <div className='flex flex-col'>

        <div className='categories-NAV flex row-wrap justify-center'>
          <button className='hover cat'>Arts</button>
          <button className='hover cat'>Comics & Illustration</button>
          <button className='hover cat'>Design & Tech</button>
          <button className='hover cat'>Film</button>
          <button className='hover cat'>Food & Craft</button>
          <button className='hover cat'>Games</button>
          <button className='hover cat'>Music</button>
          <button className='hover cat'>Publishing</button>
        </div>

        <div className='flex row-wrap justify-center'>
          {featuredBox}
          <div className='flex flex-col margin-lr'>
            <h2>RECOMMENDED SECTION</h2>
            {recommendedDiv}
            {recommendedDiv2}
            {recommendedDiv3}
            <h2>Link to more projects</h2>
          </div>
        </div>

        <div className='flex flex-col'>
          <div>
            <h2>FRESH FAVORITES</h2>
          </div>
          <div className='flex row-wrap justify-center' >
            {freshFavoriteDiv}
            {freshFavoriteDiv2}
            {freshFavoriteDiv3}
            {freshFavoriteDiv4}
          </div>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>MAKE 100 project row</h2>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>MAKE 100 projects cols</h2>
          <h2>MAKE 100 projects cols2</h2>
          <h2>MAKE 100 projects cols3</h2>
          <h2>MAKE 100 projects cols4</h2>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>The creative independent row with img and links to people</h2>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>Home STRETCH projects col1</h2>
          <h2>Home STRETCH projects col2</h2>
          <h2>Home STRETCH projects col3</h2>
          <h2>Home STRETCH projects col4</h2>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>CREATOR STORIES col1</h2>
          <h2>CREATOR STORIES col2</h2>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>MORE TO EXPLORE col1</h2>
          <h2>MORE TO EXPLORE col2</h2>
          <h2>MORE TO EXPLORE col3</h2>
          <h2>MORE TO EXPLORE col4</h2>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>SUBSCRIBE TO KICKSTARTER</h2>
        </div>



      </div>
    );
    
  }
  
}


export default connect(msp, mdp)(SplashComponent);