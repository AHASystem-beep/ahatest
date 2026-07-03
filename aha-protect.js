/*!
 * ============================================================
 *  AHA Systems — نظام الحماية والتوقيع الموحّد (aha-protect.js)
 *  © AHA_Accounting. جميع الحقوق محفوظة.
 *  يُمنع نسخ أو إعادة نشر هذا الكود أو أي أداة من أدوات هذه
 *  المنصة دون إذن خطي صريح من صاحب الحقوق.
 *  المصدر الرسمي: https://ahasystem-beep.github.io/ahatest/
 * ------------------------------------------------------------
 *  هذا الملف مشترك بين كل صفحات المنصة. أضِفه لأي ملف HTML جديد
 *  بسطر واحد فقط، أول شيء داخل <head>:
 *      <script src="aha-protect.js"></script>
 *  لا حاجة لأي تعديل إضافي — ولا تكرّر هذا الكود داخل الملفات.
 *
 *  لتغيير النطاق المصرّح له مستقبلاً (مثلاً لو ضفت نطاقاً مخصصاً)
 *  عدّل فقط مصفوفة ALLOWED_HOSTS بالأسفل.
 * ============================================================
 */
(function () {
  "use strict";

  var ALLOWED_HOSTS = [
    "ahasystem-beep.github.io", // النطاق الرسمي الحالي
    "localhost",                // للتجربة المحلية
    "127.0.0.1",                // للتجربة المحلية
    ""                          // فتح الملف مباشرة من الجهاز (file://)
  ];
  var CANONICAL_URL = "https://ahasystem-beep.github.io/ahatest/";

  var host = window.location.hostname;
  var isAllowed = ALLOWED_HOSTS.indexOf(host) !== -1;

  if (!isAllowed) {
    try { if (window.stop) window.stop(); } catch (e) {}
    document.documentElement.innerHTML =
      '<head><meta charset="utf-8"><title>AHA Systems</title></head>' +
      '<body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;' +
      'background:#F2F1F5;font-family:Tajawal,Cairo,sans-serif;direction:rtl;text-align:center;padding:30px;">' +
      '<div style="max-width:480px;">' +
      '<div style="font-size:3rem;margin-bottom:12px;">🔒</div>' +
      '<h1 style="color:#714B67;font-size:1.4rem;margin-bottom:10px;">هذه أداة أصلية من AHA Systems</h1>' +
      '<p style="color:#6B6570;line-height:1.8;margin-bottom:18px;">تم رصد هذا الكود يعمل من نطاق غير مصرّح له. ' +
      'يمكنك استخدام الأداة الأصلية مجاناً من الرابط الرسمي:</p>' +
      '<a href="' + CANONICAL_URL + '" style="display:inline-block;background:#714B67;color:#fff;' +
      'padding:12px 26px;border-radius:999px;text-decoration:none;font-weight:700;">فتح الموقع الرسمي ←</a>' +
      '</div></body>';
    throw new Error("AHA Systems: unauthorized domain — execution halted.");
  }

  try {
    console.log(
      "%cAHA Systems %c| AHA_Accounting",
      "color:#714B67;font-weight:bold;font-size:14px;",
      "color:#00A09D;font-weight:bold;font-size:14px;"
    );
    console.log(
      "%cهذا الكود محمي وموقّع رقمياً — المصدر الرسمي: " + CANONICAL_URL,
      "color:#6B6570;font-size:11px;"
    );
    console.log(
      "%cجميع الحقوق محفوظة © AHA_Accounting — يُمنع النسخ أو إعادة النشر دون إذن.",
      "color:#6B6570;font-size:11px;"
    );
  } catch (e) {}
})();
