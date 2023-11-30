import React from 'react';

const Post = ({ post }) => {
    return (

        <div className="card" >
            <img src={post.coverImage} alt={post.title} />
            <div className="card-body background2 pt-4 pb-4">
                <h4 className="h4 mb-4 text-white ">{post.title}</h4>
                <p className="font-weight-normal text-white">{post.brief}</p>
            </div>
        </div>
    )
}

export default Post;