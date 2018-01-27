import React from 'react';
import {Input, FormGroup, Col, Label} from 'reactstrap';


const InputField = ({type, model, label, handleOnChange}) => {

    const handleFieldChange = (e) => {
        const val = e.target.value;
        handleOnChange({
            field: model,
            val
        });
    }

    return (
        <FormGroup row>
          <Label for={model} sm={2}>{label}</Label>
          <Col sm={10}>
            <Input type={type} name={model} placeholder="Enter amount" onChange={handleFieldChange}/>
          </Col>
        </FormGroup>
    );

};

export default InputField;
