import { getFullTitle, SECTIONS, SECTION_KEYS } from '../src';

describe('Utils module tests', () => {
  it('getFullTitle() function test', () => {
    const title = 'example';
    expect(getFullTitle({ title, section: SECTION_KEYS.COMPONENTS })).toBe(
      `${SECTIONS[SECTION_KEYS.COMPONENTS]}/${title}`
    );
  });
});
