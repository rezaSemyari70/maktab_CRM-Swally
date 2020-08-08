import React from 'react'
import {Row, Col} from 'reactstrap'

import './PoweredBy.scss';

function PoweredBy() {
    return (
        <Row>
            <Col>
                <Row className="text-center">
                    <Col>
                        <Row className="d-flex justify-content-center text-center">
                            <span className="swallyLable">Soally</span>
                            <p className="text-white mb-0 ml-2 align-self-center powered">قدرت گرفته از</p>
                        </Row>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col>
                        <p className="text-white aboutPower">
                            آنلاین CRM پلتفرم طراحی فرم‌های
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default PoweredBy
