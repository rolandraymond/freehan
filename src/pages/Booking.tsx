import { useRef, useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, MessageCircle, MapPin, Phone, MessageSquare, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
const services = [
  ['dermatology', 'الجلدية والليزر', 'Dermatology & Laser'],
  ['nutrition', 'التغذية العلاجية ونحت الجسم', 'Medical Nutrition & Body Contouring'],
  ['hair', 'زراعة وعلاج الشعر', 'Hair Transplantation & Treatment'],
  ['consultation', 'محتاج استشارة لاختيار الخدمة', 'Help me choose a service'],
];
const branches = [
  ['damietta', 'دمياط القديمة', 'Damietta'],
  ['new-damietta', 'دمياط الجديدة', 'New Damietta'],
];
const normalizeDigits = (value: string) => value
  .replace(/[٠-٩]/g, c => String('٠١٢٣٤٥٦٧٨٩'.indexOf(c)))
  .replace(/[۰-۹]/g, c => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(c)));
const normalizeName = (value: string) => value.normalize('NFC').trim().replace(/ +/g, ' ');
const normalizePhone = (value: string) => {
  let phone = normalizeDigits(value).trim().replace(/[ ()-]/g, '');
  if (phone.startsWith('+20')) phone = '0' + phone.slice(3);
  else if (phone.startsWith('0020')) phone = '0' + phone.slice(4);
  else if (/^201/.test(phone)) phone = '0' + phone.slice(2);
  return phone;
};
const validName = (value: string) => value.length >= 2 && value.length <= 100
  && /^[\p{L}][\p{L}\p{M}]*(?:[ '\u2019-][\p{L}][\p{L}\p{M}]*)*$/u.test(value)
  && (value.match(/\p{L}/gu) || []).length >= 2;
const validPhone = (value: string) => /^01[0125][0-9]{8}$/.test(value);
const validDate = (value: string) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + 'T12:00:00Z');
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
};
const localToday = () => {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Africa/Cairo', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  return ['year', 'month', 'day'].map(type => parts.find(part => part.type === type)?.value).join('-');
};
const validateFields = (data: FormData, ar: boolean) => {
  const errors: Record<string, string> = {};
  if (!validName(normalizeName(String(data.get('name') ?? '')))) errors.name = ar
    ? 'اكتب اسمك بحروف فقط، من 2 لـ100 حرف. المسافات والشرطة والفاصلة العليا مسموحين بين أجزاء الاسم.'
    : 'Enter a name of 2–100 characters using letters. Spaces, hyphens and apostrophes are allowed between name parts.';
  if (!validPhone(normalizePhone(String(data.get('phone') ?? '')))) errors.phone = ar
    ? 'اكتب موبايل مصري من 11 رقم يبدأ بـ010 أو 011 أو 012 أو 015. ممكن تضيف +20 بدل أول صفر.'
    : 'Enter an 11-digit Egyptian mobile starting with 010, 011, 012 or 015. You can use +20 instead of the first zero.';
  if (!services.some(item => item[0] === data.get('service'))) errors.service = ar ? 'اختار خدمة من القائمة.' : 'Choose a service from the list.';
  if (!branches.some(item => item[0] === data.get('branch'))) errors.branch = ar ? 'اختار فرع من القائمة.' : 'Choose a branch from the list.';
  const date = String(data.get('date') ?? '');
  if (!validDate(date) || date < localToday()) errors.date = ar ? 'اختار تاريخ صحيح: النهارده أو يوم جاي.' : 'Choose a valid date: today or a future day.';
  const notes = String(data.get('notes') ?? '');
  if (notes.length > 500 || /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u202A-\u202E\u2066-\u2069]/.test(notes)) errors.notes = ar ? 'الملاحظات بحد أقصى 500 حرف ومن غير رموز تحكم مخفية.' : 'Notes must be at most 500 characters without hidden control characters.';
  return errors;
};
const fieldClass = 'mt-2 w-full min-w-0 rounded-2xl border border-rose-200/80 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition-all focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-200/30 shadow-sm text-sm font-medium';

