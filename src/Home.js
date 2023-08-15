import { useState, useEffect} from 'react';
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
    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newblogs)
    }

    const [name, setName] = useState('Arthur');

useEffect(() => {
    console.log('use effect ran');
},[name])


    return (
        <div className="home">
            < BlogList shared = {blogs} title = { title } handleDelete = {handleDelete}/>
            <button onClick={()=> setName('Programmer')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;