const Home = () => {
    const handleClick = () => {
        console.log('Hi Naomie');
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick()}>Click Here</button>
        </div>
     );
}
 
export default Home;