import Slide from './Slide';

export default function ITManualSlides() {
  return (
    <>
      <Slide>
        <h1>IT Project Setup Manual</h1>
        <h3>Guide for IT Staff</h3>
        <p>
          <small>
            Created by IT Department<br />
            Version 1.0
          </small>
        </p>
      </Slide>

      <Slide>
        <h2>Table of Contents</h2>
        <ul>
          <li>Environment Setup</li>
          <li>Project Installation</li>
          <li>Configuration</li>
          <li>Database Setup</li>
          <li>Testing & Deployment</li>
          <li>Troubleshooting</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Environment Setup</h2>
        <h3>Required Software</h3>
        <ul>
          <li>Node.js (v18 or higher)</li>
          <li>npm or yarn package manager</li>
          <li>Git</li>
          <li>VS Code (recommended)</li>
        </ul>
        <h3>System Requirements</h3>
        <ul>
          <li>Minimum 8GB RAM</li>
          <li>10GB free disk space</li>
          <li>Windows 10/11, macOS, or Linux</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Project Installation</h2>
        <h3>Step 1: Clone Repository</h3>
        <pre><code>git clone https://github.com/company/project.git
cd project</code></pre>
        
        <h3>Step 2: Install Dependencies</h3>
        <pre><code>npm install
# or
yarn install</code></pre>
      </Slide>

      <Slide>
        <h2>Configuration</h2>
        <h3>Environment Variables</h3>
        <pre><code># Create .env.local file
cp .env.example .env.local</code></pre>
        
        <h3>Required Configuration</h3>
        <ul>
          <li>Database connection string</li>
          <li>API keys and secrets</li>
          <li>Server port configuration</li>
          <li>Third-party service URLs</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Database Setup</h2>
        <h3>PostgreSQL Configuration</h3>
        <ol>
          <li>Install PostgreSQL 14+</li>
          <li>Create database user</li>
          <li>Create database</li>
          <li>Run migrations</li>
        </ol>
        
        <pre><code>npm run db:migrate
npm run db:seed</code></pre>
      </Slide>

      <Slide>
        <h2>Running the Application</h2>
        <h3>Development Mode</h3>
        <pre><code>npm run dev</code></pre>
        <p>Application will be available at http://localhost:3000</p>
        
        <h3>Production Build</h3>
        <pre><code>npm run build
npm start</code></pre>
      </Slide>

      <Slide>
        <h2>Testing</h2>
        <h3>Unit Tests</h3>
        <pre><code>npm run test</code></pre>
        
        <h3>Integration Tests</h3>
        <pre><code>npm run test:integration</code></pre>
        
        <h3>E2E Tests</h3>
        <pre><code>npm run test:e2e</code></pre>
      </Slide>

      <Slide>
        <h2>Deployment</h2>
        <h3>Docker Deployment</h3>
        <pre><code>docker build -t app .
docker run -p 3000:3000 app</code></pre>
        
        <h3>Cloud Deployment</h3>
        <ul>
          <li>Vercel (recommended)</li>
          <li>AWS</li>
          <li>Google Cloud</li>
          <li>Azure</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Troubleshooting</h2>
        <h3>Common Issues</h3>
        <ul>
          <li><strong>Port already in use:</strong> Change port in .env file</li>
          <li><strong>Database connection failed:</strong> Check credentials</li>
          <li><strong>Module not found:</strong> Run npm install</li>
          <li><strong>Permission denied:</strong> Check file permissions</li>
        </ul>
      </Slide>

      <Slide>
        <h2>Support & Resources</h2>
        <h3>Documentation</h3>
        <ul>
          <li>Project Wiki: https://wiki.company/project</li>
          <li>API Documentation: http://localhost:3000/docs</li>
          <li>Code Guidelines: /docs/guidelines.md</li>
        </ul>
        
        <h3>Contact</h3>
        <ul>
          <li>IT Support: it-support@company.com</li>
          <li>Slack: #it-support</li>
          <li>Emergency: +66-XX-XXX-XXXX</li>
        </ul>
      </Slide>

      <Slide>
        <h1>Thank You!</h1>
        <h3>Questions?</h3>
        <p>
          <small>
            IT Department<br />
            it-support@company.com
          </small>
        </p>
      </Slide>
    </>
  );
}
