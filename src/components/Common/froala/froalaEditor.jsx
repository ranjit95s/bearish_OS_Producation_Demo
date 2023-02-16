import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.css';
// import 'file-loader?name=[name].[ext]!./index.html';
import 'froala-editor/js/plugins.pkgd.min.js';
// import image from './image.jpg'
import axios from 'axios';
import { HttpsAction } from "../../../service/httpsAction";
import getAuthHeaders from "../../../service/apiCall";
import { Row, Col } from 'react-bootstrap';
import FroalaEditor from 'react-froala-wysiwyg';
import React, { createRef } from 'react';
import ReactDOM from 'react-dom';
import Froalaeditor from 'froala-editor';
import './style.css';
import { StyledFroalaEditor, FroalaEditorLeftToolbar, FroalaEditorMainBody, FroalaLeftPanel } from "./FroalaEditor.style";
// import * as html2pdf from "html2pdf.js";
import AddComment from "./comment/AddComment"
import MeetingPanel from "./MeetingPanel/MeetingPanel"
import ForkDoc from "./Fork/ForkDoc"
import RequestSent from "./AccessRequest/RequestSent";
import RequestAccess from "./AccessRequest/RequestAccess";
import AccessDenied from "./AccessRequest/AccessDenied";
import StartMeeting from "./StartMeeting/StartMeeting";
// import { parse } from 'node-html-parser';
// import socketIOClient from "socket.io-client";

import versionIcon from './icons/versions.svg';
import undoIcon from './icons/undo.svg';
import redoIcon from './icons/redo.svg';
import crossLineOnTextIcon from './icons/crossLineOnText.svg';
import HorizonteLineOnTextIcon from './icons/HorizonteLineOnText.svg';
import HorijentalLineIcon from './icons/HorijentalLine.svg';
import boldIcon from './icons/bold.svg';
import underlineIcon from './icons/underline.svg';
import crossWordIcon from './icons/crossWord.svg';
import orderListIcon from './icons/orderList.svg';
import unorderListIcon from './icons/unorderList.svg';
import textColorIcon from './icons/textColor.svg';
import colorPickerIcon from './icons/colorPicker.svg';
import leftSideTextIcon from './icons/leftSideText.svg';
import rightSideTextIcon from './icons/rightSideText.svg';
import centerTextIcon from './icons/centerText.svg';
import fixAlignTextIcon from './icons/fixAlignText.svg';
import tebLeftIcon from './icons/tebLeft.svg';
import tebRightIcon from './icons/tebRight.svg';
import eiconIcon from './icons/icon.svg';
import starIcon from './icons/star.svg';
import x2upIcon from './icons/X2up.svg';
import x2DownIcon from './icons/X2Down.svg';
import boxIcon from './icons/box.svg';
import lignSpaceIcon from './icons/lignSpace.svg';
import checkBoxIcon from './icons/checkBox.svg';
import qoutIcon from './icons/qout.svg';
import minuseIcon from './icons/minuse.svg';
import pluseIcon from './icons/pluse.svg';
import insertImageIcon from './icons/insertImage.svg';
import exportPdfIcon from './icons/exportPdf.svg';
import printDocIcon from './icons/printDoc.svg';
import startCallInVideoIcon from './icons/startCallInVideo.svg';
import addCommentIcon from './icons/addComment.svg';
import sendMessageIcon from './icons/sendMessage.svg';
import addVideoIcon from './icons/addVideo.svg';
import peopleIcon from "../../../Images/Bearish/group.svg";
import checkboxIcon from "../../../Images/Bearish/checkbox.svg";
import messagesIcon from "../../../Images/Bearish/message.svg";
import personIcon from "../../../Images/Bearish/person.svg";
import starnetIcon from "../../../Images/Bearish/fork.svg";
import { Button, Typography } from '@mui/material';
// import Soon from "../soon/Soon";
// const socket = socketIOClient(process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_PROD_URL);
class EditorComponent extends React.Component {

