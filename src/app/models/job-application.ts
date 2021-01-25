import {Job} from 'src/app/models/job';
import {User} from 'src/app/models/user';

export interface JobApplication {
  id?: string;
  salary: string;
  experience: string;
  cover_letter: string;
  info: string;
  job?: Job;
  applicant?: User;
}


