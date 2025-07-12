import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input"; 
import { Textarea } from "../../../../components/ui/textarea"; 
import { Button } from "../../../../components/ui/button";

export const FooterSection = (): JSX.Element => {

  const contactInfo = [
    {
      type: "Phone",
      value: "0823-1954-8914", 
      icon: "/assets/icons/phone_icon.svg",
      iconRotate: "rotate-[-164.17deg]",
      containerRotate: "rotate-[164.17deg]",
    },
    {
      type: "Email",
      value: "riganfauzi@gmail.com",
      icon: "/assets/icons/email_icon.svg",
      iconRotate: "",
      containerRotate: "",
    },
    {
      type: "Linkedin",
      value: "www.linkedin.com/rigannurfauzi",
      icon: "/assets/icons/linkedin_icon.svg",
      iconRotate: "",
      containerRotate: "",
      href: "https://www.linkedin.com/in/rigannurfauzi/"
    },
  ];

  // Ambil nomor telepon dari contactInfo dan format untuk WhatsApp
  const whatsappPhoneNumber = contactInfo.find(info => info.type === "Phone")?.value
                                .replace(/-/g, '')
                                .replace(/^0/, '62') || "";

  // State untuk form: Menambahkan 'phoneNumber'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "", // Field baru untuk nomor telepon pengirim
    message: "",
  });

  // State untuk error validasi: Menambahkan 'phoneNumber'
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // State untuk pesan sukses/error pengiriman
  const [submitMessage, setSubmitMessage] = useState("");

  // Handler perubahan input form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // Hapus error saat input berubah
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
    setSubmitMessage(""); // Hapus pesan submit saat ada perubahan
  };

  // Fungsi validasi email
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Fungsi validasi nomor telepon (sederhana)
  const validatePhoneNumber = (phone: string): boolean => {
    // Hanya angka, minimal 8 digit, maksimal 15 digit
    const re = /^[0-9]{8,15}$/;
    return re.test(phone);
  };

  // Handler submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah refresh halaman

    let newErrors = { name: "", email: "", phoneNumber: "", message: "" };
    let isValid = true;

    // Validasi Nama
    if (!formData.name.trim()) {
      newErrors.name = "Nama tidak boleh kosong.";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nama minimal 2 karakter.";
      isValid = false;
    }

    // Validasi Email
    if (!formData.email.trim()) {
      newErrors.email = "Email tidak boleh kosong.";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Format email tidak valid.";
      isValid = false;
    }

    // Validasi Nomor Telepon
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Nomor telepon tidak boleh kosong.";
      isValid = false;
    } else if (!validatePhoneNumber(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Format nomor telepon tidak valid (hanya angka, 8-15 digit).";
      isValid = false;
    }

    // Validasi Pesan
    if (!formData.message.trim()) {
      newErrors.message = "Pesan tidak boleh kosong.";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Pesan minimal 10 karakter.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      const whatsappText = encodeURIComponent(
        `Halo Rigan,\n\n` +
        `Saya ingin menghubungi Anda melalui formulir di portofolio Anda. Berikut detail saya:\n\n` +
        `Nama: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Nomor Telepon: ${formData.phoneNumber}\n\n` +
        `Pesan:\n${formData.message}\n\n` +
        `Terima kasih.`
      );
      const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${whatsappText}`;

      window.open(whatsappLink, '_blank');

      setSubmitMessage("Formulir akan dibuka di WhatsApp Anda.");
      // Reset form setelah submit
      setFormData({ name: "", email: "", phoneNumber: "", message: "" });
    } else {
      setSubmitMessage("Mohon perbaiki kesalahan pada formulir.");
    }
  };

  return (
    <footer id="footer" className="relative flex flex-col w-full items-start gap-2.5 p-4 sm:p-6 md:p-8 lg:p-[90px] bg-foundation-bluenormal-active rounded-t-[16px] sm:rounded-t-[24px] lg:rounded-t-[32px] mt-8 sm:mt-10 lg:mt-12 overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full items-start justify-between relative z-10 gap-8 sm:gap-10 lg:gap-0">
        {/* Contact Info Section */}
        <div className="flex flex-col w-full lg:max-w-[503px] items-start gap-6 sm:gap-8 lg:gap-[30px] relative">
          <div className="relative w-full">
            <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-white text-2xl sm:text-3xl lg:text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              Get in Touch
            </h2>

            <p className="mt-4 sm:mt-5 lg:mt-6 font-body-6 font-[number:var(--body-6-font-weight)] text-white text-sm sm:text-base lg:text-[length:var(--body-6-font-size)] tracking-[var(--body-6-letter-spacing)] leading-[var(--body-6-line-height)] [font-style:var(--body-6-font-style)]">
              For business and partnership inquiry please contact me below!
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[25px] w-full max-w-[341px]">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-transparent border-none shadow-none"
              >
                <CardContent className="flex items-start p-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] rounded-full border border-solid border-white flex items-center justify-center shrink-0">
                    <div
                      className={`relative w-4 h-4 sm:w-5 sm:h-5 lg:w-[25px] lg:h-[25px] ${info.containerRotate}`}
                    >
                      <img
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain ${info.iconRotate}`}
                        alt={`${info.type} icon`}
                        src={info.icon}
                      />
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4 lg:ml-5 min-w-0 flex-1">
                    <p className="font-body-6 font-[number:var(--body-6-font-weight)] text-foundation-blackblack-100 text-xs sm:text-sm lg:text-[length:var(--body-6-font-size)] tracking-[var(--body-6-letter-spacing)] leading-[var(--body-6-line-height)] [font-style:var(--body-6-font-style)]">
                      {info.type}
                    </p>
                    <p className="font-body-6 font-[number:var(--body-6-font-weight)] text-white text-xs sm:text-sm lg:text-[length:var(--body-6-font-size)] tracking-[var(--body-6-letter-spacing)] leading-[var(--body-6-line-height)] [font-style:var(--body-6-font-style)] break-words">
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {info.value}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col w-full lg:w-[500px] items-start gap-4 sm:gap-5 lg:gap-6 relative lg:mt-[60px]">
          <h3 className="font-heading-6 text-lg sm:text-xl lg:text-xl font-semibold text-white">Contact Me</h3>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3 sm:gap-4 relative z-10">
            <div>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-10 sm:h-11 lg:h-12 text-sm sm:text-base bg-white/20 text-foundation-blackblack-400 placeholder:text-foundation-blackblack-100 border-white/50 focus:border-white focus:ring-white"
              />
              {errors.name && (
                <p className="text-red-300 text-xs sm:text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-10 sm:h-11 lg:h-12 text-sm sm:text-base bg-white/20 text-foundation-blackblack-400 placeholder:text-foundation-blackblack-100 border-white/50 focus:border-white focus:ring-white"
              />
              {errors.email && (
                <p className="text-red-300 text-xs sm:text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {/* Input Nomor Telepon Baru */}
            <div>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full h-10 sm:h-11 lg:h-12 text-sm sm:text-base bg-white/20 text-foundation-blackblack-400 placeholder:text-foundation-blackblack-100 border-white/50 focus:border-white focus:ring-white"
              />
              {errors.phoneNumber && (
                <p className="text-red-300 text-xs sm:text-sm mt-1">{errors.phoneNumber}</p>
              )}
            </div>
            <div>
              <Textarea
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] text-sm sm:text-base bg-white/20 text-foundation-blackblack-400 placeholder:text-foundation-blackblack-100 border-white/50 focus:border-white focus:ring-white resize-none"
              />
              {errors.message && (
                <p className="text-red-300 text-xs sm:text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full h-10 sm:h-11 lg:h-12 text-sm sm:text-base bg-foundation-bluenormal-active text-white border border-white hover:bg-[#3C2B88] font-semibold rounded-md transition-colors"
              variant="default"
            >
              Send
            </Button>
            {submitMessage && (
              <p className={`text-center text-xs sm:text-sm mt-2 ${errors.name || errors.email || errors.phoneNumber || errors.message ? 'text-red-300' : 'text-green-300'}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
      
      {/* Decorative Image - Responsive */}
      <img
        src="/assets/images/image_decoration.png"
        alt="decoration"
        className="absolute bottom-[-30px] left-[-30px] w-[180px] h-[150px] sm:bottom-[-40px] sm:left-[-40px] sm:w-[240px] sm:h-[200px] lg:bottom-[-50px] lg:left-[-50px] lg:w-[300px] lg:h-[250px] object-contain z-0 opacity-20 hidden sm:block"
      />
    </footer>
  );
};