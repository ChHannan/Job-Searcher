export interface User {
  id: string;
  username: string;
  email: string;
  about?: string;
  jobsApplied?: string; // For candidate
  jobsPosted?: string; // For employer
}
