import React from 'react';
import './style.css';
import Card from '../UI/Card';

const SideBar = (props) => {
  return(
      <div className="sidebarContainer">
        <Card style={{marginBottom: '20px'}}>
          <div className="cardHeader">
            <span>About Us </span>
            <div className="profileImageContainer">
              <img src="https://yt3.ggpht.com/a/AGF-l796cloK6hIvrinjtJhnxhusyEB0wOdD4h5MNA=s900-c-k-c0xffffffff-no-rj-mo" alt="Pic" />
            </div>
            <div className="cardBody">
              <p className="personalBio">
                My name is Kevin Tran and I am a student in software development in Front end
                development
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="cardHeader">
            <span>Social Network</span>
          </div>
        </Card>
        <Card>
          <div className="cardHeader">
            <span>Recent Posts</span>
          </div>
          <div className="recentPosts">
            <div className="recentPost">
              <h3>Post Title</h3>
              <span>July 21, 2018</span>
            </div>
            <div className="recentPost">
              <h3>Post Title</h3>
              <span>July 21, 2018</span>
            </div>
            <div className="recentPost">
              <h3>Post Title</h3>
              <span>July 21, 2018</span>
            </div>
          </div>
        </Card>
      </div>
  )
};

export default SideBar;
