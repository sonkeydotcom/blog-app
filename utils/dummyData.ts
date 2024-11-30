// src/utils/dummyData.ts
import { v4 as uuidv4 } from "uuid";
import { BlogPost, Comment, User } from "../types";

const users: User[] = [
  {
    id: uuidv4(),
    username: "JohnDoe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: uuidv4(),
    username: "JaneDoe",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

export const generateDummyBlogPosts = (count: number = 10): BlogPost[] => {
  const posts: BlogPost[] = [];

  for (let i = 0; i < count; i++) {
    const comments: Comment[] = generateDummyComments(3);

    const post: BlogPost = {
      id: uuidv4(),
      title: `Blog Post ${i + 1}`,
      content: `This is the content of blog post ${
        i + 1
      }. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      author: users[i % users.length],
      date: new Date().toISOString(),
      comments: comments,
    };

    posts.push(post);
  }

  return posts;
};

const generateDummyComments = (count: number = 3): Comment[] => {
  const comments: Comment[] = [];

  for (let i = 0; i < count; i++) {
    const comment: Comment = {
      id: uuidv4(),
      content: `This is a comment by ${users[i % users.length].username}`,
      author: users[i % users.length],
      date: new Date().toISOString(),
      replies: [
        {
          id: uuidv4(),
          content: "Reply to the comment",
          author: users[(i + 1) % users.length],
          date: new Date().toISOString(),
        },
      ],
    };

    comments.push(comment);
  }

  return comments;
};

export const dummyBlogPosts = generateDummyBlogPosts();
