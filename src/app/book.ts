export class Book{
  
    public get $id() : number {
        return this.id;
    }
    public set $id(value: number) {
        this.id = value;
    }
    public get $title(): string {
        return this.title;
    }
    public set $title(value: string) {
        this.title = value;
    }
    public get $authors(): string[] {
        return this.authors[];
    }
    public set $authors(value: string[]) {
        this.authors = value [];
    }
    public get $releaseYear(): number {
        return this.releaseYear;
    }
    public set $releaseYear(value: number) {
        this.releaseYear = value;
    }
    public get $ISBN(): number {
        return this.ISBN;
    }
    public set $ISBN(value: number) {
        this.ISBN = value;
    }

    constructor(private id: number, private title: string, private authors: string, private releaseYear: number, private ISBN: number) {

    }

}