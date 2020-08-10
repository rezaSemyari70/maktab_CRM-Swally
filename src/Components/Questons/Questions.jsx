import React, {useState} from 'react'
import {Row, Col, Button} from 'reactstrap';
import {useParams, useHistory} from 'react-router-dom';

import './Questions.scss';

function Questions({dataQuestions, handleNext}) {
    // console.log(dataQuestions)

    let history = useHistory();
    const {id} = useParams();
    //  console.log(id)

    const [currentQuestion,
        setCurrentQuestion] = useState(dataQuestions.questions.find(q => q.id === id));
    const [indexQuestion,
        setIndexQuestion] = useState(dataQuestions.questions.findIndex(q => q.id === id));

    // console.log(currentQuestion) console.log(indexQuestion)

    const handleNextStep = () => {
        if (indexQuestion <= 8) {
            setCurrentQuestion(dataQuestions.questions[indexQuestion + 1])
            setIndexQuestion(indexQuestion + 1)
            handleNext();
            history.push(`/questions/${currentQuestion.id}`);
            console.log(currentQuestion.id)
        } else {
            history.push(`/end`)
        }
    }

    return (
        <Row align="center" style={{direction:'rtl' , overflow:'hidden'}}>

            <Col>
                <h1 className="text-white titleQuestion">{currentQuestion.text}</h1>
                <Row>
                    <Col></Col>
                    <Col md={1}></Col>
                    
                    {currentQuestion.options.map(option => 
                        <Col xs={12} lg={2}  key={option.key} className="justify-content-center btnDirection">
                            <Button className="text-nowrap btnOption" onClick={handleNextStep}>
                                {option.text}
                            </Button>
                        </Col>
                    )}
                    
                    <Col md={1}></Col>
                    <Col></Col>
                </Row>
            </Col >
        </Row>
    )
}

export default Questions
