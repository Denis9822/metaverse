import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      main_h1: "New epoch from Meta Facebook",
      main_h2_span:"CRYPTO",
      main_h2:"REVOLUTION",
      about_text_h2:"Be the first to touch Web 3.0 technology From Meta",
      about_text_span:"Applications for earlier IDO - Vr/Ar is closer than you think",
      about_text_span2:"next year will pass under the sign of Meta ",
      partners_h2:"Partners",
      participation_h2:"Participation",
      participation_text_span:"To participate in the earlier IDO on",
      participation_text_span2:"You need to connect your wallet and pay a commission of $0.1",
      participation_text_p:"You will get the opportunity to participate in the closed IDO - a chance of 0.001% In addition, you are guaranteed to receive ",
      participation_text_p1:"worth",
      btn_connect_wallet:"Connect a Wallet",
      what_talk_h2:"What they say about the project",
      what_talk_item_text_span1:"My wife Linda and I",
      what_talk_item_text_span1_1:"investing in a new project from Mark.",
      what_talk_item_text_span1_2:"840 million $",
      what_talk_item_text_span1_3:"s the future of the crypto world on the internet.",
      what_talk_item_text_span2:"We are making an ecosystem in Web 3.0 And our",
      what_talk_item_text_span2_1:"replace 99% of other coins in the near. We will soon be opening a recruitment drive for early investors",
      what_talk_item_text_span3:"I'm selling all my bitcoins and Ethers. My dream is to get IDO",
      what_talk_item_text_span3_1:"It's the best token and the best technology of the 21st century",
      what_talk_item_text_span4:"You know I'm skeptical about about cryptocurrency, but if Mark Zuckerberg takes the job, I will invest in that coin!",
      roadmap_main_h1:"The Digital Frontier's",
      roadmap_main_h2:"First Hyper-realistic ",
      roadmap_main_text_span:"Everdome will provide a destination for",
      roadmap_main_text_span_2:"remarkable tech to live, interact and flourish.",
      roadmap_main_text_p:"Taking Metahero from the gateway into the metaverse, together with Everdome, to a fully ubiquitous web3 experience - to the point when you take off your VR headset you won’t be able to tell what’s real and what’s not.",
      tokemonics_text_h2:"The tokenomics",
      tokemonics_text_h3:"The financial infrastructure",
      tokemonics_text_h4:"Everdome's financial infrastructure will allow for everyone who will be settling Mars with us the ability to buy and sell around all things related and needed for settlement. Exploration of new frontiers involves many factors for success - in Everdome you will find all the keys to survival.",
      tokemonics_item1_span:"Team",
      tokemonics_item_p:"tokens",
      tokemonics_item1_h5:"0% TGE 5% unlocked each month after",
      tokemonics_item2_span:"Exchange listings & liquidity",
      tokemonics_item2_h5:"20% TGE 10% unlocked each month after",
      tokemonics_item3_span:"Strategic partners & advisors",
      tokemonics_item3_h5:"0% TGE 5% unlocked each month after",
      tokemonics_item4_span:"24.5% Staking, in-game rewards & development",
      tokemonics_item4_h5:"20% TGE 10% unlocked each month after",
      tokemonics_item5_span:"Private round",
      tokemonics_item5_h5:"10% TGE 2% vested weekly",
      tokemonics_item6_span:"Company reserves",
      tokemonics_item6_h5:"10% TGE 5% unlocked each month after",
      tokemonics_item7_span:"Marketing",
      tokemonics_item7_h5:"Unlocked",
      tokemonics_item8_span:"7.5% HERO exclusive presale",
      tokemonics_item8_h5:"10% TGE 2% vested weekly", 
      tokemonics_item9_h5:"10% TGE 2% vested weekly",
      tokemonics_item10_span:"Tenset partnership",
      tokemonics_item10_h5:"20% TGE, 10% vested monthly", 
      roadmap_about_h2:"About project",
      roadmap_about_item1_span:"Gaming",
      roadmap_about_item1_p:"Become a hero in your favorite game.",
      roadmap_about_item2_span:"Virtual Reality",
      roadmap_about_item2_p:"Be yourself in the virtual world during teleconferences or dates.",
      roadmap_about_item3_span:"Augmented Reality",
      roadmap_about_item3_p:"Change your look, or check if a new tattoo is definitely a good idea. Create your unique GIFs.",
      roadmap_about_item4_span:"Fashion",
      roadmap_about_item4_p:"See how you look in the clothes of famous brands. Fit your size and order directly to your home.",
      roadmap_about_item5_span:"Social Media",
      roadmap_about_item5_p:"Collect memories of yourself and loved ones to create unique hologram albums in the real world.",
      roadmap_about_item6_span:"Medicine",
      roadmap_about_item6_p:"Gain new opportunities to diagnose many diseases or carry out medical consultations on the other side of the world.",
      roadmap_house_text_h2:"Manor House",
      roadmap_house_text_h3:"Bringing brands and people together to create high-quality web3 experiences.",
      roadmap_house_list_item1_h4:"Purchase land",
      roadmap_house_list_item1_span:"Acquire land in Everdom to increase your NFT and digital land meta-village possession.",
      roadmap_house_list_item2_h4:"Buying/renting/leasing real estate",
      roadmap_house_list_item2_span:"With Everdome, you can expand your real estate portfolio very much like the real world.",
      roadmap_house_list_item3_h4:"Advertise",
      roadmap_house_list_item3_span:"If you want to expand the presence of your company or product, both in the meta- and real world, advertising space will be available.",
      roadmap_house_list_item4_h4:"Market(s)",
      roadmap_house_list_item4_span:"Everdome helps you make it easier to market by allowing you to increase your reach and customer base, while at the same time offering new types of products for an exciting new world (metaverse).",
      header_menu_item1:"Partners",
      header_menu_item2:"Participation",
      header_menu_item3:"About project",
      footer:"Cryptorevolution",
      },
  },
  ru: {
    translation: {
      main_h1: "Новая епоха от Meta Facebook",
      main_h2_span:"КРИПТО",
      main_h2:"РЕВОЛЮЦИЯ",
      about_text_h2:"Прикоснись первым к Web 3.0 технологиями от Meta",
      about_text_span:"Заявки на ранее IDO - Vr/Ar ближе чем тебе кажется",
      about_text_span2:"Следующей год пройдет под знаком Meta",
      partners_h2:"Партнеры",
      participation_h2:"Участие",
      participation_text_span:"Для участие в ранее IDO по",
      participation_text_span2:"Вам нужно - подключить Ваш кошелек и оплатить комиссию",
      participation_text_p:"Вы получите возможность участвовать в закрытом IDO - шанс 0,001% Помимо этого вы гарантировано получите",
      participation_text_p1:"стоимостью",
      btn_connect_wallet:"Подключить кошелек",
      what_talk_h2:"Что говорят о проекте",
      what_talk_item_text_span1:"Я и моя жена Линда",
      what_talk_item_text_span1_1:"Инвестируем в новый проект от Марка.",
      what_talk_item_text_span1_2:"840 миллионов $",
      what_talk_item_text_span1_3:"это будущее криптомира в интернете.",
      what_talk_item_text_span2:"Мы делаем экосистему в Web 3.0 И наш",
      what_talk_item_text_span2_1:"заменит 99% других монет в ближайшее время мы откроем набор ранних инвесторов",
      what_talk_item_text_span3:"Я продаю все свои биткоины и Эфиры. Моя мечта попасть в IDO по",
      what_talk_item_text_span3_1:"Это лучший токен и лучшая технология 21 века",
      what_talk_item_text_span4:"Вы знаете я скептичен по отношению к криптовалюте,но если за дело берется Марк Цукерберг, я буду инвестировать в эту монету!",
      roadmap_main_h1:"Первый цифровой рубеж",
      roadmap_main_h2:"Гиперреалистичный",
      roadmap_main_text_span:"Everdome станет местом, где замечательные технологии",
      roadmap_main_text_span_2:"будут жить, взаимодействовать и процветать. ",
      roadmap_main_text_p:"Вместе с Everdome Metahero превратится в ворота в метавселенную и станет полностью вездесущим веб3 - до такой степени, что, сняв гарнитуру VR, вы не сможете определить, что реально, а что нет.        ",
      tokemonics_text_h2:"Токеномика",
      tokemonics_text_h3:"Финансовая инфраструктура",
      tokemonics_text_h4:"Финансовая инфраструктура Эвердома позволит всем, кто будет заселять Марс вместе с нами, покупать и продавать все, что связано и необходимо для заселения. Исследование новых границ включает в себя множество факторов успеха - в Эвердоме вы найдете все ключи к выживанию.",
      tokemonics_item1_span:"Команда",
      tokemonics_item_p:"токены",
      tokemonics_item1_h5:"0% TGE 5% разблокируется каждый месяц после",
      tokemonics_item2_span:"Биржевые листинги и ликвидность",
      tokemonics_item2_h5:"20% TGE 10% разблокируется каждый месяц после",
      tokemonics_item3_span:"Стратегические партнеры и консультанты.",
      tokemonics_item3_h5:"0% TGE 5% разблокируется каждый месяц после",
      tokemonics_item4_span:"24.5% Ставки, внутриигровые награды",
      tokemonics_item4_h5:"20% TGE 10% разблокируется каждый месяц после",
      tokemonics_item5_span:"Частный раунд",
      tokemonics_item5_h5:"10% TGE 2% с еженедельным наделением правами",
      tokemonics_item6_span:"Резервы компании",
      tokemonics_item6_h5:"10% TGE 5% разблокируется каждый месяц после",
      tokemonics_item7_span:"Маркетинг",
      tokemonics_item7_h5:"Разблокированный",
      tokemonics_item8_span:"7.5% Эксклюзивная предпродажа HERO",
      tokemonics_item8_h5:"10% TGE 2% с еженедельным наделением правами", 
      tokemonics_item9_h5:"10% TGE 2% с еженедельным наделением правами",
      tokemonics_item10_span:"Партнерство Tenset",
      tokemonics_item10_h5:"20% TGE, 10% наделяется ежемесячно", 
      roadmap_about_h2:"О проекте",
      roadmap_about_item1_span:"Игровые",
      roadmap_about_item1_p:" Станьте героем в своей любимой игре.",
      roadmap_about_item2_span:"Виртуальная реальность",
      roadmap_about_item2_p:"Станьте героем в своей любимой игре.",
      roadmap_about_item3_span:"Дополненная реальность",
      roadmap_about_item3_p:"Измените свой образ или проверьте, не является ли новая татуировка хорошей идеей. Создавайте свои уникальные GIF.",
      roadmap_about_item4_span:"Мода",
      roadmap_about_item4_p:"Посмотрите, как вы выглядите в одежде известных брендов. Подберите свой размер и сделайте заказ прямо к себе домой.",
      roadmap_about_item5_span:"Соц медиа",
      roadmap_about_item5_p:"Собирайте воспоминания о себе и своих близких, чтобы создавать уникальные голограммные альбомы в реальном мире.",
      roadmap_about_item6_span:"Медицина",
      roadmap_about_item6_p:"Получите новые возможности для диагностики многих заболеваний или проведения медицинских консультаций на другом конце света.",
      roadmap_house_text_h2:"Дом-усадьба",
      roadmap_house_text_h3:"Объединяет бренды и людей с целью создания высококачественного web3-опыта.",
      roadmap_house_list_item1_h4:"Purchase land",
      roadmap_house_list_item1_span:"Приобретите землю в Эвердоме, чтобы увеличить свое метавселенское владение NFT и цифровой землей.",
      roadmap_house_list_item2_h4:"Покупка/аренда/аренда недвижимости",
      roadmap_house_list_item2_span:"С Everdome вы сможете расширить свой портфель недвижимости очень похоже на реальный мир.",
      roadmap_house_list_item3_h4:"Рекламировать",
      roadmap_house_list_item3_span:"Если вы хотите расширить присутствие вашей компании или продукта, как в мета-, так и в реальном мире, рекламные площади будут доступны.",
      roadmap_house_list_item4_h4:"Рынок",
      roadmap_house_list_item4_span:"Everdome поможет вам облегчить работу на рынке, позволяя увеличить охват и клиентскую базу, и в то же время предлагая новые виды продукции для нового захватывающего мира (metaverse).",
      header_menu_item1:"Партнеры",
      header_menu_item2:"Участие",
      header_menu_item3:"О проекте",
        footer:"Криптореволюция ",
        text:"",
        text:"",
        text:"",
          
    },
  },
};
i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18next;