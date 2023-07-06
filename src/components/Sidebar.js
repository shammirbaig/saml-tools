import React, { useState } from "react";
import {Link } from "react-router-dom";

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
              <li><Link to="/self-sign-certificate">Self Sign Certificate</Link></li>
              <li><Link to="/format-x509-certificate">Format x509 Certificate</Link></li>
              <li><Link to="/fingerprint-certificate">Fingerprint Certificate</Link></li>
              <li><Link to="/format-private-key">Format Private Key</Link></li>
              <li><Link to="/certificate-decode">Certificate Decode</Link></li>
              <li><Link to="/certificate-key-matcher">Certificate Key Matcher</Link></li>
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
              <li><Link to="/base64">Base64</Link></li>
              <li><Link to="/url-encode-decode">URL Encode/Decode</Link></li>
              <li><Link to="/deflate-base64-encode">Deflate/Base64Encode</Link></li>
              <li><Link to="/base64-decode-inflate">Base6 Decode/Inflate</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div
            className={`sidebar-section ${
              expandedSections.includes("sign") ? "expanded" : ""
            }`}
            onClick={() => toggleSection("sign")}
          >
            {expandedSections.includes("sign") ? (
              <FaChevronDown className="sidebar-icon" />
            ) : (
              <FaChevronRight className="sidebar-icon" />
            )}
            Sign
          </div>
          {expandedSections.includes("sign") && (
            <ul className="sidebar-sublist">
              <li><Link to="/sign/authnrequest">AuthnRequest</Link></li>
              <li><Link to="/sign/response">Response</Link></li>
              <li><Link to="/sign/logoutrequest">LogoutRequest</Link></li>
              <li><Link to="/sign/logoutresponse">LogoutResponse</Link></li>
              <li><Link to="/sign/metadata">Metadata</Link></li>
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
              <li><Link to="/verify/authnrequest">AuthnRequest</Link></li>
              <li><Link to="/verify/response">Response</Link></li>
              <li><Link to="/verify/logoutrequest">LogoutRequest</Link></li>
              <li><Link to="/verify/logoutresponse">LogoutResponse</Link></li>
            </ul>
          )}
        </li>
        <li>
        <span className="sidebar-section"><Link to="/attributes-extractor">Attributes Extractor</Link></span>
      </li>
        <li>
          <span className="sidebar-section"><Link to="/xml-pretty-print">XML Pretty Print</Link></span>
        </li>
        <li>
          <span className="sidebar-section"><Link to="/metadata">Metadata</Link></span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
