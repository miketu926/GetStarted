import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';

function ProjectShowComponent(props) {
  const project = useSelector((state) => {
    return state.entities.projects[props.match.params.projectId];
  });

  const user = useSelector(state => {
    return state.entities.users[project.user_id];
  });

  const currentUserId = useSelector(state => {
    return state.session.currentUserId;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleRemove = (e) => {
    e.preventDefault();
    deleteProject(project.id)(dispatch).then(() => props.history.push('/'));
  };

  const completionDate = (project_duration) => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + project_duration);

    let mm = targetDate.getMonth() + 1;
    let dd = targetDate.getDate();
    let yyyy = targetDate.getFullYear();

    return mm + "/" + dd + "/" + yyyy;
  };

  if (!project || !user) {
    return <div>Loading...</div>
  };

  return (
    <div className='main-background'>
      <div className='flex flex-col'>
        <div className='flex row-wrap justify-center proj-mt-50'>
          <h2 className='profile'>By {user.name}</h2>
          <div className='flex flex-col title-spacing'>
            <h2 className='proj-title'>{project.project}</h2>
            <h2 className='proj-desc'>{project.description}</h2>
          </div>
        </div>
        <div className='flex row-wrap justify-center'>
          <div className='flex flex-col large-piece'>
            <img src={project.photo} width={"815"} height={"455"} />
            <h2 className='details-smaller line-h-60'>{project.category} | {project.location}</h2>
          </div>
          <div className='flex flex-col detail-bar'>
            <progress className='progress-bar' max="1" value={project.funded_amt / project.goal_amt}></progress>
            <h2 className='green-funded-amt'>${numberWithCommas(project.funded_amt)}</h2>
            <h2 className='details-small'>{`pledged of $${numberWithCommas(project.goal_amt)} goal`}</h2>
            <h2 className='black-funded-amt'>187</h2>
            <h2 className='details-small'>backers</h2>
            <h2 className='black-funded-amt'>{numberWithCommas(project.duration_days)}</h2>
            <h2 className='details-small'>days to go</h2>
            <button className='back-this-project'>Back this project</button>
            <h2 className='details-smaller'>This project will only be funded if it reaches its goal by {completionDate(project.duration_days)} 12:01 AM EST.</h2>
          </div>
        </div>

        <div className='cat-project flex row-wrap justify-center'>
          {/* <button className='hover cat-proj'>Campaign</button>
          <button className='hover cat-proj'>FAQ</button> */}
        </div>
      </div>

      <div className='flex flex-col detail-box'>
        <div className="flex row-wrap justify-center">
          <div className='flex flex-col left-detail width-650'>
            <h2 className='about'>About</h2>
            <h3 className='about-deets'>{project.description}</h3>
          </div>
          <div className='flex flex-col right-detail width-350'>
            <h2 className='about'>Support</h2>
            <h2 className='about-deets'>MAKE A PLEDGE W/O A REWARD</h2>
            <h2 className='about-deets'>REWARD TIER 1</h2>
            <h2 className='about-deets'>REWARD TIER 2</h2>
            <h2 className='about-deets'>REWARD TIER 3</h2>
          </div>
        </div>
      </div>

      {project.user_id === currentUserId ?
        <div className='flex flex-col'>
          <button className='delete-project' onClick={(e) => handleRemove(e)}>Remove Project</button>
        </div> : null}

    </div>
  )
}
export default ProjectShowComponent;