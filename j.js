// ========================================
// ربط عناصر العجلة
// ========================================

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

const resultBox = document.getElementById("resultBox");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const discoverBtn = document.getElementById("discoverBtn");


// ========================================
// بيانات القطاعات
// ========================================

const sectors = [

    {
        id: "education",
        name: "التعليم",
        icon: "📚",
        description: "اكتشف كيف تساهم الموازنة العامة في دعم التعليم وتطوير الخدمات التعليمية."
    },

    {
        id: "health",
        name: "الصحة",
        icon: "🏥",
        description: "تعرف على دور الموازنة العامة في دعم الخدمات الصحية وتحسين حياة المواطنين."
    },

    {
        id: "revenue",
        name: "الإيرادات",
        icon: "💰",
        description: "اكتشف من أين تحصل الدولة على مواردها وكيف تساهم الإيرادات في تمويل الخدمات."
    },

    {
        id: "welfare",
        name: "الحماية الاجتماعية",
        icon: "🤝",
        description: "تعرف على برامج الحماية الاجتماعية ودورها في دعم المواطنين."
    },

    {
        id: "debt",
        name: "الديون",
        icon: "📊",
        description: "افهم ببساطة ما هي ديون الدولة ولماذا تهتم الموازنة بإدارتها."
    }

];


// ========================================
// متغير دوران العجلة
// ========================================

let currentRotation = 0;
let selectedSector = null;


// ========================================
// تشغيل العجلة
// ========================================

spinBtn.addEventListener("click", function () {

    // منع الضغط أثناء دوران العجلة
    spinBtn.disabled = true;

    // إخفاء النتيجة القديمة
    resultBox.style.display = "none";


    // اختيار قطاع عشوائي
    const randomIndex =
        Math.floor(Math.random() * sectors.length);

    selectedSector = sectors[randomIndex];


    // كل قطاع حجمه 72 درجة
    // نريد وضع منتصف القطاع عند السهم

    const sectorCenter =
        randomIndex * 72 + 36;

    const desiredAngle =
        (360 - sectorCenter);


    // معرفة وضع العجلة الحالي
    const currentAngle =
        ((currentRotation % 360) + 360) % 360;


    // حساب المسافة المطلوبة
    const extraRotation =
        (desiredAngle - currentAngle + 360) % 360;


    // 5 لفات كاملة + الوصول للقطاع المختار
    currentRotation +=
        1800 + extraRotation;


    // تدوير العجلة
    wheel.style.transform =
        "rotate(" + currentRotation + "deg)";


    // ننتظر انتهاء الحركة
    setTimeout(function () {

        showResult();

    }, 5100);

});


// ========================================
// إظهار نتيجة القطاع
// ========================================

function showResult() {

    resultIcon.textContent =
        selectedSector.icon;

    resultTitle.textContent =
        "🎉 القطاع المختار: " +
        selectedSector.name;

    resultDescription.textContent =
        selectedSector.description;

    resultBox.style.display = "block";


    // ====================================
    // زر اكتشف القطاع
    // ====================================

    discoverBtn.onclick = function () {

        window.location.href =
            "questions.html?sector=" +
            selectedSector.id;

    };


    // إعادة تفعيل زر العجلة
    spinBtn.disabled = false;


    // النزول للنتيجة
    resultBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// ========================================
// زر "اكتشف القطاعات"
// الموجود في بداية الصفحة
// ========================================

function scrollToWheel() {

    document.getElementById("wheel").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});