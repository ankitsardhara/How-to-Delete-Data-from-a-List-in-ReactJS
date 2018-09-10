 import React from 'react';
 const TodoItem=(props)=>{
 	return (<li onClick={ ()=>props.clickHandler(props.index)} className={props.detail.completed ? 'completed' : ''} >{props.detail.name}
          &nbsp; &nbsp; &nbsp; &nbsp;<button  onClick={(evt)=>{evt.stopPropagation(); props.deleteTask(props.index)}} >Delete</button>
 		</li>)
 }    

export default TodoItem;