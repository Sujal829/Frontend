import React, { useState } from "react";
import { useApi } from "../hooks/useApi";
// import ApiContext from '../context/ApiContext'

function CreatePost() {
  // const {data, loading, error, createPost} = useContext(ApiContext);
  const { createPost, error } = useApi();
  const defaultValues = {
    title: "",
    body: "",
  };
  const [state, setState] = useState(defaultValues);

  const handleChange = ({ target }) =>
    setState({ ...state, [target.name]: target.value });

  const handleCreatPost = () => {
    if (!state.title && !state.body) return;
    createPost({ ...state, userId: 1 });
    setState(defaultValues);
  };

  return (
    <div>
      <input
        name="title"
        value={state.title}
        onChange={handleChange}
        placeholder="Enter post title"
      />
      <input
        name="body"
        value={state.body}
        onChange={handleChange}
        placeholder="Enter post body"
      />
      <button onClick={handleCreatPost}>Add new post</button>
      {error && <p style={{color: 'red', fontWeight: 600}}>Error: {error}</p>}
    </div>
  );
}

export default CreatePost;
