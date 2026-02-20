import Slide from './Slide';
import Image from 'next/image';

export default function ITManualSlides() {
  return (
    <>
      <Slide>
        <h1>IT Department Manual</h1>
        <h3>MS Teams Planner & Task Management</h3>
        <p>
          <small>
            Guide for IT Staff to coordinate with Sales & Accounting<br />
            Version 1.0
          </small>
        </p>
      </Slide>

      <Slide>
        <h2>Table of Contents</h2>
        <ul>
          <li>1. Introduction to Planner</li>
          <li>2. Accessing Your Tasks</li>
          <li>3. Updating Task Status (Progress & Priority)</li>
          <li>4. Managing Dates (Due Dates for Invoicing)</li>
          <li>5. Adding Notes & Serial Numbers</li>
          <li>6. Updating Checklists (SO, PO, Delivery)</li>
          <li>7. Coordination Workflow</li>
        </ul>
      </Slide>

      <Slide>
        <h2>1. Why Update Planner?</h2>
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <p>The MS Teams Planner is the central hub for tracking project delivery.</p>
          <ul>
            <li><strong>Sales Dept:</strong> Needs to know when items are ready to ship</li>
            <li><strong>Accounting Dept:</strong> Needs delivery dates to issue Invoices</li>
            <li><strong>IT Staff:</strong> Responsible for updating technical progress</li>
          </ul>
          <p style={{ color: '#ffeb3b', marginTop: '20px' }}>
            <em>Accurate updates ensure fast billing and customer satisfaction.</em>
          </p>
        </div>
      </Slide>

      <Slide>
        <section>
          <h2>2. Accessing Your Tasks</h2>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <ol>
                <li>Open <strong>MS Teams</strong></li>
                <li>Click on the <strong>Planner</strong> icon in the left sidebar</li>
                <li>Go to <strong>My Tasks</strong></li>
                <li>Select the <strong>Assigned to me</strong> tab</li>
                <li>Click on the specific task (e.g., "TOA Electronics...")</li>
              </ol>
            </div>
            <div style={{ flex: 1, backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '8px', border: '1px solid #555' }}>
              <h4 style={{ color: '#8b8bd1', margin: '0 0 10px 0' }}>Planner Navigation</h4>
              <ul style={{ fontSize: '0.8em', listStyle: 'none', padding: 0 }}>
                <li>📋 My Day</li>
                <li style={{ backgroundColor: '#4a4a4a', padding: '5px', borderRadius: '4px' }}>👉 <strong>My Tasks</strong></li>
                <li>📁 My plans</li>
              </ul>
            </div>
          </div>
        </section>
      </Slide>

      <Slide>
        <section>
          <h2>3. Updating Task Status</h2>
          <p style={{ textAlign: 'left', fontSize: '0.8em' }}>When opening a task, update the current working status immediately.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginTop: '20px' }}>
            <div style={{ backgroundColor: '#2d2d2d', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em' }}>Bucket</h4>
              <p style={{ fontSize: '0.7em', margin: 0 }}>Move task through phases:</p>
              <ul style={{ fontSize: '0.7em' }}>
                <li>To do</li>
                <li>In Progress</li>
                <li>Completed</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: '#2d2d2d', padding: '15px', borderRadius: '8px', border: '2px solid #4CAF50' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em' }}>Progress (Critical)</h4>
              <p style={{ fontSize: '0.7em', margin: 0 }}>Current state:</p>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Not started</li>
                <li style={{ color: '#4CAF50' }}>In progress</li>
                <li>Completed</li>
              </ul>
            </div>
            
            <div style={{ backgroundColor: '#2d2d2d', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em' }}>Priority</h4>
              <p style={{ fontSize: '0.7em', margin: 0 }}>Set urgency level:</p>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Urgent</li>
                <li>Important</li>
                <li>Medium / Low</li>
              </ul>
            </div>
          </div>
        </section>
      </Slide>

      <Slide>
        <section>
          <h2>4. Managing Dates for Accounting</h2>
          <div style={{ backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '8px', marginTop: '20px', textAlign: 'left' }}>
            <h3 style={{ color: '#ff9800' }}>⚠️ Due Date is CRITICAL</h3>
            <p>Accounting relies on the <strong>Due Date</strong> to prepare invoices.</p>
            
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              <div style={{ flex: 1 }}>
                <h4>Start Date</h4>
                <div style={{ backgroundColor: '#1e1e1e', padding: '10px', borderRadius: '4px', border: '1px solid #555' }}>
                  📅 Start anytime
                </div>
                <p style={{ fontSize: '0.7em', marginTop: '5px' }}>When you begin the technical work.</p>
              </div>
              <div style={{ flex: 1 }}>
                <h4>Due Date</h4>
                <div style={{ backgroundColor: '#1e1e1e', padding: '10px', borderRadius: '4px', border: '2px solid #ff9800' }}>
                  📅 03/01/2026
                </div>
                <p style={{ fontSize: '0.7em', marginTop: '5px' }}><strong>When the item will be delivered/finished.</strong> If delayed, UPDATE THIS DATE IMMEDIATELY.</p>
              </div>
            </div>
          </div>
        </section>
      </Slide>

      <Slide>
        <section>
          <h2>5. Adding Notes & Details</h2>
          <div style={{ textAlign: 'left', marginTop: '20px' }}>
            <p>The <strong>Notes</strong> section must contain all technical details for the records.</p>
            
            <div style={{ backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '8px', border: '1px solid #555', marginTop: '15px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#8b8bd1' }}>Notes Field Example:</h4>
              <div style={{ fontFamily: 'monospace', backgroundColor: '#1e1e1e', padding: '15px', borderRadius: '4px', fontSize: '0.8em' }}>
                <p style={{ margin: '0 0 10px 0' }}>Hard Disk รอของเข้า<br/>เก็บ 50% ก่อนนะ</p>
                <p style={{ margin: 0, color: '#4CAF50' }}>1. Synology RS1619XS+<br/>S/N : 25A0QPR0VZ0R6</p>
              </div>
            </div>
            
            <ul style={{ marginTop: '15px', fontSize: '0.85em' }}>
              <li><strong>Always include Serial Numbers (S/N)</strong> for tracking</li>
              <li>Add status updates (e.g., "Waiting for parts")</li>
              <li>Note any billing instructions (e.g., "Bill 50% first")</li>
            </ul>
          </div>
        </section>
      </Slide>

      <Slide>
        <section>
          <h2>6. Updating Checklists</h2>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <p style={{ fontSize: '0.85em' }}>Tick off items as they are completed. This gives Sales real-time visibility.</p>
              <ul style={{ fontSize: '0.8em', marginTop: '15px' }}>
                <li><strong>Documents:</strong> SO, PO</li>
                <li><strong>Hardware:</strong> NAS, Hard Disks</li>
                <li><strong>Services:</strong> Setup, Configuration</li>
                <li><strong>Final steps:</strong> Delivery Note, Invoice</li>
              </ul>
            </div>
            
            <div style={{ flex: 1, backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '8px', border: '1px solid #555', textAlign: 'left' }}>
              <h4 style={{ margin: '0 0 15px 0' }}>Checklist 4/8</h4>
              <div style={{ width: '100%', height: '4px', backgroundColor: '#4a4a4a', marginBottom: '15px' }}>
                <div style={{ width: '50%', height: '100%', backgroundColor: '#8b8bd1' }}></div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.8em', lineHeight: '1.8' }}>
                <li style={{ color: '#8b8bd1' }}>☑ SO</li>
                <li style={{ color: '#8b8bd1' }}>☑ PO</li>
                <li style={{ color: '#8b8bd1' }}>☑ NAS Synology</li>
                <li>☐ Hard Disk Synology</li>
                <li>☐ Wasabi Service</li>
                <li>☐ Delivery Note</li>
                <li style={{ color: '#8b8bd1' }}>☑ Invoice 1/2</li>
              </ul>
            </div>
          </div>
        </section>
      </Slide>

      <Slide>
        <section>
          <h2>7. Coordination Workflow</h2>
          <div style={{ marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#2196F3', padding: '15px', borderRadius: '8px', width: '25%' }}>
                <h4>1. IT Setup</h4>
                <p style={{ fontSize: '0.6em' }}>Updates Notes (S/N)<br/>Checks off hardware</p>
              </div>
              <div style={{ color: '#fff', fontSize: '1.5em' }}>➔</div>
              <div style={{ backgroundColor: '#4CAF50', padding: '15px', borderRadius: '8px', width: '25%' }}>
                <h4>2. Sales</h4>
                <p style={{ fontSize: '0.6em' }}>Monitors Progress<br/>Prepares Delivery Note</p>
              </div>
              <div style={{ color: '#fff', fontSize: '1.5em' }}>➔</div>
              <div style={{ backgroundColor: '#FF9800', padding: '15px', borderRadius: '8px', width: '25%' }}>
                <h4>3. Accounting</h4>
                <p style={{ fontSize: '0.6em' }}>Checks Due Date<br/>Issues Invoice</p>
              </div>
            </div>
            
            <div style={{ backgroundColor: '#2d2d2d', padding: '15px', borderRadius: '8px', marginTop: '30px', borderLeft: '5px solid #F44336' }}>
              <p style={{ margin: 0, fontSize: '0.8em' }}><strong>Rule of Thumb:</strong> Never leave a task with an outdated "Due Date". If delivery is delayed, update the date so Accounting knows not to issue the invoice yet.</p>
            </div>
          </div>
        </section>
      </Slide>

      <Slide>
        <h1>Summary</h1>
        <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
          <li>Always access tasks via <strong>Planner &gt; Assigned to me</strong></li>
          <li>Update <strong>Progress</strong> (Not started ➔ In progress ➔ Completed)</li>
          <li>Keep <strong>Due Date</strong> accurate for Accounting</li>
          <li>Put <strong>Serial Numbers (S/N)</strong> and remarks in <strong>Notes</strong></li>
          <li>Tick the <strong>Checklist</strong> as items are completed</li>
        </ul>
        <h3 style={{ marginTop: '30px', color: '#4CAF50' }}>Good updates = Happy Sales & Accounting Teams!</h3>
      </Slide>
    </>
  );
}
