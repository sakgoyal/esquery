import { assert } from 'chai';
import esquery from '../esquery';
import conditional from './fixtures/conditional';

describe('Compound query', function () {

    it('two attributes', function () {
        const matches = esquery(conditional, '[left.name="x"][right.value=1]');
        assert.includeMembers(matches, [
            conditional.body[0].test
        ]);
    });

    it('type and pseudo', function () {
        const matches = esquery(conditional, '[left.name="x"]:matches(*)');
        assert.includeMembers(matches, [
            conditional.body[0].test
        ]);
    });
});
