import React from 'react';
import { withRouter } from 'react-router-dom';

const ExploreNavComponent = (props) => {
  const handleSubmit = (searchTerm) => {
    props.fetchAllProjects(searchTerm).then(() => {
      props.history.push(`/search/all projects`);
      window.scrollTo(0, 0);
    });
  };

  return (
    <div className='explore-nav nav-font'>
      <button onClick={() => handleSubmit("ALL_PROJECTS")} className='hover-header'>Explore</button>
    </div>
  )
}

// class ExploreNavComponent extends React.Component {

//   handleSubmit(searchTerm) {
//     const that = this;
//     this.props.fetchAllProjects(searchTerm)
//       .then(() => {
//         that.props.history.push(`/search/all projects`);
//         window.scrollTo(0, 0);
//       });
//   }

//   render() {
//     return (
//       <div className='explore-nav nav-font'>
//         <button onClick={() => this.handleSubmit("ALL_PROJECTS")} className='hover-header'>Explore</button>
//       </div>
//     )
//   }
// }

export default withRouter(ExploreNavComponent);