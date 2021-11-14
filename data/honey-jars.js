const JARS = {
  multiflorous: {
    id: 1,
    name: 'multiflorous',
    title: 'Miód wielokwiatowy 1kg',
    img: 'https://i.imgur.com/bGAdngZ.jpeg',
    description: 'Miód wielokwiatowy, jak nazwa wskazuje – to pszczeli wytwór, na który składają się substancje z wielu rodzajów roślin, kwiatów. W odróżnieniu do na przykład miodu lipowego, akacjowego, gryczanego – aby powstał miód wielokwiatowy potrzeba większej liczby gatunków roślin i to czyni jego smak tak wyjątkowym i niepowtarzalnym. Trudno o jednoznaczne określenie, jakie cechy powinien mieć miód wielokwiatowy – kolor i smak tego rodzaju miodu zależy bowiem od mieszanki kwiatów, z których go pozyskano, a także od okresu, w którym zbierano pyłek kwiatowy. Miód wielokwiatowy wiosenny ma jasną barwę i delikatnie słodki smak, zaś ten zbierany latem – jest bardziej aromatyczny i słodki, a jego kolor jest ciemniejszy.',
    healthProperties: 'Miód wielokwiatowy, jak i inne miody, to doskonałe źródło łatwo przyswajalnej energii. Jest to produkt idealny dla rekonwalescentów, dla dzieci, osób z chorobami układu pokarmowego, a także sportowców potrzebujących szybkiej i łatwo dostępnej dla ciała energii. To wszystko za sprawą dobrego stosunku węglowodanów, jaki charakteryzuje miody. Miód wielokwiatowy wiosenny sprawdzi się lepiej w celach wyżej wymienionych, aniżeli miód wielokwiatowy ciemny, produkowany latem.',
    price: 35,
  },
  honeydew: {
    id: 2,
    name: 'honeydew',
    title: 'Miód spadziowy 1kg',
    img: 'https://i.imgur.com/bGAdngZ.jpeg',
    description: '',
    healthProperties: '',
    price: 45,
  },
  rapeseed: {
    id: 3,
    name: 'rapeseed',
    title: 'Miód rzepakowy 1kg',
    img: 'https://i.imgur.com/bGAdngZ.jpeg',
    description: '',
    healthProperties: '',
    price: 40,
  },
};

function returnSingleJar(name) {
  let jar = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const [, singleJar] of Object.entries(JARS)) {
    if (singleJar.name === name) {
      jar = { ...singleJar };
    }
  }
  return jar;
}

module.exports = {
  JARS,
  returnSingleJar,
};
