# Calculadora web

Vamos a usar las funciones de prompt de los navegadores para darle más vida a la calculadora.
Para ello, cada vez que queramos obtener datos de los usuarios a través de un campo de búsqueda escribiremos:

```javascript
var miVariable=prompt('Mi pregunta');
```

Para mostrarle información al usuario tendríamos que escribir:

```javascript
alert('Mi texto para el usuario');
```

Como estamos usando funciones del navegador no vamos a poder probar el código directamente desde el terminal con node. Para esto hay que crear un fichero index.html como el que está en este directorio.

# Ejercicios

1. Pediremos dos números al usuario y le daremos como resultado su suma

2. Le preguntaremos al usuario qué quiere hacer y en función de la respuesta ejecutaremos la acción correspondiente

**Nota**: Presta atención a cómo se reciben los datos.
https://www.w3schools.com/js/js_type_conversion.asp

