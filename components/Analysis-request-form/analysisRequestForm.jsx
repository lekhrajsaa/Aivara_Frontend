import React from 'react'
import classes from "./analysisRequestForm.module.css"
import Country from "./countries"


const analysisRequestForm = () => {
  return (
    <div className={classes.analysisReqestForm_Page}>
      <div className={classes.analysisRequestDetails}>
        <p>Want to know if Aivara can help you?</p>
        <div className={classes.analysis_Details}>
          <p style={{ fontSize: "30px", marginTop: "0px", fontWeight: "500" }}>
            Submit an image sample to see how Aivara can simplify your work
          </p>
          <p>
            Our team consists of experienced AI engineers who will analyse the
            image sample. Our developer will discuss your requirements and
            provide you with an effiencient solution . We will build the
            application and discuss the results with you.
          </p>
          <p>
            To request analysis, please fill out the form on this page and
            provide few details about your sample along with sample Image. We
            will contact you within two business days to discuss your use case.
          </p>
          <p>
            For more information or any additional support, please contact
            help@aivara.in
          </p>
        </div>
      </div>
      <div className={classes.analysisRequestForm}>
        <p> Submit Analysis Request</p>
        <div>
          <form className={classes.formFields}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              for="firstName"
              id="firstName"
              minLength="3"
              required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              for="lastName"
              id="lastName"
              minLength="3"
              required
            />
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" for="jobTitle" id="jobTitle" required />
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              for="companyName"
              id="companyName"
              minLength="3"
              required
            />
            <label htmlFor="emailAddress">Email Address</label>
            <input type="email" for="emailAddress" id="emailAddress" required />
            <label htmlFor="contactNo">Contact Number</label>
            <input
              type="tel"
              for="contactNo"
              id="contactNo"
              minLength="10"
              maxlength="10"
              required
            />
            <label htmlFor="country" placeholder='Select your country'>Country</label>
           <Country />
            <label htmlFor="application">Application</label>
            <select name='application' id='application' required>
              <option value="" selected></option>
              <option value="Application1" style={{ fontSize: "15px" }}>
                Application1
              </option>
              <option value="Application2" style={{ fontSize: "15px" }}>
                Application1
              </option>
            </select>
            <label htmlFor="attachments">Attachments</label>
            <input
              className={classes.file_upload}
              type="file"
              for="attachments"
              id="attachments"
              accept="image/*"
              placeholder="Drag and Drop files here"
              required
            />
            <label htmlFor="analysisGoal">
              Sample Description/Analysis Goal
            </label>
            <input type="text" for="analysisGoal" id="analysisGoal" required />
            <button type="submit"> Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default analysisRequestForm