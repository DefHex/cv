import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="pdf-viewer">
        <object data="CV.pdf" type="application/pdf" width="100%" height="100%">
          <div className="pdf-fallback">
            <p>Your browser does not support PDFs.</p>
            <a href="CV.pdf" download="CV.pdf" className="download-button">
              Download CV (PDF)
            </a>
          </div>
        </object>
      </div>
      <div className="qr-container">
        {/* Replace /qr-code.png with your actual QR code image path */}
        <img
          src="/qr-code.png"
          alt="QR Code to view online"
          className="qr-code"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <p>Scan to view this CV online</p>
      </div>
    </div>
  );
}

export default App;
