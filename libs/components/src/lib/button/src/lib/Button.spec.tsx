import { render } from '@testing-library/react';

import ComponentsSrcLibButton from './ComponentsSrcLibButton';

describe('ComponentsSrcLibButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsSrcLibButton />);
    expect(baseElement).toBeTruthy();
  });
});
