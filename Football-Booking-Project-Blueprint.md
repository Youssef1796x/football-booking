# Football Booking — Project Blueprint

> وثيقة مرجعية للمشروع. الهدف منها أنها تكون نقطة انطلاق واضحة يمكن الرجوع إليها لاحقًا، أو إرسالها لأي AI آخر ليفهم المشروع بسرعة.

---

## 1. Project Overview

موقع ويب + نظام حجز مخصص لملعب كرة قدم / منشأة رياضية واحدة في مصر. المشروع ليس Marketplace عام لحجز الملاعب، بل **Template قابل لإعادة الاستخدام** يتم بناؤه مرة واحدة ثم تخصيصه وبيعه لكل صاحب ملعب على حدة (Name, Logo, Colors, Pitches, Prices, Location...).

الموقع: **Arabic-first / RTL / Mobile-first**، ويجمع بين موقع رسمي للملعب ونظام حجز و Admin Dashboard في مكان واحد.

---

## 2. Problem

أصحاب الملاعب حاليًا يديرون الحجز عبر المكالمات، WhatsApp، وتحويل العربون يدويًا، وأحيانًا دفاتر ورقية. هذا يؤدي إلى:

- إضاعة وقت في الرد على المكالمات والرسائل المتكررة
- لخبطة في المواعيد
- Double booking
- صعوبة معرفة الـ availability في أي لحظة

---

## 3. Solution

نظام حجز إلكتروني بسيط ومباشر: اللاعب يشوف المواعيد المتاحة، يختار، يرفع إثبات العربون، ويستنى موافقة صاحب الملعب. صاحب الملعب يدير كل حاجة من Dashboard واحد: يوافق/يرفض، يقفل مواعيد، يدير الأسعار.

القيمة الأساسية: تقليل المكالمات والفوضى، مع موقع احترافي يخص الملعب نفسه (مش تطبيق حجز عام).

---

## 4. Target Users

| المستخدم | الوصف |
|---|---|
| **اللاعب / العميل** | يحجز بدون تسجيل حساب، يدخل من الموبايل غالبًا |
| **صاحب الملعب** | يدير الحجوزات والمواعيد والأسعار من Dashboard آمن |

> *(العميل المقصود بالمشروع نفسه — Business Model — هو صاحب الملعب، مش اللاعب.)*

---

## 5. Value Proposition

**«Custom Website + Booking System for Football Venues»**

- Simple — سهل الاستخدام لصاحب الملعب واللاعب
- Custom — كل موقع مخصص لصاحب ملعب معين (اسمه، لونه، ملاعبه)
- Local — مبني لسوق مصر تحديدًا
- Fast Setup — تجهيز وتسليم سريع
- Venue-owned Website — الملعب عنده موقعه الرسمي، مش مجرد صفحة داخل تطبيق كبير

---

## 6. User Flow (اللاعب)

```
Home
 → Choose Date
 → Choose Pitch
 → Choose Time
 → Choose Duration
 → Enter Booking Details (اسم، رقم هاتف، مرجع التحويل)
 → Submit Deposit Proof (Screenshot)
 → Pending
 → (Admin Review)
 → Confirmed / Rejected
```

لا يوجد تسجيل حساب للاعب في الـ MVP.

---

## 7. Admin Flow (صاحب الملعب)

Dashboard منفصل وآمن (Login خاص بالأدمن فقط) يسمح بـ:

- عرض ومراجعة الحجوزات (خصوصًا Pending)
- Approve / Reject
- إدارة الـ slots: فتح / إغلاق موعد أو يوم كامل
- تصنيف حالة الموعد: **Available / Booked / Blocked**
  - الـ Blocked ممكن يكون بسبب: Academy, Training, Maintenance, Event, أو أي استخدام تاني
- إدارة الملاعب والأسعار
- تعديل معلومات الموقع العامة

**قاعدة أساسية: منع Double Booking بشكل كامل.**

---

## 8. Page Structure

الموقع العام مش مجرد فورم حجز، لازم يحس الزائر إنه داخل موقع رسمي للملعب:

- Home
- About / Info
- Booking (الحجز نفسه)
- Location / Map
- Contact (Phone, WhatsApp, Social Media)
- Images / Facilities

---

## 9. MVP Scope

### Must Have
- Public venue website
- Booking flow كامل (Date → Pitch → Time → Duration)
- Calendar / Availability view
- Booking form
- رفع إثبات العربون (Deposit proof)
- حالات الحجز: Pending / Confirmed / Rejected
- Admin login
- Admin dashboard
- إدارة الـ Availability (فتح/غلق مواعيد وأيام)

### Later (خارج الـ MVP)
- بوابات دفع إلكتروني (Online payment gateways)
- WhatsApp automation
- Notifications
- Analytics
- فروع متعددة (Multiple branches)
- تسعير متقدم (Advanced pricing)
- حسابات لاعبين (Player accounts)
- Reviews
- تطبيق موبايل
- Marketplace عام

---

## 10. Design Direction

