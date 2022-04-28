import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrandsComponent } from './brands/brands.component';
import { InformationComponent } from './information/information.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JoinComponent } from './join/join.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import {MatSliderModule} from '@angular/material/slider';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms'
import { MatIconModule} from  '@angular/material/icon'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AboutUsComponent,
    BrandsComponent,
    InformationComponent,
    GalleryComponent,
    JoinComponent,
    FooterComponent,
    PreFooterComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
