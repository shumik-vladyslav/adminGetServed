import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        MatSelectModule,
        FormsModule,
        MatFormFieldModule
    ],
    exports     : [
        SampleComponent,
        MatSelectModule
    ]
})

export class SampleModule
{
}
