import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AbilityAction, Subjects } from 'src/app/utils/user.config';
import { AbilityModule } from '@casl/angular';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, AbilityModule, TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  abilityAction = AbilityAction;
  subjects = Subjects;

  value = 1;

  value$ = new BehaviorSubject(2).asObservable();

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log('Home Standalone Component');
  }

  updateValue(): void {
    this.value = 2;
    this.cdr.markForCheck();
  }

}
