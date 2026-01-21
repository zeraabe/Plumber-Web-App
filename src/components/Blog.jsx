import React from 'react';
import { Link } from 'react-router-dom';
import { BlogCard } from './common/CardComponents';
import { SectionHeader, Section, Container } from './common/LayoutComponents';
import { Button } from './common/FormComponents';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Prevent Common Plumbing Problems',
      excerpt: 'Learn about the most common plumbing issues and how to prevent them before they become expensive repairs.',
      image: 'https://images.unsplash.com/photo-1621967299229-c6a8ed3d7f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Maintenance',
      date: 'Mar 15, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'When to Call a Professional Plumber',
      excerpt: 'Understanding when DIY is appropriate and when you need to call in professional plumbing services.',
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tips',
      date: 'Mar 10, 2024',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Modern Plumbing Solutions for Old Homes',
      excerpt: 'Upgrading plumbing systems in older homes: challenges, solutions, and benefits.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Solutions',
      date: 'Mar 5, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'How to Prevent Clogged Drains in Your Kitchen',
      excerpt: 'Essential tips and habits to keep your kitchen sink flowing freely and avoid common clogs.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Tips',
      date: 'Feb 28, 2024',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'The Benefits of Installing a Tankless Water Heater',
      excerpt: 'Exploring the energy efficiency, space savings, and endless hot water advantages of going tankless.',
      image: 'https://images.unsplash.com/photo-1598522325072-8d4d21385159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Solutions',
      date: 'Feb 22, 2024',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Signs You May Have a Hidden Water Leak',
      excerpt: 'Unusual water bills, mold growth, and other indicators of leaks lurking behind walls or under slabs.',
      image: 'https://images.unsplash.com/photo-1621967299229-03e6a2d5d747?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Maintenance',
      date: 'Feb 15, 2024',
      readTime: '4 min read'
    },
    {
      id: 7,
      title: 'A Guide to Eco-Friendly Plumbing Fixtures',
      excerpt: 'How low-flow toilets, faucets, and showerheads can reduce water usage and lower utility costs.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Solutions',
      date: 'Feb 8, 2024',
      readTime: '6 min read'
    },
    {
      id: 8,
      title: 'Winter Plumbing Preparation Checklist',
      excerpt: 'Key steps to protect your pipes from freezing and avoid costly winter plumbing emergencies.',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Maintenance',
      date: 'Feb 1, 2024',
      readTime: '5 min read'
    }
  ];

  return (
    <Section bgLight>
      <Container>
        <SectionHeader 
          title="Latest News & Blog"
          subtitle="Stay updated with the latest plumbing tips, trends, and company news."
        />

        <div className="blog-grid">
          {blogPosts.map(post => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              onReadMore={(e) => {
                e.preventDefault();
                // Handle read more click
              }}
            />
          ))}
        </div>

        <div className="text-center mt-xl">
          <Link to="/blog" className="btn btn-primary btn-large">
            View All Articles
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Blog;