export default function BookingSection() {
  const { language } = useLanguage();
  const ar = language === 'ar';
  const reduceMotion = useReducedMotion();
  const ArrowIcon = ar ? ArrowLeft : ArrowRight;

  const branchCards = [
    {
      name: ar ? 'فرع دمياط القديمة' : 'Damietta Branch',
      address: ar ? 'الصفوة مول - برج 2 - الدور الخامس - شقة 8' : 'El Safwa Mall - Tower 2 - 5th Floor - Apt 8',
      phone: '015 5800 8278',
      phoneTel: '+201558008278',
      whatsapp: 'https://wa.me/201558008278',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('الصفوة مول دمياط برج 2'),
    },
    {
      name: ar ? 'فرع دمياط الجديدة' : 'New Damietta Branch',
      address: ar ? 'المنطقة المركزية - أعلى المصرف المتحد - بجوار المركز الطبي' : 'Central Area - Above United Bank - Next to Medical Center',
      phone: '015 0365 6589',
      phoneTel: '+201503656589',
      whatsapp: 'https://wa.me/201503656589',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('المنطقة المركزية المصرف المتحد دمياط الجديدة'),
    },
  ];

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const busy = useRef(false);
  const request = useRef({ fingerprint: '', id: '' });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (busy.current) return;
    setFieldErrors({});
    setWhatsappUrl('');
    const data = new FormData(event.currentTarget);
    const errors = validateFields(data, ar);
    setFieldErrors(errors);
    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      const field = event.currentTarget.elements.namedItem(firstInvalid);
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    if (String(data.get('website') ?? '')) return;
    const name = normalizeName(String(data.get('name') ?? ''));
    const normalized = normalizePhone(String(data.get('phone') ?? ''));
    const date = String(data.get('date') ?? '');
    const service = services.find(item => item[0] === data.get('service'));
    const branch = branches.find(item => item[0] === data.get('branch'));
    if (!service || !branch) return;
    const text = [
      ar ? 'طلب حجز من موقع Freehan' : 'Freehan website appointment request',
      `${ar ? 'الاسم' : 'Name'}: ${name}`,
      `${ar ? 'الموبايل' : 'Phone'}: ${normalized}`,
      `${ar ? 'الخدمة' : 'Service'}: ${service[ar ? 1 : 2]}`,
      `${ar ? 'الفرع' : 'Branch'}: ${branch[ar ? 1 : 2]}`,
      `${ar ? 'اليوم المفضل' : 'Preferred day'}: ${date}`,
      `${ar ? 'ملاحظات' : 'Notes'}: ${String(data.get('notes') ?? '').trim() || '—'}`,
      ar ? 'في انتظار تأكيد الموعد من فريق العيادة.' : 'Awaiting appointment confirmation from the clinic.',
    ].join('\n');
    const url = `https://wa.me/201503656589?text=${encodeURIComponent(text)}`;
    setWhatsappUrl(url);
    busy.current = true;
    setSending(true);
    let timer: number | undefined;
    try {
      const endpoint = import.meta.env.VITE_BOOKING_SCRIPT_URL?.trim();
      if (!endpoint || !/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(endpoint)) {
        throw new Error('Booking endpoint not configured');
      }
      const payload = {
        site: 'freehan',
        name, phone: normalized, date, service: service[0], branch: branch[0],
        notes: String(data.get('notes') ?? '').trim(),
        website: String(data.get('website') ?? ''),
      };
      const fingerprint = JSON.stringify(payload);
      if (request.current.fingerprint !== fingerprint) {
        request.current = { fingerprint, id: crypto.randomUUID() };
      }
      const requestId = request.current.id;
      const controller = new AbortController();
      // A slow/unavailable sheet must not keep the visitor waiting indefinitely.
      timer = window.setTimeout(() => controller.abort(), 8000);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        credentials: 'omit',
        redirect: 'follow',
        body: JSON.stringify({ ...payload, requestId }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true || result.requestId !== requestId) {
        throw new Error('Sheet save not confirmed');
      }
    } catch {
      // No customer-facing sheet errors or false claims that the request was saved.
      // No form data is logged. Keep the same request ID for an eventual retry.
      console.warn('[booking] Sheet save not confirmed; continuing to WhatsApp.');
    } finally {
      if (timer !== undefined) window.clearTimeout(timer);
      busy.current = false;
      setSending(false);
      // Always continue after the save attempt, even on network/config/server errors.
      try {
        window.location.assign(url);
      } catch {
        // Keep the visible WhatsApp link if navigation is blocked by the browser.
      }
    }
  };
  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      id="booking" 
      dir={ar ? 'rtl' : 'ltr'} 
      className="relative min-h-screen bg-gradient-to-b from-[#fffaf7] via-[#faf2ec] to-[#f5e9df] px-4 pt-36 pb-24 sm:px-6 sm:pt-44 lg:pt-48 overflow-hidden font-cairo"
    >
      {/* Soft Feminine Ambient Lighting & Glows */}
      <div className="absolute top-10 start-1/4 w-[35vw] h-[35vw] bg-rose-200/40 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 end-10 w-[40vw] h-[40vw] bg-amber-100/50 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8b4a008_1px,transparent_1px),linear-gradient(to_bottom,#e8b4a008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        
        {/* Left Information Column */}
        <motion.div 
          initial={reduceMotion ? false : { opacity: 0, y: 16 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, ease: 'easeOut' }} 
          className="lg:pt-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200/70 text-rose-800 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <CalendarDays className="w-4 h-4 text-rose-600" />
            <span>FREEHAN CLINIC</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 font-cairo">
            {ar ? 'خطوتك الأولى ' : 'Your first step '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-rose-600 to-amber-700">
              {ar ? 'تبدأ من هنا' : 'starts here'}
            </span>
          </h2>
          
          <p className="mt-5 text-slate-600 text-sm sm:text-base leading-relaxed">
            {ar 
              ? 'اختار الخدمة والفرع واليوم المناسب ليك. هنفتح واتساب برسالة جاهزة ببياناتك؛ اضغط إرسال هناك وفريقنا هيأكد معاك الموعد بأسرع وقت.' 
              : 'Choose your service, branch and preferred day. We will open a WhatsApp draft with your details. Press Send there and our team will confirm your appointment.'}
          </p>
          
          <div className="mt-6">
            <p className="font-semibold text-slate-900">{ar ? 'يوميًا من 1 ظهرًا لـ1 صباحًا' : 'Daily from 1 PM to 1 AM'}</p>
            <a href="tel:+201503656589" dir="ltr" className="mt-1.5 inline-block font-bold text-rose-700 hover:text-rose-800 underline underline-offset-4">
              01503656589
            </a>
          </div>

          {/* Branch Location Cards */}
          <div className="mt-8 space-y-4">
            {branchCards.map((branch, index) => (
              <div 
                key={index} 
                className="p-6 rounded-3xl bg-white/95 backdrop-blur-xl border border-rose-100 hover:border-rose-300 shadow-sm hover:shadow-[0_10px_25px_rgba(244,63,94,0.06)] transition-all text-start"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-slate-900 font-cairo">
                    {branch.name}
                  </h4>
                  <a 
                    href={branch.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>{ar ? 'الاتجاهات للعيادة' : 'Directions'}</span>
                    <ArrowIcon className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5 text-rose-500">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-relaxed pt-0.5 font-medium">{branch.address}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 ps-8">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Phone className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <a href={`tel:${branch.phoneTel}`} dir="ltr" className="hover:text-rose-600 transition-colors font-bold text-slate-800">
                        <span>{branch.phone}</span>
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <a href={branch.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 font-bold transition-colors">
                        <span dir="ltr">{branch.phone}</span> ({ar ? 'واتساب' : 'WhatsApp'})
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Form Column */}
        <motion.form 
          initial={reduceMotion ? false : { opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08, ease: 'easeOut' }} 
          noValidate 
          onChange={(event) => {
            if (busy.current) return;
            setWhatsappUrl('');
            const field = event.target as HTMLInputElement;
            const errors = validateFields(new FormData(event.currentTarget), ar);
            setFieldErrors(previous => ({ ...previous, [field.name]: previous[field.name] ? (errors[field.name] || '') : '' }));
          }} 
          onBlur={(event) => {
            if (busy.current) return;
            const field = event.target as HTMLInputElement;
            if (!['name', 'phone', 'service', 'branch', 'date', 'notes'].includes(field.name)) return;
            if (field.name === 'name') field.value = normalizeName(field.value);
            if (field.name === 'phone') field.value = normalizePhone(field.value);
            const errors = validateFields(new FormData(event.currentTarget), ar);
            setFieldErrors(previous => ({ ...previous, [field.name]: errors[field.name] || '' }));
          }} 
          onSubmit={handleSubmit} 
          className="min-w-0 rounded-[2.5rem] border border-rose-200/80 bg-white/95 backdrop-blur-xl p-6 sm:p-10 shadow-xl shadow-rose-950/5"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-rose-100">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-cairo">
                {ar ? 'طلب حجز موعد' : 'Request an appointment'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {ar ? 'املئي البيانات وسيتم تحويلك مباشرة للواتساب' : 'Fill in the details to proceed to WhatsApp'}
              </p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-400 text-white flex items-center justify-center shadow-md">
              <CalendarDays className="w-5 h-5" />
            </div>
          </div>

          <fieldset disabled={sending} className="grid min-w-0 gap-5 sm:grid-cols-2">
            <div className="hidden" aria-hidden="true">
              <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>
            
            <label className="text-xs sm:text-sm font-bold text-slate-800">
              {ar ? 'الاسم *' : 'Full name *'}
              <input 
                name="name" 
                aria-invalid={Boolean(fieldErrors.name)} 
                aria-describedby={fieldErrors.name ? "booking-name-error" : undefined} 
                autoComplete="name" 
                required 
                minLength={2} 
                maxLength={100} 
                placeholder={ar ? 'اكتبي اسمك بالكامل' : 'Your full name'}
                className={`${fieldClass} ${fieldErrors.name ? "border-red-500 focus:border-red-500" : ""}`} 
              />
              {fieldErrors.name && <span id="booking-name-error" role="alert" className="mt-2 block text-xs leading-5 text-red-600 font-medium">{fieldErrors.name}</span>}
            </label>

            <label className="text-xs sm:text-sm font-bold text-slate-800">
              {ar ? 'رقم الموبايل *' : 'Mobile number *'}
              <input 
                name="phone" 
                aria-invalid={Boolean(fieldErrors.phone)} 
                aria-describedby={fieldErrors.phone ? "booking-phone-error" : undefined} 
                type="tel" 
                inputMode="tel" 
                placeholder="01012345678" 
                autoComplete="tel" 
                dir="ltr" 
                required 
                maxLength={25} 
                className={`${fieldClass} ${fieldErrors.phone ? "border-red-500 focus:border-red-500" : ""}`} 
              />
              {fieldErrors.phone && <span id="booking-phone-error" role="alert" className="mt-2 block text-xs leading-5 text-red-600 font-medium">{fieldErrors.phone}</span>}
            </label>

            <label className="text-xs sm:text-sm font-bold text-slate-800">
              {ar ? 'الخدمة *' : 'Service *'}
              <select 
                name="service" 
                aria-invalid={Boolean(fieldErrors.service)} 
                aria-describedby={fieldErrors.service ? "booking-service-error" : undefined} 
                required 
                defaultValue="" 
                className={`${fieldClass} ${fieldErrors.service ? "border-red-500 focus:border-red-500" : ""}`}
              >
                <option value="" disabled>{ar ? 'اختار الخدمة' : 'Choose a service'}</option>
                {services.map(([id, arabic, english]) => <option key={id} value={id}>{ar ? arabic : english}</option>)}
              </select>
              {fieldErrors.service && <span id="booking-service-error" role="alert" className="mt-2 block text-xs leading-5 text-red-600 font-medium">{fieldErrors.service}</span>}
            </label>

            <label className="text-xs sm:text-sm font-bold text-slate-800">
              {ar ? 'الفرع *' : 'Branch *'}
              <select 
                name="branch" 
                aria-invalid={Boolean(fieldErrors.branch)} 
                aria-describedby={fieldErrors.branch ? "booking-branch-error" : undefined} 
                required 
                defaultValue="" 
                className={`${fieldClass} ${fieldErrors.branch ? "border-red-500 focus:border-red-500" : ""}`}
              >
                <option value="" disabled>{ar ? 'اختار الفرع' : 'Choose a branch'}</option>
                {branches.map(([id, arabic, english]) => <option key={id} value={id}>{ar ? arabic : english}</option>)}
              </select>
              {fieldErrors.branch && <span id="booking-branch-error" role="alert" className="mt-2 block text-xs leading-5 text-red-600 font-medium">{fieldErrors.branch}</span>}
            </label>

            <label className="text-xs sm:text-sm font-bold text-slate-800 sm:col-span-2">
              {ar ? 'اليوم المفضل *' : 'Preferred day *'}
              <input 
                name="date" 
                aria-invalid={Boolean(fieldErrors.date)} 
                aria-describedby={fieldErrors.date ? "booking-date-error" : undefined} 
                type="date" 
                required 
                min={localToday()} 
                className={`${fieldClass} ${fieldErrors.date ? "border-red-500 focus:border-red-500" : ""}`} 
              />
              {fieldErrors.date && <span id="booking-date-error" role="alert" className="mt-2 block text-xs leading-5 text-red-600 font-medium">{fieldErrors.date}</span>}
            </label>

            <label className="text-xs sm:text-sm font-bold text-slate-800 sm:col-span-2">
              {ar ? 'ملاحظات (اختياري)' : 'Notes (optional)'}
              <textarea 
                name="notes" 
                aria-invalid={Boolean(fieldErrors.notes)} 
                aria-describedby={fieldErrors.notes ? "booking-notes-error" : undefined} 
                rows={3} 
                maxLength={500} 
                placeholder={ar ? 'أي استفسار أو تفاصيل إضافية تحبين توضيحها...' : 'Any additional notes or questions...'}
                className={`${fieldClass} ${fieldErrors.notes ? "border-red-500 focus:border-red-500" : ""}`} 
              />
              {fieldErrors.notes && <span id="booking-notes-error" role="alert" className="mt-2 block text-xs leading-5 text-red-600 font-medium">{fieldErrors.notes}</span>}
            </label>
          </fieldset>

          {whatsappUrl && !sending && (
            <a 
              href={whatsappUrl} 
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-rose-300 bg-rose-50/70 px-5 py-3.5 font-bold text-rose-900 hover:bg-rose-100 transition-colors shadow-sm"
            >
              <MessageCircle size={20} className="text-rose-600" />
              <span>{ar ? 'كمّل على واتساب' : 'Continue on WhatsApp'}</span>
            </a>
          )}

          <p className="my-5 text-[11px] sm:text-xs leading-relaxed text-slate-500">
            {ar 
              ? 'بالضغط على الزر، بتوافق نسجّل بيانات طلبك ونتواصل معاك بخصوص الحجز. بعد فتح واتساب، اضغط إرسال؛ الرسالة مش بتتبعت تلقائيًا.' 
              : 'By continuing, you agree to have your request details saved and to be contacted about your booking. Press Send once WhatsApp opens; the message is not sent automatically.'}
          </p>

          <button 
            type="submit" 
            disabled={sending} 
            aria-busy={sending} 
            className="disabled:opacity-60 disabled:cursor-wait flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 hover:from-rose-900 hover:via-rose-800 hover:to-rose-900 px-6 py-4 font-bold text-white shadow-xl shadow-rose-950/15 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-sm tracking-wide"
          >
            <MessageCircle size={20} className="text-rose-400" />
            <span>{sending ? (ar ? 'جاري فتح واتساب...' : 'Opening WhatsApp...') : (ar ? 'كمّل الحجز على واتساب' : 'Continue booking on WhatsApp')}</span>
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}
