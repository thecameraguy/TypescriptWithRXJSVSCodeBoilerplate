import 'jasmine';
import { Subject } from 'rxjs';

describe('index.ts', () => {
    beforeEach(() => {
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('should evaluate to true', () => {
        const var1: string = 'bleep';
        const var2: string = 'bleep';
        expect(true).toEqual(true);
        expect(var1).toEqual('bleep')
        expect(var2).toEqual(var2);
        expect(var2).toBe(var2);
    });
});