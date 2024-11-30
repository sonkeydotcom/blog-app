// src/types/User.ts
export interface User {
  id: string;
  username: string;
  avatar: string;
}

// src/types/BlogPost.ts
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: User;
  date: string;
  comments: Comment[];
}

// src/types/Comment.ts
export interface Comment {
  id: string;
  content: string;
  author: User;
  date: string;
  replies?: Comment[];
}
