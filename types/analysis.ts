export interface Analysis {
  id?: string;

  company: string;
  industry: string;
  employees: number;

  budget: string;
  currentAI: string;

  result: string;

  createdAt: any;

  departments?: number;

  productivity?: string;

  roi?: string;

  aiScore?: string;

  recommendedTools?: {
    name: string;
    department: string;
    users: number;
  }[];
}