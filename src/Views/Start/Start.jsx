import React from 'react'
import {Button, Row, Col, Container} from 'reactstrap';

import './Start.scss';
import Logo from '../../Components/Logo/Logo';
import PoweredBy from '../../Components/PoweredBy/PoweredBy';

function Start({dataQuestions}) {
    // console.log(dataQuestions)
    return (
        <Container>
            <Row className="text-center">
                <Col>
                    <Row className="text-center">
                        <Col>
                            <h1 className="text-white">فرم نظرسنجی و ارتفای سطح خدمت رسانی</h1>
                            <Logo dataQuestions={dataQuestions}/>
                            <Button className="StartBtn">شروع</Button>
                        </Col>
                    </Row>
                    <PoweredBy/>
                </Col>
            </Row>
        </Container>
    )
}

export default Start;
