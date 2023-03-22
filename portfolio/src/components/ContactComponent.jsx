import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import styled from 'styled-components';

// Importing your sample PDF
import pdfFile from '../assets/documents/Paloma-Lozano-Portfolio.pdf';

// Defining our App Component
const ContactComponent = () => {
  const Div = styled.div`
    background-color: #420039;
  `;
  return (
    <>
      <Div>
        <Document file={pdfFile}>
          <Page width={300} pageNumber={9} />
        </Document>
      </Div>
    </>
  );
};

// Exporting your Default App Component
export default ContactComponent;