    constructor(props) {
        super(props);
        // const handleChangeNotes = (content) => {
        //     this.props.handleChangeNotesEditor(content)
        // }
        const setShowComment = () => {
            let newState = this.state
            newState.showComment = !newState.showComment
            newState.showMeetingPanel = false
            console.log('---setstate-17', this.props)
            this.setState(newState)
        }

        const setStartMeeting = () => {
            let newState = this.state
            newState.showShareWithDoc = true
            newState.showMeetingPanel = false
            console.log('---setstate-18', this.props)
            this.setState(newState)
        }

        const handleShowFork = (show) => {
            this.handleShowForkDoc(show)
        }

        const handleClickVersions = async () => {

            // let dataJson = {
            //     "type": "NOTES_CENTER"
            // }
            ///get total edits
            // axios({
            //     method: 'post',
            //     url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/totalShared`,
            //     data: dataJson,
            //     headers: getAuthHeaders()
            // }).then((res) => {
            //     console.log('res', res)
            // })

            // dataJson = {
            //     "type": "NOTES_CENTER",
            //     "docId": this.props.noteObject.id
            // }
            ///get total views
            // axios({
            //     method: 'post',
            //     url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/addViewsAndTotalViews`,
            //     data: dataJson,
            //     headers: getAuthHeaders()
            // }).then((res) => {
            //     console.log('res', res)
            // })

            // dataJson = {
            //     "type": "NOTES_CENTER",
            //     "docId": this.props.noteObject.id,
            //     "userEmail": localStorage.getItem("email"),
            //     "commentOnWord": "VersionsAndInsights",
            //     "comment": "Added by VersionsAndInsights"
            // }
            ///get total comments
            // axios({
            //     method: 'post',
            //     url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/addcommentAndTotalComments`,
            //     data: dataJson,
            //     headers: getAuthHeaders()
            // }).then((res) => {
            //     console.log('res', res)
            // })

            let docResult = await axios({
                method: 'get',
                // url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/getDocDataById/${this.props.noteObject.id}`,
                url: ``,
                headers: getAuthHeaders()
            })

            docResult = docResult.data.Data
            let forkResult = await axios({
                method: 'get',
                // url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/listAllForks/${this.props.noteObject.id}`,
                url: ``,
                headers: getAuthHeaders()
            })
            forkResult = forkResult.data
            let newState = this.state
            newState.versionAndInsight = {
                totalEdits: docResult.totalEdits ? docResult.totalEdits : 0,
                totalViews: docResult.totalViews ? docResult.totalViews : 0,
                totalSharedPeople: docResult.totalSharedPeople ? docResult.totalSharedPeople : 0,
                totalComments: docResult.totalComments ? docResult.totalComments : 0,
                sharedWith: docResult.sharedWith ? docResult.sharedWith : [],
                docOrWikiId: docResult.docOrWikiId ? docResult.docOrWikiId : 0,
                _id: docResult._id ? docResult._id : 0,
                forkList: forkResult.forkList && forkResult.forkList.forks ? forkResult.forkList.forks.map((e) => {
                    let tempSharedWith = e.sharedWith.filter((each) => {
                        return each.email === localStorage.getItem('email')
                    })
                    let tempFork = {
                        ...e,
                        permission: tempSharedWith && tempSharedWith.length > 0 ? tempSharedWith[0].accessLevel : ''
                    }
                    return tempFork
                }) : [],
                totalForks: forkResult.forkList && forkResult.forkList.totalForks ? forkResult.forkList.totalForks : 0
            }
            newState.showVersionsPopUp = true

            console.log(newState)
            console.log('---setstate-19', this.props)
            this.setState(newState)

            // dataJson = {
            //     "docId": "627bc1036782221b68ff5b84",
            //     "userName": "QWERTY",
            //     "userEmail": "abhay2@bearishos.com"
            // }

            // axios({
            //     method: 'post',
            //     url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/newDocVersionAndInsight`,
            //     data: dataJson,
            //     headers: getAuthHeaders()
            // }).then((res) => {
            //     console.log('res', res)
            // })
        }
        console.log('==============')
        // console.log(this.props.noteObject)
        const noteObject = this.props.noteObject

        var colorText = ['#000000', '#555555', '#797979', '#a3a2a2', '#c0c0c0', '#e0e0e0', '#c4a6a6', '#c99292', '#FFFFFF', '#000080', '#008000', '#5ee2a0', '#aaaa31', '#ffab0d', '#ff0000', '#800000', '#ff00ff', '#800080', '#0000ff', '#08f708', '#baffdd', '#c1c16f', '#f7ca75', '#ff8484', '#c33939', '#ff9bff', '#774c77', '#6a6aff', '#9dff9d', '#90d5b2', '#ffff00', '#ffe0a5', '#ffbaba', '#be6f6f', '#ffceff', '#c3a2c3'];
        var colorBackground = ['#000000', '#555555', '#797979', '#a3a2a2', '#c0c0c0', '#e0e0e0', '#c4a6a6', '#c99292', '#FFFFFF', '#000080', '#008000', '#5ee2a0', '#aaaa31', '#ffab0d', '#ff0000', '#800000', '#ff00ff', '#800080', '#0000ff', '#08f708', '#baffdd', '#c1c16f', '#f7ca75', '#ff8484', '#c33939', '#ff9bff', '#774c77', '#6a6aff', '#9dff9d', '#90d5b2', '#ffff00', '#ffe0a5', '#ffbaba', '#be6f6f', '#ffceff', '#c3a2c3'];
        Froalaeditor.ICON_TEMPLATES = {
            font_awesome: '<i class="fa fa-[NAME]" aria-hidden="true"></i>,',
            font_awesome_5: '<i class="fas fa-[FA5NAME]" aria-hidden="true"></i>',
            font_awesome_5s: '<i class="far fa-[FA5NAME]" aria-hidden="true"></i>',
            text: '<span style="">[NAME]</span>',
            image: '<img width="100%" height="100%" src="[PATH]" alt="">',
            svg: '<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="[PATH]"></path></svg>'
        }
        // Froalaeditor.DefineIconTemplate('image', '<img width="100%" height="100%" src="[PATH]" alt="">');
        Froalaeditor.DefineIcon('versions', { NAME: 'Versions', template: 'image', PATH: versionIcon });
        Froalaeditor.RegisterCommand('versions', {
            title: 'Versions',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                handleClickVersions()
            }
        });

        Froalaeditor.DefineIcon('undo', { template: 'image', PATH: undoIcon });
        Froalaeditor.RegisterCommand('undo', {
            title: 'Undo',
        });

        Froalaeditor.DefineIcon('redo', { template: 'image', PATH: redoIcon });
        Froalaeditor.RegisterCommand('redo', {
            title: 'Redo',
        });

        Froalaeditor.DefineIcon('clearFormatting', { template: 'image', PATH: crossLineOnTextIcon });
        Froalaeditor.RegisterCommand('clearFormatting', {
            title: '',
        });

        Froalaeditor.DefineIcon('strikeThrough', { template: 'image', PATH: HorizonteLineOnTextIcon });
        Froalaeditor.RegisterCommand('strikeThrough', {
            title: '',
        });

        Froalaeditor.DefineIcon('insertHR', { template: 'image', PATH: HorijentalLineIcon });
        Froalaeditor.RegisterCommand('insertHR', {
            title: '',
        });

        Froalaeditor.DefineIcon('bold', { template: 'image', PATH: boldIcon });
        Froalaeditor.RegisterCommand('bold', {
            type: 'button',
            toggle: true,
            refresh: function refresh($btn) {
                var format = this.format.is('strong');
                $btn.toggleClass('fr-active', format).attr('aria-pressed', format);
            }
        });

        Froalaeditor.DefineIcon('underline', { template: 'image', PATH: underlineIcon });
        Froalaeditor.RegisterCommand('underline', {
            title: '',
            toggle: true,
            refresh: function refresh($btn) {
                var format = this.format.is('u');
                $btn.toggleClass('fr-active', format).attr('aria-pressed', format);
            }
        });

        Froalaeditor.DefineIcon('italic', { template: 'image', PATH: crossWordIcon });
        Froalaeditor.RegisterCommand('italic', {
            title: '',
            toggle: true,
            refresh: function refresh($btn) {
                var format = this.format.is('em');
                $btn.toggleClass('fr-active', format).attr('aria-pressed', format);
            }
        });

