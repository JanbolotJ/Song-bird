

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UseLocations() {
    const navigate = useNavigate();

    const goToRazminka = React.useCallback(() => navigate("/quiz/razminka"), [navigate]);
    const goToVorobinye = React.useCallback(() => navigate("/quiz/vorobinye"), [navigate]);
    const goToLesnye = React.useCallback(() => navigate("/quiz/lesnye"), [navigate]);
    const goToPevchie = React.useCallback(() => navigate("/quiz/pevchie"), [navigate]);
    const goToHishnye = React.useCallback(() => navigate("/quiz/hishnye"), [navigate]);
    const goToMorskie = React.useCallback(() => navigate("/quiz/morskie"), [navigate]);
    const GoToMain = React.useCallback(() => navigate("/"), [navigate]);
  return{
    actions: {
      GoToMain,
      goToRazminka,
      goToVorobinye,
      goToLesnye,
      goToPevchie,
      goToHishnye,
      goToMorskie
    }
  }
}
