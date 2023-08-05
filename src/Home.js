import { useState } from 'react';

const Home = () => {
    const [name, setName]= useState('Kenya');
    const [age, setAge] = useState(56);

    const handleClick = () => {
        setName('Arthur');
        setAge(23);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old.</p>
            <button onClick={handleClick}>Click Here</button>
        </div>
     );
}
 
export default Home;