import fs from 'fs';
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
    console.log(filtered)
}

