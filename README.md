# 👨‍💻 Bernardo Carvalho Portfolio

Personal portfolio built with **React**, **Vite**, and **Tailwind CSS** to showcase my background, professional experience, technical skills, and selected software projects.

🌐  **Live Demo:** https://portfolio-bernardocarvalho.vercel.app (not yet) 
---

## Features

- 🌍 Multilingual support — Portuguese, English, and Spanish (auto-detected from browser)
- 📱 Fully responsive interface
- 👨‍💻 About me and professional experience sections
- 🚀 Featured projects showcase
- 📄 Language-aware CV download — serves the correct PDF based on the active language
- 📧 Contact form powered by EmailJS
- 🔗 Social and professional links integration

---

## Projects

| Project | Stack | Demo |
| :------ | :---- | :--- |
| **Lumap** | React, TypeScript, Tailwind, Node.js, Nest.js, PostgreSQL, Docker | — |
| **Barber Flow** | PHP, Laravel, Blade, Tailwind, Livewire | [barberflowtecnol1.hospedagemdesites.ws](http://barberflowtecnol1.hospedagemdesites.ws/login) |
| **Drive Hub** | React, Tailwind, Spring Boot | — |
| **Sist. Moeda Estudantil** | React, Spring Boot, Tailwind, PostgreSQL, Docker | — |

---

##  Tech Stack

**Frontend:** React, Vite, Tailwind CSS v4, Typescript, JavaScript

**Libraries:** i18next, react-i18next, EmailJS, Lucide React, React Icons

**Deployment:** Vercel

---

## Getting Started

```bash
git clone https://github.com/bernardocdm/portfolio-profissional.git
cd portfolio-profissional
npm install
npm run dev
```

Other commands:

```bash
npm run build    # production build
npm run preview  # preview production build locally
npm run lint     # run ESLint
```

---

## Environment Variables

The contact form requires **EmailJS**. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## CV Files

Place the CV PDFs in the `public/` directory. The download button serves the file matching the active language:

```
public/CV-pt.pdf
public/CV-en.pdf
public/CV-es.pdf
```

---

## License

Available for study and inspiration. Feel free to explore the code and adapt ideas for your own portfolio.
