   let isArabic = true;

    function toggleLang() {
      if (isArabic) {
        document.body.style.direction = "ltr";
        document.getElementById("desc").innerText = "Teacher of Chemistry, Physics, Biology, Math & Science | Quantitative Aptitude & Achievement Trainer";
        document.getElementById("callBtn").innerText = "Call Me";
        document.getElementById("sub1").innerText = "🔬 Chemistry - Physics - Biology (High School & University)";
        document.getElementById("sub2").innerText = "📐 Math - Science (Middle School)";
        document.getElementById("sub3").innerText = "📚 Foundation & Tutoring";
        document.getElementById("sub4").innerText = "📊 Quantitative Aptitude & Achievement Trainer";
        document.getElementById("contactTitle").innerText = "Contact";
        document.getElementById("whatsappBtn").innerText = "Contact via WhatsApp";
        document.querySelector(".lang-btn").innerText = "AR";
        isArabic = false;
      } else {
        document.body.style.direction = "rtl";
        document.getElementById("desc").innerText = "معلم كيمياء، فيزياء، أحياء، رياضيات وعلوم | مدرب قدرات كمي وتحصيلي";
        document.getElementById("callBtn").innerText = "تواصل معي";
        document.getElementById("sub1").innerText = "🔬 كيمياء - فيزياء - أحياء (ثانوي وجامعي)";
        document.getElementById("sub2").innerText = "📐 رياضيات - علوم (مرحلة متوسطة)";
        document.getElementById("sub3").innerText = "📚 تأسيس ومتابعة دراسية";
        document.getElementById("sub4").innerText = "📊 مدرب قدرات كمي وتحصيلي";
        document.getElementById("contactTitle").innerText = "للتواصل";
        document.getElementById("whatsappBtn").innerText = "تواصل عبر واتساب";
        document.querySelector(".lang-btn").innerText = "EN";
        isArabic = true;
      }
    }