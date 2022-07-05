import React from 'react'
import AnalysisRequestForm from './analysisRequestForm';
import classes from "./analysisRequestFormPage.module.css";
import {BsArrowLeft} from "react-icons/bs";

const analysisRequestFormPage = ({setOpenShduleDemoForm}) => {
  function backButtonClickHandler(){
    setOpenShduleDemoForm(false);
  }

  return (
    <div className={classes.analysisRequestForm_Page}>
      <button onClick={backButtonClickHandler} className={classes.backButton}><BsArrowLeft /></button>
      <div className={classes.analysisRequestDetails}>
        <p>Want to know if Aivara can help you?</p>
        <div className={classes.analysis_Details}>
          <p>
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
          <AnalysisRequestForm />
        </div>
      </div>
    </div>
  );
}

export default analysisRequestFormPage