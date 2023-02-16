import React, { useState, useEffect } from "react";
// import { Row, Col } from "react-bootstrap";
import "./style.css";

export default function ForkDoc({ handleShowFork, showForkDoc, createNewFork }) {

  const [content, setContent] = useState('')
  const setShowForkDoc = (show) => {
    handleShowFork(show)
  }

  // console.log(showForkDoc)
  return (
    showForkDoc ? <>
      <div className="shareRequestSentPopupBody">
        <div className="ForkPopupMain">
          <div className="versionsPopupSubMain" onClick={() => console.log('ccc')}>
            <div className="ForkTitle">Name your Fork</div>
          </div>
          <div className="sharePopup">
            <input className="sharePopup_Input" type="text"
              placeholder="Fork of Document" onChange={(e) => { setContent(e.target.value) }} value={content} />
            <div className="inputForkSend" onClick={() => {
              handleShowFork(false)
              createNewFork(content)
            }
            }>
              Go
            </div>
          </div>
        </div>
        <div className="sharePopupBodyBack" onClick={() => {
          setShowForkDoc(false)
        }
        } />
      </div>
    </> : ''
  )
}