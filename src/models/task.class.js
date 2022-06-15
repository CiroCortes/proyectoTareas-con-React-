import { LEVELS } from "./levels.enum";

export class Task {
    //aqui definimos la tarea en si, con sus configuraciones//
    name = '';
    description='';
    completed = false;
    level= LEVELS.NORMAL;

    constructor(name, description,completed, level ){
        this.name= name;
        this.description = description;
        this.completed = completed;
        this.level= level;

    }

}