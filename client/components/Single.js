import React from 'react';
import {Link } from 'react-router';
import Photo from './Photo'; 


const Single = React.createClass({
    render(){
        //index of the post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId ); 
        const post = this.props.posts[i];
        console.log(i)
        console.log(post);
        //get us the post 
        return(
            <div className="single-photo">
                <h1>
                <Photo i={i} post= {post} {...this.props}/>

                </h1>
            </div>
        )
    }
});


export default Single; 

