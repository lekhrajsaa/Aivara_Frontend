import React, { useState } from 'react';
import axios from 'axios';

import classes from './analysisRequestForm.module.css'
import Country from "./countries"

import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

const AnalysisRequestForm = () => {
//Form For Schedule demo
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setjobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [country, setCountry] = useState('');
  const [application, setApplication] = useState('');
  const [analysisGoal, setAnalysisGoal] = useState('');
  const [attachmentFiles, setAttachmentFiles] = useState(); //attachments

  const [dragDropInputText, setDragDropInputText] = useState('Drag and drop file here');
  const [dragDropInputStyles, setDragDropInputStyles] = useState({ border: "1px dashed rgba(0, 0, 0, 0.5)" });

  const [openAlertBox, setOpenAlertBox] = useState(false);
  const [openErrorBox, setOpenErrorBox] = useState(false);


  const AnalysisRequestFormSubmitHandler = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('jobTitle', jobTitle);
    formData.append('companyName', companyName);
    formData.append('emailAddress', emailAddress);
    formData.append('contactNumber', contactNumber);
    formData.append('country', country);
    formData.append('application', application);
    formData.append('sampleDescription', analysisGoal);

    Array.from(attachmentFiles).forEach(item => {
      formData.append('uploadImages', item);
    })

    //API call to store sample image with other data (Submit Analysis Request)

    try {
      let response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_API}/serverpostAnalysisRequest`, formData, {
        headers: {
          'x-api-key': `${process.env.NEXT_PUBLIC_X_API_KEY}`
        }
      });
      console.log('response:', response)
      setOpenAlertBox(true)
    } catch (err) {
      console.log('err: ', err)
      setOpenErrorBox(true)
    }

    setFirstName('');
    setLastName('');
    setjobTitle('');
    setCompanyName('');
    setEmailAddress('');
    setContactNumber('');
    setCountry('');
    setApplication('');
    setAnalysisGoal('');
    setAttachmentFiles('');
    setDragDropInputText('Drag and drop file here');

    e.target.reset()
  }

  const dragOverHandler = e => {
    e.preventDefault()
    console.log('dragged over file')

    setDragDropInputText('Drop File +')
    setDragDropInputStyles({
      border: "1px dashed black",
      background: "white",
      color: "black"
    })
  }
  const dragDropHandler = e => {
    e.preventDefault()
    const files = e.dataTransfer.files;
    setAttachmentFiles(files)
    setDragDropInputText(files)
  }
  const dragLeaveHandler = e => {
    setDragDropInputText('Drag and drop file here')
    setDragDropInputStyles({
      border: "1px dashed rgba(0, 0, 0, 0.5)"
    })
  }

  function firstNameInpChangeHandler(e) {
    setFirstName(e.target.value)
  }
  function lastNameInpChangeHandler(e) {
    setLastName(e.target.value)
  }
  function jobTitleInpChangeHandler(e) {
    setjobTitle(e.target.value)
  }
  function companyNameInpChangeHandler(e) {
    setCompanyName(e.target.value)
  }
  function emailAddressInpChangeHandler(e) {
    setEmailAddress(e.target.value)
  }
  function contactNumberChangeHandler(e) {
    setContactNumber(e.target.value)
  }
  function selectApplicationChangeHandler(e) {
    setApplication(e.target.value)
  }
  function attachmentInpChangeHanlder(e) {
    // console.log(e.target.files[0])
    setAttachmentFiles(e.target.files)
    setDragDropInputText(e.target.files[0].name)
  }
  function analysisGoalChangeHanlder(e) {
    setAnalysisGoal(e.target.value)
  }

  return (
    <>
      <form
        onSubmit={AnalysisRequestFormSubmitHandler}
        className={classes.formFields}
      >
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          minLength="3"
          required
          value={firstName}
          onInput={firstNameInpChangeHandler}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          minLength="3"
          required
          value={lastName}
          onInput={lastNameInpChangeHandler}
        />

        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id="jobTitle"
          required
          value={jobTitle}
          onInput={jobTitleInpChangeHandler}
        />

        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          minLength="3"
          required
          value={companyName}
          onInput={companyNameInpChangeHandler}
        />

        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          id="emailAddress"
          required
          value={emailAddress}
          onInput={emailAddressInpChangeHandler}
        />

        <label htmlFor="contactNo">Contact Number</label>
        <input
          type="tel"
          id="contactNo"
          minLength="10"
          maxLength="10"
          required
          value={contactNumber}
          onInput={contactNumberChangeHandler}
        />

        <label htmlFor="country" placeholder="Select your country">
          Country
        </label>
        <Country country={country} setCountry={setCountry} />

        <label htmlFor="application">Application</label>
        <select
          name="application"
          id="application"
          required
          onChange={selectApplicationChangeHandler}
        >
          <option value=""></option>
          <option value="Application1" style={{ fontSize: "15px" }}>
            Application1
          </option>
          <option value="Application2" style={{ fontSize: "15px" }}>
            Application1
          </option>
        </select>

        <label htmlFor="attachments">Attachments</label>
        <label
          className={classes.file_upload}
          onDrop={dragDropHandler}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          style={{ ...dragDropInputStyles, position: 'relative' }}

        >
          {dragDropInputText}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="material-symbols-outlined"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translate(0, -50%) rotate(40deg)',
              margin: 'auto'
            }}>
            attach_file
          </span>
          <input
            className={classes.file_upload_input}
            type="file"
            id="attachments"
            accept="image/jpeg,image/gif,image/png,application/pdf,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain,image/x-eps,application/zip,application/rar,application/7zip "
            name="AttachmentsInput"
            onChange={attachmentInpChangeHanlder}
            required
            multiple
          />
        </label>
        <label htmlFor="analysisGoal">Sample Description/Analysis Goal</label>
        <input
          value={analysisGoal}
          type="text"
          htmlFor="analysisGoal"
          id="analysisGoal"
          required
          onInput={analysisGoalChangeHanlder}
        />

        <button type="submit">Submit</button>
      </form>

      <Dialog
        open={openAlertBox}
        aria-labelledby="dilog-title"
        aria-aria-describedby="dilog-description"
        sx={{ p: 2 }}
      >
        <DialogTitle id="dilog-title">Succesfull!</DialogTitle>
        <DialogContent>
          <DialogContentText>Your Form Has been submitted!</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ mx: 1, mb: 1 }}>
          <Button
            variant="contained"
            onClick={() => { setOpenAlertBox(false) }}
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openErrorBox}
        aria-labelledby="dilog-title"
        aria-aria-describedby="dilog-description"
        sx={{ p: 2 }}
      >
        <DialogTitle id="dilog-title">Error!</DialogTitle>
        <DialogContent>
          <DialogContentText>Form submission failed!</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ mx: 1, mb: 1 }}>
          <Button
            variant="contained"
            onClick={() => { setOpenErrorBox(false) }}
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AnalysisRequestForm;
