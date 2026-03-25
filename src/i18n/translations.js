const translations = {
  en: {
    auth: {
      login: "Login",
      passport: "Passport Number",
      passportPlaceholder: "EV 418192",
      phone: "Phone Number",
      phonePlaceholder: "+97 XXX XXX XX XX",
      password: "Password",
      passwordPlaceholder: "Password",
      forgotPassword: "Forgot Password?",
      passportError: "Invalid passport number",
      phoneError: "Invalid phone number",
      passwordError: "Password is too short",
      errorEmptyFields: "Please fill in all fields",
      pilgrimRole: "Pilgrim",
      fieldworkerRole: "Fieldworker"
    },
    group: {
      makkahCity: "Makkah City",
      hotelName: "Makkah Royal\nClock Tower",
      groupNumber: "Group\nNumber",
      roomNumber: "Room\nNumber",
      groupInformation: "Group Information",
      roomInformation: "Room Information",
      swipe: "Swipe",
      roomTag: "Room",
      groupTag: "Group",
      contact: "Contact",
      message: "Message",
      messages: "Messages",
      groupLeader: "Group Leader",
      groupMember: "Group Member",
      important: "Important",
      reportTime: "Report at 10:00AM tomorrow.",
      startTyping: "Start Typing..."
    },
    forgot: {
      title: "Create Your New Password",
      newPassword: "Enter New Password",
      confirmPassword: "Re- Enter New Password",
      placeholder: "e.g Dynamos@123",
      validateName: "Must not contain your name or email",
      validateLength: "At least 8 characters",
      validateSymbol: "Contains a symbol or a number",
      continue: "Continue",
      back: "Go to Previous Page"
    },
    success: {
      title: "Password Updated",
      message: "Your password has been updated successfully!",
      login: "Login"
    },
    onboarding: {
      sos: {
        title: "SOS Button",
        subtitle: "If you feel lost or unwell, press SOS and help will come."
      },
      health: {
        title: "Health Safety",
        subtitle: "Your medical information helps doctors treat you safely and quickly."
      },
      guidance: {
        title: "Guidance",
        subtitle: "You will always know where you are and what to do next."
      },
      support: {
        title: "Support",
        subtitle: "This app helps keep you safe, healthy, and guided during your journey."
      },
      swipe: "Swipe >",
      continue: "Click anywhere to continue"
    },
    tabs: {
      home: "Home",
      map: "Map",
      rituals: "Rituals",
      health: "Health",
      group: "Group"
    },
    visa: {
      title: "Your Visa",
      surname: "Surname",
      visaNumber: "Visa Number",
      entries: "No. of Entries",
      dateIssued: "Date Issued",
      visaType: "Visa Type",
      validity: "Validity"
    },
    passportDetail: {
      title: "Your Passport",
      surname: "Surname",
      firstName: "First Name",
      sex: "Sex",
      nationality: "Nationality",
      passportNumber: "Passport Number",
      dob: "DOB"
    },
    vaccineDetail: {
      title: "Vaccination Record",
      vaccination: "Vaccination",
      disease: "Disease(s) protected against:",
      doseNumber: "Dose number:",
      ageAtVaccination: "Age at vaccination:",
      manufacturer: "Manufacturer:",
      batchNumber: "Batch number:",
      vaccinationCenter: "Vaccination center:",
      nextDueDate: "Next due date:",
      doctor: "Doctor / health authority:"
    },
    health: {
      title: "Hadi Health",
      male: "Male",
      female: "Female",
      bodyWeight: "Body Weight (kg)",
      bloodGroup: "Blood Group",
      emergencyMedicalCard: "Emergency Medical Card",
      medicationList: "Medication List",
      medicationReminder: "Medication Reminder",
      swipe: "Swipe >",
      takeAfterMeals: "Take after meals.",
      takeBeforeMeals: "Take before meals.",
    },
    profile: {
      title: "Profile",
      edit: "Edit",
      name: "Name",
      phone: "Phone Number",
      about: "About App",
      logout: "Logout"
    },
    rituals: {
      title: "Your Itinerary",
      hadiGuide: "Hadi Guide",
      floorNumber: "Floor\nNumber",
      prayingAtMina: "Praying at Mina",
      travelingToMakkah: "Traveling to Makkah",
      animalSacrifice: "Animal Sacrifice",
      animalSacrificeQurbani: "Animal Sacrifice (Qurbani)",
      dayOfHajj: "10th Day of Hajj",
      activitiesInfo: "Activities Information",
      details: "Details"
    },
    activities: {
      ihram: { 
        title: "Ihram", 
        subtitle: "Before 8th Day of Hajj",
        detailsPoints: [
          "Make niyyah (intention) for Hajj.",
          "Men wear two unstitched white cloths; women wear modest normal clothes.",
          "Pray two rak‘ahs (if possible).",
          "Begin reciting Talbiyah: “Labbayka Allahumma labbayk…”",
          "Avoid prohibited acts (cutting hair, perfume, arguing, etc.)."
        ]
      },
      tawafQudum: { 
        title: "Tawaf al-Qudum", 
        subtitle: "Before 8th Day of Hajj",
        detailsPoints: [
          "Enter Masjid al-Haram with respect.",
          "Start at the Black Stone (Hajr al-Aswad).",
          "Circle the Kaaba 7 times, counterclockwise.",
          "Keep the Kaaba on your left.",
          "Make du‘a during Tawaf.",
          "Pray 2 rak‘ahs behind Maqam Ibrahim if possible."
        ]
      },
      sai: { 
        title: "Sa'i (Safa & Marwah)", 
        subtitle: "Before 8th Day of Hajj",
        detailsPoints: [
          "Start at Safa, face the Kaaba, make du‘a.",
          "Walk to Marwah (1 round).",
          "Return to Safa (2 rounds).",
          "Complete 7 trips, ending at Marwah.",
          "Men jog lightly between green markers."
        ]
      },
      mina: { 
        title: "Stay at Mina", 
        subtitle: "8th Day of Hajj",
        detailsPoints: [
          "Performed on 8th Dhul-Hijjah.",
          "Travel to Mina after sunrise.",
          "Pray Dhuhr, Asr, Maghrib, Isha, Fajr (shortened, not combined).",
          "Spend the day and night in worship and rest."
        ]
      },
      arafat: { 
        title: "Wuquf at Arafat", 
        subtitle: "9th Day of Hajj",
        detailsPoints: [
          "Arrive at Arafat before or after Dhuhr.",
          "Pray Dhuhr and Asr together.",
          "Stand (or sit) facing Qiblah.",
          "Make sincere du‘a, repentance, dhikr until sunset.",
          "Do not leave before sunset."
        ]
      },
      muzdalifah: { 
        title: "Night at Muzdalifah", 
        subtitle: "9th Day of Hajj",
        detailsPoints: [
          "Leave Arafat after sunset.",
          "Pray Maghrib and Isha together at Muzdalifah.",
          "Spend the night resting or worshipping.",
          "Collect 49 or 70 pebbles for stoning.",
          "Pray Fajr, then leave before sunrise."
        ]
      },
      stoningAqabah: { 
        title: "Stoning Jamarat al-Aqabah", 
        subtitle: "10th Day of Hajj",
        detailsPoints: [
          "Performed on 10th Dhul-Hijjah.",
          "Go to Mina.",
          "Throw 7 pebbles at the largest pillar.",
          "Say “Allahu Akbar” with each throw.",
          "Pebbles should land in the basin."
        ]
      },
      qurbani: { 
        title: "Animal Sacrifice (Qurbani)", 
        subtitle: "10th Day of Hajj",
        detailsPoints: [
          "Arrange sacrifice (usually through authorities).",
          "Performed on 10th Dhul-Hijjah.",
          "Represents obedience and devotion to Allah."
        ]
      },
      halq: { 
        title: "Halq or Taqsir", 
        subtitle: "10th Day of Hajj",
        detailsPoints: [
          "Men: shave head (preferred) or trim hair.",
          "Women: trim a small portion of hair.",
          "This allows partial exit from Ihram."
        ]
      },
      tawafIfadah: { 
        title: "Tawaf al-Ifadah", 
        subtitle: "10th Day of Hajj",
        detailsPoints: [
          "Return to Masjid al-Haram.",
          "Perform 7 circuits around the Kaaba.",
          "Pray 2 rak‘ahs after Tawaf.",
          "This Tawaf is essential for Hajj validity."
        ]
      },
      stoningThree: { 
        title: "Stoning of all three Jamarat", 
        subtitle: "11 - 13th Day of Hajj",
        detailsPoints: [
          "Each day, stone all three Jamarat.",
          "Throw 7 pebbles at each pillar.",
          "Begin after Dhuhr.",
          "Make du‘a after first and second Jamarat."
        ]
      },
      tawafWada: { 
        title: "Tawaf al-Wada", 
        subtitle: "Before leaving",
        detailsPoints: [
          "Perform 7 final circuits around the Kaaba.",
          "No Sa‘i after this.",
          "Make du‘a and leave Mecca respectfully.",
          "Required for all pilgrims except menstruating women."
        ]
      }
    }
  },
  ar: {
    auth: {
      login: "تسجيل الدخول",
      passport: "رقم جواز السفر",
      passportPlaceholder: "EV 418192",
      phone: "رقم الهاتف",
      phonePlaceholder: "+97 XXX XXX XX XX",
      password: "كلمة المرور",
      passwordPlaceholder: "كلمة المرور",
      forgotPassword: "هل نسيت كلمة المرور؟",
      passportError: "رقم جواز سفر غير صالح",
      phoneError: "رقم هاتف غير صالح",
      passwordError: "كلمة المرور قصيرة جداً",
      errorEmptyFields: "يرجى ملء جميع الحقول",
      pilgrimRole: "حاج",
      fieldworkerRole: "عامل ميداني"
    },
    group: {
      makkahCity: "مكة المكرمة",
      hotelName: "برج الساعة\nمكة الملكي",
      groupNumber: "رقم\nالمجموعة",
      roomNumber: "رقم\nالقرية",
      groupInformation: "معلومات المجموعة",
      roomInformation: "معلومات الغرفة",
      swipe: "سحب",
      roomTag: "غرفة",
      groupTag: "مجموعة",
      contact: "اتصال",
      message: "رسالة",
      messages: "الرسائل",
      groupLeader: "قائد المجموعة",
      groupMember: "عضو المجموعة",
      important: "هام",
      reportTime: "التقرير في الساعة 10:00 صباحاً غداً.",
      startTyping: "ابدأ الكتابة..."
    },
    forgot: {
      title: "أنشئ كلمة مرورك الجديدة",
      newPassword: "أدخل كلمة المرور الجديدة",
      confirmPassword: "أعد إدخال كلمة المرور الجديدة",
      placeholder: "مثال Dynamos@123",
      validateName: "يجب ألا تحتوي على اسمك أو بريدك الإلكتروني",
      validateLength: "8 أحرف على الأقل",
      validateSymbol: "تحتوي على رمز أو رقم",
      continue: "متابعة",
      back: "العودة للصفحة السابقة"
    },
    success: {
      title: "تم تحديث كلمة المرور",
      message: "لقد تم تحديث كلمة مرورك بنجاح!",
      login: "تسجيل الدخول"
    },
    onboarding: {
      sos: {
        title: "زر الاستغاثة",
        subtitle: "إذا شعرت بالضياع أو التعب، اضغط على زر الاستغاثة وسيصلك الدعم."
      },
      health: {
        title: "الصحة والسلامة",
        subtitle: "معلوماتك الطبية تساعد الأطباء في علاجك بأمان وبسرعة."
      },
      guidance: {
        title: "التوجيه",
        subtitle: "ستعرف دائماً مكان تواجدك وماذا تفعل لاحقاً."
      },
      support: {
        title: "الدعم",
        subtitle: "هذا التطبيق يساعد في الحفاظ على سلامتك وصحتك وتوجيهك خلال رحلتك."
      },
      swipe: "اسحب >",
      continue: "اضغط في أي مكان للمتابعة"
    },
    tabs: {
      home: "الرئيسية",
      map: "الخريطة",
      rituals: "المناسك",
      health: "الصحة",
      group: "المجموعة"
    },
    visa: {
      title: "تأشيرتك",
      surname: "اللقب",
      visaNumber: "رقم التأشيرة",
      entries: "عدد المرات المسموح بها للدخول",
      dateIssued: "تاريخ الإصدار",
      visaType: "نوع التأشيرة",
      validity: "الصلاحية"
    },
    passportDetail: {
      title: "جواز سفرك",
      surname: "اللقب",
      firstName: "الاسم الأول",
      sex: "الجنس",
      nationality: "الجنسية",
      passportNumber: "رقم جواز السفر",
      dob: "تاريخ الميلاد"
    },
    vaccineDetail: {
      title: "سجل التطعيمات",
      vaccination: "التطعيم",
      disease: "المرض (الأمراض) التي تم التحصين ضدها:",
      doseNumber: "رقم الجرعة:",
      ageAtVaccination: "العمر عند التطعيم:",
      manufacturer: "الشركة المصنعة:",
      batchNumber: "رقم التشغيلة:",
      vaccinationCenter: "مركز التطعيم:",
      nextDueDate: "موعد الجرعة التالية:",
      doctor: "الطبيب / الجهة الصحية:"
    },
    health: {
      title: "هادي الصحي",
      male: "ذكر",
      female: "أنثى",
      bodyWeight: "وزن الجسم (كجم)",
      bloodGroup: "فصيلة الدم",
      emergencyMedicalCard: "البطاقة الطبية الطارئة",
      medicationList: "قائمة الأدوية",
      medicationReminder: "تذكير الدواء",
      swipe: "سحب >",
      takeAfterMeals: "تناوله بعد الوجبات.",
      takeBeforeMeals: "تناوله قبل الوجبات.",
    },
    profile: {
      title: "الملف الشخصي",
      edit: "تعديل",
      name: "الاسم",
      phone: "رقم الهاتف",
      about: "عن التطبيق",
      logout: "تسجيل الخروج"
    },
    rituals: {
      title: "خط سير الرحلة",
      hadiGuide: "دليل هادي",
      floorNumber: "رقم\nالدور",
      prayingAtMina: "الصلاة في منى",
      travelingToMakkah: "السفر إلى مكة",
      animalSacrifice: "الأضحية",
      animalSacrificeQurbani: "الأضحية (قرباني)",
      dayOfHajj: "اليوم العاشر من الحج",
      activitiesInfo: "معلومات الأنشطة",
      details: "التفاصيل"
    },
    activities: {
      ihram: { 
        title: "الإحرام", 
        subtitle: "قبل اليوم الثامن من الحج",
        detailsPoints: [
          "عقد نية الحج.",
          "يرتدي الرجال ثوبين أبيضين غير مخيطين؛ وترتدي النساء ملابس عادية محتشمة.",
          "صلاة ركعتين (إن أمكن).",
          "البدء في ترديد التلبية: «لبيك اللهم لبيك...»",
          "تجنب الأفعال المحظورة (قص الشعر، التطيب، الجدال، إلخ)."
        ]
      },
      tawafQudum: { 
        title: "طواف القدوم", 
        subtitle: "قبل اليوم الثامن من الحج",
        detailsPoints: [
          "دخول المسجد الحرام باحترام.",
          "البدء من الحجر الأسود.",
          "الطواف حول الكعبة 7 أشواط، عكس اتجاه عقارب الساعة.",
          "اجعل الكعبة عن يسارك.",
          "الدعاء أثناء الطواف.",
          "صلاة ركعتين خلف مقام إبراهيم إن أمكن."
        ]
      },
      sai: { 
        title: "السعي (الصفا والمروة)", 
        subtitle: "قبل اليوم الثامن من الحج",
        detailsPoints: [
          "البدء من الصفا، واستقبال الكعبة، والدعاء.",
          "المشي إلى المروة (شوط واحد).",
          "العودة إلى الصفا (شوطان).",
          "إتمام 7 أشواط، والانتهاء عند المروة.",
          "يهرول الرجال قليلاً بين العلامات الخضراء."
        ]
      },
      mina: { 
        title: "المبيت بمنى", 
        subtitle: "اليوم الثامن من الحج",
        detailsPoints: [
          "يؤدى في الثامن من ذي الحجة.",
          "التوجه إلى منى بعد شروق الشمس.",
          "صلاة الظهر والعصر والمغرب والعشاء والفجر (قصراً لا جمعاً).",
          "قضاء اليوم والليل في العبادة والراحة."
        ]
      },
      arafat: { 
        title: "الوقوف بعرفة", 
        subtitle: "اليوم التاسع من الحج",
        detailsPoints: [
          "الوصول إلى عرفة قبل الظهر أو بعده.",
          "صلاة الظهر والعصر جمعاً.",
          "الوقوف (أو الجلوس) مستقبلاً القبلة.",
          "الدعاء بصدق، والتوبة، والذكر حتى غروب الشمس.",
          "عدم المغادرة قبل غروب الشمس."
        ]
      },
      muzdalifah: { 
        title: "المبيت بمزدلفة", 
        subtitle: "اليوم التاسع من الحج",
        detailsPoints: [
          "مغادرة عرفة بعد غروب الشمس.",
          "صلاة المغرب والعشاء جمعاً في مزدلفة.",
          "قضاء الليل في الراحة أو العبادة.",
          "جمع 49 أو 70 حصاة للرمي.",
          "صلاة الفجر، ثم المغادرة قبل شروق الشمس."
        ]
      },
      stoningAqabah: { 
        title: "رمي جمرة العقبة", 
        subtitle: "اليوم العاشر من الحج",
        detailsPoints: [
          "يؤدى في العاشر من ذي الحجة.",
          "التوجه إلى منى.",
          "رمي الجمرة الكبرى بسبع حصيات.",
          "التكبير مع كل حصاة.",
          "يجب أن تقع الحصيات في الحوض."
        ]
      },
      qurbani: { 
        title: "الأضحية (قرباني)", 
        subtitle: "اليوم العاشر من الحج",
        detailsPoints: [
          "ترتيب الأضحية (عادة من خلال الجهات المختصة).",
          "تؤدى في العاشر من ذي الحجة.",
          "تمثل الطاعة والإخلاص لله."
        ]
      },
      halq: { 
        title: "الحلق أو التقصير", 
        subtitle: "اليوم العاشر من الحج",
        detailsPoints: [
          "الرجال: حلق الرأس (أفضل) أو تقصير الشعر.",
          "النساء: تقصير جزء صغير من الشعر.",
          "وهذا يسمح بالتحلل الجزئي من الإحرام."
        ]
      },
      tawafIfadah: { 
        title: "طواف الإفاضة", 
        subtitle: "اليوم العاشر من الحج",
        detailsPoints: [
          "العودة إلى المسجد الحرام.",
          "أداء 7 أشواط حول الكعبة.",
          "صلاة ركعتين بعد الطواف.",
          "هذا الطواف ركن أساسي لصحة الحج."
        ]
      },
      stoningThree: { 
        title: "رمي الجمرات الثلاث", 
        subtitle: "اليوم الحادي عشر - الثالث عشر من الحج",
        detailsPoints: [
          "كل يوم، يتم رمي الجمرات الثلاث.",
          "رمي كل جمرة بسبع حصيات.",
          "البدء بعد الزوال.",
          "الدعاء بعد الجمرة الأولى والثانية."
        ]
      },
      tawafWada: { 
        title: "طواف الوداع", 
        subtitle: "قبل المغادرة",
        detailsPoints: [
          "أداء 7 أشواط أخيرة حول الكعبة.",
          "لا سعي بعده.",
          "الدعاء ومغادرة مكة باحترام.",
          "واجب على جميع الحجاج إلا الحائض."
        ]
      }
    }
  }
};

let currentLanguage = 'en';

export const setLanguage = (lang) => {
  if (translations[lang]) {
    currentLanguage = lang;
  }
};

export const t = (key) => {
  const keys = key.split('.');
  let result = translations[currentLanguage];
  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      return key;
    }
  }
  return result;
};

export default { t, setLanguage };
