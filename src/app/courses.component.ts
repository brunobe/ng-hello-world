import { Component } from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <div (click)="onClickDiv()">
            <button class="btn btn-primary" 
                [class.active]="isActive"
                [style.background]="isActive ? 'red' : 'blue'"
                (click)="onSave($event)">Save</button>
            <div><img [src]="imageURL" /></div>
        </div>
        <input [(ngModel)]=email (keyup.enter)="onEnter(email.value)" />
    `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;
    isActive = true;
    imageURL = "https://odis.homeaway.com/odis/listing/36d6308f-5d40-4300-bc56-ab3b827c3071.c10.jpg"
    email;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title;
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked.", $event)
    }

    onClickDiv() {
        console.log("Div was clicked!")
    }

    onEnter() {
        console.log("Email: " + this.email)
    }
} 