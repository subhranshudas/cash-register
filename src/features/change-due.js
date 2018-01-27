import React from 'react';
import { Badge, Alert } from 'reactstrap';
import {getChangeFunctional} from './calculate-change';
import {map} from 'lodash';


/**
 * generates uuid 
 */
const uuid = () => Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1;


const ChangeDue = ({changeDue}) => {
    
    const renderChangeDenominations = (denominations) => {
        return (
            <div>
                <Alert color="success">Change Due to the Customer</Alert>
                <div>
                {map(denominations, (valueOfDenomination, nameOfDenomination) => {
                    return (
                        <div className="denominations" key={uuid()}>
                            <Badge size="lg" color="ligth" key={nameOfDenomination + valueOfDenomination}>
                                {nameOfDenomination} <Badge pill color="light">{valueOfDenomination}</Badge>
                            </Badge>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    };

    return (
        <div className="change-due-container">
           { (changeDue < 0) ?
                <Alert color="danger">Amount received is less than the price!</Alert>
                :
                (changeDue === 0) ?  
                <Alert color="info">No change Due!</Alert>
                :
                (changeDue !== null) && renderChangeDenominations(getChangeFunctional(changeDue))
            }
        </div>
    );

};

export default ChangeDue;
