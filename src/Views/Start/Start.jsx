import React , {useState} from 'react'
import {Button, Row, Col, Container} from 'reactstrap';

import './Start.scss';
import Logo from '../../Components/Logo/Logo';
import PoweredBy from '../../Components/PoweredBy/PoweredBy';
import {Link} from 'react-router-dom';



function Start({dataQuestions}) {
    
    const [firstQuestion ] = useState(dataQuestions.questions[0]);
    
    return (
        <Container>
            <Row className="text-center">
                <Col>
                    <Row className="text-center">
                        <Col>
                            <h1 className="text-white titleStart">فرم نظرسنجی و ارتفای سطح خدمت رسانی</h1>
                            <Logo dataQuestions={dataQuestions}/>
                            <Link to={`/questions/${firstQuestion.id}`}>
                                <Button className="StartBtn">شروع</Button>
                            </Link>
                        </Col>
                    </Row>
                    <PoweredBy/>
                </Col>
            </Row>
        </Container>
    )
}

export default Start;
