import React from 'react';

interface SlideContent {
  type: 'title' | 'text' | 'list' | 'steps' | 'grid' | 'warning' | 'image';
  content?: string;
  items?: string[];
  title?: string;
  emoji?: string;
  color?: string;
}

interface SlideData {
  title: string;
  subtitle?: string;
  sections: SlideContent[];
}

export default function PrintableSlides() {
  const englishSlides: SlideData[] = [
    {
      title: "IT Department Manual",
      subtitle: "MS Teams Planner & Task Management",
      sections: [
        {
          type: 'text',
          content: 'Comprehensive Guide for IT Staff',
          emoji: '📘'
        },
        {
          type: 'list',
          title: 'Purpose:',
          items: [
            'Coordinate effectively with Sales & Accounting departments',
            'Track project delivery accurately',
            'Ensure timely billing and customer satisfaction'
          ],
          emoji: '🎯'
        },
        {
          type: 'text',
          content: 'Version 1.0 | IT Department Standard Operating Procedure',
          emoji: '©️'
        }
      ]
    },
    {
      title: "Table of Contents",
      sections: [
        {
          type: 'grid',
          title: 'Manual Overview',
          items: [
            '1️⃣ Introduction to Planner - Understanding the central hub',
            '2️⃣ Accessing Your Tasks - Step-by-step navigation guide',
            '3️⃣ Updating Task Status - Critical workflow management',
            '4️⃣ Managing Dates - Due dates for Accounting',
            '5️⃣ Adding Notes & Serial Numbers - Documentation requirements',
            '6️⃣ Updating Checklists - Quality assurance steps',
            '7️⃣ Coordination Workflow - Inter-department collaboration'
          ],
          emoji: '📋'
        }
      ]
    },
    {
      title: "1. Introduction to MS Teams Planner",
      subtitle: "The Central Hub for Project Tracking",
      sections: [
        {
          type: 'image',
          content: 'MS Teams Planner Dashboard Overview',
          emoji: '🖥️'
        },
        {
          type: 'grid',
          title: '🔗 Central Coordination Platform',
          items: [
            '📱 Teams + Planner Integration',
            '📋 Task Management & Tracking',
            '👥 Real-time Department Collaboration',
            '📊 Progress Monitoring Dashboard'
          ],
          emoji: '🎯'
        },
        {
          type: 'grid',
          title: 'Key Stakeholders & Responsibilities:',
          items: [
            '👔 Sales: Monitors delivery readiness for customer commitments',
            '💰 Accounting: Relies on delivery dates for invoice generation',
            '🔧 IT Staff: Updates technical progress and status accuracy'
          ],
          emoji: '👥'
        },
        {
          type: 'warning',
          content: '⚠️ Accurate updates ensure fast billing and customer satisfaction',
          color: '#ff9800'
        }
      ]
    },
    {
      title: "2. Accessing Your Tasks",
      subtitle: "Step-by-Step Navigation Guide",
      sections: [
        {
          type: 'image',
          content: 'Teams Sidebar - Click Planner Icon',
          emoji: '👆'
        },
        {
          type: 'steps',
          title: '📍 Access Procedure:',
          items: [
            '1️⃣ Open MS Teams (Desktop/Web)',
            '2️⃣ Click Planner icon in left sidebar',
            '3️⃣ Go to "My Tasks" section',
            '4️⃣ Select "Assigned to me" tab',
            '5️⃣ Click your specific task'
          ],
          emoji: '📍'
        },
        {
          type: 'grid',
          title: '🧭 Planner Navigation:',
          items: [
            '📋 My Day - Daily focus',
            '📁 My Tasks ⭐ - Your workload',
            '📂 My Plans - By project',
            '🔍 Search - Find tasks'
          ],
          emoji: '🧭'
        }
      ]
    },
    {
      title: "3. Updating Task Status",
      subtitle: "Critical Workflow Management",
      sections: [
        {
          type: 'warning',
          content: '⏰ Update status IMMEDIATELY when opening any task!',
          color: '#f59e0b'
        },
        {
          type: 'grid',
          title: '🔄 Status Components:',
          items: [
            '🪣 Bucket: To Do → In Progress → Completed',
            '📊 Progress ⭐: Not started → In Progress → Completed',
            '🚩 Priority: Urgent → Important → Medium → Low'
          ],
          emoji: '�'
        },
        {
          type: 'grid',
          title: '📊 Progress Status (CRITICAL):',
          items: [
            '⭕ Not started - Awaiting',
            '🔵 In Progress ⭐ - Active work',
            '✅ Completed - Ready for delivery'
          ],
          emoji: '�'
        },
        {
          type: 'warning',
          content: '💡 Update at least 2x daily: Morning start + End of day',
          color: '#4CAF50'
        }
      ]
    },
    {
      title: "4. Managing Dates for Accounting",
      subtitle: "Critical Timeline Information",
      sections: [
        {
          type: 'image',
          content: 'Task Detail - Start & Due Date Fields',
          emoji: '📅'
        },
        {
          type: 'warning',
          content: '🚨 Due Date is CRITICAL for Accounting - Invoice preparation depends on it!',
          color: '#ff5722'
        },
        {
          type: 'grid',
          title: '📆 Date Management:',
          items: [
            '📅 Start Date: When work begins (flexible, no financial impact)',
            '🎯 Due Date ⭐: Delivery deadline (used for invoice prep)',
            '⚠️ If delayed: UPDATE IMMEDIATELY!'
          ],
          emoji: '📆'
        }
      ]
    },
    {
      title: "5. Adding Notes & Serial Numbers",
      subtitle: "Documentation Requirements",
      sections: [
        {
          type: 'image',
          content: 'Task Notes & Checklist Section',
          emoji: '📝'
        },
        {
          type: 'grid',
          title: '📝 Required Documentation:',
          items: [
            '🔢 Serial Numbers: Record all hardware S/N (Format: Brand-Model-S/N)',
            '📋 Installation Notes: Config details, special requirements',
            '📎 Attachments: Photos, config files, sign-off docs'
          ],
          emoji: '📎'
        },
        {
          type: 'grid',
          title: '🔢 S/N Example:',
          items: [
            'Dell-XPS15-ABC123456',
            'HP-ProBook-XYZ789012',
            'Lenovo-ThinkPad-DEF345678'
          ],
          emoji: '�'
        }
      ]
    },
    {
      title: "6. Updating Checklists",
      subtitle: "Quality Assurance Protocol",
      sections: [
        {
          type: 'image',
          content: 'Task Checklist - Check Items as Completed',
          emoji: '✅'
        },
        {
          type: 'grid',
          title: '☑️ Standard Checklist:',
          items: [
            '☐ Hardware installed & secured',
            '☐ OS configured',
            '☐ Security software installed',
            '☐ Network tested',
            '☐ User accounts created',
            '☐ Data migration done',
            '☐ User training completed',
            '☐ Customer sign-off obtained'
          ],
          emoji: '☑️'
        },
        {
          type: 'warning',
          content: '⚠️ Don\'t mark complete until verified!',
          color: '#ff9800'
        }
      ]
    },
    {
      title: "7. Coordination Workflow",
      subtitle: "Inter-Department Collaboration",
      sections: [
        {
          type: 'image',
          content: 'Sales → IT → Accounting Flow Diagram',
          emoji: '🔄'
        },
        {
          type: 'grid',
          title: '🔄 Communication Flow:',
          items: [
            '1️⃣ Sales: Order received → Create task',
            '2️⃣ IT: Assign tech → "In Progress"',
            '3️⃣ IT: Complete → Checklist + S/N',
            '4️⃣ IT: Set Due Date → Notify Sales',
            '5️⃣ Sales: Confirm → Update customer',
            '6️⃣ Accounting: Invoice → Due Date ref',
            '7️⃣ All: Monitor → Customer acceptance'
          ],
          emoji: '🔄'
        }
      ]
    },
    {
      title: "Summary & Best Practices",
      subtitle: "Key Takeaways",
      sections: [
        {
          type: 'grid',
          title: '⭐ Key Points to Remember:',
          items: [
            '✅ Planner > Assigned to me',
            '✅ Progress: Not started → In progress → Completed',
            '✅ Due Date accurate for Accounting',
            '✅ Record S/N in Notes',
            '✅ Complete Checklist items',
            '✅ Update 2x daily',
            '✅ Report delays immediately'
          ],
          emoji: '⭐'
        },
        {
          type: 'warning',
          content: '🎯 Good updates = Happy Sales & Accounting = Satisfied Customers!',
          color: '#4CAF50'
        },
        {
          type: 'text',
          content: '📞 Support: IT Manager | it-support@company.com | Ext. 1234',
          emoji: '📞'
        }
      ]
    }
  ];

  const thaiSlides: SlideData[] = [
    {
      title: "คู่มือสำหรับแผนก IT",
      subtitle: "MS Teams Planner & การจัดการงาน",
      sections: [
        {
          type: 'text',
          content: 'คู่มือฉบับสมบูรณ์สำหรับ IT Staff',
          emoji: '📘'
        },
        {
          type: 'list',
          title: 'วัตถุประสงค์:',
          items: [
            'ประสานงานอย่างมีประสิทธิภาพกับแผนก Sales และ Accounting',
            'ติดตามการส่งมอบโครงการอย่างแม่นยำ',
            '确保การเรียกเก็บเงินรวดเร็วและลูกค้าพึงพอใจ'
          ],
          emoji: '🎯'
        },
        {
          type: 'text',
          content: 'ฉบับที่ 1.0 | ขั้นตอนการปฏิบัติงานมาตรฐานแผนก IT',
          emoji: '©️'
        }
      ]
    },
    {
      title: "สารบัญ",
      sections: [
        {
          type: 'grid',
          title: 'ภาพรวมคู่มือ',
          items: [
            '1️⃣ แนะนำ Planner - เข้าใจศูนย์กลางการจัดการ',
            '2️⃣ การเข้าถึงงานของคุณ - คู่มือการนำทางแบบละเอียด',
            '3️⃣ การอัปเดตสถานะงาน - การจัดการเวิร์กโฟลว์ที่สำคัญ',
            '4️⃣ การจัดการวันที่ - วันกำหนดส่งสำหรับ Accounting',
            '5️⃣ การเพิ่มบันทึกและหมายเลขซีเรียล - ข้อกำหนดเอกสาร',
            '6️⃣ การอัปเดตรายการตรวจสอบ - ขั้นตอนควบคุมคุณภาพ',
            '7️⃣ ขั้นตอนการประสานงาน - ความร่วมมือระหว่างแผนก'
          ],
          emoji: '📋'
        }
      ]
    },
    {
      title: "1. แนะนำ MS Teams Planner",
      subtitle: "ศูนย์กลางการติดตามโครงการ",
      sections: [
        {
          type: 'image',
          content: 'ภาพรวมแดชบอร์ด MS Teams Planner',
          emoji: '🖥️'
        },
        {
          type: 'grid',
          title: '🔗 แพลตฟอร์มประสานงานกลาง',
          items: [
            '📱 การผสาน Teams + Planner',
            '📋 การจัดการและติดตามงาน',
            '👥 การทำงานร่วมกันของแผนกแบบเรียลไทม์',
            '📊 แดชบอร์ดติดตามความคืบหน้า'
          ],
          emoji: '🎯'
        },
        {
          type: 'grid',
          title: 'ผู้มีส่วนได้ส่วนเสียและความรับผิดชอบ:',
          items: [
            '👔 Sales: ตรวจสอบความพร้อมส่งมอบ',
            '💰 Accounting: ใช้วันส่งมอบออกใบแจ้งหนี้',
            '🔧 IT Staff: อัปเดตความคืบหน้าทางเทคนิค'
          ],
          emoji: '👥'
        },
        {
          type: 'warning',
          content: '⚠️ การอัปเดตที่ถูกต้องช่วยให้เรียกเก็บเงินเร็ว',
          color: '#ff9800'
        }
      ]
    },
    {
      title: "2. การเข้าถึงงานของคุณ",
      subtitle: "คู่มือการนำทางแบบละเอียด",
      sections: [
        {
          type: 'image',
          content: 'แถบด้านข้าง Teams - คลิกไอคอน Planner',
          emoji: '👆'
        },
        {
          type: 'steps',
          title: '📍 ขั้นตอนการเข้าถึง:',
          items: [
            '1️⃣ เปิด MS Teams (เดสก์ท็อป/เว็บ)',
            '2️⃣ คลิกไอคอน Planner ด้านซ้าย',
            '3️⃣ ไปที่ "My Tasks"',
            '4️⃣ เลือก "Assigned to me"',
            '5️⃣ คลิกงานที่ต้องการ'
          ],
          emoji: '📍'
        },
        {
          type: 'grid',
          title: '🧭 การนำทาง Planner:',
          items: [
            '📋 My Day - งานโฟกัสรายวัน',
            '📁 My Tasks ⭐ - งานที่ได้รับมอบหมาย',
            '📂 My Plans - ตามโครงการ',
            '🔍 Search - ค้นหางาน'
          ],
          emoji: '🧭'
        }
      ]
    },
    {
      title: "3. การอัปเดตสถานะงาน",
      subtitle: "การจัดการเวิร์กโฟลว์ที่สำคัญ",
      sections: [
        {
          type: 'warning',
          content: '⏰ อัปเดตสถานะทันทีเมื่อเปิดงาน!',
          color: '#f59e0b'
        },
        {
          type: 'grid',
          title: '🔄 ส่วนประกอบสถานะ:',
          items: [
            '🪣 Bucket: ที่จะทำ → กำลังทำ → เสร็จสิ้น',
            '📊 Progress ⭐: ไม่เริ่ม → กำลังทำ → เสร็จ',
            '� Priority: เร่งด่วน → สำคัญ → ปานกลาง → ต่ำ'
          ],
          emoji: '🔄'
        },
        {
          type: 'grid',
          title: '� สถานะ Progress (สำคัญมาก):',
          items: [
            '⭕ ไม่เริ่ม - รอเริ่ม',
            '🔵 กำลังทำ ⭐ - งานที่กำลังดำเนิน',
            '✅ เสร็จสิ้น - พร้อมส่งมอบ'
          ],
          emoji: '�'
        },
        {
          type: 'warning',
          content: '💡 อัปเดตอย่างน้อย 2 ครั้ง/วัน: เช้า + สิ้นวัน',
          color: '#4CAF50'
        }
      ]
    },
    {
      title: "4. การจัดการวันที่สำหรับ Accounting",
      subtitle: "ข้อมูลไทม์ไลน์ที่สำคัญ",
      sections: [
        {
          type: 'image',
          content: 'รายละเอียดงาน - ช่องวันเริ่มและวันกำหนดส่ง',
          emoji: '📅'
        },
        {
          type: 'warning',
          content: '🚨 วันกำหนดส่งสำคัญมากสำหรับ Accounting - การเตรียม Invoice ขึ้นอยู่กับวันนี้!',
          color: '#ff5722'
        },
        {
          type: 'grid',
          title: '📆 การจัดการวันที่:',
          items: [
            '📅 วันเริ่ม: เมื่อเริ่มงาน (ยืดหยุ่น, ไม่มีผลทางการเงิน)',
            '🎯 วันกำหนดส่ง ⭐: กำหนดส่งมอบ (ใช้เตรียม Invoice)',
            '⚠️ หากล่าช้า: อัปเดตทันที!'
          ],
          emoji: '📆'
        }
      ]
    },
    {
      title: "5. การเพิ่มบันทึกและหมายเลขซีเรียล",
      subtitle: "ข้อกำหนดเอกสาร",
      sections: [
        {
          type: 'image',
          content: 'ส่วนบันทึกและรายการตรวจสอบของงาน',
          emoji: '📝'
        },
        {
          type: 'grid',
          title: '📝 เอกสารที่ต้องระบุ:',
          items: [
            '🔢 หมายเลขซีเรียล: บันทึกทุก S/N (รูปแบบ: ยี่ห้อ-รุ่น-S/N)',
            '📋 บันทึกการติดตั้ง: รายละเอียดคอนฟิก, ข้อกำหนดพิเศษ',
            '📎 ไฟล์แนบ: รูปภาพ, ไฟล์คอนฟิก, เอกสารลงนาม'
          ],
          emoji: '📎'
        },
        {
          type: 'grid',
          title: '🔢 ตัวอย่าง S/N:',
          items: [
            'Dell-XPS15-ABC123456',
            'HP-ProBook-XYZ789012',
            'Lenovo-ThinkPad-DEF345678'
          ],
          emoji: '�'
        }
      ]
    },
    {
      title: "6. การอัปเดตรายการตรวจสอบ",
      subtitle: "โปรโตคอลความปลอดภัยด้านคุณภาพ",
      sections: [
        {
          type: 'image',
          content: 'รายการตรวจสอบงาน - ติ๊กรายการเมื่อเสร็จ',
          emoji: '✅'
        },
        {
          type: 'grid',
          title: '☑️ รายการตรวจสอบมาตรฐาน:',
          items: [
            '☐ ติดตั้งฮาร์ดแวร์และยึดติดแน่น',
            '☐ กำหนดค่า OS',
            '☐ ติดตั้งซอฟต์แวร์ความปลอดภัย',
            '☐ ทดสอบเครือข่าย',
            '☐ สร้างบัญชีผู้ใช้',
            '☐ ย้ายข้อมูลเสร็จ',
            '☐ อบรมผู้ใช้',
            '☐ ได้รับลายเซ็นลูกค้า'
          ],
          emoji: '☑️'
        },
        {
          type: 'warning',
          content: '⚠️ อย่าติ๊กจนกว่าจะตรวจสอบครบ!',
          color: '#ff9800'
        }
      ]
    },
    {
      title: "7. ขั้นตอนการประสานงาน",
      subtitle: "ความร่วมมือระหว่างแผนก",
      sections: [
        {
          type: 'image',
          content: 'แผนภาพการไหลของ Sales → IT → Accounting',
          emoji: '🔄'
        },
        {
          type: 'grid',
          title: '🔄 กระแสการสื่อสาร:',
          items: [
            '1️⃣ Sales: รับออร์เดอร์ → สร้างงาน',
            '2️⃣ IT: มอบหมายช่าง → "กำลังทำ"',
            '3️⃣ IT: เสร็จ → รายการตรวจ + S/N',
            '4️⃣ IT: ตั้งวันส่ง → แจ้ง Sales',
            '5️⃣ Sales: ยืนยัน → อัปเดตลูกค้า',
            '6️⃣ Accounting: ออก Invoice → อ้างอิงวันส่ง',
            '7️⃣ ทุกฝ่าย: ติดตาม → ลูกค้ายอมรับ'
          ],
          emoji: '🔄'
        }
      ]
    },
    {
      title: "สรุปและแนวทางปฏิบัติที่ดีที่สุด",
      subtitle: "ประเด็นสำคัญ",
      sections: [
        {
          type: 'grid',
          title: '⭐ จดจำประเด็นสำคัญ:',
          items: [
            '✅ Planner > Assigned to me',
            '✅ Progress: ไม่เริ่ม → กำลังทำ → เสร็จ',
            '✅ วันกำหนดส่งถูกต้องสำหรับ Accounting',
            '✅ บันทึก S/N ในบันทึก',
            '✅ ทำรายการตรวจสอบครบ',
            '✅ อัปเดต 2 ครั้ง/วัน',
            '✅ รายงานล่าช้าทันที'
          ],
          emoji: '⭐'
        },
        {
          type: 'warning',
          content: '🎯 อัปเดตดี = Sales & Accounting มีความสุข = ลูกค้าพึงพอใจ!',
          color: '#4CAF50'
        },
        {
          type: 'text',
          content: '📞 สนับสนุน: ผู้จัดการ IT | it-support@company.com | ต่อ 1234',
          emoji: '📞'
        }
      ]
    }
  ];

  const allSlides = [...englishSlides, ...thaiSlides];

  const renderSection = (section: SlideContent, index: number) => {
    const baseStyle = {
      marginBottom: '12px',
      padding: '12px',
      backgroundColor: section.type === 'warning' ? (section.color || '#ff9800') + '15' : 'rgba(45,45,45,0.8)',
      borderRadius: '6px',
      borderLeft: section.type === 'warning' ? `3px solid ${section.color || '#ff9800'}` : '3px solid #4f46e5'
    };

    switch (section.type) {
      case 'title':
        return (
          <div key={index} style={{ ...baseStyle, textAlign: 'center' }}>
            <div style={{ fontSize: '3em', marginBottom: '10px' }}>{section.emoji}</div>
            <h2 style={{ color: '#fff', fontSize: '1.8em' }}>{section.content}</h2>
          </div>
        );
      
      case 'text':
        return (
          <div key={index} style={baseStyle}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              {section.emoji && <span style={{ fontSize: '1.3em' }}>{section.emoji}</span>}
              <p style={{ color: '#e2e8f0', fontSize: '0.95em', lineHeight: '1.5', margin: 0 }}>
                {section.content}
              </p>
            </div>
          </div>
        );
      
      case 'list':
        return (
          <div key={index} style={baseStyle}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              {section.emoji && <span style={{ fontSize: '1.2em' }}>{section.emoji}</span>}
              <div style={{ flex: 1 }}>
                {section.title && <h4 style={{ color: '#a78bfa', marginBottom: '8px', fontSize: '1em' }}>{section.title}</h4>}
                <ul style={{ color: '#cbd5e1', margin: 0, paddingLeft: '18px', lineHeight: '1.6', fontSize: '0.9em' }}>
                  {section.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'steps':
        return (
          <div key={index} style={baseStyle}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              {section.emoji && <span style={{ fontSize: '1.2em' }}>{section.emoji}</span>}
              <div style={{ flex: 1 }}>
                {section.title && <h4 style={{ color: '#a78bfa', marginBottom: '8px', fontSize: '1em' }}>{section.title}</h4>}
                <ol style={{ color: '#e2e8f0', margin: 0, paddingLeft: '20px', lineHeight: '1.7', fontSize: '0.9em' }}>
                  {section.items?.map((item, i) => (
                    <li key={i} style={{ marginBottom: '5px' }}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        );
      
      case 'grid':
        return (
          <div key={index} style={baseStyle}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              {section.emoji && <span style={{ fontSize: '1.2em' }}>{section.emoji}</span>}
              <div style={{ flex: 1 }}>
                {section.title && <h4 style={{ color: '#a78bfa', marginBottom: '10px', fontSize: '1em' }}>{section.title}</h4>}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                  gap: '8px'
                }}>
                  {section.items?.map((item, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        backgroundColor: 'rgba(20,20,30,0.8)', 
                        padding: '8px 10px', 
                        borderRadius: '5px',
                        border: '1px solid #333',
                        color: '#cbd5e1',
                        fontSize: '0.85em',
                        lineHeight: '1.5',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'warning':
        return (
          <div key={index} style={{ ...baseStyle, borderLeftColor: section.color || '#ff9800' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.5em' }}>⚠️</span>
              <p style={{ color: section.color || '#ff9800', fontSize: '1.1em', fontWeight: 'bold', margin: 0 }}>
                {section.content}
              </p>
            </div>
          </div>
        );
      
      case 'image':
        return (
          <div key={index} style={{ 
            ...baseStyle, 
            textAlign: 'center',
            backgroundColor: 'rgba(30,30,40,0.9)',
            minHeight: '140px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #4f46e5',
            borderRadius: '10px'
          }}>
            <div style={{ fontSize: '3.5em', marginBottom: '8px' }}>{section.emoji || '�️'}</div>
            <p style={{ color: '#a78bfa', fontSize: '1em', margin: 0, fontWeight: 600 }}>
              📷 {section.content}
            </p>
            <p style={{ color: '#64748b', fontSize: '0.75em', margin: '8px 0 0 0' }}>
              ☐ Screenshot / Illustration Area
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {allSlides.map((slide, index) => (
        <div
          key={index}
          className="print-slide"
          style={{
            pageBreakAfter: 'always',
            width: '100%',
            backgroundColor: '#0a0a1a',
            color: '#fff',
            padding: '25px 35px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left',
            overflow: 'visible'
          }}
        >
          <div style={{ width: '100%', maxWidth: '1000px' }}>
            <h1 style={{ 
              fontSize: '1.8em', 
              marginBottom: '8px', 
              color: '#fff',
              textAlign: 'center',
              borderBottom: '2px solid #4f46e5',
              paddingBottom: '12px',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {slide.title}
            </h1>
            {slide.subtitle && (
              <h2 style={{ 
                fontSize: '1.1em', 
                marginBottom: '20px', 
                color: '#94a3b8',
                textAlign: 'center',
                fontWeight: 500
              }}>
                {slide.subtitle}
              </h2>
            )}
            <div style={{ marginTop: '15px' }}>
              {slide.sections.map((section, secIndex) => renderSection(section, secIndex))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
