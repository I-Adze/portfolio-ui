import { useRequiredContext } from '@adze/common';
import { useContext } from 'react';
import { TestServiceContext } from './test.service';

export const Child = () => {
  const service = useRequiredContext(TestServiceContext);
  return <div>{service.test()}</div>;
};

export const Sibling = () => {
  const test = useContext(TestServiceContext);
  return <div>{test?.test()}</div>;
};
