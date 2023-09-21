import { useEffect, useState } from 'react';
import { ITodo, TodoRes } from './model/todo';
import axios from 'axios';

export default function App() {
  const [count, setCount] = useState<number>(0)
  const [todos, setTodo] = useState<ITodo[]>([])
  
  const handleCount: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCount(count + 1)
  }
  
  useEffect(() => {
    axios.get<TodoRes>('https://dummyjson.com/todos')
    .then(data => { 
      return setTodo(data.data.todos) 
    })
  }, [])

  return (
    <>
      <div className="card">
        <button onClick={handleCount}>
          count is {count}
        </button>
      </div>
      <section className='todo-wrapper'>
      {todos?.map((td) => {
        const {todo, completed, id} = td
        return <Todo todo={todo} completed={completed} key={id}></Todo>
      })}
      </section>
    </>
  )
}

// todo를 통쨰로 가져와서 작업도 가능
interface TodoProps {
  todo: string
  completed: boolean
}

function Todo({ todo, completed }: TodoProps) {
  return <>
    <article className='todo-container'>
      <span>{completed ? '🙆' : '🙅'}</span>
      <span>{todo}</span>
    </article>    
  </>  
}