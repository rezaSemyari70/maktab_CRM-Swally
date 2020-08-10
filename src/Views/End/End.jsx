import React from 'react'
import {Row, Col} from 'reactstrap'

import './End.scss';
import Logo from '../../Components/Logo/Logo';
import PoweredBy from '../../Components/PoweredBy/PoweredBy';

function End({dataQuestions}) {
    return (
       <div style={{overflow: 'hidden'}}>
            <Row className="justify-content-center align-items-center " >
            <Col>
                <Row className="justify-content-center text-center">
                    <h2 className="text-white titleEnd">با تشکر از وقتی که صرف پاسخگویی به سوالات کردید</h2>
                </Row>
                <Row className="justify-content-center logoEndPage">
                    <Logo dataQuestions={dataQuestions}/>
                </Row>
                <Row className="justify-content-center powerByEndPage">
                    <PoweredBy/>
                </Row>
            </Col>
        </Row>
       </div>
    )
}

export default End
