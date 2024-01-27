import React, { useEffect, useState } from 'react';
import '../Shimmer.css'; // You can create a CSS file for styling

const Shimmer = () => {


  return (
    <div className="shimmer-container ">
      <div className="shimmer res-card"></div>
      <div className="shimmer res-card"></div>
      <div className="shimmer res-card"></div>
      <div className="shimmer res-card"></div>
      <div className="shimmer res-card"></div>
      <div className="shimmer res-card"></div>
      <div className="shimmer res-card"></div>
      <div className="shimmer res-card"></div>
      <div className="shimmer res-card"></div>
      {/* Repeat the shimmer cards as needed */}
    </div>
  );
};

export default Shimmer;
