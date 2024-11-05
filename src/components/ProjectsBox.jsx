import React from 'react';
import pcImage1 from '../assets/picture/ears1.png'; 
import pcImage2 from '../assets/picture/mouse1.png';
import pcImage3 from '../assets/picture/mouse2.png';
import pcImage4 from '../assets/picture/mouse3.png';

const ProjectsBox = () => {
  // Inline styles
  const styles = {
    section: {
      padding: '40px 20px',
      textAlign: 'center',
    },
    topHeader: {
      marginBottom: '20px',
    },
    projectContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },
    projectBox: {
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    pcImage: {
      width: '100%',
      maxWidth: '150px',
      height: 'auto',
      marginBottom: '15px',
      borderRadius: '8px',
    },
    projectTitle: {
      fontSize: '1.2em',
      margin: '10px 0',
    },
    projectDescription: {
      fontSize: '1em',
      color: '#666',
      marginBottom: '15px',
    },
    orderButton: {
      backgroundColor: '#ff5a5f',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    orderButtonHover: {
      backgroundColor: '#e04e50',
    },
    heading: {
      color: 'black', // Set the color to black for the heading
    },
  };

  return (
    <section style={styles.section} id="projects">
      <div style={styles.topHeader}>
        <h1 style={styles.heading}>Populars</h1> {/* Apply black color to the heading */}
      </div>

      <div style={styles.projectContainer}>
        {/* Box 1 */}
        <div style={styles.projectBox}>
          <img src={pcImage1} alt="PC Model 1" style={styles.pcImage} />
          <h3 style={styles.projectTitle}>PC Model 1</h3>
          <p style={styles.projectDescription}>High-performance PC for gaming and productivity.</p>
          <button style={styles.orderButton} 
            onMouseOver={e => e.currentTarget.style.backgroundColor = styles.orderButtonHover.backgroundColor} 
            onMouseOut={e => e.currentTarget.style.backgroundColor = styles.orderButton.backgroundColor}>
            Order Now
          </button>
        </div>

        {/* Box 2 */}
        <div style={styles.projectBox}>
          <img src={pcImage2} alt="PC Model 2" style={styles.pcImage} />
          <h3 style={styles.projectTitle}>PC Model 2</h3>
          <p style={styles.projectDescription}>Customizable and powerful PC for creative professionals.</p>
          <button style={styles.orderButton} 
            onMouseOver={e => e.currentTarget.style.backgroundColor = styles.orderButtonHover.backgroundColor} 
            onMouseOut={e => e.currentTarget.style.backgroundColor = styles.orderButton.backgroundColor}>
            Order Now
          </button>
        </div>

        {/* Box 3 */}
        <div style={styles.projectBox}>
          <img src={pcImage3} alt="PC Model 3" style={styles.pcImage} />
          <h3 style={styles.projectTitle}>PC Model 3</h3>
          <p style={styles.projectDescription}>Energy-efficient PC for daily tasks and entertainment.</p>
          <button style={styles.orderButton} 
            onMouseOver={e => e.currentTarget.style.backgroundColor = styles.orderButtonHover.backgroundColor} 
            onMouseOut={e => e.currentTarget.style.backgroundColor = styles.orderButton.backgroundColor}>
            Order Now
          </button>
        </div>

        {/* Box 4 */}
        <div style={styles.projectBox}>
          <img src={pcImage4} alt="PC Model 4" style={styles.pcImage} />
          <h3 style={styles.projectTitle}>PC Model 4</h3>
          <p style={styles.projectDescription}>High-speed processing for complex and heavy workloads.</p>
          <button style={styles.orderButton} 
            onMouseOver={e => e.currentTarget.style.backgroundColor = styles.orderButtonHover.backgroundColor} 
            onMouseOut={e => e.currentTarget.style.backgroundColor = styles.orderButton.backgroundColor}>
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