        Froalaeditor.DefineIcon('formatOL', { NAME: 'Ordered List', template: 'image', PATH: orderListIcon });
        Froalaeditor.DefineIcon('formatOLSimple', { NAME: 'Ordered List', template: 'image', PATH: orderListIcon });
        Froalaeditor.RegisterCommand('formatOLSimple', {
            title: '',
            type: 'dropdown',
            html: function html() {
                var c = '<ul class="fr-dropdown-list" role="presentation">';
                var options = {
                    'default': 'Default',
                    'lower-alpha': 'Lower Alpha',
                    'lower-greek': 'Lower Greek',
                    'lower-roman': 'Lower Roman',
                    'upper-alpha': 'Upper Alpha',
                    'upper-roman': 'Upper Roman'
                };

                for (var val in options) {
                    c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"formatOLSimple\" data-param1=\"".concat(val, "\" \n title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
                }

                c += '</ul>';
                return c;
            },
            callback: function callback(cmd, param) {
                this.lists.format('OL', param);
            },
            refresh: function refresh($btn) {
                this.lists.refresh($btn, 'OL');
            },
            refreshOnShow: function refreshOnShow($btn, $dropdown) {

            },
            plugin: 'lists'
        });

        Froalaeditor.DefineIcon('formatUL', { template: 'image', PATH: unorderListIcon });
        Froalaeditor.RegisterCommand('formatUL', {
            title: '',
            type: 'dropdown',
            html: function html() {
                var c = '<ul class="fr-dropdown-list" role="presentation">';
                var options = {
                    'default': 'Default',
                    circle: 'Circle',
                    disc: 'Disc',
                    square: 'Square'
                };

                for (var val in options) {
                    c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"formatUL\" data-param1=\"".concat(val, "\" \n title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
                }

                c += '</ul>';
                return c;
            },
            refresh: function refresh($btn) {
                this.lists.refresh($btn, 'UL');
            },
            callback: function callback(cmd, param) {
                this.lists.format('UL', param);
            },
            plugin: 'lists'
        });

        Froalaeditor.DefineIcon('textColor', { template: 'image', PATH: textColorIcon });
        Froalaeditor.RegisterCommand('textColor', {
            title: '',
            undo: false,
            focus: true,
            refreshOnCallback: false,
            popup: true,
            callback: function callback() {
                this.opts.colorsText = colorText;
                this.opts.colorsStep = 9;
                this.opts.colorsButtons = ['Done'];
                if (!this.popups.isVisible('textColor.picker')) {
                    this.colors.showColorsPopup('textColor');
                } else {
                    if (this.$el.find('.fr-marker').length) {
                        this.events.disableBlur();
                        this.selection.restore();
                    }

                    this.popups.hide('textColor.picker');
                }
            }
        });

        Froalaeditor.DefineIcon('backgroundColor', { template: 'image', PATH: colorPickerIcon });
        Froalaeditor.RegisterCommand('backgroundColor', {
            title: '',
            undo: false,
            focus: true,
            refreshOnCallback: false,
            popup: true,
            callback: function callback() {
                this.opts.colorsBackground = colorBackground;
                this.opts.colorsStep = 9;
                if (!this.popups.isVisible('backgroundColor.picker')) {
                    this.colors.showColorsPopup('backgroundColor');
                } else {
                    if (this.$el.find('.fr-marker').length) {
                        this.events.disableBlur();
                        this.selection.restore();
                    }

                    this.popups.hide('backgroundColor.picker');
                }
            }
        });

        Froalaeditor.DefineIcon('fontSize', { NAME: '14', template: 'text' });
        Froalaeditor.RegisterCommand('fontSize', {
            type: 'dropdown',
            template: 'text',
            displaySelection: function displaySelection(editor) {
                editor.opts.fontSizeSelection = '14px';
                return editor.opts.fontSizeSelection;
            },
            displaySelectionWidth: 17,
            defaultSelection: function defaultSelection(editor) {
                return editor.opts.fontSizeDefaultSelection;
            },
            html: function html() {
                var c = '<ul class="fr-dropdown-list" role="presentation">';
                var options = this.opts.fontSize;

                for (var i = 0; i < options.length; i++) {
                    var val = options[i];
                    c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"fontSize\" data-param1=\"".concat(val).concat(this.opts.fontSizeUnit, "\" title=\"").concat(val, "\">").concat(val, "</a></li>");
                }

                c += '</ul>';
                return c;
            },
            callback: function callback(cmd, val) {
                this.opts.fontSizeSelection = val;
                this.fontSize.apply(val);
            },
            refresh: function refresh($btn) {
                this.fontSize.refresh($btn);
            },
            refreshOnShow: function refreshOnShow($btn, $dropdown) {
                this.fontSize.refreshOnShow($btn, $dropdown);
            },
            plugin: 'fontSize'
        });

        Froalaeditor.DefineIcon('fontMinus', { template: 'image', PATH: minuseIcon });
        Froalaeditor.RegisterCommand('fontMinus', {
            type: 'button',
            title: '',
            callback: function callback() {
                this.opts.fontSizeSelection = (parseInt(this.opts.fontSizeSelection) - 1) + 'px';
                this.fontSize.apply(this.opts.fontSizeSelection);
            }
        });

        Froalaeditor.DefineIcon('fontPlus', { template: 'image', PATH: pluseIcon });
        Froalaeditor.RegisterCommand('fontPlus', {
            type: 'button',
            title: '',
            callback: function callback() {
                this.opts.fontSizeSelection = (parseInt(this.opts.fontSizeSelection) + 1) + 'px';
                this.fontSize.apply(this.opts.fontSizeSelection);
            }
        });

        Froalaeditor.DefineIcon('alignLeft', { template: 'image', PATH: leftSideTextIcon });
        Froalaeditor.RegisterCommand('alignLeft', {
            type: 'button',
            title: '',
            callback: function callback() {
                this.align.apply('left');
            },
            refresh: function refresh($btn) {
                this.align.refreshForToolbar($btn);
            },
            plugin: 'align'
        });

        Froalaeditor.DefineIcon('alignRight', { template: 'image', PATH: rightSideTextIcon });
        Froalaeditor.RegisterCommand('alignRight', {
            type: 'button',
            title: '',
            callback: function callback() {
                this.align.apply('right');
            },
            refresh: function refresh($btn) {
                this.align.refreshForToolbar($btn);
            },
            plugin: 'align'
        });

        Froalaeditor.DefineIcon('alignCenter', { template: 'image', PATH: centerTextIcon });
        Froalaeditor.RegisterCommand('alignCenter', {
            type: 'button',
            title: '',
            callback: function callback() {
                this.align.apply('center');
            },
            refresh: function refresh($btn) {
                this.align.refreshForToolbar($btn);
            },
            plugin: 'align'
        });

        Froalaeditor.DefineIcon('alignJustify', { template: 'image', PATH: fixAlignTextIcon });
        Froalaeditor.RegisterCommand('alignJustify', {
            type: 'button',
            title: '',
            callback: function callback() {
                this.align.apply('justify');
            },
            refresh: function refresh($btn) {
                this.align.refreshForToolbar($btn);
            },
            plugin: 'align'
        });

        Froalaeditor.DefineIcon('fontFamily', { NAME: 'Arial', template: 'text' });
        Froalaeditor.RegisterCommand('fontFamily', {
            type: 'dropdown',
            displaySelection: function displaySelection(editor) {
                return editor.opts.fontFamilySelection;
            },
            defaultSelection: function defaultSelection(editor) {
                return editor.opts.fontFamilyDefaultSelection;
            },
            displaySelectionWidth: 120,
            html: function html() {
                var c = '<ul class="fr-dropdown-list" role="presentation">';
                var options = this.opts.fontFamily;

                for (var val in options) {
                    if (options.hasOwnProperty(val)) {
                        c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"fontFamily\" data-param1=\"".concat(val, "\" \n        style=\"font-family: ").concat(val, "\" title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
                    }
                }

                c += '</ul>';
                return c;
            },
            callback: function callback(cmd, val) {
                this.opts.fontFamilySelection = val;
                this.fontFamily.apply(val);
            },
            refresh: function refresh($btn) {
                this.fontFamily.refresh($btn);
            },
            refreshOnShow: function refreshOnShow($btn, $dropdown) {
                this.fontFamily.refreshOnShow($btn, $dropdown);
            },
            plugin: 'fontFamily'
        });

        Froalaeditor.DefineIcon('paragraphFormat', { NAME: 'Normal', template: 'text' });
        Froalaeditor.RegisterCommand('paragraphFormat', {
            type: 'dropdown',
            displaySelection: function displaySelection(editor) {
                return editor.opts.paragraphFormatSelection;
            },
            defaultSelection: function defaultSelection(editor) {
                return editor.language.translate(editor.opts.paragraphDefaultSelection);
            },
            displaySelectionWidth: 80,
            html: function html() {
                var c = '<ul class="fr-dropdown-list" role="presentation">';
                var options = this.opts.paragraphFormat;

                for (var val in options) {
                    if (options.hasOwnProperty(val)) {
                        var shortcut = this.shortcuts.get('paragraphFormat.' + val);

                        if (shortcut) {
                            shortcut = '<span class="fr-shortcut">' + shortcut + '</span>';
                        } else {
                            shortcut = '';
                        }
                        c += '<li role="presentation"><a class="fr-command" tabIndex="-1" role="option" data-cmd="paragraphFormat" data-param1="' + val + '" title="' + this.language.translate(options[val]) + '">' + this.language.translate(options[val]) + '</a></li>';
                    }
                }

                c += '</ul>';
                return c;
            },
            callback: function callback(cmd, val) {
                this.opts.paragraphFormatSelection = val;
                this.paragraphFormat.apply(val);
            },
            refresh: function refresh($btn) {
                this.paragraphFormat.refresh($btn);
            },
            refreshOnShow: function refreshOnShow($btn, $dropdown) {
                this.paragraphFormat.refreshOnShow($btn, $dropdown);
            },
            plugin: 'paragraphFormat'
        });

        Froalaeditor.DefineIcon('indent', { template: 'image', PATH: tebLeftIcon });
        Froalaeditor.RegisterCommand('indent', {
            title: '',
        });

        Froalaeditor.DefineIcon('outdent', { template: 'image', PATH: tebRightIcon });
        Froalaeditor.RegisterCommand('outdent', {
            title: '',
        });

        Froalaeditor.DefineIcon('emoticons', { template: 'image', PATH: eiconIcon });
        Froalaeditor.RegisterCommand('emoticons', {
            title: '',
            undo: false,
            focus: true,
            refreshAfterCallback: false,
            popup: true,
            callback: function callback() {
                if (this.popups.isVisible('emoticons')) {
                    if (this.$el.find('.fr-marker').length) {
                        this.events.disableBlur();
                        this.selection.restore();
                    }

                    this.popups.hide('emoticons');
                } else {
                    this.emoticons.showEmoticonsPopup();
                }
            },
            plugin: 'emoticons'
        });

        Froalaeditor.DefineIcon('specialCharacters', { template: 'image', PATH: starIcon });
        Froalaeditor.RegisterCommand('specialCharacters', {
            title: '',
            icon: 'specialCharacters',
            undo: false,
            focus: false,
            popup: true,
            refreshAfterCallback: false,
            plugin: 'specialCharacters',
            showOnMobile: true,
            callback: function callback() {
                if (!this.popups.isVisible('specialCharacters')) {
                    this.specialCharacters.showSpecialCharsPopup();
                } else {
                    if (this.$el.find('.fr-marker')) {
                        this.events.disableBlur();
                        this.selection.restore();
                    }

                    this.popups.hide('specialCharacters');
                }
            }
        });

        Froalaeditor.DefineIcon('superscript', { template: 'image', PATH: x2upIcon });
        Froalaeditor.RegisterCommand('superscript', {
            title: '',
        });

        Froalaeditor.DefineIcon('subscript', { template: 'image', PATH: x2DownIcon });
        Froalaeditor.RegisterCommand('subscript', {
            title: '',
        });

        Froalaeditor.DefineIcon('insertTable', { template: 'image', PATH: boxIcon });
        Froalaeditor.RegisterCommand('insertTable', {
            title: '',
            undo: false,
            focus: true,
            refreshOnCallback: false,
            popup: true,
            callback: function callback() {
                if (!this.popups.isVisible('table.insert')) {
                    this.table.showInsertPopup();
                } else {
                    if (this.$el.find('.fr-marker').length) {
                        this.events.disableBlur();
                        this.selection.restore();
                    }

                    this.popups.hide('table.insert');
                }
            },
            plugin: 'table'
        });

        Froalaeditor.DefineIcon('lineSpacing', { template: 'image', PATH: lignSpaceIcon });
        Froalaeditor.RegisterCommand('lineSpacing', {
            type: 'dropdown',
            html: function html() {
                var c = '<ul class="fr-dropdown-list" role="presentation">';
                var options = {
                    'default': 'Default',
                    'single': 'Single',
                    '1-15': '1.15',
                    '1-5': '1.5',
                    'double': 'Double',
                };

                for (var val in options) {
                    c += "<li role=\"presentation\"><a class=\"fr-command\" tabIndex=\"-1\" role=\"option\" data-cmd=\"lineSpacing\" data-param1=\"".concat(val, "\" \n title=\"").concat(options[val], "\">").concat(options[val], "</a></li>");
                }

                c += '</ul>';
                return c;
            },
            callback: function callback(cmd, val) {
            },
            refresh: function refresh($btn) {
            },
            refreshOnShow: function refreshOnShow($btn, $dropdown) {
            }
        });

        Froalaeditor.DefineIcon('addTask', { template: 'image', PATH: checkBoxIcon });
        Froalaeditor.RegisterCommand('addTask', {
            title: '',
        });

        Froalaeditor.DefineIcon('quote', { template: 'image', PATH: qoutIcon });
        Froalaeditor.RegisterCommand('quote', {
            title: '',
            type: 'dropdown',
            html: function html() {
                var c = '<ul class="fr-dropdown-list" role="presentation">';
                var options = {
                    increase: 'Increase',
                    decrease: 'Decrease'
                };

                for (var val in options) {
                    if (options.hasOwnProperty(val)) {
                        var shortcut = this.shortcuts.get("quote.".concat(val));
                        c += "<li role=\"presentation\"><a class=\"fr-command fr-active ".concat(val, "\" tabIndex=\"-1\" role=\"option\" data-cmd=\"quote\" data-param1=\"").concat(val, "\" title=\"").concat(options[val], "\">").concat(this.language.translate(options[val])).concat(shortcut ? "<span class=\"fr-shortcut\">".concat(shortcut, "</span>") : '', "</a></li>");
                    }
                }

                c += '</ul>';
                return c;
            },
            callback: function callback(cmd, val) {
                this.quote.apply(val);
            },
            plugin: 'quote'
        });

        Froalaeditor.DefineIcon('Fork Doc', { NAME: "Fork Doc", template: "text" });
        Froalaeditor.RegisterCommand('Fork Doc', {
            title: '',
            callback: function callback() {
                handleShowFork(true)
            }
        });

        ////////quick insert

        Froalaeditor.DefineIcon('insertImage', { NAME: "Insert Image", template: 'image', PATH: insertImageIcon });
        // Froalaeditor.RegisterCommand('insertImage', {
        //   title: '',
        // });

        Froalaeditor.DefineIcon('getPDF', { NAME: "Export PDF", template: 'image', PATH: exportPdfIcon });
        // Froalaeditor.RegisterCommand('getPDF', {
        //   title: '',
        // });

        Froalaeditor.DefineIcon('print', { NAME: "Print Doc", template: 'image', PATH: printDocIcon });
        // Froalaeditor.RegisterCommand('print', {
        //   title: '',
        // });

        // Froalaeditor.DefineIcon('insertImage', {NAME: "Insert Image", PATH: startCallInVideoIcon});
        // Froalaeditor.RegisterCommand('insertImage', {
        //   title: '',
        // });

        // Froalaeditor.DefineIcon('insertImage', {NAME: "Insert Image", PATH: addCommentIcon});
        // Froalaeditor.RegisterCommand('insertImage', {
        //   title: '',
        // });

        // Froalaeditor.DefineIcon('insertImage', {NAME: "Insert Image", PATH: sendMessageIcon});
        // Froalaeditor.RegisterCommand('insertImage', {
        //   title: '',
        // });

        Froalaeditor.DefineIcon('insertVideo', { NAME: "Insert Video", template: 'image', PATH: addVideoIcon });
        // Froalaeditor.RegisterCommand('insertVideo', {
        //   title: '',
        // });

        // editor.$second_tb.prepend(FroalaEditor.POWERED_BY);
        console.log('===============================================', this.props.isReadOnly)
        this.config = {
            pluginsEnabled: null,
            language: 'en',
            heightMax: 500,
            heightMin: 500,
            listAdvancedTypes: true,
            key: "8JF3bB2A5A4C3A1E2E2zPAENHMf1JPQRFZBTBf1WWEPYDbB3H3E2A16A19B7C5C6A2C3==",
            attribution: false,
            charCounterCount: false,
            quickInsertEnabled: false,
            toolbarButtons: [
                ['versions'],
                ['undo', 'redo', 'clearFormatting', 'strikeThrough', 'insertHR'],
                ['paragraphFormat', 'fontFamily', 'bold', 'underline', 'italic', 'formatOLSimple', 'formatUL', 'textColor', 'backgroundColor'],
                ['fontSize', 'fontMinus', 'fontPlus', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify'],
                ['indent', 'outdent', 'emoticons', 'specialCharacters'],
                ['superscript', 'subscript', 'insertTable', 'lineSpacing'],
                ['addTask', 'quote', 'Fork Doc']
            ],
            events: {
                'initialized': function () {
                    const editor = this
                    editor.html.set(noteObject.content)
                    document.getElementById('insert-image').addEventListener("click", function () {
                        var $ = editor.$;

                        if (!editor.shared.$qi_image_input) {
                            editor.shared.$qi_image_input = $(document.createElement('input')).attr('accept', 'image/' + editor.opts.imageAllowedTypes.join(', image/').toLowerCase()).attr('name', "quickInsertImage".concat(this.id)).attr('style', 'display: none;').attr('type', 'file');
                            $('body').first().append(editor.shared.$qi_image_input);
                            editor.events.$on(editor.shared.$qi_image_input, 'change', function () {
                                var inst = $(this).data('inst');

                                if (this.files) {
                                    inst.quickInsert.hide();
                                    inst.image.upload(this.files);
                                } // Chrome fix.


                                $(this).val('');
                            }, true);
                        }

                        editor.$qi_image_input = editor.shared.$qi_image_input;
                        if (editor.helpers.isMobile()) editor.selection.save();
                        editor.events.disableBlur();
                        editor.$qi_image_input.data('inst', editor)[0].click();
                    })
                    document.getElementById('add-video').addEventListener("click", function () {
                        var res = prompt(editor.language.translate('Paste the URL of the video you want to insert.'));

                        if (res) {
                            editor.video.insertByURL(res);
                        }
                    })
                    document.getElementById('export-pdf').addEventListener("click", function () {
                        // editor.opts.html2pdf = html2pdf;
                        if (editor.opts.html2pdf) {
                            editor.$el.css('text-align', 'left');
                            editor.opts.html2pdf().set({
                                margin: [10, 20],
                                html2canvas: {
                                    useCORS: true
                                }
                            }).from(editor.el).save();
                            setTimeout(function () {
                                editor.$el.css('text-align', '');
                            }, 100);
                        }
                    })
                    document.getElementById('print-doc').addEventListener("click", function () {
                        editor.print.run();
                    })
                    document.getElementById('add-comment').addEventListener("click", function () {
                        setShowComment()
                    })
                    // document.getElementById('start-call-in-video').addEventListener("click", function () {
                    //     setStartMeeting()
                    // })
                    document.getElementById('send-message').addEventListener("click", function () {
                        /////////////////
                    })
                },
                'contentChanged': function () {
                    // handleChangeNotes(this.html.get())
                }
            }
        };
        let tempUrl = window.location.href;
        tempUrl = tempUrl.split('/')
        console.log(tempUrl[tempUrl.length - 2], tempUrl[tempUrl.length - 1])
        this.state = {
            content: this.props.noteObject.content,
            showVersionsPopUp: false,
            showRequestSentPopUp: false,
            showRequestAccessPopUp: false,
            showAccessDeniedPopUp: false,
            showComment: false,
            commentList: [],
            isUpdated: this.props.noteObject.isUpdated,
            showShareWithDoc: false,
            showFork: false,
            noteObject: this.props.noteObject,
            versionAndInsight: {},
            meetingInfo: {
                meetingId: (tempUrl[tempUrl.length - 2] === 'join-meeting-room') ? tempUrl[tempUrl.length - 1] : null
            }
        };
        this.editorRef = createRef(null);
        this.handleModelChange = this.handleModelChange.bind(this);
        // console.log('--ssssssprops', props)
    }

    componentDidMount() {
        // console.log('------------prevProps', this.props)
        if (this.props.isLoad) {
            let newState = this.state
            newState.content = ''
            // console.log('---setstate-1', this.props)
            this.setState(newState)
        } else {
            let newState = this.state
            newState.content = this.props.noteObject.content
            // console.log('---setstate-2', this.props)
            this.setState(newState)
        }
        // socket.on('editorData', data => {
        //     // console.log('editorData', data)
        //     if (data && data.id == this.props.noteObject.id) {

        //         let newState = this.state
        //         newState.content = data.message
        //         this.setState(newState)
        //         this.handleModelChange(data.message)
        //         // setEditorType(data.type)
        //     }
        // });
    }
    componentDidUpdate(prevProps) {
        const textArea = this.editorRef.current;
        console.log('prevProps', prevProps)
        if (this.props.isReadOnly) {
            textArea?.editor?.edit?.off()
            console.log('aaaaaaaaaaaaaaaaaa')
        }
        if (this.props.noteObject.type && this.props.noteObject.isFork !== prevProps.noteObject.isFork) {
            let newState = this.state
            newState.content = this.props.noteObject.content
            // console.log('---setstate-3', this.props)
            this.setState(newState)
        }
        if (this.props.noteObject.type && this.props.noteObject.id !== prevProps.noteObject.id) {
            let newState = this.state
            newState.content = this.props.noteObject.content
            // console.log('---setstate-3', this.props)
            this.setState(newState)
        }
        console.log('curProps', this.props.noteObject.content)
        console.log('prevProps', prevProps.noteObject.content)
        if (this.props.noteObject.content != prevProps.noteObject.content) {
            let newState = this.state
            newState.content = this.props.noteObject.content
            console.log('---setstate-20', this.props)
            this.setState(newState)
        }

    }

    handleModelChange = (model) => {
        if (this.props.noteObject.type) {
            this.props.onChange && this.props.onChange({ value: model, id: this.props.noteObject.id })
            // if (this.props.forkInfo.forkId && this.props.noteObject.isFork && !this.props.goToOriginDoc) {

            //     let datajson = {
            //         editedData: model,
            //         docOrWikiId: this.props.forkInfo.docId,
            //         forkId: this.props.forkInfo.forkId,
            //         userEmail: localStorage.getItem("email")
            //     }

            //     axios({
            //         method: 'post',
            //         url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/editFork`,
            //         data: datajson,
            //         headers: getAuthHeaders()
            //     }).then(async function (response) {
            //         let { code, data } = response.data;
            //         if (code === 200) {
            //             let newState = this.state
            //             newState.content = model
            //             newState.isUpdated = true
            //             console.log('---setstate-4', this.props)
            //             this.setState(newState)
            //         }
            //     }).catch(function (error) {
            //         return error
            //     });
            // } else {
            //     HttpsAction({
            //         method: "POST",
            //         data: {
            //             workspaceId: this.props.docAndWikiInfo.workspaceId,
            //             docsAndWikiId: this.props.docAndWikiInfo.docsAndWikiId,
            //             value: model,
            //             editorId: this.props.noteObject.id,
            //             wikiId: this.props.docAndWikiInfo.wikiId,
            //             subEditorId: this.props.docAndWikiInfo.subEditorId,
            //         },
            //         url: `taskCenter/updateTextDocAndWiki`,
            //         positiveCallBack: async ({ data }) => {
            //             const type = data?.data?.type;
            //             const editedData = data?.data?.[type];

            //             let newState = this.state
            //             newState.content = editedData.value
            //             newState.isUpdated = true
            //             console.log('---setstate-5', this.props)
            //             // this.setState(newState)
            //             this.props.onChange({ editedData, type, id: this.props.noteObject.id })
            //         },
            //         negativeCallBack: (error) => {
            //             console.log(error)
            //         }
            //     });
            // }
        } else {
            this.props.handleChangeNotesEditor({ notes: { content: model } })
            // console.log('---setstate-24', this.props)
            // const content = model;
            // const splitvalue = content.split("\n");
            // const noteTitle = parse(splitvalue[0]).text

            // if (this.props.forkInfo.forkId && this.props.forkInfo.forkId !== "") {
            //     console.log('---setstate-23', this.props)
            //     let datajson = {
            //         editedData: content,
            //         docOrWikiId: this.props.noteInfo.noteId,
            //         forkId: this.props.forkInfo.forkId,
            //         userEmail: localStorage.getItem("email")
            //     }

            //     axios({
            //         method: 'post',
            //         url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/editFork`,
            //         data: datajson,
            //         headers: getAuthHeaders()
            //     }).then(async function (response) {
            //         let { code, data } = response.data;
            //         if (code === 200) {
            //         }
            //     }).catch(function (error) {
            //         console.log(error)
            //     });
            // } else if (this.props.noteInfo.noteId) {
            //     console.log('---setstate-22', this.props)
            //     let parsetitleHighlight = splitvalue.length > 1 ? parse(splitvalue[1]).text : "";

            //     let dataJson = {
            //         id: this.props.noteInfo.noteId,
            //         "notes": {
            //             image_url: "",
            //             highlight: parsetitleHighlight,
            //             title: noteTitle,
            //             content: content,
            //         },
            //     }

            //     HttpsAction({
            //         method: "POST",
            //         data: dataJson,
            //         url: `notesCenter/updateNotes`,
            //         positiveCallBack: (response) => {
            //             if (!response) return
            //             let { code, data } = response.data;

            //             if (code === 200 && data) {
            //                 // data.notes.content = formData.content;
            //                 // data.notes.title = formData.title;
            //                 // data.notes.highlight = formData.highlight;
            //                 console.log(data)
            //                 const newState = this.state
            //                 newState.content = content
            //                 newState.isUpdated = true
            //                 newState.isFinish = true
            //                 this.setState(newState)
            //                 console.log('---setstate-6', this.props)
            //                 this.props.handleChangeNotesEditor(data)
            //             } else if (code === 200) {
            //                 console.log('---setstate-26', this.props)
            //                 this.props.handleChangeNotesEditor({ notes: { content } })
            //             }
            //         },
            //         negativeCallBack: (error) => {
            //             console.log(error)
            //         }
            //     });

            // } else {
            //     console.log('---setstate-21', this.props)
            //     this.props.handleChangeNotesEditor({ notes: { content } })
            // }
        }
    }

    addComment = (comment) => {
        let dataJson = {
            "type": this.props.selectedWorkspaceId ? "TASK_CENTER" : "NOTES_CENTER",
            "docId": this.props.noteObject.id,
            "userEmail": localStorage.getItem("email"),
            "commentOnWord": "VersionsAndInsights",
            "comment": comment
        }
        if (this.props.selectedWorkspaceId) {
            dataJson.workspaceId = this.props.selectedWorkspaceId
        }
        axios({
            method: 'post',
            // url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/addcommentAndTotalComments`,
            url: ``,
            data: dataJson,
            headers: getAuthHeaders()
        }).then((res) => {
            const user = {
                name: localStorage.getItem("name"),
                id: localStorage.getItem('userID')
            }
            const newComment = {
                content: comment,
                user: user,
                commentedContent: '',
                commentID: '2'
            }
            let newState = this.state
            newState.commentList = [...newState.commentList, newComment]
            console.log('---setstate-7', this.props)
            this.setState(newState)
            console.log(this.state)
            console.log('addComment');
        })
    }

    handleViewCommentInDoc = (comment_id) => {
        console.log(comment_id)
    }

    handleShowForkDoc = (show) => {
        let newState = this.state
        newState.showFork = show
        newState.showVersionsPopUp = false
        console.log('---setstate-8', this.props)
        this.setState(newState)
    }

    handleShowRequestSentPopUp = (show) => {
        let newState = this.state
        newState.showRequestSentPopUp = show.value
        console.log('---setstate-9', this.props)
        this.setState(newState)
    }

    handleShowRequestAccessPopUp = async (show) => {
        let newState = this.state
        newState.showRequestAccessPopUp = show.value

        if (show.permission) {
            newState.forkAccessRequest = {
                forkId: show.forkId,
                permission: show.permission,
                info: show.info
            }
        }
        console.log('---setstate-10', this.props)
        this.setState(newState)
        console.log(show)
        if (show.action === 'request') {
            const name = show.fullname
            const userEmail = show.email;
            const owner = this.state.forkAccessRequest.info.sharedWith.filter(e => e.owner === true)
            let dataJson = {
                "docOrWikiId": this.props.noteObject.id,
                "forkId": this.state.forkAccessRequest.forkId,
                "forkName": this.state.forkAccessRequest.info.name,
                "forkAuthrizedUserEmail": owner && owner.length > 0 ? owner[0].email : "",
                "userEmail": userEmail,
                "firstName": name[0] ? name[0] : '',
                "lastName": name[1] ? name[1] : '',
                "accessLevel": this.state.forkAccessRequest.permission
            }
            await axios({
                method: 'post',
                // url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/requestAccess`,
                url: ``,
                data: dataJson,
                headers: getAuthHeaders()
            }).then((res) => {
                console.log('res', res)
            })

            this.handleShowRequestSentPopUp({ value: true })
        }
    }

    handleShowAccessDeniedPopUp = (show) => {
        let newState = this.state
        newState.showAccessDeniedPopUp = show.value
        console.log('---setstate-11', this.props)
        this.setState(newState)
        console.log(show)
        if (show.action === 'request') this.handleShowRequestAccessPopUp({ value: true, action: 'none' })
    }

    handleActionForkDoc = (data) => {
        if (data.hasPermission) {
            let newState = this.state
            newState.showVersionsPopUp = false
            console.log('---setstate-12', this.props)
            this.setState(newState)
            this.props.handleNavigation(`/notes-center/fork/${data.action}/${this.props.noteObject.id}/${data.forkId}`)
        } else {
            let newState = this.state
            newState.forkAccessRequest = {
                forkId: data.forkId,
                permission: data.permission,
                info: data.info
            }
            console.log('---setstate-13', this.props)
            this.setState(newState)
            this.handleShowAccessDeniedPopUp({ value: true, action: 'none' })
        }
    }

    handleShowShareWith = (show) => {
        let newState = this.state
        newState.showComment = false
        newState.showShareWithDoc = show
        console.log('---setstate-14', this.props)
        this.setState(newState)
    }

    handleStartMeeting = (data) => {
        let newState = this.state
        newState.showComment = false
        newState.showMeetingPanel = true
        newState.meetingInfo = data
        newState.showShareWithDoc = false
        console.log('---setstate-15', this.props)
        this.setState(newState)
    }

    handleCreateNewFork = (forkName) => {
        const userEmail = localStorage.getItem("email");
        let dataJson = {
            "docOrWikiId": this.props.noteObject.id,
            "forkName": forkName,
            "authenticUser": userEmail,
            "data": this.state.content
        }
        // axios({
        //     method: 'post',
        //     url: `${process.env.REACT_APP_NODE_ENV === "development" ? process.env.REACT_APP_BASE_API_URL_LOCAL : process.env.REACT_APP_BASE_API_URL}versionAndInsight/createNewFork`,
        //     data: dataJson,
        //     headers: getAuthHeaders()
        // }).then((res) => {
        // })
    }

    getShareDocHtml = (data) => {
        return data.map((each) => {
            function getFormatedDate(date) {
                let d = date ? new Date(date) : new Date('0000', '00', '00');
                let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
                let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                return `${da}/${mo}/${ye}`
            }
            return <Row className="documentSharedTableBody">
                <Col sm='3'>{each.name}</Col>
                <Col sm='3'>{getFormatedDate(each.lastEdited)}</Col>
                <Col sm='2'>{getFormatedDate(each.lastViewed)}</Col>
                <Col sm='2'><img src={checkboxIcon} /><span>{each.comments.length}</span></Col>
                <Col sm='2'><img src={checkboxIcon} /><span>0</span></Col>
            </Row>
        })
    }

    render() {
        console.log('aaaaaaaaaaaa')
        console.log('this.state.content', this.state.content)
        console.log('this.state.content', this.props)
        // this.editorRef && this.editorRef.current && this.editorRef.current.editor && this.editorRef.current.editor.html && this.editorRef.current.editor.html.set(this.state.noteContent)
        if (this.editorRef && this.editorRef.current && this.editorRef.current.editor && this.editorRef.current.editor.html) {

            if (this.props.noteObject.id && this.props.noteObject.content !== '' && this.editorRef.current.editor.html.get() == '') {
                this.editorRef.current.editor.html.set(this.props.noteObject.content)
            }
        }
        // if (this.editorRef && this.editorRef.current && this.editorRef.current.editor && this.editorRef.current.editor.html && !this.props.isLoad && !this.props.noteObject.type) {

        //     console.log('cccccccc')
        //     // if (this.editorRef.current.editor.html.get() == '') {
        //     //     this.editorRef.current.editor.html.set(this.props.noteObject.content)
        //     // }
        //     if (this.state.content != this.props.noteObject.content && !this.state.isUpdated) {
        //         this.editorRef.current.editor.html.set(this.props.noteObject.content)
        //     }
        // }
        // if (this.editorRef && this.editorRef.current && this.editorRef.current.editor && this.editorRef.current.editor.html && this.props.noteObject.type) {
        //     if (!this.state.isUpdated) {
        //         console.log('bbbbbbbbbb')
        //         this.editorRef.current.editor.html.set(this.props.noteObject.content)
        //     }
        // }

        return (
            <>
                {/* <input type='text' value={this.state.content} onChange={e => {
                    let newState = this.state;
                    newState.content = e.target.value
                    this.setState(newState)
                    this.handleModelChange(e.target.value)
                }
                } /> */}
                <div className="froalaEditorMainBody">
                    <StyledFroalaEditor>
                        <div className={this.props?.sharedNotePreview ? "sharedNotePreviewFroalaEditor" : "defaultfroalaEditor"}>
                            <FroalaEditorMainBody style={{ width: '100%' }}>
                                <FroalaEditor
                                    tag='textarea'
                                    ref={this.editorRef}
                                    config={this.config}
                                    model={this.state.content}
                                    onModelChange={(e) => {
                                        console.log('@@@@@@@@@@@')
                                        console.log(e)
                                        // setEditorData(e);
                                        let newState = this.state;
                                        newState.content = e
                                        this.setState(newState)
                                        if (this.props.noteObject.id) {
                                            // socket.emit('editor', { type: "read", message: e, id: this.props.noteObject.id });
                                        }
                                        this.handleModelChange(e)
                                        // this.props.handleChangeNotesEditor && this.props.handleChangeNotesEditor(e)
                                        // this.props.onChange && this.props.onChange({ value: e, id: this.props.noteObject.id })
                                    }}
                                />
                            </FroalaEditorMainBody>
                            {this.state.showComment && <AddComment commentLists={this.state.commentList} addComment={this.addComment} viewCommentInDoc={this.handleViewCommentInDoc} />}
                            {this.state.meetingInfo.meetingId && <MeetingPanel meetingInfo={this.state.meetingInfo} />}
                            <FroalaEditorLeftToolbar>
                                <div className={this.props?.sharedNotePreview ? "leftPanelMain" : "editorLeftToolbar"}>
                                    <div className='tool-text-design'>Tools</div>
                                    <Button className="btn-left-panel" id="insert-image"><img src={insertImageIcon} alt="" /></Button>
                                    <Typography className='icon-text-design'>Add Image</Typography>
                                    <Button className="btn-left-panel" id="add-video"><img src={addVideoIcon} alt="" /></Button>
                                    <Typography className='icon-text-design'>Add Video</Typography>
                                    <Button className="btn-left-panel" id="export-pdf"><img src={exportPdfIcon} alt="" /></Button>
                                    <Typography className='icon-text-design'>Download</Typography>
                                    <Button className="btn-left-panel" id="print-doc"><img src={printDocIcon} alt="" /></Button>
                                    <Typography className='icon-text-design'>Print</Typography>
                                    <Button className="btn-left-panel" id="add-comment"><img src={addCommentIcon} alt="" /></Button>
                                    <Typography className='icon-text-design'>Comments</Typography>
                                    <Button className="btn-left-panel" id="start-call-in-video"><img src={startCallInVideoIcon} alt="" /></Button>
                                    <Typography className='icon-text-design'>Start a Call</Typography>
                                    {/* <FroalaLeftPanel>
                                    <div className={'tooltip'}>
                                        <Button className="btn-left-panel" id="start-call-in-video">
                                            <img  src={startCallInVideoIcon}
                                                 alt=""/>
                                        </Button> */}
                                    {/* <span className={'tooltiptext'}>  <Soon/> </span> */}
                                    {/* </div>
                                </FroalaLeftPanel> */}
                                    <Button className="btn-left-panel" id="send-message"><img src={sendMessageIcon} alt="" /></Button>
                                    <Typography className='icon-text-design'>Open Messages</Typography>
                                </div>
                            </FroalaEditorLeftToolbar>
                        </div>
                    </StyledFroalaEditor>
                    <ForkDoc handleShowFork={this.handleShowForkDoc} showForkDoc={this.state.showFork} createNewFork={this.handleCreateNewFork} />
                    <RequestSent handleShowRequestSentPopUp={(data) => this.handleShowRequestSentPopUp(data)} showRequestSentPopUp={this.state.showRequestSentPopUp} />
                    <RequestAccess handleShowRequestAccessPopUp={(data) => this.handleShowRequestAccessPopUp(data)} showRequestAccessPopUp={this.state.showRequestAccessPopUp} />
                    <AccessDenied handleShowAccessDeniedPopUp={(data) => this.handleShowAccessDeniedPopUp(data)} showAccessDeniedPopUp={this.state.showAccessDeniedPopUp} />
                    <StartMeeting handleStartMeeting={this.handleStartMeeting} handleShowShareWith={this.handleShowShareWith} showShareWithDoc={this.state.showShareWithDoc} />
                    {this.state.showVersionsPopUp && (<div className="sharePopupBody">
                        <div className="versionsPopupMain">
                            <div className="versionsPopupSubMain">
                                <div className="versionTitle">Versions & Insights</div>
                            </div>
                            <div className="versionsPopupSubMain versionsPopupSubMainStatistic">
                                <div className="versionsStatistic">
                                    <div className="versionsStatisticLable colorPeople">People</div>
                                    <div className="versionsStatisticBody">
                                        <img src={peopleIcon} /><span className="versionsStatisticValue">{this.state.versionAndInsight.totalSharedPeople}</span>
                                    </div>
                                </div>
                                <div className="versionsStatistic">
                                    <div className="versionsStatisticLable colorTotalViews">Total Views</div>
                                    <div className="versionsStatisticBody">
                                        <img src={personIcon} /><span className="versionsStatisticValue">{this.state.versionAndInsight.totalViews}</span>
                                    </div>
                                </div>
                                <div className="versionsStatistic">
                                    <div className="versionsStatisticLable colorTotalEdits">Total Edits</div>
                                    <div className="versionsStatisticBody">
                                        <span className="versionsStatisticTotalEdits">S</span><span className="versionsStatisticValue">{this.state.versionAndInsight.totalEdits}</span>
                                    </div>
                                </div>
                                <div className="versionsStatistic">
                                    <div className="versionsStatisticLable colorComments">Comments</div>
                                    <div className="versionsStatisticBody">
                                        <img src={messagesIcon} /><span className="versionsStatisticValue">{this.state.versionAndInsight.totalComments}</span>
                                    </div>
                                </div>
                                <div className="versionsStatistic">
                                    <div className="versionsStatisticLable colorTasks">Tasks</div>
                                    <div className="versionsStatisticBody">
                                        <img src={checkboxIcon} /><span className="versionsStatisticValue">0</span>
                                    </div>
                                </div>
                            </div>
                            <Row className="versionsPopupSubMain versionsLine"></Row>
                            <div className="versionsPopupSubMain">
                                <div className="versionSubTitle">Number of Forks<span className="versionForkCreateButton" onClick={() => this.handleShowForkDoc(true)}>Create New Fork</span></div>
                                <div className="versionsStatisticBody">
                                    <img src={starnetIcon} /><span className="versionsStatisticValue">{this.state.versionAndInsight.totalForks}</span>
                                </div>
                                <div className="versionsForkList">
                                    <ol type="1">
                                        {this.state.versionAndInsight.forkList.map((each) => {
                                            return <li className="versionsForkRowText">{each.name}<span className="versionsForkViewBtn" onClick={() => this.handleActionForkDoc({ action: 'view', permission: 'VIEW', forkId: each._id, info: each, hasPermission: (each.permission === 'VIEW' || each.permission === 'FULL') })}>View</span><span className="versionsForkEditBtn" onClick={() => this.handleActionForkDoc({ action: 'edit', permission: 'EDIT', forkId: each._id, info: each, hasPermission: (each.permission === 'EDIT' || each.permission === 'FULL') })}>Edit Fork</span><span className="versionsForkAceessRequestBtn" onClick={() => this.handleShowRequestAccessPopUp({ value: true, forkId: each._id, info: each, permission: 'FULL' })}>Request Access</span></li>
                                        })}
                                    </ol>
                                </div>
                            </div>
                            <div className="versionsPopupSubMain">
                                <div className="versionSubTitle">Document Shared With</div>
                                <div className="documentSharedTable">
                                    <Row className="documentSharedTableHeader">
                                        <Col sm='3'>Name</Col>
                                        <Col sm='3'>Last Edited</Col>
                                        <Col sm='2'>Last Viewed</Col>
                                        <Col sm='2'>Comments</Col>
                                        <Col sm='2'>Tasks</Col>
                                    </Row>
                                    <Row className="versionsPopupSubMain versionsLine"></Row>
                                    {this.getShareDocHtml(this.state.versionAndInsight.sharedWith)}
                                </div>
                            </div>
                        </div>
                        <div className="sharePopupBodyBack" onClick={() => {
                            let newState = this.state
                            newState.showVersionsPopUp = false
                            console.log('---setstate-16', this.props)
                            this.setState(newState)
                        }
                        } />
                    </div>)}
                </div>
            </>
        );
    }
}

export default EditorComponent;
