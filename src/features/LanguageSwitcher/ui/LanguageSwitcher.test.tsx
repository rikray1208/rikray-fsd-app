import { LanguageSwitcher } from "@/features/LanguageSwitcher";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation";
import { screen, fireEvent } from "@testing-library/react";

describe('LanguageSwitcher', () => {
    test('toggle check', () => {
        renderWithTranslation(<LanguageSwitcher/>)

        const element = screen.getByTestId('LanguageSwitcher')
        expect(element).toBeInTheDocument()
        expect(element).toHaveTextContent('en')
        fireEvent.click(element)
        expect(element).toHaveTextContent('ua')
    })
})