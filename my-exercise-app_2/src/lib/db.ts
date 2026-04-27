import fs from 'fs';

const DB_PATH = "/data/todo.json";

export function readTodos() {
    const file = fs.readFileSync(process.cwd() + DB_PATH, 'utf-8');
    const data = JSON.parse(file);

    return data.todos
}

