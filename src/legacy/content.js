window.portfolioData = {
  projects: [
    {
      id: 'qc-dashboard',
      number: '01',
      title: 'QC Report Dashboard',
      eyebrow: 'Internship assignment · Individual project',
      role: 'QC & Web Developer Intern',
      year: '2025–2026',
      summary: 'A web dashboard that transforms AI-generated QC data from Excel into structured reports for Team Leaders to review agent performance, customer potential, recurring issues, and audit results.',
      contribution: 'I studied the existing QC workflow, compared AI-generated assessments with manual evaluations, structured the Excel data, stored it in PostgreSQL, and built the dashboard interface. The result replaced fragmented spreadsheet review with one clearer monitoring surface.',
      learned: 'This project strengthened my ability to understand an operational problem before selecting the technical solution. It also reinforced that AI output must be reviewed carefully and workplace data must be handled responsibly.',
      stack: ['PostgreSQL', 'Data processing', 'Dashboard UI', 'AI-assisted QC'],
      accent: 'cyan',
      layout: 'dashboard',
      images: [
        'assets/images/projects/qc/dashboard-overview.png',
        'assets/images/projects/qc/dashboard-login.jpeg'
      ],
      links: [
        { label: 'Live dashboard', href: 'https://qc-report-dashboard-v2.vercel.app/' }
      ]
    },
    {
      id: 'omnioracle',
      number: '02',
      title: 'OmniOracle',
      eyebrow: 'Chainlink Web3 competition · Group project',
      role: 'Full-stack & Web3 Developer',
      year: '2026',
      summary: 'A decentralized prediction-market prototype where users create markets, connect wallets, submit predictions, and resolve outcomes through composable blockchain oracle services.',
      contribution: 'I connected wallet and smart-contract data to the interface and supported the market creation, prediction, and resolution flows. I also contributed to automated resolution, cross-chain functionality, and AI-assisted verification so the team could demonstrate an end-to-end prototype.',
      learned: 'This was my first project combining web development, blockchain, oracle services, and AI. I learned to work with asynchronous transactions and changing contract states while keeping the user flow understandable.',
      stack: ['Next.js', 'Solidity', 'Chainlink', 'wagmi', 'viem', 'Base Sepolia'],
      accent: 'violet',
      layout: 'omnioracle',
      images: [
        'assets/images/projects/omnioracle/hero.jpeg',
        'assets/images/projects/omnioracle/markets.png',
        'assets/images/projects/omnioracle/explorer.jpeg'
      ],
      links: [
        { label: 'Live prototype', href: 'https://omnioracle.vercel.app/' },
        { label: 'GitHub repository', href: 'https://github.com/yt2025id-lab/omnioracle' }
      ]
    },
    {
      id: 'reusemart',
      number: '03',
      title: 'ReuseMart',
      eyebrow: 'Software Development course · Group project',
      role: 'Full-stack Developer',
      year: '2025',
      summary: 'A connected web and mobile marketplace for buying, consigning, and donating second-hand products through customer and administrative workflows.',
      contribution: 'I worked across UI/UX, frontend, and backend development. On the web application, I built product-detail pages, donation features, and the Admin panel. On mobile, I handled buyer and consignor profiles, purchase history, and consignment history.',
      learned: 'The project taught me that task ownership and communication are as important as implementation. Clearer responsibility boundaries helped us reduce function conflicts and Git merge problems.',
      stack: ['Laravel', 'Flutter', 'MySQL', 'UI/UX', 'REST flows'],
      accent: 'lime',
      layout: 'reusemart',
      images: [
        'assets/images/projects/reusemart/web-home.jpeg',
        'assets/images/projects/reusemart/web-products.jpeg',
        'assets/images/projects/reusemart/mobile-home.jpeg',
        'assets/images/projects/reusemart/mobile-detail.jpeg'
      ],
      links: [
        { label: 'Live website', href: 'https://reusemarted.barioth.web.id/' },
        { label: 'Figma design', href: 'https://www.figma.com/design/g70giTy08EsovHC01Tm1U1/ReuseMart-Dit-Ed-Jes?node-id=0-1&t=ePCbP6F8OXIxm63l-1' }
      ]
    },
    {
      id: 'mushroom',
      number: '04',
      title: 'Mushroom Type Prediction',
      eyebrow: 'Machine Learning course · Group project',
      role: 'Machine Learning Developer',
      year: '2024',
      summary: 'An image-classification application that identifies mushroom types using more than 1,500 images collected and labeled by the team.',
      contribution: 'I implemented and trained the AlexNet model, helped inspect and preprocess the dataset, and contributed to the Streamlit deployment so users could upload an image and receive a prediction through a usable interface.',
      learned: 'I learned that model performance depends on consistent labels, clean data, and proper preprocessing—not only the network architecture. The project covered the workflow from dataset preparation to application deployment.',
      stack: ['Python', 'AlexNet', 'Image classification', 'Streamlit'],
      accent: 'amber',
      layout: 'single',
      images: ['assets/images/projects/mushroom/streamlit.jpeg'],
      links: [
        { label: 'Streamlit application', href: 'https://proyek-uas-pmdpmah2o-jundqxd4grrfhkqpcuwtxf.streamlit.app/' },
        { label: 'GitHub repository', href: 'https://github.com/Vita210/Proyek-UAS-PMDPM_A_H2O.git' }
      ]
    },
    {
      id: 'atma-travel',
      number: '05',
      title: 'Atma Travel',
      eyebrow: 'Platform-Based Programming course · Group project',
      role: 'Full-stack Developer',
      year: '2024',
      summary: 'A Flutter-based travel-management application for organizing drivers, vehicles, and trip schedules.',
      contribution: 'I developed the Admin module, including driver and vehicle management and delivery-schedule creation. Because the records were connected, I focused on validation and reliable data flow between related features.',
      learned: 'This project improved my ability to design admin interfaces around multiple related datasets and to debug issues across connected features instead of isolating a single screen.',
      stack: ['Flutter', 'Dart', 'Admin workflows', 'Data validation'],
      accent: 'blue',
      layout: 'phones',
      images: [
        'assets/images/projects/atma-travel/home.jpeg',
        'assets/images/projects/atma-travel/vehicle.jpeg',
        'assets/images/projects/atma-travel/summary.jpeg',
        'assets/images/projects/atma-travel/history.jpeg'
      ],
      links: [
        { label: 'Figma design', href: 'https://www.figma.com/design/2DxJbYRNvmj0fUalUM7OFn/PBP_Kelompok5_Travel?node-id=0-1&t=HL51166Is6I1Ogxb-1' }
      ]
    }
  ],
  skills: [
    {
      title: 'Programming',
      items: [
        { name: 'Python', icon: 'assets/icons/tech/python.svg', color: '#4fa8ff' },
        { name: 'JavaScript', icon: 'assets/icons/tech/javascript.svg', color: '#f7df1e' },
        { name: 'TypeScript', icon: 'assets/icons/tech/typescript.svg', color: '#3178c6' },
        { name: 'PHP', icon: 'assets/icons/tech/php.svg', color: '#8993be' },
        { name: 'Dart', icon: 'assets/icons/tech/dart.svg', color: '#40c4ff' },
        { name: 'Solidity', icon: 'assets/icons/tech/solidity.svg', color: '#b9c2d0' }
      ]
    },
    {
      title: 'Web & mobile',
      items: [
        { name: 'HTML5', icon: 'assets/icons/tech/html5.svg', color: '#e34f26' },
        { name: 'CSS3', icon: 'assets/icons/tech/css3.svg', color: '#4fa8ff' },
        { name: 'Laravel', icon: 'assets/icons/tech/laravel.svg', color: '#ff5b57' },
        { name: 'React', icon: 'assets/icons/tech/react.svg', color: '#61dafb' },
        { name: 'Next.js', icon: 'assets/icons/tech/nextjs.svg', color: '#f4f7ff' },
        { name: 'Flutter', icon: 'assets/icons/tech/flutter.svg', color: '#54c5f8' },
        { name: 'Bootstrap', icon: 'assets/icons/tech/bootstrap.svg', color: '#9c6cff' },
        { name: 'Tailwind CSS', icon: 'assets/icons/tech/tailwind.svg', color: '#38bdf8' }
      ]
    },
    {
      title: 'Data, AI & Web3',
      items: [
        { name: 'PostgreSQL', icon: 'assets/icons/tech/database.svg', color: '#5ba7ff' },
        { name: 'MySQL', icon: 'assets/icons/tech/database.svg', color: '#ffbd59' },
        { name: 'Firebase', icon: 'assets/icons/tech/firebase.svg', color: '#ffca28' },
        { name: 'AlexNet', icon: 'assets/icons/tech/alexnet.svg', color: '#b05cff' },
        { name: 'Google Gemini', icon: 'assets/icons/tech/gemini.svg', color: '#7ca7ff' },
        { name: 'Chainlink', icon: 'assets/icons/tech/chainlink.svg', color: '#4d7cff' },
        { name: 'wagmi / viem', icon: 'assets/icons/tech/wagmi.svg', color: '#65ef9b' },
        { name: 'Base Sepolia', icon: 'assets/icons/tech/base.svg', color: '#4fa8ff' }
      ]
    }
  ]};
