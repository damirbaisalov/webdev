export class FilmItem {
    id : number;
    title : string;
    description : string;
    rating : number;
    viewcount : number;

    FilmItem (title: string, description: string, rating: number ){
        this.title= title;
        this.description = description;
        this.rating = rating;

    }
}

export class Category {
    name : string;
    products: FilmItem[];
}