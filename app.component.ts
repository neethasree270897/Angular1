import { Component ,OnInit} from '@angular/core';
import { DataaService } from './dataa.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users$:  User[];

constructor(private dataaService:DataaService){}

	ngOnInit(){
	return this.dataaService.getUsers()
	.subscribe(data=>{this.users$ =data},error=>{});
}
}
