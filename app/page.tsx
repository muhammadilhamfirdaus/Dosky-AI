"use client";

import { useState, useEffect } from "react";
import HeroScene from "./components/HeroScene";

type Language = "en" | "id";

// Ganti nomor ini dengan nomor WhatsApp aktif kamu
const WA_LINK = "https://wa.me/6281234567890?text=Halo%20Dosky%20/%20AI,%20saya%20tertarik%20untuk%20menjadwalkan%20sesi%20strategi%20AI%20untuk%20perusahaan%20saya.";

const content = {
  en: {
    nav: ["Approach", "Products", "Services", "Work", "Partners"],
    headerCta: "Start Your Transformation",
    eyebrow: "YOUR ELITE AI TRANSFORMATION PARTNER",
    heroTitle: ["Scale faster.", "Operate smarter.", "Dominate with AI."],
    heroDescription:
      "Stop struggling with outdated workflows. We transform your operations with intelligent automation and tailored AI systems, giving your business an unfair competitive advantage.",
    heroCta: "Claim Your Free AI Strategy Call",
    heroNote: ["ROI-DRIVEN", "HYPER-AUTOMATION", "ENTERPRISE AI"],

    clientsLabel: "TRUSTED BY VISIONARY BRANDS & INDUSTRY LEADERS",

    capabilities: [
      {
        number: "01",
        title: "AI Strategy & ROI Mapping",
        description:
          "We don't just build tech; we build business value. We map out high-impact AI opportunities, assess technical readiness, and deliver a clear roadmap guaranteed to boost your bottom line.",
      },
      {
        number: "02",
        title: "Hyper-Automated Operations",
        description:
          "Shatter operational bottlenecks. We seamlessly integrate your fragmented tools and automate repetitive tasks so your team can focus entirely on high-value, strategic work.",
      },
      {
        number: "03",
        title: "Custom AI Integration",
        description:
          "Deploy enterprise-grade AI tailored to your exact manufacturing or operational workflows. Built for scale, security, and measurable performance.",
      },
    ],

    approachLabel: "THE ROI-FIRST FRAMEWORK",
    approachTitle: ["Zero fluff.", "Pure business impact."],
    approachDescription:
      "We ignore vanity AI metrics and fleeting trends. Our focus is surgically identifying your operational inefficiencies and deploying AI solutions that cut costs, save time, and multiply revenue.",
    approachCta: "See our proven methodology",

    productsLabel: "OUR PROPRIETARY SOLUTIONS",
    productsTitle: "Enterprise AI, ready to deploy.",
    productsIntro:
      "Accelerate your transformation with our pre-built, highly customizable AI modules designed for specific industry challenges.",
    products: [
      {
        name: "OmniAgent Enterprise",
        tag: "AI AGENT",
        description: "Autonomous AI agents that seamlessly integrate with your ERP and CRM. They handle customer inquiries, process invoices, and manage internal knowledge retrieval without human intervention.",
        features: ["Custom LLM Training", "Autonomous Actions", "Multi-Platform Integration"]
      },
      {
        name: "QuantTrade Algo AI",
        tag: "FINANCE & TRADING",
        description: "Institutional-grade algorithmic trading system. Analyzes market sentiment and technical indicators for high-frequency execution across forex, gold (XAU/USD), and commodities.",
        features: ["Predictive Market Models", "Automated Risk Management", "High-Speed Execution"]
      },
      {
        name: "Nexus MES & OEE",
        tag: "MANUFACTURING",
        description: "Intelligent Manufacturing Execution System. Provides real-time production tracking, predictive machine maintenance, and automated Overall Equipment Effectiveness (OEE) calculation.",
        features: ["IoT Sensor Integration", "Downtime Prediction", "Real-time OEE Dashboard"]
      },
      {
        name: "AutoBotics Core",
        tag: "ROBOTIC AUTONOMOUS",
        description: "Advanced computer vision and spatial awareness software for Autonomous Guided Vehicles (AGVs) and robotic assembly arms in warehouses and factory floors.",
        features: ["3D Spatial Mapping", "Dynamic Obstacle Avoidance", "Fleet Synchronization"]
      },
      {
        name: "CityBrain IoT",
        tag: "SMART CITY",
        description: "Centralized AI hub for modern urban management. Optimizes traffic light grids, monitors public safety via CCTV analytics, and manages city-wide energy consumption in real-time.",
        features: ["Smart CCTV Analytics", "Grid Energy Efficiency", "Big Data Integration"]
      }
    ],

    servicesLabel: "OUR EXPERTISE",
    servicesTitle: "Turn AI potential into market dominance.",
    servicesIntro:
      "We architect end-to-end solutions that solve your most expensive problems. From blueprint to deployment, we ensure your AI systems deliver.",
    services: [
      {
        number: "01",
        title: "Enterprise AI Consulting",
        description: "Stop guessing with AI. We analyze your infrastructure and deliver a bulletproof strategy to adopt AI safely and profitably.",
        label: "STRATEGY",
      },
      {
        number: "02",
        title: "Advanced Workflow Automation",
        description: "Eradicate manual data entry. We build autonomous pipelines that connect your ERP, CRM, and internal apps to run on autopilot.",
        label: "PRODUCTIVITY",
      },
      {
        number: "03",
        title: "Autonomous Agents & LLMs",
        description: "Deploy smart agents capable of handling 80% of your customer support, internal document retrieval, and complex data analysis instantly.",
        label: "INTELLIGENT SYSTEMS",
      },
      {
        number: "04",
        title: "Full-Stack AI Implementation",
        description: "Seamlessly embed machine learning models and generative AI into your existing tech stack with zero downtime and strict access controls.",
        label: "IMPLEMENTATION",
      },
    ],

    showcaseLabel: "PROVEN RESULTS",
    showcaseTitle: "Stop burning cash. Start scaling ROI.",
    showcaseIntro: "We don't sell theories. We eliminate the most brutal operational inefficiencies and turn them into instantly measurable financial gains.",
    showcases: [
      {
        client: "PT Citra Nugerah Karya",
        industry: "Manufacturing",
        title: "Predictive Maintenance & OEE Dashboard",
        description: "Deployed a custom Machine Learning MES to predict equipment failures before they occur. Completely eradicated manual inventory logs and supercharged production planning accuracy.",
        metric: "+35%",
        metricLabel: "Boost in Production Output"
      },
      {
        client: "Bank Mandiri",
        industry: "Finance",
        title: "Autonomous Credit Document Scoring",
        description: "Engineered a military-grade, on-premise LLM to ingest, verify, and score unstructured credit applications autonomously. Eliminated human processing delays while ensuring strict data privacy.",
        metric: "80%",
        metricLabel: "Reduction in Processing Time"
      },
      {
        client: "Toyota",
        industry: "Supply Chain",
        title: "AI-Driven Dynamic Logistics Routing",
        description: "Integrated an intelligent routing algorithm into existing logistics frameworks. Slashed delivery delays, optimized fuel consumption, and ensured just-in-time component arrival across regional assembly plants.",
        metric: "-40%",
        metricLabel: "Cut in Logistics Overhead Costs"
      },
      {
        client: "AWS",
        industry: "Cloud Infrastructure",
        title: "Predictive Server Load Balancing",
        description: "Built an autonomous load-balancing agent that anticipates aggressive traffic spikes and reallocates cloud resources in milliseconds, guaranteeing absolute stability during peak operational loads.",
        metric: "99.99%",
        metricLabel: "Uptime Guaranteed"
      }
    ],

    processLabel: "OUR DEPLOYMENT BLUEPRINT",
    processTitle: ["Engineered for speed.", "Built for scale."],
    processIntro:
      "A battle-tested framework to take your business from outdated processes to an AI-powered powerhouse in weeks, not years.",
    process: [
      {
        number: "01",
        title: "Audit & Discover",
        description: "Deep-dive into your operational bottlenecks to uncover high-ROI automation targets.",
      },
      {
        number: "02",
        title: "Architect & Design",
        description: "Blueprint the system architecture, select the optimal tech stack, and define success metrics.",
      },
      {
        number: "03",
        title: "Deploy & Integrate",
        description: "Rapid development and seamless integration of AI solutions without disrupting your current operations.",
      },
      {
        number: "04",
        title: "Optimize & Scale",
        description: "Continuous monitoring, performance tuning, and scaling the AI capabilities across new departments.",
      },
    ],

    closingLabel: "OUTPACE YOUR COMPETITION",
    closingTitle: ["Ready to transform", "your operations?"],
    closingDescription:
      "Don't let your competitors leverage AI before you do. Tell us your biggest operational headache, and we'll show you exactly how AI can solve it.",
    closingCta: "Book Your Strategy Session Now",

    footerDescription: "Elite AI consulting, automation, and enterprise integration for forward-thinking brands.",
    footerCta: "Start a conversation",
    copyright: "All rights reserved.",
  },

  id: {
    nav: ["Pendekatan", "Produk", "Layanan", "Karya", "Klien"],
    headerCta: "Mulai Transformasi Anda",
    eyebrow: "MITRA ELIT TRANSFORMASI AI BISNIS ANDA",
    heroTitle: ["Skala lebih cepat.", "Operasi lebih cerdas.", "Dominasi dengan AI."],
    heroDescription:
      "Tinggalkan proses manual yang lambat. Kami merevolusi operasional Anda melalui otomasi cerdas dan sistem AI khusus, memberikan bisnis Anda keunggulan kompetitif yang tak tertandingi.",
    heroCta: "Klaim Sesi Strategi AI Gratis Anda",
    heroNote: ["BERBASIS ROI", "HIPER-OTOMASI", "AI ENTERPRISE"],

    clientsLabel: "DIPERCAYA OLEH PEMIMPIN INDUSTRI GLOBAL & LOKAL",

    capabilities: [
      {
        number: "01",
        title: "Strategi AI & Pemetaan ROI",
        description:
          "Kami tidak sekadar membuat teknologi; kami menciptakan nilai bisnis. Kami memetakan peluang AI berdampak tinggi dan memberikan roadmap yang dijamin akan meningkatkan profitabilitas Anda.",
      },
      {
        number: "02",
        title: "Operasional Hiper-Otomasi",
        description:
          "Hancurkan hambatan operasional. Kami mengintegrasikan sistem yang terpisah dan mengotomatisasi tugas berulang agar tim Anda dapat fokus 100% pada pekerjaan strategis.",
      },
      {
        number: "03",
        title: "Integrasi AI Kustom",
        description:
          "Terapkan sistem AI kelas enterprise yang dirancang khusus untuk alur kerja manufaktur atau operasional Anda. Dibangun untuk skalabilitas, keamanan, dan hasil yang terukur.",
      },
    ],

    approachLabel: "FRAMEWORK BERBASIS HASIL",
    approachTitle: ["Tanpa basa-basi.", "Fokus pada dampak bisnis."],
    approachDescription:
      "Kami mengabaikan tren AI yang hanya sekadar *gimmick*. Fokus kami adalah mengidentifikasi inefisiensi operasional Anda dan menerapkan solusi AI yang memangkas biaya, menghemat waktu, dan melipatgandakan pendapatan.",
    approachCta: "Lihat metodologi teruji kami",

    productsLabel: "SOLUSI EKSKLUSIF KAMI",
    productsTitle: "AI Enterprise, siap diimplementasikan.",
    productsIntro:
      "Percepat transformasi bisnis Anda dengan modul AI bawaan kami yang dapat disesuaikan dan dirancang khusus untuk tantangan spesifik industri Anda.",
    products: [
      {
        name: "OmniAgent Enterprise",
        tag: "AI AGENT",
        description: "Agen AI otonom yang terintegrasi langsung dengan ERP dan CRM Anda. Mereka menangani keluhan pelanggan, memproses invoice, dan mencari data internal tanpa intervensi manusia.",
        features: ["Pelatihan LLM Kustom", "Tindakan Otonom", "Integrasi Multi-Platform"]
      },
      {
        name: "QuantTrade Algo AI",
        tag: "KEUANGAN & TRADING",
        description: "Sistem trading algoritmik kelas institusi. Menganalisis sentimen pasar dan indikator teknikal untuk eksekusi frekuensi tinggi (HFT) pada forex, emas (XAU/USD), dan komoditas.",
        features: ["Model Prediktif Pasar", "Manajemen Risiko Otomatis", "Eksekusi Berkecepatan Tinggi"]
      },
      {
        name: "Nexus MES & OEE",
        tag: "MANUFAKTUR",
        description: "Sistem Eksekusi Manufaktur (*MES*) cerdas. Memberikan pelacakan produksi *real-time*, pemeliharaan prediktif mesin, dan perhitungan *Overall Equipment Effectiveness* (OEE) secara otomatis.",
        features: ["Integrasi Sensor IoT", "Prediksi Kerusakan Mesin", "Dashboard OEE Real-time"]
      },
      {
        name: "AutoBotics Core",
        tag: "ROBOTIC AUTONOMOUS",
        description: "Perangkat lunak *computer vision* dan navigasi spasial tingkat lanjut untuk *Autonomous Guided Vehicles* (AGV) dan lengan robot perakitan di lantai pabrik dan gudang.",
        features: ["Pemetaan Spasial 3D", "Penghindaran Rintangan Dinamis", "Sinkronisasi Armada"]
      },
      {
        name: "CityBrain IoT",
        tag: "SMART CITY",
        description: "Hub AI terpusat untuk manajemen kota modern. Mengoptimalkan lampu lalu lintas, memantau keamanan publik melalui analitik CCTV, dan mengelola konsumsi energi kota secara *real-time*.",
        features: ["Analitik CCTV Cerdas", "Efisiensi Energi Jaringan", "Integrasi Big Data"]
      }
    ],

    servicesLabel: "KEAHLIAN KAMI",
    servicesTitle: "Ubah potensi AI menjadi dominasi pasar.",
    servicesIntro:
      "Kami merancang solusi *end-to-end* yang menyelesaikan masalah bisnis paling krusial Anda. Dari perancangan hingga implementasi, kami memastikan sistem AI Anda memberikan hasil nyata.",
    services: [
      {
        number: "01",
        title: "Konsultasi AI Enterprise",
        description: "Berhenti meraba-raba soal AI. Kami menganalisis infrastruktur Anda dan memberikan strategi solid untuk mengadopsi AI secara aman dan menguntungkan.",
        label: "STRATEGI",
      },
      {
        number: "02",
        title: "Otomasi Alur Kerja Lanjutan",
        description: "Hapus entri data manual. Kami membangun *pipeline* otonom yang menghubungkan ERP, CRM, dan aplikasi internal Anda agar berjalan secara otomatis.",
        label: "PRODUKTIVITAS",
      },
      {
        number: "03",
        title: "Agent Otonom & LLM",
        description: "Terapkan agen cerdas yang mampu menangani 80% dukungan pelanggan, pencarian dokumen internal, dan analisis data kompleks secara instan.",
        label: "SISTEM CERDAS",
      },
      {
        number: "04",
        title: "Implementasi AI Full-Stack",
        description: "Sematkan model *machine learning* dan Generative AI ke dalam tumpukan teknologi Anda saat ini tanpa *downtime* dan dengan kontrol akses yang ketat.",
        label: "IMPLEMENTASI",
      },
    ],

    showcaseLabel: "HASIL YANG TERBUKTI",
    showcaseTitle: "Berhenti Membakar Uang. Mulai Hasilkan ROI.",
    showcaseIntro: "Kami tidak menjual teori. Kami mengeliminasi inefisiensi operasional paling brutal dan mengubahnya menjadi keuntungan finansial yang terukur secara instan.",
    showcases: [
      {
        client: "PT Citra Nugerah Karya",
        industry: "Manufaktur",
        title: "Pemeliharaan Prediktif & Dashboard OEE",
        description: "Menerapkan MES kustom berbasis *Machine Learning* untuk memprediksi kerusakan mesin sebelum terjadi. Secara total mengeliminasi pencatatan inventaris manual dan melipatgandakan akurasi perencanaan produksi.",
        metric: "+35%",
        metricLabel: "Lonjakan Output Produksi"
      },
      {
        client: "Bank Mandiri",
        industry: "Keuangan",
        title: "Otomasi Penilaian Dokumen Kredit",
        description: "Membangun LLM *on-premise* dengan standar keamanan militer untuk membaca, memverifikasi, dan menilai ribuan aplikasi kredit tak terstruktur. Menghapus antrean birokrasi manusia tanpa mengorbankan privasi data.",
        metric: "80%",
        metricLabel: "Pemangkasan Waktu Proses"
      },
      {
        client: "Toyota",
        industry: "Logistik & Rantai Pasok",
        title: "Otomasi Rute Logistik Dinamis",
        description: "Mengintegrasikan algoritma perutean cerdas ke dalam sistem logistik yang ada. Menghancurkan masalah keterlambatan pengiriman, mengoptimalkan bahan bakar, dan memastikan kedatangan komponen secara *just-in-time*.",
        metric: "-40%",
        metricLabel: "Pemotongan Biaya Operasional"
      },
      {
        client: "AWS",
        industry: "Infrastruktur Cloud",
        title: "Penyeimbangan Beban Server Cerdas",
        description: "Menciptakan agen prediktif otonom yang mampu mengantisipasi lonjakan lalu lintas ekstrem dan merealokasi sumber daya *cloud* dalam hitungan milidetik, menjamin stabilitas absolut.",
        metric: "99.99%",
        metricLabel: "Jaminan Uptime Tanpa Eror"
      }
    ],

    processLabel: "BLUEPRINT DEPLOYMENT KAMI",
    processTitle: ["Dirancang untuk kecepatan.", "Dibangun untuk skalabilitas."],
    processIntro:
      "Framework teruji untuk membawa bisnis Anda dari proses usang menjadi perusahaan bertenaga AI hanya dalam hitungan minggu, bukan tahun.",
    process: [
      {
        number: "01",
        title: "Audit & Penemuan",
        description: "Analisis mendalam terhadap hambatan operasional Anda untuk menemukan target otomasi dengan ROI tertinggi.",
      },
      {
        number: "02",
        title: "Arsitektur & Desain",
        description: "Merancang arsitektur sistem, memilih teknologi yang optimal, dan menetapkan metrik keberhasilan yang jelas.",
      },
      {
        number: "03",
        title: "Implementasi & Integrasi",
        description: "Pengembangan cepat dan integrasi sistem AI tanpa mengganggu operasional bisnis Anda yang sedang berjalan.",
      },
      {
        number: "04",
        title: "Optimasi & Skalabilitas",
        description: "Pemantauan berkelanjutan, peningkatan performa, dan penskalaan kemampuan AI ke departemen baru.",
      },
    ],

    closingLabel: "TINGGALKAN KOMPETITOR ANDA",
    closingTitle: ["Siap untuk mentransformasi", "operasional Anda?"],
    closingDescription:
      "Jangan biarkan kompetitor Anda memanfaatkan AI lebih dulu. Beritahu kami masalah operasional terbesar Anda, dan kami akan tunjukkan bagaimana AI bisa menyelesaikannya.",
    closingCta: "Jadwalkan Sesi Strategi Anda Sekarang",

    footerDescription: "Konsultasi AI elit, otomasi, dan integrasi enterprise untuk *brand* yang berpikir ke depan.",
    footerCta: "Mulai percakapan",
    copyright: "Hak cipta dilindungi.",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  
  // SOLUSI ANTI ERROR VERCEL: Gunakan state ini agar tahun berjalan otomatis
  // tapi tidak menyebabkan bentrok antara Server Render (Vercel) dan Client Render
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = content[language];

  return (
    <main id="top" className="site-shell bg-white text-black">
      {/* Header */}
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Dosky / AI home">
          Dosky<span className="wordmark-slash"> / AI</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">{t.nav[0]}</a>
          <a href="#products">{t.nav[1]}</a>
          <a href="#services">{t.nav[2]}</a>
          <a href="#work">{t.nav[3]}</a>
          <a href="#clients">{t.nav[4]}</a>
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center border border-black/20 p-1"
            aria-label="Pilih bahasa / Choose language"
          >
            <button
              type="button"
              lang="en"
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-[10px] transition-colors ${
                language === "en"
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              lang="id"
              aria-pressed={language === "id"}
              onClick={() => setLanguage("id")}
              className={`px-2 py-1 text-[10px] transition-colors ${
                language === "id"
                  ? "bg-black text-white"
                  : "text-black hover:bg-black/5"
              }`}
            >
              ID
            </button>
          </div>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="header-cta">
            {t.headerCta} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-square" aria-hidden="true" />
            {t.eyebrow}
          </p>

          <h1 id="hero-title">
            {t.heroTitle[0]}
            <br />
            {t.heroTitle[1]}
            <br />
            {t.heroTitle[2].replace(".", "")}
            <span className="title-period">.</span>
          </h1>

          <p className="hero-description">{t.heroDescription}</p>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-link hover:opacity-70 transition-opacity">
            {t.heroCta} <span aria-hidden="true">↗</span>
          </a>

          <p className="hero-note">
            {t.heroNote[0]} <span>·</span> {t.heroNote[1]} <span>·</span>{" "}
            {t.heroNote[2]}
          </p>
        </div>

        <div className="hero-art">
          <HeroScene />
        </div>
      </section>

      {/* Clients / Partners Section */}
      <section id="clients" className="w-full py-20 md:py-28 bg-[#f8f7f5] border-y border-black/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
          
          <p className="text-black/50 text-xs tracking-widest uppercase text-center mb-10 md:mb-14 w-full">
            {t.clientsLabel}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100 w-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-7 md:h-8 w-auto object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" alt="Toyota" className="h-7 md:h-9 w-auto object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-6 md:h-8 w-auto object-contain mt-1" />
            <div className="flex items-center gap-2 font-bold text-lg md:text-xl tracking-tighter text-black">
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center text-[10px] rounded-sm">CNK</div>
              CITRA NUGERAH KARYA
            </div>
            <div className="font-black text-2xl md:text-3xl tracking-widest text-black">ANTAM</div>
            <img src="https://cdn.worldvectorlogo.com/logos/bank-mandiri.svg" alt="Bank Mandiri" className="h-5 md:h-8 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 md:py-32 px-6 border-b border-black/10" aria-label={t.nav[1]}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {t.capabilities.map((item) => (
            <article className="flex flex-col gap-4" key={item.number}>
              <span className="text-sm font-mono opacity-50">{item.number}</span>
              <h2 className="text-2xl font-medium tracking-tight">{item.title}</h2>
              <p className="opacity-80 leading-relaxed text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-24 md:py-32 px-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/2">
            <p className="text-[10px] tracking-widest uppercase mb-8 opacity-60">{t.approachLabel}</p>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tight">
              {t.approachTitle[0]}
              <br />
              {t.approachTitle[1]}
            </h2>
          </div>

          <div className="md:w-1/2 flex flex-col justify-end">
            <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-8">{t.approachDescription}</p>

            <a href="#services" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity">
              {t.approachCta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 md:py-32 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="md:w-1/2">
              <p className="text-[10px] tracking-widest uppercase mb-8 opacity-60">{t.productsLabel}</p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">{t.productsTitle}</h2>
            </div>
            <p className="md:w-1/3 text-sm opacity-80 leading-relaxed">{t.productsIntro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.products.map((product, idx) => (
              <article 
                key={idx} 
                className="border border-black/10 bg-white p-8 flex flex-col justify-between hover:border-black/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase border border-black/20 text-black/80 px-3 py-1 mb-6 inline-block">
                    {product.tag}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight mb-4 text-black">{product.name}</h3>
                  <p className="text-sm text-black/80 leading-relaxed mb-8">
                    {product.description}
                  </p>
                </div>
                <ul className="space-y-3 text-xs font-mono text-black/70">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black/60 rounded-full" /> {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 px-6 border-b border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <p className="text-[10px] tracking-widest uppercase mb-8 opacity-60">{t.servicesLabel}</p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight mb-6">{t.servicesTitle}</h2>
            <p className="opacity-80 leading-relaxed text-sm md:text-base">{t.servicesIntro}</p>
          </div>

          <div className="lg:w-2/3 flex flex-col">
            {t.services.map((service) => (
              <article className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 border-t border-black/10 group hover:bg-black/5 transition-colors px-4 -mx-4" key={service.number}>
                <span className="text-sm font-mono opacity-40 pt-1">{service.number}</span>
                <div className="md:w-1/3">
                  <p className="text-[10px] tracking-widest uppercase opacity-60 mb-2">{service.label}</p>
                  <h3 className="text-xl font-medium tracking-tight">{service.title}</h3>
                </div>
                <p className="md:w-1/2 opacity-80 text-sm leading-relaxed">{service.description}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:flex ml-auto items-center opacity-0 group-hover:opacity-100 transition-opacity text-xl hover:text-black/50" aria-label={`${service.title} — ${t.headerCta}`}>
                  ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase / Projects */}
      <section id="work" className="py-24 md:py-32 px-6 bg-[#f8f7f5] border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="md:w-1/2">
              <p className="text-[10px] tracking-widest uppercase mb-8 opacity-60">{t.showcaseLabel}</p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">{t.showcaseTitle}</h2>
            </div>
            <p className="md:w-1/3 text-sm md:text-base opacity-80 leading-relaxed">{t.showcaseIntro}</p>
          </div>

          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {t.showcases.map((showcase, idx) => (
              <article key={idx} className="flex flex-col md:flex-row border border-black/20 bg-white hover:shadow-2xl transition-shadow duration-500">
                <div className="md:w-2/3 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-black/20 flex flex-col justify-center">
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-6 opacity-60 text-blue-600">
                    {showcase.industry} — {showcase.client}
                  </p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-6">
                    {showcase.title}
                  </h3>
                  <p className="opacity-80 leading-relaxed text-sm md:text-base">
                    {showcase.description}
                  </p>
                </div>
                <div className="md:w-1/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center md:items-start bg-gray-50/50">
                  <p className="text-6xl md:text-7xl font-normal tracking-tighter mb-4 text-black">
                    {showcase.metric}
                  </p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-60 text-center md:text-left leading-relaxed">
                    {showcase.metricLabel}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 md:py-32 px-6 border-b border-black/10" aria-labelledby="process-title">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="md:w-1/2">
              <p className="text-[10px] tracking-widest uppercase mb-8 opacity-60">{t.processLabel}</p>
              <h2 id="process-title" className="text-4xl md:text-5xl font-medium tracking-tighter leading-tight">
                {t.processTitle[0]}
                <br />
                {t.processTitle[1]}
              </h2>
            </div>
            <p className="md:w-1/3 text-sm opacity-80 leading-relaxed">{t.processIntro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {t.process.map((step) => (
              <article className="flex flex-col gap-4 relative" key={step.number}>
                <div className="w-full h-px bg-black/10 absolute top-3 left-0 hidden lg:block -z-10" />
                <span className="bg-white inline-block w-fit pr-4 text-xs font-mono opacity-50">{step.number}</span>
                <h3 className="text-xl font-medium tracking-tight mt-4">{step.title}</h3>
                <p className="opacity-80 text-sm leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-[10px] tracking-widest uppercase mb-8 opacity-60">{t.closingLabel}</p>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none mb-8">
            {t.closingTitle[0]}
            <br />
            {t.closingTitle[1]}
          </h2>
          <p className="text-lg opacity-80 leading-relaxed mb-12 max-w-xl">
            {t.closingDescription}
          </p>
          
          <a 
            href={WA_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-black/80 hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3 cursor-pointer"
            style={{ color: "#ffffff" }}
          >
            {t.closingCta} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-6 border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <a href="#top" className="font-bold tracking-tighter text-xl" aria-label="Back to top">
              Dosky<span className="opacity-40 font-normal"> / AI</span>
            </a>
            <p className="text-xs opacity-60 max-w-xs">{t.footerDescription}</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-8 text-sm">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:opacity-60 transition-opacity"
            >
              {t.footerCta} ↗
            </a>
            <span className="opacity-40 font-mono text-xs">
              © {isMounted ? new Date().getFullYear() : 2026} Dosky · {t.copyright}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}