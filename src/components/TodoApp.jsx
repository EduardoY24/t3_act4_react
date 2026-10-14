import { useState } from 'react';
import Nota from './Nota';

function TodoApp({ notasApp, tituloApp, subtituloApp }) {
  const [notas, setNotas] = useState(notasApp);
  const [texto, setTexto] = useState("");

  const agregarNota = () => {
    if (texto.trim() === "") return; // para no agregar notas vacías

    const nuevaNota = { id: crypto.randomUUID(), text: texto };
    setNotas([...notas, nuevaNota]); // copia las notas anteriores junto con la nueva
    setTexto("");                    // limpia el input
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id));
  };

  return (
    <>
      <h1>{tituloApp}</h1>
      <h2>{subtituloApp}</h2>

      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una nota..."
      />
      <button onClick={agregarNota}>Agregar</button>

      <ul>
        {notas.map(nota => (
          <Nota
            key={nota.id}
            text={nota.text}
            onEliminar={() => eliminarNota(nota.id)}
          />
        ))}
      </ul>

      {notas.length === 0 && <p>No hay notas todavía</p>}
    </>
  );
}

export default TodoApp;

// props son las propiedades que se le pasan a un componente; es un objeto que contiene todas las propiedades que recibe.
