export interface DashboardAnalysis {
  users: {
    total: number;
    active: number;
    inactive: number;
    blocked: number;
    writers: number;
    applyForWriter: number;
  };
  subscriptionTypes: {
    free: number;
    pro: number;
    premium: number;
  };
  posts: {
    total: number;
    published: number;
    featured: number;
    perMonth: Record<string, number>;
    topics: Record<string, number>;
  };
}
