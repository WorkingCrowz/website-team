import React from 'react'
import Post from './Post';

export default class Blog extends React.Component {

    state = {
        posts: []
    };

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = async () => {
        const query = `
    {
      user(username: "TeamAviators") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        const ApiResponse = await response.json();
        this.setState({ posts: ApiResponse.data.user.publication.posts });

        console.log(ApiResponse.data.user.publication.posts);
    };

    render() {
        return (
            <div>
                <div className="spon-cont">
                    <div class="container container-fluid pb-2 mt-5 " >

                        <h3 className="display-4 textbold text-white text-center pb-4">OUR BLOG</h3>
                        {this.state.posts.map((post, index) => (
                            <a key={index} target="_blank"
                                href={`https://teamaviatorsinternational.hashnode.dev/${post.slug}`} >
                                <Post post={post} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
