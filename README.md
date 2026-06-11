# Master Buddy AI User Portal

Master Buddy AI User Portal is a modern web-based interface designed to provide students and learners with an intelligent AI-powered study assistant. The platform enables users to interact with the Master Buddy AI model through a clean and responsive chat interface, helping them understand academic concepts, solve problems, and enhance their learning experience.

## Features

- 🤖 AI-powered academic assistant
- 💬 Real-time conversational interface
- 📚 Educational question answering
- 🎯 User-friendly dashboard experience
- ⚡ Fast and responsive React frontend
- 🔗 REST API integration with FastAPI backend
- 🌐 Cloud deployment ready
- 📱 Responsive design for desktop and mobile devices

## Technology Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- HTML5

### Backend Integration
- FastAPI
- REST APIs
- JSON-based communication

### AI & Machine Learning
- Master Buddy Fine-Tuned Language Model
- Hugging Face Ecosystem
- LangChain Framework

## Project Structure

```text
master-buddy-ai-user-portal
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── README.md
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Running Master Buddy AI Backend API

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/master-buddy-ai-user-portal.git
```

Navigate to the frontend directory:

```bash
cd master-buddy-ai-user-portal/frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Environment Variables

Create a `.env` file inside the frontend directory:

```env
VITE_API_URL=http://localhost:8000
```

For production deployment:

```env
VITE_API_URL=https://your-backend-domain.com
```

## Deployment

The frontend can be deployed using:

- Netlify
- Vercel
- GitHub Pages

Recommended deployment architecture:

```text
Frontend (Netlify/Vercel)
          │
          ▼
Backend API (FastAPI)
          │
          ▼
Master Buddy AI Model
```

## Use Cases

- Student learning assistance
- Academic concept clarification
- Exam preparation support
- Programming and technical guidance
- Research assistance
- General educational discussions

## Future Enhancements

- User authentication and profiles
- Chat history management
- Voice interaction support
- File and document uploads
- Personalized learning recommendations
- Multi-language support
- Real-time streaming responses

## Related Project

### Master Buddy AI Backend

The frontend communicates with the Master Buddy AI backend service, which hosts the fine-tuned language model and manages AI inference.

## Author

**Vishwa Seran**

Computer Engineering Undergraduate

## License

This project is intended for educational, research, and portfolio purposes.

---

Built with ❤️ to make learning more accessible through Artificial Intelligence.
