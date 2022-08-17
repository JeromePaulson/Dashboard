import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from 'src/components/content/content.component';
import { DasboardComponent } from 'src/components/dasboard/dasboard.component';
import { AppComponent } from './app.component';


@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            component: ContentComponent,
            children: [
                {
                    path: '', redirectTo: 'home', pathMatch: 'full'
                },
                {

                    path: 'home', component: DasboardComponent,
                },
            ]
        }

    ]
    )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
