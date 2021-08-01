import * as react from 'react';
import { useRequiredContext } from './required-context.hook';

jest.mock('react');

const React = jest.requireActual('react');

describe('useRequiredContext', () => {
  it('should return defined value from useContext', () => {
    const service = {};
    jest.spyOn(react, 'useContext').mockReturnValue(service);
    expect(useRequiredContext(React.createContext('any'))).toBe(service);
  });

  it('should throw error if value from useContext is undefined', () => {
    jest.spyOn(react, 'useContext').mockReturnValue(undefined);
    expect(() => useRequiredContext(React.createContext('any'))).toThrow();
  });
});
