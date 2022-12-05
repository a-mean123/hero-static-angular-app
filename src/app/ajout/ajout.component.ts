import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {


  hero : any = {

    name: '',
    power: 0,
    image:''

  }




  ajout(){

      this.shared.heros.push(this.hero);
      this.router.navigate(['/list']);
  }


  constructor(  public shared: SharedService , private router: Router ) { }

  ngOnInit(): void {
  }

}
