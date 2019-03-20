import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products = [];
  private _searchText: string;

  @Input()
  public set searchText(value: string) {
    this._searchText = value;
    this.updateProductsList();
  }

  ngOnInit() {
    this.products = PRODUCTS.sort((a: any, b: any) => a.price - b.price);
  }

  private updateProductsList(): void {
    const list = PRODUCTS.sort((a: any, b: any) => a.price - b.price);
    if (this._searchText) {
      this.products = list.filter(item => item.name.toLowerCase().includes(this._searchText.toLowerCase()));
    } else {
      this.products = list;
    }
  }
}
