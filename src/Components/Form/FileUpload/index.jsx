/* eslint-disable react-hooks/exhaustive-deps */
import { useDropzone } from 'react-dropzone';
import { Dispatch, FunctionComponent, useCallback, useState } from 'react';
import fileupload from '../../../assests/icons/fileupload.png';
import { fileUploadToBase64 } from '../../../utils/services';
import { FileDropContainer, FileDropDetails, ImageContainer } from '../form.styles';

const FileUploadDrop = ({ setFile }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);


    const onDrop = useCallback(async (acceptedFiles) => {

        const filesWithPreview = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file)
            })
        );

        setSelectedFiles([...selectedFiles, ...filesWithPreview]);

        const files = await Promise.all(filesWithPreview.map(async (file) => {
            return {
                file_name: file.name,
                file_path: file.path,
                file_size: file.size,
                file_type: file.type,
                file_data: file,
                converted_file_base64: await fileUploadToBase64(file)
            };
        }));

        setFile(files);
    }, [selectedFiles, setFile]);


    const { getRootProps, getInputProps, isDragReject } = useDropzone({
        onDrop,
        multiple: true,
        accept: {
            'image/*': ['.png', '.gif', '.jpeg', '.jpg', '.pdf', '.docx', '.doc'],
            'video/mp4': ['.mp4']
        }
    });

    const selected_Files = selectedFiles?.map(file => (
        <div key={file.preview}>
            <img src={file.preview} style={{ width: "200px" , height: ' auto' , marginLeft : '10px'}} alt="" />
        </div>
    ))

    return (
        <>
            <FileDropContainer {...getRootProps()}>
                <input {...getInputProps()} />
                <img src={fileupload} alt="file-upload-icon" />
                <FileDropDetails>
                    {isDragReject ? (
                        <p className="error">Sorry , This app only support images or pdf files</p>
                    ) : (
                        <>
                            <span>Drag and Drop it here Or </span>  <span className='under'> Browse File</span>
                            <h4>Supported formats: JPEG, PNG, MP4</h4>
                        </>
                    )}
                </FileDropDetails>
            </FileDropContainer>
            <ImageContainer>
                {selected_Files}
            </ImageContainer>
        </>

    );
};

export default FileUploadDrop;
