import React from 'react';
import { Link } from 'react-router-dom';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const SearchIndexItem = ({project, user}) => {
  
  return (
    <li>
      <Link to={`/projects/${project.id}`}>{<img src={project.photo} width={"390"} height={"220"} />}</Link>
      <Link to={`/projects/${project.id}`}>{project.project}</Link>
      <Link to={`/projects/${project.id}`}>{project.description}</Link>
      <h2>by {user.name}</h2>
      <progress className='progress-bar' max="1" value={project.funded_amt / project.goal_amt}></progress>
      <h2>${numberWithCommas(Math.round((project.funded_amt)))} pledged</h2>
      <h2 className=''>{numberWithCommas(Math.round((project.funded_amt / project.goal_amt) * 100))}% funded</h2>
      <h2 className=''>{numberWithCommas(project.duration_days)} days to go</h2>
      <h2 className=''>{project.category} | {project.location}</h2>
    </li>
  )
}

export default SearchIndexItem;