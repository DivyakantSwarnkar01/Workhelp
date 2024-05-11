import React, { Suspense } from 'react';

const LazyRGHS = React.lazy(() => import('./rghs.jsx'));

const LazyRGHSWrapper = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyRGHS />
  </Suspense>
);

export default LazyRGHSWrapper;
