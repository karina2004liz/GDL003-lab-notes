# Lab Notes

## Índice

- [Preámbulo](#preámbulo)
- [Resumen del proyecto](#resumen-del-proyecto)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Consideraciones generales](#consideraciones-generales)
- [Hacker Edition](#hacker-edition)
- [Pistas & Tips](#pistas-&-tips)

## Preámbulo

![Shows CRUD functionalities](https://raw.githubusercontent.com/florenciasilva/lab-notes/master/demo-crud.gif?token=AGJBHNTVAQRWOVF2IGMP6FK5NVFAS)


No existe día que no tomemos notas, siempre necesitamos apuntar alguna dirección, número telefónico, algunos notas de alguna reunión, o hasta guardar nuestras URLs favoritas para  poder consultarlas más tarde. Muchas veces para esta actividad utilizamos libretas o agendas que terminan siendo olvidadas, se guardan en algún mensaje de texto o hasta terminando siendo escritas en la palma de nuestra mano.

Hoy en día la mayoría de la población cuenta con algún dispositivo mobile o laptop y además todos nos estamos preocupando por implementar acciones para salvar el medio ambiente, por ello a una Laboratorian se le ocurre la idea de implementar una  web app para tomar notas, que nos permita crearlas, editarlas, eliminarlas y consultarlas en cualquier momento.

Ella esta enamorada de la idea y quiere llevarla acabo, pero no tiene el tiempo necesario para empezar el proyecto ya que planea que sea un proyecto independiente a su trabajo, Por ello esta buscando dentro de la comunidad de Laboratoria para que implementen la idea, por lo cual te pedimos que la ayudes.


## Resumen del Proyecto

Para este proyecto necesitas crear una Web App con `React`, `Firebase` y `react-router`.

Si bien la temática es libre, tendrá que tener ciertas funcionalidades básicas:
* Puedo autenticarme con Correo y/o Google y/o Facebook.
* Puedo cerrar sesión.
* Puedo crear una nueva entrada/post
* Puedo ver mis entradas/posts
* Puedo editar mis entradas/posts
* Puedo borrar mis entradas/posts


Para este proyecto deberemos manejar `vistas`. Esto significa que cada sección tendrá su propia URL, la cual indica que `vista` o `componente` será mostrado en pantalla. Para ello necesitaremos investigar acerca de `react-router` y el concepto de `Single Page Application`.


## Objetivos de Aprendizaje

Este será nuestro primer proyecto utilizando la biblioteca de React. Por ello nos concentraremos en entender las bases de React, como `estado`, `ciclos de vida`, `componentes`, `render` y como mantener sincronizados el estado con la vista de nuestra interfaz.

## Consideraciones Generales

Este proyecto se debe "resolver" de forma individual.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en React.

La aplicación debe ser un Single Page Application.

La aplicación debe hacer uso de npm-scripts y contar con scripts start, test, build y deploy, que se encarguen de arrancar, correr las pruebas, empaquetar y desplegar la aplicación respectivamente.

Implementar test unitarios incluyendo el porcentaje de coverage.

## Hacker Edition

Una vez que hayas terminado las funcionalidades base del proyecto, puedes pasarte a esta sección.

* Si la usuaria empieza a escribir una nota y por alguna razón la pestaña del navegador se cierra, cuando vuelva a abrir esta, la nota debería mostrarse como estaba.
* Puedo ver el número de veces que he editado mi entradas/posts
* Puedo subir imágenes
* Consumo de API/s (Google Maps, Spotify, Pinterest, etc)
* Progressive Web App (PWA)


# Pistas & Tips

* [Reactjs](https://reactjs.org/)
* [create-react-app](https://create-react-app.dev/docs/getting-started)
* [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [deploy con gh-pages](https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a)
* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [What is a Single Page Application](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
