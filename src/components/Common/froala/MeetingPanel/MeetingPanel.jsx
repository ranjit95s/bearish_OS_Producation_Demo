// import { style } from "@mui/system";
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { Button, Card, Form, InputGroup, Row, Col } from "react-bootstrap";
// import "./style.css";

// import { toast } from "react-toastify";
// // import * as Chime from 'amazon-chime-sdk-js';
// // import { HttpsAction } from "../../../../services/httpsAction.js";
// import S3 from "react-aws-s3";
// import socketIOClient from "socket.io-client";
// // import "../../scss/_dashboard.scss"
// // import sortIcon from "../../../../img/drive-center/Group 566.png"
// import cameraIcon from '../../../../img/icons/camera.svg';
// import recordingIcon from '../../../../img/icons/recording.svg';
// import screenIcon from '../../../../img/icons/screen.svg';
// import videoIcon from "../../../../img/bearishOS-icons/light/video-recorder-light-icon-1px.svg";
// import blurIcon from "../../../../img/bearishOS-icons/light/Light 1px_image.svg";
// import micIcon from "../../../../img/bearishOS-icons/light/Light 1px_mic.svg";
// import micOffIcon from "../../../../img/bearishOS-icons/light/Light 1px_mic_off.svg";
// import screenShareIcon from "../../../../img/bearishOS-icons/light/Light 1px_tv.svg";
// import messageIcon from "../../../../img/bearishOS-icons/light/Light 1px_messages.svg";
// import handCursorIcon from "../../../../img/bearishOS-icons/light/Light 1px_hand cursor.svg";
// import addUserIcon from "../../../../img/bearishOS-icons/light/Light 1px_person.svg";
// import gridIcon from "../../../../img/bearishOS-icons/light/Light 1px_category.svg";
// import moreIcon from "../../../../img/bearishOS-icons/light/Light 1px_more_horizontal.svg";
// import rejectIcon from "../../../../img/bearishOS-icons/light/Light 1px_phone_call_rejected.svg";

// export default function MeetingPanel({ meetingInfo }) {

//   const record = false
//   // const meetingId = props.match.params.meetingId

//   let mediaRecorderObject = null;
//   let meetingSessionObject = null;
//   console.log('meetingInfo', meetingInfo)
//   const [meetingId, setMeetingId] = useState(meetingInfo.meetingId)
//   const [mute, setMute] = useState(true)
//   const [screenShare, setScreenShare] = useState(false)
//   const [showOptions, setShowOptions] = useState(false)
//   const [mode, setMode] = useState(false);
//   const [agendaList, setAgendaList] = useState([]);
//   const [taskModal, setTaskModal] = useState({ isOpen: false })
//   const [meetingResponse, setMeetingResponse] = useState()
//   const [attendeeResponse, setAttendeeResponse] = useState()
//   const [videoStartStop, setVideoStartStop] = useState(false)
//   const [meetingSessionStore, setMeetingSessionStore] = useState([])
//   const [menuData, setMenuData] = useState([]);
//   const [notesData, setNotesData] = useState([]);
//   const [upNextData, setUpNextData] = useState([]);
//   const [getWorkspaceData, setWorkspaceData] = useState([]);
//   const [isFullScreen, setIsFullScreen] = useState(true);
//   const [activeSideBarList, setActiveSideBarList] = useState({});
//   const [blocks, setBlocks] = useState(false);
//   const [attendee, setAttendee] = useState([]);
//   const [mediaRecorderVal, setMediaRecorder] = useState([]);
//   const [recordingStatus, setRecordingStatus] = useState(false)
//   const [recordingMessage, setRecordingMessage] = useState("")
//   const [showIcon, setShowIcon] = useState(false)
//   const [showChat, setShowChat] = useState(false)
//   const [joinUrl] = useState(`${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_URL_LOCAL : process.env.REACT_APP_PROD_URL}call-center/join-meeting-room/${meetingId}`);

//   const configs = {
//     headers: {
//       authorization: localStorage.getItem("AcessToken"),
//     },
//   };

//   const configS3 = {
//     bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
//     region: process.env.REACT_APP_S3_REGION,
//     dirName: `recordings/${meetingId}`,
//     accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY,
//     secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY
//   };
//   const ReactS3Client = new S3(configS3);

