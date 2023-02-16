import React, { useState, useEffect } from "react";
// import { Row, Col } from "react-bootstrap";

export default function RequestAccess({ handleShowRequestAccessPopUp, showRequestAccessPopUp }) {

  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const setShowRequestAccessPopUp = (show) => {
    handleShowRequestAccessPopUp(show)
  }

  console.log(showRequestAccessPopUp)
  return (
    showRequestAccessPopUp ? <>
      <div className="shareRequestSentPopupBody">
        <div className="requestSentPopupMain">
          <div className="versionsPopupSubMain">
            <div className="requestSentTitle">Request Access</div>
          </div>
          <div className="shareRequestSentPopup">
            To request access to this fork please provide your name & email.
          </div>
          <div className="requestAccessForm">
            <input className="sharePopupRequestAcess_Input" type="text"
              placeholder="Full Name" onChange={(e) => { setFullName(e.target.value) }} value={fullname} />
            <input className="sharePopupRequestAcess_Input" type="text"
              placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
            <div className="requestSentButton" onClick={() => setShowRequestAccessPopUp({ value: false, action: 'request', fullname, email })}>
              <p className="requestSentButton_expand">Request Access</p>
            </div>
          </div>
        </div>
        <div className="sharePopupBodyBack" onClick={() => {
          setShowRequestAccessPopUp({ value: false, action: 'none' })
        }
        } />
      </div>
    </> : ''
  )
}