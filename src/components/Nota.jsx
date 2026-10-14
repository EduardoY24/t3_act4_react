function Nota({ text, onEliminar }) {
  return (
    <li>
      {text}
      <button onClick={onEliminar}>Eliminar</button>
    </li>
  );
}
export default Nota;

