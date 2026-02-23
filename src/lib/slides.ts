export interface SlideContent {
  type: 'title' | 'text' | 'list' | 'steps' | 'grid' | 'warning' | 'image';
  content?: string;
  items?: string[];
  title?: string;
  emoji?: string;
  color?: string;
}

export interface SlideData {
  title: string;
  subtitle?: string;
  sections: SlideContent[];
}

export const englishSlides: SlideData[] = [
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
        content: '🖥️ MS Teams Planner Dashboard\n📍 Location: Left sidebar → Planner icon\n👀 Look for: Task cards with progress bars, bucket columns (To Do/In Progress/Completed)',
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
        content: '👆 Teams Sidebar Navigation\n📍 Step 1: Look for 📋 icon in left sidebar\n📍 Step 2: Click "My Tasks" → "Assigned to me"\n🎯 Find your name in the assignee list',
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
        emoji: '🔄'
      },
      {
        type: 'grid',
        title: '📊 Progress Status (CRITICAL):',
        items: [
          '⭕ Not started - Awaiting',
          '🔵 In Progress ⭐ - Active work',
          '✅ Completed - Ready for delivery'
        ],
        emoji: '🔄'
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
        content: '📅 Task Detail Panel (Right Side)\n📍 Start Date: Click calendar icon to set\n📍 Due Date: ⚠️ CRITICAL - Click to edit\n💡 Tip: Click date to open calendar picker',
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
        content: '📝 Task Detail - Notes Tab\n📍 Scroll down to "Notes" section\n📝 Type: Serial numbers, config details\n📎 Tip: Use format: Brand-Model-SerialNumber',
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
        emoji: '🔢'
      }
    ]
  },
  {
    title: "6. Updating Checklists",
    subtitle: "Quality Assurance Protocol",
    sections: [
      {
        type: 'image',
        content: '✅ Task Detail - Checklist Tab\n📍 Scroll to "Checklist" section\n☑️ Click ☐ to check (turns to ✅)\n📝 Add custom items with "+ Add item"',
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
        content: '🔄 Teams Channel Integration\n📍 Tasks created in Channel → Planner\n👥 @mention team members in comments\n🔔 Get notifications for updates',
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
      }
    ]
  }
];

