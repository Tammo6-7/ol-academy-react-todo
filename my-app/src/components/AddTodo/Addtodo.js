import React, {useState} from 'react';

const AddTodo = ({todo, setTodo}) => {
    const [value, setValue ] = useState ('')

    function saveTodo(){
    setTodo (
      [...todo, {
        id:[],
        title: value,
        status:true,
      }]
    )
    setValue('')
    }


    return (
    <div>
      <input typeof='text' placeholder='Insert Your Task here' value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button onClick={saveTodo}> Add to Task </button>
    </div>
    )
}
export default AddTodo
