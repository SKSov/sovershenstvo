export const useOffers = async () => {
  const offersTiles = [
    {
      topic: 'Лечение зубов',
      text: 'Кариес, пульпит, периодонтит',
      price: 'от 2 700 ₽',
      icon: 'TherapyOffersIconsFirst',
      link: '/offers/dental-treatment',
    },
    {
      topic: 'Имплантация',
      text: 'Установка импланта нового поколения без боли',
      price: 'от 45 000 ₽',
      icon: 'TherapyOffersIconsThird',
      link: '/offers/implantation',
    },
    {
      topic: 'Исправление прикуса',
      text: 'Установка брекетов и виниров',
      price: 'от 15 000 ₽',
      icon: 'TherapyOffersIconsFourth',
      link: '/offers/bite-correction',
    },
    {
      topic: 'Установление коронки и протезов',
      text: 'А также других ортопедических конструкций',
      price: 'от 12 000 ₽',
      icon: 'TherapyOffersIconsFifth',
      link: '/offers/tooth-restoration',
    },
    {
      topic: 'Удаление зуба',
      text: 'Любая сложность операции',
      price: 'от 1 800 ₽',
      icon: 'TherapyOffersIconsSixth',
      link: '/offers/tooth-removal',
    },
    {
      topic: 'Профессиональная чистка и отбеливание',
      text: 'Эстетические и профилактические процедуры',
      price: 'от 7 500 ₽',
      icon: 'TherapyOffersIconsSecond',
      link: '/offers/tooth-whitening',
    },
  ]
  return offersTiles
}
