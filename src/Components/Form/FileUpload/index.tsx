/* eslint-disable react-hooks/exhaustive-deps */
import { useDropzone } from 'react-dropzone';
import { Dispatch, FunctionComponent, useCallback } from 'react';
import fileupload from '../../../assests/icons/fileupload.png';
import { fileUploadToBase64 } from '../../../utils/services';
import { FileDropContainer, FileDropDetails } from '../form.styles';

const FileUploadDrop: FunctionComponent<{ setFile: Dispatch<any> }> = ({ setFile }) => {

    const onDrop = useCallback(async (acceptedFiles: any) => {

        let file = {
            file_name: acceptedFiles?.[0]?.name,
            file_path: acceptedFiles?.[0]?.path,
            file_size: acceptedFiles?.[0]?.size,
            file_type: acceptedFiles?.[0]?.type,
            file_data: acceptedFiles?.[0],
            converted_file_base64: await fileUploadToBase64(acceptedFiles?.[0])
        }
        setFile(file);
    }, []);
    const { getRootProps, getInputProps, isDragReject } = useDropzone({
        onDrop,
        multiple: true,
        accept: {
            'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.pdf', '.docx', '.doc'],
            'video/mp4': ['.mp4']
        }
    });

    return (
            <FileDropContainer {...getRootProps()}>
                <input {...getInputProps()} />
                <img src={fileupload} alt="file-upload-icon" />
                <FileDropDetails>
                    {isDragReject ? (
                        <p className="error">Sorry , This app only support images or pdf files</p>
                    ) : (
                        <>
                            
                            <span>Drag and Drop it here Or </span>  <span className='under'> Browse File</span>
                           
                            <h4>Supported formates: JPEG, PNG, MP4</h4>
                        </>
                    )}
                </FileDropDetails>
            </FileDropContainer>
    );
};

export default FileUploadDrop;
