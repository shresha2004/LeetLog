import React from 'react';
import SplitText from '../ReactBits/splitText';
const Header = () => {
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (<>
    <header className="text-white p-6 mb-6 shadow-md">
      <div className="max-w-7xl mx-auto text-center">
        {/* <h1 className='text-4xl font-bold ' style={{ color: "#f51524" }}>
          Shresha Acharya's DSA Log
        </h1> */}
        <SplitText
  text="Shresha Acharya's DSA Log"
  className="text-6xl font-bold text-center mb-2"
  delay={300}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>

        <p className='text-sm text-gray-300 mt-2 '>
          A growing collection of DSA problems based on core concepts
        </p>
      </div>

         
    </header>
  </>)
}


export default Header;
