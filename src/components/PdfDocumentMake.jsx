import React from 'react'

import { Button, Box } from '@mui/material';

import { useData } from "../DataContext";

import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "./vfs_fontes";
pdfMake.vfs = pdfFonts.default;



const styles = {
    header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10]
    },
    subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
    },
    tableExample: {
        margin: [0, 5, 0, 15]
    },
    tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
    },
    tableCell: {
        bold: false,
        fontSize: 13,
        color: 'black'
    }
}


const PdfDocumentMake = () => {

    const { applianceGroups } = useData()
    const applianceList = () => {
        return Object.entries(applianceGroups).map(([groupName, appliances]) => {
            return appliances.filter(({ quantity }) => quantity > 0)
        }).flat()
    }
    const appliances = applianceList();


    const docDefinition = {
        content: [
            {
                style: 'tableExample',
                table: {
                    widths: ['*', 50, 75, 75, 100],
                    body: [
                        [
                            { text: 'Appliance', style: 'tableHeader', alignment: 'left' },
                            { text: 'Qty', style: 'tableHeader', alignment: 'center' },
                            { text: 'Watts', style: 'tableHeader', alignment: 'center' },
                            { text: 'Hours', style: 'tableHeader', alignment: 'center' },
                            { text: 'Watt Hours', style: 'tableHeader', alignment: 'center' },
                        ],
                        ...appliances.map(appliance => {
                            return [
                                { text: appliance.name, style: 'tableCell', alignment: 'left' },
                                { text: appliance.quantity, style: 'tableCell', alignment: 'center' },
                                { text: appliance.watts, style: 'tableCell', alignment: 'center' },
                                { text: appliance.hours, style: 'tableCell', alignment: 'center' },
                                { text: appliance.total, style: 'tableCell', alignment: 'right' },
                            ]
                        }),
                    ],
                }
            }
        ],
        ...{ styles },
        defaultStyle: {
            // alignment: 'justify'
            //font: 'Times'
        }
    }

    return (

        <Box mb={8}>
            <Button
                variant="contained"
                onClick={() => pdfMake.createPdf(docDefinition).download('document.pdf')}
                size='large'
            >
                Download
            </Button>
        </Box>
    )
}

export default PdfDocumentMake


