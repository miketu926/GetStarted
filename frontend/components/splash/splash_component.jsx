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

    let featuredBox = null
    if (this.getFeatured()) {
      featuredBox = (
        <h2>
          {this.getFeatured().project}
        </h2>
      )
    }

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
          <div className='flex flex-col'>
            <h2>FEATURED PROJECT HEADER</h2>
            {featuredBox}
            <h2>FEATURED PROJECT IMAGE</h2>
            <h2>FEATURED PROJECT TITLE</h2>
            <h2>FEATURED DESCRIPTION</h2>
            <h2>FEATURED USER</h2>
          </div>
          <div className='flex flex-col'>
            <h2>RECOMMENDED TITLE</h2>
            <h2>RECOMMENDED PROJECT1</h2>
            <h2>RECOMMENDED PROJECT2</h2>
            <h2>RECOMMENDED PROJECT3</h2>
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