import React from 'react';

interface Props {
  value: string;
}

const Component: React.FC<Props> = ({ value }) => (
  <div>{value}</div>
);

export default Component;
