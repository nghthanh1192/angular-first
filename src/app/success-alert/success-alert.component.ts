import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template: `
        <p>This is success alert message!</p>`,
    styles: [`
        p {
            color: yellow;
        }`]
})
export class SuccessAlertComponent {

}