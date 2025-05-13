import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TopPickImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageUrls = images.map(img => img.image);

  return (
    <>
      <div className="d-flex flex-lg-row flex-column" style={{ gap: 12 }}>
        <div className="col-lg-6">
          {imageUrls[0] && (
            <img
              src={imageUrls[0]}
              alt=""
              className="_main_image_4xybo_1"
              width="100%"
              onClick={() => {
                setPhotoIndex(0);
                setIsOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            />
          )}
        </div>
        <div>
          <div className="row gy-2">
            {imageUrls.slice(1, 5).map((url, idx) => (
              <div className="col-md-6 pe-lg-0" key={idx}>
                <img
                  src={url}
                  alt=""
                  className="_sub_image_4xybo_8"
                  onClick={() => {
                    setPhotoIndex(idx + 1);
                    setIsOpen(true);
                  }}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="viewAllBtn">
        <button onClick={() => {
          setPhotoIndex(0);
          setIsOpen(true);
        }}>
          View all photos
        </button>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={imageUrls[photoIndex]}
          nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
          prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageUrls.length)
          }
        />
      )}
    </>
  );
};

export default TopPickImageGallery;
