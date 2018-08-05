import React from 'react';
import Stack from '../../containers/Stack';
import DefaultTitle from '../../parts/text/defaultTitle/DefaultTitle';
import './Congrats.scss';

const Congrats = ({title, description}) => (
  <Stack className="congrats">
    <DefaultTitle title={title} />
    <span className="description">{description}</span>
  </Stack>
);

export default Congrats;
