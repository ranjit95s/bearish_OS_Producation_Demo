import React, { useState, useEffect } from "react";
// import { Row, Col } from "react-bootstrap";

export default function RequestAccess({ handleShowAccessDeniedPopUp, showAccessDeniedPopUp }) {

  const setShowAccessDeniedPopUp = (show) => {
    handleShowAccessDeniedPopUp(show)
  }

  console.log(showAccessDeniedPopUp)
  return (
    showAccessDeniedPopUp ? <>
      <div className="shareRequestSentPopupBody">
        <div className="requestSentPopupMain">
          <div className="versionsPopupSubMain">
            <div className="requestSentTitle">Access Denied</div>
          </div>
          <div className="shareRequestSentPopup">
            Sorry, you don’t have access to this document.
            You can request access from the creator below.
          </div>
          <div>
            <div className="requestSentButton" onClick={() => setShowAccessDeniedPopUp({ value: false, action: 'request' })}>
              <p className="requestSentButton_expand">Request Access</p>
            </div>
          </div>
        </div>
        <div className="sharePopupBodyBack" onClick={() => {
          setShowAccessDeniedPopUp({ value: false, action: 'none' })
        }
        } />
      </div>
    </> : ''
  )
}