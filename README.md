# API RESTE DE PREGUNTAS

```typescript
POST /tasks - Crea una nueva tarea
GET /tasks - Obtiene todas las tareas
GET /tasks/:id - Obtiene una tarea por su ID
PUT /tasks/:id - Actualiza una tarea por su ID
DELETE /tasks/:id - Elimina una tarea por su ID

Estructura del JSON
La Fecha quedo asi ya que es el formato que permitia
al usar la validacion IsDate()

{
  "title": "Tarea 4",
  "description": "Esta es una tarea de ejemplo",
  "dueDate": "2023-04-18T20:30:11.000000Z",
  "completed": true
}


POST /users - Crear un nuevo usuario
GET /users - Obtener todos los usuarios
GET /users/:id -  Obtiene un usuario segun la ID
PUT /users/:id - Actualizar un usuario por su ID
DELETE /users/:id - Elimina un usuario por su ID

Estructura del JSON

{
  "firstName": "Usuario",
  "lastName": "Ejemplo",
  "email": "correo@correo.com",
  "password": "mypassword",
  "role": "user"
}
```
