import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  productData = new ProductModel(null, null, null, null, null, null, null, null)

  addProduct(e) {
    this.productService.addNewProduct(this.productData);
    alert("submitted")
  }

}
