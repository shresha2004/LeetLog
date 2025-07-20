import React from 'react';

const SocialMediaCard = () => {
  return (
    <div
      className="max-w-xl mx-auto mt-10 border-2 rounded-xl p-6 text-white text-center"
      style={{
        borderColor: '#f51524',
        boxShadow: '0 0 20px #f51524',
      }}
    >
      <h2
        className="text-2xl font-semibold mb-6 underline"
        style={{ color: '#f51524' }}
      >
        My Online Coding Profiles
      </h2>

      {/* LeetCode */}
      <div className="flex items-center justify-center mb-4 space-x-3">
        <span className="font-medium">LeetCode :</span>
        <a
          href="https://leetcode.com/u/shreshacharya/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#f51524] transition text-white"
        >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-6 h-6 social-icon icon-border"
        />
        
       <span className='ml-2'>  View Profile </span> 
        </a>
      </div>

      {/* GFG */}
      <div className="flex items-center justify-center mb-4 space-x-3">
        <span className="font-medium">GFG :</span>
         <a
          href="https://www.geeksforgeeks.org/user/shreshacm2f7/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#f51524] transition text-white"
        >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
          alt="GFG"
          className="w-6 h-6 social-icon icon-border"
        />
       
       <span className='ml-2'>  View Profile </span> 
        </a>
      </div>

      {/* GitHub */}
      <div className="flex items-center justify-center mb-4 space-x-3">
        <span className="font-medium">GitHub :</span>
         <a
          href="https://github.com/shresha2004"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#f51524] transition text-white"
        >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="w-6 h-6 social-icon "
          style={{ backgroundColor: '#f51524' }}
        />
       
       <span className='ml-2'>  View Profile </span> 
        </a>
      </div>

      {/* LinkedIn */}
      <div className="flex items-center justify-center space-x-3">
        <span className="font-medium">LinkedIn :</span>
        <a
          href="https://www.linkedin.com/in/shresha-acharya-116318261/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#f51524] transition text-white"
        >
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn"
          className="w-6 h-6 social-icon icon-border"
        />
        
       <span className='ml-2'>  View Profile </span> 
        </a>
      </div>
    </div>
  );
};

export default SocialMediaCard;
