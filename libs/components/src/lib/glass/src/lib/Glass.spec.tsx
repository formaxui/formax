import { render } from '@testing-library/react';

import ComponentsSrcLibGlass from './ComponentsSrcLibGlass';

describe('ComponentsSrcLibGlass', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsSrcLibGlass />);
    expect(baseElement).toBeTruthy();
  });
});
