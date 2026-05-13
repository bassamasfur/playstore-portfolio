import { Injectable } from '@angular/core';
import { PlayStoreApp } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apps: PlayStoreApp[] = [
    {
      id: '1',
      name: 'Calcular IMC',
      packageName: 'com.bassamasfur.appsalud',
      description: 'Aplicación para calcular el Índice de Masa Corporal (IMC) de manera rápida y sencilla. Permite a los usuarios conocer su estado nutricional ingresando su peso y altura. Ideal para llevar un control de salud personal.',
      shortDescription: 'Calcula tu IMC de forma fácil y rápida',
      icon: '💪',
      lastUpdate: '7 may 2026',
      status: 'production',
      stats: {
        downloads: 72,
        acquisitions: 11,
        rating: 5000,
        totalRatings: 5000,
        revenue: 2
      },
      downloadPercentage: -7.7,
      acquisitionPercentage: -31.3,
      revenuePercentage: 0.0
    },
    {
      id: '2',
      name: 'AliviaDol',
      packageName: 'com.bassamasfur.aliviadol',
      description: 'Herramienta médica para el seguimiento y gestión del dolor. Permite a los usuarios registrar niveles de dolor, medicamentos tomados y recibir recordatorios para sus tratamientos. Incluye gráficos de evolución y consejos de salud.',
      shortDescription: 'Gestiona y controla tu dolor de forma efectiva',
      icon: '💊',
      lastUpdate: '10 may 2026',
      status: 'test',
      stats: {
        downloads: 3,
        acquisitions: 4,
        rating: 0,
        totalRatings: 0,
        revenue: 0
      },
      downloadPercentage: 0.0,
      acquisitionPercentage: 0.0,
      revenuePercentage: 0.0
    }
  ];

  getApps(): PlayStoreApp[] {
    return this.apps;
  }

  getAppById(id: string): PlayStoreApp | undefined {
    return this.apps.find(app => app.id === id);
  }

  getAppByPackageName(packageName: string): PlayStoreApp | undefined {
    return this.apps.find(app => app.packageName === packageName);
  }

  getTotalApps(): number {
    return this.apps.length;
  }

  getProductionApps(): PlayStoreApp[] {
    return this.apps.filter(app => app.status === 'production');
  }
}
