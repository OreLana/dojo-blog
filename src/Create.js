const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title: </label>
                <input 
                    type="text"
                    required
                />
                <label>Blog title: </label>
                <textarea
                    required
                ></textarea>
                <label>Blog Author: </label>
                <select>
                    <option value="mario">Mario</option>
                    <option value="mario">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form> 
        </div>
     );
}
 
export default Create;