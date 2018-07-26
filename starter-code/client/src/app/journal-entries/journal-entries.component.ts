import {
  Component,
  OnInit
}
from '@angular/core';
import {
  JournalService
}
from '../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class JournalEntriesComponent implements OnInit {

  entries: Array < any > ;

  theNewEntry: any = {};

  constructor(private theService: JournalService) {}


  addNew() {
    this.theService.addNewEntry(this.theNewEntry)
      .subscribe((responseThingy) => {
        this.theNewEntry = {};
        this.getEntries();
        console.log('Yeah! You did it!')
      })
  }

  getEntries() {
    this.theService.getEntries()
      .subscribe((res) => {
        this.getEntries = res.reverse();
      })
  }

  ngOnInit() {
    this.getEntries();
  }

}