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

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <div className='blog-text'>
        <a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</a>
      </div>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            {/* <a href={post.link}>Read more</a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
