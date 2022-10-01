import {render, screen} from '@testing-library/react';
import Homeindex from "./pages/homeindex";

test('renders learn react link', () => {
    render(<Homeindex/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
