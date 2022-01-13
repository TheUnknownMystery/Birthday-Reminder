import React from 'react';

const SkeletonCard = () => (
  <div className="Card">
    <img
      src={'https://via.placeholder.com/150'}
      alt="skeleton"
      className="Card__Image"
      draggable={false}
    />
    <div>
      <p className="Card__Name">{`Not Found`}</p>
      <p className="Card__Age">0 years</p>
    </div>
  </div>
);

export default SkeletonCard;
