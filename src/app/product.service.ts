import { EventEmitter, Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFormServer: any[] = [
    { id: 1, name: 'Laptop', department_id: 4, price: 40, description: 'Laptop Description' },
    { id: 2, name: 'Shirt', department_id: 1, price: 10, description: 'Shirt Description' },
    { id: 3, name: 'Polo', department_id: 1, price: 50, description: 'Polo Description' },
    { id: 4, name: 'Mouse', department_id: 3, price: 40, description: 'Mouse Description' },
  ];
  private products: Product[] = [];
  private nextId: number;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(
    private readonly departmentService: DepartmentService
  ) {
    for (const p of this.dataFormServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id)
      });
      this.nextId = p.id + 1;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProducts(product: Product): void {
    const prod: Product = { id: this.nextId++, ...product };
    this.products.push(prod);
    console.log(this.products);
    this.onNewProduct.emit(prod);
  }
}
