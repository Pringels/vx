import React from 'react';
import Show from '../components/Show';
import VoronoiChart from '../sandboxes/vx-voronoi/Example';
import VoronoiChartSource from '!!raw-loader!../sandboxes/vx-voronoi/Example';

export default () => {
  return (
    <Show
      events
      margin={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      component={VoronoiChart}
      title="Voronoi"
      codeSandboxDirectoryName="vx-voronoi"
    >
      {VoronoiChartSource}
    </Show>
  );
};
