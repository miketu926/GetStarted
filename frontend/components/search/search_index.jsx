import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllProjects } from '../../actions/projects/project_actions';
import { withRouter } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

function SearchIndex(props) {
  const projects = useSelector(state => {
    return Object.values(state.entities.projects) || [];
  });

  const searchTerm = useSelector(() => {
    return props.match.params.searchTerm;
  });

  const users = useSelector(({ entities }) => {
    return entities.users;
  });

  const dispatch = useDispatch();

  const handleSubmit = (searchTerm) => {
    fetchAllProjects(searchTerm)(dispatch)
      .then(() => {
        props.history.push(`/search/${searchTerm}`);
        window.scrollTo(0, 0);
      });
  };

  const projectsIndex = projects.map(project => {
    return (
      <SearchIndexItem
        key={project.id}
        project={project}
        user={users[project.user_id]}
      />
    );
  })

  let wordProject = "projects";
  if (projects.length === 1) wordProject = "project";

  return (
    <>
      <div className='flex flex-col search-page'>
        <h2 className='search-count-sent'>Explore <i className='green-bold'>{projects.length} {wordProject}</i> related to <i className='green-bold'>{searchTerm}</i></h2>
        <ul className='flex row-wrap search-index-w'>
          {projectsIndex}
        </ul>
      </div>

      <div className='cat-bot flex row-wrap justify-center'>
        <button onClick={() => handleSubmit("Arts")} className='hover cat'>Arts</button>
        <button onClick={() => handleSubmit("Design")} className='hover cat'>Design</button>
        <button onClick={() => handleSubmit("Film")} className='hover cat'>Film</button>
        <button onClick={() => handleSubmit("Games")} className='hover cat'>Games</button>
        <button onClick={() => handleSubmit("Music")} className='hover cat'>Music</button>
        <button onClick={() => handleSubmit("Photography")} className='hover cat'>Photography</button>
        <button onClick={() => handleSubmit("Publishing")} className='hover cat'>Publishing</button>
        <button onClick={() => handleSubmit("Technology")} className='hover cat'>Technology</button>
      </div>
    </>
  )

}
export default withRouter(SearchIndex)