import { classNames } from '@/shared/lib/classNames/classNames'

describe('shared/lib/classNames', () => {
    test('cls argument', () => {
        expect(classNames('TestArg')).toBe('TestArg');
    });

    test('with mode', () => {
        expect(classNames('TestArg', {"light": true})).toBe("TestArg light");
    });

    test('with mode false', () => {
        expect(classNames('TestArg', {"light": false})).toBe("TestArg");
    });

    test('with mode and additional', () => {
        expect(classNames('TestArg', {"light": true}, ['additional'])).toBe("TestArg light additional");
    });

})