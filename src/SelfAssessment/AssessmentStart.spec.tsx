import React from "react"

import { render, fireEvent } from "@testing-library/react-native"
import { I18nextProvider } from "react-i18next"
import { useNavigation } from "@react-navigation/native"

import i18n from "../locales/languages"
import AssessmentStart from "./AssessmentStart"

const navigationSpy = jest.fn()
jest.mock("@react-navigation/native")
;(useNavigation as jest.Mock).mockReturnValue({ navigate: navigationSpy })

describe("AssessmentStart", () => {
  it("displays the info for the assesment start", () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <AssessmentStart />
      </I18nextProvider>,
    )

    expect(
      getByText(
        "Answer questions about your symptoms and medical history to learn what to do next about COVID-19",
      ),
    ).toBeDefined()
    expect(
      getByText(
        "Your information is private, anonymized, and encrypted. No data leaves your device unless you give permission.",
      ),
    ).toBeDefined()
  })

  it("navigates to the agreement screen when tapped on the cta", () => {
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <AssessmentStart />
      </I18nextProvider>,
    )

    fireEvent.press(getByText("Start"))

    expect(navigationSpy).toHaveBeenCalledWith("Agreement")
  })
})
