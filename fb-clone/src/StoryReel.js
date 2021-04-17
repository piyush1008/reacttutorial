import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
        <Story 
            images=""
            profileSrc=""
            title="Piyush Dubey"
        />
        <Story 
            images=""
            profileSrc=""
            title="Ayush Dubey"
        />
        <Story 
            images=""
            profileSrc=""
            title="Saurabh Dubey"
        />
        <Story 
            images=""
            profileSrc=""
            title="Abhinav Dubey"
        />
        </div>
    )
}

export default StoryReel;
