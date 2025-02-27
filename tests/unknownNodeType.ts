import { assert } from 'chai';
import esquery from '../esquery';
import AST from './fixtures/unknownNodeTypeAST';

describe('Unknown node type', function () {
    it('does not throw', function () {
        try {
            esquery(AST, '*');
        } catch (e) {
            assert.fail();
        }
    });
});
