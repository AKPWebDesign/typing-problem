# parcel typing problem

running `yarn build` will run `parcel build .`, which should build the module within this repo, including typescript types
because `package.json` contains `"types": "dist/index.d.ts"`. The types built by Parcel seem to be incorrect though, as
they only contain the following:
```typescript
export default Component;

//# sourceMappingURL=index.d.ts.map
```

Compared with the output from running `yarn tsc-types` (`tsc --emitDeclarationOnly`):
```typescript
import React from 'react';
interface Props {
    value: string;
}
declare const Component: React.FC<Props>;
export default Component;
```
