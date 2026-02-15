// export function Todos({todos}){ // here {todos} is the array destructuring.
//     return <div>
//         {todos.map((todo)=>{
//             console.log("inside Todos compnent")
//             return <div>
//                 <h1>{todo.title}</h1>
//                 <h2>{todo.description}</h2>
//                 <button> {todo.completed == true ? "Completed" : "Mark as Completed"}</button>
//             </div>
//         })}
//     </div>
// }

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo, index) => {
        console.log("inside Todos component");
        return (
          <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed === true ? "Completed" : "Mark as Completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}