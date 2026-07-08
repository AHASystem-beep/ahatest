/*!
 * AHA Systems © AHA_Accounting — جميع الحقوق محفوظة.
 * ============================================================
 * jsbarcode-loader.js  —  ملف وسيط لتحميل مكتبة JsBarcode
 * ------------------------------------------------------------
 * الهدف: تحميل مكتبة JsBarcode بشكل مضمون دون الاعتماد الكامل
 * على CDN خارجي قد يُحجب أو يتعطل عند بعض الزوار.
 *
 * آلية العمل:
 *  1) نحاول أولاً تحميل النسخة المحلية "JsBarcode_all_min.js"
 *     الموجودة في نفس المستودع (لا تعتمد على أي خادم خارجي).
 *  2) إن فشل التحميل المحلي لأي سبب (اسم ملف خاطئ، حذف بالخطأ...)
 *     نحاول تلقائياً التحميل من CDN كخطة بديلة فقط.
 *
 * لن تحتاج لفتح barcode.html مطلقاً بعد اليوم لتغيير مصدر المكتبة؛
 * كل التحكم من هذا الملف فقط (غيّر LOCAL_PATH أو CDN_FALLBACK هنا).
 * ============================================================
 */
(function () {
  var LOCAL_PATH   = 'JsBarcode_all_min.js';
  var CDN_FALLBACK = 'https://cdnjs.cloudflare.com/ajax/libs/JsBarcode/3.11.5/JsBarcode.all.min.js';

  var currentScript = document.currentScript;

  function insertScript(src, onerror) {
    var s = document.createElement('script');
    s.src = src;
    s.async = false; // يحافظ على ترتيب التنفيذ قبل باقي أكواد الصفحة
    if (onerror) s.onerror = onerror;
    currentScript.parentNode.insertBefore(s, currentScript.nextSibling);
  }

  insertScript(LOCAL_PATH, function () {
    console.warn('AHA Systems: تعذر تحميل مكتبة JsBarcode المحلية (' + LOCAL_PATH + ')، جاري المحاولة عبر CDN...');
    insertScript(CDN_FALLBACK, function () {
      console.error('AHA Systems: تعذر تحميل مكتبة JsBarcode من المصدرين المحلي والـCDN. لن تعمل أداة الباركود.');
    });
  });
})();
