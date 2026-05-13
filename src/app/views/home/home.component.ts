import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private appService = inject(AppService);
  protected readonly developerName = signal('Bassam Asfur');
  protected readonly totalApps = signal(this.appService.getTotalApps());
}
