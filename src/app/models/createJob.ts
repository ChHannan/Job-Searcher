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

export interface Company {
  id: string;
  companyName: string;
  companyCategory: string;
  companyDescription: string;
  emailAddress: string;
  location: string;
  phoneNumber: string;
  website: string;
  companyLogo: string;
  noOfEmployees: string;
  aboutCompany: string;
}

// export interface MinifiedJob {
//   id: string;
//   jobTitle: string;
//   company: Company;
//   estimatedSalary: string;
//   jobType: string;
//   location: string;
// }

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


// export interface MinifiedCompany {
//   id: string;
//   company: Company;
// }

export interface User {
  id: string;
  username: string;
  email: string;
  about?: string;
  jobsApplied?: string; // For candidate
  jobsPosted?: string; // For employer
}

export interface ApplyJob {
  estimatedSalary: string;
  coverLetter: string;
  extraInfo: string;
}
