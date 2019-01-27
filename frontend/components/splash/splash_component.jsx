import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProjects, fetchProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';

const msp = (state) => {
  return({
    
  });
};

const mdp = (dispatch) => {
  return({
    fetchAllProjects: () => dispatch(fetchAllProjects()),
    fetchProject: (id) => dispatch(fetchProject(id)),
  });
};



class SplashComponent extends React.Component {

  componentDidMount() {
    this.props.fetchAllProjects();
  }
  
  render() {

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

        <div>
          <h2>FEATURED PROJECT</h2>
          <h2>RECOMMENDED</h2>
        </div>

        <div>
          <h2>PODCAST ROW</h2>
        </div>

        <div>
          <h2>FRESH FAVORITE cols</h2>
          <h2>FRESH FAVORITE cols2</h2>
          <h2>FRESH FAVORITE cols3</h2>
          <h2>FRESH FAVORITE cols4</h2>
        </div>

        <div>
          <h2>MAKE 100 project row</h2>
        </div>

        <div>
          <h2>MAKE 100 projects cols</h2>
          <h2>MAKE 100 projects cols2</h2>
          <h2>MAKE 100 projects cols3</h2>
          <h2>MAKE 100 projects cols4</h2>
        </div>

        <div>
          <h2>The creative independent row with img and links to people</h2>
        </div>

        <div>
          <h2>Home STRETCH projects col1</h2>
          <h2>Home STRETCH projects col2</h2>
          <h2>Home STRETCH projects col3</h2>
          <h2>Home STRETCH projects col4</h2>
        </div>

        <div>
          <h2>CREATOR STORIES col1</h2>
          <h2>CREATOR STORIES col2</h2>
        </div>

        <div>
          <h2>MORE TO EXPLORE col1</h2>
          <h2>MORE TO EXPLORE col2</h2>
          <h2>MORE TO EXPLORE col3</h2>
          <h2>MORE TO EXPLORE col4</h2>
        </div>

        <div>
          <h2>SUBSCRIBE TO KICKSTARTER</h2>
        </div>



      </div>
    );
    
  }
  
}


export default connect(msp, mdp)(SplashComponent);