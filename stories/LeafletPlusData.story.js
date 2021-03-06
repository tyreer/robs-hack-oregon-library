import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { LeafletPlusData } from '../src';
import { colors } from './shared';
import { url } from './mapBox';

const displayName = 'LeafletPlusData';
const title = 'Leaflet with data on and below map';
const description = 'react-leaflet map of Portland with GeoJSON neighborhood data on map and derived data beneath map displayed on click';

const position = [45.541, -122.63];
const zoom = 11;
const maxzoom = 10;

// This base can be adjusted to scale up or down the chart and legend
const proportionBase = 200;

// These multipliers can be adjusted to modify the individual
const chartProportions = {
  chartWidth: proportionBase * 1.9,
  chartHeight: proportionBase * 0.6,
  iconSize: proportionBase * 0.075,
  pieInnerRadius: proportionBase * 0.1,
  pieOuterRadius: proportionBase * 0.3,
};

// Styles here based on src/Pie/Pie.css
const legendStyles = {
  fontFamily: 'Raleway',
  fontSize: proportionBase * 0.08,
  fontWeight: 300,
  left: '50%',
  top: '0%',
};

const demoCode = () => (
  <LeafletPlusData
    position={position}
    zoom={zoom}
    maxzoom={maxzoom}
    chartProportions={chartProportions}
    colors={colors}
    legendStyles={legendStyles}
    url={url || 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'}
  />
);

const propDocs = { inline: true, propTables: [LeafletPlusData] };

export default () => storiesOf(displayName, module)
  .addWithInfo(
    title,
    description,
    demoCode,
    propDocs,
  );
