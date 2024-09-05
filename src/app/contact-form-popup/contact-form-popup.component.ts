import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from "rxjs";

@Component({
  selector: 'app-contact-form-popup',
  templateUrl: './contact-form-popup.component.html',
  styleUrl: './contact-form-popup.component.css'
})
export class ContactFormPopupComponent {

  base64Image: string | undefined;

  @Output() close = new EventEmitter<void>();
  contactForm: any = {
    username: '',
    phonenumber: '',
    email: ''
  };
  private apiUrl = 'http://3.208.6.7/contact/contactus';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    console.log('ConsultUsComponent initialized');
  }

  onSubmit() {

    if (!this.contactForm.phonenumber) {
      alert('Please fill in all required details.!!');
      return; 
    }
    this.http.post<{ status: string }>(this.apiUrl, this.contactForm).subscribe(
      response => {
        if (response.status === 'Thank you for your inquiry!') {
          this.downloadImage(); 
          alert('Thank you for your inquiry');
          // this.router.navigate(['/thank-you']);
          // console.log("Form Submitted!", this.contactForm);
          this.closeModal(); 
        } else {
          alert(response.status || 'Submission failed');
        }
      },
      error => {
        console.error('Error during form submission:', error);
        alert('An error occurred. Please try again later.');
      }
    );
  }
  
  // Update selected services
  // onServiceChange(event: any) {
  //   const value = event.target.value;
  //   const isChecked = event.target.checked;

  //   if (isChecked) {
  //     this.contactForm.interested += (this.contactForm.interested ? ', ' : '') + value;
  //   } else {
  //     this.contactForm.interested = this.contactForm.interested
  //       .split(', ')
  //       .filter((service: string) => service !== value)
  //       .join(', ');
  //   }
  // }

  ngAfterViewInit() {
    this.addHorizontalScrollListener();
  }

  addHorizontalScrollListener() {
    const scrollContainer = document.querySelector('.scroll-container') as HTMLElement;

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', (event: WheelEvent) => {
        event.preventDefault();
        
        const scrollAmount = event.deltaY > 0 ? 200 : -100;
        
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
    }
  }

  closeModal() {
    this.close.emit(); // Emit an event to the parent to close the modal
}

// downloadPdf() {
//   // Logic to download the PDF
//   const link = document.createElement('a');
//   link.href = 'downloadImage'; 
//   link.download = 'IamDigiproCourse.png'; 
//   link.click();
//   }
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
