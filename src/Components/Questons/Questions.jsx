import React, {useState } from 'react'
import {Row, Col, Button} from 'reactstrap';
import {useParams, useHistory} from 'react-router-dom';
// import Stepper from '../Stepper/Stepper';



function Questions({dataQuestions , handleNext}) {
    // console.log(dataQuestions)

    let history = useHistory();
     const {id} = useParams();
    //  console.log(id)

    const [currentQuestion , setCurrentQuestion] = useState(dataQuestions.questions.find(q => q.id === id));
    const [indexQuestion , setIndexQuestion ] = useState(dataQuestions.questions.findIndex(q => q.id === id));

    // console.log(currentQuestion)
    // console.log(indexQuestion)

    const handleNextStep = () => {
        if(indexQuestion <= 8) { 
            setCurrentQuestion(dataQuestions.questions[indexQuestion + 1])
            setIndexQuestion(indexQuestion + 1)
            handleNext();
            history.push(`/questions/${currentQuestion.id}`) ;
            console.log(currentQuestion.id)
        }else {
            history.push(`/end`)
        }
    }


    return (
        <Row align="center">
            
            <Col>
                {/* <Stepper currentQuestion={currentQuestion} indexQuestion={indexQuestion} handleNextStep={handleNextStep}/> */}
                <h2 className="text-white">{currentQuestion.text}</h2> 
                {currentQuestion.options.map(option => 
                    <Row key={option.key} className="d-flex justify-content-center">
                        <Button onClick={handleNextStep}>{option.text}</Button> 
                    </Row>  
                )}
            </Col >
        </Row>
    )
}

export default Questions
