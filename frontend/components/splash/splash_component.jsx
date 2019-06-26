import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProjects, fetchProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';
import { Recommended, Favorites, Featured } from './recommended';


const msp = (state) => {
  const { projects, users } = state.entities;

  return ({
    projects: projects,
    users: users,
  });
};

const mdp = (dispatch) => {
  return ({
    fetchAllProjects: (searchTerm) => dispatch(fetchAllProjects(searchTerm)),
    fetchProject: (id) => dispatch(fetchProject(id)),
  });
};


class SplashComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getFeatured = this.getFeatured.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAllProjects();
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getFeatured(num = 1) {
    let featured = [];
    let allProjects = Object.values(this.props.projects);
    let i = 0;
    while (i < num) {
      featured.push(allProjects[Math.floor(Math.random() * allProjects.length)]);
      i++;
    }
    return featured;
  }

  handleSubmit(searchTerm) {
    const that = this;
    if (searchTerm === "ALL_PROJECTS") {
      this.props.fetchAllProjects(searchTerm)
        .then(() => {
          that.props.history.push(`/search/all projects`);
          window.scrollTo(0, 0);
        });
    } else {
      this.props.fetchAllProjects(searchTerm)
        .then(() => {
          that.props.history.push(`/search/${searchTerm}`);
          window.scrollTo(0, 0);
        });
    }
  }

  render() {
    const { projects, users } = this.props;

    if (!projects || !users || !this.getFeatured()[0]) {
      return <div>Loading...</div>
    }

    const featured = this.getFeatured().map(project => {
      return (
        <Featured
          key={project.id}
          project={project}
          user={users[project.user_id]}
        />
      );
    })

    const recommended = this.getFeatured(3).map(project => {
      return (
        <Recommended
          numberWithCommas={this.numberWithCommas}
          key={project.id}
          project={project}
          user={users[project.user_id]}
        />
      )
    })

    const favorites = this.getFeatured(4).map((project, idx) => {
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
          <button onClick={() => { this.handleSubmit("Arts") }} className='hover cat'>Arts</button>
          <button onClick={() => { this.handleSubmit("Design") }} className='hover cat'>Design</button>
          <button onClick={() => { this.handleSubmit("Film") }} className='hover cat'>Film</button>
          <button onClick={() => { this.handleSubmit("Games") }} className='hover cat'>Games</button>
          <button onClick={() => { this.handleSubmit("Music") }} className='hover cat'>Music</button>
          <button onClick={() => { this.handleSubmit("Photography") }} className='hover cat'>Photography</button>
          <button onClick={() => { this.handleSubmit("Publishing") }} className='hover cat'>Publishing</button>
          <button onClick={() => { this.handleSubmit("Technology") }} className='hover cat'>Technology</button>
        </div>

        <div className='flex row-wrap justify-center featured'>
          {featured}
          <div className='flex flex-col padding-lr margin-right-260'>
            <h2 className='title-section padding-bot-20'>RECOMMENDED</h2>
            {recommended}
            <Link onClick={() => { this.handleSubmit("ALL_PROJECTS") }} className='view-more' to='/'>View more projects</Link>
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
          <button onClick={() => { this.handleSubmit("Arts") }} className='hover cat'>Arts</button>
          <button onClick={() => { this.handleSubmit("Design") }} className='hover cat'>Design</button>
          <button onClick={() => { this.handleSubmit("Film") }} className='hover cat'>Film</button>
          <button onClick={() => { this.handleSubmit("Games") }} className='hover cat'>Games</button>
          <button onClick={() => { this.handleSubmit("Music") }} className='hover cat'>Music</button>
          <button onClick={() => { this.handleSubmit("Photography") }} className='hover cat'>Photography</button>
          <button onClick={() => { this.handleSubmit("Publishing") }} className='hover cat'>Publishing</button>
          <button onClick={() => { this.handleSubmit("Technology") }} className='hover cat'>Technology</button>
        </div>

      </div >
    );

  }

}


export default connect(msp, mdp)(SplashComponent);