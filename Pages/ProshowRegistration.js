import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ProshowRegistration.css";

const ProShowRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "Puducherry Technological University",
    degree: "B.Tech",
    department: "CSE",
    year: "1",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [showPayment, setShowPayment] = useState(false);
  const [showTransactionInput, setShowTransactionInput] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [receiptMessage, setReceiptMessage] = useState("");
  const [transactionError, setTransactionError] = useState("");
  const [transactionIds, setTransactionIds] = useState(new Set());
  const [upiURL, setUpiURL] = useState("");
  const [qrCodeURL, setQrCodeURL] = useState("");

  const upiID = "110107885858@cnrb";
  const amount = "100";

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const upiPaymentURL = `upi://pay?pa=${upiID}&pn=Pro Show&am=${amount}&cu=INR`;
      const qrCodeApiURL = `https://quickchart.io/qr?text=${encodeURIComponent(upiPaymentURL)}&size=200`;
      setUpiURL(upiPaymentURL);
      setQrCodeURL(qrCodeApiURL);
      setShowPayment(true);
    }
  };

  const handleGenerateReceipt = () => {
    setShowTransactionInput(true);
  };

  const handleTransactionSubmit = () => {
    if (!/^\d{12}$/.test(transactionId)) {
      setTransactionError("Transaction ID must be exactly 12 digits.");
      return;
    }

    if (transactionIds.has(transactionId)) {
      setTransactionError("Transaction ID already exists.");
      return;
    }

    setTransactionIds(new Set([...transactionIds, transactionId]));
    setReceiptMessage("Your receipt will be emailed within 30-90 mins.");
    setTransactionError(""); // Clear any previous errors
  };

  const handleBack = () => {
    if (showTransactionInput) {
      setShowTransactionInput(false);
    } else if (showPayment) {
      setShowPayment(false);
    }
  };

  return (
    <motion.div 
      className="registration-container"
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.8 }}
    >
      {!showPayment ? (
        <motion.div 
          className="registration-box"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <h2 className="registration-title">Register for ProShow</h2>
          <form className="registration-form" onSubmit={handleProceed}>
            <div className="input-container">
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="input-container">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Your Email" />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="input-container">
              <input type="text" name="college" value={formData.college} disabled />
            </div>
            <div className="input-container">
              <select name="degree" value={formData.degree} onChange={handleChange} required>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="MCA">MCA</option>
                <option value="Ph.D">Ph.D</option>
              </select>
            </div>
            <div className="input-container">
              {formData.degree === "MCA" ? (
                <input type="text" name="department" value="N/A" disabled />
              ) : (
                <select name="department" value={formData.department} onChange={handleChange} required>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="IT">IT</option>
                  <option value="EEE">EEE</option>
                  <option value="EIE">EIE</option>
                  <option value="CHEM">CHEM</option>
                  <option value="MECH">MECH</option>
                  <option value="MTE">MTE</option>
                  <option value="CIVIL">CIVIL</option>
                </select>
              )}
            </div>
            <div className="input-container">
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
            <motion.button 
              type="submit" 
              className="register-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Proceed
            </motion.button>
          </form>
        </motion.div>
      ) : (
        <motion.div className="payment-section">
          <h3 className="payment-title">Scan to Pay ₹100</h3>
          <img src={qrCodeURL} alt="UPI QR Code" className="qr-image" />
          <motion.button className="upi-button" onClick={() => window.location.href = upiURL}>Pay via UPI App</motion.button>
          <p className="transaction-success-text">Transaction Successful? Click the button below to generate receipt</p>
          <motion.button className="proceed-button" onClick={handleGenerateReceipt}>Generate Receipt</motion.button>
          {showTransactionInput && (
            <div className="transaction-input-container">
              <input 
                type="text" 
                placeholder="Enter 12-digit Transaction ID" 
                value={transactionId} 
                onChange={(e) => setTransactionId(e.target.value)} 
              />
              <motion.button onClick={handleTransactionSubmit}>Submit</motion.button>
              {transactionError && <p className="error-text">{transactionError}</p>}
              {receiptMessage && <p className="receipt-message">{receiptMessage}</p>}
            </div>
          )}
        </motion.div>
      )}
      <motion.button className="back-button" onClick={handleBack}>Back</motion.button>
    </motion.div>
  );
};

export default ProShowRegistration;
