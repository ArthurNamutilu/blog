const BlogList = ({shared, title, handleDelete}) => {  // props object
    return ( 
        <div className="bloglist">
            <h2>{ title }</h2>
            {shared.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={ () => handleDelete(blog.id)}>delete blog</button>
                </div>
            )
            )}
        </div>
     );
}
 
export default BlogList;