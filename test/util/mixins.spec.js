import { applyMixins } from '../../src/util/mixins';

class A {
    test() {
        return 'A';
    }
}

class B {
    test() {
        return 'B';
    }
}

describe('util.mixins', () => {
    test('applyMixins merges typescript class behavior together', () => {
        const b = new B();

        let returnB = b.test();
        expect(returnB).toEqual('B');

        applyMixins(B, [A]);

        returnB = b.test();
        expect(returnB).toEqual('A');
    });
});
