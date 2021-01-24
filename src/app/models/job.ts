import {Company} from 'src/app/models/company';

export interface Job {
  id?: string;
  title: string;
  description: string;
  type: string;
  location: string;
  salary: string;
  experience: string;
  company: Company;
  email: string;
  phone: string;
  contact_location: string;
}
