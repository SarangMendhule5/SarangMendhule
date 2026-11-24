// Single source of truth for all site content. Edit here, not in components.
export const profile = {
  name: 'Sarang Pramod Mendhule',
  role: 'Java Full Stack Developer',
  tagline: 'Computer Engineering Graduate | 2026',
  intro: 'Passionate about building modern web applications and solving real-world problems through clean, efficient, and scalable code.',
  about: "I’m a Computer Engineering graduate with a strong interest in software development. I enjoy building practical applications, exploring new technologies, and continuously improving my programming skills.",
  location: 'Nagpur, Maharashtra, India',
  email: 'sarangmendhule5@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sarang-mendhule',
  github: '', // add your GitHub profile URL, e.g. 'https://github.com/yourname'. Hidden while empty.
  resume: import.meta.env.BASE_URL + 'Sarang_Mendhule_Resume.pdf',
}

export const skills = [
  { group: 'Programming', items: ['Java', 'C', 'C++'] },
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'] },
  { group: 'Backend & Database', items: ['JDBC', 'Servlets', 'MySQL', 'SQL'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Eclipse', 'VS Code'] },
]

export const projects = [
  {
    id: 'trackflow', model: 'parcel', title: 'TrackFlow', subtitle: 'Parcel Tracking Management System',
    tech: ['Java', 'Servlets', 'JDBC', 'MySQL', 'JavaScript'],
    points: [
      'Look up real-time delivery status with a unique tracking ID.',
      'Layered design: Servlet controller, DAO, model and DB utility.',
      'REST-style JSON API with validation; PreparedStatement prevents SQL injection.',
    ],
    repo: '', // add the repository URL; the GitHub button appears automatically
  },
  {
    id: 'medscript', model: 'doc', title: 'Dr. Handwriting Reader', subtitle: 'AI-powered handwritten prescription reader',
    tech: ['OCR', 'Authentication', 'CRUD'],
    points: [
      'OCR converts handwritten medical prescriptions into digital, searchable records.',
      'Secure user authentication and access control for sensitive data.',
      'CRUD features to store, retrieve and organise digitised records.',
    ],
    repo: '',
  },
]

export const experience = [
  {
    title: 'Drone Design Intern', org: 'Align Infotech, Nagpur', date: 'Jan 2025 – Apr 2025',
    points: ['Gained practical technical experience.', 'Worked on drone-related software and connectivity tasks.', 'Developed teamwork and problem-solving skills.'],
  },
]

export const education = [
  { title: 'B.Tech, Computer Engineering', org: 'Rashtrasant Tukadoji Maharaj Nagpur University', date: '2022 – 2026', points: ['Graduation year: 2026'] },
  { title: 'HSC (12th, Science)', org: 'Ashok Vidyalaya Jr. College, Umred', date: '2021 – 2022', points: [] },
  { title: 'SSC (10th)', org: 'Ashok Vidyalaya, Umred', date: '2019 – 2020', points: [] },
]
