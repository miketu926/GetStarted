import React from 'react';
import { Link } from 'react-router-dom';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const SearchIndexItem = ({project, user}) => {
  
  return (
    <li className='flex flex-col search-idx-i'>
      <Link to={`/projects/${project.id}`}>{<img src={project.photo} width={"390"} height={"220"} />}</Link>
      <Link className='each-line' to={`/projects/${project.id}`}>{project.project}</Link>
      <Link className='each-line' to={`/projects/${project.id}`}>{project.description}</Link>
      <h2 className='each-line'>by {user.name}</h2>
      <progress className='progress-bar each-line' max="1" value={project.funded_amt / project.goal_amt}></progress>
      <h2 className='each-line'>${numberWithCommas(Math.round((project.funded_amt)))} pledged</h2>
      <h2 className='each-line'>{numberWithCommas(Math.round((project.funded_amt / project.goal_amt) * 100))}% funded</h2>
      <h2 className='each-line'>{numberWithCommas(project.duration_days)} days to go</h2>
      <h2 className='each-line'>{project.category} | {project.location}</h2>
    </li>
  )
}

export default SearchIndexItem;