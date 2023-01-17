import { titleCase } from '../src';

test('converts text to title case', () => {
    expect(titleCase('hello world')).toBe('Hello World');
});
