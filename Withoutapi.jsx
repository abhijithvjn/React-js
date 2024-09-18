import React from 'react'
import { useState } from 'react'

function Withoutapi() {
  const [list, setList] = useState([
    { id: 1, title: "React List" },
    { id: 2, title: "JS List" },
    { id: 3, title: "HTML List" }
  ]);
  const [post, setPost] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleChange = (event) => {
    setPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newpost = {
      id: list.length + 1,
      title: post,
    };
    setList([newpost, ...list]);
    setPost("");
  };

  const handleEdit = (ID, TITLE) => {
    setEditTitle(TITLE);
    setEditId(ID);
  };

  const handleEditChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleSave = () => {
    setList(list.map(i => (i.id === editId ? { ...i, title: editTitle } : i)));
    setEditId(null); // Reset editId after saving
  };

  const handleDelete = (ID) => {
    setList(list.filter(i => i.id !== ID));
  };

  return (
    <div>
      <h1 className='text-center'>Todo App</h1>
      <form className='d-flex m-5' onSubmit={handleSubmit}>
        <input type="text" className='form-control border-black' placeholder="Enter your post" value={post} onChange={handleChange} />
        <button type="submit" className='btn btn-primary ms-3'>Submit</button>
      </form>
      <ul className='list-group m-5'>
        {list.map(i => (
          <li className='list-group-item border-dark d-flex justify-content-between' key={i.id}>
            {editId === i.id ? (
              <>
                <input type="text" className='form-control' value={editTitle} onChange={handleEditChange} />
                <button className='btn btn-success ms-3' onClick={handleSave}>Save</button>
                <button className='btn btn-secondary ms-2' onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {i.title}
                <div className='btn-group'>
                  <button className='btn btn-primary' onClick={() => handleEdit(i.id, i.title)}>Edit</button>
                  <button className='btn btn-danger' onClick={() => handleDelete(i.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Withoutapi;
