import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = JSON.parse(JSON.stringify(data));
    })
  }

  imageWidth: Number = 75;
  imageMargin: Number = 0;

  products: ProductModel[];

  show: Boolean = false;
  image: String = "Show"

  toggleImage(event) {
    this.show = !this.show;
    if (this.image == "Show") {
      this.image = "Hide"
    } else {
      this.image = "Show"
    }
  }

}
