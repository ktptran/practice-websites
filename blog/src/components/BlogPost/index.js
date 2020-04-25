import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
 * @author
 * @function BlogPost
 **/

 const BlogPost = (props) => {
   const [post, setPost] = useState({});
   // https://youtu.be/JE8w1gvn0Y4?t=5099
   useEffect(() => {
     const postId = props.match.params.postId;
     const post = blogPost.data.find(post => post.id == postId);
     setPost(post);
   });

   return (
     <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">Featured Post</span>
          <h1 className="postTitle">Hello</h1>
          <span className="postedBy">posted on July 21, 2016 by Kevin Tran</span>
        </div>

        <div className="postImageContainer">
          <img src={require('../../blogPostImages/memories-from.jpg')} alt="Post image" />
        </div>
        <div className="postContent">
          <h3>Post Title</h3>
          <p>lorem ipsim</p>
        </div>
      </Card>
     </div>
   )
 };

 export default BlogPost;
