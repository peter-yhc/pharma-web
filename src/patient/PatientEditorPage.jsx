import React from 'react';
import withAuthentication from "authentication/withAuthentication";

const PatientEditorPage = () => {

  return (
    <>
      <span>Patient Page</span>
    </>
  )
}

export default withAuthentication(PatientEditorPage);