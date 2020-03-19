export class ProdItem {
    id: number;
    name: string;
    description: string;
    rating: number;
    viewcount : number;

    ProdItem(name: string, description: string, rating: number, viewcount: number){
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.viewcount = viewcount;
    }
  }

  export class Category {
      id: number;
      name: string;
      products: ProdItem[];
  }