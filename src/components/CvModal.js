import React from 'react'
import Modal from 'react-modal'
import styled, { css, injectGlobal } from 'styled-components';
import Dropzone from 'react-dropzone'
import isEmpty from 'lodash/fp/isEmpty';
import { compose, withHandlers, withState } from 'recompose';

import { color, font, size } from "../theme";
import Hamburger from './Header/Hamburger';
import doUploadCv from "../utils/uploadCv"

injectGlobal`
    .ReactModal__Overlay {
        z-index: 11;
        opacity: 0;
        transition: opacity 300ms;

        &--after-open {
            opacity: 1;
        }
        &--before-close {
            opacity: 0;
        }
    }
`

const StyledModal = styled(Modal)`
    width: 100%;
    height: 100%;
    font-family: ${font("primary")};
    color: ${color("black")};
`
const Headline = styled.h1`
  font-family: ${font("display")};
  font-size: ${size(3)};
`

const Hint = styled.p`
    font-size: ${size(2)};
`

const StyledDropzone = styled(Dropzone)`
    width: 100%;
    height: 100%;
    ${props => !props.disabled && `
        cursor: pointer;
    `}
`

const DropzoneBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color("white")};
  text-align: center;
  padding: ${size(3)};
  transition: background-color 500ms, color 500ms;
  a {
    color: ${color("green")};
  }

    ${({ isDragActive }) => isDragActive && css`
        background-color: ${color("black")};
        color: ${color("white")};
    `};

    ${({ isDragReject }) => isDragReject && css`
        background-color: ${color("black")};
        color: ${color("white")};
    `};
`

const Error = styled.p`
  color: ${color("green")};
  font-size: ${size(3)};
  opacity: ${props => props.show ? "1" : "0"};
  transition: opacity 500ms;
`

const FormBrokenEmailLink = () => (
    <a href="mailto:hello@makersden.io?subject=Your%20CV%20form%20is%20broken.%20%3A(&body=There%20was%20en%20error%20uploading%20my%20CV%2C%20please%20check%20your%20form!">
        hello@makersden.io
    </a>
)

const CloseButtonContainer = styled.div`
    position: absolute;
  right: ${size(2)};
  top: ${size(2)};
  z-index: 11;
`

const CloseButton = styled(Hamburger).attrs({
    active: true,
})`
    &::before,
    &::after {
        background-color: ${color("black")};
    }
`

    const DropzoneContents = ({ isDragActive, isDragReject, uploadStatus }) => {
        if (uploadStatus === UPLOAD_STATUS.UPLOADING) {
            return (
                <Headline>Just a sec...</Headline>
            )
    }

    if (uploadStatus === UPLOAD_STATUS.SUCCESS) {
        return (
            <div>
                <Headline>Thanks. We'll get in touch, please be hungry!</Headline>
                <Hint>(Click anywhere to go back)</Hint>
            </div>
        )
    }

    if (uploadStatus === UPLOAD_STATUS.FAILED) {
        return (
            <Headline>Oops, something went wrong. <br /> Mind letting us know via <FormBrokenEmailLink />?</Headline>
        )
    }

    if (isDragActive) {
        return (
            <Headline>Drop it like it's hot!</Headline>
        )
    }

    if (isDragReject) {
        return (
            <Headline>A single pdf please.</Headline>
        )
    }

    return (
        <div>
            <Headline>Mind sending us your CV before we buy you lunch?</Headline>
            <Hint>(Drag the PDF over here or click to open an upload window)</Hint>
            <Error show={isDragReject || uploadStatus === UPLOAD_STATUS.REJECTED}>
                A single PDF please.
            </Error>
        </div>
    )
}

const CvModal = ({ isOpen, handleClick, handleClose, uploadCv, uploadStatus }) => (
    <StyledModal 
        onClose={handleClose}
        closeTimeoutMS={200}
        isOpen={isOpen}
    >
        <CloseButtonContainer>
            <CloseButton onClick={handleClose} />
        </CloseButtonContainer>
        <StyledDropzone 
            onMouseDown={handleClick}
            onTouchStart={handleClick}
            accept="application/pdf" 
            onDrop={uploadCv} 
            disabled={uploadStatus === UPLOAD_STATUS.FAILED || uploadStatus === UPLOAD_STATUS.SUCCESS}
            >
        {({ isDragActive, isDragReject }) => ( 
            <DropzoneBody isDragActive={isDragActive} isDragReject={isDragReject}>
                <DropzoneContents isDragActive={isDragActive} isDragReject={isDragReject} uploadStatus={uploadStatus} />
            </DropzoneBody>
        )}
        </StyledDropzone>
    </StyledModal>
)

const UPLOAD_STATUS = {
    WAITING: 'WAITING',
    UPLOADING: 'UPLOADING',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
    REJECTED: 'REJECTED',
}

export default compose(
    withState("uploadStatus", "setUploadStatus", UPLOAD_STATUS.WAITING),
    withHandlers({
        uploadCv: ({ setUploadStatus }) => (acceptedFiles, rejectedFiles) => {
            if (!isEmpty(rejectedFiles)) {
                setUploadStatus(UPLOAD_STATUS.REJECTED);
                return;
            }

            const [file] = acceptedFiles

            if (!file) {
                setUploadStatus(UPLOAD_STATUS.REJECTED);
                return;
            }

            setUploadStatus(UPLOAD_STATUS.UPLOADING);

            return doUploadCv(file)
                .then(() => setUploadStatus(UPLOAD_STATUS.SUCCESS))
                .catch(() => setUploadStatus(UPLOAD_STATUS.FAILED));
        },
        handleClose: ({ onClose, setUploadStatus, uploadStatus }) => () => {
            onClose();

            if (uploadStatus !== UPLOAD_STATUS.SUCCESS) {
                setUploadStatus(UPLOAD_STATUS.WAITING);
            }
        },
        handleClick: ({ onClose, uploadStatus }) => () => {
            if (uploadStatus === UPLOAD_STATUS.SUCCESS) {
                onClose();
            }
        }
    })
)(CvModal);
