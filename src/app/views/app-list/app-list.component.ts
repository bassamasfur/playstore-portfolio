import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppService } from '../../services/app.service';
import { PlayStoreApp } from '../../models/app.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.css'
})
export class AppListComponent {
  private appService = inject(AppService);
  protected readonly apps = signal<PlayStoreApp[]>(this.appService.getApps());

  getStatusText(status: string): string {
    switch (status) {
      case 'production':
        return 'Producción';
      case 'test':
        return 'Prueba cerrada';
      case 'closed':
        return 'Cerrada';
      default:
        return status;
    }
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }
}
