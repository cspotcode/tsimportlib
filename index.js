exports.dynamicImport = importEsm;
exports.importEsm = importEsm;

function importEsm(specifier, module) {
    return import(import.meta.resolve(specifier, module.filename));
}