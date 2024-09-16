
// export function CreateTodo(){
//     const [title,setTitle]=useState("");
//     const [description,setDescription]=useState("");
//     return <div>
//         <input type="text" placeholder="title"   onChange={(function(e){
//             const value=e.target.value;
//             setTitle(e.target.value);
//         })}></input>
//         <br></br>
//         <input type="text" placeholder="description"  onChange={(function(e){
//             const value=e.target.value;
//             setDescription(e.target.value);
//         })}></input>
//         <br></br>
//         <button onClick={()=>{
//               fetch("http://localhost:3009/todos",{
//                 method:"post",
//                 body:JSON.stringify({
//                     title:"title",
//                     description:"description "
//                 }),
//                 headers:{
//                     "Content-type":"application/json"
//                 }
//               })
//               .then(async function(res){
//                  const json=await res.json();
//                   alert("to do added");
//               })
//         }}    >Add todo</button>
//         <br></br>
//     </div>
// }

import React, { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = async () => {
        try {
            const response = await fetch("http://localhost:3009/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            alert("Todo added");
        } catch (error) {
            console.error("Error adding todo:", error);
            alert("Failed to add todo");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button onClick={handleAddTodo}>Add Todo</button>
            <br />
        </div>
    );
}
