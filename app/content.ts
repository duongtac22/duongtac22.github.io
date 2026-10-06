export type Lang = "en" | "vi";

export const EMAIL = "duongtac22@gmail.com";

type Project = { name: string; img: string; url: string; company: string; desc: string; tags: string[] };
type Job = { role: string; company: string; period: string; points: string[] };

export type Content = {
  meta: { title: string; description: string };
  nav: { work: string; experience: string; contact: string };
  hero: { hello: string; role: string; intro: string; seeWork: string; email: string };
  stats: { value: string; label: string }[];
  sections: { work: string; experience: string; skills: string; next: string; together: string };
  projects: Project[];
  alsoDelivered: string;
  experience: Job[];
  skills: { group: string; items: string[] }[];
  education: string;
  contactText: string;
  footer: string;
  screenshotOf: string;
};

const img = {
  baotin: "/projects/5-baotinmanhhai.jpg",
  anphat: "/projects/3-anphat-buildpc.jpg",
  phucanh: "/projects/4-phucanh.jpg",
  hacom: "/projects/2-hacom.jpg",
  nttu: "/projects/6-nttu-tuyensinh.jpg",
  xaytoam: "/projects/1-xaytoam.jpg",
};

const skillItems = {
  frontend: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Zustand", "HTML5 / CSS3"],
  backend: ["Laravel", "PHP", "Python", "MySQL", "Elasticsearch", "Magento 2"],
  performance: ["PageSpeed", "Core Web Vitals", "Lazy loading"],
  tools: ["Git", "Figma", "Photoshop", "VS Code", "Flutter (Zalo Mini App)"],
};

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: "Truong Anh Duong — Senior Frontend Developer",
      description:
        "Senior Frontend Developer in Hanoi with 8+ years building fast, pixel-perfect websites with React, Next.js, Vue.js and Laravel.",
    },
    nav: { work: "Work", experience: "Experience", contact: "Contact" },
    hero: {
      hello: "Hello, I'm",
      role: "Senior Frontend Developer",
      intro:
        "I build fast, pixel-perfect websites for banks, universities and retailers in Vietnam — with React, Next.js, Vue.js and Laravel. Currently at Bizfly in Hanoi, mentoring a small team and growing toward a Tech Lead role.",
      seeWork: "See my work",
      email: "Email me",
    },
    stats: [
      { value: "8+", label: "years building for the web" },
      { value: "300k+", label: "users in one data sync" },
      { value: "6x → 8x", label: "PageSpeed on retail sites" },
      { value: "3–4", label: "developers mentored" },
    ],
    sections: {
      work: "Selected work",
      experience: "Experience",
      skills: "Skills",
      next: "What's next?",
      together: "Let's work together",
    },
    projects: [
      {
        name: "Bao Tin Manh Hai",
        img: img.baotin,
        url: "https://baotinmanhhai.vn/",
        company: "Bizfly",
        desc: "Gold & jewelry retailer site with a live gold price board — first built on WebSockets, then redesigned with Laravel scheduled jobs to fit the client's new requirements.",
        tags: ["Laravel", "WebSockets", "Cron jobs"],
      },
      {
        name: "An Phat PC — Build PC",
        img: img.anphat,
        url: "https://www.anphatpc.com.vn/buildpc",
        company: "Glee",
        desc: "\"Build your PC\" configurator: pick each component step by step and see the total price update instantly.",
        tags: ["JavaScript", "UX", "E-commerce"],
      },
      {
        name: "Phuc Anh",
        img: img.phucanh,
        url: "https://www.phucanh.vn/",
        company: "Glee",
        desc: "Large computer retail site. Lazy loading of images and heavy data lifted Google PageSpeed from the 60s into the 80s.",
        tags: ["Performance", "Lazy loading", "HTML/CSS"],
      },
      {
        name: "Hacom",
        img: img.hacom,
        url: "https://hacom.vn/",
        company: "Glee",
        desc: "Hanoi Computer storefront — pixel-perfect build from PSD and PageSpeed optimization to 90+ on desktop.",
        tags: ["Performance", "Responsive", "HTML/CSS"],
      },
      {
        name: "NTTU Admissions",
        img: img.nttu,
        url: "https://tuyensinh.ntt.edu.vn/",
        company: "Bizfly",
        desc: "Admissions portal for Nguyen Tat Thanh University: program listings, online registration and news.",
        tags: ["Laravel", "Responsive", "Figma to code"],
      },
      {
        name: "Xay To Am — Materials",
        img: img.xaytoam,
        url: "https://xaytoam.vn/vat-lieu/",
        company: "Bizfly",
        desc: "Building-materials marketplace with product search on Elasticsearch function_score: weighted keyword matching across SKU, name, brand and category, accent-insensitive Vietnamese search, and custom business scoring (stock, best sellers, featured and new products) so the most relevant products rank first.",
        tags: ["Elasticsearch", "function_score", "Search relevance"],
      },
    ],
    alsoDelivered: "Also delivered for PC1, Mitsu, VRB and Bac A Bank. Client code is private; links go to the live sites.",
    experience: [
      {
        role: "Frontend Developer",
        company: "Bizfly",
        period: "2020 — Present",
        points: [
          "Mentor and review code for a team of 3–4 developers.",
          "Build websites and web apps with ReactJS, Next.js, Vue.js, TypeScript and Laravel from Figma designs.",
          "Python data sync for 300,000+ users from a partner's Excel files and MySQL into Bizfly's dashboard — processing time cut from 1 day to 30 minutes.",
          "Clients include PC1, NTTU, Bao Tin Manh Hai, Mitsu, VRB and Bac A Bank; Zalo Mini Apps with Flutter.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Glee",
        period: "2018 — 2020",
        points: [
          "Raised PageSpeed for Phuc Anh, Hanoi Computer and An Phat from the 60s to the 80s.",
          "Reached 90+ on desktop and 80+ on mobile with lazy-loaded images and data.",
          "Built the \"Build Your PC\" configurator for computer retail sites.",
        ],
      },
      {
        role: "Freelance Magento Theme Developer",
        company: "ThemeForest (Envato)",
        period: "2017 — 2018",
        points: [
          "Created and sold 12 Magento / Magento 2 themes, up to 50 sales per theme.",
          "Built a custom Mega Menu plugin for Magento.",
        ],
      },
    ],
    skills: [
      { group: "Frontend", items: skillItems.frontend },
      { group: "Backend", items: skillItems.backend },
      { group: "Performance", items: skillItems.performance },
      { group: "Tools", items: skillItems.tools },
    ],
    education: "Education: IT, Bach Khoa Hanoi College (2014) · Languages: Vietnamese (native), English (TOEIC 650)",
    contactText: "Open to Senior Frontend and Tech Lead roles in Hanoi or remote. My inbox is always open.",
    footer: "Built with Next.js & Tailwind CSS",
    screenshotOf: "Screenshot of",
  },

  vi: {
    meta: {
      title: "Trương Anh Dương — Senior Frontend Developer",
      description:
        "Senior Frontend Developer tại Hà Nội với hơn 8 năm kinh nghiệm xây dựng website nhanh, chính xác đến từng pixel bằng React, Next.js, Vue.js và Laravel.",
    },
    nav: { work: "Dự án", experience: "Kinh nghiệm", contact: "Liên hệ" },
    hero: {
      hello: "Xin chào, tôi là",
      role: "Senior Frontend Developer",
      intro:
        "Tôi xây dựng website nhanh, chính xác đến từng pixel cho các ngân hàng, trường đại học và doanh nghiệp bán lẻ tại Việt Nam — với React, Next.js, Vue.js và Laravel. Hiện làm việc tại Bizfly (Hà Nội), hướng dẫn một nhóm nhỏ và đang phát triển lên vị trí Tech Lead.",
      seeWork: "Xem dự án",
      email: "Gửi email",
    },
    stats: [
      { value: "8+", label: "năm làm web" },
      { value: "300k+", label: "người dùng trong một lần đồng bộ dữ liệu" },
      { value: "6x → 8x", label: "điểm PageSpeed web bán lẻ" },
      { value: "3–4", label: "lập trình viên được hướng dẫn" },
    ],
    sections: {
      work: "Dự án tiêu biểu",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
      next: "Tiếp theo?",
      together: "Cùng hợp tác nhé",
    },
    projects: [
      {
        name: "Bảo Tín Mạnh Hải",
        img: img.baotin,
        url: "https://baotinmanhhai.vn/",
        company: "Bizfly",
        desc: "Website vàng bạc, trang sức với bảng giá vàng cập nhật trực tiếp — ban đầu dùng WebSockets, sau đó thiết kế lại bằng Laravel scheduled jobs theo yêu cầu mới của khách hàng.",
        tags: ["Laravel", "WebSockets", "Cron jobs"],
      },
      {
        name: "An Phát PC — Build PC",
        img: img.anphat,
        url: "https://www.anphatpc.com.vn/buildpc",
        company: "Glee",
        desc: "Tính năng \"Xây dựng cấu hình PC\": chọn từng linh kiện theo từng bước, tổng giá cập nhật ngay lập tức.",
        tags: ["JavaScript", "UX", "E-commerce"],
      },
      {
        name: "Phúc Anh",
        img: img.phucanh,
        url: "https://www.phucanh.vn/",
        company: "Glee",
        desc: "Website bán lẻ máy tính lớn. Lazy load hình ảnh và dữ liệu nặng giúp nâng điểm Google PageSpeed từ mức 6x lên 8x.",
        tags: ["Hiệu năng", "Lazy loading", "HTML/CSS"],
      },
      {
        name: "Hacom",
        img: img.hacom,
        url: "https://hacom.vn/",
        company: "Glee",
        desc: "Website Hà Nội Computer — cắt giao diện từ PSD chính xác đến từng pixel, tối ưu PageSpeed trên 90 cho desktop.",
        tags: ["Hiệu năng", "Responsive", "HTML/CSS"],
      },
      {
        name: "Tuyển sinh NTTU",
        img: img.nttu,
        url: "https://tuyensinh.ntt.edu.vn/",
        company: "Bizfly",
        desc: "Cổng tuyển sinh Đại học Nguyễn Tất Thành: danh sách ngành học, đăng ký xét tuyển trực tuyến và tin tức.",
        tags: ["Laravel", "Responsive", "Figma to code"],
      },
      {
        name: "Xây Tổ Ấm — Vật liệu",
        img: img.xaytoam,
        url: "https://xaytoam.vn/vat-lieu/",
        company: "Bizfly",
        desc: "Sàn vật liệu xây dựng với tính năng tìm kiếm sản phẩm bằng Elasticsearch function_score: tính điểm từ khóa theo trọng số trên nhiều trường (SKU, tên, thương hiệu, danh mục), hỗ trợ tìm kiếm tiếng Việt không dấu, và logic tính điểm nghiệp vụ tùy chỉnh (còn hàng, bán chạy, nổi bật, sản phẩm mới) để sản phẩm phù hợp nhất luôn hiển thị đầu tiên.",
        tags: ["Elasticsearch", "function_score", "Độ liên quan tìm kiếm"],
      },
    ],
    alsoDelivered:
      "Ngoài ra còn thực hiện dự án cho PC1, Mitsu, VRB và Ngân hàng Bắc Á. Mã nguồn thuộc về khách hàng; liên kết dẫn tới website thực tế.",
    experience: [
      {
        role: "Frontend Developer",
        company: "Bizfly",
        period: "2020 — Nay",
        points: [
          "Hướng dẫn và review code cho nhóm 3–4 lập trình viên.",
          "Xây dựng website và ứng dụng web bằng ReactJS, Next.js, Vue.js, TypeScript và Laravel từ thiết kế Figma.",
          "Đồng bộ dữ liệu bằng Python cho hơn 300.000 người dùng từ file Excel và MySQL của đối tác vào dashboard của Bizfly — rút ngắn thời gian xử lý từ 1 ngày xuống 30 phút.",
          "Khách hàng gồm PC1, NTTU, Bảo Tín Mạnh Hải, Mitsu, VRB và Ngân hàng Bắc Á; phát triển Zalo Mini App bằng Flutter.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Glee",
        period: "2018 — 2020",
        points: [
          "Nâng điểm PageSpeed cho Phúc Anh, Hà Nội Computer và An Phát từ mức 6x lên 8x.",
          "Đạt trên 90 cho desktop và trên 80 cho mobile nhờ lazy load hình ảnh và dữ liệu.",
          "Xây dựng tính năng \"Xây dựng cấu hình PC\" cho các website bán lẻ máy tính.",
        ],
      },
      {
        role: "Freelancer phát triển theme Magento",
        company: "ThemeForest (Envato)",
        period: "2017 — 2018",
        points: [
          "Thiết kế và bán 12 theme Magento / Magento 2, mỗi theme đạt tối đa 50 lượt bán.",
          "Phát triển plugin Mega Menu cho Magento.",
        ],
      },
    ],
    skills: [
      { group: "Frontend", items: skillItems.frontend },
      { group: "Backend", items: skillItems.backend },
      { group: "Hiệu năng", items: skillItems.performance },
      { group: "Công cụ", items: skillItems.tools },
    ],
    education:
      "Học vấn: Cao đẳng CNTT, Cao đẳng Bách Khoa Hà Nội (2014) · Ngoại ngữ: Tiếng Việt (bản ngữ), Tiếng Anh (TOEIC 650)",
    contactText: "Sẵn sàng cho vị trí Senior Frontend và Tech Lead tại Hà Nội hoặc làm việc từ xa. Hãy liên hệ với tôi bất cứ lúc nào.",
    footer: "Xây dựng bằng Next.js & Tailwind CSS",
    screenshotOf: "Ảnh chụp màn hình",
  },
};
