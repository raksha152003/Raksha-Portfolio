import { useEffect, useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
  const elements = document.querySelectorAll(".reveal")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12,
    }
  )

  elements.forEach((element) => observer.observe(element))

  return () => observer.disconnect()
}, [])

  // ================= PROJECTS =================

  const projects = [
    {
      title: "AgroXAI",
      category: "Federated Learning • Explainable AI",
      icon: "🌱",
      description:
        "A privacy-preserving plant disease detection system using Federated Learning and deep learning, enabling collaborative model training without sharing raw image data.",
      details:
        "Integrated Grad-CAM based Explainable AI to highlight disease-affected regions and built a full-stack application with prediction, visualization, history and persistent storage.",
      tags: [
        "React",
        "Tailwind CSS",
        "Flask",
        "Python",
        "Federated Learning",
        "Grad-CAM",
      ],
    },

    {
      title: "Structural Health Monitoring",
      category: "Computer Vision • YOLO",
      icon: "🏗️",
      description:
        "A computer vision-based structural inspection system for automated detection and localization of cracks in infrastructure images.",
      details:
        "Processes YOLO detection results to generate an overall structural health score and provides image inspection, dashboards, prediction history and data storage.",
      tags: [
        "YOLO",
        "React",
        "Tailwind CSS",
        "Flask",
        "Computer Vision",
      ],
    },

    {
      title: "AI Powered Mock Interview Platform",
      category: "Generative AI • Full Stack",
      icon: "💻",
      description:
        "An AI-powered web platform for automated and interactive mock interviews to support technical interview preparation.",
      details:
        "Integrated Gemini AI for intelligent question generation and AI-driven interactions based on interview context and user responses.",
      tags: [
        "Next.js",
        "React",
        "Gemini AI",
        "Clerk",
        "Drizzle ORM",
        "PostgreSQL",
      ],
    },

    {
      title: "Traffic Deadlock Detection & Prevention Simulator",
      category: "Operating Systems • Simulation",
      icon: "🚦",
      description:
        "A four-way traffic junction simulator demonstrating deadlock detection and prevention concepts inspired by operating systems and multi-agent systems.",
      details:
        "Implemented real-time traffic-state monitoring and a signal-prioritization mechanism to resolve detected deadlocks using React and Flask.",
      tags: [
        "React",
        "Flask",
        "Deadlock",
        "Simulation",
      ],
    },

    {
      title: "PneumoVision",
      category: "Deep Learning • Medical Imaging",
      icon: "🫁",
      description:
        "A deep learning-based medical image classification system for automated pneumonia detection from chest X-ray images.",
      details:
        "Implemented and compared CNN, ResNet18, DenseNet, GoogleNet and VGG architectures and evaluated performance using precision, recall and confusion matrices.",
      tags: [
        "CNN",
        "ResNet18",
        "DenseNet",
        "GoogleNet",
        "VGG",
        "Deep Learning",
      ],
    },

    {
      title: "Stock Market Trend Prediction",
      category: "Machine Learning",
      icon: "📈",
      description:
        "A predictive machine learning model developed to analyze and forecast stock market trends.",
      details:
        "Used machine learning algorithms to analyze market patterns and support prediction of future stock market trends.",
      tags: [
        "Python",
        "Machine Learning",
        "Pandas",
        "Scikit-learn",
      ],
    },

    {
      title: "Face Emotions Detection System",
      category: "Computer Vision • Machine Learning",
      icon: "😊",
      description:
        "A real-time computer vision and machine learning system for detecting and classifying human facial emotions.",
      details:
        "Designed for potential applications including user experience analysis and behavioral insights.",
      tags: [
        "Python",
        "Computer Vision",
        "Machine Learning",
      ],
    }

    
  ]

  // ================= SKILLS =================

  const skillGroups = [
    {
      title: "Programming",
      icon: "💻",
      skills: ["Python", "Java", "C", "SQL"],
    },

    {
      title: "AI / Machine Learning",
      icon: "🧠",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Federated Learning",
        "Generative AI",
        "Data Science",
      ],
    },

    {
      title: "Computer Vision",
      icon: "👁️",
      skills: [
        "Object Detection",
        "Image Segmentation",
        "YOLOv8",
        "YOLOv11",
        "OpenCV",
        "Grad-CAM",
      ],
    },

    {
      title: "Frameworks & Libraries",
      icon: "⚙️",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Ultralytics",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
    },

    {
      title: "Web Technologies",
      icon: "🌐",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Flask",
        "Node.js",
      ],
    },

    {
      title: "Developer Tools",
      icon: "🛠️",
      skills: [
        "VS Code",
        "Jupyter Notebook",
        "Google Colab",
        "Git",
        "GitHub",
      ],
    },

    {
      title: "ML Workflow",
      icon: "🔬",
      skills: [
        "Data Annotation",
        "Data Preprocessing",
        "Model Training",
        "Model Evaluation",
        "Model Deployment",
        "ML Pipelines",
      ],
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="blob blob-one"></div>
      <div className="blob blob-two"></div>
      <div className="blob blob-three"></div>

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">

        <div className="glass max-w-6xl mx-auto rounded-full px-5 py-3 flex items-center justify-between">

          <a
            href="#home"
            className="font-bold tracking-wide text-lg text-[#49304f]"
          >
            Raksha<span className="text-[#b26bbd]">.</span>
          </a>

          {/* DESKTOP NAV */}

          <div className="hidden lg:flex items-center gap-6">

            <a href="#about" className="nav-link">
              About
            </a>

            <a href="#education" className="nav-link">
              Education
            </a>

            <a href="#skills" className="nav-link">
              Skills
            </a>

            <a href="#experience" className="nav-link">
              Experience
            </a>

            <a href="#projects" className="nav-link">
              Projects
            </a>

            <a href="#achievements" className="nav-link">
              Achievements
            </a>

            <a href="#contact" className="nav-link">
              Contact
            </a>

            <a
              href="/Raksha_Resume.pdf"
              download
              className="nav-link"
            >
              Resume ↓
            </a>

          </div>

          {/* RESUME BUTTON */}

          <a
            href="/Raksha_Resume.pdf"
            download
            className="hidden md:inline-flex pink-button !py-2 !px-5 text-sm"
          >
            Download Resume
          </a>

          {/* MOBILE MENU */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-xl text-[#684873]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE NAV */}

        {menuOpen && (
          <div className="glass max-w-6xl mx-auto mt-2 rounded-3xl p-6 flex flex-col gap-4 lg:hidden">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
            >
              Education
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>

            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#achievements"
              onClick={() => setMenuOpen(false)}
            >
              Achievements
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a
              href="/Raksha_Resume.pdf"
              download
              className="pink-button"
              onClick={() => setMenuOpen(false)}
            >
              Download Resume 📄
            </a>

          </div>
        )}

      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-28"
      >

        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-sm text-[#76577d] mb-7">

            <span>✦</span>

            <span>
              AI / ML Engineer • R&D • Computer Vision
            </span>

          </div>

          <p className="text-[#a56caf] font-semibold mb-4">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            Raksha<span className="gradient-text">.</span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-4xl font-semibold text-[#684873]">

            AI/ML Engineer
            <span className="gradient-text">
              {" "}building intelligent solutions.
            </span>

          </h2>

          <p className="max-w-2xl mx-auto mt-7 text-[#776c7d] text-lg leading-8">

            M.Tech student and AI/ML Engineer with interests in
            computer vision, deep learning, federated learning,
            Generative AI and end-to-end machine learning systems.

          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-9">

            <a
              href="#projects"
              className="pink-button"
            >
              Explore My Work ✨
            </a>

            <a
              href="/Raksha_Resume.pdf"
              download
              className="outline-button"
            >
              Download Resume 📄
            </a>

          </div>

          <div className="mt-20 text-sm text-[#a18ea5]">

            <div className="scroll-dot">
              ↓
            </div>

            Scroll to explore

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

<section id="about" className="section reveal">

  <div className="section-container">

    <p className="section-label">
      01 - About Me
    </p>

    <div className="mt-8">

      <h2 className="section-title">
        AI enthusiast.{" "}
        <span className="gradient-text">
          Creative builder.
        </span>
      </h2>

    </div>

    <div className="glass rounded-[2rem] p-8 md:p-10 lg:p-12 mt-10">

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">

        <p className="text-[#6e6373] leading-8">

          I'm Raksha, an AI/ML Engineer currently pursuing my
          M.Tech in Artificial Intelligence and Machine Learning.
          My journey in technology has been driven by curiosity
          about how intelligent systems work and how they can be
          applied to solve practical problems.

        </p>

        <p className="text-[#6e6373] leading-8">

          I've worked across computer vision, deep learning,
          machine learning, federated learning, Generative AI,
          and full-stack development through academic projects,
          internships, and independent work. These experiences
          have taken me from working with datasets and
          experimenting with models to building complete
          applications around them.

        </p>

        <p className="text-[#6e6373] leading-8">

          I like being involved in the entire process rather than
          focusing only on the model - understanding the problem,
          preparing the data, experimenting with different
          approaches, evaluating results, and turning the solution
          into something usable.

        </p>

        <p className="text-[#6e6373] leading-8">

          Beyond technology, I enjoy creative work, learning new
          things, and taking on challenges that push me outside
          my comfort zone. I like the process of figuring things
          out, experimenting with ideas, and gradually turning them
          into something real.

        </p>

      </div>

    </div>

  </div>

</section>

      {/* ================= EDUCATION ================= */}

      <section id="education" className="section reveal">

        <div className="section-container">

          <p className="section-label">
            02 - Education
          </p>

          <h2 className="section-title">
            My academic journey
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {/* MTECH */}

            <div className="glass rounded-[2rem] p-7">

              <span className="text-3xl">
                🎓
              </span>

              <p className="text-sm text-[#a56caf] mt-5">
                2025 - Present
              </p>

              <h3 className="text-xl font-bold mt-2">
                Master of Technology in AIML
              </h3>

              <p className="text-[#766a7d] mt-2">
                The Oxford College of Engineering, Bangalore
              </p>

              <span className="inline-block bg-[#f4e6f7] px-4 py-2 rounded-full text-sm text-[#795382] mt-5">
                SGPA 9.2
              </span>

            </div>

            {/* BE */}

            <div className="glass rounded-[2rem] p-7">

              <span className="text-3xl">
                🏅
              </span>

              <p className="text-sm text-[#a56caf] mt-5">
                2021 - 2025
              </p>

              <h3 className="text-xl font-bold mt-2">
                Bachelor of Engineering in AIML
              </h3>

              <p className="text-[#766a7d] mt-2">
                Government Engineering College, Challakere
              </p>

              <div className="flex gap-3 mt-5 flex-wrap">

                <span className="bg-[#f4e6f7] px-4 py-2 rounded-full text-sm text-[#795382]">
                  CGPA 9.31
                </span>

                <span className="bg-[#f4e6f7] px-4 py-2 rounded-full text-sm text-[#795382]">
                  Gold Medalist
                </span>

              </div>

            </div>

            {/* PUC */}

            <div className="glass rounded-[2rem] p-7">

              <span className="text-3xl">
                📚
              </span>

              <h3 className="text-xl font-bold mt-5">
                PUC - PCMB
              </h3>

              <p className="text-[#766a7d] mt-2">
                Sri Vasavi PU College, Challakere
              </p>

              <p className="text-[#9b67ae] font-semibold mt-4">
                99.83%
              </p>

            </div>

            {/* SSLC */}

            <div className="glass rounded-[2rem] p-7">

              <span className="text-3xl">
                📖
              </span>

              <h3 className="text-xl font-bold mt-5">
                SSLC
              </h3>

              <p className="text-[#766a7d] mt-2">
                Warriors' English School, Challakere
              </p>

              <p className="text-[#9b67ae] font-semibold mt-4">
                97.28%
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section reveal">

        <div className="section-container">

          <p className="section-label">
            03 - Skills
          </p>

          <h2 className="section-title">
            My technical toolkit
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {skillGroups.map((group) => (

              <div
                key={group.title}
                className="glass rounded-[2rem] p-7"
              >

                <div className="flex items-center gap-3">

                  <span className="text-3xl">
                    {group.icon}
                  </span>

                  <h3 className="text-xl font-bold">
                    {group.title}
                  </h3>

                </div>

                <div className="flex flex-wrap gap-2 mt-6">

                  {group.skills.map((skill) => (

                    <span
                      key={skill}
                      className="text-sm px-4 py-2 rounded-full bg-white/70 border border-[#ead9ed] text-[#68546d]"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section reveal">

        <div className="section-container">

          <p className="section-label">
            04 - Experience
          </p>

          <h2 className="section-title">
            My experience
          </h2>

          <div className="mt-12 space-y-6">

            {/* PSYC */}

            <div className="glass rounded-[2rem] p-8">

              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div>

                  <p className="text-[#a56caf] text-sm font-semibold">
                    Oct 2025 - Present
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    AI Intern - R&D
                  </h3>

                  <p className="text-[#766a7d] mt-1">
                    PSYC Aerospace and Defence Industries Pvt. Ltd. · Bengaluru
                  </p>

                </div>

                <span className="text-4xl">
                  🚀
                </span>

              </div>

              <ul className="mt-6 space-y-3 text-[#766a7d] leading-7 list-disc list-inside">

                <li>
                  Contributed to R&D of AI/ML solutions for aerospace
                  and defence applications.
                </li>

                <li>
                  Worked on computer vision-based detection and
                  segmentation of aerial platforms including drones
                  and aircraft.
                </li>

                <li>
                  Trained and tested YOLOv8 and YOLOv11 models using
                  annotated aerial datasets.
                </li>

                <li>
                  Worked across data annotation, preprocessing,
                  model training, validation, testing and performance
                  evaluation.
                </li>

                <li>
                  Developed end-to-end ML workflow pipelines and
                  deployed trained computer vision models into
                  drone-based systems.
                </li>

              </ul>

              <div className="flex flex-wrap gap-2 mt-6">

                {[
                  "YOLOv8",
                  "YOLOv11",
                  "Computer Vision",
                  "Object Detection",
                  "Image Segmentation",
                  "Data Annotation",
                  "Model Training",
                  "Model Deployment",
                ].map((tag) => (

                  <span
                    key={tag}
                    className="text-xs px-3 py-2 rounded-full bg-[#f5eaf7] text-[#795382]"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

            {/* ROOMAN */}

            <div className="glass rounded-[2rem] p-8">

              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div>

                  <p className="text-[#a56caf] text-sm font-semibold">
                    Sep 2024 - Mar 2025
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    AI/ML Engineer Intern
                  </h3>

                  <p className="text-[#766a7d] mt-1">
                    Rooman Technologies · Bengaluru
                  </p>

                </div>

                <span className="text-4xl">
                  🤖
                </span>

              </div>

              <ul className="mt-6 space-y-3 text-[#766a7d] leading-7 list-disc list-inside">

                <li>
                  Worked on Machine Learning, Prompt Engineering,
                  Data Analysis, GitHub and Agile Methodologies.
                </li>

                <li>
                  Explored approaches for visualizing data analysis
                  and machine learning predictions.
                </li>

              </ul>

            </div>

            {/* CONTRIVER JAVA */}

            <div className="glass rounded-[2rem] p-8">

              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div>

                  <p className="text-[#a56caf] text-sm font-semibold">
                    Oct 2023
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    Java Programming Intern
                  </h3>

                  <p className="text-[#766a7d] mt-1">
                    Contriver · Bengaluru
                  </p>

                </div>

                <span className="text-4xl">
                  ☕
                </span>

              </div>

              <ul className="mt-6 space-y-3 text-[#766a7d] leading-7 list-disc list-inside">

                <li>
                  Awarded Excellent Intern for exceptional performance
                  and contribution during the Java Programming internship.
                </li>

                <li>
                  Developed an Online Charity Management System in Java
                  with charity registration, donation processing and
                  financial tracking.
                </li>

              </ul>

            </div>

            {/* CONTRIVER PYTHON */}

            <div className="glass rounded-[2rem] p-8">

              <div className="flex flex-col md:flex-row md:justify-between gap-4">

                <div>

                  <p className="text-[#a56caf] text-sm font-semibold">
                    Oct 2022
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    Python Programming Intern
                  </h3>

                  <p className="text-[#766a7d] mt-1">
                    Contriver · Mysuru
                  </p>

                </div>

                <span className="text-4xl">
                  🐍
                </span>

              </div>

              <ul className="mt-6 space-y-3 text-[#766a7d] leading-7 list-disc list-inside">

                <li>
                  Awarded Excellent Intern for exceptional performance
                  and contribution during the Python Programming internship.
                </li>

                <li>
                  Created a Hangman game using random word selection,
                  letter guessing and tracking of correct and incorrect
                  guesses.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section reveal">

        <div className="section-container">

          <p className="section-label">
            05 - Projects
          </p>

          <h2 className="section-title">
            Things I've built
          </h2>

          <p className="mt-5 text-[#766a7d] max-w-2xl leading-7">

            From machine learning models and computer vision systems
            to full-stack AI applications and simulations.

          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {projects.map((project) => (

              <div
                key={project.title}
                className="project-card glass rounded-[2rem] p-7"
              >

                <span className="text-4xl">
                  {project.icon}
                </span>

                <p className="text-xs uppercase tracking-wider text-[#a56caf] font-bold mt-5">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold mt-2 text-[#3d2d43]">
                  {project.title}
                </h3>

                <p className="text-[#766a7d] leading-7 mt-5">
                  {project.description}
                </p>

                <p className="text-[#857688] text-sm leading-6 mt-4">
                  {project.details}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="text-xs px-3 py-2 rounded-full bg-[#f5eaf7] text-[#795382]"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section id="achievements" className="section reveal">

        <div className="section-container">

          <p className="section-label">
            06 - Achievements
          </p>

          <h2 className="section-title">
            Things I'm proud of ✨
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {/* GOLD MEDAL */}

            <div className="glass rounded-[2rem] p-8">

              <span className="text-4xl">
                🏆
              </span>

              <h3 className="text-xl font-bold mt-5">
                Engineering Gold Medalist
              </h3>

              <p className="text-[#766a7d] mt-3 leading-7">

                Graduated with a CGPA of 9.31 and received the
                Gold Medal during B.E. in AIML.

              </p>

            </div>

            {/* HACK4SUSTAINABILITY */}

            <div className="glass rounded-[2rem] p-8">

              <span className="text-4xl">
                💡
              </span>

              <h3 className="text-xl font-bold mt-5">
                Hack4Sustainability
              </h3>

              <p className="text-[#766a7d] mt-3 leading-7">

                Led a team during a 30-hour hackathon focused on
                sustainability and waste management.

              </p>

              <p className="text-[#766a7d] mt-3 leading-7">

                Developed a Waste-to-Energy Conversion prototype
                and Java-based mobile application for waste collection,
                management and reward allocation.

              </p>

            </div>

            {/* AMRIT SAROVAR */}

            <div className="glass rounded-[2rem] p-8">

              <span className="text-4xl">
                🌊
              </span>

              <h3 className="text-xl font-bold mt-5">
                Mission Amrit Sarovar
              </h3>

              <p className="text-[#766a7d] mt-3 leading-7">

                Participated in the Jal Dharohar Sanrakshan internship
                organized by AICTE and conducted research on Chitradurga
                Fort and rejuvenation and conservation of water bodies.

              </p>

            </div>

            {/* EXCELLENT INTERN */}

            <div className="glass rounded-[2rem] p-8">

              <span className="text-4xl">
                ⭐
              </span>

              <h3 className="text-xl font-bold mt-5">
                Excellent Intern Awards
              </h3>

              <p className="text-[#766a7d] mt-3 leading-7">

                Recognized as an Excellent Intern during both
                Java Programming and Python Programming internships
                at Contriver.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= EXTRA WORK ================= */}

      <section id="extra" className="section reveal">

        <div className="section-container">

          <p className="section-label">
            07 - Beyond Technology
          </p>

          <h2 className="section-title">
            A little more about me
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {/* CREATIVE */}

            <div className="glass rounded-[2rem] p-8">

              <span className="text-4xl">
                🎨
              </span>

              <h3 className="text-xl font-bold mt-5">
                Creative Interests
              </h3>

              <div className="flex flex-wrap gap-2 mt-5">

                {[
                  "Singing",
                  "Dancing",
                  "Drawing",
                  "Painting",
                  "Photography",
                  "Chess",
                  "Digital Art",
                ].map((item) => (

                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#f5eaf7] text-[#795382] text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

            {/* LANGUAGES */}

            <div className="glass rounded-[2rem] p-8">

              <span className="text-4xl">
                🌍
              </span>

              <h3 className="text-xl font-bold mt-5">
                Languages
              </h3>

              <div className="flex flex-wrap gap-3 mt-5">

                <span className="px-5 py-3 rounded-full bg-white/70 border border-[#ead9ed] text-[#68546d]">
                  Kannada
                </span>

                <span className="px-5 py-3 rounded-full bg-white/70 border border-[#ead9ed] text-[#68546d]">
                  English
                </span>

                <span className="px-5 py-3 rounded-full bg-white/70 border border-[#ead9ed] text-[#68546d]">
                  Hindi
                </span>

              </div>

            </div>

            {/* VOLUNTEERING */}

            <div className="glass rounded-[2rem] p-8">

              <span className="text-4xl">
                🤝
              </span>

              <h3 className="text-xl font-bold mt-5">
                Community & Leadership
              </h3>

              <p className="text-[#766a7d] leading-7 mt-4">

                Experience with community service, volunteer work,
                student organizations and leadership activities.

              </p>

            </div>

            {/* PERSONAL */}

            <div className="glass rounded-[2rem] p-8">

              <span className="text-4xl">
                🌸
              </span>

              <h3 className="text-xl font-bold mt-5">
                Outside the Screen
              </h3>

              <p className="text-[#766a7d] leading-7 mt-4">

                I enjoy combining technology with creativity and
                exploring different ways to learn, build and express ideas.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= RESUME ================= */}

      <section id="resume" className="section reveal">

        <div className="section-container">

          <div className="glass rounded-[3rem] p-10 md:p-16 text-center">

            <p className="section-label">
              08 - Resume
            </p>

            <h2 className="section-title mt-5">
              Want the full story?
            </h2>

            <p className="max-w-xl mx-auto mt-6 text-[#766a7d] leading-7">

              Download my latest resume for a complete overview
              of my education, experience, projects and technical skills.

            </p>

            <div className="flex justify-center mt-8">

              <a
                href="/Raksha_Resume.pdf"
                download
                className="pink-button"
              >
                Download Resume 📄
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section reveal">

        <div className="section-container">

          <div className="glass rounded-[3rem] p-10 md:p-16 text-center">

            <p className="section-label">
              09 - Contact
            </p>

            <h2 className="section-title mt-5">

              Let's create something
              <span className="gradient-text">
                {" "}beautiful.
              </span>

            </h2>

            <p className="max-w-xl mx-auto mt-6 text-[#766a7d] leading-7">

              Whether it's an AI project, research collaboration,
              internship opportunity or simply a conversation about
              technology, I'd love to hear from you.

            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-9">

              <a
                href="mailto:rakshahema2003@gmail.com"
                className="pink-button"
              >
                Email Me 💌
              </a>

              <a
                href="https://github.com/Raksha152003"
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/raksha-m-968904228"
                target="_blank"
                rel="noreferrer"
                className="outline-button"
              >
                LinkedIn ↗
              </a>

              <a
                 href="https://www.instagram.com/raksha_mh/"
                  target="_blank"
                  rel="noreferrer"
                  className="outline-button"
              >
                Instagram ↗
              </a>


            </div>

          </div>

          <footer className="text-center text-sm text-[#9c8c9f] mt-12">

            Made with ♡ by Raksha · © 2026

          </footer>

        </div>

      </section>

    </div>
  )
}

export default App