import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/owner/owner.service';
import { Owner } from '../owner/owner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-owner',
  templateUrl: './list-owner.component.html',
  styleUrls: ['./list-owner.component.css']
})
export class ListOwnerComponent implements OnInit {
  public owners:Owner[];
  router: any;
  constructor(private ownerService: OwnerService,private router2: Router) { 
    
  }

  ngOnInit() {
      this.ownerService.getOwners().subscribe(
      data => {this.owners = data;});
     
  }
  onSelect(owner: Owner){
    // forma antigua this.router.navigate(['/owners'], owner.id);
    this.router.navigate()
  }

}
