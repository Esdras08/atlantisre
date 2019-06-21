import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-en-construction',
    template: `<div style="display: flex; justify-content: center; flex-direction: column;
    text-align: center;">
        <div style="width: 30%; margin: 0 auto;">
            <img src="/assets/img/constr.jpg" width="100%" />
        </div>
        <h2 class="labell" style="color: #666666;">PAGE EN CONSTRUCTION !</h2>
    </div>`
})
export class EnConstructionComponent {
}
