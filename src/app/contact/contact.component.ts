import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/rishabhh.bhatia',
        iconUrl: './assets/icons/facebook.svg'
      },
      {
        name: 'Twitter',
        url: '#',
        iconUrl: './assets/icons/twitter.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/rishabhhbhatia/',
        iconUrl: './assets/icons/instagram.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rishabh-bhatia-a0b24712b/',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/rb248',
        iconUrl: './assets/icons/github.svg'
      },
      {
        name: 'Hackerrank',
        url: 'https://hackerrank.com/rishabhbhatia315',
        iconUrl: './assets/icons/hackerrank.svg'
      },
      {
        name: 'Stackoverflow',
        url: '#',
        iconUrl: './assets/icons/stackoverflow.svg'
      }
      
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:rishabh.bhatia@rwth-aachen.de',
    iconUrl: './assets/icons/email.svg'
  };

  address = {
    location: 'Buechel 22, Aachen, Germany',
    phone: '+4917645873560'
  };

  
  ngOnInit() {}

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
