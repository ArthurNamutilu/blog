import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'The River and The Source', body: 'Lorem ipsum...', author: 'Magret Ogolla', id: 1},
        {title: 'The Caucasian Chalk Circle', body: 'Lorem ipsum...', author: 'Bertolt Brecht', id: 2},
        {title: 'The Pearl', body: 'Lorem ipsum...', author: 'John Steinbeck', id: 3}
    ]);    
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                </div>
            )
            )}
        </div>
    );
}
 
export default Home;