import React, { FC, useEffect, useState } from 'react';

import { LunchModel } from 'common/models';
import { getLunchList } from 'common/services/lunch';

import { MapView, Spinner } from 'components';

const LunchesListComponent: FC = () => {
  const [lunchListInfo, setLunchListInfo] = useState<LunchModel | undefined>();
  const [loading, setLoading] = useState(false);
  // Get base List
  useEffect(() => {
    if (lunchListInfo === undefined) {
      setLoading(true);
      getLunchList({
        include_suborbital: true,
        is_crewed: false,
        related: false,
      })
        .then((data) => {
          setLunchListInfo(data);
        })
        .finally(() => setLoading(false));
    }
  }, [lunchListInfo]);

  if (loading) return <Spinner width="100%" height="100vh" />;

  return (
    <div>
      <MapView />
    </div>
  );
};

export default LunchesListComponent;
