// import React from "react";
// import JSZip from "jszip";
// import { saveAs } from "file-saver";

// const DownloadSiteButton: React.FC = () => {
//     const handleDownload = async () => {
//         const zip = new JSZip();

//         // Adding files dynamically (Modify these as needed)
//         zip.file("index.html", "<h1>Welcome to My Website</h1>");
//         zip.file("style.css", "body { background: #f4f4f4; }");
//         zip.file("script.js", "console.log('Hello World');");
        


//         // Create a folder inside the ZIP
//         const imgFolder = zip.folder("images");
//         if (imgFolder) {
//             imgFolder.file("example.txt", "This is an example file");
//         }

//         // Generate ZIP and trigger download
//         const content = await zip.generateAsync({ type: "blob" });
//         saveAs(content, "my-website.zip");
//     };

//     return (
//         // <button
//         //     onClick={handleDownload}
//         //     className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition"
//         // >
//         //     Download My Website
//         // </button>
//         <button
//             onClick={handleDownload}
//             className="rounded h-[45px] text-white py-[10px] px-[20px] bg-[#9c58df] flex items-center justify-center text-[16px] font-medium"
//         >Download Shortcut</button>

//     );
// };

// export default DownloadSiteButton;






// import React from "react";
// import JSZip from "jszip";
// import { saveAs } from "file-saver";

// const DownloadSiteButton: React.FC = () => {
//     const handleDownload = async () => {
//         const zip = new JSZip();

//         // Adding project files manually
//         zip.file(
//             "src/App.tsx",
//             `import React from "react"; 
//             const App: React.FC = () => { 
//                 return <h1>Hello World</h1>; 
//             }; 
//             export default App;`
//         );

//         zip.file(
//             "src/Main.tsx",
//             `import React from "react"; 
//             import ReactDOM from "react-dom/client"; 
//             import App from "./App"; 
//             ReactDOM.createRoot(document.getElementById("root")!).render(<App />);`
//         );

//         zip.file(
//             "src/index.html",
//             `<!DOCTYPE html>
//             <html lang="en">
//             <head><meta charset="UTF-8"><title>My App</title></head>
//             <body><div id="root"></div></body>
//             </html>`
//         );

//         // Generate ZIP and trigger download
//         const content = await zip.generateAsync({ type: "blob" });
//         saveAs(content, "my-react-project.zip");
//     };

//     return (
//         <button
//             onClick={handleDownload}
//             className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition"
//         >
//             Download My Project
//         </button>
//     );
// };

// export default DownloadSiteButton;




import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const DownloadSite: React.FC = () => {
    const handleDownload = async () => {
        const zip = new JSZip();

        // 📂 Create "build" folder inside ZIP
        const buildFolder = zip.folder("build");

        if (buildFolder) {
            // 📝 Add index.html
            buildFolder.file(
                "index.html",
                `<!DOCTYPE html>
                <html lang="en">
                <head><meta charset="UTF-8"><title>Offline React App</title></head>
                <body><div id="root"></div><script src="main.js"></script></body>
                </html>`
            );

            // 🎨 Add CSS file
            buildFolder.file(
                "styles.css",
                `body { font-family: Arial, sans-serif; text-align: center; }`
            );

            // ⚡ Add JS bundle (Fake example, use actual build output)
            buildFolder.file(
                "main.js",
                `document.getElementById('root').innerHTML = '<h1>Offline React App</h1>';`
            );
        }

        // ✅ Generate and download ZIP
        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, "offline-react-site.zip");
    };

    return (
        <button
            onClick={handleDownload}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
            Download Offline Website
        </button>
    );
};

export default DownloadSite;



