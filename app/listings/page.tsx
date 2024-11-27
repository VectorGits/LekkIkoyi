import React, { Suspense } from 'react';
import Listings from './Listings';

const ListingsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Listings />
    </Suspense>
  );
};

export default ListingsPage;
