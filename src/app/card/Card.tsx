"use client";
import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileCard.css';

const App = () => {
  return (
    <div className="flex justify-center items-center  rounded-3xl p-10 "> {/* Adicionei p-4 para padding em telas pequenas */}
        <ProfileCard
            name="Cristiany Pires"
            title="Software Engineer"
            handle="CP Technology"
            contactText="Contact Me"
            avatarUrl="a.png" 
            miniAvatarUrl="https://res.cloudinary.com/dzdyokoiv/image/upload/v1758584023/cristiany/ceo1muzhiswzjupccokq.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('#contato')}
        />
    </div>
  );
};

export default App;