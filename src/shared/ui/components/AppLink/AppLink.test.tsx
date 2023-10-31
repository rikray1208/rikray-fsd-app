import {render, screen} from "@testing-library/react";
import {AppLink} from "./AppLink";
import {BrowserRouter} from "react-router-dom";

describe('AppLink', () => {
    test('Test with arg TO', () => {
        render(<AppLink to={'/TEST_ROUTE'} children={'TEST_TEXT'}/>, {wrapper: BrowserRouter})
        const element = screen.getByText('TEST_TEXT')

        expect(element).toBeInTheDocument()
        expect(element).toHaveAttribute('href', '/TEST_ROUTE')
    })
})