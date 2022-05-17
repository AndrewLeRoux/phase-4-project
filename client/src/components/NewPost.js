import { useState } from "react";

function NewPost({user, tags, onAddPost}) {


  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    description: "",
    user_id: user.id,
    tag_id: null
  })

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [name]: value 
    })
}

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/posts",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((newPost) => {
          onAddPost(newPost)
        });
  }

  return (
    <form className = "form" onSubmit={handleSubmit}>
        <input
            type="text"
            name = "name"
            placeholder="Name..."
            onChange={handleChange}
            value={formData.name}
        />
        <br/>
        <input
            type="text"
            name = "image_url"
            placeholder= "image_url..."
            onChange={handleChange}
            value={formData.image_url}
        />
        <br/>
        <button className="createNewPostButton" type="submit">Create Post</button>
        </form>
  )
}


export default NewPost;