export interface PlayStoreApp {
  id: string;
  name: string;
  packageName: string;
  description: string;
  shortDescription: string;
  icon: string;
  lastUpdate: string;
  status: 'production' | 'test' | 'closed';
  stats: {
    downloads: number;
    acquisitions: number;
    rating: number;
    totalRatings: number;
    revenue: number;
  };
  downloadPercentage: number;
  acquisitionPercentage: number;
  revenuePercentage: number;
}
