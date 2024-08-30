import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; // Ensure ngx-cookie-service is installed
import { IpAddressService } from '../ip-address.service'; // Import your IP address service

@Component({
  selector: 'app-cookies-popup',
  templateUrl: './cookies-popup.component.html',
  styleUrls: ['./cookies-popup.component.css'] // Updated property name
})
export class CookiesPopupComponent implements OnInit {
  acceptCookies(): void {
    this.cookieService.set('cookiesAccepted', 'true', 365); // Cookie expires in 365 days
    this.cookiesAccepted = true;
    this.removeBodyFixed(); // Restore scroll after accepting
  }

  selectedPreference = 'essential';
  cookiesAccepted = false;
  showDialog = false; // Manage dialog visibility

  constructor(
    private cookieService: CookieService,
    private ipAddressService: IpAddressService // Inject the IP service
  ) { }

  ngOnInit(): void {
    this.cookiesAccepted = this.cookieService.get('cookiesAccepted') === 'true';
    if (!this.cookiesAccepted) {
      this.showDialog = true;
      this.setBodyFixed(); // Fix body scroll when popup opens
    }
    this.getIpAddress(); // Fetch IP address on initialization
  }

  handleAccept(): void {
    this.cookieService.set('cookiesAccepted', 'true', 365);
    this.cookiesAccepted = true;
    this.showDialog = false; // Close the dialog
    this.removeBodyFixed(); // Restore scroll after accepting
  }

  handleDecline(): void {
    this.cookieService.set('cookiesAccepted', 'false', 365);
    this.cookiesAccepted = false;
    this.showDialog = false; // Close the dialog
    this.removeBodyFixed(); // Restore scroll after declining
  }

  getIpAddress(): void {
    this.ipAddressService.getIpAddress().subscribe((response: { ip: any; }) => {
      console.log('IP Address:', response.ip); // Handle the IP address as needed
    });
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.popup-content');
    if (this.showDialog && !clickedInside) {
      this.handleDecline(); // Close the popup if clicked outside
    }
  }

  private setBodyFixed(): void {
    document.body.style.overflow = 'hidden'; // Disable scroll
  }

  private removeBodyFixed(): void {
    document.body.style.overflow = ''; // Restore scroll
  }
}