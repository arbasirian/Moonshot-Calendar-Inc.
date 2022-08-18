import React, { useEffect } from 'react';
import { MapView } from 'components';
import { getLunchList } from 'common/services/lunch';

function App() {
  useEffect(() => {
    getLunchList().then((data) => {
      console.log('data', data.results);
    });
  }, []);
  return (
    <div className="App">
      <MapView />
    </div>
  );
}

export default App;
