import { render } from '@testing-library/react';

import ComponentsSrcLibTitlebar from './ComponentsSrcLibTitlebar';

describe('ComponentsSrcLibTitlebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsSrcLibTitlebar />);
    expect(baseElement).toBeTruthy();
  });
});
