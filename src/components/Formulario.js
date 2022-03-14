import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ agregarTodo }) => {

    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        prioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState)

    const { nombre, descripcion, estado, prioridad } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nombre.trim()){
            e.target[0].focus();
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error'
            })
            return;
        }
        if(!descripcion.trim()){
            e.target[1].focus();
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripcion en blanco',
                icon: 'error'
            });
            return;  
        }

        Swal.fire({
            title: 'Éxito!',
            text: 'Tarea agregada',
            icon: 'success'
        });

        agregarTodo({
            nombre: nombre, 
            descripcion: descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad: prioridad,
            id: Date.now()
        });

        reset();
    };

    return (
        <>
            <h3>Agregar TODO</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="Ingrese todo nombre"
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea 
                    className="form-control mb-2"
                    placeholder="descripcion de la tarea"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select 
                    name="estado" 
                    className="form-control mb-2"
                    value={estado}
                    onChange={handleChange}
                >
                    <option value="pendiente">pendiente</option>
                    <option value="completado">completado</option>
                </select>
                <div className="form-check">
                    <input 
                        className="form-check-input mb-2" 
                        type="checkbox" 
                        name="prioridad"
                        checked={prioridad} 
                        id="flexCheckDefault" 
                        onChange={handleChange}
                    />

                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault"
                    >
                        Prioritario
                    </label>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Agregar
                </button>
            </form>
        </>
    );
};

export default Formulario;