import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter=faTwitter
  faFacebookF= faFacebookF
  faInstagram=faInstagram
  faLinkedinIn=faLinkedinIn
  faWhatsapp=faWhatsapp
  faLocationDot = faLocationDot
  faPhoneFlip = faPhoneFlip
  faEnvelope = faEnvelope
  constructor() { }

  ngOnInit(): void {
  }

}
