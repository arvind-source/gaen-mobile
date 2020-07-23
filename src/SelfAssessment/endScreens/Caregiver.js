import React, { useContext } from "react"
import { useTranslation } from "react-i18next"

import { AssessmentNavigationContext } from "../Context"
import { AssessmentLayout } from "../AssessmentLayout"
import { InfoText } from "../InfoText"
import { Button } from "../Button"

import { Icons, Images } from "../../assets"
import { Colors } from "../../styles"

/** @type {React.FunctionComponent<{}>} */
export const Caregiver = ({ navigation }) => {
  const { t } = useTranslation()
  const { completeRoute } = useContext(AssessmentNavigationContext)

  const handleButtonPress = () => navigation.push(completeRoute)

  return (
    <AssessmentLayout
      backgroundColor={Colors.primaryBackgroundFaintShade}
      backgroundImage={Images.IsolatePathBackground}
      icon={Icons.Isolate}
      footer={
        <Button
          onPress={handleButtonPress}
          title={t("assessment.caregiver_cta")}
        />
      }
    >
      <InfoText
        title={t("assessment.caregiver_title")}
        description={t("assessment.caregiver_description")}
      />
    </AssessmentLayout>
  )
}
