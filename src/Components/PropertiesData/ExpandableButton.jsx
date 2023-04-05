import React, { useState, useEffect } from 'react';

const ExpandableButton = ({ isOpen, toggle }) => {



    return (
        <button onClick={toggle}>
            <span>
                {isOpen ? <i className="pi pi-plus" style={{ fontSize: '2rem', transition: "all 0.25s",  }}></i> :
                    <i className="pi pi-minus" style={{ fontSize: '2rem', transition: "all 0.25s",}}></i>}
            </span>
        </button>
    );
}


export default ExpandableButton