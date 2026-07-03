/* ============================================================
   apps-config.js
   ------------------------------------------------------------
   هذا الملف هو المكان الوحيد الذي تحتاج تعديله لتفعيل أو إضافة
   أداة جديدة في لوحة AHA Systems. لا حاجة لفتح أو تعديل index.html
   أبداً بعد اليوم.

   لتفعيل أداة "قريباً":
     1) غيّر status من 'soon' إلى 'ready'
     2) ضع رابط الملف في link (مثال: 'invoice.html')
     3) احفظ وارفع الملف فقط — هيك بس.

   لإضافة أداة جديدة بالكامل:
     - انسخ أي عنصر من مصفوفة APPS وعدّل قيمه، وأضفه للمصفوفة.

   حقول كل أداة:
     category   : 'tools' | 'projects' | 'services'
     name       : اسم الأداة (يُستخدم أيضاً في البحث)
     icon       : إيموجي الأيقونة
     tile       : لون الأيقونة (tile-c1 إلى tile-c6)
     desc       : وصف مختصر
     status     : 'ready' (جاهزة) | 'soon' (قريباً) | 'live' (نظام تشغيلي) | 'service' (خدمة)
     link       : رابط الملف أو null إن لم يوجد
     linkText   : نص الرابط الظاهر للمستخدم
   ============================================================ */

const APPS = [
  {
    category: 'tools', name: 'مولّد السيرة الذاتية', icon: '📄', tile: 'tile-c1',
    desc: 'املأ بياناتك الأساسية واحصل على سيرة ذاتية احترافية وحديثة، جاهزة للطباعة أو التحميل كـ PDF مباشرة.',
    status: 'ready', link: 'cv.html', linkText: 'افتح الأداة ←'
  },
  {
    category: 'tools', name: 'حاسبة الزكاة الشاملة', icon: '🕌', tile: 'tile-c2',
    desc: 'احسب زكاة الذهب والفضة والنقود وعروض التجارة والزروع والأنعام بدقة، مع مرجع شرعي موثّق لكل باب.',
    status: 'ready', link: 'zakat.html', linkText: 'افتح الأداة ←'
  },
  {
    category: 'tools', name: 'مولّد حالات واتساب وانستا', icon: '📱', tile: 'tile-c3',
    desc: 'صمّم صورة جاهزة للمشاركة: خلفيات دينية احترافية جاهزة، أو معلومة محاسبية وترفيهية متجددة — بضغطة واحدة.',
    status: 'ready', link: 'status.html', linkText: 'افتح الأداة ←'
  },
  {
    category: 'tools', name: 'مولّد الفواتير', icon: '🧾', tile: 'tile-c4',
    desc: 'أنشئ فاتورة احترافية جاهزة للطباعة خلال ثوانٍ، لأصحاب المحال والمشاريع الصغيرة.',
    status: 'soon', link: null, linkText: 'قريباً ←'
  },
  {
    category: 'projects', name: 'CredNote — مفكرة الائتمان', icon: '💳', tile: 'tile-c5',
    desc: 'بوت وتطبيق ويب لإدارة الديون والائتمان للتجار، مع حاسبة زكاة مدمجة.',
    status: 'live', link: null, linkText: 'تفاصيل ومراسلة ←'
  },
  {
    category: 'projects', name: 'نظام سلفة', icon: '💰', tile: 'tile-c6',
    desc: 'تطبيق Telegram Mini App لإدارة سلف المشاريع لعدة عملاء (Multi-tenant) بمزامنة كاملة مع جوجل شيت.',
    status: 'live', link: 'selfa.html', linkText: 'تفاصيل ومراسلة ←'
  },
  {
    category: 'projects', name: 'إدارة ورشات PVC', icon: '🚪', tile: 'tile-c4',
    desc: 'نظام جوجل شيت لإدارة ورشات تجميع وتشكيل أبواب وواجهات PVC، من متابعة الإنتاج إلى الجاهزية للتسليم.',
    status: 'live', link: null, linkText: 'تفاصيل ومراسلة ←'
  },
  {
    category: 'projects', name: 'RIS — نظام مراكز الأشعة', icon: '🩻', tile: 'tile-c1',
    desc: 'نظام إدارة كامل لمراكز الأشعة، مربوط ببوت تيليغرام بذكاء اصطناعي يجاوب مباشرة من بيانات النظام.',
    status: 'live', link: null, linkText: 'تفاصيل ومراسلة ←'
  },
  {
    category: 'projects', name: 'CashOnHand — يومية الصندوق الذكية', icon: '💵', tile: 'tile-c2',
    desc: 'دفتر يومية صندوق ذكي ومؤتمت بالكامل عبر بوت تيليغرام وجوجل شيت، بدون إدخال يدوي معقّد.',
    status: 'live', link: null, linkText: 'تفاصيل ومراسلة ←'
  },
  {
    category: 'services', name: 'برنامج X-per', icon: '🎓', tile: 'tile-c3',
    desc: 'نقدّم خدمة تجهيز وتدريب على برنامج المحاسبة X-per — نظام ERP سحابي معتمد في السوق العربية والدولية.',
    status: 'service', link: null, linkText: 'استفسر عن الخدمة ←'
  }
];