export const thaiSlides: SlideData[] = [
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
          'ประสานงานอย่างมีประสิทธิภาพกับแผนก Sales & Accounting',
          'ติดตามการส่งมอบโครงการอย่างแม่นยำ',
          'รับประกันการเรียกเก็บเงินและความพึงพอใจของลูกค้า'
        ],
        emoji: '🎯'
      },
      {
        type: 'text',
        content: 'เวอร์ชัน 1.0 | ขั้นตอนปฏิบัติมาตรฐานแผนก IT',
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
          '1️⃣ แนะนำ Planner - ทำความเข้าใจศูนย์กลาง',
          '2️⃣ เข้าถึงงานของคุณ - คู่มือการนำทางทีละขั้นตอน',
          '3️⃣ อัปเดตสถานะงาน - การจัดการเวิร์กโฟล์ว์ที่สำคัญ',
          '4️⃣ จัดการวันที่ - วันครบกำหนดสำหรับ Accounting',
          '5️⃣ เพิ่มบันทึกและหมายเลขซีเรียล - ข้อกำหนดเอกสาร',
          '6️⃣ อัปเดตรายการตรวจสอบ - ขั้นตอนคุณภาพ',
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
        content: '🖥️ แดชบอร์ด MS Teams Planner\n📍 ตำแหน่ง: แถบด้านซ้าย → ไอคอน Planner\n👀 สิ่งที่ต้องมองหา: การ์ดงานที่มีแถบความคืบหน้า คอลัมน์ถัง (ยังไม่ทำ/กำลังทำ/เสร็จแล้ว)',
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
        title: 'ผู้มีส่วนได้ส่วนเสียหลัก & ความรับผิดชอบ:',
        items: [
          '👔 Sales: ติดตามความพร้อมส่งมอบสำหรับคำมั่นลูกค้า',
          '💰 Accounting: พึ่งพาวันที่ส่งมอบสำหรับการเตรียม Invoice',
          '🔧 IT Staff: อัปเดตความคืบหน้าทางเทคนิคและความถูกต้องของสถานะ'
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
        content: '👆 การนำทางแถบด้านข้าง Teams\n📍 ขั้นตอนที่ 1: มองหาไอคอน 📋 ในแถบด้านซ้าย\n📍 ขั้นตอนที่ 2: คลิก "งานของฉัน" → "มอบหมายให้ฉัน"\n🎯 ค้นหาชื่อของคุณในรายผู้ได้รับมอบหมาย',
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
          '5️⃣ คลิกงานเฉพาะของคุณ'
        ],
        emoji: '📍'
      },
      {
        type: 'grid',
        title: '🧭 การนำทาง Planner:',
        items: [
          '📋 My Day - โฟกัสรายวัน',
          '📁 My Tasks ⭐ - งานของคุณ',
          '📂 My Plans - ตามโครงการ',
          '🔍 Search - ค้นหางาน'
        ],
        emoji: '🧭'
      }
    ]
  },
  {
    title: "3. การอัปเดตสถานะงาน",
    subtitle: "การจัดการเวิร์กโฟล์ว์ที่สำคัญ",
    sections: [
      {
        type: 'warning',
        content: '⏰ อัปเดตสถานะทันทีเมื่อเปิดงานใดๆ!',
        color: '#f59e0b'
      },
      {
        type: 'grid',
        title: '🔄 องค์ประกอบสถานะ:',
        items: [
          '🪣 Bucket: To Do → In Progress → Completed',
          '📊 Progress ⭐: Not started → In Progress → Completed',
          '🚩 Priority: Urgent → Important → Medium → Low'
        ],
        emoji: '🔄'
      },
      {
        type: 'grid',
        title: '📊 สถานะความคืบหน้า (สำคัญ):',
        items: [
          '⭕ Not started - รอ',
          '🔵 In Progress ⭐ - กำลังทำ',
          '✅ Completed - พร้อมส่งมอบ'
        ],
        emoji: '🔄'
      },
      {
        type: 'warning',
        content: '💡 อัปเดตอย่างน้อย 2 ครั้ง/วัน: เริ่มต้น + สิ้นวัน',
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
        content: '📅 แผงรายละเอียดงาน (ด้านขวา)\n📍 วันเริ่มต้น: คลิกไอคอนปฏิทินเพื่อตั้งค่า\n📍 วันกำหนดส่ง: ⚠️ สำคัญมาก - คลิกเพื่อแก้ไข\n💡 เคล็ดลับ: คลิกวันที่เพื่อเปิดตัวเลือกปฏิทิน',
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
          '📅 Start Date: เมื่อเริ่มทำงาน (ยืดหยุ่น ไม่มีผลทางการเงิน)',
          '🎯 Due Date ⭐: กำหนดส่งมอบ (ใช้สำหรับการเตรียม Invoice)',
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
        content: '📝 รายละเอียดงาน - แท็บบันทึก\n📍 เลื่อนลงไปที่ส่วน "บันทึก"\n📝 พิมพ์: หมายเลข Serial, รายละเอียดการตั้งค่า\n📎 เคล็ดลับ: ใช้รูปแบบ ยี่ห้อ-รุ่น-หมายเลข Serial',
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
        emoji: '🔢'
      }
    ]
  },
  {
    title: "6. การอัปเดตรายการตรวจสอบ",
    subtitle: "โปรโตคอลความปลอดภัยด้านคุณภาพ",
    sections: [
      {
        type: 'image',
        content: '✅ รายละเอียดงาน - แท็บรายการตรวจสอบ\n📍 เลื่อนไปที่ส่วน "รายการตรวจสอบ"\n☑️ คลิก ☐ เพื่อติ๊ก (จะเปลี่ยนเป็น ✅)\n📝 เพิ่มรายการที่กำหนดเองด้วย "+ เพิ่มรายการ"',
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
          '☐ การฝึกอบรมผู้ใช้เสร็จ',
          '☐ ได้รับการลงนามจากลูกค้า'
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
        content: '🔄 การรวมช่องทาง Teams\n📍 งานถูกสร้างในช่อง → Planner\n👥 @กล่าวถึงสมาชิกทีมในความคิดเห็น\n🔔 รับการแจ้งเตือนเมื่อมีการอัปเดต',
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
      }
    ]
  }
];
