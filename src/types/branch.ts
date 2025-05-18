export type Branch = 'current' | 'jee' | 'neet';

export interface BranchOption {
  id: Branch;
  name: string;
  description: string;
  image: string;
}