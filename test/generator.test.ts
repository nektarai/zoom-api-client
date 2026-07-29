import { escapeJsDoc, sanitizeIdentifier } from '../scripts/lib/naming-utils';

describe('escapeJsDoc', () => {
    test('leaves ordinary descriptions untouched', () => {
        expect(escapeJsDoc('The meeting topic.')).toBe('The meeting topic.');
    });

    test('escapes a comment terminator so the block cannot close early', () => {
        expect(escapeJsDoc('Pass */ here')).toBe('Pass *\\/ here');
    });

    test('escapes every occurrence', () => {
        expect(escapeJsDoc('a */ b */ c')).toBe('a *\\/ b *\\/ c');
    });

    test('escaped output cannot terminate a JSDoc block', () => {
        const generated = `/** ${escapeJsDoc('see */ note')} */`;
        // The only `*/` in the emitted line must be the intentional closer.
        expect(generated.match(/\*\//g)).toHaveLength(1);
        expect(generated.endsWith('*/')).toBe(true);
    });
});

describe('sanitizeIdentifier', () => {
    test('is stable for names already valid', () => {
        expect(sanitizeIdentifier('listMeetings')).toBe('listMeetings');
    });

    test('collapses invalid characters', () => {
        expect(sanitizeIdentifier('report/users-meetings')).toBe(
            'report_users_meetings',
        );
    });
});
