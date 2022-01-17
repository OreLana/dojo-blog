import { useParams } from "react-router";
import useFetch from './useFetch';


const BlogDetails = () => {
    const { id } = useParams();
    const { error, isPending, data: blog } = useFetch('http://localhost:5000/blogs/' + id);

    return ( 
        <div className="blog-details">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails; 