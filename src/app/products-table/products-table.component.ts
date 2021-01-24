import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  products: Product[];
  prodColumns: string[] = ['id', 'name', 'department', 'price', 'description'];

  constructor(
    private readonly productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
