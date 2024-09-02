import React from "react";

export const Razminka = React.lazy(() => import("../apps/quuiz/razminka/razminka"))

export const Vorobinye = React.lazy(() => import("../apps/quuiz/vorobinye/vorobinye"))

export const Lesnye = React.lazy(() => import("../apps/quuiz/lesnye/lesnye"))

export const Pevchie = React.lazy(() => import ("../apps/quuiz/pevchie/pevchie"))

export const Hishnye = React.lazy(() => import ("../apps/quuiz/hishnye/hishnye"))

export const Morskie = React.lazy(() => import ("../apps/quuiz/morskie/morskie"))


export const QuizPages = {
    Razminka,
    Vorobinye,
    Lesnye,
    Pevchie,
    Hishnye,
    Morskie
}