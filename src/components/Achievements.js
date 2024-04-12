import React from 'react';
const Achievements = () => {
    return (
        <div className="achievements">
            <h2>Achievements and Legacy</h2>
            <div className="achievement-item">
              <div className="achievement-image">
                <img
                  src="https://cdn.zeebiz.com/hindi/sites/default/files/2021/07/27/60202-indias-first-satellite-launch-vehicle-slv.jpg"
                  alt="SLV-3 Satellite Launch Vehicle"
                />
              </div>
              <div className="achievement-text">
                <h3>Pioneering the SLV-3 Satellite Launch Vehicle</h3>
                <p>
                  Kalam played a crucial role in the development of India's first
                  satellite launch vehicle, SLV-3, which successfully launched
                  the Rohini satellite into Earth's orbit in 1980. This
                  achievement marked a significant milestone in India's space
                  program and paved the way for future advancements.
                </p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-image">
                <img
                  src="https://ssbcrack.com/wp-content/uploads/2015/07/Abdul-Kalam.jpg"
                  alt="Agni Missile"
                />
              </div>
              <div className="achievement-text">
                <h3>Advancing India's Missile Technology</h3>
                <p>
                  Kalam served as the Project Director for India's first indigenous
                  Satellite Launch Vehicle (SLV-III) and played a significant role
                  in establishing India's self-reliance in missile technology. He
                  was instrumental in the development of the Agni and Prithvi
                  missiles, which became the backbone of India's missile program.
                </p>
              </div>
            </div>
            <div className="achievement-item">
              <div className="achievement-image">
                <img
                  src="https://www.mumbailive.com/images/media/images/images_1571123221547_abdul_kalam.jpg?bg=c39474&crop=620%2C348.0701754385965%2C0%2Cnull&fit=crop&fitToScale=w%2C1368%2C768&h=768&height=400&w=1368&width=620"
                  alt="Dr. A.P.J. Abdul Kalam as President"
                />
              </div>
              <div className="achievement-text">
                <h3>Serving as the 11th President of India</h3>
                <p>
                  Kalam was appointed as the 11th President of India, serving from
                  2002 to 2007. He was known for his humble demeanor, his
                  dedication to public service, and his unwavering commitment to
                  the development of India. As President, he worked tirelessly to
                  promote science, technology, and education across the country.
                </p>
              </div>
            </div>
          </div>
    );
};

export default Achievements;