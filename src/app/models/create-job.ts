import {Company} from 'src/app/models/company';

export interface CreateJob {
  jobName: string;
  jobType: string;
  location: string;
  jobDescription: string;
  company: Company;
  contactEmail: string;
  contactPhoneNumber: string;
  contactLocation: string;
  estimatedSalary: string;
  yearsOfExperience: string;
}



// export interface MinifiedJob {
//   id: string;
//   jobTitle: string;
//   company: Company;
//   estimatedSalary: string;
//   jobType: string;
//   location: string;
// }



// export interface MinifiedCompany {
//   id: string;
//   company: Company;
// }

