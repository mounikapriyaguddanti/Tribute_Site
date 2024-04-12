
import React from 'react';

const BooksPublications = () => {
  return (
    <div className="books-publications">
            <h2>Books and Publications</h2>
            <div className="book-item">
              <div className="book-image">
                <img
                  src="https://i.ytimg.com/vi/t5b20oLaIaw/maxresdefault.jpg"
                  alt="Wings of Fire - Autobiography"
                />
              </div>
              <div className="book-text">
                <h3>Wings of Fire: An Autobiography</h3>
                <p>
                  Kalam's autobiography "Wings of Fire" is a bestselling book that
                  chronicles his early life, his journey to becoming a scientist,
                  and his contributions to India's space and missile programs. The
                  book has been widely praised for its inspirational and
                  educational content.
                </p>
              </div>
            </div>
            <div className="book-item reverse">
              <div className="book-image">
                <img
                  src="https://1.bp.blogspot.com/-IlT1SCxymYc/Xzj-2AjwTuI/AAAAAAAABJ4/uU2MMr-HbsYZ8_eX-CsQK6R8oQcd0baYACNcBGAsYHQ/w1200-h630-p-k-no-nu/IM.png"
                  alt="Ignited Minds - Book"
                />
              </div>
              <div className="book-text">
                <h3>Ignited Minds: Unleashing the Power Within India</h3>
                <p>
                  In this book, Kalam shares his vision for transforming India into
                  a developed nation by 2020. He emphasizes the importance of
                  education, innovation, and the empowerment of the youth in
                  achieving this goal.
                </p>
              </div>
            </div>
          </div>
     );
    };
    
export default BooksPublications;  