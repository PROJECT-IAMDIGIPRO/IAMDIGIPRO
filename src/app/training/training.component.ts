import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from "rxjs";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  base64Image: string | undefined;

  ngOnInit() {}

  downloadImage() {
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYsFYFKq4TwDDkh_Dw1l2Ud7jAx-sYJ9O68A&s";

    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
      console.log(base64data);
      this.base64Image = "data:image/jpg;base64," + base64data;

      if (this.base64Image) {
        const link = document.createElement("a");

        document.body.appendChild(link);

        link.setAttribute("href", this.base64Image);
        link.setAttribute("download", "IamDigiproCourses.jpg");
        link.click();
        document.body.removeChild(link); 
      }
    });
  }

  getBase64ImageFromURL(url: string): Observable<string> {
    return new Observable((observer: Observer<string>) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = url;

      img.onload = () => {
        observer.next(this.getBase64Image(img));
        observer.complete();
      };

      img.onerror = (err) => {
        observer.error(err);
      };
    });
  }

  getBase64Image(img: HTMLImageElement): string {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    } else {
      throw new Error("Could not get canvas context.");
    }
  }
}