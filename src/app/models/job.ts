import {Company} from 'src/app/models/company';

export interface Job {
  id: string;
  jobTitle: string;
  jobDescription: string;
  jobType: string;
  location: string;
  company: Company;
  contactEmail: string;
  contactPhoneNumber: string;
  contactLocation: string;
  estimatedSalary: string;
}
