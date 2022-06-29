import React from 'react';

import classes from './../home2.module.css'

const Contactus = () => {

    async function contactUsFormSubmitHanlder(e) {
        e.preventDefault();
        let companyName = e.target.companyName.value;
        let companyEmail = e.target.companyEmail.value;
        let contactNumber = e.target.contactNumber.value;
        let message = e.target.message.value;

        // console.log(companyName)
        // console.log(companyEmail)
        // console.log(contactNumber)
        // console.log(message)

        console.log(process.env.NEXT_PUBLIC_X_API_KEY)
        console.log(process.env)

        const body = {
            query: `
                mutation{
                    getInTouchPost(inTouchPost: {
                        companyName: "${companyName}",
                        companyEmail: "${companyEmail}",
                        contactNumber: "${contactNumber}",
                        message: "${message}"
                    }){message}
                }
            `
        }

        fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/serverapi/v1`, {
            method: "POST",
            headers: {
                "x-api-key": `${process.env.NEXT_PUBLIC_X_API_KEY}`,
                
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
        .then(data => console.log('response: ', data))
        .catch(err => console.log(err))

    }

    return (
        <form onSubmit={contactUsFormSubmitHanlder}>
            <div className={classes.formsAndtextarea}>
                <div className={classes.form_wrapper}>

                    {/* newsletter-signup-form-label form-label */}
                    <div className={classes.newsletter_signup_form_label_wrapper}>
                        <input
                            className="form-input"
                            type="text"
                            name="companyName"
                            id="companyName"
                            required
                        />
                        <label
                            className={`${classes.newsletter_signup_form_label} ${classes.from_lable}`}
                            htmlFor="company_name"
                            id="company_name"
                        >
                            Company name
                        </label>
                    </div>
                    <div className={classes.newsletter_signup_form_label_wrapper}>
                        <input
                            className="form-input"
                            type="email"
                            name="companyEmail"
                            id="email"
                            required
                        />
                        <label
                            className={`${classes.newsletter_signup_form_label} ${classes.from_lable}`}
                            htmlFor="company_email"
                            id="company_email"

                        >
                            Company email
                        </label>
                    </div>
                    <div className={classes.newsletter_signup_form_label_wrapper}>
                        <input
                            className="form-input"
                            type="tel"
                            name="contactNumber"
                            id="contact_number"
                            required
                        />
                        <label
                            className={`${classes.newsletter_signup_form_label} ${classes.from_lable}`}
                            htmlFor="contact_number"
                            id="contact_number"
                        >
                            Contact number
                        </label>
                    </div>

                </div>

                <div className={classes.textareas}>
                    {/* <textarea
            placeholder="Message"
            rows="30"
            data-min-rows="30"
          ></textarea> */}
                    <div className={classes.newsletter_signup_form_label_wrapper}>
                        <input
                            className="form-input"
                            type="text"
                            name="message"
                            id="message"
                            required
                        />
                        <label
                            className={`${classes.newsletter_signup_form_label} ${classes.from_lable}`}
                            htmlFor="message"
                            id="message"
                            style={{ color: "#395D89",fontSize:" 20px"}}
                        >
                            Message
                        </label>
                    </div>
                </div>
            </div>
            <button className={classes.submit_btn} type="submit">
                Submit
            </button>
        </form>
    );
}

export default Contactus;
