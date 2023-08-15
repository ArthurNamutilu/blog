import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'The River and The Source', body: 'Lorem ipsum...', author: 'Magret Ogolla', id: 1},
        {title: 'The Caucasian Chalk Circle', body: 'Lorem ipsum...', author: 'Bertolt Brecht', id: 2},
        {title: 'The Grapes of Wrath', body: 'Lorem ipsum...', author: 'John Steinbeck', id: 3},
        {title: 'The Pearl', body: 'Lorem ipsum...', author: 'John Steinbeck', id: 4}
    ]);
const title = "All blogs";
const johns = "John Steinbeck blogs";
    return (
        <div className="home">
            < BlogList shared = {blogs} title = { title }/>
            < BlogList shared = {blogs.filter((blog) => blog.author === 'John Steinbeck')} title = { johns }/>
        </div>
    );
}
 
export default Home;