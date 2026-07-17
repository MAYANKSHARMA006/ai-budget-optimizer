export interface Company {
  id?: string;

  companyName: string;

  industry: string;

  website: string;

  country: string;

  companySize: string;

  employeeCount: number;

  departmentCount: number;

  annualRevenue: number;

  currentAIBudget: number;

  currentAITools: string[];

  goals: string[];

  createdBy: string;

  createdAt?: Date;
}