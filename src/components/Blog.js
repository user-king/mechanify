import React from 'react';
import '../assets/styles/Blog.css';

const blogPosts = [
  {
    title: 'Asaasas',
    description: 'starts',
    link: '#'
  },
  {
    title: 'Asaasas',
    description: 'starts',
    link: '#'
  },
  {
    title: 'Asaasas',
    description: 'starts',
    link: '#'
  },
  {
    title: 'Asaasas',
    description: 'starts',
    link: '#'
  },
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={post.link}>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
