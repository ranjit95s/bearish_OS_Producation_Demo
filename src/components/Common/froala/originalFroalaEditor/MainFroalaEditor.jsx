import React, {useEffect, useState, useRef} from "react";
import {Stack} from "@mui/material";
import FroalaEditor from "react-froala-wysiwyg";
import axios from 'axios';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/code_beautifier.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/code_view.min.js';
import 'froala-editor/js/plugins/cryptojs.min.js';
import 'froala-editor/js/plugins/draggable.min.js';
import 'froala-editor/js/plugins/edit_in_popup.min.js';
import 'froala-editor/js/plugins/emoticons.min.js';
import 'froala-editor/js/plugins/entities.min.js';
import 'froala-editor/js/plugins/file.min.js';
import 'froala-editor/js/plugins/files_manager.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/forms.min.js';
import 'froala-editor/js/plugins/fullscreen.min.js';
import 'froala-editor/js/plugins/help.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/image_manager.min.js';
import 'froala-editor/js/plugins/inline_class.min.js';
import 'froala-editor/js/plugins/inline_style.min.js';
import 'froala-editor/js/plugins/line_breaker.min.js';
import 'froala-editor/js/plugins/line_height.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/markdown.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/paragraph_style.min.js';
import 'froala-editor/js/plugins/print.min.js';
import 'froala-editor/js/plugins/quick_insert.min.js';
import 'froala-editor/js/plugins/quote.min.js';
import 'froala-editor/js/plugins/save.min.js';
import 'froala-editor/js/plugins/special_characters.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/track_changes.min.js';
import 'froala-editor/js/plugins/trim_video.min.js';
import 'froala-editor/js/plugins/url.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/word_paste.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/plugins/char_counter.min.css';
import 'froala-editor/css/plugins/code_view.min.css';
import 'froala-editor/css/plugins/colors.min.css';
import 'froala-editor/css/plugins/draggable.min.css';
import 'froala-editor/css/plugins/emoticons.min.css';
import 'froala-editor/css/plugins/file.min.css';
import 'froala-editor/css/plugins/files_manager.min.css';
import 'froala-editor/css/plugins/fullscreen.min.css';
import 'froala-editor/css/plugins/help.min.css';
import 'froala-editor/css/plugins/image.min.css';
import 'froala-editor/css/plugins/image_manager.css';
import 'froala-editor/css/plugins/line_breaker.min.css';
import 'froala-editor/css/plugins/markdown.min.css';
import 'froala-editor/css/plugins/quick_insert.min.css';
import 'froala-editor/css/plugins/special_characters.min.css';
import 'froala-editor/css/plugins/table.min.css';
import 'froala-editor/css/plugins/trim_video.min.css';
import 'froala-editor/css/plugins/video.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import {froalaEditorConfig} from "./MainFroalaEditor.config";

import socketIOClient from "socket.io-client";

const MainFroalaEditor = ({onChange = e => e, value = ``, id, width, height, permissionType, type, docsData, wikiData}, props) => {
    const noteId =  id
    const CONFIG = {
        ...froalaEditorConfig({width, height})
    };
    const [editorData, setEditorData] = useState(value);
    const [editorType, setEditorType] = useState();
    const froalaRef = useRef()
    const textArea = froalaRef.current;

    const [socket] = useState(() => socketIOClient(process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_PROD_URL));
    useEffect(() => {
        socket.on('editorData', data => {
            console.log("data", data)
            if(data){
                setEditorData(data.message)
                setEditorType(data.type)
            }
        });

        if(permissionType && permissionType != "e"){
            textArea?.editor?.edit.off();
        }
    }, [socket, textArea])

    useEffect(() => {
        setEditorData(value)
    }, [value]);

    const getNotesData = async () =>{
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}notesCenter/getNotesById/`+noteId
        }).then(function (response) {
            if(response.data.code === 200){
                setEditorData(response.data.data[0].notes.content)
            }
        })
    }

    const getDocsData = async (type) =>{
        const typeData = type=="docs" ? docsData : wikiData

        axios({
            method: 'post',
            url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}taskCenter/getDocAndWikiData`,
            data: {
                workspaceId: docsData?.workspaceId,
                docsAndWikiId: docsData?.docsId
            }
        }).then(function (response) {
            const typeCheck = response?.data?.data?.type;
            const editedData = response?.data?.data?.[typeCheck];

            if (typeCheck === `docs`) {
                setEditorData(editedData.value);
            }

            if (typeCheck === `wiki`) {
                const wiki = editedData.find(e => e._id === docsData.wikiId);
                console.log(wiki.value)
                setEditorData(wiki.value);
            }
        })
    }

    useEffect(() => {
        // if(wikiData){
        //     console.log("===============", value)
        //     if (wikiData.selectedId) {
        //         let obj = wikiData.wikis.find((d) => d?._id === wikiData.selectedId);
        //         if (wikiData.subId) {
        //             obj = obj.subEditor.find((e) => e?._id === wikiData.subId)
        //         }
        //         setEditorData(obj);
        //     }
        // }else
        if(type=="docs"){
            getDocsData("docs")
        }else if(type=="wiki"){
            getDocsData("wiki")
        }else if(props.permissionType || permissionType){
            getNotesData()
        }

    }, [setEditorData])

    return (
        <React.Fragment>
            <Stack>
                <FroalaEditor
                    id="textarea"
                    config={CONFIG}
                    model={editorData}
                    onModelChange={(e) => {
                        setEditorData(e);
                        socket.emit('editor', {type: "read", message: e, id: noteId});
                        onChange({value: e, id})
                    }}
                    ref={froalaRef}
                />
            </Stack>
        </React.Fragment>
    )
};

export default MainFroalaEditor;