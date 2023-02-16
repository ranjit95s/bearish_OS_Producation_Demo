import styled from "styled-components";

export const StyledFroalaEditor = styled.div`
 
  .defaultfroalaEditor {
       /* border-radius: 12px; */
      padding: 0;
      /* margin: 0 0 1rem 0; */
      /* background-color: #fff; */
      min-width: 900px;
      width: 100%;
      display: flex;
      position: relative;
      /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16), inset 0 5px 6px 0 rgba(0, 0, 0, 0.16); */
  }
  
  .sharedNotePreviewFroalaEditor {
    /* border-radius: 12px; */
    padding: 0;
    /* margin: 0 0 1rem 0; */
    /* background-color: #fff; */
    min-width: 950px;
    width: 100%;
    display: flex;
    position: relative;
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16), inset 0 5px 6px 0 rgba(0, 0, 0, 0.16); */
  }
`;

export const FroalaEditorLeftToolbar = styled.div`
  .editorLeftToolbar {
    /* border-radius: 12px; */
    padding: 15px 0;
    margin: 0 0 1rem 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 100px;
    height: 450px;
    right: 0;
    text-align: -webkit-center;
    /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16), inset 0 5px 6px 0 rgba(0, 0, 0, 0.16); */
  }
  
  .leftPanelMain {
    padding-top: 200px;
    margin-left: 14px;
    padding-right: unset;
  }
`;

export const FroalaEditorMainBody = styled.div`
  padding: 0;
  margin: 0;
`;

export const FroalaLeftPanel = styled.div`
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  opacity: 1;
}

.tooltip .tooltiptext {
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16), inset 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  top: 10px;
  right: 38px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
`;