import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "mainDesign": "WEB DESIGN",
            'mainStudio': 'STUDIO',
            'mainIntro': 'We are a team of professionals specializing in creating attractive and effective websites. Our studio combines technical expertise and creative approach to help your business reach new heights in the online world.',
            'orderButton': 'Order',
            'aboutUsWho': 'Who',
            'aboutUsWe': 'are we',
            'aboutUsIntro': 'In Spark Studio, we strive not only for external aesthetics and functionality but also for the uniqueness of each project we undertake. We believe that every business has its own unique story, and our goal is to convey that story through excellent design and modern technologies.',
            'aboutUsFirst': 'Professionalism and experience',
            'aboutUsSecond': 'Creative solutions',
            'aboutUsThird': 'Individual approach',
            'aboutUsFourth': 'Quality and results',
            'aboutUsLastText': 'Our main goal is to help your business stand out in the online world.We are ready to create a beautiful, functional, and user- oriented website for you, which will help attract new customers, strengthen relationships with existing ones, and expand your opportunities on the Internet.',
            'portfolio': 'Portfolio',
            'serviceOur': 'Our',
            'service': 'service',
            'serviceParagraph': 'We offer a wide range of services to help you achieve your full potential in the online world. Our team of professionals has experience and skills in various areas of web development, and we are ready to bring your ideas to life.',
            'serviceFirst': 'SITES',
            'serviceSecond': 'APPS',
            'serviceThird': 'LOGOTYPES',
            'serviceFourth': 'SEO',
            'portfolioOur': 'Our',
            'portfolioSecond': 'portfolio',
            'portfolioParagraph': 'In our portfolio, you will find unique and modern projects that we have proudly realized for our clients. Our work stands out with stylish design, intuitive navigation, and high functionality. We create websites that are not only beautiful but also effectively fulfill their tasks - attracting audiences, increasing conversion rates, and helping to achieve business goals.',
            'form': 'Do you have',
            'formProject': 'a project?',
            'formParagraph': 'Are you ready to start working on your unique web project? We are looking forward to the opportunity to help you achieve your goals and bring your idea to life.',
            'requiredName': 'Fill in your name',
            'requiredNumber': 'Fill in your phone number',
            'placeholderName': 'Your Name',
            'placeholderNumber': 'Your Phone Number',
            'sites': 'Sites',
            'apps': 'Apps',
            'logotypes': 'Logotypes',
            'formParagraphSec': 'In Spark Studio, we take pride in our work and aim for long-term partnerships with our clients. Entrust your project to us, and we will do everything possible to exceed your expectations.',
            'send': 'Send',
            'main': 'Main',
            'aboutUs': 'About Us',
            'services': 'Services',
            'capabilities': 'Capabilities',
            'servicesSec': 'Services',
            'application': 'Application',
        }
    },
    ru: {
        translation: {
            "mainDesign": "СТУДИЯ ВЕБ",
            'mainStudio': 'ДИЗАЙНА',
            'mainIntro': ' Мы являемся командой профессионалов, специализирующихся на создании привлекательных и эффективных веб- сайтов.Наша студия сочетает техническую экспертизу и творческий подход, чтобы помочь вашему бизнесу достичь новых высот в онлайн- мире.',
            'orderButton': 'Заказать',
            'aboutUsWho': 'Кто',
            'aboutUsWe': 'мы',
            'aboutUsIntro': ' В Spark Studio мы стремимся не только к внешней эстетике и функциональности, но и к уникальности каждого проекта, которым мы занимаемся.Мы верим, что каждый бизнес имеет свою уникальную историю, и наша задача – передать эту историю через превосходный дизайн и современные технологии.',
            'aboutUsFirst': 'Профессионализм и опыт',
            'aboutUsSecond': 'Креативные решения',
            'aboutUsThird': 'Индивидуальный подход',
            'aboutUsFourth': 'Качество и результат',
            'aboutUsLastText': 'Наше основное стремление - помочь вашему бизнесу выделяться в онлайн-мире. Мы готовы создать для вас красивый, функциональный и пользовательски-ориентированный веб-сайт, который поможет вам привлечь новых клиентов, укрепить связь с существующими и расширить свои возможности в Интернете.',
            'portfolio': 'Портфолио',
            'serviceOur': 'Наши',
            'service': 'услуги',
            'serviceParagraph': 'Мы предлагаем широкий спектр услуг, чтобы помочь вам достичь вашего полного потенциала в онлайн-мире. Наша команда профессионалов обладает опытом и навыками в различных областях веб-разработки, и мы готовы воплотить ваши идеи в реальность.',
            'serviceFirst': 'САЙТЫ',
            'serviceSecond': 'ПРИЛОЖЕНИЯ',
            'serviceThird': 'ЛОГОТИПЫ',
            'serviceFourth': 'SEO',
            'portfolioOur': 'Наше',
            'portfolioSecond': 'портфолио',
            'portfolioParagraph': 'В нашем портфолио представлены уникальные и современные проекты, которые мы с гордостью реализовали для наших клиентов. Наши работы отличаются стильным дизайном, интуитивной навигацией и высокой функциональностью. Мы создаем веб-сайты, которые не только красивы, но и эффективно выполняют свои задачи - привлекают аудиторию, увеличивают конверсию и помогают достигать бизнес-целей',
            'form': 'Есть',
            'formProject': 'проект?',
            'formParagraph': 'Вы готовы начать работу над своим уникальным веб-проектом? Мы с нетерпением ждем возможности помочь вам достичь ваших целей и привести вашу идею к жизни.',
            'requiredName': 'Заполните ваше имя',
            'requiredNumber': 'Заполните ваш номер',
            'placeholderName': 'Ваше Имя',
            'placeholderNumber': 'Ваш Номер Телефона',
            'sites': 'Сайты',
            'apps': 'Приложения',
            'logotypes': 'Логотипы',
            'formParagraphSec': 'В Spark Studio мы гордимся нашей работой и стремимся к долгосрочному партнерству с нашими клиентами.Доверьте ваш проект нам, и мы сделаем все возможное, чтобы превзойти ваши ожидания.',
            'send': 'Отправить',
            'main': 'Главная',
            'aboutUs': 'О нас',
            'services': 'Услуги',
            'capabilities': 'Возможности',
            'servicesSec': 'Сервисы',
            'application': 'Заявка',
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;