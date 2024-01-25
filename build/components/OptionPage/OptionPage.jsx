import React from 'react';
import VideoEditor from './modules/VideoEditor.jsx';
import Header from './modules/Header.jsx';

function OptionPage() {
    return (
        <div className="OptionPage">
            <Header />
            <VideoEditor />
        </div>
    );
}
export default OptionPage; // Add this line to export the component
