import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap"
import axios from "axios";
import "./style.css"
// import chevron_downIcon from "../../../../img/icons/chevron_down.svg";
// import chevron_upIcon from "../../../../img/icons/chevron_up.svg";

export default function ShareWith({ handleStartMeeting, handleShowShareWith, showShareWithDoc }) {

  const [joinUrl, setJoinUrl] = useState("")
  const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/createMeeting/${localStorage.getItem('name')}`;

  useEffect(() => {
    if (showShareWithDoc) {
      console.log('aaa')
      const getUuid = async () => {
        const configs = {
          headers: {
            authorization: localStorage.getItem("AcessToken"),
          },
        };

        await axios.get(url, configs).then((res) => {
          setJoinUrl(`${window.location.href}/join-meeting-room/${res.data.meetingId}`)
        });
      }

      getUuid();
    }

  }, [showShareWithDoc])

  const handleShowShareWiths = (data) => {
    setJoinUrl('')
    handleShowShareWith(data)
  }
  return (
    showShareWithDoc ? <>
      <div className="sharePopupBody">
        <div className="shareStartMeetingPopupMain">
          <div className="versionsPopupSubMain padding-20">
            <div className="sharePopupMain_headingTitle">Start a Meeting</div>
          </div>
          <div className="sharePopup startMeeting">
            Starting and sharing a meeting from within a document will share
            the document with “edit access” to all those who join. Share settings
            can be changed from within share setting menu.
          </div>
          <div className="sharePopup startMeetingInputBox">
            <Row style={{ padding: '0 5px 0 10px' }}>
              <Col sm='12' className="paddingTop-20">
                <div>Contact Name (separate multiple contacts by clicking enter)</div>
                <input className="shareShareWithPopup_Input" type="text" placeholder="Type contact name, email, or number" />
              </Col>
              <Col sm='12' className="paddingTop-20">
                <div>Meeting Link (share this link for others to join an editable document)</div>
                <input className="shareShareWithPopup_Input" type="text" placeholder="Meeting Link" value={joinUrl} onChange={(e) => {
                  setJoinUrl(e.target.value)
                }
                } />
              </Col>
              <Col sm='12' className="paddingTop-20 startMeetingBtn">
                <div className="shareStartMeetingButton" onClick={() => {
                  setJoinUrl('')
                  window.location.href = joinUrl
                  // handleStartMeeting({ meetingId: joinUrl })
                }
                }>
                  <p className="shareStartMeetingButton_expand">Start Meeting</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="sharePopupBodyBack" onClick={() => {
          handleShowShareWiths(false)
        }
        } />
      </div>
    </> : ''
  )
}