import fs, { read, write } from 'fs';
import { Todo } from '../../types/todo';
import {v4 as uuidV4} from "uuid"

const DB_PATH = "/data/todo.json";


// ========== Helpers ============ 
function readDB() {
    const file = fs.readFileSync(process.cwd() + DB_PATH, 'utf-8');
    const data = JSON.parse(file);
    
    return data.todos;
}

function writeDB(todos: Todo[]) : void {
    fs.writeFileSync(process.cwd() + DB_PATH, JSON.stringify({todos}, null, 2)  ,'utf-8')
}

export function getTodos() {
    return readDB();
}

export function createTodo(title: string): Todo {
    const todos = readDB();
    const newTodo: Todo = {
        id: uuidV4(),
        title: title,
        completed: false,
        createdAt: new Date().toISOString(),
    }
    todos.push(newTodo);
    writeDB(todos);
    return newTodo;
}

export function deleteById(id:string):void {
    const todos = readDB()
    const filtered = todos.filter((todo:Todo) => todo.id !== id);

    if (filtered.length === todos.length) throw new Error(`Todo ${id} not found`);
    writeDB(filtered);
}



export function updateById(id: string, data: Partial<Pick<Todo, "title" | "completed">>) : Todo {
    const todos = readDB();
    const index = todos.findIndex((todo: Todo) => todo.id === id)
    if (index === -1) throw new Error(`Todo with ${id} cannot be found.`)
    
    if (data.title !== undefined) todos[index].title = data.title;
    if (data.completed !== undefined) todos[index].completed = data.completed;
    
    writeDB(todos);
    return todos[index];
}


// export function updateCompleteById(id: string, completed: boolean) : Todo {
//     const todos = readDB();
//     const index = todos.findIndex((todo: Todo) => todo.id === id);
//     if (index === -1) throw new Error(`Todo with ${id} cannot be found.`)
//     todos[index].completed = completed;
//     writeDB(todos);
//     return todos[index];
// }

// export function editById(id: string, title: string): Todo {
//     const todos = readDB();
//     const index = todos.findIndex((todo: Todo) => todo.id === id);
//     if (index === -1) throw new Error(`Todo with ${id} cannot be found.`)
//     todos[index].title = title;
//     writeDB(todos);
//     return todos[index];
// }
