import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'The River and The Source', body: 'Lorem ipsum...', author: 'Magret Ogolla', id: 1},
        {title: 'The Caucasian Chalk Circle', body: 'Lorem ipsum...', author: 'Bertolt Brecht', id: 2},
        {title: 'The Pearl', body: 'Lorem ipsum...', author: 'John Steinbeck', id: 3}
    ]);
const title = "All Blogs";
    return (
        <div className="home">
            < BlogList shared = {blogs} title = { title }/>
        </div>
    );
}
 
export default Home;