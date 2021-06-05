## Dynamic import within TS compiled to CommonJS

Node.js allows dynamic `import()` calls within CommonJS file.  TypeScript transforms `import()` into `require()` when targetting CommonJS.

This presents a problem when a `.ts` file compiled to CommonJS wants to do a truly async, dynamic import of a native ESM module.  How do we
avoid TypeScript's transformation from `import()` to `require()`?

This library implements a workaround.  Replace `import('lib')` with `dynamicImport('lib', module)`.

```typescript
import {dynamicImport} from 'tsimportlib';

async function main() {
    const dynamicallyImportedEsmModule = await dynamicImport(module, 'truly-esm-module') as typeof import('truly-esm-module');
}

async function loadPlugin(name: string) {
    // In this example, plugins may or may not be native ESM, so we use dynamic import to support both.
    const dynamicallyImportedPlugin = await dynamicImport(module, name) as MyPluginInterface;
}
```
