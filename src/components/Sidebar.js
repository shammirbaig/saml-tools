import React, { useState } from "react";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (section) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter((item) => item !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };


  return (
    <div className="sidebar z-1 h-screen w-80 text-white inline-block mt-20 bg-slate-800 overflow-y-auto">
      <ul className="sidebar-menu">
        <li>
          <div
            className={`sidebar-section ${
              expandedSections.includes("x509") ? "expanded" : ""
            }`}
            onClick={() => toggleSection("x509")}
          >
            {expandedSections.includes("x509") ? (
              <FaChevronDown className="sidebar-icon" />
            ) : (
              <FaChevronRight className="sidebar-icon" />
            )}
            X509
          </div>
          {expandedSections.includes("x509") && (
            <ul className="sidebar-sublist">
              <li  >Self Sign Certificate</li>
              <li>Format x509 Certificate</li>
              <li>Fingerprint Certificate</li>
              <li>Format Private Key</li>
              <li>Certificate Decode</li>
              <li>Certificate Key Matcher</li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={`sidebar-section ${
              expandedSections.includes("codeDecode") ? "expanded" : ""
            }`}
            onClick={() => toggleSection("codeDecode")}
          >
            {expandedSections.includes("codeDecode") ? (
              <FaChevronDown className="sidebar-icon" />
            ) : (
              <FaChevronRight className="sidebar-icon" />
            )}
            Code/Decode
          </div>
          {expandedSections.includes("codeDecode") && (
            <ul className="sidebar-sublist">
              <li>Base64</li>
              <li>URL Encode/Decode</li>
              <li>Deflate/Base64Encode</li>
              <li>Base65 Decode/Inflate</li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={`sidebar-section ${
              expandedSections.includes("verify") ? "expanded" : ""
            }`}
            onClick={() => toggleSection("verify")}
          >
            {expandedSections.includes("verify") ? (
              <FaChevronDown className="sidebar-icon" />
            ) : (
              <FaChevronRight className="sidebar-icon" />
            )}
            Verify
          </div>
          {expandedSections.includes("verify") && (
            <ul className="sidebar-sublist">
              <li>AuthnRequest</li>
              <li>Response</li>
              <li>LogoutRequest</li>
              <li>LogoutResponse</li>
              <li>Attributes Extractor</li>
            </ul>
          )}
        </li>
        <li>
          <span className="sidebar-section">XML Pretty Print</span>
        </li>
        <li>
          <span className="sidebar-section">Metadata</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
