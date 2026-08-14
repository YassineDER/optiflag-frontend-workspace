import { Component, input } from "@angular/core";

@Component({
  selector: "ui-button",
  standalone: true,
  template: `<button class="btn">{{ label() }}</button>`,
  styles: [
    `
      .btn {
        padding: 8px 16px;
        background: blue;
        color: white;
        border-radius: 4px;
      }
    `,
  ],
})
export class ButtonComponent {
  label = input<string>("Click me");
}
