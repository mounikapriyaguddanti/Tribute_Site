import React from 'react';

const AwardsHonors = () => {
  return (
    <div className="awards-honors">
            <h2>Awards and Honors</h2>
            <div className="award-item">
              <div className="award-image">
                <img
                  src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/07/28/Incoming/Pictures/1373841_Wallpaper2.jpg"
                  alt="Padma Vibhushan Award"
                />
              </div>
              <div className="award-text">
                <h3>Padma Vibhushan</h3>
                <p>
                  Kalam was awarded the Padma Vibhushan, India's second-highest
                  civilian honor, in 1990 for his contributions to the development
                  of India's missile program and his role in the country's civil
                  space program.
                </p>
              </div>
            </div>
            <div className="award-item reverse">
              <div className="award-image">
                <img
                  src="https://i0.wp.com/www.infoqueenbee.com/wp-content/uploads/2015/07/kalam10.png?resize=320%2C314"
                  alt="Bharat Ratna Award"
                />
              </div>
              <div className="award-text">
                <h3>Bharat Ratna</h3>
                <p>
                  In 1997, Kalam was awarded India's highest civilian honor, the
                  Bharat Ratna, in recognition of his contributions to the
                  scientific development of India.
                </p>
              </div>
            </div>
          </div>
     );
    };
    
export default AwardsHonors;