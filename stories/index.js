import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook'; // eslint-disable-line
import Welcome from './Welcome';
import leafletPlusDataStory from './LeafletPlusData.story';
import rechartsPie from './RechartsPie.story';

import '../src/global.styles.css';

// stories can be added directly here
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

// or imported as functions from files then composed in the order you invoke them
leafletPlusDataStory();
rechartsPie();
