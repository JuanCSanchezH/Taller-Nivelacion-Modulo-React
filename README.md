# Taller de Nivelación - Parte 2

## Módulo sobre ReactJS

1. Explicar brevemente el concepto de ReactJS y sus principales características.
2. Definir qué es un componente en ReactJS y mencionar los tipos de componentes que existen.

Respuesta a las preguntas 1 y 2.

Es una biblioteca de Javascript que es principalmente utilizada para construir interfaces de usuario (UI) Interactivas y reutilizables. Es enfocada al contenido que se quiere mostrar, lo que la hace una herramienta cuyo primer principio es que es declarativa. Fue desarrollada por Facebook y tomó un gran reconocimiento gracias a su eficiencia y flexibilidad a la hora de construir una aplicación o página web. En gran parte, la organización de la interfaz, eficiencia y dinamismo se debe a que la mínima unidad básica de ReactJS que son los componentes; estos encapsulan una parte o zona específica de la interfaz en cuanto a diseño y funcionalidad. Cada componente puede poseer diferentes estados tanto propios como globales, pero el componente siempre estará dirigido a un contenido específico. 

Teniendo en cuenta lo anterior, ReactJS y su estructuración en componentes facilita en gran medida la construcción, el dinamismo, la eficiencia y el mantenimiento de las aplicaciones, ya que, al momento de dividir el desarrollo en pequeños componentes con funciones específicas, puede hacer la estructura más entendible, legible y será más fácil de encontrar posibles errores. Además, a la hora de actualizar un único componente, React solo renderizará ese componente sin necesidad de actualizar toda la página, permitiendo así el desarrollo de SPAs (Single Page Applications). Los componentes manejan entradas arbitrarias para recibir la información sea dinámica o estática en forma de atributos.

Existen dos tipos de componentes en ReactJS:

-	Componentes de clase:

Son definidas como clases de Javascript que son extendidas como un “React.Component”. Estos componentes tienen un estado interno que ayuda a gestionar el intercambio de información en las diferentes etapas de su ciclo de vida. Sus elementos clave son:
Constructor: Se utiliza para inicializar el estado del componente y establecer cualquier configuración inicial necesaria.

Métodos del ciclo de vida: componentDidMount, componentDidUpdate y componentWillUnmount; cada uno se utiliza para ejecutar código en diferentes etapas del ciclo de vida del componente.

Render: El método render es obligatorio y se encarga de devolver la representación del componente en el DOM Virtual dentro de la raíz.

-	Componentes funcionales: son definidos como funciones de Javascript que no contienen un estado interno ni métodos del ciclo de vida. Estos componentes tienen una sintaxis más concisa y fácil de entender al no manejar un ciclo de vida. Sin embargo, en su estructura puede haber algunos elementos cuya función se asemeje a los elementos clave de los componentes de clase, tales como los hooks y el return de la función.

3. ¿Qué es el Virtual DOM y cuál es su función en ReactJS?

Es una técnica de ReactJS para mejorar el rendimiento y la eficiencia a la hora de manipular el DOM del navegador, pues manipularlo directamente puede ser costoso en términos de rendimiento, especialmente en aplicaciones con actualizaciones frecuentes.
El DOM virtual es una representación en memoria de la estructura del DOM modificada cuando surgen cambios en algún componente, sea en algún estado o las props. ReactJS compara la nueva representación virtual con la anterior sin modificar para saber que cambios específicos retornar al DOM real del navegador. Luego de comparar, genera los parches necesarios para igualar el DOM real al DOM virtual. Finalmente, React aplica esos parches al DOM del navegador, actualizando únicamente los componentes que fueron modificados.

4. ¿Qué es JSX en ReactJS y porqué es importante?

Es una extensión de Javascript utilizada en ReactJS para programar los componentes de manera más sencilla y legible, debido a que su sintaxis se asemeja al lenguaje de marcado de hipertexto, con el cual, hay mucha familiaridad. Esta sintaxis es muy intuitiva y declarativa. Además, permite la interacción entre lenguaje Javascript y etiquetas o selectores HTML en una misma línea de código, facilitando el dinamismo de la información. Facilita la detección de errores por sintaxis o estructura.
Este lenguaje es transformado a código Javascript mediante Babel, que es una librería incluida en cualquier proyecto React/Vite para la transpilar código (generar el código de un lenguaje de programación en otro lenguaje), y así, poder ser leído de manera eficiente por el navegador.

5. ¿Qué es un Hook en ReactJS y cuál es su propósito?
6. Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se utilizan.

Respuesta a las preguntas 5 y 6.

Un hook es ReactJS es una funcionalidad que permite usar y manipular los estados de manera entendible en los componentes de función. Se introdujeron para permitir que los componentes de función manejen el estado local, el ciclo de vida y otras características que solo estaban disponibles para componentes de clase. Los hooks por lo general tienen sus propios métodos y el estado específico a modificar.

Tipos de hooks:

-	Hook de estado (useState): devuelve el valor de estado actual y una función que le permite actualizarlo. Puedes llamar a esta función desde un controlador de eventos o desde otro lugar. Es similar a this.setState en una clase, excepto que no combina el estado antiguo y el nuevo. El único argumento para useState es el estado inicial.

