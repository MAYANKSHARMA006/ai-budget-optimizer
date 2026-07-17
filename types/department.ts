export interface Department {
  id?: string;

  companyId: string;

  name: string;

  description: string;

  manager: string;

  employeeCount: number;

  monthlyBudget: number;

  currentAITools: string[];

  productivityScore: number;

  createdAt?: Date;
}