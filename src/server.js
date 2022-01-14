import { createServer, Model } from "miragejs"

createServer({
    models: {
        todo: Model,
      },

  routes() {
    this.namespace = "api";
    this.get("/todos", (schema, request) =>{
        return schema.todos.all() 
    })

    this.get("/todos/:id", (schema, request) => {
        let id = request.params.id
      
        return schema.todos.find(id)
    })

    this.post("/todos", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.todos.create(attrs)
    })

    
  },

  seeds(server){
      server.create("todo", {"id": "1","title": "Create React App", "description": "This step does the set of your React App", "done": false})
      server.create("todo", {"id": "2","title": "Display ToDo list", "description": "View all todos in the database", "done": false})
      server.create("todo", {"id": "3","title": "Modify ToDo item", "description": "We can change the title and description of our todo", "done": false})
  },
})
