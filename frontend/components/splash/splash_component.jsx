import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProjects, fetchProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';
import { Recommended, Favorites, Featured } from './splash_item';

function SplashComponent(props) {
  const projects = useSelector(({ entities }) => {
    return entities.projects;
  });

  const users = useSelector(({ entities }) => {
    return entities.users;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAllProjects()(dispatch);
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getFeatured = (n = 1) => {
    let allProjects = Object.values(projects);
    let set = new Set();
    while (set.size < n) {
      set.add(allProjects[Math.floor(Math.random() * allProjects.length)]);
    }
    return [...set];
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm === "ALL_PROJECTS") {
      fetchAllProjects(searchTerm)(dispatch)
        .then(() => {
          props.history.push(`/search/all projects`);
          window.scrollTo(0, 0);
        });
    } else {
      fetchAllProjects(searchTerm)(dispatch)
        .then(() => {
          props.history.push(`/search/${searchTerm}`);
          window.scrollTo(0, 0);
        });
    }
  };

  if (!projects || !users || !getFeatured()[0]) {
    return <div>Loading...</div>
  }

  const featured = getFeatured().map(project => {
    return (
      <Featured
        key={project.id}
        project={project}
        user={users[project.user_id]}
      />
    );
  })

  const recommended = getFeatured(3).map(project => {
    return (
      <Recommended
        numberWithCommas={numberWithCommas}
        key={project.id}
        project={project}
        user={users[project.user_id]}
      />
    )
  })

  const favorites = getFeatured(4).map((project, idx) => {
    return (
      <Favorites
        key={project.id}
        project={project}
        user={users[project.user_id]}
        idx={idx}
      />
    )
  })

  return (
    <div className='flex flex-col'>
      <div className='categories-NAV flex row-wrap justify-center'>
        <button onClick={() => handleSearch("Arts")} className='hover cat'>Arts</button>
        <button onClick={() => handleSearch("Design")} className='hover cat'>Design</button>
        <button onClick={() => handleSearch("Film")} className='hover cat'>Film</button>
        <button onClick={() => handleSearch("Games")} className='hover cat'>Games</button>
        <button onClick={() => handleSearch("Music")} className='hover cat'>Music</button>
        <button onClick={() => handleSearch("Photography")} className='hover cat'>Photography</button>
        <button onClick={() => handleSearch("Publishing")} className='hover cat'>Publishing</button>
        <button onClick={() => handleSearch("Technology")} className='hover cat'>Technology</button>
      </div>

      <div className='flex row-wrap justify-center featured'>
        {featured}
        <div className='flex flex-col padding-lr margin-right-260'>
          <h2 className='title-section padding-bot-20'>RECOMMENDED</h2>
          {recommended}
          <Link onClick={() => handleSearch("ALL_PROJECTS")} className='view-more' to='/'>View more projects</Link>
        </div>
      </div>

      <div className='flex row-wrap justify-center bottom-border padding-bottom-60' >
        {favorites}
      </div>

      {/* <div className='flex row-wrap justify-center'>
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
        </div> */}

      <div className='cat-bot flex row-wrap justify-center'>
        <button onClick={() => handleSearch("Arts")} className='hover cat'>Arts</button>
        <button onClick={() => handleSearch("Design")} className='hover cat'>Design</button>
        <button onClick={() => handleSearch("Film")} className='hover cat'>Film</button>
        <button onClick={() => handleSearch("Games")} className='hover cat'>Games</button>
        <button onClick={() => handleSearch("Music")} className='hover cat'>Music</button>
        <button onClick={() => handleSearch("Photography")} className='hover cat'>Photography</button>
        <button onClick={() => handleSearch("Publishing")} className='hover cat'>Publishing</button>
        <button onClick={() => handleSearch("Technology")} className='hover cat'>Technology</button>
      </div>
    </div >
  );
}
export default SplashComponent;