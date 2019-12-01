import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
    @Input() feeds: Array<any>;

    ngOnInit() {
    }
}