//   const masterVideoElement = document.getElementById('video-grid')
//   const vid0 = document.getElementById('remote-video')
//   const vid1 = document.getElementById('remote-video1')
//   const vid2 = document.getElementById('remote-video2')
//   const videoElements = [vid0, vid1, vid2]
//   const indexMap = {};
//   const arrAttendee = []

//   // const socket = socketIOClient("http://localhost:3001");
//   const [socket] = useState(() => socketIOClient(process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_PROD_URL));
//   useEffect(() => {
//     socket.on('reqData', data => {
//       arrAttendee.push(data)
//       toast(data.message)
//       setAttendee(arrAttendee)
//     });
//   }, [socket])

//   const getMeeting = async () => {
//     const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/getMeeting`;
//     try {
//       await axios.post(url, { meetingId: meetingId })
//         .then(async (result) => {
//           if (result.data.meetingData.statusCode == 404) {
//             // toast.error(result.data.meetingData.message)
//             return
//           }
//           if (result.data.data[0].userId == localStorage.getItem("userID")) {
//             setShowIcon(true)
//           } else {
//             setShowIcon(false)
//           }
//           setMeetingResponse(result.data.meetingData)
//           createAttendee()
//         })
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   const createAttendee = async () => {
//     const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/createAttendee`;
//     await axios.post(url, { meetingId: meetingId, externalUserId: localStorage.getItem("name") }, configs)
//       .then(async (result) => {
//         setAttendeeResponse(result.data.data)
//       })
//   }

//   const mouseEnter = () => {
//     setShowOptions(!showOptions)
//   }

//   useEffect(() => {
//     const configs = {
//       headers: {
//         authorization: localStorage.getItem("AcessToken"),
//       },
//     };

//     const checkMeeting = async () => {
//       const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/chimeVideoRequest`;

//       let formData = { meetingId: meetingId, userId: localStorage.getItem("userID") }

//       await axios.post(url, formData)
//         .then(async (result) => {
//           if (result.data.meetingData[0].hasOwnProperty('meetingId') === false) {
//             const urlMeeting = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/createMeeting`;
//             let meetingData = { scheduledStart: true, tempMeetingId: meetingId, name: localStorage.getItem('name') }

//             await axios.post(urlMeeting, meetingData, configs).then((res) => {
//               setMeetingId(res.data.meetingId)
//             });
//           } else {
//             setMeetingId(result.data.meetingData[0].meetingId)
//           }

//           getMeeting();
//         })
//     }
//     checkMeeting();

//   }, [meetingId])

//   // useEffect(() => {
//   //     getMeeting();
//   // }, [meetingId])

//   useEffect(() => {
//     callConfiguration();
//   }, [attendeeResponse])

//   useEffect(() => {
//     joinVideoCall()
//   }, [meetingSessionStore])


//   useEffect(() => {
//     //Check for record enabled

//     (async () => {
//       if (record === "true") {
//         // startRecording();
//         await startNewRecording();
//       }
//     })()
//   }, [])

//   const recordScreen = async () => {

//     let displayStream;
//     let voiceStream;
//     let tracks;

//     try {
//       // return await navigator.mediaDevices.getDisplayMedia({
//       //     audio: true,
//       //     video: { mediaSource: "tab"}
//       // });

//       const constraints = {
//         audio: false,
//         video: { mediaSource: "screen" }
//       };

//       displayStream = await window.navigator.mediaDevices.getDisplayMedia(constraints);
//       voiceStream = await window.navigator.mediaDevices.getUserMedia({ audio: true, video: false });

//     } catch (e) {
//       console.log(e)
//     } finally {
//       if (displayStream) {
//         displayStream.oninactive = handleReject;
//         tracks = displayStream.getTracks().concat(voiceStream ? voiceStream.getTracks() : []);
//         return new MediaStream(tracks);
//       }
//     }
//   }

//   let mediaRecorder;
//   const startNewRecording = async () => {
//     setRecordingStatus(true)
//     let stream = await recordScreen();
//     let mimeType = 'video/webm';
//     mediaRecorder = createRecorder(stream, mimeType);
//     mediaRecorderObject = mediaRecorder;
//     setMediaRecorder(() => mediaRecorder)
//   }

//   const createRecorder = (stream, mimeType) => {
//     // the stream data is stored in this array
//     let recordedChunks = [];

//     const mediaRecorder = new MediaRecorder(stream);

//     mediaRecorder.ondataavailable = (e) => {
//       if (e.data.size > 0) {
//         recordedChunks.push(e.data);
//       }
//     };
//     mediaRecorder.onstop = () => {
//       saveFile(recordedChunks);
//       recordedChunks = [];
//     };
//     mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
//     return mediaRecorder;
//   }

//   const saveFile = async (recordedChunks) => {

//     const blob = new Blob(recordedChunks, {
//       type: 'video/webm'
//     });
//     console.log("Video URL: ", URL.createObjectURL(blob));

//     await ReactS3Client
//       .uploadFile(blob)
//       .then(async data => {
//         saveVideoToDB(data.location)
//         setRecordingMessage("")
//         toast("Video saved successfully.")
//       })
//       .catch(err => {
//         toast.error("Something went wrong!");
//       })
//   }

//   const handleStopRecording = async () => {
//     if (mediaRecorderObject)
//       await mediaRecorderObject?.stop?.();
//     else
//       await mediaRecorderVal?.stop?.();
//     setRecordingStatus(false)
//     setRecordingMessage("Processing video. Please wait ...")
//     return;
//   }

//   const saveVideoToDB = async (videourl) => {
//     const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/saveVideoToMeetingId`;
//     try {
//       await axios.post(url, { meetingId: meetingId, videoURL: videourl }, configs)
//         .then(async (result) => {
//           toast("Video saved successfully.")
//           window.location.href = "/call-center";
//         })
//     } catch (e) {
//       console.log(e)
//     }
//   }


//   const handleReject = async () => {
//     try {
//       if (record === "true") {
//         toast("Please wait. Processing Video")
//       }
//       await handleStopRecording();
//       if (meetingSessionObject)
//         await meetingSessionObject?.audioVideo?.stop?.();
//       else
//         await meetingSessionStore?.audioVideo?.stop?.();
//       window.location.href = "/call-center";
//     } catch (e) {
//       window.location.href = "/call-center";
//     }
//   }

//   const getInitials = (string) => {
//     var names = string.split(' '),
//       initials = names[0].substring(0, 1).toUpperCase();

//     if (names.length > 1) {
//       initials += names[names.length - 1].substring(0, 1).toUpperCase();
//     }
//     return initials;
//   };

//   const stopVideo = async () => {
//     setVideoStartStop(!videoStartStop)
//     if (videoStartStop) {
//       // document.getElementsByClassName('placeholderName')[0].style.visibility = 'hidden';
//       masterVideoElement.parentNode.removeChild(document.getElementsByClassName('placeholderName')[0])
//       masterVideoElement.parentNode.removeChild(document.getElementsByClassName('attendeeName')[0])
//       await meetingSessionStore.audioVideo.startLocalVideoTile();
//     } else {
//       masterVideoElement.insertAdjacentHTML("beforeBegin", "<div class='placeholderName'><div class='attendeeNameMain'>" + getInitials(localStorage.getItem("name")) + "</div></div>");
//       await meetingSessionStore.audioVideo.stopLocalVideoTile();
//     }
//   }

//   const stopAudio = async () => {
//     setMute(!mute)
//     if (mute) {
//       await meetingSessionStore.audioVideo.realtimeMuteLocalAudio();
//     } else {
//       await meetingSessionStore.audioVideo.realtimeUnmuteLocalAudio();
//     }
//   }

//   const handleScreenShare = async () => {
//     if (!screenShare) {
//       await meetingSessionStore?.audioVideo?.stopContentShareFromScreenCapture();
//     } else {
//       await meetingSessionStore.audioVideo.stopLocalVideoTile();
//       await meetingSessionStore.audioVideo.startContentShareFromScreenCapture();
//     }
//   }

//   const callConfiguration = async () => {
//     const logger = new Chime.ConsoleLogger('ChimeMeetingLogs', Chime.LogLevel.INFO);
//     const deviceController = new Chime.DefaultDeviceController(logger);
//     const configuration = new Chime.MeetingSessionConfiguration(meetingResponse, attendeeResponse);
//     const meetingSession = new Chime.DefaultMeetingSession(configuration, logger, deviceController);
//     console.log(meetingSession)
//     setMeetingSessionStore(meetingSession)
//     meetingSessionObject = meetingSession;
//   }

//   useEffect(() => {
//     (async () => await handleScreenShare())();
//   }, [screenShare])


//   const acquireVideoElement = (tileId, active, content, name) => {
//     // Return the same video element if already bound.
//     if (tileId == 1 || (active && content)) {
//       name && masterVideoElement.insertAdjacentHTML("beforeBegin", "<p class='attendeeName'>" + name + "</p>");
//       return masterVideoElement
//     }

//     for (let i = 0; i < 4; i++) {
//       if (indexMap[i] === tileId) {
//         videoElements[i].style.visibility = "visible"
//         videoElements[i].insertAdjacentHTML("beforeBegin", "<div class='attendeeWrapperTile'><div class='attendeeNameTile'>" + getInitials(name) + "</div></div>");
//         return videoElements[i];
//       }
//     }
//     // Return the next available video element.
//     for (let i = 0; i < 5; i += 1) {
//       console.log("videoee::", videoElements[i])
//       videoElements[i].style.visibility = "visible"
//       if (!indexMap.hasOwnProperty(i)) {
//         indexMap[i] = tileId;
//         if (tileId !== 1) {
//           return videoElements[i];
//         }
//       }
//     }
//     throw new Error('no video element is available');
//   };

//   const releaseVideoElement = tileId => {
//     for (let i = 0; i < 25; i += 1) {
//       if (indexMap[i] === tileId) {
//         delete indexMap[i];
//         return;
//       }
//     }
//   };

//   const observer = {
//     connectionDidBecomePoor: () => {
//       toast.error("Your connection is poor.")
//     },
//     eventDidReceive(name, attributes) {
//       console.log("VideoEvent:", name, attributes)
//     },
//     audioVideoDidStart: () => {
//       meetingSessionStore.audioVideo.startLocalVideoTile();
//     },
//     audioVideoDidStop: sessionStatus => {
//       const sessionStatusCode = sessionStatus.statusCode();
//       if (sessionStatusCode === Chime.MeetingSessionStatusCode.MeetingEnded) {
//         toast.error("The session has ended.")
//       } else {
//         console.log('Stopped with a session status code: ', sessionStatusCode);
//       }
//     },
//     videoTileDidUpdate: tileState => {
//       //   if (tileState.active && tileState.isContent) {
//       //     meetingSessionStore.audioVideo.bindVideoElement(tileState.tileId, masterVideoElement);
//       //   }
//       // console.log("tileState.boundExternalUserId",tileState)
//       if (tileState?.boundVideoStream?.active) {
//         console.log('-------------------------------')
//         const audioElement = document.getElementById('remote-audio');
//         meetingSessionStore.audioVideo.bindAudioElement(audioElement);
//         meetingSessionStore.audioVideo.bindVideoElement(tileState.tileId, acquireVideoElement(tileState.tileId, tileState.active, tileState.isContent, tileState.boundExternalUserId));
//       }
//     },
//     contentShareDidStart: async () => {
//       console.log('Screen share started 3rd:', screenShare);
//     },
//     contentShareDidStop: async () => {
//       console.log('Screen share Stopped:', screenShare);
//     },
//     videoInputsChanged: freshVideoInputDeviceList => {
//       console.log('Video inputs updated: ', freshVideoInputDeviceList);
//     },
//     videoTileWasRemoved: tileId => {
//       releaseVideoElement(tileId);
//     }
//   }

//   const joinVideoCall = async () => {
//     if (meetingSessionStore.length == 0) {
//       return
//     }

//     // meetingSessionStore.audioVideo.addContentShareObserver(observer);
//     meetingSessionStore.audioVideo.addObserver(observer);

//     const audioInputDeviceInfo = (await meetingSessionStore.audioVideo.listAudioInputDevices())[0].deviceId;
//     await meetingSessionStore.audioVideo.chooseAudioInputDevice(audioInputDeviceInfo);

//     const audioOutputDeviceInfo = (await meetingSessionStore.audioVideo.listAudioOutputDevices())[0].deviceId;
//     await meetingSessionStore.audioVideo.chooseAudioOutputDevice(audioOutputDeviceInfo);

//     const firstVideoDeviceId = (await meetingSessionStore.audioVideo.listVideoInputDevices())[0].deviceId;
//     await meetingSessionStore.audioVideo.chooseVideoInputDevice(firstVideoDeviceId);
//     meetingSessionStore.audioVideo.start();
//   }

//   const handleView = () => {
//     setBlocks(!blocks)
//   }

//   const setActiveSidebar = ({ type, isOpen }) => {
//     setActiveSideBarList((e) => ({ ...e, [type]: isOpen }))
//   }

//   const handleCopyUrl = () => {
//     navigator.clipboard.writeText(joinUrl)
//     toast("URL copied.")
//   }

//   // const getWhiteSpace = async () => {
//   //   await HttpsAction({
//   //     url: 'callCenter/getWhitespace',
//   //     method: 'POST',
//   //     data: {
//   //       meetingId
//   //     },
//   //     positiveCallBack: ({ data }) => {
//   //       setMenuData((e) => ({ ...e, workspace: data.data }));
//   //     }
//   //   })
//   // };

//   useEffect(() => {
//     const getAgendaList = () => {
//       const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/getAgenda`;

//       let formData = { meetingId: meetingId, userId: localStorage.getItem("userID") }

//       axios.post(url, formData, configs)
//         .then((result) => {
//           // console.log(result);
//           // setMenuData([...menuData, {new: result.data.data[0].agenda}])
//           setMenuData({
//             menuNavigation: `agenda`,
//             containerNavigation: ``,
//             agenda: result.data.data[0]?.agenda,
//             containerAgenda: {},
//             containerUpNext: {},
//             notes: [],
//             upNext: [],
//           })
//         })
//     }

//     const getPreMeetingNote = async () => {
//       const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/getPreMeetingNote`;

//       let formData = { meetingId: meetingId, userId: localStorage.getItem("userID") }

//       await axios.post(url, formData, configs)
//         .then((result) => {
//           // if(result.data.data.length!=0){
//           // setMenuData(true)
//           setNotesData({
//             menuNavigation: `notes`,
//             containerNavigation: ``,
//             agenda: {},
//             containerAgenda: {},
//             containerUpNext: {},
//             notes: result.data?.data[0]?.preMeetingNote,
//             upNext: [],
//           })
//           // }
//         })
//     }

//     const getUpNext = async () => {
//       const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/getUpNext`;

//       let formData = { meetingId: meetingId, userId: localStorage.getItem("userID") }

//       await axios.post(url, formData, configs)
//         .then((result) => {
//           // if(result.data.data.length!=0){
//           // setMenuData(true)
//           setUpNextData({
//             menuNavigation: `Up Next`,
//             containerNavigation: ``,
//             agenda: {},
//             containerAgenda: {},
//             containerUpNext: {},
//             notes: [],
//             upNext: result.data?.data[0]?.upNext,
//           })
//           // }
//         })
//     }

//     // const getWorkspaceName = async () => {
//     //   const url = `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}callCenter/getWorkspace`;

//     //   let formData = {
//     //     meetingId: meetingId,
//     //   }
//     //   await axios.post(url, formData, configs)
//     //     .then((result) => {
//     //       console.log("workspaceresult", result.data.data[0].workSpace[0].workSpaceId)
//     //       // setWorkspaceId(result.data.data[0].workSpace[0].workSpaceId)
//     //       result?.data?.data && getWorkspaceData(result.data.data[0].workSpace[0].workSpaceId)
//     //     })
//     // }

//     // const getWorkspaceData = async (id) => {
//     //   await HttpsAction({
//     //     method: "GET",
//     //     url: `taskCenter/getWorkspaces?email=${localStorage.getItem("email")}`,
//     //     positiveCallBack: ({ data }) => {

//     //       let workspaceAPIData = data.data.filter(x => x._id === id)
//     //       console.log("workspaceAPIData", workspaceAPIData)
//     //       // setMenuData((e) => ({
//     //       //     ...e, allWorkspaceData: workspaceAPIData
//     //       // }))

//     //       setWorkspaceData({
//     //         menuNavigation: `workspace`,
//     //         containerNavigation: ``,
//     //         agenda: {},
//     //         containerAgenda: {},
//     //         containerUpNext: {},
//     //         notes: [],
//     //         upNext: [],
//     //         workspace: workspaceAPIData,
//     //       })
//     //     },
//     //     negativeCallBack: (error) => {
//     //       console.log(error);
//     //     }
//     //   });
//     // };

//     getAgendaList();
//     getPreMeetingNote();
//     getUpNext();
//     getWorkspaceName();
//     (async () => {
//       await getWhiteSpace()
//     })()
//   }, [setMenuData])

//   const raiseHand = async () => {
//     let name = localStorage.getItem("name");
//     socket.emit('raiseHandRequest', { id: localStorage.getItem("userID"), name: name, message: "Hand raised by " + name });
//   }

//   useEffect(() => {
//     socket.on('responseRaiseHand', data => {
//       toast(data.message)
//     });

//     return async () => {
//       // socket.off('responseRaiseHand');
//       // masterVideoElement.pause();
//       if (meetingSessionStore.audioVideo) {
//         await meetingSessionStore.audioVideo.chooseVideoInputDevice(null);
//         await meetingSessionStore.audioVideo.stopLocalVideoTile();
//         await meetingSessionStore.audioVideo.stop()
//       }
//     }
//   }, [meetingSessionStore])

//   const blurVideo = async () => {
//     toast("Requesting blur video")
//     const processors = [];
//     // create blur processor
//     if (Chime.BackgroundBlurVideoFrameProcessor.isSupported()) {
//       const blurProcessor = await Chime.BackgroundBlurVideoFrameProcessor.create();
//       processors.push(blurProcessor);
//     }

//     const logger = new Chime.ConsoleLogger('ChimeMeetingLogs', Chime.LogLevel.INFO);
//     const deviceController = new Chime.DefaultDeviceController(logger);

//     // add the processor to the pipeline
//     let transformDevice = new Chime.DefaultVideoTransformDevice(logger, deviceController, processors);

//     await meetingSessionStore.audioVideo.chooseVideoInputDevice(transformDevice);
//     meetingSessionStore.audioVideo.startLocalVideo();
//   }

//   const handleChat = async () => {
//     setShowChat(!showChat)
//   }

//   const handleClickJoinLink = () => {
//     navigator.clipboard.writeText(window.location.href);
//   }
//   return (
//     <>
//       <Row className="commentMainBox">
//         <Col sm='12' className="videoButtonPanel padding_10">
//           <div className="shareMeetingButton">
//             <p className="shareStartMeetingButton_expand">Call Settings</p>
//           </div>
//           <div className="shareMeetingButton greenBtn" onClick={handleClickJoinLink}>
//             <p className="shareStartMeetingButton_expand">Join Link</p>
//           </div>
//           <div className="shareMeetingButton redBtn">
//             <p className="shareStartMeetingButton_expand">End Call</p>
//           </div>
//         </Col>
//         <Col sm='12' className="videoControlPanel bodySize">
//           <Col sm='12' className="videoControlBody">
//             <div className="shareMeetingVideoControlButton" onClick={() => stopAudio()}>
//               {mute ? <img width="100%" height="100%" id="muteButton" src={recordingIcon} alt="" /> : <img width="100%" height="100%" src={recordingIcon} id="muteButton" alt="ON/OFF Audio" />}
//             </div>
//             <div className="shareMeetingVideoControlButton" onClick={() => stopVideo()}>
//               <img width="100%" height="100%" src={cameraIcon} alt="" />
//             </div>
//             <div className="shareMeetingVideoControlButton" onClick={() => setScreenShare(!screenShare)}>
//               <img width="100%" height="100%" src={screenIcon} alt="" />
//             </div>
//           </Col>
//         </Col>
//         <Col sm='12' className="videoPlayPanel bodySize">
//           <Col sm='12' className="videoPlayUserBody">
//             <video id="video-grid"></video>
//             {/* <div className="shareMeetingVideoUserButton">
//               AK
//             </div> */}
//           </Col>
//         </Col>
//         <Col sm='12' className="videoBodyPanel bodySize">
//         </Col>
//       </Row>
//     </>
//   );
// }
