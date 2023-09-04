import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  userName = ""
  @Output() searchEmmiter = new EventEmitter<string>()
  @Input() message: boolean = false;
  @Input() isDarkMode: boolean = false;
  constructor(public nameService: UsernameService) { }

  search() {
    this.searchEmmiter.emit(this.userName)

  }

}
