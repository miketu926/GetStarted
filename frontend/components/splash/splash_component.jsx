import React from 'react';
import { connect } from 'react-redux';
import { fetchAllProjects, fetchProject } from '../../actions/projects/project_actions';
import { Link } from 'react-router-dom';


const msp = (state) => {
  const projects = state.entities.projects;
  const users = state.entities.users;

  return({
    projects: projects,
    users: users,
  });
};

const mdp = (dispatch) => {
  return({
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

  getFeatured() {
    let featured = null;
    let allProjects = Object.values(this.props.projects);
    if (allProjects.length > 0) {
      featured = allProjects[Math.floor(Math.random() * allProjects.length)];
    }
    return (featured);
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

    const projects = this.props.projects;
    const users = this.props.users;
    if (!projects || !users) {
      return <div>Loading...</div>
    }


    let featuredBox = null;
    if (this.getFeatured()) {
      let featuredProject = this.getFeatured();
      // let featuredUser = this.props.users[featuredProject.user_id];
      featuredBox = (
        <div className='flex flex-col padding-lr featured-border'>
          <h2 className='title-section padding-bot-20'>FEATURED PROJECT</h2>
          <Link to={`/projects/${featuredProject.id}`}>{<img src={featuredProject.photo} width={"630"} height={"360"} />}</Link>
          <Link className='large-title med-desc-width hover-green-title' to={`/projects/${featuredProject.id}`}>{featuredProject.project}</Link>
          <Link className='medium-desc med-desc-width' to={`/projects/${featuredProject.id}`}>{featuredProject.description}</Link>
          <Link className='small-name' to={`/projects/${featuredProject.id}`}>By {this.props.users[featuredProject.user_id].name}</Link>
        </div>
      )
    };

    let recommendedDiv = null;
    let recommendedDiv2 = null;
    let recommendedDiv3 = null;
    let freshFavoriteDiv = null;
    let freshFavoriteDiv2 = null;
    let freshFavoriteDiv3 = null;
    let freshFavoriteDiv4 = null;
    if (this.getFeatured()) {
      let recProject1 = this.getFeatured();
      let recProject2 = this.getFeatured();
      let recProject3 = this.getFeatured();
      let freshProject1 = this.getFeatured();
      let freshProject2 = this.getFeatured();
      let freshProject3 = this.getFeatured();
      let freshProject4 = this.getFeatured();
      recommendedDiv = (
        <div className='flex row-wrap flex-start padding-bot-30 bottom-border'>
          <Link className='padding-r-25' to={`/projects/${recProject1.id}`}>{<img src={recProject1.photo} width={"160"} height={"90"} />}</Link>
          <div className='flex flex-col'>
            <Link className='medium-name-1 hover-green-title' to={`/projects/${recProject1.id}`}>{<h2>{recProject1.project}</h2>}</Link>
            <h2 className='medium-name-2'>{this.numberWithCommas(Math.round((recProject1.funded_amt / recProject1.goal_amt)*100))}% funded</h2>
            <Link className='small-name' to={`/projects/${recProject1.id}`}>{<h2>By {this.props.users[recProject1.user_id].name}</h2>}</Link>
          </div>
        </div>
      );
      recommendedDiv2 = (
        <div className='flex row-wrap flex-start padding-bot-30 bottom-border'>
          <Link className='padding-r-25' to={`/projects/${recProject2.id}`}>{<img src={recProject2.photo} width={"160"} height={"90"} />}</Link>
          <div className='flex flex-col'>
            <Link className='medium-name-1 hover-green-title' to={`/projects/${recProject2.id}`}>{<h2>{recProject2.project}</h2>}</Link>
            <h2 className='medium-name-2'>{this.numberWithCommas(Math.round((recProject2.funded_amt / recProject2.goal_amt) * 100))}% funded</h2>
            <Link className='small-name' to={`/projects/${recProject2.id}`}>{<h2>By {this.props.users[recProject2.user_id].name}</h2>}</Link>
          </div>
        </div>
      );
      recommendedDiv3 = (
        <div className='flex row-wrap flex-start padding-bot-30 bottom-border'>
          <Link className='padding-r-25' to={`/projects/${recProject3.id}`}>{<img src={recProject3.photo} width={"160"} height={"90"} />}</Link>
          <div className='flex flex-col'>
            <Link className='medium-name-1 hover-green-title' to={`/projects/${recProject3.id}`}>{<h2>{recProject3.project}</h2>}</Link>
            <h2 className='medium-name-2'>{this.numberWithCommas(Math.round((recProject3.funded_amt / recProject3.goal_amt) * 100))}% funded</h2>
            <Link className='small-name' to={`/projects/${recProject3.id}`}>{<h2>By {this.props.users[recProject3.user_id].name}</h2>}</Link>
          </div>
        </div>
      );
      freshFavoriteDiv = (
        <div className='flex flex-col padding-lr-17 margin-top-50 fresh-width'>
          <h2 className='title-section fresh-fav'>FRESH FAVORITES</h2>
          <Link to={`/projects/${freshProject1.id}`}>{<img src={freshProject1.photo} width={"285"} height={"165"} />}</Link>
          <Link to={`/projects/${freshProject1.id}`} className='medium-desc hover-green-title' >{<h2>{freshProject1.project}</h2>}</Link>
          <Link to={`/projects/${freshProject1.id}`} className='small-desc' >{<h2>{freshProject1.description}</h2>}</Link>
          <Link to={`/projects/${freshProject1.id}`} className='small-name' >{<h2>By {this.props.users[freshProject1.user_id].name}</h2>}</Link>
        </div>
      );
      freshFavoriteDiv2 = (
        <div className='flex flex-col padding-lr-17 margin-top-65 fresh-width'>
          <Link to={`/projects/${freshProject2.id}`}>{<img src={freshProject2.photo} width={"285"} height={"165"} />}</Link>
          <Link to={`/projects/${freshProject2.id}`} className='medium-desc hover-green-title' >{<h2>{freshProject2.project}</h2>}</Link>
          <Link to={`/projects/${freshProject2.id}`} className='small-desc' >{<h2>{freshProject2.description}</h2>}</Link>
          <Link to={`/projects/${freshProject2.id}`} className='small-name' >{<h2>By {this.props.users[freshProject2.user_id].name}</h2>}</Link>
        </div>
      );
      freshFavoriteDiv3 = (
        <div className='flex flex-col padding-lr-17 margin-top-65 fresh-width'>
          <Link to={`/projects/${freshProject3.id}`}>{<img src={freshProject3.photo} width={"285"} height={"165"} />}</Link>
          <Link to={`/projects/${freshProject3.id}`} className='medium-desc hover-green-title' >{<h2>{freshProject3.project}</h2>}</Link>
          <Link to={`/projects/${freshProject3.id}`} className='small-desc' >{<h2>{freshProject3.description}</h2>}</Link>
          <Link to={`/projects/${freshProject3.id}`} className='small-name' >{<h2>By {this.props.users[freshProject3.user_id].name}</h2>}</Link>
        </div>
      );
      freshFavoriteDiv4 = (
        <div className='flex flex-col padding-lr-17 margin-top-65 fresh-width'>
          <Link to={`/projects/${freshProject4.id}`}>{<img src={freshProject4.photo} width={"285"} height={"165"} />}</Link>
          <Link to={`/projects/${freshProject4.id}`} className='medium-desc hover-green-title' >{<h2>{freshProject4.project}</h2>}</Link>
          <Link to={`/projects/${freshProject4.id}`} className='small-desc' >{<h2>{freshProject4.description}</h2>}</Link>
          <Link to={`/projects/${freshProject4.id}`} className='small-name' >{<h2>By {this.props.users[freshProject4.user_id].name}</h2>}</Link>
        </div>
      );
    };


    return(
      <div className='flex flex-col'>

        <div className='categories-NAV flex row-wrap justify-center'>
          <button onClick={ () => {this.handleSubmit("Arts")}} className='hover cat'>Arts</button>
          <button onClick={ () => {this.handleSubmit("Design")}} className='hover cat'>Design</button>
          <button onClick={ () => {this.handleSubmit("Film")}} className='hover cat'>Film</button>
          <button onClick={ () => {this.handleSubmit("Games")}} className='hover cat'>Games</button>
          <button onClick={ () => {this.handleSubmit("Music")}} className='hover cat'>Music</button>
          <button onClick={ () => {this.handleSubmit("Photography")}} className='hover cat'>Photography</button>
          <button onClick={ () => {this.handleSubmit("Publishing")}} className='hover cat'>Publishing</button>
          <button onClick={ () => {this.handleSubmit("Technology")}} className='hover cat'>Technology</button>
        </div>

        <div className='flex row-wrap justify-center featured'>
          {featuredBox}
          <div className='flex flex-col padding-lr margin-right-260'>
            <h2 className='title-section padding-bot-20'>RECOMMENDED</h2>
            {recommendedDiv}
            {recommendedDiv2}
            {recommendedDiv3}
            <Link onClick={() => { this.handleSubmit("ALL_PROJECTS") }} className='view-more' to='/'>View more projects</Link>
          </div>
        </div>

        <div className='flex row-wrap justify-center bottom-border padding-bottom-60' >
          {freshFavoriteDiv}
          {freshFavoriteDiv2}
          {freshFavoriteDiv3}
          {freshFavoriteDiv4}
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

      </div>
    );
    
  }
  
}


export default connect(msp, mdp)(SplashComponent);