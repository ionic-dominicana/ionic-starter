#Contributing
============
Si estás aquí es porque muy posiblemente tienes deseos de contribuir, y ciertamente estamos necesitados de ayuda, así que eres bienvenido.

Seguir esta guía nos indica que respetas el tiempo de los desarrolladores que trabajan activamente en este proyecto, por lo que también respetaremos tus requerimientos y canalizaremos tus pull requests de la mejor forma posible.

## ¿Qué necesitamos?
- Proveer documentación y mejorar la que ya exista. 
- Escribir tutoriales
- Avisar sobre cualquier bug y ayudar con el seguimiento.
- Mejoras para los componentes (código)
- Nuevos componentes (más código)

Todas esas son formas de contribuir con lo que hacemos. Así que si tienes una idea para ayudar a mejorar el proyecto, es bienvenida.

## Cómo hacer un Commit

Si el proyecto al que contribuyes tiene una guía sobre cómo hacer commits, síguela. De lo contrario, dejamos como referencia la [Guía de Estilos de Mensajes de Commit ](https://udacity.github.io/git-styleguide/) que utiliza [Udacity](https://www.udacity.com/).

Ejemplo de mensaje commit:

> feat: Mejoras de desempeño en carga (el mensaje tiene menos de 50 caracteres)
>
> Cuerpo del mensaje para dar un poco más de detalles acerca de
> las mejoras o arreglos. Como se explicita en la guía, los tipos
> de mensajes pueden ser feat, fix, docs, style, refactor, test, chore (ó config).
>
> Como pie de página se pone el número del Issue (sistema de tickets) que se está arreglando 
> y otros Issues que puedan estar relacionados.

Una cosa más sobre los mensajes; siempre escribe tus commits en tiempo presente, es decir, lo que hace el código aplicado (no lo que hacía antes)_Your commit message should describe what the commit, when applied, does to the code – not what you did to the code.

## Cómo hacer un Pull Request

Cada proyecto ha de tener sus propias instrucciones, así que leelas y síguelas.

- Crea un fork personal del proyecto en Github.
- Clona el fork en tu ambiente local. Tu repositorio remoto en Github se llamará `origin`.
- Agrega el repositorio original como un remoto llamado `upstream`.
- Asegurate de hacer mantener tu repositorio local actualizado con el repositorio original.
- Crea un nuevo branch sobre el cual vas a trabajar. Si existe `develop` haz el branch de ahí, sino a partir de `master` o `main`.
- Implementa tu mejora o arreglo.
- Comenta adecuadamente tu código.
- Si el proyecto tiene guía de estilo, síguela (implementa Clean Code)
- Corre los tests, si los hay.
- Escribe nuevos tests para tus mejoras y arregla los que se dañen.
- Agrega o adecúa la documentación según sea necesario.
- Empuja (push) tus cambios desde tu branch a tu fork en Github, el remoto `origin`.
- Desde tu fork abre un pull request en el branch correspondiente. Apunta al branch `develop` del proyecto, si lo hay, sino apunta a  `master` o `main`.
- …
- Si quien mantiene el repo solicita algun cambio, simplemente hazle push a tu branch, ya que el Pull Request se acutlizará automáticamente.
- Una vez que el PR haya sido aprobado y mezclado, podrás halar (hacer pull) los cambios desde `upstream` hacia tu repositorio local y borrar el branch que creaste para trabajar el cambio.


Si tienes alguna sugerencia para esta guía, haznosla saber.

Happy Coding!