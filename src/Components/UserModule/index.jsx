import { FormContainer, FormContainer2, MainFormContainer } from "./UserModule.style";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber } from 'primereact/inputnumber';
import { FieldLabel } from "../Form/form.styles";
import LocationMapper from "../LocationMap";
import { Dropdown } from 'primereact/dropdown';
import { Chips } from "primereact/chips";
import { useState } from "react";
import { Button } from 'primereact/button';
import FileUploadDrop from "../Form/FileUpload";
import { InputText } from "primereact/inputtext";
const UserModule = () => {

    const cities = [
        { name: 'Group 1', code: 'NY' },
        { name: 'Group 2', code: 'RM' }
    ];
    const [file, setFile] = useState();
    const [value, setValue] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [detail, setDetail] = useState('');
    const [price, setPrice] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [group, setGroup] = useState('');


    const handleSubmit = () => {
        console.log(value)
    };


    return (
        <>
            <MainFormContainer onSubmit={handleSubmit}>
                <FormContainer>
                    <div className="grid ">
                        <div className="col-6">
                            <FieldLabel>First Name</FieldLabel>
                            <InputText value={firstName} onChange={(e) => setFirstName(e.target.value)} className="wide" />
                        </div>
                        <div className="col-6">
                            <FieldLabel>Last Name</FieldLabel>
                            <InputText value={lastName} onChange={(e) => setLastName(e.target.value)} className="wide" />
                        </div>
                    </div>
                    <div className="grid ">
                        <div className="col-12">
                            <FieldLabel>Detail Subject</FieldLabel>
                            <InputTextarea
                                className="wide"
                                value={detail} onChange={(e) => setDetail(e.target.value)}
                                rows={5} />
                        </div>
                    </div>

                    <div className="grid ">
                        <div className="col-12">
                            <FieldLabel>Price</FieldLabel>
                            <div className="p-inputgroup flex-1">
                                <span className="p-inputgroup-addon">$</span>
                                <InputNumber placeholder="Price" name="price"
                                    value={price} onChange={(e) => setPrice(e.target.value)}
                                />
                                <span className="p-inputgroup-addon">.00</span>
                            </div>
                        </div>
                    </div>


                    <div className="grid mt-1">
                        <div className="col-12">
                            <FieldLabel>City</FieldLabel>
                            <InputText value={city} onChange={(e) => setCity(e.target.value)} className="wide" />
                        </div>
                    </div>

                    <div className="grid">
                        <div className="col-12">
                            <FieldLabel>Address</FieldLabel>
                            <InputText value={address} onChange={(e) => setAddress(e.target.value)} className="wide" />
                        </div>
                    </div>

                    <LocationMapper />
                </FormContainer>



                <FormContainer2>
                    <div className="col-12 mt-2">
                        <FileUploadDrop setFile={setFile} />
                    </div>

                    <div className="grid">
                        <div className="col-12">
                            <FieldLabel>Choose Group</FieldLabel>
                            <Dropdown
                                name="group"
                                value={group}
                                onChange={(e) => setGroup(e.value)}
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