import React from "react";

export const ContactEmailTemplate = ({name, email, message, subject}: { name: string, email: string, subject: string, message: string }) => {
    return (
        <div style={{color: 'white', background: 'black', fontFamily: 'sans-serif', padding: '2rem'}}>
            <div>
                <h1 style={{fontSize: '1.25rem'}}>connell<span
                    style={{color: '#f9004d'}}>boyce</span>.com</h1>
                <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                    <h4><span style={{color: '#f9004d'}}>Email: </span>{email}</h4>
                    <h4><span style={{color: '#f9004d'}}>Name: </span>{name}</h4>
                    <h4><span style={{color: '#f9004d'}}>Subject: </span>{subject}</h4>
                </div>
                <p style={{paddingBottom: '2rem'}}>{message}</p>
            </div>
        </div>
    )
}