import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';
import me2 from '../assets/me2.jpeg';
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            {/* <img
              className="rounded-lg"
              src={me2}
              alt="about"
              width={300}
              height={300}
            /> */}
            Merhaba! Ben Oğuzhan, bilgisayar mühendisliği öğrencisiyim. Eğitim
            hayatıma MEF Üniversitesi’nde makine mühendisliğiyle başladım, ancak
            yazılım geliştirmeye olan artan ilgim nedeniyle bölümümü Nişantaşı
            Üniversitesi Bilgisayar Mühendisliği olarak değiştirdim. İlk olarak
            frontend geliştirme ile ilgilenmeye başladım ve React gibi
            teknolojiler üzerine kendimi geliştirdim. Zamanla backend tarafına
            da yönelerek ASP.NET Core kullanarak güvenli ve ölçeklenebilir
            API’ler geliştirme üzerine odaklanmaya başladım. Gerçek dünya
            projeleri üzerinde çalışarak hem teorik bilgimi pratiğe döküyor hem
            de temiz ve sürdürülebilir kod yazma becerimi geliştiriyorum.
            Hedefim, güçlü bir full-stack geliştirici olarak yazılım dünyasında
            kalıcı işler üretmek. Kodlamanın dışında kitap okumak, futbol
            oynamak ve spor yapmak gibi aktivitelerle de ilgileniyorum. Bu
            hobiler, disiplinli ve dengeli bir yaşam tarzı sürdürmeme katkı
            sağlıyor. Sürekli öğrenme isteği ve merak duygusuyla hareket ederek,
            yenilikçi yazılım çözümleri üretmek ve vizyon sahibi ekiplerle
            birlikte çalışmak istiyorum.
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl my-2 py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
