import React from 'react';
import { Link } from 'react-router-dom';

export const Recommended = ({ project, user, numberWithCommas }) => {

  return (
    <div className='flex row-wrap flex-start padding-bot-30 bottom-border'>
      <Link className='padding-r-25' to={`/projects/${project.id}`}>{<img src={project.photo} width={"160"} height={"90"} />}</Link>
      <div className='flex flex-col'>
        <Link className='medium-name-1 hover-green-title' to={`/projects/${project.id}`}>{<h2>{project.project}</h2>}</Link>
        <h2 className='medium-name-2'>{numberWithCommas(Math.round((project.funded_amt / project.goal_amt) * 100))}% funded</h2>
        <Link className='small-name' to={`/projects/${project.id}`}>{<h2>By {user.name}</h2>}</Link>
      </div>
    </div>
  )
};