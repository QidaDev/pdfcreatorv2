import { PDFDownloadLink } from "@react-pdf/renderer"
import Generator from "./core/Generator"
import Viewer from "./core/Viewer"
import Downloader from "./core/Downloader"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { registerFonts } from './config/fonts'
import componentsData from './componentsdata.json'

registerFonts()

const HomePage = () => {
  const buttonStyle = `mx-4 bg-blue-600 text-white border-none rounded px-4 py-2 cursor-pointer text-base inline-block no-underline hover:bg-blue-700 transition-colors`
  
  return (
    <div className="container mx-auto px-4 py-6">
      <header className="mb-8">
        <div className="flex flex-wrap justify-center gap-3"> 
          <div className="min-w-[180px] flex justify-center items-center h-[40px]">
            <PDFDownloadLink className={buttonStyle} document={<Generator />} fileName="plan_prevencion.pdf">
              {({ loading }) =>
                loading ? 'Generando PDF...' : 'Descargar PDF'
              }
            </PDFDownloadLink>
            <a href="/viewer" className={buttonStyle}>Ver PDF</a>
            <a href="/download" className={buttonStyle}>Generar blob PDF</a>
          </div>
          
        </div>
      </header>
      <div className="flex flex-wrap justify-center w-full h-[800px]">
          <iframe src="/viewer" className="w-full h-full"></iframe>
        </div>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewer" element={<Viewer />} />
        <Route path="/components" element={<Viewer data={componentsData} />} />
        <Route path="/download" element={<Downloader />} />
      </Routes>
    </Router>
  )
}

export default App;
