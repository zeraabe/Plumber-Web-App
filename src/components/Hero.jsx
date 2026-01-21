import React from 'react';
import { FaAlignRight, FaCalendarCheck, FaTruck, FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const features = [
    {
      icon: <FaCalendarCheck />,
      title: 'Book Online',
      description: 'Easy online scheduling with instant confirmation'
    },
    {
      icon: <FaTruck />,
      title: 'We Arrive',
      description: 'Prompt service with real-time tracking'
    },
    {
      icon: <FaWrench />,
      title: 'Solve Problem',
      description: 'Expert solutions with warranty guarantee'
    }
  ];


return (
    <section className="hero py-5" style={{ 
      backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(72, 100, 179, 0.8) 80%), url("/images/2p.jpg")',
      color: 'white',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '60px'
    }}>
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center">


          <div className="col-lg-5 mb-5 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">Your Plumbing Solution is our Passion</h1>
            <p className="lead mb-4">
              We are Certified and Provide Best Plumbing Services to all, Corporate or Homes.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-5">
              <Link to="/booking" className="btn btn-warning btn-lg fw-bold">
                Book Service Now
              </Link>
              <Link to="/services" className="btn btn-light btn-lg fw-bold">
                View Services
              </Link>
            </div>
          </div>


          <div className="col-lg-7 d-flex justify-content-end">
            <img 
              src="/images/7p.png" 
              alt="Professional plumber smiling"
              className="img-fluid"
              style={{ 
                width: 'auto',
                maxHeight: '700px',
                objectFit: 'contain',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                opacity: 0.95
              }}
            />
          </div>
        </div>
      </div>
    


     
      <div className="journey-section" style={{ width: '100%', paddingTop: '40px', paddingBottom: '20px' }}>
        <div className="container-fluid px-4 px-md-5">
          <div className="journey-timeline" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            position: 'relative',
            padding: '20px'
          }}>
            {features.map((feature, index) => (
              <React.Fragment key={index}>
              

                <div className="journey-step" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 10,
                  flex: '0 0 auto'
                }}>
                  <div className="journey-circle" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: '#7c3aed',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    marginBottom: '12px'
                  }}>
                    {feature.icon}
                  </div>
                  <p style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    textAlign: 'center',
                    maxWidth: '100px'
                  }}>
                    {feature.title}
                  </p>
                </div>

               
                {index < features.length - 1 && (
                  <div className="journey-arrow" style={{
                    position: 'relative',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: '0 0 auto'
                  }}>
                    <svg width="60" height="60" viewBox="0 0 60 60" style={{ position: 'absolute' }}>
                     

                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                          <polygon points="0 0, 10 3, 0 6" fill="rgba(255, 255, 255, 0.8)" />
                        </marker>
                      </defs>
                      <path
                        d="M 10 30 Q 30 10, 50 30"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.6)"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;