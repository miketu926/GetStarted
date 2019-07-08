import React from 'react';
import { Link } from 'react-router-dom';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const SearchIndexItem = ({ project, user }) => {

  const { category, location, funded_amt, goal_amt, description, duration_days, photo } = project;

  return (
    <li className='flex flex-col search-idx-i'>
      <Link to={`/projects/${project.id}`}>{<img src={photo} width={"390"} height={"220"} />}</Link>
      <Link className='each-line search-i-title' to={`/projects/${project.id}`}>{project.project}</Link>
      <Link className='each-line search-i-desc' to={`/projects/${project.id}`}>{description}</Link>
      <h2 className='each-line search-i-user'>by {user.name}</h2>
      <div className='progress-bar-bot'>
        <progress className='progress-bar each-line search-i-progress-bar' max="1" value={funded_amt / goal_amt}></progress>
        <h2 className='search-i-green'>${numberWithCommas(Math.round((project.funded_amt)))} pledged</h2>
        <h2 className='search-i-bot-font'>{numberWithCommas(Math.round((funded_amt / goal_amt) * 100))}% funded</h2>
        <h2 className='search-i-bot-font'>{numberWithCommas(duration_days)} days to go</h2>
        <h2 className='search-i-bot-margin'><i className='search-i-bot-cat'>{category}</i> | <i className='search-i-bot-cat'>{location}</i></h2>
      </div>
    </li>
  )
}

export default SearchIndexItem;