import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaHeart, FaRegHeart, FaBookmark, FaRegBookmark, FaShare, FaArrowLeft, FaClock, FaUser, FaCalendar, FaEye, FaBars, FaTimes } from "react-icons/fa";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [viewCount, setViewCount] = useState({});
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const blogPageStyle = {
    width: '100%',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f5f7fa',
    minHeight: '100vh'
  };

  const blogContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: windowWidth > 1024 ? 'grid' : 'block',
    gridTemplateColumns: windowWidth > 1024 ? '300px 1fr' : '1fr',
    gap: '30px',
    alignItems: 'start'
  };

  // Sample blog data (same as before)
  const samplePosts = [
    // ... (same sample posts data as before)
    {
      id: 1,
      title: "Anand Seva Trust - Our Mission & Vision",
      content: `Anand Seva Trust was established in 2010 with a vision to create a society where every individual has access to basic necessities and opportunities for growth. Our mission focuses on three key areas:
      
      • Education for underprivileged children
      • Healthcare access in rural areas
      • Women empowerment and skill development
      
      Over the years, we have impacted more than 50,000 lives through various initiatives and continue to expand our reach.`,
      author: "Srikanth Reddy - Trust Chairman",
      date: "2024-01-15",
      category: "About Us",
      image: "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGQlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
      readTime: "3 min read",
      likes: 42,
      views: 1250
    },
    {
      id: 2,
      title: "Annual Food Distribution Drive - 2024",
      content: `Our annual food distribution drive was conducted successfully across 5 districts. Key highlights:
      
      • Distributed food kits to 2,500 families
      • Covered remote tribal areas
      • Collaborated with local NGOs
      • Provided nutritional support for children
      
      Each food kit contained rice, pulses, oil, and essential spices sufficient for a family of four for one month. Special thanks to all our volunteers and donors who made this possible.`,
      author: "Priya Sharma - Event Coordinator",
      date: "2024-01-10",
      category: "Events",
      image: "https://www.snehdhara.org/wp-content/uploads/2024/09/food-distribution-sector-37-gurgaon-21-09-2024-4.jpeg",
      readTime: "4 min read",
      likes: 67,
      views: 890
    },
    {
      id: 3,
      title: "Education Scholarship Program Updates",
      content: `This year, we have awarded scholarships to 150 deserving students from economically challenged backgrounds:
      
      • 75 students for engineering courses
      • 45 students for medical studies
      • 30 students for degree programs
      
      Selection process involved written tests, interviews, and family income verification. We also provide mentorship and career guidance to all scholarship recipients to ensure their academic success.`,
      author: "Dr. Ramesh Kumar - Education Head",
      date: "2024-01-05",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1573894999291-f440466112cc?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
      readTime: "5 min read",
      likes: 89,
      views: 1560
    },
    {
      id: 4,
      title: "Medical Camp in Rural Village",
      content: `Free medical camp organized in Chinnapareddypalli village:
      
      • 500+ patients treated
      • Free medicines distributed
      • Specialist doctors consultation
      • Health awareness sessions
      
      Common issues addressed: diabetes, hypertension, vision problems, and general health checkups. We plan to conduct such camps monthly in different villages.`,
      author: "Dr. Anjali Mehta - Medical Coordinator",
      date: "2024-01-02",
      category: "Healthcare",
      image: "https://www.bec.org/wp-content/uploads/2024/08/VZG260824-3.jpg",
      readTime: "3 min read",
      likes: 56,
      views: 780
    },
    {
      id: 5,
      title: "Success Story: From Student to Doctor",
      content: `Meet Ravi, one of our first scholarship recipients who is now a successful doctor:
      
      "Anand Seva Trust supported my MBBS education when my family couldn't afford it. Today, I'm working as a resident doctor and giving back to the community that supported me."
      
      Ravi now volunteers at our medical camps and inspires other students to pursue their dreams despite financial challenges.`,
      author: "Geetha Reddy - Success Stories Team",
      date: "2023-12-28",
      category: "Success Stories",
      image: "https://satyafoundation.org/wp-content/uploads/2023/05/basoli9.jpg",
      readTime: "4 min read",
      likes: 112,
      views: 2100
    },
    {
      id: 6,
      title: "Volunteer of the Month: Suresh Kumar",
      content: `Suresh has been with us for 3 years and has shown exceptional dedication:
      
      • Organized 15+ donation drives
      • Mentored 30+ students
      • Coordinated medical camps
      • Fundraising activities
      
      "Volunteering with Anand Seva Trust has given me purpose and the satisfaction of making a difference in people's lives." - Suresh Kumar`,
      author: "Volunteer Management Team",
      date: "2023-12-20",
      category: "Volunteer Stories",
      image: "https://media.assettype.com/homegrown/import/book/12053-lzsktptfbl-1587451566.jpeg?auto=format%2Ccompress&enlarge=true&fit=max&h=675&w=1200",
      readTime: "3 min read",
      likes: 78,
      views: 950
    }
  ];

  useEffect(() => {
    setBlogPosts(samplePosts);
    const initialComments = {};
    const initialViewCount = {};
    samplePosts.forEach(post => {
      initialComments[post.id] = [
        { id: 1, user: "Ravi Kumar", text: "Great initiative! How can I contribute?", date: "2024-01-16", likes: 2 },
        { id: 2, user: "Priya Singh", text: "This is amazing work. God bless your team!", date: "2024-01-15", likes: 5 },
        { id: 3, user: "Suresh Patel", text: "I would like to volunteer for your next event.", date: "2024-01-14", likes: 1 }
      ];
      initialViewCount[post.id] = post.views;
    });
    setComments(initialComments);
    setViewCount(initialViewCount);
  }, []);

  // Mobile sidebar toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setViewCount(prev => ({
      ...prev,
      [post.id]: (prev[post.id] || 0) + 1
    }));
    
    const related = samplePosts
      .filter(p => p.id !== post.id && p.category === post.category)
      .slice(0, 3);
    setRelatedPosts(related);
    
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setRelatedPosts([]);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsMobileMenuOpen(false);
  };

  // ... (other handler functions remain the same)
  const handleLikeClick = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleBookmarkClick = (postId) => {
    setBookmarkedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleCommentSubmit = (postId, e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        user: "Current User",
        text: newComment,
        date: new Date().toISOString().split('T')[0],
        likes: 0
      };
      setComments(prev => ({
        ...prev,
        [postId]: [...prev[postId], comment]
      }));
      setNewComment('');
    }
  };

  const handleCommentLike = (postId, commentId) => {
    setComments(prev => {
      const updatedComments = { ...prev };
      const postComments = [...updatedComments[postId]];
      const commentIndex = postComments.findIndex(comment => comment.id === commentId);
      if (commentIndex !== -1) {
        postComments[commentIndex] = {
          ...postComments[commentIndex],
          likes: (postComments[commentIndex].likes || 0) + 1
        };
        updatedComments[postId] = postComments;
      }
      return updatedComments;
    });
  };

  const handleDonateClick = () => {
    alert('Thank you for your interest in donating! Redirecting to donation page...');
  };

  const handleVolunteerClick = () => {
    alert('Thank you for your interest in volunteering! Our team will contact you soon.');
  };

  const handleShareClick = (platform, post) => {
    const shareText = `Check out this post from Anand Seva Trust: ${post.title}`;
    const shareUrl = window.location.href;
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      default:
        break;
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All Posts', 'About Us', 'Events', 'Programs', 'Healthcare', 'Success Stories', 'Volunteer Stories'];

  // Responsive grid columns
  const getGridColumns = () => {
    if (windowWidth < 640) return '1fr';
    if (windowWidth < 1024) return 'repeat(auto-fit, minmax(350px, 1fr))';
    return 'repeat(auto-fit, minmax(380px, 1fr))';
  };

  return (
    <div style={blogPageStyle}>
      {/* Mobile Header */}
      {windowWidth < 1024 && !selectedPost && (
        <div style={{
          background: 'white',
          padding: '15px 20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button 
            onClick={toggleMobileMenu}
            style={{
              background: '#667eea',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            Menu
          </button>
          <h3 style={{ margin: 0, color: '#333' }}>Anand Seva Trust</h3>
        </div>
      )}

      {/* Full Width Banner */}
      <div style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)", 
        color: "white",
        padding: windowWidth < 768 ? "60px 20px" : "80px 20px",
        textAlign: "center",
      }}>
        <h1 style={{ 
          margin: '0', 
          fontSize: windowWidth < 768 ? '2.5rem' : windowWidth < 1024 ? '3rem' : '3.5rem', 
          fontWeight: '700', 
          marginBottom: '15px',
          textShadow: '2px 2px 6px rgba(0,0,0,0.4)',
          lineHeight: '1.2'
        }}>
          Anand Seva Trust 
        </h1>
        <p style={{ 
          fontSize: windowWidth < 768 ? '1.2rem' : '1.5rem', 
          margin: '0', 
          opacity: '0.95', 
          marginBottom: '35px',
          fontWeight: '300',
          padding: '0 10px'
        }}>
          Sharing Stories of Care, Service & Community Support
        </p>
        <div style={{ 
          maxWidth: '400px', 
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 20px',
              borderRadius: '25px',
              border: 'none',
              fontSize: '16px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
              outline: 'none'
            }}
          />
        </div>
      </div>

      {selectedPost ? (
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: windowWidth < 768 ? '0 15px' : '0 20px' 
        }}>
          <BlogPostDetail 
            post={selectedPost} 
            onBack={handleBackToList}
            onLike={handleLikeClick}
            onBookmark={handleBookmarkClick}
            onShare={handleShareClick}
            onDonate={handleDonateClick}
            onVolunteer={handleVolunteerClick}
            comments={comments[selectedPost.id] || []}
            onCommentSubmit={handleCommentSubmit}
            onCommentLike={handleCommentLike}
            newComment={newComment}
            setNewComment={setNewComment}
            liked={likedPosts[selectedPost.id] || false}
            bookmarked={bookmarkedPosts[selectedPost.id] || false}
            viewCount={viewCount[selectedPost.id] || selectedPost.views}
            relatedPosts={relatedPosts}
            onPostClick={handlePostClick}
            windowWidth={windowWidth}
          />
        </div>
      ) : (
        <div style={blogContainerStyle}>
          {/* Sidebar */}
          <div style={{
            background: 'white',
            padding: windowWidth < 768 ? '20px' : '25px',
            borderRadius: '12px',
            height: windowWidth > 1024 ? 'fit-content' : 'auto',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            position: windowWidth > 1024 ? 'sticky' : 'static',
            top: windowWidth > 1024 ? '20px' : 'auto',
            display: windowWidth < 1024 ? (isMobileMenuOpen ? 'block' : 'none') : 'block',
            marginBottom: windowWidth < 1024 ? '20px' : '0',
            zIndex: 999
          }}>
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ 
                color: '#333', 
                borderBottom: '3px solid #667eea', 
                paddingBottom: '12px',
                marginBottom: '20px',
                fontSize: windowWidth < 768 ? '1.2rem' : '1.4rem'
              }}>
                📂 Categories
              </h3>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {categories.map((category, index) => (
                  <li 
                    key={index}
                    style={{
                      padding: '12px 15px',
                      margin: '8px 0',
                      background: selectedCategory === category ? '#667eea' : '#f8f9fa',
                      color: selectedCategory === category ? 'white' : '#333',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: '1px solid #e9ecef',
                      fontWeight: selectedCategory === category ? '600' : '400',
                      fontSize: windowWidth < 768 ? '14px' : '16px'
                    }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 style={{ 
                color: '#333', 
                borderBottom: '3px solid #ffc107', 
                paddingBottom: '12px',
                marginBottom: '15px',
                fontSize: windowWidth < 768 ? '1.2rem' : '1.4rem'
              }}>
                🔥 Recent Posts
              </h3>
              {blogPosts.slice(0, 3).map(post => (
                <div 
                  key={post.id} 
                  style={{
                    padding: '12px',
                    margin: '10px 0',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    border: '1px solid #e9ecef',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#667eea';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8f9fa';
                    e.currentTarget.style.color = 'inherit';
                  }}
                  onClick={() => handlePostClick(post)}
                >
                  <h4 style={{ 
                    margin: '0 0 5px 0', 
                    fontSize: windowWidth < 768 ? '13px' : '14px', 
                    lineHeight: '1.4' 
                  }}>
                    {post.title}
                  </h4>
                  <span style={{ 
                    fontSize: windowWidth < 768 ? '11px' : '12px', 
                    opacity: '0.7' 
                  }}>
                    {post.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: getGridColumns(),
              gap: windowWidth < 768 ? '20px' : '25px'
            }}>
              {filteredPosts.map(post => (
                <BlogPostCard 
                  key={post.id} 
                  post={post} 
                  onClick={handlePostClick}
                  onLike={handleLikeClick}
                  onBookmark={handleBookmarkClick}
                  liked={likedPosts[post.id] || false}
                  bookmarked={bookmarkedPosts[post.id] || false}
                  viewCount={viewCount[post.id] || post.views}
                  windowWidth={windowWidth}
                />
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: windowWidth < 768 ? '40px 20px' : '60px 20px',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                marginTop: '20px'
              }}>
                <h3 style={{ color: '#666', marginBottom: '10px' }}>No posts found</h3>
                <p style={{ color: '#888' }}>Try changing your search or category filter</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Blog Post Card Component - Updated for responsiveness
const BlogPostCard = ({ post, onClick, onLike, onBookmark, liked, bookmarked, viewCount, windowWidth }) => {
  return (
    <div 
      style={{
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        overflow: 'hidden',
        border: '1px solid #e9ecef'
      }}
      onMouseEnter={(e) => {
        if (windowWidth > 768) {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (windowWidth > 768) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
        }
      }}
      onClick={() => onClick(post)}
    >
      <div style={{
        position: 'relative',
        height: windowWidth < 768 ? '180px' : '220px',
        background: `url(${post.image}) center/cover no-repeat`,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '15px'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
          zIndex: 1
        }}></div>
        <span style={{
          position: 'relative',
          zIndex: 2,
          background: 'rgba(102, 126, 234, 0.9)',
          color: 'white',
          padding: '6px 15px',
          borderRadius: '20px',
          fontSize: windowWidth < 768 ? '10px' : '12px',
          fontWeight: '600'
        }}>
          {post.category}
        </span>
        <div style={{ display: 'flex', gap: '10px', zIndex: 2, position: 'relative' }}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onLike(post.id);
            }}
            style={{
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '50%',
              width: windowWidth < 768 ? '35px' : '40px',
              height: windowWidth < 768 ? '35px' : '40px',
              cursor: 'pointer',
              fontSize: windowWidth < 768 ? '14px' : '16px',
              color: liked ? '#ff4757' : '#666',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onBookmark(post.id);
            }}
            style={{
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '50%',
              width: windowWidth < 768 ? '35px' : '40px',
              height: windowWidth < 768 ? '35px' : '40px',
              cursor: 'pointer',
              fontSize: windowWidth < 768 ? '14px' : '16px',
              color: bookmarked ? '#ffd700' : '#666',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>
      
      <div style={{ padding: windowWidth < 768 ? '15px' : '20px' }}>
        <h3 style={{ 
          margin: '0 0 12px 0', 
          color: '#333',
          fontSize: windowWidth < 768 ? '1.2rem' : '1.4rem',
          lineHeight: '1.4',
          minHeight: windowWidth < 768 ? '60px' : '68px'
        }}>
          {post.title}
        </h3>
        
        <p style={{
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '15px',
          fontSize: windowWidth < 768 ? '13px' : '14px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {post.content.replace(/[•\-].*/g, '').substring(0, windowWidth < 768 ? 80 : 120)}...
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: windowWidth < 768 ? '12px' : '13px',
          color: '#888',
          marginBottom: '15px',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaUser size={windowWidth < 768 ? 12 : 14} /> {post.author.split(' - ')[0]}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaCalendar size={windowWidth < 768 ? 12 : 14} /> {post.date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaClock size={windowWidth < 768 ? 12 : 14} /> {post.readTime}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaEye size={windowWidth < 768 ? 12 : 14} /> {viewCount}
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: windowWidth < 480 ? 'column' : 'row',
          gap: windowWidth < 480 ? '10px' : '0'
        }}>
          <button style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: windowWidth < 768 ? '8px 20px' : '10px 25px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: windowWidth < 768 ? '13px' : '14px',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            flex: windowWidth < 480 ? 'none' : 1,
            marginRight: windowWidth < 480 ? '0' : '10px',
            width: windowWidth < 480 ? '100%' : 'auto'
          }}>
            Read More
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#666',
            fontSize: windowWidth < 768 ? '12px' : '13px'
          }}>
            <span>❤️ {post.likes + (liked ? 1 : 0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Post Detail Component - Updated for responsiveness
const BlogPostDetail = ({ 
  post, 
  onBack, 
  onLike, 
  onBookmark,
  onShare, 
  onDonate, 
  onVolunteer, 
  comments, 
  onCommentSubmit, 
  onCommentLike,
  newComment, 
  setNewComment,
  liked,
  bookmarked,
  viewCount,
  relatedPosts,
  onPostClick,
  windowWidth
}) => {
  return (
    <div style={{ width: '100%' }}>
      <button 
        onClick={onBack}
        style={{
          background: 'none',
          border: '2px solid #667eea',
          color: '#667eea',
          padding: windowWidth < 768 ? '10px 20px' : '12px 25px',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: windowWidth < 768 ? '14px' : '15px',
          fontWeight: '600',
          marginBottom: '30px',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <FaArrowLeft /> Back to All Posts
      </button>
      
      <article style={{
        background: 'white',
        borderRadius: '15px',
        padding: windowWidth < 768 ? '20px' : '40px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <header style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '15px',
            flexDirection: windowWidth < 768 ? 'column' : 'row'
          }}>
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: windowWidth < 768 ? '1.8rem' : windowWidth < 1024 ? '2.2rem' : '2.5rem',
                color: '#333',
                marginBottom: '15px',
                lineHeight: '1.3',
                fontWeight: '700'
              }}>
                {post.title}
              </h1>
              
              <div style={{
                display: 'flex',
                gap: windowWidth < 768 ? '10px' : '20px',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: windowWidth < 768 ? '13px' : '15px',
                color: '#666',
                marginBottom: '20px'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600' }}>
                  <FaUser size={windowWidth < 768 ? 14 : 16} /> {post.author}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FaCalendar size={windowWidth < 768 ? 14 : 16} /> {post.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FaClock size={windowWidth < 768 ? 14 : 16} /> {post.readTime}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FaEye size={windowWidth < 768 ? 14 : 16} /> {viewCount} views
                </span>
                <span style={{
                  background: '#667eea',
                  color: 'white',
                  padding: '6px 15px',
                  borderRadius: '20px',
                  fontSize: windowWidth < 768 ? '11px' : '13px',
                  fontWeight: '600'
                }}>
                  {post.category}
                </span>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '10px', 
              flexWrap: 'wrap',
              width: windowWidth < 768 ? '100%' : 'auto'
            }}>
              <button 
                onClick={() => onLike(post.id)}
                style={{
                  background: liked ? '#ff4757' : '#f8f9fa',
                  color: liked ? 'white' : '#666',
                  border: `2px solid ${liked ? '#ff4757' : '#dee2e6'}`,
                  padding: windowWidth < 768 ? '10px 15px' : '12px 20px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: windowWidth < 768 ? '13px' : '14px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: windowWidth < 768 ? '100px' : '120px',
                  justifyContent: 'center',
                  flex: windowWidth < 768 ? 1 : 'none'
                }}
              >
                {liked ? <FaHeart /> : <FaRegHeart />} 
                {liked ? 'Liked' : 'Like'} ({post.likes + (liked ? 1 : 0)})
              </button>
              
              <button 
                onClick={() => onBookmark(post.id)}
                style={{
                  background: bookmarked ? '#ffd700' : '#f8f9fa',
                  color: bookmarked ? 'white' : '#666',
                  border: `2px solid ${bookmarked ? '#ffd700' : '#dee2e6'}`,
                  padding: windowWidth < 768 ? '10px 15px' : '12px 20px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: windowWidth < 768 ? '13px' : '14px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  justifyContent: 'center',
                  flex: windowWidth < 768 ? 1 : 'none'
                }}
              >
                {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
                {bookmarked ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>
        </header>

        <div style={{
          height: windowWidth < 768 ? '250px' : windowWidth < 1024 ? '350px' : '400px',
          background: `url(${post.image}) center/cover no-repeat`,
          borderRadius: '12px',
          marginBottom: '30px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '8px 15px',
              borderRadius: '25px',
              fontSize: windowWidth < 768 ? '12px' : '14px'
            }}>
              📸 {post.category} Event
            </div>
          </div>
        </div>

        <div style={{ 
          lineHeight: '1.8', 
          color: '#444',
          fontSize: windowWidth < 768 ? '15px' : '16px',
          marginBottom: '40px'
        }}>
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} style={{ 
              marginBottom: paragraph.trim().startsWith('•') ? '8px' : '20px',
              paddingLeft: paragraph.trim().startsWith('•') ? '20px' : '0'
            }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '15px',
          margin: '40px 0',
          flexWrap: 'wrap',
          flexDirection: windowWidth < 480 ? 'column' : 'row'
        }}>
          <button 
            onClick={onDonate}
            style={{
              background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
              color: 'white',
              border: 'none',
              padding: windowWidth < 768 ? '12px 20px' : '15px 25px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: windowWidth < 768 ? '14px' : '15px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              flex: windowWidth < 480 ? 'none' : 1,
              minWidth: windowWidth < 480 ? '100%' : '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            💝 Donate to This Cause
          </button>
          <button 
            onClick={onVolunteer}
            style={{
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
              color: 'white',
              border: 'none',
              padding: windowWidth < 768 ? '12px 20px' : '15px 25px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: windowWidth < 768 ? '14px' : '15px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              flex: windowWidth < 480 ? 'none' : 1,
              minWidth: windowWidth < 480 ? '100%' : '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            👥 Volunteer for This Program
          </button>
        </div>

        {/* Share Section */}
        <div style={{
          marginTop: '40px',
          paddingTop: '30px',
          borderTop: '2px solid #e9ecef'
        }}>
          <h3 style={{ 
            marginBottom: '20px', 
            color: '#333',
            fontSize: windowWidth < 768 ? '1.2rem' : '1.4rem'
          }}>
            Share this post:
          </h3>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            flexWrap: 'wrap',
            justifyContent: windowWidth < 480 ? 'center' : 'flex-start'
          }}>
            {[
              { platform: 'facebook', label: 'Facebook', color: '#3b5998', icon: <FaFacebookF /> },
              { platform: 'twitter', label: 'Twitter', color: '#1da1f2', icon: <FaTwitter /> },
              { platform: 'whatsapp', label: 'WhatsApp', color: '#25d366', icon: <FaWhatsapp /> },
              { platform: 'linkedin', label: 'LinkedIn', color: '#0077b5', icon: <FaLinkedinIn /> }
            ].map(({ platform, label, color, icon }) => (
              <button
                key={platform}
                onClick={() => onShare(platform, post)}
                style={{
                  background: color,
                  color: 'white',
                  border: 'none',
                  padding: windowWidth < 768 ? '10px 15px' : '12px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: windowWidth < 768 ? '13px' : '14px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: windowWidth < 480 ? '140px' : '140px',
                  flex: windowWidth < 480 ? 1 : 'none'
                }}
              >
                {icon} {windowWidth < 480 ? '' : label}
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: windowWidth < 768 ? '20px' : '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginBottom: '30px'
        }}>
          <h2 style={{ 
            marginBottom: '25px', 
            color: '#333',
            borderBottom: '3px solid #667eea',
            paddingBottom: '10px',
            fontSize: windowWidth < 768 ? '1.4rem' : '1.6rem'
          }}>
            📚 Related Posts
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: windowWidth < 768 ? '1fr' : windowWidth < 1024 ? 'repeat(auto-fit, minmax(250px, 1fr))' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {relatedPosts.map(relatedPost => (
              <div 
                key={relatedPost.id}
                style={{
                  background: '#f8f9fa',
                  borderRadius: '10px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: '1px solid #e9ecef'
                }}
                onMouseEnter={(e) => {
                  if (windowWidth > 768) {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.background = '#667eea';
                    e.currentTarget.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (windowWidth > 768) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#f8f9fa';
                    e.currentTarget.style.color = 'inherit';
                  }
                }}
                onClick={() => onPostClick(relatedPost)}
              >
                <h4 style={{ 
                  margin: '0 0 10px 0', 
                  fontSize: windowWidth < 768 ? '14px' : '16px', 
                  lineHeight: '1.4' 
                }}>
                  {relatedPost.title}
                </h4>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: windowWidth < 768 ? '11px' : '12px', 
                  opacity: '0.7' 
                }}>
                  <span>{relatedPost.date}</span>
                  <span>{relatedPost.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comments Section */}
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: windowWidth < 768 ? '20px' : '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ 
          marginBottom: '25px', 
          color: '#333',
          borderBottom: '3px solid #667eea',
          paddingBottom: '10px',
          fontSize: windowWidth < 768 ? '1.4rem' : '1.6rem'
        }}>
          💬 Comments ({comments.length})
        </h2>
        
        {/* Comment Form */}
        <form onSubmit={(e) => onCommentSubmit(post.id, e)} style={{ marginBottom: '30px' }}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '8px',
              border: '2px solid #e9ecef',
              fontSize: windowWidth < 768 ? '14px' : '15px',
              minHeight: '100px',
              resize: 'vertical',
              marginBottom: '15px',
              fontFamily: 'inherit'
            }}
          />
          <button 
            type="submit"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: windowWidth < 768 ? '10px 25px' : '12px 30px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: windowWidth < 768 ? '14px' : '15px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              width: windowWidth < 480 ? '100%' : 'auto'
            }}
          >
            Post Comment
          </button>
        </form>

        {/* Comments List */}
        <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
          {comments.map(comment => (
            <div key={comment.id} style={{
              background: '#f8f9fa',
              padding: windowWidth < 768 ? '15px' : '20px',
              borderRadius: '10px',
              marginBottom: '15px',
              border: '1px solid #e9ecef'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '10px',
                flexDirection: windowWidth < 480 ? 'column' : 'row',
                gap: windowWidth < 480 ? '5px' : '0'
              }}>
                <strong style={{ color: '#333', fontSize: windowWidth < 768 ? '14px' : '16px' }}>{comment.user}</strong>
                <span style={{ 
                  color: '#666', 
                  fontSize: windowWidth < 768 ? '12px' : '13px' 
                }}>
                  {comment.date}
                </span>
              </div>
              <p style={{ 
                margin: '0 0 10px 0', 
                color: '#555', 
                lineHeight: '1.6',
                fontSize: windowWidth < 768 ? '14px' : '15px'
              }}>
                {comment.text}
              </p>
              <button 
                onClick={() => onCommentLike(post.id, comment.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#666',
                  cursor: 'pointer',
                  fontSize: windowWidth < 768 ? '11px' : '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <FaRegHeart size={windowWidth < 768 ? 12 : 14} /> Like ({comment.likes || 0})
              </button>
            </div>
          ))}
          
          {comments.length === 0 && (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px', 
              color: '#666',
              background: '#f8f9fa',
              borderRadius: '10px'
            }}>
              <p style={{ margin: 0, fontSize: '16px' }}>No comments yet. Be the first to comment!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;