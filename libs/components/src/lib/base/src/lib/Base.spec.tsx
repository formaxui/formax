import { render } from '@testing-library/react';

import ComponentsSrcLibBase from './ComponentsSrcLibBase';

describe('ComponentsSrcLibBase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsSrcLibBase />);
    expect(baseElement).toBeTruthy();
  });
});
