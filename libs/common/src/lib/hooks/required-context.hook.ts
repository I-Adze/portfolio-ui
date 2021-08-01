import { useContext } from 'react';

export function useRequiredContext<T>(
  context: React.Context<T | undefined>,
  name = 'dependency'
): T {
  const dep = useContext(context);
  if (dep === undefined) {
    throw new Error(`No context value provided for ${context.displayName ?? name}`);
  }
  return dep;
}
