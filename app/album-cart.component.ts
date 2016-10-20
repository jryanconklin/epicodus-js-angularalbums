import { Component, Input } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-cart',
  template: `
  <div>
    <input *ngIf="album.inCart === true" type="checkbox" checked (click)="toggleCart(false)"/>
    <input *ngIf="album.inCart === false" type="checkbox" (click)="toggleCart(true)"/>
    <label>Add to Cart</label>
  </div>
  `
})

export class CartComponent {
  @Input() album: Album;
  toggleCart(setCart: boolean) {
    this.album.inCart = setCart;
  }
}
