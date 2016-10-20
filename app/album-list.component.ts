import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'album-list',
  template: `

    <select (change)="onChange($event.target.value)">
      <option value="All">All items </option>
      <option value="Rock">Rock</option>
      <option value="Soundtrack">Soundtrack</option>
      <option value="Electronica">Electronica</option>
    </select>

    <select (change)="onCart($event.target.value)">
      <option value="All">All items </option>
      <option value="notCart">Remove</option>
      <option value="inCart">Add to Cart</option>
    </select>


    <div class="row">

      <!-- Open the Col Main List Div -->
      <div class="col-sm-9">
      <h3>For Sale</h3>
        <div *ngFor="let currentAlbum of childAlbumList | genre:selectedGenre">
          <hr>
          <h4> {{ currentAlbum.name }} - {{ currentAlbum.artist }} - {{ currentAlbum.price }} - {{ currentAlbum.genre }}</h4>
          <button (click)="editButton(currentAlbum)">Edit</button>
          <album-cart [album]="currentAlbum"></album-cart>
        </div>
      </div>
      <!-- Close the Col Main List Div -->

      <!-- Open the Col Cart Div -->
      <div class="col-sm-3">
        <h3>Your Cart</h3>
        <div *ngFor="let currentAlbum of childAlbumList | incart:selectedCart">
          <hr>

          <p>{{ currentAlbum.name }} - {{ currentAlbum.artist }} - {{ currentAlbum.price }}</p>
        </div>
      </div>
      <!-- Close the Col Cart Div -->

    </div>
  `
})

export class AlbumListComponent {
  @Input() childAlbumList: Album[];
  @Output() editButtonClickSender = new EventEmitter();

  public selectedGenre: string = "All";
  onChange(optionFromMenu) {
    this.selectedGenre = optionFromMenu;
  }

  public selectedCart: string = "inCart";
  onCart(cartOptionFromMenu) {
    this.selectedCart = cartOptionFromMenu;
    console.log(this.selectedCart);
  }



  editButton(albumToEdit: Album) {
    this.editButtonClickSender.emit(albumToEdit);
  }
}
