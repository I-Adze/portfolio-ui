import React from 'react';
export class ChildService {
  public test(): string {
    return 'child';
  }
}

export class TestService {
  constructor(private child: ChildService) {}
  public test(): string {
    return this.child.test();
  }
}

export const TestServiceContext = React.createContext<TestService | undefined>(undefined);
TestServiceContext.displayName = 'TestService';
