
"use client";
export default function Home(){
 return <div dangerouslySetInnerHTML={{__html: `<!DOCTYPE html>

<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>About Us | Naresh Samaj Kalyan Seva Samiti</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-primary-container": "#8aa4ff",
                        "on-secondary": "#ffffff",
                        "on-secondary-fixed": "#2e1500",
                        "on-surface": "#1c1b1b",
                        "surface-bright": "#fcf9f8",
                        "tertiary-fixed": "#b1f0ce",
                        "on-tertiary": "#ffffff",
                        "on-tertiary-container": "#78b596",
                        "surface-tint": "#3557bc",
                        "on-secondary-container": "#683700",
                        "secondary-fixed-dim": "#ffb77a",
                        "on-primary": "#ffffff",
                        "inverse-primary": "#b5c4ff",
                        "on-error": "#ffffff",
                        "surface-variant": "#e5e2e1",
                        "error-container": "#ffdad6",
                        "inverse-surface": "#313030",
                        "primary": "#002068",
                        "background": "#fcf9f8",
                        "error": "#ba1a1a",
                        "outline": "#747684",
                        "primary-container": "#003399",
                        "on-surface-variant": "#444653",
                        "on-primary-fixed": "#00164e",
                        "tertiary": "#002e1d",
                        "tertiary-container": "#00472f",
                        "inverse-on-surface": "#f3f0ef",
                        "primary-fixed": "#dce1ff",
                        "on-primary-fixed-variant": "#153ea3",
                        "surface-dim": "#dcd9d9",
                        "secondary-fixed": "#ffdcc2",
                        "secondary-container": "#fe9832",
                        "surface-container-highest": "#e5e2e1",
                        "on-tertiary-fixed-variant": "#0e5138",
                        "surface-container-lowest": "#ffffff",
                        "on-error-container": "#93000a",
                        "on-tertiary-fixed": "#002114",
                        "surface-container-low": "#f6f3f2",
                        "on-background": "#1c1b1b",
                        "secondary": "#8f4e00",
                        "outline-variant": "#c4c5d5",
                        "surface-container": "#f0eded",
                        "on-secondary-fixed-variant": "#6d3a00",
                        "tertiary-fixed-dim": "#95d4b3",
                        "surface": "#fcf9f8",
                        "surface-container-high": "#eae7e7",
                        "primary-fixed-dim": "#b5c4ff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "section-gap": "80px",
                        "stack-sm": "8px",
                        "gutter": "24px",
                        "stack-lg": "24px",
                        "container-max": "1280px",
                        "stack-md": "16px",
                        "margin-mobile": "16px"
                    },
                    "fontFamily": {
                        "headline-md": ["Plus Jakarta Sans"],
                        "headline-sm": ["Plus Jakarta Sans"],
                        "display-lg": ["Plus Jakarta Sans"],
                        "display-lg-mobile": ["Plus Jakarta Sans"],
                        "body-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "label-md": ["Inter"]
                    },
                    "fontSize": {
                        "headline-md": ["36px", {"lineHeight": "1.3", "fontWeight": "600"}],
                        "headline-sm": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                        "display-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .timeline-line::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #fe9832;
            transform: translateX(-50%);
        }
        @media (max-width: 768px) {
            .timeline-line::before {
                left: 20px;
            }
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md overflow-x-hidden">
<!-- TopNavBar -->
<nav class="bg-surface/90 dark:bg-surface-container-highest/90 backdrop-blur-md font-body-md text-label-md dock-full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm">
<div class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">
<div class="flex items-center gap-3">
<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
<img class="w-full h-full object-contain" data-alt="A professional high-resolution logo of Naresh Samaj Kalyan Seva Samiti featuring a sun rising over an open book with silhouettes of joyful children, rendered in deep navy blue and bright orange on a clean white circular background. The logo communicates education, service, and empowerment through its clean corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrYoklVMAQs0LufIEAPoZ8ZMmKMA5pKCFyTf08_2pSPMpGQH2TkROIwmlf8kIfvNBlgh_s0g_dplUYgp260fTeGJilhbQDlVkjveKvBiLwX9X3YpGEtXQo60PFhlH5kYyh5-eFzPPgBUQHGnqBdyBlx8FZTfmIt9r721RCxhoY5YfaBxHttLzBDOJJc0h5qH-3S-foEQiLkrT158PDocYUy4sUEfGjZgXiyV0Uf8ahPImF2yfbX6jKgN41PDUDw1LUbfbrhTFUFUcC"/>
</div>
<span class="font-headline-sm text-primary dark:text-primary-fixed font-bold tracking-tight">Naresh Samaj Kalyan Seva Samiti</span>
</div>
<!-- Desktop Links -->
<div class="hidden lg:flex items-center gap-8">
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">Home</a>
<a class="text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary py-1" href="#">About Us</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">Our Work</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">Success Stories</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">Annual Reports</a>
<a class="text-on-surface-variant dark:text-on-surface-variant hover:text-primary hover:bg-primary-container/10 transition-colors duration-200" href="#">Contact</a>
<button class="bg-secondary-container text-on-secondary-container px-6 py-2.5 rounded-full font-label-md font-bold scale-95 hover:scale-100 duration-100 transition-all">Donate Now</button>
</div>
<!-- Mobile Menu Toggle -->
<button class="lg:hidden p-2 text-primary">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
<main>
<!-- Hero: Who We Are -->
<section class="py-section-gap px-gutter max-w-container-max mx-auto">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
<div class="space-y-stack-md">
<p class="text-secondary font-label-md uppercase tracking-widest font-bold">WHO WE ARE</p>
<h1 class="font-display-lg text-display-lg text-primary leading-tight">A Movement Rooted in Compassion &amp; Purpose</h1>
<p class="text-body-lg text-on-surface-variant leading-relaxed">NGO Foundation was established in 2008 with a single resolve: that every person, regardless of where they are born, deserves access to education, health, and dignity.</p>
<p class="text-body-md text-on-surface-variant leading-relaxed">Over 17 years, we have grown from a small team of 5 volunteers in Delhi into a pan-India movement spanning 28 states, driven by 15,000+ dedicated volunteers and supported by hundreds of corporate partners.</p>
<div class="flex flex-wrap gap-stack-md pt-stack-md">
<button class="bg-primary text-white px-8 py-3 rounded-lg font-label-md hover:bg-primary-container transition-all">Download Brochure</button>
<button class="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            Our Impact Report <span class="material-symbols-outlined">trending_up</span>
</button>
</div>
</div>
<div class="relative">
<div class="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
<img class="w-full h-full object-cover" data-alt="A heart-warming and high-quality group photo of diverse young Indian volunteers wearing white NGO Foundation t-shirts, smiling warmly in a bright outdoor setting. The image uses soft, natural sunlight and a shallow depth of field to emphasize the human connection and community spirit, perfectly aligned with the NGO's corporate yet humanist branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHFqoFDLwApHs1JUbwxzXBlnd4G6KmjnlctJbLWvnUSK3c8pdxmxSvCK4Whdx_aajodDqc3wXWU890S7TOguMDNIp_zblMkNEsnHF1AgL8hhg2qLoNV02sGythGRzcfHllO88xLp9fS-cnz_xZ2ikCnTldw3FFijuL2xCjf_38mXscp69jhHvfqDj7n9LVziN587OeOYFK--xYIRj9sPwX7LqENMWdSVaZAjI87xWoP5rRL8nCtPXsI6VQpBBKPtChRiP_1XUX4CLg"/>
</div>
</div>
</div>
</section>
<!-- Vision & Mission -->
<section class="pb-section-gap px-gutter max-w-container-max mx-auto">
<div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
<div class="bg-tertiary-fixed/30 p-10 rounded-3xl border border-tertiary-fixed/50 hover:shadow-md transition-shadow">
<div class="w-12 h-12 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center mb-6">
<span class="material-symbols-outlined">visibility</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-tertiary mb-4">Our Vision</h3>
<p class="text-on-surface-variant">A world free from poverty, inequality, and preventable suffering — where every individual has the opportunity to thrive, contribute, and live with dignity.</p>
</div>
<div class="bg-secondary-fixed/30 p-10 rounded-3xl border border-secondary-fixed/50 hover:shadow-md transition-shadow">
<div class="w-12 h-12 bg-secondary text-on-secondary rounded-full flex items-center justify-center mb-6">
<span class="material-symbols-outlined">track_changes</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-secondary mb-4">Our Mission</h3>
<p class="text-on-surface-variant">To empower underserved communities through sustainable programs in education, healthcare, environment, and women empowerment — and to do so with transparency, accountability, and love.</p>
</div>
</div>
</section>
<!-- Founder's Message -->
<section class="bg-surface-container-low py-section-gap">
<div class="px-gutter max-w-container-max mx-auto text-center mb-12">
<p class="text-secondary font-label-md uppercase font-bold tracking-widest">FROM THE FOUNDER</p>
<h2 class="font-headline-md text-headline-md text-primary mt-2">A Message of Hope</h2>
</div>
<div class="px-gutter max-w-container-max mx-auto">
<div class="bg-white rounded-[40px] shadow-sm overflow-hidden flex flex-col md:flex-row border border-outline-variant/30">
<div class="md:w-1/3 relative h-80 md:h-auto">
<img class="w-full h-full object-cover" data-alt="A professional and graceful portrait of Dr. Sunita Rao, an Indian woman in a traditional saree, seated in a dignified office environment. She has a warm, compassionate expression that inspires trust. The lighting is soft and corporate, emphasizing her role as a leader and visionary in social welfare." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7YjYYUrAE2IIYB5cuwbZEs3TRgN1IbG_4Nq1gxVw5OGxwWQjVMUKNH8xp3Hr9jba2SxN7-Onx-sNZdSZCkpS1L89uAmF-RT06TZ88Y_OQFgAzmF6Lrhqt84ve2xt9su9xWtz1DgEmgWe_3CQ492faId1mXahWrT--xy5V1FD43hs2n11ufZVUQdCv5wbQItG9CgY-kryjKIbouTtpNHNeX52sRUmkJUBn1Yve3RZ3eV4SvpdVGOQIT1h6UfDDJz--EnZSWRgJGr_3"/>
<div class="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm p-6 text-white">
<h4 class="font-bold text-lg">Dr. Sunita Rao</h4>
<p class="text-sm opacity-80">Founder &amp; Executive Director</p>
</div>
</div>
<div class="md:w-2/3 p-12 flex flex-col justify-center relative">
<span class="material-symbols-outlined text-secondary-container text-6xl absolute top-8 left-8 opacity-20">format_quote</span>
<div class="relative z-10 italic text-on-surface-variant space-y-6">
<p class="text-xl font-medium leading-relaxed">"When I started NGO Foundation in 2008, I had only a vision and a handful of passionate friends. We had no office, no funding — just an unshakeable belief that one person's small act of kindness could ripple outward and change the world."</p>
<p class="text-body-md">Today, I am humbled to stand with millions of beneficiaries, thousands of volunteers, and hundreds of generous donors who have made this mission possible. Our journey is far from over — every child out of school, every preventable death, every woman denied opportunity calls us to do more.</p>
</div>
<div class="mt-8 flex items-center gap-4">
<div class="h-px w-12 bg-secondary"></div>
<span class="text-secondary font-bold">Dr. Sunita Rao</span>
</div>
</div>
</div>
</div>
</section>
<!-- Core Team -->
<section class="py-section-gap px-gutter max-w-container-max mx-auto">
<div class="text-center mb-16 max-w-2xl mx-auto">
<p class="text-secondary font-label-md uppercase font-bold tracking-widest">THE PEOPLE BEHIND THE MISSION</p>
<h2 class="font-headline-md text-headline-md text-primary mt-2">Our Core Team</h2>
<p class="text-on-surface-variant mt-4">A dedicated group of professionals, activists, and dreamers committed to serving communities every single day.</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
<!-- Team Member 1 -->
<div class="text-center group">
<div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary-fixed ring-4 ring-white shadow-md transition-transform group-hover:scale-105">
<img class="w-full h-full object-cover" data-alt="Corporate headshot of Arjun Mehta, a South Asian male in professional business attire, clean white background, confident and friendly expression, high-end photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQVZeDA1Shpt4Rqh6ALhA5Zfz2QWizolae1ojb_x3VGmyQA3JY6c2pR1gz_RMze8Gho4qEfFCpDb0h_S9Db5_cPQ3TxhEeSFw_7vL40W2TWxigmsAgfRbLDTMpwHCJSGhotpbgBb-8WSiYMQumxe8bt78zUwXGnt5FVn7GI5c09eSlY-pKPeApR8qw-2pR8Rp4XE1CaNAzmaZHlFrw5f7Tdoeox5lc3QDscrAD0ASaXbCqXsAQcSS0vuY5LLFPodvTMp_2bsdMAS7f"/>
</div>
<h5 class="font-bold text-on-surface">Arjun Mehta</h5>
<p class="text-xs text-on-surface-variant mb-3">Chief Operations Officer</p>
<div class="flex justify-center gap-2">
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="LinkedIn" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEuR7OPMXm7cdIzPxnMX-f2KML87n8uxMLe64cs1F-F4H0z2FFM0zkEBCzKFl56vhvSswwwz3QfMFlXexZLZs1Y6k17p0erqSBLUvv2POAOVUZe3x13ovdz4MAApXhI8pYw7VvXOpGTJ_eusHdR5885OGi-_MC7-MWGJxB2vepdhjl7J3MYWeyr6I3WY8tI7VScJqUMsn2n_rHdlDGoyx0gQHC0jjUH-mcAx12Opdpsz4PEG7XvP64u3D-177EKVrHeOF0wqfTg70l"/>
</button>
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="Twitter" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOpNlmKDZ5XO-mvteAhozDqBCTehYRmImm_vFg7J82F3z26gU7R6_epUma27InoLVS0aIDdUOFVfutuyJ6gi24QAoCrkb1NPnlMZyz5s3dG6WoC3DI5nad1n5l5pPkyGXfQRdzxpXnXi9fqYwIAeLvMFpvI48p16ZuEOorMEklAKuxaIIEl7-IxS5qDEMuNC2fHdkX2x8klPVqT32pVAQjEtk-NuETb8wnsSI5oYRiUGGNOHvrN8yXoA5lBp-a0QaAbtYHBUJpGefx"/>
</button>
</div>
</div>
<!-- Team Member 2 -->
<div class="text-center group">
<div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary-fixed ring-4 ring-white shadow-md transition-transform group-hover:scale-105">
<img class="w-full h-full object-cover" data-alt="Corporate headshot of Meera Pillai, a South Asian female in professional attire, elegant and approachable, soft studio lighting, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwpqz8G9NWDaKseLdSNR7fQGSaKnexMk-mBs8L6EkGxgCKXm44sr4qI_JhImX2EU-B4P2pCFHA4OqAnhzGL3SoW3VrlO8r4FUC50wNKCSQ4ResRTCKPs_GfV670HICRCqI2YsLaS3W4wIt_vzRZGKIuhxYvK7KnATUdS-RXUngJE9jMENn8JgxZPgtCn-GIjr2bml5DUjTE1AbUHHzLiDJCjbK3GPPBIeipaZlsIc3Ll6LL3URN3x6Qt617pQi8VeetrF2lyGFrfID"/>
</div>
<h5 class="font-bold text-on-surface">Meera Pillai</h5>
<p class="text-xs text-on-surface-variant mb-3">Head of Programs</p>
<div class="flex justify-center gap-2">
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="LinkedIn" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYR9h-4ky0iUyeGiMaXE0kcyOcMZRSWUZhQuDcRbnWxNcQTvO6THVCeX5mCo-YjZPO1yPXBQ8qO2GhYNMwDJx6yqcfGQPf5lOIxBE_mtiyiEBgE_tSmVXXOlirJ8hLd1g_EJyF_9wOz5NTy41t2ixaFJl9gjXA-NtTSSzfi0fYxnkIbKBcr-14rRYG-LouPTKQXT7H_2sK-aPWtZ6Gqut8FAnRtII_trJaF0aVRdvYijb1dep8NGfCUBNE5QSckCczFLWnwz4ZRbI8"/>
</button>
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="Twitter" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGbGXgyI-xXhIXD6qz2n0h7bSm7bMCX5ZdEsiHbga96on9WZve8WxZdpY43K1wmbaB6uO1xiwqUzRjlNA8vHzaJrloNOHZTv_Eq56ZJRHQgTgHb00SLEinhc3yF9kOIu2Wm6kTbY9XmR30zYXxzi1Dl7Ca8KWn0WGaUM0vmRxY04HQDKxGrdInx3hVfVICWroSezTNxByis660HHHymXKudbwX083maYvXlgVXCSdlswXrLCCMxrSoOmRTrvcrOlzFXCTccUBYGTXt"/>
</button>
</div>
</div>
<!-- Team Member 3 -->
<div class="text-center group">
<div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary-fixed ring-4 ring-white shadow-md transition-transform group-hover:scale-105">
<img class="w-full h-full object-cover" data-alt="Corporate headshot of Tanvir Sheikh, a South Asian male professional, sophisticated office background, friendly and reliable look, professional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOtGU4X-1R4QVRCI-zbNXSPwQLLPVqzi3JAduf-A2p4s72z5mh8DlN7fQEUoM24zaQonox5cO2HLQN385rqkK2oDK1b00pNwh1wuDWpJm9962MO5tZPmGc6Fmgo1srGaMqViLAiCd5heJkwRpBQNzv9K4XaSc4fk7LvzlrhFyHY96uBzbcuBBglBGSvEqNL3bNWKgaK-Vqx7z4uqx9SxKVqKGiK4gx1Hb9vim5GOduKtIdPWIpuVr4dLA4VsCyCsCre2UkEdsrz-iH"/>
</div>
<h5 class="font-bold text-on-surface">Tanvir Sheikh</h5>
<p class="text-xs text-on-surface-variant mb-3">Finance &amp; Compliance</p>
<div class="flex justify-center gap-2">
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="LinkedIn" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkmkCv-ewUzVHU6kbUJexhgXdw03N91-G-snZCNItS4lFT6sdL0Cx5P_yRF1Z6LSzMkSF0UTnGkktz-xoBK0oyfc8kHE4MmlmTZrpnTMfHTPpRWxVWgwJcNmmXm5AA0K3-oZMb2K1AyhjHZKJpVttZhidIDTujTA-XvIzz6RMoG-r_vEBm06iA0KPAX1zKpALs1SCK1TAarV8DTl_hEncerEhD7Wt248vsqSmA4PMaeuMEwN1rqCEYlQJe_HMXRkXD9UfHzJ5rmZzx"/>
</button>
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="Twitter" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBImmeiKEOVGvXqVIyTYviP57W2v7jUjmH__rgMzmq78bbtqhkmlko0J4TNL33ss2PtJ2u4VFTf_sBkSk-PuXlEl20x-cLsDn6QnW6VpXc_0fBj1LKgnmqUUTMpMLPmSWkaBvf2mKBwa6sjl1Sb_dUJOB4mM1FdCRZAoQidtwfg5SHz57y5Yse7m0Av6VH_QZFoyKRmX1ZsYqmlOO4fExSmE8a_G6JGDViFFOdBlFpBqwmA3tvNwGEC-vHnFtTItPQvP4fewv7E9gxH"/>
</button>
</div>
</div>
<!-- Team Member 4 -->
<div class="text-center group">
<div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary-fixed ring-4 ring-white shadow-md transition-transform group-hover:scale-105">
<img class="w-full h-full object-cover" data-alt="Corporate headshot of Ananya Bose, a South Asian female with a friendly smile, professional communications role appearance, bright modern setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVIYaZD275CDhrMW4h7j2INzEshl4aJvmF4-hAblEKCfnkI0rBo6MBEh7SwmlZkgo2yBqyuwrdr52VrPvulEh5JsaM_Yc0CHj105oGgRRWWTA_cOZVeXmtSwDwgV-cErOmBdufrSZegNalUMMIt6CQ5haq37BG401ChWMZVlmIFpvwt-yJNODzaFNLU-Ps_rSEnvTEWCltgICyFhVmA9J4x9tosS7XqPQxjW5Qp2DcIaFCvncEdnbx5BFEKzApX7zikd2ZsYjhDgHB"/>
</div>
<h5 class="font-bold text-on-surface">Ananya Bose</h5>
<p class="text-xs text-on-surface-variant mb-3">Communications Lead</p>
<div class="flex justify-center gap-2">
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="LinkedIn" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOpzOVdGI2UFn1nZiKqnm7CY8ONPdMO93nTpekdjtKtbSvO6WAbMP41Gu4hYtdG-0Eu4w2iVnfnxUAlJD5KHDa90IsNm9TFfbD8nBf91Pbhwy7Aglo5xyVJW9bcZ4edKDnjJKKSSXU3axoPKjC23rDT3GJLJAG2WC2HpYlSR5rV1QJYvVtDK260dcdDLYwYmO7Zj-UFJ4YGsnnVk1gxTOXwAQtEIdEszqoj9A28Zq2dX4fSNEUr3cHe1nYRfPGqdTx6rxU3g7vQ7ml"/>
</button>
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="Twitter" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYtSAkJTOaQGwd8X7gFrIntutVvKmdDEHae6Sl__Jy7uG2FulOKBCjyiStUKVwXDPsODWJ9oXc6aKq6q8h5qXrpa5oMN1SxMEH3Cz7KUysXtL3tMZIIu-PwzsiJ9yK16XW8Hhi8X1RZVs2O8NNtdqz4ZKL8DgrMqRm4LetuJtJ7PZJSwlOU6d1ifludOWYiUS6-5ae7Uo0SEezkxqIJW_svnLmwgzyqDI28jWLNDGMjBzMpRKMjzUhTHuX15KjekZ0vyBuE6nP2-5r"/>
</button>
</div>
</div>
<!-- Team Member 5 -->
<div class="text-center group">
<div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary-fixed ring-4 ring-white shadow-md transition-transform group-hover:scale-105">
<img class="w-full h-full object-cover" data-alt="Corporate headshot of Vikram Nair, an experienced South Asian male professional, field operations expert appearance, outdoor professional backdrop, warm lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8krLBIuonhSD7wYUzZQ9BZnvpQ72n5NFl0N8ShCKpj7VG--SalnL38bmtW4PQ0w23mvUGxbEuCUuS1eipMuD3kcyn1jdQNxppi9ZiDpio-RS8jttw5umHY1dlxREBEBCjaZOCCMy5qly2IRlNqnLBXA758s8omRMdWwZLKHu2mjDEXFhmt4YKxKuoJBqUf-SO2s93hDoJVdRBeCHLXNUY6obrpxSCDHtGMolcQmNkzq_4q_M-5KGN_0WmW5mAwLL88nYeEO_uB6bg"/>
</div>
<h5 class="font-bold text-on-surface">Vikram Nair</h5>
<p class="text-xs text-on-surface-variant mb-3">Field Operations</p>
<div class="flex justify-center gap-2">
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="LinkedIn" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_EveEMjdxtSVidWZAG-MVcMM1AY3ljMoeNImL25kqvSElcPEAZgbPY7RWhGkHzaVLAXZMuDYraxS_9ywcwpNFa07ulKgc4jIjWaoWjyN4q8Hh5GY4b8nSinYknqyhnIVyUznPeAoxKtmNMI3vxcv7vt5GWNxn6bLT-GfWlB9N22i0r9PkSgJzzLkWlgGo9ZD3f5NcapXuxZs7wBl_WtKcZ1kHY3nkLuDIH3pbYhxyIE2TO5J69c3K_gRN7UUdIQxOwu0RDdSvw35z"/>
</button>
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="Twitter" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhyX17ie5RJ74EutwdJ5umkQVBqMl8ofwsf5KMcVfb2p5QfB22P23Iw3aizZZWH0TMaiplk5eV2v-3VDkACs177xjwZjsNsVdOA03xRFKcz5rQs18Sln0ws-O_QRrZO6TuzMrP3x2qAJoYJIOXYq1bOIP91xJHzsR7AozIuWXaYTPtIOobYcmcNIjNdBEF-JlGTOEXWhSEVGQAHWf0f5Q16Po-JE1mO2Ezyw3nEfclVcCuDEuKGDt53V3WSGkOJmf86QdUWhKgn6Rw"/>
</button>
</div>
</div>
<!-- Team Member 6 -->
<div class="text-center group">
<div class="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-secondary-fixed ring-4 ring-white shadow-md transition-transform group-hover:scale-105">
<img class="w-full h-full object-cover" data-alt="Corporate headshot of Ritu Gupta, a South Asian female with a vibrant personality, volunteer management specialist appearance, clean studio background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAPRhqbx3ga5btFdeZfZtM13-bbSuxzYMAszUiVvXvkpMOi8U7GbmJ4qX0EVOBTJsVb6lzdVeilgwmH42jBVXj1cSRjW-iNBFCCjFtRWKKaew9fWbh0HAL6Bp8aAKiuv5ZA1P24xEMMEv4KWt-TTyRP3lItLYxxwukpKa67ZAWt7d9XHg7jSUmsphcr8H1uPPrjLXSorURhSSI5vmGjM8MPR8FKznzijSYu8kHuisx3D8pmt-4vm5372dirBNiLs1q1H13OpaTejvA"/>
</div>
<h5 class="font-bold text-on-surface">Ritu Gupta</h5>
<p class="text-xs text-on-surface-variant mb-3">Volunteer Coordinator</p>
<div class="flex justify-center gap-2">
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="LinkedIn" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXlEqhu-V1RMXhx6k4cUIlDvWvmlaVkbNgIrsUXTQjKU8JoS_2WK4JAoD6d76NlNdduI8ES8dAXsZWVkj5BoX-tZKEzL_P9ZCPzeu4AKix0e38QBZ0gYlAYxRwaXgU4g4n2iy0Tjf2yIc70MMio06lFHPArm38DCcHkDlTazRHyNICtOQ1P8yt0N9HkW4WD0_i_vrppelIBPhwhGN-j7Ip_cnZqz_bCNnSRyrngLYLVw0ZkhhOvMZJfDmuAWL2RakD2lO76AfDhm3i"/>
</button>
<button class="w-7 h-7 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary-fixed-dim transition-colors">
<img alt="Twitter" class="w-4 h-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqHBMgfzXLUwbt6R1mbFlY7fmgZtZFNgTJqH0dEuZvwTwgAErfDtuEf_K9zwuf74giV1JrpwSPc13wh7OJMVoNkuzC7fcG1dbc97jwBXUKKL_FoZTnm6l1NEbIGQCBcqcbq2hU8VFcq18OSWp7uKuDJHkfwZiDj3ju_XW1kPJ_kXc3XfxcVGo-iJ7vmBepEU9Ni4WG1yCUexkYuBs0dqzA1yWnvtAFBgdVTFMbi-IdlIACUVpKSZm5AqNCC0EiAnFlTiwuEmObJi6a"/>
</button>
</div>
</div>
</div>
</section>
<!-- Timeline Section -->
<section class="bg-surface-container-low py-section-gap overflow-hidden">
<div class="text-center mb-16">
<p class="text-secondary font-label-md uppercase font-bold tracking-widest">OUR STORY</p>
<h2 class="font-headline-md text-headline-md text-primary mt-2">17 Years of Purpose</h2>
</div>
<div class="px-gutter max-w-container-max mx-auto relative timeline-line">
<!-- 2008 -->
<div class="relative grid grid-cols-1 md:grid-cols-2 gap-stack-lg mb-20 items-center">
<div class="md:pr-16 md:text-right">
<div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 inline-block w-full max-w-md">
<span class="text-tertiary font-display-lg text-3xl block mb-2">2008</span>
<h4 class="font-bold text-on-surface text-lg mb-2">Foundation Established</h4>
<p class="text-sm text-on-surface-variant">Started in a small Delhi apartment with 5 volunteers and a dream to serve the underserved.</p>
</div>
</div>
<div class="hidden md:block"></div>
<div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary-container border-4 border-white shadow-sm z-10 hidden md:block"></div>
</div>
<!-- 2010 -->
<div class="relative grid grid-cols-1 md:grid-cols-2 gap-stack-lg mb-20 items-center">
<div class="hidden md:block"></div>
<div class="md:pl-16">
<div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 inline-block w-full max-w-md">
<span class="text-tertiary font-display-lg text-3xl block mb-2">2010</span>
<h4 class="font-bold text-on-surface text-lg mb-2">First Rural School</h4>
<p class="text-sm text-on-surface-variant">Opened our first digital classroom in Rajasthan, reaching 200 children in remote villages.</p>
</div>
</div>
<div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary-container border-4 border-white shadow-sm z-10 hidden md:block"></div>
</div>
<!-- 2013 -->
<div class="relative grid grid-cols-1 md:grid-cols-2 gap-stack-lg mb-20 items-center">
<div class="md:pr-16 md:text-right">
<div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 inline-block w-full max-w-md">
<span class="text-tertiary font-display-lg text-3xl block mb-2">2013</span>
<h4 class="font-bold text-on-surface text-lg mb-2">80G &amp; 12A Certification</h4>
<p class="text-sm text-on-surface-variant">Received critical tax exemption certifications, enabling large-scale donor participation.</p>
</div>
</div>
<div class="hidden md:block"></div>
<div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary-container border-4 border-white shadow-sm z-10 hidden md:block"></div>
</div>
<!-- 2016 -->
<div class="relative grid grid-cols-1 md:grid-cols-2 gap-stack-lg mb-20 items-center">
<div class="hidden md:block"></div>
<div class="md:pl-16">
<div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 inline-block w-full max-w-md">
<span class="text-tertiary font-display-lg text-3xl block mb-2">2016</span>
<h4 class="font-bold text-on-surface text-lg mb-2">Mobile Health Initiative</h4>
<p class="text-sm text-on-surface-variant">Launched 12 mobile health clinics across Bihar and Uttar Pradesh serving 50,000+ patients.</p>
</div>
</div>
<div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary-container border-4 border-white shadow-sm z-10 hidden md:block"></div>
</div>
<!-- 2019 -->
<div class="relative grid grid-cols-1 md:grid-cols-2 gap-stack-lg mb-20 items-center">
<div class="md:pr-16 md:text-right">
<div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 inline-block w-full max-w-md">
<span class="text-tertiary font-display-lg text-3xl block mb-2">2019</span>
<h4 class="font-bold text-on-surface text-lg mb-2">FCRA Certification</h4>
<p class="text-sm text-on-surface-variant">Received Foreign Contribution Regulation Act approval, opening international funding channels.</p>
</div>
</div>
<div class="hidden md:block"></div>
<div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary-container border-4 border-white shadow-sm z-10 hidden md:block"></div>
</div>
<!-- 2022 -->
<div class="relative grid grid-cols-1 md:grid-cols-2 gap-stack-lg mb-20 items-center">
<div class="hidden md:block"></div>
<div class="md:pl-16">
<div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 inline-block w-full max-w-md">
<span class="text-tertiary font-display-lg text-3xl block mb-2">2022</span>
<h4 class="font-bold text-on-surface text-lg mb-2">1 Million Lives Milestone</h4>
<p class="text-sm text-on-surface-variant">Celebrated reaching 1 million beneficiaries across education, health, and livelihood programs.</p>
</div>
</div>
<div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary-container border-4 border-white shadow-sm z-10 hidden md:block"></div>
</div>
<!-- 2025 -->
<div class="relative grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
<div class="md:pr-16 md:text-right">
<div class="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/30 inline-block w-full max-w-md">
<span class="text-tertiary font-display-lg text-3xl block mb-2">2025</span>
<h4 class="font-bold text-on-surface text-lg mb-2">2.4M Lives &amp; Growing</h4>
<p class="text-sm text-on-surface-variant">Now active in 28 states with 15,000 volunteers and 380+ completed projects.</p>
</div>
</div>
<div class="hidden md:block"></div>
<div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary-container border-4 border-white shadow-sm z-10 hidden md:block"></div>
</div>
</div>
</section>
<!-- Donation Widget Section -->
<section class="bg-primary text-white py-section-gap overflow-hidden relative">
<div class="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">

</div>
<div class="px-gutter max-w-container-max mx-auto relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<p class="text-on-primary-container font-label-md uppercase tracking-widest font-bold">MAKE A DIFFERENCE</p>
<h2 class="font-display-lg text-display-lg mt-4 leading-tight">Your Donation Can Transform a Life Today</h2>
<p class="mt-6 text-on-primary-container leading-relaxed opacity-90 max-w-xl">100% of your contribution goes directly to our programs. Every rupee is accounted for and reported transparently. Donations eligible for 80G tax deduction.</p>
<div class="flex flex-wrap gap-4 mt-8">
<div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
<span class="material-symbols-outlined text-sm">verified_user</span>
<span class="text-sm">FCRA Certified</span>
</div>
<div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
<span class="material-symbols-outlined text-sm">receipt_long</span>
<span class="text-sm">80G Tax Benefit</span>
</div>
<div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
<span class="material-symbols-outlined text-sm">lock</span>
<span class="text-sm">Secure Payments</span>
</div>
</div>
</div>
<div class="bg-white rounded-3xl p-8 text-on-surface shadow-2xl">
<p class="font-bold text-center mb-6">Choose an amount or enter custom</p>
<div class="grid grid-cols-2 gap-4 mb-6">
<button class="border-2 border-outline-variant py-3 rounded-xl hover:border-secondary-container hover:bg-secondary-container/5 transition-all font-bold">₹500</button>
<button class="border-2 border-secondary-container bg-secondary-container text-white py-3 rounded-xl font-bold">₹1,000</button>
<button class="border-2 border-outline-variant py-3 rounded-xl hover:border-secondary-container hover:bg-secondary-container/5 transition-all font-bold">₹2,500</button>
<button class="border-2 border-outline-variant py-3 rounded-xl hover:border-secondary-container hover:bg-secondary-container/5 transition-all font-bold">₹5,000</button>
</div>
<div class="relative mb-6">
<span class="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">₹</span>
<input class="w-full pl-8 pr-4 py-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-secondary-container focus:border-transparent outline-none" placeholder="Enter custom amount" type="text"/>
</div>
<div class="flex bg-surface-container rounded-xl p-1 mb-8">
<button class="flex-1 py-2 rounded-lg bg-white shadow-sm font-bold">One-Time</button>
<button class="flex-1 py-2 rounded-lg text-on-surface-variant hover:text-on-surface">Monthly</button>
</div>
<button class="w-full bg-tertiary-container text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-tertiary transition-all">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
                            Donate Securely
                        </button>
<p class="text-center text-xs text-on-surface-variant mt-4 opacity-70">Secured by 256-bit SSL encryption</p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-primary dark:bg-on-primary-fixed text-on-primary dark:text-primary-fixed pt-section-gap pb-8">
<div class="max-w-container-max mx-auto px-gutter">
<div class="grid grid-cols-1 md:grid-cols-4 gap-stack-lg mb-16">
<div class="col-span-1 md:col-span-1">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
<img class="w-full h-full object-contain" data-alt="Naresh Samaj Kalyan Seva Samiti logo icon, crisp and clear on white circular background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSpWQc_v7g1V_UgXcyYxjpS9Q386T12G8gGWJ4jEM6ZngDxDp2j2KNWF_cF0dmP8ILrtqD8ytkYUgXngVZhW0dk8zMil3at4bSjDrM5VLtFMZDq-f1fE7rjQdboIHhRzrS13Q6Dv_acRuP_DxUg-_ZyJ89bmNhxJ0AiXmVnHuWugfMn2j3fcIPlNd4gCP_m54TmNFZ922FLk2ZPXXm0eJh30L6Ge6Q_th5eqEGu7_WLfpp1pwAx5PQXCht2C-MMOviBel3voIKHpVq"/>
</div>
<span class="font-headline-sm text-surface-lowest font-bold text-lg">NGO Foundation</span>
</div>
<p class="text-primary-fixed/80 text-sm leading-relaxed mb-6">Committed to building a just and equitable society through grassroots action, innovation, and compassion.</p>
<div class="flex gap-4">
<a class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-container transition-colors" href="#">
<img alt="Twitter" class="w-4 h-4 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXLA9tmg5efZz2OKSCLPZZdq22yvoLET1xZQqc0rKb_kzg1Ma8T3AS5EzFcPVoLhlhGhX0QjWGmOeDkCLuMkAZ2IlT3cwBFPKaLKdssyQpOel4vZeGxVMESJtWnbothajhsRelSGPECXZVfMrZ2TCT-4XapwPJepXx1O9Xd4baMocRyvCdUc5kROoV4bXX7317IOMiIHi_9ms_fs3-SsR0VAgtt9QUyTQo34aO22gLgw6nOSTlv2C9MEbc1vt2_Lk5mJaOAxV0SjnK"/>
</a>
<a class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-container transition-colors" href="#">
<img alt="Facebook" class="w-4 h-4 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-AAEw8WPkD3x6yIXg3piFiFuw68Qd0yCCfzlg5tsif3DYBgq_baqQ61M2DNA5BJlkKmgMwTFagaD1oYAwsn04rzgfyWhuQA291Z_MTp_4ROWAFY5kmExVQYTRySkEEQ8I-49Py6rwGW1Vm6sRRl7pDkf403Q0o3Pr_hAV-EJnpM8C-idwnEPfc2gFGZohBxjGqjT08Duhb8zX9v7p0UfcC-KFT1GzSgem8TQ-eiFfLNz9-VNvy1TqD6S5FXivpM6Rl31p6u3UJnv1"/>
</a>
<a class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-container transition-colors" href="#">
<img alt="Instagram" class="w-4 h-4 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQAhvpsk35INflQKrajjU8-QU7ie58L0TqupjtE6nABYfW-6WsNGPscWOYHXQ4uNs4DwWaFwA9JxFZi4S7wcJusYXaN_f3mFaEFDy9ayK8ganTTve2X-thunqeB04diFGC2za9JSA7pOa2T3S-Rf9uhFVm0ikWm8eddWAMZE1vL7Ye3pgSpX2A8OP0Y2btou4I6gyfLKImese7IfOcivh0GZA1SO7trsbpfmuDXKHMTFTF2dfWdi3kkp7TsXiTktk3STN0Kb5hIWby"/>
</a>
<a class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-container transition-colors" href="#">
<img alt="YouTube" class="w-4 h-4 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChvXz2xdkmVLeHLfC_AevQHgwjkMntu_eh2c0oxWVwwHkw2ahnbWa0SqKx7lvCWtl0Wc4xQK_rMA_MMs-YsemjSsLUENtz-zLRDgJJNWa_gkjWgMGosrBBVwe7FaXBcMQi54dSrm3-0gkvCCC8ik4X_SaLrzFM_Ntnm9aMCRgspzjIpWj5MTFipzTQDqZONvxbN0MZM1UBRWPaQdJQeXtvI5fNUghqB6pergcKVUoFz4SSe9TJHRkT3On2Fq7fUZ2XPyl8Jemw6qaO"/>
</a>
</div>
</div>
<div>
<h6 class="font-bold text-white mb-6 uppercase text-sm tracking-wider">Quick Links</h6>
<ul class="space-y-4">
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Home</a></li>
<li><a class="text-secondary-fixed font-semibold hover:underline decoration-secondary underline-offset-4" href="#">About Us</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Our Work</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Success Stories</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Annual Reports</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h6 class="font-bold text-white mb-6 uppercase text-sm tracking-wider">Our Programs</h6>
<ul class="space-y-4">
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Education</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Healthcare</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Environment</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Women Empowerment</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Disaster Relief</a></li>
<li><a class="text-primary-fixed/80 hover:text-white transition-colors hover:underline decoration-secondary underline-offset-4" href="#">Skill Development</a></li>
</ul>
</div>
<div>
<h6 class="font-bold text-white mb-6 uppercase text-sm tracking-wider">Contact Us</h6>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary-container">location_on</span>
<span class="text-sm text-primary-fixed/80">14, Lotus Road, Sector 5, New Delhi – 110001, India</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary-container">call</span>
<span class="text-sm text-primary-fixed/80">+91 98765 43210</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary-container">mail</span>
<span class="text-sm text-primary-fixed/80">info@ngofoundation.org</span>
</li>
<li class="pt-4">
<h6 class="font-bold text-white mb-4 uppercase text-xs tracking-widest">Newsletter</h6>
<div class="flex">
<input class="bg-white/10 border-none rounded-l-lg py-2 px-4 text-sm w-full focus:ring-1 focus:ring-secondary-container outline-none placeholder:text-white/40" placeholder="Your email address" type="email"/>
<button class="bg-tertiary-container hover:bg-tertiary text-white px-4 rounded-r-lg font-bold text-sm transition-colors">Join</button>
</div>
</li>
</ul>
</div>
</div>
<div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-xs text-primary-fixed/60">© 2024 Naresh Samaj Kalyan Seva Samiti. All rights reserved. Reg. No. MH/2008/00123 | FCRA: 083780123</p>
<div class="flex gap-6 text-xs text-primary-fixed/60">
<a class="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
<a class="hover:text-white transition-colors" href="#">Refund Policy</a>
</div>
</div>
</div>
</footer>
<script>
        // Simple intersection observer for timeline animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.bg-white.p-8.rounded-2xl').forEach(card => {
            card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(card);
        });
    </script>
</body></html>`}} />;
}
