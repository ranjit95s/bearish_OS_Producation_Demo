// import { style } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Button, Card, Form, InputGroup, Row, Col } from "react-bootstrap";
import style from "./AddComment.module.css"
import { useParams } from "react-router-dom"
import getAuthHeaders from "../../../../service/apiCall";
// import "../../scss/_dashboard.scss"
// import sortIcon from "../../../../img/drive-center/Group 566.png"
import sendIcon from "../../../../Images/Bearish/send.svg";
import axios from "axios";

export default function AddComment({ commentLists, addComment, viewCommentInDoc }) {
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])
  const params = useParams();

  useEffect(() => {
    if (params.noteId) {
      axios({
        method: 'get',
        url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/getDocDataById/${params.noteId}`,
        headers: getAuthHeaders()
      }).then(response => {
        const data = response.data.Data
        let comments = [];
        data.sharedWith.map(e => {
          const user = {
            name: e.email === localStorage.getItem("email") ? localStorage.getItem("name") : e.name,
            id: e.email === localStorage.getItem("email") ? localStorage.getItem("userID") : e._id
          }
          e.comments.map(each => {
            const tcom = {
              content: each.comment,
              user: user,
              commentOnWord: each.commentOnWord,
              commentID: comments.length
            }

            comments = [...comments, tcom]
          })
        })
        console.log(comments)
        setCommentList(comments)
      })
    }
  }, [params])

  const handleAddComment = (e) => {
    console.log('comment', comment)
    addComment(comment)
    const user = {
      name: localStorage.getItem("name"),
      id: localStorage.getItem('userID')
    }
    console.log(commentList)
    setCommentList(e => [...e, {
      content: comment,
      user: user,
      commentOnWord: '',
      commentID: commentList.length
    }]
    )
    setComment('')
  }

  const handleViewCommentInDoc = (id) => {
    viewCommentInDoc(id)
  }

  const getNameInitial = (name) => {
    let nameInit = "";
    let setName = ""
    if (name?.includes(" ")) {
      nameInit = name?.split(" ")
      setName = nameInit[0] && nameInit[1] && nameInit[0][0] + nameInit[1][0]
      return setName
    } else {
      name?.split("")
      setName = name && name[0]
      return setName
    }
  }

  const getCommentList = () => {
    console.log('-------------')
    return commentList.map((eachComment) => (
      <div className={style.commentListRowMainBox}>
        <Card.Body className={style.commentListRowBody}>
          <Card.Title className={style.commentListRowTitle}>{getNameInitial(eachComment.user.name)}</Card.Title>
          <Card.Text className={style.commentListRowContent}>{eachComment.content}</Card.Text>
        </Card.Body>
        <Card.Footer className={style.commentListRowFooter}>
          <span className={style.commentListRowButton} onClick={() => handleViewCommentInDoc(eachComment.commentID)}>View in Doc</span>
        </Card.Footer>
      </div>
    ))
  }
  return (
    <>
      <Row className={style.commentMainBox}>
        <Row className={style.commentList}>
          <Col sm='12' className={style.commentListTitle}>
            Document Comments
          </Col>
          <Col sm='12' className={style.commentListBody}>
            {getCommentList()}
          </Col>
        </Row>
        <Row className={style.inputComment}>
          <Form className={style.inputCommentForm}>
            <InputGroup className={style.inputCommentFormInputBody}>
              <input
                value={comment}
                className={style.inputCommentFormInput}
                onChange={e => setComment(e.target.value)}
                placeholder='Type your message'
              />
              <div className={style.inputCommentFormSend} onClick={handleAddComment}>
                <img src={sendIcon} />
              </div>
            </InputGroup>
          </Form>
        </Row>
      </Row>
    </>
  );
}
