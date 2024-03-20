export class Project {
    id: number;
    category: string;
    description: string;
    name: string;

    constructor (id: number = 0, category: string = "", description: string = "", name: string = "") {
        this.id = id;
        this.category = category;
        this.description = description;
        this.name = name;
    }
}