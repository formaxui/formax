import { render } from '@testing-library/react';

import UtilsSrcLibStyle from './utils-src-lib-style';

describe('UtilsSrcLibStyle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilsSrcLibStyle />);
    expect(baseElement).toBeTruthy();
  });
});
