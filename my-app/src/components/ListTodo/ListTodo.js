import React , {useState} from 'react'

const ListTodo = ({todo, setTodo}) => {

      const [edit, setEdit] = useState ()
      const [value, setValue] = useState()

      function deleteTodo (id){
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo);
        }

      function editTodo(id,title){
        setEdit(id)
        setValue(title, value)
        }

        return (
        <div>
            {
            todo.map( item => (
                <div key={item.id}>
                    {
                    edit? 
                    <div> 
                        <input/>
                    </div> :
                    <div>{item.title} </div>
                    }
                    
                <button onClick= {() => deleteTodo(item.id)}> Delete </button>
                <button onClick= {() => editTodo(item.id)}> Edit </button>
                </div>
                 )
              )
            }
    </div>
  )
}

export default ListTodo

