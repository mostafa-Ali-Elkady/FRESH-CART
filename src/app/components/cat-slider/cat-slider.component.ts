import { Component, OnInit } from "@angular/core";
import { productsService } from "src/app/services/products.service";
import { OwlOptions } from "ngx-owl-carousel-o";
import { Category } from "src/app/interfaces/category";

@Component({
  selector: "app-cat-slider",
  templateUrl: "./cat-slider.component.html",
  styleUrls: ["./cat-slider.component.css"],
})
export class CatSliderComponent implements OnInit {
  categories: Category[] = [];

  constructor(private _productsService: productsService) {
    // Do not Write in constructor
  }
  ngOnInit(): void {
    this._productsService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
      },
    });
  }

  // slider
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },

      800: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
  };
}
