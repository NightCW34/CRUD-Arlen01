# API REST DE PREGUNTAS

<img src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*Ij4wyJ4yMq_0Vm_U.png" alt="Postman" width="400" height="150">

```typescript

##PETICIONES POSTMAN TAREAS

POST /tasks - Crea una nueva tarea
GET /tasks - Obtiene todas las tareas
GET /tasks/:id - Obtiene una tarea por su ID
PUT /tasks/:id - Actualiza una tarea por su ID
DELETE /tasks/:id - Elimina una tarea por su ID

##Estructura del JSON

La Fecha quedo asi ya que es el formato que permitia
al usar la validacion IsDate()

{
  "title": "Tarea 4",
  "description": "Esta es una tarea de ejemplo",
  "dueDate": "2023-04-18T20:30:11.000000Z",
  "completed": true
}

##PETICIONES POSTMAN USUARIO

POST /users - Crear un nuevo usuario
GET /users - Obtener todos los usuarios
GET /users/:id -  Obtiene un usuario segun la ID
PUT /users/:id - Actualizar un usuario por su ID
DELETE /users/:id - Elimina un usuario por su ID

##Estructura del JSON

{
  "firstName": "Usuario",
  "lastName": "Ejemplo",
  "email": "correo@correo.com",
  "password": "mypassword",
  "role": "user"
}
```
