import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Prevent Common Plumbing Problems',
      excerpt: 'Learn about the most common plumbing issues and how to prevent them before they become expensive repairs.',
      image: 'https://images.unsplash.com/photo-1621967299229-c6a8ed3d7f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Maintenance',
      date: 'Mar 15, 2024',
      author: 'John Smith'
    },
    {
      id: 2,
      title: 'When to Call a Professional Plumber',
      excerpt: 'Understanding when DIY is appropriate and when you need to call in professional plumbing services.',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tips',
      date: 'Mar 10, 2024',
      author: 'Sarah Johnson'
    },
    {
      id: 3,
      title: 'Modern Plumbing Solutions for Old Homes',
      excerpt: 'Upgrading plumbing systems in older homes: challenges, solutions, and benefits.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Solutions',
      date: 'Mar 5, 2024',
      author: 'Mike Wilson'
    },
    {
      id: 4,
      title: 'Water Conservation Tips for Homeowners',
      excerpt: 'Simple changes that can save water and reduce your utility bills while being environmentally friendly.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tips',
      date: 'Feb 28, 2024',
      author: 'Lisa Brown'
    },
    {
      id: 5,
      title: 'The Benefits of Regular Plumbing Maintenance',
      excerpt: 'Why regular maintenance is crucial for preventing major plumbing issues and extending system lifespan.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Maintenance',
      date: 'Feb 20, 2024',
      author: 'John Smith'
    },
    {
      id: 6,
      title: 'Choosing the Right Water Heater for Your Home',
      excerpt: 'Comparing tank vs. tankless water heaters and helping you choose the best option for your needs.',
      image: 'https://images.unsplash.com/photo-1622630998476-a4c2dcd0d3c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Solutions',
      date: 'Feb 15, 2024',
      author: 'Sarah Johnson'
    },
  ];

  return (
    <>
      <Header />
      <section className="hero" style={{ backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(30, 58, 138, 0.8) 100%), url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)' }}>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Plumbing Blog</h1>
            <p className="hero-subtitle">Expert tips, news, and insights from plumbing professionals</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-image"
                />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>By {post.author}</span>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-xl">
            <button className="btn btn-primary btn-large">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;