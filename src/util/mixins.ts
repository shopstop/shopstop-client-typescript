export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name: any) => {
            if (name !== 'constructor') {
                derivedCtor.prototype[`${name}`] = baseCtor.prototype[`${name}`];
            }
        });
    });
}
