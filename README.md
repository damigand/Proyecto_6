# Pokemon backend

Este proyecto es un backend de pokémon hecho por [damigand](https://github.com/damigand).
El backend te permite acceder a dos tipos de estructura de datos:

### Objeto Pokemon

Es la estructura para acceder a los pokémon. Cuenta con las siguientes propiedades:

-   `name`: Nombre del pokémon.
-   `level` Nivel del pokémon.
-   `types` Array donde se guarda el tipo o tipos de dicho pokémon.

### Objeto Trainer

Es la estructura para acceder a entrenadores. Cuenta con las siguientes propiedades:

-   `name`: Nombre del entrenador.
-   `age`: Edad del entrenador.
-   `typeSpecialty`: Especialidad de tipo del entrenador. Cada entrenador solo tiene uno.
-   `pokemon`: Array con referencias a objetos **Pokemon** que indican los pokémon del entrenador.

# Endpoints

### Pokemon endpoints

#### `/pokemon` (GET)

Devuelve un objeto `.json` con todos los pokémon en la base de datos.

#### `/pokemon/:id` (GET)

Devuelve un objeto `.json` con el pokémon cuyo `id` es indicado por parámetro.

#### `/pokemon/name/:name` (GET)

Devuelve un objeto `.json` con la información de los pokémon cuyo nombre coincida con el introducido por parámetro. Este endpoint es **case-insensitive.**

### `/pokemon/level/:level` (GET)

Devuelve un objeto `.json` con la información de los pokémon cuyo nivel sea mayor o igual al introducido por parámetro.

### `/pokemon/type/:type` (GET)

Devuelve un objeto `.json` con la información de los pokémon que pertenezcan al tipo indicado por parámetro. Este endpoint es **case-insensitive**.

### `/pokemon/create` (POST)

Permite crear un pokémon en la base de datos, enviando un objeto `.json` en el cuerpo de la petición con la estructura definida en [Pokémon](#Objeto-Pokemon).

### `/pokemon/edit/:id` (PUT)

Permite modificar los datos de un pokémon indicando su `id` por parámetro, aceptando los cambios mediante un objeto `.json` en el cuerpo de la petición. Solo es necesario introducir en el `body` de la petición la información cambiante, no el pokémon entero.

### `/pokemon/delete/:id` (DELETE)

Permite borrar un pokémon indicando su `id` por parámetro. Eliminar un pokémon resultará en su correspondiente eliminación en la propiedad `pokemon` del objeto **Trainer**.

### Trainer endpoints

### `/trainer` (GET)

Devuelve un objeto `.json` con todos los entrenadores y sus respectivos pokémon.

### `/trainer/:id` (GET)

Devuelve un objeto `.json` con los datos del entrenador cuyo `id` es pasado por parámetro.

### `/trainer/name/:name` (GET)

Devuelve un objeto `.json` con la información de los entrenadores cuyo nombre coincida con el pasado por parámetro. Este endpoint es **case-insensitive**.

### `/trainer/age/:age` (GET)

Devuelve un objeto `.json` con la información de los entrenadores cuya edad sea igual o mayor al a introducida por parámetro.

### `/trainer/type/:type` (GET)

Devuelve un objeto `.json` con la información de los entrenadores cuyo `typeSpecialty` sea igual al introducido por parámetro. Este endpoint es **case-insensitive**.

### `/trainer/create` (POST)

Permite crear entrenadores en la base de datos, enviando un objeto `.json` con en el cuerpo de la petición siguiendo la estructura establecida en [Trainer](#Objeto-Trainer)

### `/trainer/edit/:id` (PUT)

Permite modificar los datos de un entrenador cuyo `id` coincida con el introducido por parámetro, enviando un objeto `.json` en el cuerpo de la petición solo con la información cambiante, no el objeto entero.

### `/trainer/addpokemon/:trainerid` (PUT)

Permite añadir un objeto **Pokémon** al array de `pokemon` del entrenador cuyo `id` coincida con el introducido por parámetro. En el cuerpo de la petición se deberá enviar un `.json` con un **array de String** con los `id` de los pokémon que se quieran añadir. Filtra entradas repetidas y es **case-sensitive**.

### `/trainer/deletepokemon/:trainerid` (PUT)

Permite eliminar uno o varios pokémon del array de `pokemon` del entrenador cuyo `id` coincida con el pasado por parámetro. En el cuerpo de la petición deberá ir un `.json` con un **array de String** con los `id` de los pokémon que se quieran eliminar. Esto **no** eliminará el pokémon de la colección de **Pokemon**.

### `/trainer/delete/:id` (DELETE)

Permite eliminar un entrenador cuyo `id` coincida con el introducido por parámetro. Eliminar un entrenador **no** resultará en la eliminación de los objetos **Pokemon** que formen parte de su propiedad `pokemon`.
