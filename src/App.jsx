import './App.css';
import TodoApp from './components/TodoApp';

//Fragment <> </>

//Pasar Props

function App() {

const notas= [
{id: crypto.randomUUID(),
text: "Soy la nota 1",
},
{id: crypto.randomUUID(),
text: "Soy la nota 2",
}
];

 const titulosApp= {
  tituloApp: "Soy TodoApp",
  subtituloApp: "Soy subtitulo App"
 }

 return (
  <section className='ContainerTodoApp'>
    <TodoApp notasApp={notas} {...titulosApp}></TodoApp>
  </section>
 );
}

export default App;
