import React, { useState, useEffect } from 'react';

const UnderDevelopment = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                    onClick={handleClose}
                >
                    <div
                        style={{
                            padding: '20px',
                            borderRadius: '5px',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                            background: 'linear-gradient(145deg, #1e2024, #23272b)',
                            color: '#f3f4f4',
                        }}
                    >
                        <h2 style={{
                            backgroundColor: 'transparent',
                            fontSize: '3rem'
                        }}>Website Under Development</h2>
                        <p>Click anywhere to close this message.</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default UnderDevelopment;
