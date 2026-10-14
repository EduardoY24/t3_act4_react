# App de Notas – t3_act4_react

Aplicación para iniciar en **React + Vite** para practicar los conceptos básicos de React: componentes, props, estado (`useState`), eventos, renderizado condicional y listas.

## ¿Qué hace?

- Muestra una lista de notas.
- Permite **agregar** notas nuevas escribiendo en un campo de texto y presionando **Agregar** (no deja agregar notas vacías).
- Permite **eliminar** cualquier nota con su botón **Eliminar**.
- Si no quedan notas, muestra el mensaje *"No hay notas todavía"*.

## Estructura

| Archivo | Qué hace |
|---|---|
| `src/App.jsx` | Componente principal. Define las notas iniciales y los títulos, y se los pasa a `TodoApp` por props. |
| `src/components/TodoApp.jsx` | Guarda las notas y el texto que pongas en el input en el estado, agrega y elimina notas, y renderiza la lista con `.map()`. |
| `src/components/Nota.jsx` | Componente que recibe por props el texto de una nota y la función para eliminarla. |

## Respuestas a las preguntas

**a)

Las props son datos que un componente recibe desde su componente padre, el componente que las recibe solo las lee y no las puede modificar. Mientras que el state son datos que el propio componente guarda y controla y que pueden cambiar con el tiempo por ejemplo, cuando el usuario hace clic o escribe.

**b)

La key le da a cada elemento de la lista un identificador único. Así React puede saber qué elemento se agregó, se eliminó o cambió, y actualizar solo ese en lugar de volver a hacer toda la lista. Si no se usa una key React puede confundir los elementos y mostrar datos equivocados. En mi caso usé el id de cada nota como key: key={nota.id}.

**c)

useState es un hook que le permite a un componente recordar un valor entre los renderizados. Regresa dos cosas que son el valor actual y una función para cambiarlo. Cada vez que se llama a esa función con un nuevo valor React vuelve a pintar el componente con el dato actualizado.
Yo lo usé en TodoApp.jsx dos veces:

```jsx
const [notas, setNotas] = useState(notasApp); // la lista de notas
const [texto, setTexto] = useState("");       // lo que el usuario escribe
```

Cuando el usuario presiona **Agregar**, se llama a `setNotas([...notas, nuevaNota])` y la nota nueva aparece en pantalla. Cuando presiona **Eliminar**, `setNotas` recibe la lista sin esa nota y desaparece.

**GitHub Pages:**
https://eduardoy24.github.io/t3_act4_react/