-	Hook de efecto (useEffect): es usado para manipular las operaciones o efectos secundarios sobre los componentes; tales como recuperación de datos, operaciones asincrónicas, suscripciones… El Hook de efecto, useEffect, agrega la capacidad de realizar efectos secundarios desde un componente de función. Tiene el mismo propósito que componentDidMount, componentDidUpdate y componentWillUnmount en los componentes de clase de React, pero unificadas en una sola API.

-	Hook de rendimiento (useMemo): es una herramienta que nos permite memorizar (almacenar en caché) el valor de una función determinada. Esto significa que, si los valores de las dependencias de la función no cambian, entonces el valor memorizado se devuelve en lugar de volver a ejecutar la función.

Fuente: https://es.legacy.reactjs.org/docs/hooks-overview.html

7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?

Algunas de las reglas de uso de los hooks, son:

-	Los hooks solo deben ser utilizados en componentes de función de React y no en componentes de clase.

-	Deben ser utilizados en el nivel superior de un componente de función, y no dentro de bucles, condiciones u otras funciones anidadas.

-	Son llamados directamente desde el componente principal de React y no desde funciones regulares o callbacks.

-	Si se necesita utilizar un hook solo en ciertas condiciones, se debe colocar la lógica condicional dentro del propio hook.

-	Es posible crear hooks personalizados para encapsular la lógica reutilizable.

8. Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus principales componentes y Hooks.

React Router DOM es una biblioteca de enrutamiento para aplicaciones que facilita la navegación y el manejo de rutas/vistas en aplicaciones de una sola página (SPA). Es utilizada para manejar una navegación declarativa, de tal manera que no es necesario recargar la página para observar la actualización de un componente o la redirección de otro. Además, proporciona un control en el historial del navegador para que la navegación hacia adelante y hacia atrás, funcione bien en una SPA.

Algunos de los componentes y hooks principales podrían ser: BrowserRouter, Routes, Route, Link, Outllet, useNavigate, useParams.

9. Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router DOM.

10. ¿Cómo se definen rutas en React Router DOM?

Respuesta a las preguntas 9 y 10.

Luego de la instalación de React Router DOM, se procede a desarrollar la configuración de las rutas de esta manera:

````
```javascript
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="home" element={<Home />}/>
          <Route index element={<Home />}/>
          <Route path="about" component={<About />}/>
          <Route path="contact" component={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}
```
````


En este caso, se le da la funcionalidad de navegación a la aplicación y se define la cantidad de rutas a usar. También se implementa una ruta general con el path “/” para que se aplique en todas las rutas sin necesidad de agregarle a cada ruta el símbolo /.

````
```javascript
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
```
````

Utiliza el componente Link para crear enlaces entre las diferentes rutas. Este componente evita la recarga de la página completa y permite la navegación suave dentro de la SPA.

11.	Describir cómo crear un proyecto ReactJS con Vite

-	Teniendo Node.js instalado en el sistema, se procede con la creación del proyecto con el siguiente comando:

npm create vite@latest first-app-react -- --template react
Donde “first-app-react” será el nombre del proyecto.

-	Se ingresa al directorio del proyecto recién creado: 
cd first-app-react

-	Se ejecuta el siguiente comando para instalar las dependencias del proyecto:
npm install

-	Se lanza el servidor de desarrollo ejecutando:

npm run dev

Vite genera una estructura de proyecto limpia y modularizada. La carpeta base que se crea es: src/ el cual contiene el código fuente de la aplicación. Allí debería comenzarse a construir la aplicación distribuida en carpetas y archivos.

12.	Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la nube gratuito de su elección

-	Crear un nuevo proyecto

npm init -y
npm install json-server

-	Crear un archivo src/data/db.json

-	Crear un archivo index.js en src y pegar el siguiente codigo en el index.js:

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/data/db.json`);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

server.use(router);
server.use(middlewares);

server.listen(port, () => {
  console.log("JSON Server is running");
});

-	Cambiar en el package.json la ruta del index.js: src/index.js

-	Crear el contenido de la base de datos en el archivo db.json

-	Crear el git ignore y excluir node_modules

-	Agregar en el script del package.json una propiedad de start, que contenga como valor: node src/index.js

-	Subir este proyecto a un repositorio en GitHub y desplegarlo en cualquier servicio de nube gratuito para crear fake API Rest.

Ejemplo: 
En render: Iniciar sesión con la cuenta de GitHub ->New->Web Service->Next->Escoger el repositorio correspondiente->Renombrar la configuración->Connect

13.	Describir cómo desplegar una aplicación en cualquier Hosting de su elección.

GitHub Pages:

-	Generar una versión de producción ejecutando npm run build en el proyecto React.

-	Subir el código a un repositorio de GitHub.

-	En el proyecto, instalar la dependencia gh-pages que simplifica el proceso de despliegue:

npm install gh-pages --save-dev

-	Agregar los siguientes scripts al archivo package.json:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

-	Ejecutar el siguiente comando para desplegar tu aplicación en GitHub Pages:
npm run deploy.

-	Esperar a que la aplicación esté disponible en el repositorio.
