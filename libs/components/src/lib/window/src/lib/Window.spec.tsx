import { render } from '@testing-library/react';

import ComponentsSrcLibWindow from './ComponentsSrcLibWindow';

describe('ComponentsSrcLibWindow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsSrcLibWindow />);
    expect(baseElement).toBeTruthy();
  });
});
