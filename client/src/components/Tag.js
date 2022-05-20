import React from "react";
import styled from "styled-components";

function Tag({tag, onTagClick}) {

    function handleTagClick() {
        onTagClick(tag)
    }

    return (
        <div>
            <Button onClick={handleTagClick}>{tag.name}</Button>
        </div>
    )
}

const Button = styled.button`
  cursor: pointer;
  font-size: 16px;
  background-color: green;
  border-radius: 20px;
  padding: 8px 16px;
  margin: 2px;
`;

export default Tag;