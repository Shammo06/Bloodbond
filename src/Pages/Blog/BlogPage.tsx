import React from "react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  author: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Introduction to React",
    excerpt: "Learn the basics of React and start building interactive UIs.",
    author: "Jane Doe",
  },
  {
    id: 2,
    title: "Getting Started with Tailwind",
    excerpt: "A guide to using Tailwind CSS for styling React applications.",
    author: "John Doe",
  },
  // Add more posts as needed
];

const BlogPage: React.FC = () => {
  return (
    <div className="max-w-4xl text-white mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-5">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-5 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="">{post.excerpt}</p>
            <div className="text-sm mt-2">Author: {post.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
