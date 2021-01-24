import {User} from 'src/app/models/user';

export interface Company {
  id?: string;
  name: string;
  category: string;
  description: string;
  email: string;
  location: string;
  phone: string;
  website: string;
  logo: string;
  employee_count: string;
  about: string;
  user?: User;
}
