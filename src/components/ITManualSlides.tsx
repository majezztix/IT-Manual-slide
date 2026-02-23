import SimpleSlideDeck from './SimpleSlideDeck';

export default function ITManualSlides() {
  return (
    <SimpleSlideDeck>
      <div className="slide-content">
        <h1>IT Department Manual</h1>
        <h3>MS Teams Planner & Task Management</h3>
        <p>
          <small>
            Guide for IT Staff to coordinate with Sales & Accounting<br />
            Version 1.0
          </small>
        </p>
      </div>

      <div className="slide-content">
        <h2>คู่มือสำหรับแผนก IT</h2>
        <h3>MS Teams Planner & การจัดการงาน</h3>
        <p>
          <small>
            คู่มือสำหรับ IT Staff ในการประสานงานกับ Sales & Accounting<br />
            ฉบับที่ 1.0
          </small>
        </p>
      </div>

      <div className="slide-content">
        <h2>Table of Contents / สารบัญ</h2>
        <ul>
          <li>1. Introduction to Planner / แนะนำการใช้ Planner</li>
          <li>2. Accessing Your Tasks / การเข้าถึงงานของคุณ</li>
          <li>3. Updating Task Status / การอัปเดตสถานะงาน</li>
          <li>4. Managing Dates / การจัดการวันที่</li>
          <li>5. Adding Notes & Serial Numbers / การเพิ่มข้อมูลและ S/N</li>
          <li>6. Updating Checklists / การอัปเดตรายการตรวจสอบ</li>
          <li>7. Coordination Workflow / ขั้นตอนการประสานงาน</li>
        </ul>
      </div>

      <div className="slide-content">
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
      </div>

      <div className="slide-content">
        <h2>1. ทำไมต้องอัปเดต Planner?</h2>
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <p>MS Teams Planner เป็นศูนย์กลางในการติดตามการดำเนินโครงการ</p>
          <ul>
            <li><strong>แผนก Sales:</strong> ต้องรู้ว่าสินค้าพร้อมส่งเมื่อไหร่</li>
            <li><strong>แผนก Accounting:</strong> ต้องการวันที่ส่งของเพื่อออก Invoice</li>
            <li><strong>IT Staff:</strong> รับผิดชอบการอัปเดตความคืบหน้าทางเทคนิค</li>
          </ul>
          <p style={{ color: '#ffeb3b', marginTop: '20px' }}>
            <em>การอัปเดตที่ถูกต้องทำให้การเรียกเก็บเงินเร็วและลูกค้าพึงพอใจ</em>
          </p>
        </div>
      </div>

      <div className="slide-content">
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
      </div>

      <div className="slide-content">
        <h2>2. การเข้าถึงงานของคุณ</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px' }}>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <ol>
              <li>เปิด <strong>MS Teams</strong></li>
              <li>คลิกที่ไอคอน <strong>Planner</strong> ด้านซ้าย</li>
              <li>ไปที่ <strong>My Tasks</strong></li>
              <li>เลือกแท็บ <strong>Assigned to me</strong></li>
              <li>คลิกที่งานที่ต้องการ (เช่น "TOA Electronics...")</li>
            </ol>
          </div>
          <div style={{ flex: 1, backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '8px', border: '1px solid #555' }}>
            <h4 style={{ color: '#8b8bd1', margin: '0 0 10px 0' }}>การนำทางใน Planner</h4>
            <ul style={{ fontSize: '0.8em', listStyle: 'none', padding: 0 }}>
              <li>📋 My Day</li>
              <li style={{ backgroundColor: '#4a4a4a', padding: '5px', borderRadius: '4px' }}>👉 <strong>My Tasks</strong></li>
              <li>📁 My plans</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="slide-content">
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
      </div>

      <div className="slide-content">
        <h2>3. การอัปเดตสถานะงาน</h2>
        <p style={{ textAlign: 'left', fontSize: '0.8em' }}>เมื่อเปิดงาน ให้อัปเดตสถานะการทำงานปัจจุบันทันที</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginTop: '20px' }}>
          <div style={{ backgroundColor: '#2d2d2d', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em' }}>Bucket</h4>
            <p style={{ fontSize: '0.7em', margin: 0 }}>ย้ายงานผ่านขั้นตอน:</p>
            <ul style={{ fontSize: '0.7em' }}>
              <li>ที่จะทำ</li>
              <li>กำลังทำ</li>
              <li>เสร็จสิ้น</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#2d2d2d', padding: '15px', borderRadius: '8px', border: '2px solid #4CAF50' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em' }}>Progress (สำคัญ)</h4>
            <p style={{ fontSize: '0.7em', margin: 0 }}>สถานะปัจจุบัน:</p>
            <ul style={{ fontSize: '0.7em' }}>
              <li>ยังไม่เริ่ม</li>
              <li style={{ color: '#4CAF50' }}>กำลังดำเนินการ</li>
              <li>เสร็จสิ้น</li>
            </ul>
          </div>
          
          <div style={{ backgroundColor: '#2d2d2d', padding: '15px', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9em' }}>Priority</h4>
            <p style={{ fontSize: '0.7em', margin: 0 }}>กำหนดระดับความเร่งด่วน:</p>
            <ul style={{ fontSize: '0.7em' }}>
              <li>เร่งด่วน</li>
              <li>สำคัญ</li>
              <li>ปานกลาง / ต่ำ</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="slide-content">
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
      </div>

      <div className="slide-content">
        <h2>4. การจัดการวันที่สำหรับ Accounting</h2>
        <div style={{ backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '8px', marginTop: '20px', textAlign: 'left' }}>
          <h3 style={{ color: '#ff9800' }}>⚠️ วันกำหนดส่ง สำคัญมาก</h3>
          <p>แผนก Accounting พึ่งพา <strong>วันกำหนดส่ง</strong> ในการเตรียม Invoice</p>
          
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <div style={{ flex: 1 }}>
              <h4>วันเริ่มต้น</h4>
              <div style={{ backgroundColor: '#1e1e1e', padding: '10px', borderRadius: '4px', border: '1px solid #555' }}>
                📅 เริ่มได้ทุกเมื่อ
              </div>
              <p style={{ fontSize: '0.7em', marginTop: '5px' }}>เมื่อคุณเริ่มทำงานทางเทคนิค</p>
            </div>
            <div style={{ flex: 1 }}>
              <h4>วันกำหนดส่ง</h4>
              <div style={{ backgroundColor: '#1e1e1e', padding: '10px', borderRadius: '4px', border: '2px solid #ff9800' }}>
                📅 01/03/2566
              </div>
              <p style={{ fontSize: '0.7em', marginTop: '5px' }}><strong>เมื่อสินค้าจะส่ง/เสร็จสิ้น</strong> หากล่าช้า อัปเดตวันที่นี้ทันที</p>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-content">
        <h1>Summary / สรุป</h1>
        <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
          <li>Always access tasks via <strong>Planner &gt; Assigned to me</strong></li>
          <li>Update <strong>Progress</strong> (Not started ➔ In progress ➔ Completed)</li>
          <li>Keep <strong>Due Date</strong> accurate for Accounting</li>
          <li>Put <strong>Serial Numbers (S/N)</strong> and remarks in <strong>Notes</strong></li>
          <li>Tick the <strong>Checklist</strong> as items are completed</li>
        </ul>
        <h3 style={{ marginTop: '30px', color: '#4CAF50' }}>Good updates = Happy Sales & Accounting Teams!</h3>
      </div>

      <div className="slide-content">
        <h1>สรุป</h1>
        <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
          <li>เข้าถึงงานผ่าน <strong>Planner &gt; Assigned to me</strong> เสมอ</li>
          <li>อัปเดต <strong>Progress</strong> (ยังไม่เริ่ม ➔ กำลังทำ ➔ เสร็จสิ้น)</li>
          <li>รักษา <strong>วันกำหนดส่ง</strong> ให้ถูกต้องสำหรับ Accounting</li>
          <li>ใส่ <strong>Serial Numbers (S/N)</strong> และหมายเหตุใน <strong>Notes</strong></li>
          <li>ติ๊ก <strong>Checklist</strong> เมื่อทำรายการเสร็จ</li>
        </ul>
        <h3 style={{ marginTop: '30px', color: '#4CAF50' }}>การอัปเดตที่ดี = ทีม Sales & Accounting ที่มีความสุข!</h3>
      </div>
    </SimpleSlideDeck>
  );
}
