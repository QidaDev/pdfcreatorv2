/* eslint-disable @typescript-eslint/no-explicit-any */
import { PDFViewer } from '@react-pdf/renderer'

import Generator from './Generator';

interface ViewerProps {
  data?: any
}

const Viewer = ({ 
  data 
}: ViewerProps) => {
  return (
    <div className="w-full h-screen">
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <Generator data={data} />
      </PDFViewer>
    </div>
  );
};

export default Viewer