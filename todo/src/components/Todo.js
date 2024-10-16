import React, { useState, useEffect } from 'react'
import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase.config'
import EditTodo from "./EditTodo.js"


const Todo = () => {
	const collectionRef = collection(db, 'todo');
	const [createTodo, setCreateTodo] = useState("")
	const [todos, setTodo] = useState([])

	useEffect(() => {
		const getTodo = async () => {
  		await getDocs(collectionRef).then((todo) => {
    	let todoData = todo.docs.map((doc) => ({ ...doc.data(), id: "4AJucnYYSRkpyB0wfF5P" }))
    	setTodo(todoData)
    	}).catch((err) => {
      	console.log(err);
    	})
  }
getTodo()
}, [])

	const submitTodo = async (e) => {
		e.preventDefault();
		try {
		  await addDoc(collectionRef, {
			todo: createTodo,
			isChecked: false,
			timestamp: serverTimestamp()
		  })
		  window.location.reload();
		} catch (err) {
		  console.log(err);
		}
	  }

return (
<>
 <div className="container">
	<div className="row">
		<div className="col-md-12">
			<div className="card card-white">
				<div className="card-body">
					<button
						data-bs-toggle="modal"
						data-bs-target="#addModal"
						type="button"
						className="btn btn-info">Add Todo
					</button>


		{todos.map(({ todo, id }) =>
  				<div className="todo-list" key={id}>
    				<div className="todo-item">
      				<hr />
      				<span>
        				<div className="checker" >
          				<span className="" >
            				<input
              				type="checkbox"
            				/>
          				</span>
        				</div>
        				&nbsp;{todo}<br />
        				<i>10/11/2022</i>
      				</span>
      				<span className=" float-end mx-3">
        				<EditTodo /></span>
    				<button
      				type="button"
      				className="btn btn-danger float-end">Delete
    				</button>
    				</div>
  				</div>
		)}
					</div>
				</div>
			</div>
		</div>
	</div>

	{/* Modal */}
	<div
	 className="modal fade"
	 id="addModal"
	 tabIndex="-1"
	 aria-labelledby="addModalLabel"
	 aria-hidden="true">
	<div className="modal-dialog">
	<form className="d-flex" onSubmit={submitTodo}>
		<div className="modal-content">
			<div className="modal-header">
	<h5
	 className="modal-title"
	 id="addModalLabel">
	 Add Todo
	</h5>
	<button
		 type="button"
		 className="btn-close"
		 data-bs-dismiss="modal"
		 aria-label="Close">
	</button>
	</div>
	<div className="modal-body">
		<input
			type="text"
			className="form-control"
			placeholder="Descrição da tarefa"
			onChange={(e) => setCreateTodo(e.target.value)}
		/>
	</div>
	<div className="modal-footer">
	<button
		className="btn btn-secondary"
		data-bs-dismiss="modal">Close
	</button>

	<button className="btn btn-primary">Create Todo</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</>
	)
}
export default Todo