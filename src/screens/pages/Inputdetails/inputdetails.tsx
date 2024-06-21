import React, { useEffect, useState } from 'react';
import './inputdetails.scss';
import InputFields from '../../../ui-elements/inputfields/labeledInput/inputFields';
import ValidateEmail from '../../../regexExpressions/emailValidation';
import { useUpdateUserToAccessProbStatementMutation } from '../../../generated/graphql';
import MessagePopup from '../../../ui-elements/messagePopup/messagePopup';

const Inputdetails: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState<string>(
        "Please enter your email"
    );
    const [ updateSuccess, setUpdateSuccess ] = useState<string>("updated the payment successfully")
    const [ErrorMsg, setErrorMsg] = useState<string>("Error in updating Payment...");
    const [updateUserToAccessProbStatementMutation, { data, loading, error }] = useUpdateUserToAccessProbStatementMutation();

    const changeEmail = (event: {
    target: { value: React.SetStateAction<string> };
    }) => {
        setEmail(event.target.value);
    };

    const handlePaymentUpdate = async () => {
        setEmailError(false);
        if (email === "" || email === null || email === undefined) {
            setEmailError(true);
            return;
        }

        if (!ValidateEmail(email)) {
            setEmailErrorMsg("Please enter a valid email address");
            setEmailError(true);
            return;
        }
        try {
            await updateUserToAccessProbStatementMutation({
                variables: {
                    email: email
                }
            })
        } catch (err : any) {
            console.error(err);
            if (err.message === "Account not found") {
                setErrorMsg("Account not found");
            } else {
                setErrorMsg("Error in logging in..");
            }
        }


    }

    return (
        <div className="update-payment">
                {(loading) && (
                    <MessagePopup
                    message={"Loading..."}
                    position={"top-center"}
                    category={"info"}
                    />
                )}
                {error && (
                    <MessagePopup
                    message={ErrorMsg}
                    position={"top-center"}
                    category={"warning"}
                    delay={3}
                    />
                )}
                {data && (
                        <MessagePopup
                        message={"updated the payment succesfully"}
                        position={"top-center"}
                        category={"success"}
                        delay={1}
                        />
                    )
                }
            <h1>Update Payment</h1>
            <InputFields
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                changeEmail(e)
                }
                type="Email"
                label="E-mail"
                error={emailError}
                errorMsg="Please enter your Email"
                required
            ></InputFields>
            <div className="payment-update-button" style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handlePaymentUpdate} style={{ background: "rgb(45, 72, 131)", color: "white", border: "2px solid white" }}>UpdatePayment</button>
            </div>
        </div>
    );
};

export default Inputdetails;

