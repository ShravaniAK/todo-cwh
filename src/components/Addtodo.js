import React, { useState } from 'react'

export const Addtodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit=(e)=>{
e.preventDefault();
if(!title || !desc){
    alert("cannot be blank");
}

props.addtodo(title,desc);
    }
  return (
    <div className='container'>
        <h1>Add todo</h1>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label for="title" className="form-label">todo title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label for="desc" className="form-label">Description</label>
    <input type="text" className="form-control" onChange={(e)=>{setDesc(e.target.value)}} value={desc} id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}
