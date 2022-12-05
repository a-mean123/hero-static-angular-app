import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor( public shared : SharedService ) { }

  ngOnInit(): void {


  }



}
