import { useState } from 'react';

const Home = () => {
    const [name, setName]= useState('Fredgg');
    const handleClick = () => {
        setName('Namutilu');
    }
    
    return ( 
        <div className="home">
            { name }
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Here</button>
        </div>
     );
}
 
export default Home;