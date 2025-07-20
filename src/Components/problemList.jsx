import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AnimatedList from '../ReactBits/animatedList';

const DSAProblemList = ({ folderName }) => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const [shdScroll,setShdScroll] = useState(null)

  useEffect(() => {
    if (folderName) {
      fetchFiles();
    }
  }, [folderName]);
 useEffect(()=>{
  if(shdScroll && selectedFileIndex){
    const element = document.getElementById("moveSection")
    if(element){
      element.scrollIntoView({behavior:'smooth', block: "center"})
    }
  }
 },[shdScroll,selectedFileIndex])
const fetchFiles = async () => {
  setLoading(true);
  setFiles([]);
  setSelectedFileIndex(null);

  const apiUrl = `https://api.github.com/repos/shresha2004/DataStructuresAndAlgorithms/contents/${folderName}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    // Filter only `.java` files
    const javaFiles = data.filter(item => item.name.endsWith('.java'));

    const fetchedFiles = await Promise.all(
      javaFiles.map(async (file) => {
        const response = await fetch(file.download_url);
        const code = await response.text();
        return { fileName: file.name, code };
      })
    );

    setFiles(fetchedFiles);
  } catch (error) {
    console.error("Error fetching files:", error);
  } finally {
    setLoading(false);
  }
};

const handleIndexAndScroll = (item,index)=>{
 setSelectedFileIndex(index);
 setShdScroll(true)
}
  return (
    <div className="w-full px-4 py-6 flex flex-col items-center justify-center">
      {/* Folder Title */}
      <h2 className="text-3xl font-bold text-white text-center mb-4 underline underline-offset-4">{folderName}</h2>

      {/* Spinner */}
      {loading && (
        <div className="flex justify-center items-center mt-4 mb-8">
<span className="loader"></span><div className='ml-2 text-white text-2xl'>Loading...</div>        </div>
      )}

      {/* Animated List */}
      {!loading && files.length > 0 && (
        <AnimatedList
          items={files.map((file) => file.fileName)}
          onItemSelect={handleIndexAndScroll}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
          initialSelectedIndex={-1}
        />
      )}

      {/* Java Code Viewer */}
      {selectedFileIndex !== null && files[selectedFileIndex] && (
        <div className="w-full max-w-3xl mt-6" id='moveSection'>
          <div className='text-white text-xl'>Code: {files[selectedFileIndex].fileName}</div>
          <SyntaxHighlighter
            language="java"
            style={tomorrow}
            customStyle={{ borderRadius: '8px' }}
          >
            {files[selectedFileIndex].code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default DSAProblemList;
