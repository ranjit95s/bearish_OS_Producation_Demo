import React, { useState, useEffect } from "react";
// import { Row, Col } from "react-bootstrap";
import "./style.css"

export default function RequestSent({ handleShowRequestSentPopUp, showRequestSentPopUp }) {

  const setShowRequestSentPopUp = (show) => {
    handleShowRequestSentPopUp(show)
  }

  console.log(showRequestSentPopUp)
  return (
    showRequestSentPopUp ? <>
      <div className="shareRequestSentPopupBody">
        <div className="requestSentPopupMain">
          <div className="versionsPopupSubMain">
            <div className="requestSentTitle">Request Sent</div>
          </div>
          <div className="shareRequestSentPopup">
            You’re request to access this fork has been successfully sent.
          </div>
          <div className="aa">
            <div className="requestSentButton" onClick={() => setShowRequestSentPopUp({ value: false, action: 'request' })}>
              <p className="requestSentButton_expand">Done</p>
            </div>
          </div>
        </div>
        <div className="sharePopupBodyBack" onClick={() => {
          setShowRequestSentPopUp({ value: false, action: 'none' })
        }
        } />
      </div>
    </> : ''
  )
}