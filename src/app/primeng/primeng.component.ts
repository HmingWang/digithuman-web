import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';
@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {

    types: SelectItem[];

    selectedType: string;

    selectedTypes: string[] = ['PayPal','MasterCard'];

    selectedModes: string[];

    modes: SelectItem[];

    countries: any[];

    selectedCountry: any;

    constructor() {
        this.types = [
            {label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'},
            {label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'},
            {label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'}
        ];

        this.modes = [
            {value: 'Bold', title: 'Bold', icon: 'fa fa-fw fa-bold'},
            {value: 'Italic', title: 'Italic', icon: 'fa fa-fw fa-italic'},
            {value: 'Underline', title: 'Underline', icon: 'fa fa-fw fa-underline'}
        ];

        this.countries = [
            {name: 'USA', flag: 'usa.png'},
            {name: 'Germany', flag: 'germany.png'},
            {name: 'Japan', flag: 'japan.png'}
        ];
    }

  
  items: MenuItem[];
  ngOnInit() {
    this.items = [
        {
            label: 'File',
            items: [{
                    label: 'New',
                    icon: 'fa fa-fw fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'fa fa-fw fa-edit',
            items: [
                {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
            ]
        }
    ];
}
  display: boolean = false;

  showDialog() {
      console.log("hello");
  }
}
