export const useOffers = async () => {
  const offersTiles = [
    {
      topic: 'Лечение кариеса',
      text: 'Кариес, пульпит, периодонтит',
      price: 'от 2 700 ₽',
      icon: 'TherapyOffersIconsFirst',
      link: '/offers/tooth-decay',
    },
    {
      topic: 'Имплантация',
      text: 'Установка импланта нового поколения без боли',
      price: 'от 45 000 ₽',
      icon: 'TherapyOffersIconsThird',
    },
    {
      topic: 'Исправление прикуса',
      text: 'Установка брекетов и виниров',
      price: 'от 15 000 ₽',
      icon: 'TherapyOffersIconsFourth',
    },
    {
      topic: 'Установление коронки и протезов',
      text: 'А также других ортопедических конструкций',
      price: 'от 12 000 ₽',
      icon: 'TherapyOffersIconsFifth',
    },
    {
      topic: 'Удаление зуба',
      text: 'Любая сложность операции',
      price: 'от 1 800 ₽',
      icon: 'TherapyOffersIconsSixth',
    },
    {
      topic: 'Профессиональная чистка и отбеливание',
      text: 'Эстетические и профилактические процедуры',
      price: 'от 7 500 ₽',
      icon: 'TherapyOffersIconsSecond',
    },
  ]
  return offersTiles
}
