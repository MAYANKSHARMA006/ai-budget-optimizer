export interface AITool {
  id?: string;

  name: string;

  vendor: string;

  category: string;

  monthlyPrice: number;

  yearlyPrice: number;

  departments: string[];

  industries: string[];

  productivityGain: number;

  roi: number;

  security: string;

  website: string;

  logo: string;

  description: string;
}