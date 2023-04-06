import FormField from "../Form/FormField";
import { PropertyFormValidationSchema } from "../Form/Validations";
import { FormContainer, FormContainer2, MainFormContainer } from "./UserModule.style";
import { useFormik } from 'formik';
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from 'primereact/inputnumber';
import { FieldLabel } from "../Form/form.styles";
import LocationMapper from "../LocationMap";
import { Dropdown } from 'primereact/dropdown';
import { Chips } from "primereact/chips";
import { useState } from "react";
import { Button } from 'primereact/button';
import FileUploadDrop from "../Form/FileUpload";

const UserModule = () => {

    const cities = [
        { name: 'Group 1', code: 'NY' },
        { name: 'Group 2', code: 'RM' }
    ];
    const [file, setFile] = useState();

    const [value, setValue] = useState([]);
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            detail: '',
            price: 0,
            city: '',
            address: '',
            group: '',
            tags: ''

        },
        validationSchema: PropertyFormValidationSchema,

        onSubmit: () => {
            handleSubmit();
        }
    });

    const handleSubmit = () => {
        console.log(formik.values)
    };


    return (
        <>
            <MainFormContainer onSubmit={formik.handleSubmit}>
                <FormContainer>
                    <div className="grid ">
                        <div className="col-6">
                            <FormField
                                label="First Name"
                                name="first_name"
                                errors={formik.errors}
                                touched={formik.touched}
                                value={formik.values?.first_name}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="col-6">
                            <FormField
                                label="Last Name"
                                name="last_name"
                                errors={formik.errors}
                                touched={formik.touched}
                                value={formik.values?.last_name}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>
                    <div className="grid ">
                        <div className="col-12">
                            <FieldLabel>Detail Subject</FieldLabel>
                            <InputTextarea
                                className="wide"
                                name="detail"
                                errors={formik.errors}
                                touched={formik.touched}
                                value={formik.values?.detail}
                                onBlur={formik.handleBlur}
                                rows={5} />


                        </div>
                    </div>

                    <div className="grid ">
                        <div className="col-12">
                            <FieldLabel>Price</FieldLabel>
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">$</span>
                                <InputNumber placeholder="Price" name="price"
                                    errors={formik.errors}
                                    touched={formik.touched}
                                    value={formik.values?.price}
                                    onBlur={formik.handleBlur} />
                                <span className="p-inputgroup-addon">.00</span>
                            </div>
                        </div>
                    </div>


                    <div className="grid mt-1">
                        <div className="col-12">
                            <FormField
                                label="City"
                                name="city"
                                errors={formik.errors}
                                touched={formik.touched}
                                value={formik.values?.city}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    <div className="grid">
                        <div className="col-12">
                            <FormField
                                label="Address"
                                name="address"
                                errors={formik.errors}
                                touched={formik.touched}
                                value={formik.values?.address}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>

                    <LocationMapper />
                </FormContainer>



                <FormContainer2>
                    <div className="col-12 mt-2">
                        {file && <h4>{file.file_name || ''}</h4>}
                        <FileUploadDrop setFile={setFile} />
                    </div>

                    <div className="grid">
                        <div className="col-12">
                            <FieldLabel>Choose Group</FieldLabel>
                            <Dropdown
                                name="group"
                                errors={formik.errors}
                                touched={formik.touched}
                                value={formik.values?.group}
                                onBlur={formik.handleBlur}
                                options={cities}
                                optionLabel="name"
                                editable placeholder="Select a City" className="wide" />
                        </div>
                    </div>

                    <div className="grid mt-1">
                        <div className="col-12">
                            <FieldLabel>Tags</FieldLabel>
                            <Chips value={value} onChange={(e) => setValue(e.value)} />
                        </div>
                    </div>

                    <Button label="Post" className="wide mt-5" />
                </FormContainer2>


            </MainFormContainer>

        </>
    )
}


export default UserModule