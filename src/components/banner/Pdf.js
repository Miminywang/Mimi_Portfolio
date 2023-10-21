import { ArrowRightCircle } from 'react-bootstrap-icons';

const PDF_File_URL = "/Mimi_resume.pdf";

function Pdf() {
  const downloadFileAtURL =(url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return <div>
    <button onClick={() => {downloadFileAtURL(PDF_File_URL)}}>Download CV <ArrowRightCircle size={25} /></button>
  </div>
}

export default Pdf;
