const newsData = [
  {
    id: 4,
    date: "10 กรกฎาคม 2569",
    dateEn: "July 10, 2026",
    titleTh: "หัวข้อข่าวภาษาไทย",
    titleEn: "News Title in English",
    image: "images/news/news-00004.jpg", // พาธรูปภาพข่าว
    excerptTh: "เกริ่นนำข่าวสั้นๆ สำหรับแสดงในหน้าข่าวทั้งหมด...",
    excerptEn: "Short summary of the news for the main listing page...",
    link: "news-detail.html?id=4", // เช็คว่า id ตรงกับด้านบน
    contentTh: `
      <p>เนื้อหาข่าวแบบเต็มภาษาไทยย่อหน้าที่ 1...</p>
      <p>เนื้อหาข่าวแบบเต็มย่อหน้าที่ 2...</p>
      <h3>หัวข้อย่อย (ถ้ามี)</h3>
      <p>รายละเอียดเพิ่มเติม...</p>
    `,
    contentEn: `
      <p>Full news content in English paragraph 1...</p>
      <p>Full news content in English paragraph 2...</p>
      <h3>Subheading (if any)</h3>
      <p>Additional details...</p>
    `
  },
  
  {
    id: 3,
    date: "10 กรกฎาคม 2569",
    dateEn: "July 10, 2026",
    titleTh: "หัวข้อข่าวภาษาไทย",
    titleEn: "News Title in English",
    image: "images/news/news-00003.jpg", // พาธรูปภาพข่าว
    excerptTh: "เกริ่นนำข่าวสั้นๆ สำหรับแสดงในหน้าข่าวทั้งหมด...",
    excerptEn: "Short summary of the news for the main listing page...",
    link: "news-detail.html?id=3", // เช็คว่า id ตรงกับด้านบน
    contentTh: `
      <p>เนื้อหาข่าวแบบเต็มภาษาไทยย่อหน้าที่ 1...</p>
      <p>เนื้อหาข่าวแบบเต็มย่อหน้าที่ 2...</p>
      <h3>หัวข้อย่อย (ถ้ามี)</h3>
      <p>รายละเอียดเพิ่มเติม...</p>
    `,
    contentEn: `
      <p>Full news content in English paragraph 1...</p>
      <p>Full news content in English paragraph 2...</p>
      <h3>Subheading (if any)</h3>
      <p>Additional details...</p>
    `
  },

  {
    id: 2,
    date: "25 พฤศจิกายน 2569",
    dateEn: "November 25, 2026",
    titleTh: "มหาวิทยาลัยเกษตรศาสตร์และเบทาโกร ร่วมกับ TICA ต้อนรับผู้บริหารจากไนจีเรีย ติดตามผลการฝึกอบรมการเพาะเลี้ยงปลาดุก",
    titleEn: "Kasetsart University and Betagro, with Support from TICA, Welcome Nigerian CEO to Monitor Catfish Aquaculture Training",
    image: "images/news/news-00002.1.jpg, news-00002.2.jpg, news-00002.3.jpg",
    excerptTh: "มหาวิทยาลัยเกษตรศาสตร์และบริษัท เบทาโกร จำกัด (มหาชน) ร่วมกับ TICA ต้อนรับผู้บริหารจาก Federal Cooperative College Oji River ประเทศไนจีเรีย ลงพื้นที่ติดตามและประเมินผลการฝึกอบรมการเพาะเลี้ยงปลาดุก ณ จังหวัดกาฬสินธุ์ ภายใต้โครงการ Thai–Nigeria Sustainable Agricultural Technology Learning Centre (SATLC)",
    excerptEn: "Kasetsart University and Betagro Public Company Limited, with support from TICA, welcomed the CEO of Federal Cooperative College Oji River, Nigeria, for a monitoring and evaluation visit to assess the outcomes of catfish aquaculture training in Kalasin Province under the Thai–Nigeria Sustainable Agricultural Technology Learning Centre (SATLC) project.",
    link: "news-detail.html?id=2",
    contentTh: `
        <p><b>เสริมสร้างความร่วมมือทางวิชาการและการถ่ายทอดเทคโนโลยีการเกษตรระหว่างประเทศไทยและประเทศไนจีเรีย</b> เมื่อวันที่ 25 พฤศจิกายน 2569 มหาวิทยาลัยเกษตรศาสตร์ นำโดย <b>ศาสตราจารย์ ดร.ครศร ศรีกุลนาถ</b> และ <b>ดร.วรพงศ์ สิงห์ชาติ</b> ร่วมกับบริษัท <b>เบทาโกร จำกัด (มหาชน)</b> ให้การต้อนรับ <b>Dr. Jude Ejikeme Obidiegwu</b> ประธานเจ้าหน้าที่บริหาร (CEO) ของ <b>Federal Cooperative College Oji River (FCCO)</b> ประเทศไนจีเรีย ในโอกาสลงพื้นที่ติดตามและประเมินผลการฝึกอบรมด้านการเพาะเลี้ยงปลาดุก ณ ฟาร์มเพาะเลี้ยงปลาดุกของบริษัท เบทาโกร จำกัด (มหาชน) จังหวัดกาฬสินธุ์</p>
        <p>กิจกรรมดังกล่าวได้รับการสนับสนุนจาก <b>กรมความร่วมมือระหว่างประเทศ (Thailand International Cooperation Agency: TICA)</b> กระทรวงการต่างประเทศ ภายใต้กรอบความร่วมมือด้านการพัฒนาศักยภาพบุคลากรและการถ่ายทอดเทคโนโลยีการเกษตรระหว่างประเทศไทยและประเทศไนจีเรีย</p>
        <h3>ติดตามและประเมินผลการฝึกอบรมด้านการเพาะเลี้ยงปลาดุก</h3>
        <p>การลงพื้นที่ครั้งนี้มีวัตถุประสงค์เพื่อติดตามความก้าวหน้าและประเมินผลการเรียนรู้ของผู้เข้ารับการฝึกอบรมจากประเทศไนจีเรีย จำนวน <b>3 ราย</b> ซึ่งเข้าร่วมหลักสูตรฝึกอบรมเชิงปฏิบัติการด้านการเพาะเลี้ยงปลาดุก โดยครอบคลุมองค์ความรู้และทักษะสำคัญ ได้แก่ การจัดการฟาร์ม การอนุบาลและการเลี้ยงปลาดุก การจัดการอาหาร คุณภาพน้ำ และสุขภาพสัตว์น้ำ</p>
        <p>นอกจากนี้ ยังมีการแลกเปลี่ยนความคิดเห็นระหว่างผู้บริหาร นักวิจัย และผู้เกี่ยวข้องเกี่ยวกับแนวทางการนำองค์ความรู้ เทคโนโลยี และประสบการณ์จากการฝึกอบรมไปประยุกต์ใช้ให้เหมาะสมกับบริบทของประเทศไนจีเรีย เพื่อสนับสนุนการพัฒนาระบบการเพาะเลี้ยงสัตว์น้ำและเพิ่มประสิทธิภาพการผลิตในอนาคต</p>
        <h3>Thai–Nigeria Sustainable Agricultural Technology Learning Centre (SATLC)</h3>
        <p>การดำเนินงานครั้งนี้เป็นส่วนหนึ่งของโครงการ <b>Thai–Nigeria Sustainable Agricultural Technology Learning Centre (SATLC)</b> ซึ่งมุ่งส่งเสริมการพัฒนาศักยภาพบุคลากร การถ่ายทอดองค์ความรู้และเทคโนโลยีด้านการเกษตร ตลอดจนการพัฒนาฟาร์มต้นแบบและเครือข่ายความร่วมมือระหว่างสถาบันการศึกษา หน่วยงานภาครัฐ และภาคอุตสาหกรรม เพื่อสนับสนุนการพัฒนาภาคการเกษตรและการเพาะเลี้ยงสัตว์น้ำอย่างยั่งยืน</p>
        <h3>ขับเคลื่อนความร่วมมือไทย–ไนจีเรียสู่การพัฒนาอย่างยั่งยืน</h3>
        <p>ความร่วมมือระหว่าง <b>TICA มหาวิทยาลัยเกษตรศาสตร์ บริษัท เบทาโกร จำกัด (มหาชน) และ Federal Cooperative College Oji River (FCCO)</b> สะท้อนถึงการบูรณาการความเชี่ยวชาญทางวิชาการ ประสบการณ์จากภาคอุตสาหกรรม และความร่วมมือเพื่อการพัฒนาระหว่างประเทศ โดยมุ่งยกระดับศักยภาพทรัพยากรมนุษย์ ส่งเสริมการถ่ายทอดเทคโนโลยี และสร้างเครือข่ายความร่วมมือระยะยาวระหว่างประเทศไทยและประเทศไนจีเรีย เพื่อเพิ่มประสิทธิภาพการผลิตและสนับสนุนการพัฒนาอุตสาหกรรมเพาะเลี้ยงสัตว์น้ำอย่างยั่งยืน</p>
    `,
    contentEn: `
        <p><b>Strengthening academic collaboration and agricultural technology transfer between Thailand and Nigeria.</b> On November 25, 2026, <b>Kasetsart University (KU)</b>, represented by <b>Professor Dr. Kornsorn Srikulnath</b> and <b>Dr. Worapong Singchat</b>, in collaboration with <b>Betagro Public Company Limited</b>, welcomed <b>Dr. Jude Ejikeme Obidiegwu</b>, Chief Executive Officer (CEO) of <b>Federal Cooperative College Oji River (FCCO)</b>, Nigeria. The visit took place at Betagro's catfish aquaculture farm in Kalasin Province, Thailand, to monitor and evaluate the outcomes of a practical catfish aquaculture training program.</p>
        <p>The activity was supported by the <b>Thailand International Cooperation Agency (TICA)</b>, Ministry of Foreign Affairs of Thailand, under the bilateral cooperation framework for human resource capacity development and agricultural technology transfer between Thailand and Nigeria.</p>
        <h3>Monitoring and Evaluation of Catfish Aquaculture Training</h3>
        <p>The visit focused on assessing the progress and learning outcomes of <b>three Nigerian trainees</b> participating in a practical catfish aquaculture training program. The training covered essential knowledge and skills in farm management, fish nursing and rearing, feeding practices, water quality management, and aquatic animal health.</p>
        <p>The visit also provided an opportunity for institutional representatives, researchers, and relevant stakeholders to exchange perspectives on how the knowledge, technologies, and practical experience gained through the training could be adapted and applied to the Nigerian context. These discussions aimed to support the development of aquaculture systems and improve production efficiency in Nigeria.</p>
        <h3>Thai–Nigeria Sustainable Agricultural Technology Learning Centre (SATLC)</h3>
        <p>This initiative forms part of the <b>Thai–Nigeria Sustainable Agricultural Technology Learning Centre (SATLC)</b> project, which aims to strengthen human resource capacity, facilitate agricultural knowledge and technology transfer, and promote the development of model farms. The project also seeks to establish collaborative networks among academic institutions, government agencies, and the private sector to support sustainable agricultural and aquaculture development.</p>
        <h3>Advancing Thailand–Nigeria Cooperation for Sustainable Development</h3>
        <p>The collaboration among <b>TICA, Kasetsart University, Betagro Public Company Limited, and Federal Cooperative College Oji River (FCCO)</b> demonstrates the integration of academic expertise, industry experience, and international development cooperation. Through capacity building, technology transfer, and the establishment of long-term partnerships, the initiative aims to enhance human resource capabilities, improve production efficiency, and contribute to the sustainable development of the aquaculture industry in Nigeria.</p>
    `
  }

  {
    id: 1,
    date: "22 มิถุนายน 2569",
    dateEn: "June 22, 2026",
    titleTh: "DUKEOME: The Clarias Genome Browser",
    titleEn: "DUKEOME: The Clarias Genome Browser",
    image: "images/news/news-00001.jpg",
    excerptTh: "นักวิจัย ม.เกษตรศาสตร์ ผนึกกำลังไทย–จีน เปิดตัว DUKEOME แพลตฟอร์มจีโนมปลาดุก เชื่อมโยงข้อมูลพันธุกรรมเพื่ออนาคตงานวิจัยและการเพาะเลี้ยงสัตว์น้",
    excerptEn: "Thai–Chinese Research Collaboration Launches DUKEOME, a Clarias Genome Browser Advancing Catfish Genomics and Aquaculture Research",
    link: "news-detail.html?id=1",
    contentTh: `
        <p><b>อีกก้าวสำคัญของงานวิจัยไทยสู่เวทีนานาชาติ</b> กับการพัฒนา <b>DUKEOME: The Clarias Genome Browser</b> แพลตฟอร์มชีวสารสนเทศสำหรับการสำรวจและเข้าถึงข้อมูลจีโนมปลาดุก ซึ่งมุ่งสนับสนุนการศึกษาทางพันธุศาสตร์ การวิเคราะห์ข้อมูลจีโนม และการต่อยอดองค์ความรู้เพื่อพัฒนาอุตสาหกรรมสัตว์น้ำอย่างยั่งยืน</p>
        <p>ผลงานนี้เกิดจากความร่วมมือของทีมวิจัยมหาวิทยาลัยเกษตรศาสตร์ นำโดย <b>ศาสตราจารย์ ดร.ครศร ศรีกุลนาถ</b> และ <b>ดร.ฐิติพงศ์ พันทุม</b> คณะวิทยาศาสตร์ ร่วมกับ <b>นายดนุรุจ แสนโซ้ง</b> นิสิตระดับปริญญาโท หลักสูตรวิทยาศาสตร์ชีวภาพ (นานาชาติ) คณะวิทยาศาสตร์ มหาวิทยาลัยเกษตรศาสตร์ และนักวิจัยจาก <b>Kunming Institute of Zoology, Chinese Academy of Sciences</b></p>
        <h3>จากข้อมูลจีโนม สู่เครื่องมือวิจัยที่เข้าถึงได้</h3>
        <p>DUKEOME ได้รับการพัฒนาขึ้นเพื่อช่วยให้การสำรวจและเข้าถึงข้อมูลจีโนมปลาดุกเป็นไปอย่างสะดวกยิ่งขึ้น โดยเป็นแหล่งข้อมูลสนับสนุนการศึกษาความหลากหลายทางพันธุกรรม การสำรวจยีนและบริเวณจีโนมที่เกี่ยวข้องกับลักษณะสำคัญ ตลอดจนการสร้างองค์ความรู้ใหม่ด้านพันธุศาสตร์และชีวสารสนเทศ</p>
        <h3>ต่อยอดงานวิจัย สร้างโอกาสให้อุตสาหกรรมปลาดุก</h3>
        <p>ข้อมูลจีโนมเป็นรากฐานสำคัญของการพัฒนางานวิจัยด้านการปรับปรุงพันธุ์ การศึกษากลไกทางพันธุกรรมที่เกี่ยวข้องกับการต้านทานโรค และการทำความเข้าใจศักยภาพในการปรับตัวต่อสภาพแวดล้อมที่เปลี่ยนแปลง DUKEOME จึงเป็นอีกหนึ่งเครื่องมือที่สามารถสนับสนุนการศึกษาวิจัยและการพัฒนานวัตกรรมด้านการเพาะเลี้ยงสัตว์น้ำในอนาคต</p>
        <p>ความร่วมมือระหว่างมหาวิทยาลัยเกษตรศาสตร์และ Kunming Institute of Zoology, Chinese Academy of Sciences สะท้อนถึงการเชื่อมโยงองค์ความรู้และศักยภาพของนักวิจัยไทยกับเครือข่ายวิทยาศาสตร์นานาชาติ เพื่อขยายโอกาสในการใช้ประโยชน์จากข้อมูลจีโนมและส่งเสริมการวิจัยด้านทรัพยากรชีวภาพอย่างยั่งยืน</p>
        <h3>เข้าถึงแพลตฟอร์ม</h3>
        <p>สำรวจ DUKEOME: The Clarias Genome Browser ได้ที่ <a href="http://210.72.95.48" target="_blank" rel="noopener noreferrer">http://210.72.95.48</a></p>
        <h3>โครงการวิจัยและแหล่งทุนสนับสนุน</h3>
        <p><b>1. โครงการการเสริมศักยภาพอุตสาหกรรมปลาดุกด้วยเทคโนโลยีแพนจีโนมิกส์ (Pan-genomics) และการแก้ไขยีน (Gene editing) เพื่อพัฒนาปลาดุกลูกผสมคุณภาพสูงที่ปรับตัวได้ดีในสภาพภูมิอากาศเปลี่ยนแปลง โดยอิงจากความหลากหลายชีวภาพทั้งในไทยและระดับนานาชาติ</b></p>
        <p>สนับสนุนโดย หน่วยบริหารและจัดการทุนด้านการพัฒนากำลังคน และทุนด้านการพัฒนาสถาบันอุดมศึกษา การวิจัยและการสร้างนวัตกรรม (บพค.)</p>
        <p><b>2. โครงการการเพิ่มขีดความสามารถการปรับปรุงพันธุ์กลุ่มปลาดุก (ปลาดุกอุย ปลาดุกยักษ์ และลูกผสมบิ๊กอุย) เพื่อยกระดับผลผลิตและนวัตกรรมอุตสาหกรรมสัตว์น้ำอย่างยั่งยืน</b></p>
        <p>สนับสนุนโดยทุนส่งเสริมกลุ่มวิจัยศักยภาพสูง จากสำนักงานการวิจัยแห่งชาติ (วช.) ร่วมกับสำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.)</p>
    `,
    contentEn: `
        <p><b>A milestone in Thai research and international scientific collaboration.</b> <b>DUKEOME: The Clarias Genome Browser</b> is a bioinformatics platform designed to facilitate the exploration and access of catfish genomic information, supporting research in genetics, genome analysis, and the development of knowledge for sustainable aquaculture.</p>
        <p>The initiative brings together a research team from Kasetsart University, Thailand, led by <b>Professor Dr. Kornsorn Srikulnath</b> and <b>Dr. Thitipong Panthum</b> of the Faculty of Science, together with <b>Mr. Danurut Saensong</b>, a master's student in the International Program in Biological Science, Faculty of Science, Kasetsart University. The team collaborates with researchers from the <b>Kunming Institute of Zoology, Chinese Academy of Sciences</b>.</p>
        <h3>From Genomic Data to Accessible Research Resources</h3>
        <p>DUKEOME was developed to make catfish genomic information more accessible for research. The platform serves as a resource for investigating genetic diversity, exploring genes and genomic regions associated with important traits, and advancing knowledge in genetics and bioinformatics.</p>
        <h3>Advancing Research and the Future of Catfish Aquaculture</h3>
        <p>Genomic information provides an important foundation for research into selective breeding, the genetic mechanisms associated with disease resistance, and the biological factors that may contribute to adaptation to changing environmental conditions. DUKEOME offers a resource that can support future research and innovation in aquaculture.</p>
        <p>The collaboration between Kasetsart University and the Kunming Institute of Zoology, Chinese Academy of Sciences, demonstrates the value of international scientific partnerships in connecting research expertise, expanding access to genomic resources, and advancing the sustainable use of biological resources.</p>
        <h3>Explore the Platform</h3>
        <p>Visit DUKEOME: The Clarias Genome Browser at <a href="http://210.72.95.48" target="_blank" rel="noopener noreferrer">http://210.72.95.48</a></p>
        <h3>Supporting Research Projects and Funding</h3>
        <p><b>1. Strengthening the Catfish Industry through Pan-genomics and Gene Editing to Develop High-Quality Hybrid Catfish Adapted to a Changing Climate, Drawing on Biodiversity in Thailand and Internationally.</b></p>
        <p>Supported by the Program Management Unit for Human Resources & Institutional Development, Research and Innovation (PMU-B).</p>
        <p><b>2. Enhancing the Breeding Capacity of Catfish Species and Hybrids (Walking Catfish, Giant Catfish, and Big Uei Hybrid Catfish) to Improve Productivity and Promote Sustainable Aquaculture Innovation.</b></p>
        <p>Supported by the High-Potential Research Group Promotion Funding Program, jointly supported by the National Research Council of Thailand (NRCT) and the National Science and Technology Development Agency (NSTDA).</p>
    `
  }
];
