import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppService } from '../../services/app.service';
import { PlayStoreApp } from '../../models/app.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app-detail.component.html',
  styleUrl: './app-detail.component.css'
})
export class AppDetailComponent implements OnInit {
  private appService = inject(AppService);
  private route = inject(ActivatedRoute);
  protected app = signal<PlayStoreApp | undefined>(undefined);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.app.set(this.appService.getAppById(id));
    }
  }

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
