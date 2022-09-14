import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    RouterModule, MatToolbarModule,
    MatFormFieldModule, MatSelectModule,
    TranslateModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ng14-standalone';

  /**
   * Inject Services
   */
  // translateService = inject(TranslateService);
  constructor(
    private translateService: TranslateService
  ) { }

  /**
   * Variables
   */
  languages = [
    { locale: 'en', name: 'English' },
    { locale: 'mk', name: 'Macedonian' }
  ];
  lngControl = new FormControl('en');

  /**
   * Methods
   */
  onUpdateLanguageControl(lng: string): void {
    this.translateService.use(lng)
  }
}
