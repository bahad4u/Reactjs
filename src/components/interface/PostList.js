import React from 'react';
import PostData from '../data/posts.json'

function PostList(){
  return (
    <div>
     <h1>hello world</h1>
	 {PostData.map((postDetails,index)=>{
		 return  <div>
				 <h1>{postDetails.id}</h1>
				 <h1>{postDetails.title}</h1>
				 <h4>{postDetails.content}</h4>
				 </div>
	 })}
    </div>
  );
}

export default PostList;
