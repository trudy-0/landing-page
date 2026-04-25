// Language translations
const translations = {
    ko: {
        nav_home: "홈",
        nav_product: "제품",
        nav_story: "스토리",
        nav_contact: "문의",
        hero_title_1: "당신의 스타일을",
        hero_title_2: "완성하는 한 끗",
        hero_desc: "최고급 소재와 인체공학적 디자인의 결합. 어디서든 돋보이는 AURA 프리미엄 모자를 경험하세요.",
        btn_shop: "지금 구매하기",
        btn_discover: "브랜드 스토리",
        feature_title: "비교할 수 없는 퀄리티",
        feature_subtitle: "디테일의 차이가 명품을 만듭니다.",
        f1_title: "초경량 통기성",
        f1_desc: "특수 에어메쉬 소재를 사용하여 한여름에도 쾌적한 착용감을 유지합니다.",
        f2_title: "생활 방수 코팅",
        f2_desc: "갑작스러운 비나 땀에도 오염을 방지하는 나노 코팅 기술이 적용되었습니다.",
        f3_title: "프리미엄 핏",
        f3_desc: "수천 명의 두상 데이터를 분석하여 어떤 형태에도 완벽하게 어울리는 핏을 제공합니다.",
        f4_title: "아이코닉 디자인",
        f4_desc: "심플하면서도 미래지향적인 네온 액센트로 당신만의 아우라를 완성합니다.",
        story_title: "모자에 대한 새로운 정의",
        story_p1: "AURA는 단순한 패션 아이템을 넘어, 개인의 아이덴티티를 표현하는 완벽한 도구를 만들고자 시작되었습니다.",
        story_p2: "전통적인 방식에서 벗어나 혁신적인 소재와 테크 웨어의 장점을 결합한 우리의 컬렉션은 한계를 뛰어넘습니다.",
        stat_1: "프로토타입",
        stat_2: "친환경 소재",
        footer_desc: "미래를 쓰는 프리미엄 헤드웨어 브랜드",
        footer_cs: "고객 지원",
        faq: "자주 묻는 질문",
        shipping: "배송/교환/반품",
        contact_us: "1:1 문의",
        lang_btn: "EN"
    },
    en: {
        nav_home: "Home",
        nav_product: "Products",
        nav_story: "Story",
        nav_contact: "Contact",
        hero_title_1: "The Final Touch",
        hero_title_2: "To Your Style",
        hero_desc: "A combination of premium materials and ergonomic design. Experience the AURA premium hat that stands out anywhere.",
        btn_shop: "Shop Now",
        btn_discover: "Our Story",
        feature_title: "Unmatched Quality",
        feature_subtitle: "The difference in detail makes a masterpiece.",
        f1_title: "Ultralight Breathability",
        f1_desc: "Keeps you comfortable even in midsummer with special air-mesh material.",
        f2_title: "Water-Resistant Coating",
        f2_desc: "Nano-coating technology prevents contamination from sudden rain or sweat.",
        f3_title: "Premium Fit",
        f3_desc: "Analyzed thousands of head shape data to provide a perfect fit for any shape.",
        f4_title: "Iconic Design",
        f4_desc: "Completes your own aura with simple yet futuristic neon accents.",
        story_title: "Redefining Headwear",
        story_p1: "AURA started to create a perfect tool to express personal identity beyond a simple fashion item.",
        story_p2: "Breaking away from traditional methods, our collection combines innovative materials and the advantages of tech wear to push the boundaries.",
        stat_1: "Prototypes",
        stat_2: "Eco-Friendly",
        footer_desc: "The premium headwear brand writing the future",
        footer_cs: "Customer Support",
        faq: "FAQ",
        shipping: "Shipping & Returns",
        contact_us: "Contact Us",
        lang_btn: "KR"
    }
};

let currentLang = 'ko';

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const translatableElements = document.querySelectorAll('[data-i18n]');
const navbar = document.getElementById('navbar');

// Toggle Language
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    
    // Update texts
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key]; // Using innerHTML to support <br>
        }
    });

    // Update button text
    langToggleBtn.textContent = translations[currentLang].lang_btn;
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu placeholder functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        alert(currentLang === 'ko' ? '모바일 메뉴가 열립니다 (데모)' : 'Mobile menu opens (Demo)');
    });
}
