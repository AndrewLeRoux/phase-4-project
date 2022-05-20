import { useState } from "react";
import { useHistory } from "react-router-dom";
import Error from "./Error";


function NewPost({user, tags, onAddPost}) {

  let history = useHistory();


  const [name, setName] = useState("")
  const [image_url, setImageUrl] = useState("")
  const [description, setDescription] = useState("")
  const [tag_id, setTagId] = useState(null)
  const [errors, setErrors] = useState([]);
  

  let tagList = tags.map((tag) =>{
    return <option key = {tag.id} value = {tag_id}>{tag.name}</option>
})

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/posts",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          image_url: image_url,
          description: description,
          user_id: user.id,
          tag_id: tag_id
        }),
        })
        .then((r) => {
          if(r.ok) {
            r.json().then(
              (newPost) => {
                onAddPost(newPost)
                history.push("/my_posts")
              })
          }
          else {
            r.json().then((err) => setErrors(err.errors))
          }
        })
  }

  return (
    <>
    <form className = "form" onSubmit={handleSubmit}>
        <input
            type="text"
            name = "name"
            placeholder="Post Title..."
            onChange={e => setName(e.target.value)}
            value={name}
        />
        <br/>
        <textarea
            type="text"
            name = "image_url"
            placeholder= "image_url..."
            onChange={e => setImageUrl(e.target.value)}
            value={image_url}
        />
        <br/>
        <textarea
            type="text"
            name = "description"
            placeholder= "description..."
            onChange={e => setDescription(e.target.value)}
            value={description}
        />
        <br/>
        <select onChange = {e => setTagId(e.target.selectedIndex)}>
        <option value = "" hidden>Select a Tag...</option>
            {tagList}
        </select>
        <br/>
        <button className="createNewPostButton" type="submit">Create Post</button>
        </form>
        {errors.map(error => {return <Error key = {error}>{error}</Error>})}
        </>
  )
}


export default NewPost;