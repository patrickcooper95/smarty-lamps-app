import './CurrentProgram.css';
import React from "react";

export const CurrentProgram = ({ currentProgram }) => {
	return (
                <div>
		<div class="currentProgram"><h3>Current Setting: {currentProgram}</h3></div>
                <div class="circle" style={{ backgroundColor: '#1e90ff' }}></div>
                </div>
		);};
