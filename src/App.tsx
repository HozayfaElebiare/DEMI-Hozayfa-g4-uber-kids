import { useEffect, useRef, useState } from "react";
import heroImg from "@/imports/Codex_Image_Sep_16__2026__01_21_28_AM.png";
import deliveryImg from "@/imports/Codex_Image_Sep_16__2026__01_21_41_AM.png";
import robotImg from "@/imports/Codex_Image_Sep_16__2026__01_21_47_AM.png";

// Simple image component
function Img({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

// Scroll reveal hook
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Floating cloud SVG
function Cloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="40" rx="55" ry="20" fill="white" fillOpacity="0.8" />
      <ellipse cx="40" cy="32" rx="28" ry="20" fill="white" fillOpacity="0.8" />
      <ellipse cx="75" cy="28" rx="22" ry="18" fill="white" fillOpacity="0.8" />
    </svg>
  );
}

// Star shape
function Star({ size = 24, color = "#FCD34D", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <polygon
        points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"
        fill={color}
      />
    </svg>
  );
}

// Section wrapper
function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-20 px-4 md:px-8 ${className}`}>
      {children}
    </section>
  );
}

export default function App() {
  useReveal();
  const [activeStage, setActiveStage] = useState(0);
  const stageRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    stageRef.current = setInterval(() => {
      setActiveStage((s) => (s + 1) % 3);
    }, 3000);
    return () => {
      if (stageRef.current) clearInterval(stageRef.current);
    };
  }, []);

  const stages = [
    {
      num: "١",
      title: "عند الصعود",
      color: "bg-sky-500",
      border: "border-sky-400",
      bg: "bg-sky-50",
      points: ["سائق وسيارة موثَّقان", "رمز خاص بالطفل", "إشعار ببدء الرحلة لولي الأمر"],
      icon: "🚗",
    },
    {
      num: "٢",
      title: "أثناء الرحلة",
      color: "bg-teal-500",
      border: "border-teal-400",
      bg: "bg-teal-50",
      points: ["تتبع مباشر وكاميرات", "تنبيه عند الانحراف أو التوقف", "زر استغاثة للطوارئ"],
      icon: "📍",
    },
    {
      num: "٣",
      title: "بعد الوصول",
      color: "bg-yellow-500",
      border: "border-yellow-400",
      bg: "bg-yellow-50",
      points: ["وصول داخل النطاق المحدد", "رمز للمستلم المعتمد فقط", "إشعار بتسليم الطفل لولي الأمر"],
      icon: "✅",
    },
  ];

  const techFeatures = [
    { icon: "🛰️", text: "جهازا GPS أساسي واحتياطي" },
    { icon: "📷", text: "كاميرات داخل السيارة وخارجها" },
    { icon: "⚠️", text: "تنبيه عند انحراف المسار أو التوقف غير المعتاد" },
    { icon: "👤", text: "التحقق من هوية السائق والمستلم" },
    { icon: "🆘", text: "زر استغاثة سريع" },
  ];

  const businessCards = [
    { icon: "👨‍👩‍👧", title: "المستفيدون", desc: "الأطفال والأسر والمدارس والنوادي والسائقون" },
    { icon: "🚐", title: "رحلة جماعية", desc: "أطفال في مسار واحد مع تقسيم الأجرة بين الأسر" },
    { icon: "💰", title: "طريقة الربح", desc: "اشتراك شهري أو عمولة على الرحلات وعقود مع المدارس" },
  ];

  const teamMembers = [
    { num: "١", name: "أحمد أحمد" },
    { num: "٢", name: "أنس حسن" },
    { num: "٣", name: "أنس محمد" },
    { num: "٤", name: "جونستا مينا" },
    { num: "٥", name: "حذيفة محمود", lead: true },
  ];

  return (
    <div dir="rtl" style={{ fontFamily: "'Cairo', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(14,165,233,0.1)" }}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-black"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #2DD4BF)" }}>
            ط
          </div>
          <span className="text-xl font-black" style={{ color: "#0EA5E9" }}>اطمئن</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold" style={{ color: "#475569" }}>
          {[["المشكلة", "#problem"], ["الحل", "#solution"], ["الأمان", "#safety"], ["التقنية", "#tech"], ["المشروع", "#project"]].map(([label, href]) => (
            <a key={href} href={href} className="hover:text-sky-500 transition-colors">{label}</a>
          ))}
        </div>
        <a href="#project"
          className="btn-shimmer text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
          ورقة المشروع
        </a>
      </nav>

      {/* HERO */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "linear-gradient(160deg, #E0F7FA 0%, #B3E5FC 40%, #E8F5E9 100%)", paddingTop: "80px" }}>

        {/* Clouds */}
        <Cloud className="absolute top-20 right-10 w-32 opacity-70 cloud-drift" />
        <Cloud className="absolute top-32 left-20 w-24 opacity-50" style={{ animationDelay: "2s" }} />
        <Cloud className="absolute top-10 left-1/3 w-20 opacity-40 cloud-drift" />

        {/* Floating stars */}
        <Star size={28} color="#FCD34D" className="absolute top-40 right-1/4 float-anim" />
        <Star size={16} color="#FB923C" className="absolute bottom-1/3 left-16 float-anim-2" />
        <Star size={20} color="#2DD4BF" className="absolute top-1/2 right-12 float-anim-3" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="reveal mb-4">
            <span className="inline-block px-5 py-2 rounded-full text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #2DD4BF)" }}>
              مشروع مسابقة DEMI 🏆
            </span>
          </div>
          <h1 className="reveal delay-100 font-black leading-tight mb-6"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", color: "#0C4A6E" }}>
            <span style={{ color: "#0EA5E9" }}>اطمئن</span>
          </h1>
          <p className="reveal delay-200 text-xl md:text-2xl font-semibold mb-3"
            style={{ color: "#0369A1" }}>
            خدمة توصيل الأطفال الآمن في مصر
          </p>
          <p className="reveal delay-300 text-base md:text-lg mb-10 max-w-2xl mx-auto"
            style={{ color: "#475569", lineHeight: "2" }}>
            بيئة آمنة ومؤمَّنة عند الصعود، وأثناء الرحلة، وبعد الوصول — حتى يطمئن ولي الأمر دائمًا 💙
          </p>
          <div className="reveal delay-400 flex flex-wrap gap-4 justify-center">
            <a href="#problem"
              className="btn-shimmer text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-shadow">
              اكتشف الفكرة ←
            </a>
            <a href="#safety"
              className="font-bold px-8 py-4 rounded-2xl text-lg border-2 transition-all hover:bg-sky-50"
              style={{ borderColor: "#0EA5E9", color: "#0EA5E9" }}>
              الأمان في ٣ مراحل
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="reveal-scale delay-300 relative mt-12 w-full max-w-3xl px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl float-anim">
            <Img src={heroImg} alt="رحلة الأطفال الآمنة مع اطمئن" className="w-full" />
            <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(to top, rgba(12,74,110,0.15) 0%, transparent 50%)" }} />
          </div>
          {/* Badge */}
          <div className="absolute -top-4 -right-2 md:right-8 bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 float-anim-2">
            <span className="text-2xl">🛡️</span>
            <div>
              <div className="text-xs font-bold text-sky-600">بيئة آمنة ١٠٠٪</div>
              <div className="text-xs text-slate-500">من الباب للباب</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-2 md:left-8 bg-white rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 float-anim">
            <span className="text-2xl">📍</span>
            <div>
              <div className="text-xs font-bold text-teal-600">تتبع مباشر</div>
              <div className="text-xs text-slate-500">في كل لحظة</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bounce-gentle">
          <span className="text-xs text-slate-400 font-semibold">اسحب للأسفل</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <Section id="problem" className="relative"
        style={{ background: "linear-gradient(160deg, #FFF7ED 0%, #FEF3C7 100%)" }}>

        {/* Decorative */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #FB923C, transparent)", transform: "translate(30%, -30%)" }} />

        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
              style={{ background: "#FEF3C7", color: "#92400E" }}>
              المشكلة الحقيقية
            </span>
            <h2 className="font-black text-4xl md:text-5xl" style={{ color: "#78350F" }}>
              مشكلة تواجه أسرًا كثيرة في مصر 🇪🇬
            </h2>
          </div>

          {/* Big problem card */}
          <div className="reveal-scale delay-100 mb-12">
            <div className="rounded-3xl p-8 md:p-12 text-center shadow-2xl"
              style={{ background: "linear-gradient(135deg, #F97316, #EF4444)", color: "white" }}>
              <div className="text-5xl mb-4">😟</div>
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                لا توجد خدمة منتشرة ومتخصصة يمكن لولي الأمر الاعتماد عليها
              </h3>
              <p className="text-lg md:text-xl opacity-90">
                لتوصيل طفله وحده بأمان إلى المدرسة أو النادي أو الكورس
              </p>
            </div>
          </div>

          {/* Two impact cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="reveal-right delay-200 card-hover">
              <div className="bg-white rounded-3xl p-8 shadow-lg border-r-4" style={{ borderColor: "#F97316" }}>
                <div className="text-4xl mb-4">👨‍💼</div>
                <h4 className="text-xl font-black mb-3" style={{ color: "#9A3412" }}>ماذا يضطر ولي الأمر أن يفعل؟</h4>
                <p className="text-base leading-loose" style={{ color: "#475569" }}>
                  يترك عمله أو يُغيِّر مواعيده أو يلغي التزاماته حتى يوصل طفله بنفسه
                </p>
              </div>
            </div>
            <div className="reveal-left delay-300 card-hover">
              <div className="bg-white rounded-3xl p-8 shadow-lg border-r-4" style={{ borderColor: "#EF4444" }}>
                <div className="text-4xl mb-4">👧</div>
                <h4 className="text-xl font-black mb-3" style={{ color: "#9A3412" }}>ماذا قد يخسر الطفل؟</h4>
                <p className="text-base leading-loose" style={{ color: "#475569" }}>
                  قد يفوِّت المدرسة أو النادي أو الكورس أو موعدًا مهمًا بسبب انشغال ولي الأمر
                </p>
              </div>
            </div>
          </div>

          {/* Solution teaser */}
          <div className="reveal delay-400">
            <div className="rounded-3xl p-8 text-center"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", color: "white" }}>
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl md:text-2xl font-black mb-2">الحل الذي يحتاجه ولي الأمر</h3>
              <p className="text-lg opacity-90">
                خدمة نقل أطفال آمنة تبدأ من البيت، وتحميه أثناء الرحلة، وتُسلِّمه لشخص معتمد عند الوصول
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SOLUTION HERO */}
      <Section id="solution" style={{ background: "linear-gradient(160deg, #E0F2FE 0%, #CFFAFE 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
              style={{ background: "#CFFAFE", color: "#164E63" }}>
              الحل
            </span>
            <h2 className="font-black text-4xl md:text-5xl mb-4" style={{ color: "#0C4A6E" }}>
              بيئة آمنة من الباب للباب 🚗
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#0369A1", lineHeight: "2" }}>
              يعرف ولي الأمر أين طفله، ويتابع الرحلة كاملة، ويتأكد ممن استلمه ووقت التسليم
            </p>
          </div>

          <div className="reveal-scale delay-200 relative rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Img src={deliveryImg} alt="تسليم الطفل بأمان" className="w-full" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(12,74,110,0.5) 0%, transparent 60%)" }} />
            <div className="absolute top-1/2 right-8 -translate-y-1/2 max-w-xs">
              <div className="bg-white bg-opacity-90 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-black">✓</div>
                  <span className="font-black text-slate-800">تم التسليم بأمان!</span>
                </div>
                <p className="text-sm text-slate-600">سلَّمت نورا للمعلمة المعتمدة</p>
                <p className="text-xs text-slate-400 mt-1">الآن • مدرسة الأمل</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SAFETY STAGES */}
      <Section id="safety" style={{ background: "linear-gradient(160deg, #F0FDF4 0%, #ECFDF5 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
              style={{ background: "#D1FAE5", color: "#065F46" }}>
              بيئة الرحلة الآمنة
            </span>
            <h2 className="font-black text-4xl md:text-5xl" style={{ color: "#064E3B" }}>
              الأمان في كل مرحلة من الرحلة 🛡️
            </h2>
          </div>

          {/* Stage selector */}
          <div className="reveal delay-100 flex gap-3 justify-center mb-10 flex-wrap">
            {stages.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveStage(i)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeStage === i
                    ? `${s.color} text-white shadow-lg scale-105`
                    : "bg-white text-slate-600 border border-slate-200 hover:scale-105"
                }`}>
                <span>{s.icon}</span> المرحلة {s.num}: {s.title}
              </button>
            ))}
          </div>

          {/* Active stage detail */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stages.map((s, i) => (
              <div
                key={i}
                className={`card-hover rounded-3xl p-8 border-2 transition-all duration-500 ${
                  activeStage === i ? `${s.bg} ${s.border} shadow-2xl scale-105` : "bg-white border-slate-100 shadow"
                }`}>
                <div className="text-5xl mb-4 text-center">{s.icon}</div>
                <div className={`w-12 h-12 rounded-2xl ${s.color} text-white font-black text-xl flex items-center justify-center mb-4 mx-auto`}>
                  {s.num}
                </div>
                <h3 className="text-xl font-black text-center mb-5" style={{ color: "#0F172A" }}>
                  {s.title}
                </h3>
                <ul className="space-y-3">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`mt-1 w-5 h-5 rounded-full ${s.color} flex items-center justify-center text-white text-xs flex-shrink-0`}>✓</div>
                      <span className="text-sm font-semibold" style={{ color: "#374151", lineHeight: "1.6" }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Summary banner */}
          <div className="reveal delay-300">
            <div className="rounded-3xl p-8 text-center"
              style={{ background: "linear-gradient(135deg, #059669, #0D9488)", color: "white" }}>
              <div className="text-3xl mb-3">👨‍👩‍👧</div>
              <p className="text-xl md:text-2xl font-black">
                يعرف ولي الأمر أين طفله، ويتابع الرحلة كاملة، ويتأكد ممن استلمه ووقت التسليم
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* TECHNOLOGY */}
      <Section id="tech" style={{ background: "linear-gradient(160deg, #EFF6FF 0%, #E0E7FF 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
              style={{ background: "#DBEAFE", color: "#1E3A8A" }}>
              التقنية والنموذج الأولي
            </span>
            <h2 className="font-black text-4xl md:text-5xl" style={{ color: "#1E3A8A" }}>
              حل واقعي يمكن تجربته أمام لجنة التحكيم 🤖
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div className="reveal-right">
              <ul className="space-y-4">
                {techFeatures.map((f, i) => (
                  <div
                    key={i}
                    className={`reveal delay-${(i + 1) * 100} card-hover bg-white rounded-2xl px-6 py-4 shadow-md flex items-center gap-4 border-r-4`}
                    style={{ borderColor: "#6366F1" }}>
                    <span className="text-3xl">{f.icon}</span>
                    <span className="font-bold text-base" style={{ color: "#1E3A8A" }}>{f.text}</span>
                  </div>
                ))}
              </ul>
            </div>
            <div className="reveal-left delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl float-anim">
                <Img src={robotImg} alt="النموذج الروبوتي الأولي لاطمئن" className="w-full" />
                <div className="absolute bottom-0 inset-x-0 p-4"
                  style={{ background: "linear-gradient(to top, rgba(30,58,138,0.85), transparent)" }}>
                  <p className="text-white font-bold text-sm text-center">
                    نموذج أولي بعربة أردوينو كيت — مستشعر وبلوتوث، ولوحة اتصال واي فاي/إنترنت لاحقًا
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prototype detail */}
          <div className="reveal delay-300">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-indigo-100">
              <h3 className="text-xl font-black mb-4 text-center" style={{ color: "#312E81" }}>
                🔬 النموذج الذي يقدمه الفريق
              </h3>
              <p className="text-base text-center leading-loose" style={{ color: "#475569" }}>
                نصنع النموذج الأولي من عربة <strong>أردوينو كيت</strong>، مزوّدة بمستشعر لرصد العوائق ووحدة بلوتوث للتحكم القريب،
                وسيتم لاحقًا تركيب لوحة اتصال واي فاي/إنترنت لربطها مباشرة بتطبيق الويب.
                تتحرك العربة في المسار المحدد، تتوقف أمام العائق، ترسل تنبيهًا عند الانحراف، ثم تؤكد الوصول والتسليم.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* BUSINESS MODEL */}
      <Section id="project" style={{ background: "linear-gradient(160deg, #FDF4FF 0%, #FAE8FF 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4"
              style={{ background: "#F3E8FF", color: "#6B21A8" }}>
              ورقة المشروع
            </span>
            <h2 className="font-black text-4xl md:text-5xl" style={{ color: "#4A1272" }}>
              خدمة آمنة للأطفال مع تسليم موثَّق 📋
            </h2>
            <p className="text-base mt-3" style={{ color: "#6B7280" }}>المجال: تطبيق ويب وروبوتيكس</p>
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              {teamMembers.map((m) => (
                <div
                  key={m.num}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold shadow-sm ${
                    m.lead ? "text-white" : "bg-white border border-purple-100"
                  }`}
                  style={m.lead ? { background: "linear-gradient(135deg, #7C3AED, #4F46E5)" } : { color: "#581C87" }}>
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    style={m.lead ? { background: "rgba(255,255,255,0.25)", color: "#fff" } : { background: "#F3E8FF", color: "#7C3AED" }}>
                    {m.num}
                  </span>
                  {m.name}
                  {m.lead ? " — قائد الفريق" : ""}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {businessCards.map((c, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100} card-hover`}>
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center border-t-4"
                  style={{ borderColor: "#A855F7" }}>
                  <div className="text-5xl mb-4">{c.icon}</div>
                  <h3 className="text-lg font-black mb-3" style={{ color: "#581C87" }}>{c.title}</h3>
                  <p className="text-sm leading-loose" style={{ color: "#6B7280" }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Project sheet grid */}
          <div className="reveal-scale delay-200 grid md:grid-cols-2 gap-6 mb-10">
            {[
              { num: "١", label: "المشكلة الأساسية", text: "لا توجد في مصر خدمة منتشرة ومتخصصة يمكن الاعتماد عليها لتوصيل الأطفال وحدهم بأمان", color: "#EF4444" },
              { num: "٢", label: "أثر المشكلة", text: "يتعطل وقت ولي الأمر، وقد يفوّت الطفل المدرسة أو النادي أو الكورس أو موعدًا مهمًا", color: "#F97316" },
              { num: "٤", label: "الحل المقترح", text: "بيئة آمنة عند الصعود وأثناء الطريق وبعد الوصول حتى تسليم الطفل لشخص اعتمده ولي الأمر", color: "#0EA5E9" },
              { num: "٧", label: "الجدوى وطريقة الربح", text: "نموذج منخفض التكلفة، يحقق دخلًا من الاشتراك أو عمولة الرحلات وعقود المدارس", color: "#10B981" },
              { num: "٩", label: "خطة الاختبار", text: "نجرب الحركة في المسار، والتوقف أمام عائق، وتنبيه الانحراف، ورمز المستلم قبل إنهاء الرحلة", color: "#6366F1" },
              { num: "١٠", label: "قياس النجاح", text: "دقة الموقع، سرعة وصول التنبيه، نجاح التسليم الموثَّق، ووضوح الرحلة لولي الأمر", color: "#A855F7" },
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${((i % 3) + 1) * 100} bg-white rounded-2xl p-6 shadow-md border-r-4`}
                style={{ borderColor: item.color }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-black"
                    style={{ background: item.color }}>
                    {item.num}
                  </div>
                  <h4 className="font-black text-base" style={{ color: "#1E293B" }}>{item.label}</h4>
                </div>
                <p className="text-sm leading-loose" style={{ color: "#64748B" }}>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Core value */}
          <div className="reveal delay-400">
            <div className="rounded-3xl p-10 text-center shadow-2xl"
              style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)", color: "white" }}>
              <Star size={40} color="#FCD34D" className="mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black mb-3">القيمة الأساسية</h3>
              <p className="text-lg md:text-xl opacity-95">
                اطمئن يمنح ولي الأمر وقتًا وراحة بال، ويمنح الطفل فرصة الوصول إلى مواعيده بأمان 💜
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 px-8 text-center" style={{ background: "#0C4A6E", color: "white" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl font-black"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #2DD4BF)" }}>
            ط
          </div>
          <span className="text-2xl font-black">اطمئن</span>
        </div>
        <p className="text-sm opacity-70 mb-1">خدمة توصيل الأطفال الآمن في مصر</p>
        <p className="text-xs opacity-50">إعداد: حذيفة محمود | مشروع مسابقة DEMI 2026</p>
      </footer>
    </div>
  );
}
