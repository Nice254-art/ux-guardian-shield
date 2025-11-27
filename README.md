# React + Vite + shadcn/ui Starter Template

Umoja Shield is a privacy-first browser extension and mobile application that detects and prevents coordinated harassment campaigns against women in public life. Using advanced AI and federated learning, we protect users while ensuring their data never leaves their device without encryption.

Mission: To create safer digital spaces by empowering communities to detect and respond to organized online harassment while preserving user privacy.

🚀 Features
🛡️ Core Protection
Real-time Threat Detection: AI-powered analysis of toxic language and coordinated behavior patterns

Multi-Platform Support: Monitors Twitter, Facebook, Instagram, and major social platforms

Cross-Platform Alerts: Notifies users and their trusted circle of potential coordinated attacks

Automated Reporting: Streamlines reporting to platform moderators with AI-generated evidence packages

🔒 Privacy First
Federated Learning: AI models improve without accessing your personal data

Local Processing: All sensitive content analyzed directly on your device

End-to-End Encryption: Secure communication between all components

Zero-Knowledge Architecture: We never see your private messages or identity

👥 Community Defense
Trusted Circle: Alert designated allies when under coordinated attack

Pattern Sharing: Anonymous threat intelligence sharing across the network

Collective Protection: The more users join, the smarter the protection becomes

🛠️ Tech Stack
Frontend
React + Vite - Modern, fast frontend framework

TypeScript - Type-safe development

Shadcn/ui + Tailwind CSS - Beautiful, accessible UI components

Chrome Extension API - Cross-browser compatibility

Backend
Node.js + Express - Scalable server infrastructure

PostgreSQL - Secure, encrypted database storage

Redis - Real-time caching and session management

AI & Security
TensorFlow.js - Client-side AI model execution

Federated Learning - Privacy-preserving model training

NLP Models - Toxic language detection in multiple languages

Web Crypto API - End-to-end encryption

📁 Project Structure
text
umojashield/
├── extension/                 # Chrome extension
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── content/          # Content scripts
│   │   ├── background/       # Service workers
│   │   └── utils/            # AI & encryption utilities
│   └── public/               # Extension assets
├── backend/                  # Node.js server
│   ├── src/
│   │   ├── controllers/      # API endpoints
│   │   ├── models/          # Database models
│   │   ├── services/        # Business logic
│   │   └── middleware/      # Security & auth
│   └── config/              # Database & environment configs
├── mobile/                   # React Native app
└── shared/                   # Shared utilities and types
🚀 Quick Start
Prerequisites
Node.js 18+

PostgreSQL 14+

Chrome browser

Installation
Clone the repository

bash
git clone https://github.com/umojashield/umojashield.git
cd umojashield
Install dependencies

bash
# Install root dependencies
npm install

# Install extension dependencies
cd extension && npm install

# Install backend dependencies  
cd ../backend && npm install
Environment Setup

bash
# Backend .env
cp backend/.env.example backend/.env
# Configure your database and encryption keys

# Extension .env
cp extension/.env.example extension/.env
Database Setup

bash
cd backend
npm run db:migrate
npm run db:seed
Development

bash
# Start backend server
cd backend && npm run dev

# Start extension in development mode
cd extension && npm run dev

# Build extension for production
npm run build
🔧 Configuration
Browser Extension
Load the extension in Chrome:

Go to chrome://extensions/

Enable "Developer mode"

Click "Load unpacked" and select the extension/dist folder

Backend API
The backend runs on http://localhost:3001 with the following key endpoints:

POST /api/v1/threat-patterns - Submit anonymous threat patterns

GET /api/v1/coordinated-campaigns - Get known campaign patterns

WS /ws - Real-time alert notifications

🛡️ Security & Privacy
Data Protection
Local Processing: All message analysis happens on your device

Federated Updates: Only anonymous model improvements are shared

Encrypted Storage: User data encrypted at rest and in transit

Minimal Data Collection: We collect only what's necessary for protection

Encryption Strategy
typescript
// All sensitive data uses end-to-end encryption
interface EncryptedPayload {
  data: string; // AES-256-GCM encrypted
  iv: string;   // Initialization vector
  authTag: string; // Authentication tag
}
🤝 Contributing
We welcome contributions! Please see our Contributing Guide for details.

Development Workflow
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📊 AI Models
Toxic Language Detection
Fine-tuned BERT model for African context

Multi-language support: English, French, Swahili

Cultural context awareness

Coordinated Behavior Detection
Temporal pattern analysis

Account correlation algorithms

Network graph analysis for bot detection

🚨 Emergency Features
Trusted Circle Alert
typescript
// When coordinated attack detected
alertTrustedCircle({
  severity: 'HIGH',
  platform: 'Twitter',
  attackType: 'COORDINATED_HARASSMENT',
  evidence: encryptedEvidence // End-to-end encrypted
});
Emergency Reporting
One-click evidence package generation

Automated platform violation reports

Legal documentation support

📈 Performance
Response Time: < 100ms for threat detection

Memory Usage: < 50MB for browser extension

Battery Impact: Minimal through optimized AI inference

Network Usage: Efficient federated learning updates

🌐 Supported Platforms
Twitter/X

Facebook

Instagram

YouTube

LinkedIn

Major news site comment sections

📄 License
This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

🙏 Acknowledgments
Built for Power Hacks 2025

Inspired by the need to end digital violence against women and girls

Thanks to the open-source community for AI and privacy tools

📞 Support
Documentation: docs.umojashield.org

Issues: GitHub Issues

Security Reports: security@umojashield.org
