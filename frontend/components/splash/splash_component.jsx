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
  


  render() {

    let featuredBox = null;
    if (this.getFeatured()) {
      let featuredProject = this.getFeatured();
      featuredBox = (
        <div className='flex flex-col'>
          <h2>FEATURED PROJECT</h2>
          <img src={window.mainIMG} />
          <h2>{featuredProject.project}</h2>
          <h2>{featuredProject.description}</h2>
          <h2>{featuredProject.user_id}</h2>
        </div>
      )
    };

    let recommendedDiv = null;
    let recommendedDiv2 = null;
    let recommendedDiv3 = null;
    if (this.getFeatured()) {
      let recProject1 = this.getFeatured();
      let recProject2 = this.getFeatured();
      let recProject3 = this.getFeatured();
      recommendedDiv = (
        <div className='flex row-wrap flex-start'>
          <img src={window.mainIMG} width={"160"} height={"90"} />
            <div className='flex flex-col'>
              <h2>{recProject1.project}</h2>
              <h2>{recProject1.description}</h2>
              <h2>{recProject1.user_id}</h2>
            </div>
        </div>
      );
      recommendedDiv2 = (
        <div className='flex row-wrap flex-start'>
          <img src={window.mainIMG} width={"160"} height={"90"} />
            <div className='flex flex-col'>
            <h2>{recProject2.project}</h2>
            <h2>{recProject2.description}</h2>
            <h2>{recProject2.user_id}</h2>
            </div>
        </div>
      );
      recommendedDiv3 = (
        <div className='flex row-wrap flex-start'>
          <img src={window.mainIMG} width={"160"} height={"90"} />
            <div className='flex flex-col'>
            <h2>{recProject3.project}</h2>
            <h2>{recProject3.description}</h2>
            <h2>{recProject3.user_id}</h2>
            </div>
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
          <div className='flex flex-col'>
            <h2>RECOMMENDED SECTION</h2>
            {recommendedDiv}
            {recommendedDiv2}
            {recommendedDiv3}
            <h2>Link to more projects</h2>
          </div>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>PODCAST ROW</h2>
        </div>

        <div className='flex row-wrap justify-center'>
          <h2>FRESH FAVORITE cols</h2>
          <h2>FRESH FAVORITE cols2</h2>
          <h2>FRESH FAVORITE cols3</h2>
          <h2>FRESH FAVORITE cols4</h2>
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