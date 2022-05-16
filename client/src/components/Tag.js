import React from "react";

function Tag({tag, onTagClick}) {

    function handleTagClick() {
        onTagClick(tag)
    }

    return (
        <div>
            <button onClick={handleTagClick}>{tag.name}</button>
        </div>
    )
}

export default Tag;