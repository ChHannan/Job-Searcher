export interface User {
  id?: string;
  name: string;
  email: string;
  type: string;
  about?: string;
  api_token: string;
  // jobsApplied?: string; // For candidate
  // jobsPosted?: string; // For employer
}

export interface CreateUser {
  username: string;
  email: string;
  password: string;
  type: string;
}
