import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/session/session_actions';
import { Link } from 'react-router-dom';
import ExploreNavComponent from './exploreNAV_component';
import SearchBar from '../search/search_bar';
import { fetchAllProjects } from '../../actions/projects/project_actions';

// const msp = ({ session, entities }) => {
//   // set the session to null if it doesn't exist, otherwise will find ID
//   const sessionUserId = session.currentUserId || {};

//   return ({
//     currentUser: entities.users[sessionUserId],
//   });
// };

// const mdp = (dispatch) => {
//   return ({
//     fetchAllProjects: (searchTerm) => dispatch(fetchAllProjects(searchTerm)),
//     // logout: () => dispatch(logout()),
//   });
// };

function HeaderComponent() {
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();

  const currentUser = useSelector(state => {
    const { session, entities } = state;
    const sessionUserId = session.currentUserId || {};
    return entities.users[sessionUserId];
  });


  if (search) {
    return <SearchBar setSearch={setSearch} />
  } else {
    return (
      <div>
        <header className='nav-bar'>
          <nav className='nav-left'>
            <ExploreNavComponent
              fetchAllProjects={() => fetchAllProjects()(dispatch)}
            />
            <div className='start-project-nav nav-font'>
              <button className='hover-header'><Link to='/projects/new'>Start a project</Link></button>
            </div>
          </nav>
          <Link className='logo-nav' to='/'>GETSTARTED</Link>
          <nav className='nav-right'>
            <div className='search-nav nav-font'>
              <button className='hover-header' onClick={() => setSearch(true)}>Search <i className="fas fa-search header-search"></i></button>
            </div>
            {currentUser ?
              <div className='login-nav nav-font'>
                <button className='hover-header nav-font' onClick={() => logout()(dispatch)}>Logout</button>
              </div> :
              <div className='login-nav nav-font'>
                <button><Link className='hover-header' to='/login'>Sign in</Link></button>
              </div>}
          </nav>
        </header>
      </div>
    )
  }
};

// export default connect(msp, mdp)(HeaderComponent);
export default HeaderComponent