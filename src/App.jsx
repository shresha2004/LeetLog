import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/header';
import DSAProblemList from './Components/problemList';
import SocialMediaCard from './Components/socialMediaCard';
import Lightning from './ReactBits/lightning';
import Folder from './ReactBits/folder';
import Footer from './Components/footer';

function App() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [shdScroll, setShdScroll] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  const selectFolders = [
    'Arrays',
    'BasicMathsForDSA',
    'BitManipulation',
    'CollectionFrameworks',
    'Hashing',
    'LinkedList',
    'Patterns',
    'Recursion',
    'BinarySearch',
    'Sorting',
    'Stack&Queue',
    'Strings',
  ];
  useEffect(() => {
    if (shdScroll && selectFolders) {
      const element = document.getElementById("moveSection")
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: "end" })
        setShdScroll(false)
      }
    }
  }, [selectFolders, shdScroll])



  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
    setShdScroll(true);

  };

  return (
    <>
      {/* Full-screen lightning background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Lightning />
      </div>

      {/* Foreground content */}
      <Header />
      <div className='relative z-10 py-10'>
      <SocialMediaCard />
      </div>

      <div className="relative z-0 mt-15">
        {/* Folders Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-8 p-8 max-w-6xl mx-auto">
          {selectFolders.map((folder, index) => (
            <div
              key={folder}
              className="flex flex-col items-center space-y-2 mb-2 mt-2 cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => handleFolderClick(folder)}
              onMouseEnter={(e) => setTooltip({
                visible: true,
                text: folder,
                x: e.clientX,
                y: e.clientY

              })}
              onMouseMove={(e) =>
                setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))
              }
              onMouseLeave={() =>
                setTooltip({ visible: false, text: '', x: 0, y: 0 })
              }
            >
              <Folder
                size={1.5}
                color="#f51524"
                className="cursor-pointer hover:scale-105 transition-transform duration-200"
                items={[
                  // <div className="text-xl font-medium text-gray-700 p-1 text-center">
                  //   {folder}
                  // </div>
                ]}
              />
              <span className="text-xl font-medium text-white text-center max-w-[100px] truncate mt-3">
                {folder}
              </span>
            </div>
          ))}
        </div>

        {/* Selected Folder Display */}

        {selectedFolder && (
          <div id='moveSection'>
            <DSAProblemList folderName={selectedFolder} />
          </div>
        )}
      </div>
      {tooltip.visible && (
        <div
          className="fixed px-2 py-1 bg-black text-white text-sm rounded shadow-md z-50 pointer-events-none"
          style={{ top: tooltip.y + 10, left: tooltip.x + 10 }}
        >
          {tooltip.text}
        </div>
      )}

      <Footer/>
    </>
  );
}

export default App;