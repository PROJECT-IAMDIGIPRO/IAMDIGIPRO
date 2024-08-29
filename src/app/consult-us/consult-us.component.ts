import { Component, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { faMapMarkerAlt, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-consult-us',
  templateUrl: './consult-us.component.html',
  styleUrls: ['./consult-us.component.css']
})
export class ConsultUsComponent {
  faMapMarkerAlt = faMapMarkerAlt;
  faClock = faClock;
  faPhone = faPhone;


}