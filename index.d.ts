export interface MinimalNodeModule {
    filename: string;
}

/**
 * Asynchronously import a native ESM module from within a `.ts` file compiled to CommonJS.
 * 
 * Usage:
 * 
 * ```
 * await dynamicImport(module, 'native-esm-module');
 * ```
 * 
 * @param module node `module` object for the importing file
 */
export function dynamicImport(importSpecifier: string, module: MinimalNodeModule): Promise<any>;

export {dynamicImport as importEsm};
