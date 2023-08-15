const Newblog = () => {

    const handleClick = (name)=>{
        console.log(`Hello ${name}`)
    }


    return ( 
        <div className="newblog">
            <nav className="newlog">
            <h1 style={{
                color: "white",
                backgroundColor : "#f1356d"
            }}
            >Add new blogs</h1>
        </nav>
        <h1> New section</h1>
        <button
        onClick={() => {handleClick('Jiji')}}
        >Add blog</button>
        </div>
     );
}
 
export default Newblog;