// export interface Type<T> extends Function {
//   new (...args: any[]): T;
// }

// export function useDi<T>(type: Type<T>): T {
//   return resolve(type);
// }

// export function resolve<T>(type: Type<T>) {
//   const deps = Reflect.getMetadata('design:paramtypes', type);
//   if (deps?.length) {
//     return new type(...deps.map((dep: any) => resolve(dep)));
//   }
//   return new type();
// }

// // eslint-disable-next-line @typescript-eslint/no-empty-function
// export function Injectable(one: any) {}
