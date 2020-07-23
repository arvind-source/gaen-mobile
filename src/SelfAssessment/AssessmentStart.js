import React from "react"
import { useTranslation } from "react-i18next"

import { InfoText } from "./InfoText"
import { Button } from "./Button"
import { AssessmentLayout } from "./AssessmentLayout"

import { Colors } from "../styles"
import { Icons, Images } from "../assets"

/** @type {React.FunctionComponent<{}>} */
export const AssessmentStart = ({ navigation }) => {
  let { t } = useTranslation()

  const handleButtonPress = () => navigation.push("Agreement")

  return (
    <AssessmentLayout
      backgroundColor={Colors.surveyPrimaryBackground}
      backgroundImage={Images.EmptyPathBackground}
      icon={Icons.SelfAssessment}
      footer={
        <Button onPress={handleButtonPress} title={t("assessment.start_cta")} />
      }
    >
      <InfoText
        title={t("assessment.start_title")}
        description={t("assessment.start_description")}
      />
    </AssessmentLayout>
  )
}
