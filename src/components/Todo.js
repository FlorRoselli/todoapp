const Todo = ({ todo, eliminarTodo, editarTodo }) => {

    const { id, nombre, descripcion, estado, prioridad } = todo;

    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? 'Finalizado' : 'Pendiente'})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button 
                        className="btn btn-warning me-2"
                        onClick={() => editarTodo(id)}
                    >
                        Editar
                    </button>
                    <button 
                        className="btn btn-danger" 
                        onClick={() => eliminarTodo(id)}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                {prioridad && "Prioritario"}
            </span>        
        </li>
    )
};

export default Todo;