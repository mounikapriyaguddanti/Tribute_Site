import React, { useState } from 'react';

const Quotes = () => {
  const [openQuoteIndex, setOpenQuoteIndex] = useState(-1);

  const toggleQuote = (index) => {
    setOpenQuoteIndex(index === openQuoteIndex ? -1 : index);
  };

  return (
    <div className="quotes">
      <h2>Inspiring Quotes</h2>
      <div
        className={`quote ${openQuoteIndex === 0 ? 'open' : ''}`}
        onClick={() => toggleQuote(0)}
      >
        <div className="quote-content">
          <blockquote>
            <p>
              "Dream is not that which you see while sleeping, it is something
              that does not let you sleep."
            </p>
            <cite>- Dr. A.P.J. Abdul Kalam</cite>
          </blockquote>
        </div>
        {openQuoteIndex !== 0 && (
          <div className="quote-close">
            <span role="img" aria-label="light bulb">
              💡
            </span>
            <p>Ignite your dreams! click me</p>
          </div>
        )}
      </div>
      <div
        className={`quote-container ${openQuoteIndex === 1 ? 'open' : ''}`}
        onClick={() => toggleQuote(1)}
      >
        <div className="quote-content">
          <blockquote>
            <p>"You have to dream before your dreams can come true."</p>
            <cite>- Dr. A.P.J. Abdul Kalam</cite>
          </blockquote>
        </div>
        {openQuoteIndex !== 1 && (
          <div className="quote-close">
            <span role="img" aria-label="light bulb">
              💡
            </span>
            <p>Ignite your dreams!</p>
          </div>
        )}
      </div>
      <div
        className={`quote-container ${openQuoteIndex === 2 ? 'open' : ''}`}
        onClick={() => toggleQuote(2)}
      >
        <div className="quote-content">
          <blockquote>
            <p>
              "If you fail, never give up because F.A.I.L. means 'First Attempt
              In Learning'."
            </p>
            <cite>- Dr. A.P.J. Abdul Kalam</cite>
          </blockquote>
        </div>
        {openQuoteIndex !== 2 && (
          <div className="quote-close">
            <span role="img" aria-label="light bulb">
              💡
            </span>
            <p>Ignite your dreams!</p>
          </div>
        )}
      </div>
      <div
        className={`quote-container ${openQuoteIndex === 3 ? 'open' : ''}`}
        onClick={() => toggleQuote(3)}
      >
        <div className="quote-content">
          <blockquote>
            <p>
              "The best way to find yourself is to lose yourself in the service
              of others."
            </p>
            <cite>- Dr. A.P.J. Abdul Kalam</cite>
          </blockquote>
        </div>
        {openQuoteIndex !== 3 && (
          <div className="quote-close">
            <span role="img" aria-label="light bulb">
              💡
            </span>
            <p>Ignite your dreams! </p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotes;