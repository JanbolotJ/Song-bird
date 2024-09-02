

import React from 'react'
import QuestionPage from './QuestionPage'

export default function Answers({goto, correct}) {
  return (
    <React.Fragment>
        <QuestionPage 
            correctAnswer={correct} 
            nextRoute={goto} 
            answers={[
                'Кукушка',
                'Зеленая пересмешка',
                'Морская чайка',
                'Домовой воробей',
                'Страус',
                'Белая сова'
            ]}
        />
    </React.Fragment>
  )
}