- **الطابع:** Modern / Clean / Sporty / Premium
- تجربة استخدام سهلة وسريعة، مش مملة
- CTA واضح للحجز في كل مكان مناسب
- Calendar و Slots واضحين بصريًا (الفرق بين Available/Booked/Blocked لازم يكون واضح بنظرة واحدة)
- **Mobile-first** بشكل صارم — أغلب اللاعبين هيحجزوا من الموبايل
- **RTL** كامل
- الأولوية: الوضوح > السرعة > الـ reliability > الشكل الجمالي
- *Hypothesis:* ممكن يتضاف Light/Dark Mode لو مش هيسبب تعقيد زيادة عن اللازم — قرار غير محسوم بعد

---

## 11. Technical Architecture

| الطبقة | التقنية |
|---|---|
| Frontend | Next.js + TypeScript + Tailwind CSS |
| Backend / DB / Auth / Storage | Supabase |
| Hosting | Vercel |
| Version Control | GitHub |

ملاحظات:
- المطور Beginner جدًا في الـ Backend → الـ Architecture لازم تكون بسيطة وقابلة للتعلم منها خطوة بخطوة، مش معقدة من الأول
- لا يوجد Player Login في الـ MVP — كل حاجة عن طريق فورم بدون حساب
- Supabase Auth تُستخدم فقط لتسجيل دخول الأدمن، مش اللاعبين

---

## 12. Business Model

**النموذج الحالي:** One-time setup + customization + deployment لكل عميل (صاحب ملعب)، مبني على Template واحد بيتم تخصيصه (الاسم، اللوجو، الصور، الألوان، الملاعب، الأسعار، الـ Availability، الموقع الجغرافي، بيانات التواصل، السوشيال ميديا).

- *Hypothesis:* السعر المبدئي حوالي 2700–3000 جنيه مصري — **رقم تقريبي غير نهائي**، محتاج Validation من السوق
- إضافات محتملة لاحقًا (غير مؤكدة بعد): Maintenance, Support, Paid features, Automations, Recurring services

---

## 13. Validation / Sales

خطة البيع الأولية:

- Facebook و Facebook Groups
- Instagram
- Direct Messages
- تواصل مباشر مع أصحاب الملاعب

**أسئلة لازم يتم التحقق منها فعليًا قبل التوسع:**
- هل المشكلة (الفوضى في الحجز) مؤلمة فعلًا لصاحب الملعب؟
- هل هو فعلاً يرى قيمة في الحل؟
- هل سيستخدم النظام باستمرار بعد التسليم؟
- هل سيدفع فعلاً مقابل setup مخصص؟

---

## 14. Future Roadmap

مرتبة تقريبيًا حسب الأولوية المتوقعة بعد الـ MVP والـ Validation:

1. بوابة دفع إلكتروني حقيقية
2. Notifications (SMS / WhatsApp / Email)
3. WhatsApp automation
4. Analytics لصاحب الملعب
5. فروع متعددة لنفس المالك
6. تسعير متقدم (خصومات، مواسم، عروض)
7. حسابات لاعبين + Reviews
8. تطبيق موبايل
9. *(بعيد المدى، غير مؤكد)* التحول لـ Marketplace عام

---

## 15. Risks

- **Scope creep:** الميل لإضافة Features كثيرة قبل التأكد إن الأساسي شغال ومطلوب
- **Manual verification risk:** التحقق من إثبات العربون (Screenshot) يدوي في البداية — عرضة للأخطاء البشرية والاحتيال البسيط
- **Learning curve:** كون المطور مبتدئ في Backend قد يبطّئ التسليم أو يسبب قرارات معمارية غير مثالية في البداية
- **Sales risk:** مفيش تأكيد بعد إن أصحاب الملاعب مستعدين يدفعوا فعليًا — لازم Validation قبل استثمار وقت كبير في features إضافية
- **Double booking bug:** لو الـ logic بتاع منع التعارض مش دقيق، ده بيهدم الثقة في النظام بالكامل من أول استخدام

---

## What We Do Next

خطوات عملية بالترتيب، من دلوقتي لحد أول Demo:

1. **تجهيز بيانات عميل واحد وهمي أو حقيقي** (اسم ملعب، ملاعب، أسعار، صور placeholder) عشان يبقى فيه محتوى حقيقي نبني عليه
2. **إعداد المشروع التقني الأساسي:** Next.js + TypeScript + Tailwind على GitHub، وربطه بـ Vercel
3. **إعداد Supabase:** إنشاء الـ Database الأساسي (Pitches, Bookings, Slots) + Admin Auth + Storage لصور الإثبات
4. **بناء الصفحة العامة (Public Site)** بالأقسام المذكورة في Page Structure، بمحتوى العميل التجريبي
5. **بناء Booking Flow** الكامل خطوة بخطوة (Date → Pitch → Time → Duration → Form → Upload → Pending)
6. **بناء Admin Dashboard** الأساسي: عرض الحجوزات، Approve/Reject، إدارة الـ Availability
7. **اختبار منع الـ Double Booking** بعناية (ده أهم جزء تقني في المشروع)
8. **تجربة كاملة End-to-End** كأنك لاعب حقيقي، ثم كأنك صاحب ملعب
9. **تجهيز أول Demo** قابل للعرض لصاحب ملعب حقيقي محتمل
10. **البدء في التواصل الفعلي** (Facebook/Instagram/DMs) لعرض الـ Demo وجمع Feedback حقيقي قبل أي تطوير إضافي
