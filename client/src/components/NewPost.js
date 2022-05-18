import { useState } from "react";

function NewPost({user, tags, onAddPost}) {

  const [name, setName] = useState("")
  const [image_url, setImageUrl] = useState("")
  const [description, setDescription] = useState("")
  const [tag_id, setTagId] = useState(null)
  

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
        // .then((r) => r.json())
        // .then((newPost) => {
        //   onAddPost(newPost)
        // });
  }

  return (
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
  )
}


export default NewPost;