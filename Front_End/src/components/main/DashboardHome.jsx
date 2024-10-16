import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import "./input.css";

function DashboardHome() {
    const [messages, setMessages] = useState([]); // Start with an empty array
    const [showModal, setShowModal] = useState(false); // Manage modal visibility

    const handleSend = async (messageContent) => {
        const newMessage = {
            message: messageContent,
            sender: "user"
        };

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
    };

    // Function to handle opening the modal
    const handleShowModal = () => {
        setShowModal(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="App" style={{ backgroundColor: "black", height: "88vh" }}>
            <MainContainer style={{ height: "100%", display: "flex", flexDirection: "column", border: "none" }}>
                <ChatContainer style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <MessageList style={{ overflowY: "auto", backgroundColor: "#1F1F1F" }}>
                        {messages.length === 0 ? (
                            <div style={{ height: "70%", width: "70%", backgroundColor: "#2B2B2B", margin: "10% 14%", borderRadius: "30px", border: "1px solid grey" }}>
                                <div className="px-4 py-5 my-5 text-center" style={{ color: "white" }}>
                                    <h1 className="display-7 fw-bold">Notify</h1>
                                    <div className="col-lg-6 mx-auto">
                                        <p className="mb-4" style={{ fontSize: "25px" }}>
                                            NotifyLM is an AI-powered research and writing assistant that works best with the sources you upload.
                                        </p>
                                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={handleShowModal}>
                                                Upload Document
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Home</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            messages.map((message, i) => (
                                <Message  key={i} model={message} />
                            ))
                        )}
                    </MessageList>
                    <MessageInput 
                        placeholder="Type message here" 
                        onSend={handleSend} 
                        style={{
                            backgroundColor: '#2B2B2B',  // Dark background
                            border: 'none',              // Remove border
                            borderTop: "1px solid grey",
                            padding: '12px',             // Padding for input field
                            boxShadow: 'none'            // Remove any box-shadow if applied
                        }} 
                    />
                </ChatContainer>
            </MainContainer>

            {/* Modal for Uploading Document */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Upload Document</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <input type="file" className="form-control" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                                <button type="button" className="btn btn-primary">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DashboardHome;
