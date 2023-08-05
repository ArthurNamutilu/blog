const Home = () => {
    const handleClick = () => {
        console.log('Hi Naomie');
    }
    const handleClickAgain = (name) => {
        console.log(`Hi again ${name}`);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Here</button>
            <button onClick={ () => handleClickAgain('Arthur') }>Click again</button>
        </div>
     );
}
 
export default Home;