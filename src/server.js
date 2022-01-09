import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api";
    this.get("/todos", () =>{
        return {
            "todos": [
                {
                    "id": "1",
                    "title": "Create React App",
                    "done": true
                },
                {
                    "id": "2",
                    "title": "Display ToDo list",
                    "done": true
                },
                {
                    "id": "3",
                    "title": "Modify ToDo item",
                    "done": false
                }
            ],
        }

    })
  },
})