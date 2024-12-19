import { toUpperCase } from './util';

describe('toUpperCase 테스트 입니다.', () => {
  it('소문자를 넣으면 대문자를 return 합니다.', () => {
    //실제 테스트 로직
    //AAA (Arrange, Act, Assert)

    //Arrange
    const input = 'hello';
    const output = 'HELLO';

    //Act
    const actual = toUpperCase(input);

    expect(actual).toBe(output);
  });
});
