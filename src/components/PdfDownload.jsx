import React from 'react'
import { usePDF, Document, Page } from '@react-pdf/renderer';
import PdfDocument from './PdfDocument';


const PdfDownload = () => {

    const [instance, updateInstance] = usePDF({ document: PdfDocument });

    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;

    return (
        <a href={instance.url} download="test.pdf">
            Download
        </a>
    )
}

export default PdfDownload
