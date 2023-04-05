
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function PaginatorBasicDemo() {
    const [data, setData] = useState([]);

  

    return (
        <div className="card">
            <DataTable value={data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column header="CITY" style={{ width: '13%' }}>
HI
                </Column>
                <Column header="PHONE NUMBER" style={{ width: '13%' }}>
                    HI
                </Column>
                <Column header="SOURCE" style={{ width: '13%' }}>
                    HI
                </Column>
                <Column header="ATTRIBUTE" style={{ width: '13%' }}>
                    HI
                </Column>
                <Column header="CASE ID" style={{ width: '13%' }}>
                    HI
                </Column>
                <Column header="LOCATION" style={{ width: '13%' }}>
                    HI
                </Column>
                <Column header="MATCHES%" style={{ width: '13%' }}>
                    HI
                </Column>
            </DataTable>
        </div>
    );
}
