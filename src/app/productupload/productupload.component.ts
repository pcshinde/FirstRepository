import { Component } from '@angular/core';
import { SliderType } from 'igniteui-angular';

@Component({
  selector: 'app-productupload',
  templateUrl: './productupload.component.html',
  styleUrls: ['./productupload.component.css']
})
export class ProductuploadComponent {

  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(200, 800);

  states: any[] = [{
    "statename": "Electronics",
    "districts": [
      {
        "districtName": "Mobiles",
        "mobs": [
          "Samsung",
          "Nokia",
          "Xiomi"
        ]
      },
      {
        "districtName": "Mobile Accessories",
        "mobaccess": [
          "Charger",
          "Headphones",
          "Bluetooths"
        ]
      }
    ]
  },
  {
    "statename": "Home Appliances",
    "districts": [
      {
        "districtName": "Televisions",
        "Homeapps": [
          "Samsung",
          "LG",
          "Mi"
        ]
      },
      {
        "districtName": "Air-Conditioners",
        "Homeapps": [
          "Samsung",
          "Hitachi",
          "LG"
        ]
      }
    ]
  }]

  constructor() { }

  public updatePriceRange(event) {
    const prevPriceRange = this.priceRange;
    switch (event.id) {
      case "lowerInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(event.value, prevPriceRange.upper);
        }
        break;
      }
      case "upperInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(prevPriceRange.lower, event.value);
        }
        break;
      }
    }
  }

  selectedDistricts: object[] = [];
  sendStateName(v) {
    for (let index = 0; index < this.states.length; index++) {
      if (this.states[index].statename == v) {
        this.selectedDistricts = this.states[index].districts;
      }

    }
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number
  ) {
  }
}


// ValidateExtension(fileUp) {
//   const allowedFiles = ['.jpg', '.jpeg', '.png'];
//   const fileUpload = fileUp;
//   const regex = new RegExp('([a-zA-Z0-9\s_\\.\-:])+(' + allowedFiles.join('|') + ')');
//   if (!regex.test(fileUpload.value.toLowerCase())) {
//     this.error = true;
//   }
//   else {
//     this.error = false;
//   }
// }
