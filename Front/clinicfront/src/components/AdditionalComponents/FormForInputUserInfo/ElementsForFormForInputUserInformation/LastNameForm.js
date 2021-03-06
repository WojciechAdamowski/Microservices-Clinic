import {Col, Form} from "react-bootstrap";
import React, {useState} from "react";
import StylesTextField from "../../CustomTextField/StylesTextField";
import TextFieldCustomTypography from "../../CustomTypography/TypesOfCustomTypography/TextFieldLabelCustomTypography";

export const LastNameForm = (props) => {
    const { handleChange, validation, setIsCorrectInputInForms, userInformation } = props;

    const [isCorrectInput, setIsCorrectInput] = useState(true);
    const [messageForIncorrectInput, setMessageForIncorrectInput] = useState(null);

    const setGoodInputInAllStates = () => {
        setIsCorrectInput(true);
        setIsCorrectInputInForms({lastNameForm: true});
    };

    const setWrongInputInAllStates = () => {
        setIsCorrectInput(false);
        setIsCorrectInputInForms({lastNameForm: false});
    };

    //Validation for input data
    const checkInputCorrect = (e) => {
        if (e.target.value.length === 0){
            setWrongInputInAllStates();
            setMessageForIncorrectInput("The field cannot be empty")
        } else {
            setGoodInputInAllStates();
            setMessageForIncorrectInput(null);
        }
    };

    return (
        <Form.Group as={Col}>
            <StylesTextField
                onChange={(e) => {
                    handleChange({lastName : e.target.value});
                    if (validation){checkInputCorrect(e)}
                }}
                name="lastName"
                label={
                    <TextFieldCustomTypography
                      primaryLabel={"Nazwisko"}
                      secondaryLabel={"Last Name"}
                    />
                }
                variant="outlined"
                error={!isCorrectInput}
                helperText={messageForIncorrectInput}
                fullWidth
                defaultValue={(userInformation) ? (userInformation.lastName) : null}
            />
        </Form.Group>)
};