export const cities = () => [
  { id: 1, name: "Clark", province: { name: "Pampanga", id: 8 } },
  { id: 2, name: "Manila", province: { name: "Metro Manila", id: 1 } },
  { id: 3, name: "Angeles", province: { name: "Pampanga", id: 8 } },
  { id: 4, name: "Baguio", province: { name: "Benguet", id: 9 } },
  { id: 5, name: "Davao City", province: { name: "Davao del Sur", id: 2 } },
  { id: 6, name: "Cebu City", province: { name: "Cebu", id: 3 } },
  {
    id: 7,
    name: "Zamboanga City",
    province: { name: "Zamboanga del Sur", id: 4 },
  },
  { id: 8, name: "Taguig", province: { name: "Metro Manila", id: 1 } },
  { id: 9, name: "Antipolo", province: { name: "Rizal", id: 5 } },
  {
    id: 10,
    name: "Cagayan de Oro",
    province: { name: "Misamis Oriental", id: 6 },
  },
  { id: 11, name: "Parañaque", province: { name: "Metro Manila", id: 1 } },
  { id: 12, name: "Valenzuela", province: { name: "Metro Manila", id: 1 } },
  { id: 13, name: "Las Piñas", province: { name: "Metro Manila", id: 1 } },
  { id: 14, name: "Makati", province: { name: "Metro Manila", id: 1 } },
  { id: 15, name: "Mandaluyong", province: { name: "Metro Manila", id: 1 } },
  { id: 16, name: "Muntinlupa", province: { name: "Metro Manila", id: 1 } },
  { id: 17, name: "Marikina", province: { name: "Metro Manila", id: 1 } },
  { id: 18, name: "Iloilo City", province: { name: "Iloilo", id: 7 } },
  { id: 19, name: "Pasay", province: { name: "Metro Manila", id: 1 } },
  { id: 20, name: "Boracay", province: { name: "Aklan", id: 10 } },
  { id: 21, name: "Samar", province: { name: "Samar", id: 11 } },
  { id: 22, name: "Caloocan", province: { name: "Metro Manila", id: 1 } },
  { id: 23, name: "Quezon City", province: { name: "Metro Manila", id: 1 } },
  { id: 24, name: "Pasig", province: { name: "Metro Manila", id: 1 } },
];

export const suppliers = [
  {
    id: 1,
    name: "ABC Charters",
    phone_number: "555-555-1234",
    email: "abccharters@example.com",
    daily_limit: 5,
    is_active: true,
    max_passengers: 11,
  },
  {
    id: 2,
    name: "XYZ Rentals",
    phone_number: "555-555-5678",
    email: "xyzrentals@example.com",
    daily_limit: 3,
    is_active: true,
    max_passengers: 8,
  },
  {
    id: 3,
    name: "Charter Co.",
    phone_number: "555-555-9012",
    email: "charterco@example.com",
    daily_limit: 2,
    is_active: true,
    max_passengers: 4,
  },
  {
    id: 4,
    name: "Coastal Charters",
    phone_number: "555-555-3456",
    email: "coastalcharters@example.com",
    daily_limit: 4,
    is_active: true,
    max_passengers: 10,
  },
  {
    id: 5,
    name: "Seaside Rentals",
    phone_number: "555-555-7890",
    email: "seasiderentals@example.com",
    daily_limit: 2,
    is_active: true,
    max_passengers: 15,
  },
  {
    id: 6,
    name: "Sunny Charters",
    phone_number: "555-555-2345",
    email: "sunnycharters@example.com",
    daily_limit: 3,
    is_active: true,
    max_passengers: 8,
  },
  {
    id: 7,
    name: "Island Rentals",
    phone_number: "555-555-6789",
    email: "islandrentals@example.com",
    daily_limit: 2,
    is_active: true,
    max_passengers: 10,
  },
  {
    id: 8,
    name: "Coastal Cruises",
    phone_number: "555-555-0123",
    email: "coastalcruises@example.com",
    daily_limit: 5,
    is_active: true,
    max_passengers: 7,
  },
  {
    id: 9,
    name: "Harbor Charters",
    phone_number: "555-555-4567",
    email: "harborcharters@example.com",
    daily_limit: 4,
    is_active: true,
    max_passengers: 15,
  },
  {
    id: 10,
    name: "Beach Rentals",
    phone_number: "555-555-8901",
    email: "beachrentals@example.com",
    daily_limit: 3,
    is_active: true,
    max_passengers: 7,
  },
];

export const routes = [
  {
    city_id_from: 1,
    city_id_to: 2,
    short_duration: "4 hours",
    long_duration:
      "Aliquip Lorem sunt qui nisi aute voluptate. Consequat nulla ex adipisicing nulla velit consectetur. Dolore velit qui officia aliquip in in.",
    id: 1,
  },
  {
    city_id_from: 1,
    city_id_to: 3,
    short_duration: "6 hours",
    long_duration:
      "Enim occaecat anim adipisicing dolor id voluptate ipsum ullamco. Voluptate commodo nostrud esse ea occaecat proident sit dolore ad.",
    id: 2,
  },
  {
    city_id_from: 1,
    city_id_to: 7,
    short_duration: "7 hours",
    long_duration:
      "Minim quis laborum pariatur cupidatat aute voluptate. Sunt occaecat anim aute Lorem velit quis mollit proident cillum nulla tempor tempor.",
    id: 3,
  },
  {
    city_id_from: 1,
    city_id_to: 9,
    short_duration: "2 hours",
    long_duration:
      "Proident pariatur aute id do mollit ut amet est cillum enim duis cillum quis aliqua.",
    id: 4,
  },
  {
    city_id_from: 1,
    city_id_to: 11,
    short_duration: "6 hours",
    long_duration:
      "Irure est qui eu officia est nostrud. Aliqua veniam est commodo sunt ipsum consequat veniam non.",
    id: 5,
  },
  {
    city_id_from: 1,
    city_id_to: 12,
    short_duration: "3 hours",
    long_duration: "Velit velit velit exercitation sunt reprehenderit.",
    id: 6,
  },
  {
    city_id_from: 1,
    city_id_to: 13,
    short_duration: "5 hours",
    long_duration:
      "Veniam consequat duis mollit sit aliquip adipisicing ipsum sint irure occaecat nostrud ex.",
    id: 7,
  },
  {
    city_id_from: 1,
    city_id_to: 14,
    short_duration: "8 hours",
    long_duration:
      "Non enim adipisicing aliquip ea nisi qui cillum aute anim eu occaecat commodo deserunt.",
    id: 8,
  },
  {
    city_id_from: 1,
    city_id_to: 15,
    short_duration: "3 hours",
    long_duration:
      "Irure excepteur tempor dolore cupidatat duis excepteur adipisicing eu.",
    id: 9,
  },
  {
    city_id_from: 1,
    city_id_to: 16,
    short_duration: "2 hours",
    long_duration:
      "Occaecat do nisi pariatur Lorem cupidatat irure quis nulla enim fugiat qui est adipisicing aute. Tempor enim nisi non proident voluptate excepteur eu consequat. Reprehenderit nostrud enim anim minim anim commodo incididunt pariatur dolor. Laborum minim eiusmod eiusmod ad.",
    id: 10,
  },
  {
    city_id_from: 1,
    city_id_to: 17,
    short_duration: "3 hours",
    long_duration:
      "Exercitation enim aliquip aliqua officia. Mollit culpa consequat cupidatat minim laborum eu. Commodo exercitation laboris labore velit. Officia eiusmod aliqua proident enim officia eu nostrud aliquip labore velit mollit. Cupidatat proident consequat cupidatat enim.",
    id: 11,
  },
  {
    city_id_from: 1,
    city_id_to: 19,
    short_duration: "4 hours",
    long_duration:
      "Tempor ullamco sint anim qui ex occaecat. Duis excepteur et veniam eiusmod est elit tempor adipisicing excepteur. Id deserunt occaecat sit elit commodo et est minim. Laborum qui non cillum est occaecat cupidatat cupidatat tempor. Voluptate culpa do ex amet sint reprehenderit occaecat nisi ipsum aute nulla reprehenderit. Non eu aliqua esse nisi.",
    id: 12,
  },
  {
    city_id_from: 2,
    city_id_to: 3,
    short_duration: "2 hours",
    long_duration:
      "Consectetur quis ex do deserunt. Labore Lorem nisi esse voluptate consequat. Fugiat nostrud non aute laborum veniam ex qui nostrud anim culpa. Minim consequat duis esse nulla enim proident mollit.",
    id: 13,
  },
  {
    city_id_from: 2,
    city_id_to: 7,
    short_duration: "8 hours",
    long_duration:
      "Nulla cillum sit culpa nisi. Voluptate sit in elit officia nostrud laborum duis aliquip nisi proident tempor et officia.",
    id: 14,
  },
  {
    city_id_from: 2,
    city_id_to: 9,
    short_duration: "5 hours",
    long_duration:
      "Cupidatat irure ex ipsum amet enim id amet ea mollit consequat minim tempor ad.",
    id: 15,
  },
  {
    city_id_from: 2,
    city_id_to: 11,
    short_duration: "4 hours",
    long_duration:
      "Excepteur do sunt laborum fugiat sunt esse eiusmod. Labore nostrud laborum e.",
    id: 16,
  },
  {
    city_id_from: 2,
    city_id_to: 12,
    short_duration: "3 hours",
    long_duration: "Non quis amet quis dolore nisi officia fugiat.",
    id: 17,
  },
  {
    city_id_from: 2,
    city_id_to: 13,
    short_duration: "7 hours",
    long_duration:
      "Non aliqua ut qui esse est culpa sit ad reprehenderit nisi esse.",
    id: 18,
  },
  {
    city_id_from: 2,
    city_id_to: 14,
    short_duration: "3 hours",
    long_duration:
      "Eiusmod est enim laborum sit aliqua. Aute laborum nostrud exercitation consequat excepteur amet officia magna pariatur quis.",
    id: 19,
  },
  {
    city_id_from: 2,
    city_id_to: 15,
    short_duration: "8 hours",
    long_duration:
      "Tempor laboris velit anim culpa mollit. Velit tempor cillum nostrud tempor velit. Aliquip eiusmod esse mollit ut cillum laborum incididunt est amet. Reprehenderit sit cillum irure ullamco occaecat. Duis velit aliqua nulla do labore duis excepteur eu voluptate in excepteur anim. Qui qui cupidatat dolor duis. Labore aliquip do id magna nostrud anim nisi officia cupidatat ad tempor. Velit consectetur fugiat culpa irure do consectetur aute ut qui nulla. Qui elit consequat incididunt consectetur deserunt qui esse cupidatat veniam pariatur et. Exercitation enim pariatur quis consequat nostrud ex duis minim dolore irure.",
    id: 20,
  },
  {
    city_id_from: 2,
    city_id_to: 16,
    short_duration: "4 hours",
    long_duration:
      "Laborum excepteur aute cupidatat reprehenderit veniam exercitation commodo exercitation occaecat. Incididunt irure sunt occaecat magna elit deserunt. Elit culpa reprehenderit eu occaecat consectetur deserunt elit dolore dolore sunt. Dolor dolore commodo culpa et officia ea ipsum culpa Lorem et laborum. Est ullamco elit fugiat in duis Lorem veniam aliqua Lorem sit cillum. Sint esse Lorem laborum minim ea sunt consequat qui eiusmod fugiat.",
    id: 21,
  },
  {
    city_id_from: 2,
    city_id_to: 17,
    short_duration: "4 hours",
    long_duration:
      "Ipsum elit sunt fugiat in. Fugiat qui ut proident fugiat excepteur fugiat in non. Enim dolor aliquip aliquip elit velit dolor labore aliquip Lorem commodo qui excepteur ex consectetur. Laboris amet sit occaecat ullamco consequat occaecat ex do. Duis sunt do magna cillum est nulla velit reprehenderit. Duis minim nisi id consectetur.",
    id: 22,
  },
  {
    city_id_from: 2,
    city_id_to: 19,
    short_duration: "5 hours",
    long_duration:
      "Minim magna non aliqua ex labore quis cillum anim do in dolor et nulla. Laboris ex deserunt duis nisi velit sit nostrud. Exercitation reprehenderit in sint ipsum pariatur ullamco ea nisi consectetur. Nisi qui do reprehenderit occaecat et non ad labore consequat magna do exercitation. Id tempor Lorem velit velit adipisicing ullamco Lorem. Culpa officia Lorem non est culpa duis. Ipsum tempor est culpa dolor anim.",
    id: 23,
  },
  {
    city_id_from: 3,
    city_id_to: 7,
    short_duration: "5 hours",
    long_duration:
      "In aliqua quis aliquip voluptate amet exercitation deserunt ipsum nostrud laboris in commodo. Excepteur aliquip nostrud culpa nostrud amet duis eiusmod nisi culpa. Eu irure fugiat ad consequat. Elit excepteur commodo ad qui. Nisi sint ut id ut eiusmod id ex. Minim do in adipisicing laboris. Sunt nulla est nisi nisi sint reprehenderit et voluptate occaecat amet laboris eu.",
    id: 24,
  },
  {
    city_id_from: 3,
    city_id_to: 9,
    short_duration: "8 hours",
    long_duration:
      "Voluptate reprehenderit dolore reprehenderit cupidatat do deserunt pariatur aliquip velit est exercitation ea magna quis. Ea nulla do irure enim commodo aute anim laborum irure velit aliquip. Non dolore eu consectetur aliquip reprehenderit ipsum deserunt dolore proident eu reprehenderit officia ipsum id. Mollit fugiat ullamco nisi sit proident pariatur id sint incididunt magna anim magna. Ut consectetur do ex ea laborum et aliquip aliquip irure dolore aute. Elit ex consectetur voluptate aliquip officia aliquip aliqua nostrud veniam aliqua. Voluptate do id incididunt fugiat culpa. Eiusmod laborum magna aliqua aliqua qui nostrud amet voluptate excepteur. Proident et ea sunt cillum duis eu incididunt reprehenderit cupidatat ut dolor. Ea duis et aliquip Lorem.",
    id: 25,
  },
  {
    city_id_from: 3,
    city_id_to: 11,
    short_duration: "8 hours",
    long_duration:
      "Excepteur occaecat ex duis proident ex labore ipsum sint. Non ullamco tempor do voluptate ipsum aliqua quis culpa aute proident. Aliqua elit in nulla labore mollit est voluptate non. Id magna anim qui velit velit fugiat deserunt. Non sunt elit anim sint laboris veniam. Incididunt et esse pariatur in ipsum velit irure commodo amet. Cillum eu eu culpa incididunt tempor ea ut. Proident quis cillum fugiat aliquip do amet consequat deserunt qui voluptate eu anim Lorem aliqua. Consequat consequat sunt aliquip deserunt labore aliqua aliqua et fugiat fugiat tempor ea nulla qui. Nulla exercitation adipisicing anim magna reprehenderit labore nisi occaecat.",
    id: 26,
  },
  {
    city_id_from: 3,
    city_id_to: 12,
    short_duration: "2 hours",
    long_duration:
      "Eiusmod dolore velit aliquip labore labore adipisicing. Incididunt aliqua deserunt sit ad nulla amet pariatur tempor. Esse ut dolor sit dolor occaecat tempor qui. Tempor irure id officia incididunt dolore.",
    id: 27,
  },
  {
    city_id_from: 3,
    city_id_to: 13,
    short_duration: "8 hours",
    long_duration:
      "Minim ipsum laborum minim ipsum exercitation ipsum laborum. Magna elit anim commodo anim sint do mollit enim mollit occaecat in consectetur. Aliqua proident aliqua qui nulla voluptate. Officia nostrud id cillum amet nulla minim in. Aliquip non voluptate cupidatat exercitation cupidatat adipisicing enim et laborum in. Aute Lorem culpa aliquip incididunt do ea nostrud consequat aute enim dolor officia. Cupidatat non cillum sint tempor et eiusmod incididunt nisi. Excepteur deserunt aliquip est veniam minim mollit dolor proident est sunt excepteur esse dolore pariatur. Ullamco velit tempor ea voluptate eiusmod veniam nulla et pariatur in dolore. Qui proident reprehenderit anim duis excepteur culpa sit est do adipisicing enim qui consequat.",
    id: 28,
  },
  {
    city_id_from: 3,
    city_id_to: 14,
    short_duration: "8 hours",
    long_duration:
      "Ea eiusmod Lorem sit enim consectetur consequat. Ipsum commodo consequat est pariatur ea id pariatur. Voluptate deserunt officia ipsum consequat labore voluptate. Eiusmod cupidatat labore nulla enim minim veniam sint Lorem Lorem incididunt exercitation officia excepteur tempor. Tempor enim nulla qui nisi laboris eiusmod proident tempor aute quis. Laboris laboris esse minim quis consequat aliqua reprehenderit. Elit magna Lorem eiusmod aliqua mollit voluptate aliquip ullamco reprehenderit cillum proident veniam fugiat sunt. Esse dolore labore in veniam exercitation voluptate sint non. Nisi consectetur sunt qui occaecat anim commodo et magna laboris in. Cupidatat mollit consequat est id nisi velit aliqua.",
    id: 29,
  },
  {
    city_id_from: 3,
    city_id_to: 15,
    short_duration: "3 hours",
    long_duration:
      "Laboris laboris velit voluptate cupidatat incididunt do voluptate veniam reprehenderit. Ea pariatur ad sint tempor. Magna culpa consequat consequat sint nulla pariatur veniam anim enim tempor. Cillum pariatur fugiat ut labore reprehenderit excepteur dolor reprehenderit enim commodo nostrud ipsum commodo est. Ullamco pariatur anim aute minim eiusmod adipisicing.",
    id: 30,
  },
  {
    city_id_from: 3,
    city_id_to: 16,
    short_duration: "2 hours",
    long_duration:
      "Commodo aliquip dolore incididunt mollit voluptate. Labore occaecat tempor incididunt eiusmod aliqua commodo do enim ea labore officia laboris eu consectetur. Ut eiusmod aute elit minim cupidatat dolor duis pariatur non tempor Lorem. Ea voluptate laboris sint cupidatat ex tempor.",
    id: 31,
  },
  {
    city_id_from: 3,
    city_id_to: 17,
    short_duration: "3 hours",
    long_duration:
      "Officia tempor minim cupidatat commodo irure eiusmod ut ad ea veniam ullamco deserunt amet aute. Cillum cillum proident adipisicing sit. Enim est reprehenderit deserunt sunt aliquip aute qui nisi velit. Qui ad elit reprehenderit est ea sint voluptate reprehenderit veniam. Est tempor nostrud officia duis Lorem.",
    id: 32,
  },
  {
    city_id_from: 3,
    city_id_to: 19,
    short_duration: "8 hours",
    long_duration:
      "Elit laboris proident ad reprehenderit magna proident fugiat laboris ex ad aliqua consectetur. Minim dolor amet id do non ad aliqua ullamco magna duis enim cillum. Aute ea cillum occaecat incididunt sunt Lorem dolore quis. Nulla deserunt anim duis sint aute aliquip est cillum. Velit ex occaecat laboris in laboris aliquip dolor do proident laborum et id sit aliqua. Non qui laboris incididunt commodo esse do. Nulla fugiat dolor mollit amet officia esse culpa magna sint duis et. Elit et consequat tempor id sint adipisicing fugiat tempor. Id anim amet dolor incididunt do dolor duis nostrud nisi. Voluptate ea velit ex ullamco id aliquip anim ullamco duis aute tempor ipsum ut.",
    id: 33,
  },
  {
    city_id_from: 7,
    city_id_to: 9,
    short_duration: "5 hours",
    long_duration:
      "Laborum irure cillum velit ea ut exercitation aute eu anim. Nisi labore proident aute adipisicing eu consequat adipisicing magna culpa. Eiusmod ea aute nisi aliqua est. Ut aute enim anim fugiat. Ea sit sit aliquip consequat elit Lorem magna nostrud aute pariatur. Laborum aliqua culpa nulla cillum. Irure est est officia cupidatat irure do enim tempor ad minim minim reprehenderit.",
    id: 34,
  },
  {
    city_id_from: 7,
    city_id_to: 11,
    short_duration: "5 hours",
    long_duration:
      "Est cupidatat commodo ut ut culpa laborum non. Adipisicing eu velit labore minim do nostrud dolore enim. In voluptate aliquip ut est reprehenderit commodo nulla deserunt ipsum enim eu minim labore officia. Dolore excepteur sit commodo elit labore aute pariatur laboris laborum ullamco sit. Enim eiusmod consequat qui labore laboris anim in aliquip excepteur in. Qui reprehenderit consectetur sint qui pariatur sit. Dolore cillum irure officia qui pariatur officia fugiat.",
    id: 35,
  },
  {
    city_id_from: 7,
    city_id_to: 12,
    short_duration: "2 hours",
    long_duration:
      "Nostrud dolore mollit occaecat sunt dolore ut do. Eu labore anim amet eiusmod eiusmod. Non enim laborum velit velit ex incididunt anim eu nisi esse do eu et. Exercitation est sint ipsum nostrud irure laboris irure consequat fugiat adipisicing irure laborum nisi.",
    id: 36,
  },
  {
    city_id_from: 7,
    city_id_to: 13,
    short_duration: "3 hours",
    long_duration:
      "Culpa ut eu qui culpa incididunt veniam. Exercitation ex minim Lorem velit ipsum dolor. Aliquip sit est eiusmod cillum mollit anim in. Lorem quis occaecat commodo labore. Lorem eu ipsum excepteur deserunt officia.",
    id: 37,
  },
  {
    city_id_from: 7,
    city_id_to: 14,
    short_duration: "5 hours",
    long_duration:
      "Irure cillum excepteur occaecat irure nulla reprehenderit esse deserunt reprehenderit duis cupidatat excepteur incididunt. Eiusmod irure Lorem exercitation duis. Ea do in labore incididunt Lorem ex consequat sunt laboris enim officia eiusmod. Est id excepteur cillum dolore dolore ut anim commodo sunt excepteur id ullamco mollit reprehenderit. Sint ullamco irure quis dolor. Ad sit pariatur proident ipsum sit. Elit cupidatat voluptate laboris sit nulla.",
    id: 38,
  },
  {
    city_id_from: 7,
    city_id_to: 15,
    short_duration: "2 hours",
    long_duration:
      "Tempor nulla fugiat et enim dolor esse culpa qui nostrud fugiat ipsum sit laboris voluptate. Esse eiusmod culpa sit quis eu sit. Veniam ullamco cillum eiusmod officia magna Lorem nisi. Velit irure eu laboris elit tempor nostrud.",
    id: 39,
  },
  {
    city_id_from: 7,
    city_id_to: 16,
    short_duration: "7 hours",
    long_duration:
      "Ex in ipsum ipsum exercitation voluptate minim dolor id proident sunt quis dolor ipsum est. Enim nostrud ut ipsum commodo proident. Esse occaecat cillum consequat ex laborum in pariatur laborum commodo dolor dolor veniam minim. Ex nulla occaecat quis aute in proident. Exercitation aliquip proident proident veniam. Eiusmod irure do elit deserunt tempor reprehenderit enim exercitation irure velit qui consectetur velit officia. Culpa magna adipisicing commodo velit culpa. Dolore sit ea ea fugiat ex deserunt adipisicing qui anim labore excepteur. Laboris cillum elit in esse cillum culpa consectetur.",
    id: 40,
  },
  {
    city_id_from: 7,
    city_id_to: 17,
    short_duration: "7 hours",
    long_duration:
      "Lorem officia id adipisicing nisi. Id Lorem do commodo dolor exercitation. Eiusmod sunt dolore quis incididunt duis quis irure laboris magna ad. Consequat incididunt officia cillum amet do velit anim consectetur excepteur aute. Velit non qui elit tempor eiusmod occaecat non. Laboris amet magna cupidatat dolore dolore ea eiusmod qui consectetur aliqua consequat magna. Sint amet adipisicing mollit exercitation mollit in non exercitation. Ex non anim minim esse irure reprehenderit. Incididunt labore qui velit amet sit ullamco veniam officia in eiusmod ipsum ipsum aliqua enim.",
    id: 41,
  },
  {
    city_id_from: 7,
    city_id_to: 19,
    short_duration: "2 hours",
    long_duration:
      "Cupidatat velit in excepteur pariatur esse id excepteur. Esse deserunt esse est proident sint cillum labore veniam cillum tempor amet reprehenderit aliquip. Pariatur amet cillum exercitation dolore sunt amet adipisicing ea sint dolor dolore. Deserunt voluptate incididunt dolor officia consectetur nostrud minim et.",
    id: 42,
  },
  {
    city_id_from: 9,
    city_id_to: 11,
    short_duration: "7 hours",
    long_duration:
      "Mollit dolore mollit mollit adipisicing culpa pariatur duis magna officia qui. Irure sunt duis deserunt magna mollit ex duis ipsum elit et est tempor ut. Id esse ad sit voluptate exercitation excepteur. Magna deserunt fugiat cillum id sunt magna fugiat ad ex exercitation veniam culpa velit Lorem. Non occaecat anim do aliquip eu nostrud exercitation enim est minim. Ea tempor voluptate esse in elit. Excepteur ullamco enim cupidatat ullamco consequat sit nostrud amet in commodo quis. Nostrud culpa enim et nulla irure aliqua laborum ipsum pariatur id dolor sunt consequat. Et sit irure esse minim laboris irure officia ea quis laborum.",
    id: 43,
  },
  {
    city_id_from: 9,
    city_id_to: 12,
    short_duration: "6 hours",
    long_duration:
      "Ullamco aliquip labore pariatur cillum fugiat anim do minim irure labore commodo. Nulla laboris minim quis qui velit Lorem eiusmod pariatur sint in in do in eiusmod. Eu cupidatat sit ipsum incididunt pariatur magna. Nisi cupidatat incididunt tempor nulla cupidatat proident id sit mollit. Ullamco eiusmod deserunt do minim. Dolore consectetur et enim excepteur amet ipsum cillum ullamco velit mollit dolor ad voluptate anim. Exercitation officia in exercitation ad voluptate. Nulla laboris laborum ad fugiat non sint et duis Lorem in.",
    id: 44,
  },
  {
    city_id_from: 9,
    city_id_to: 13,
    short_duration: "3 hours",
    long_duration:
      "Do incididunt officia nulla elit id culpa labore dolore ipsum amet reprehenderit est. Anim ad laborum aliquip fugiat qui minim commodo amet pariatur laborum consequat. Veniam sit quis enim ea. Nulla aute est cillum esse consectetur ipsum est consequat. Voluptate est nulla non id duis qui.",
    id: 45,
  },
  {
    city_id_from: 9,
    city_id_to: 14,
    short_duration: "5 hours",
    long_duration:
      "Ut occaecat do nulla cupidatat velit in adipisicing eu nisi voluptate dolor. Cillum eu dolor esse aliqua incididunt incididunt pariatur laboris cillum anim. Sit dolor occaecat minim eiusmod qui elit consectetur nulla laboris nulla excepteur Lorem cillum voluptate. Ipsum esse id minim consectetur aliqua laborum esse qui elit esse labore veniam ea laboris. Pariatur nisi ea tempor enim consectetur veniam reprehenderit ex excepteur quis id consectetur aute cupidatat. Consectetur irure velit nostrud nostrud magna veniam sunt occaecat ipsum. Ut sint in deserunt occaecat laborum eu enim ut do quis officia ad eiusmod.",
    id: 46,
  },
  {
    city_id_from: 9,
    city_id_to: 15,
    short_duration: "8 hours",
    long_duration:
      "Reprehenderit aute commodo aute exercitation ipsum ullamco Lorem quis. Fugiat amet irure proident consectetur sint nisi eu culpa cupidatat irure aliqua pariatur tempor. Et fugiat ullamco nostrud sit labore enim. Ut consectetur mollit laborum non reprehenderit. Nisi veniam mollit magna anim labore. Excepteur voluptate deserunt ea commodo cillum veniam ex commodo. Esse proident ex deserunt magna non. Sunt amet culpa cillum incididunt nulla ut in Lorem dolore. Nostrud ut cillum excepteur laborum enim est fugiat. Tempor sit cillum anim minim velit pariatur nostrud nulla anim exercitation.",
    id: 47,
  },
  {
    city_id_from: 9,
    city_id_to: 16,
    short_duration: "5 hours",
    long_duration:
      "Quis excepteur laborum labore excepteur velit et id. Minim proident duis ut consectetur consectetur est consequat mollit anim in mollit deserunt cillum. Aliqua fugiat cupidatat excepteur elit laboris dolore elit quis mollit. Deserunt dolore dolore veniam amet quis id aliquip nostrud elit do deserunt nulla sint. Enim elit ea qui excepteur aliquip ad culpa commodo. Id dolor do irure aute. Irure anim magna commodo deserunt aute consequat ut cupidatat.",
    id: 48,
  },
  {
    city_id_from: 9,
    city_id_to: 17,
    short_duration: "3 hours",
    long_duration:
      "Non tempor amet commodo cupidatat ad incididunt est dolore excepteur commodo ullamco labore. Quis id excepteur sint pariatur eiusmod non consectetur aliquip veniam et tempor. Culpa et irure ut nostrud mollit eiusmod laboris id adipisicing dolor laboris. Deserunt excepteur mollit occaecat dolor proident deserunt in aliqua. Ut ipsum proident esse veniam mollit labore qui nulla deserunt.",
    id: 49,
  },
  {
    city_id_from: 9,
    city_id_to: 19,
    short_duration: "4 hours",
    long_duration:
      "Sit id ad incididunt magna dolore deserunt ea cillum aliqua. Ullamco labore pariatur adipisicing excepteur adipisicing aliqua occaecat aliquip ex id. Ea nulla magna commodo voluptate est ut ipsum. Sunt in velit eu nostrud proident. In cillum commodo laboris sunt deserunt. Anim nisi eu ipsum nulla officia laborum nisi.",
    id: 50,
  },
  {
    city_id_from: 11,
    city_id_to: 12,
    short_duration: "2 hours",
    long_duration:
      "Non deserunt ea voluptate dolore ex nostrud voluptate anim ea do aliquip ex. Amet do quis ut anim do quis ullamco Lorem voluptate duis sunt. Cupidatat in deserunt in tempor laborum do in excepteur et nulla eiusmod aliqua consequat Lorem. Deserunt culpa sunt officia labore ut aliqua quis.",
    id: 51,
  },
  {
    city_id_from: 11,
    city_id_to: 13,
    short_duration: "3 hours",
    long_duration:
      "Eu ut in minim laboris do anim. Deserunt cillum amet laboris consectetur excepteur tempor deserunt nostrud est amet tempor officia officia culpa. Ut reprehenderit veniam eiusmod anim reprehenderit aliqua occaecat elit nulla deserunt ex excepteur veniam. Mollit qui nulla duis est sunt incididunt nulla consectetur do irure. Eu adipisicing ullamco tempor dolore sint ut consectetur adipisicing labore nisi aliqua excepteur.",
    id: 52,
  },
  {
    city_id_from: 11,
    city_id_to: 14,
    short_duration: "3 hours",
    long_duration:
      "Pariatur qui incididunt veniam officia ea do qui. Pariatur amet velit nostrud minim consequat veniam deserunt. Officia cillum enim est id sunt et proident laboris adipisicing labore non deserunt fugiat officia. Cupidatat laboris incididunt anim adipisicing do proident labore do cupidatat proident culpa. Ad ad consequat aute voluptate Lorem fugiat esse voluptate ipsum.",
    id: 53,
  },
  {
    city_id_from: 11,
    city_id_to: 15,
    short_duration: "2 hours",
    long_duration:
      "Ut sit occaecat ad laborum non. Est excepteur laborum aliqua aliquip culpa sunt ea ullamco. Eu elit reprehenderit eiusmod ea ex eu aute velit. Aute dolore veniam esse proident quis ea eu do eu minim laborum sunt laborum.",
    id: 54,
  },
  {
    city_id_from: 11,
    city_id_to: 16,
    short_duration: "8 hours",
    long_duration:
      "Laboris velit consectetur voluptate magna id. Adipisicing culpa esse cillum duis do mollit nisi amet. Non proident qui sunt velit sint sint. Nostrud qui duis amet commodo amet elit labore reprehenderit incididunt dolore. Excepteur nisi commodo eu aliquip. Cillum adipisicing aute ullamco laborum dolore laborum tempor elit. Ipsum magna amet Lorem eu nisi ex labore consectetur eiusmod in ad mollit. Cillum enim excepteur eiusmod proident. Sit incididunt nostrud eu do ad eu nostrud consequat. Elit officia cupidatat commodo elit proident.",
    id: 55,
  },
  {
    city_id_from: 11,
    city_id_to: 17,
    short_duration: "6 hours",
    long_duration:
      "Nostrud ex est aliquip excepteur ex irure commodo ipsum mollit minim ut ea elit tempor. Nulla non consequat dolor commodo. Proident irure ut id commodo eiusmod. Ad ad officia elit nulla dolor anim dolor ad. Cupidatat elit id voluptate ea proident sunt non nulla quis sit est. Deserunt officia amet eiusmod sint duis officia eiusmod fugiat enim aute. Qui exercitation qui ipsum reprehenderit sunt nostrud cillum mollit. Magna veniam laborum adipisicing pariatur aliqua cillum eiusmod cupidatat amet commodo.",
    id: 56,
  },
  {
    city_id_from: 11,
    city_id_to: 19,
    short_duration: "3 hours",
    long_duration:
      "Nostrud eiusmod sit eiusmod velit exercitation aute ad aliqua dolor mollit laborum. Voluptate pariatur officia consectetur esse aute. Ea nisi adipisicing exercitation proident fugiat ex. Anim id mollit do reprehenderit irure consectetur nulla cillum ex. Consequat est Lorem cupidatat nisi ipsum sunt excepteur dolor eu pariatur magna.",
    id: 57,
  },
  {
    city_id_from: 12,
    city_id_to: 13,
    short_duration: "3 hours",
    long_duration:
      "Pariatur quis voluptate ut quis Lorem esse incididunt laborum velit non. Aute amet deserunt officia dolor fugiat minim dolore exercitation sit laboris. Velit excepteur enim nisi do aliquip anim nisi commodo id nulla quis deserunt. Non irure fugiat ex culpa esse ad proident irure mollit nisi. Irure amet do mollit elit laboris et laboris et minim.",
    id: 58,
  },
  {
    city_id_from: 12,
    city_id_to: 14,
    short_duration: "2 hours",
    long_duration:
      "Ullamco anim incididunt cupidatat ea non ad nostrud ut minim duis. Aliquip veniam reprehenderit nostrud est ad irure irure exercitation. Deserunt qui eiusmod et exercitation quis. Commodo pariatur nulla aliquip consectetur sunt Lorem elit voluptate sit.",
    id: 59,
  },
  {
    city_id_from: 12,
    city_id_to: 15,
    short_duration: "8 hours",
    long_duration:
      "In duis id et ullamco officia dolor dolor sunt. Id tempor nostrud laboris Lorem ipsum. Dolor deserunt duis do minim enim deserunt officia id laboris occaecat nulla adipisicing. Ipsum pariatur adipisicing duis deserunt deserunt aliquip occaecat magna officia nisi occaecat. Nulla aliqua aliqua labore ipsum occaecat fugiat. Tempor excepteur mollit sint labore nostrud amet pariatur irure pariatur in duis tempor velit deserunt. Eu nisi ipsum nulla commodo nostrud ex cupidatat commodo tempor culpa laboris exercitation. Consequat nulla irure dolore est ullamco adipisicing amet minim ad magna ut ipsum magna id. Enim minim Lorem cupidatat est sunt exercitation officia tempor. Labore anim sint id eiusmod.",
    id: 60,
  },
  {
    city_id_from: 12,
    city_id_to: 16,
    short_duration: "5 hours",
    long_duration:
      "Fugiat aute mollit eiusmod excepteur ut proident. Do aliqua velit qui reprehenderit ea laboris. Sunt eiusmod minim duis non proident occaecat occaecat culpa proident non incididunt. Magna anim eiusmod sunt dolore officia reprehenderit ex culpa. In officia in nostrud ut tempor. Amet cillum commodo magna quis. Laboris laboris ad laboris adipisicing esse.",
    id: 61,
  },
  {
    city_id_from: 12,
    city_id_to: 17,
    short_duration: "4 hours",
    long_duration:
      "Laborum culpa ut laborum cillum officia est nulla. Pariatur aliquip incididunt ipsum laboris et est non elit. Duis sit dolore ipsum dolor consectetur dolor deserunt elit ad tempor minim voluptate proident. Sunt fugiat ut do adipisicing dolor duis anim. Esse consequat duis anim laboris veniam proident minim officia elit et magna. Esse esse amet cillum voluptate velit officia in ut mollit.",
    id: 62,
  },
  {
    city_id_from: 12,
    city_id_to: 19,
    short_duration: "7 hours",
    long_duration:
      "Nisi minim proident proident laborum dolor duis dolore do occaecat quis amet sunt velit. Commodo laboris magna cupidatat cillum proident labore nostrud exercitation. Aute commodo nisi aute sunt. Commodo sunt sint consequat reprehenderit quis proident pariatur. Dolor deserunt cupidatat laboris consectetur ut commodo culpa elit. Consequat labore ex reprehenderit dolore mollit ex ut. Consequat et aute pariatur veniam non. Enim laboris nisi irure labore anim cillum dolore enim adipisicing dolor non laborum ipsum irure. Est sit voluptate ut elit.",
    id: 63,
  },
  {
    city_id_from: 13,
    city_id_to: 14,
    short_duration: "3 hours",
    long_duration:
      "Duis nostrud enim cupidatat consequat elit aliqua cupidatat excepteur elit. Occaecat nostrud qui non mollit voluptate et. Reprehenderit pariatur duis occaecat excepteur enim ea ullamco. Culpa laborum do dolore in dolore tempor. In elit voluptate minim consequat commodo cupidatat ipsum culpa laborum aliqua aliquip.",
    id: 64,
  },
  {
    city_id_from: 13,
    city_id_to: 15,
    short_duration: "8 hours",
    long_duration:
      "Adipisicing sint veniam aliqua aliquip commodo magna nulla aute sit ex reprehenderit. Sit duis officia culpa incididunt eu ad sit. Irure consequat irure consectetur ipsum sunt ipsum anim dolore aliqua. Nostrud aliquip id aliquip anim consectetur minim amet ullamco tempor in. Occaecat non sint eu magna pariatur nisi deserunt. Dolor labore culpa ut labore minim non sunt officia quis tempor in adipisicing sint. In exercitation cupidatat minim veniam incididunt. Aliquip amet Lorem tempor duis fugiat ea anim voluptate est cillum sunt commodo veniam ipsum. Dolore do velit aute nisi. Officia exercitation consequat ad aute duis esse aliquip dolore veniam commodo aliqua excepteur deserunt cupidatat.",
    id: 65,
  },
  {
    city_id_from: 13,
    city_id_to: 16,
    short_duration: "3 hours",
    long_duration:
      "Consequat mollit commodo tempor tempor culpa et adipisicing est reprehenderit. Fugiat consectetur eu eu sunt commodo id. Elit magna irure et ut tempor elit. Irure esse velit nulla incididunt consequat mollit ex. Aute Lorem eiusmod minim minim et culpa enim laboris culpa velit.",
    id: 66,
  },
  {
    city_id_from: 13,
    city_id_to: 17,
    short_duration: "4 hours",
    long_duration:
      "In culpa consectetur ipsum nostrud excepteur velit exercitation non mollit veniam labore consequat. Aute ea aute exercitation aliqua aliqua aliquip deserunt. Ullamco velit qui labore Lorem incididunt ullamco laboris ad et nostrud sint sit eu. Pariatur irure deserunt proident anim laborum quis est reprehenderit non et amet ea. Dolore officia et laborum sit deserunt in ipsum ullamco ea est sint do cupidatat est. Nisi consectetur pariatur excepteur quis.",
    id: 67,
  },
  {
    city_id_from: 13,
    city_id_to: 19,
    short_duration: "4 hours",
    long_duration:
      "Amet exercitation nostrud anim quis pariatur mollit ipsum irure. Anim id officia deserunt labore. Ex elit officia duis dolor duis ea veniam commodo. Cupidatat excepteur sit voluptate labore eu veniam esse irure quis. Dolor exercitation cupidatat consectetur enim Lorem officia officia eu sint ullamco ea irure. Consectetur aliqua aliquip aute qui ad consequat irure.",
    id: 68,
  },
  {
    city_id_from: 14,
    city_id_to: 15,
    short_duration: "2 hours",
    long_duration:
      "Aliquip est irure ipsum nostrud. Commodo aute non nulla pariatur aliqua eu deserunt labore ipsum proident consectetur et. Dolor deserunt exercitation nulla ipsum ut cupidatat mollit do fugiat labore commodo enim exercitation. Qui minim est anim enim elit do qui dolore ipsum.",
    id: 69,
  },
  {
    city_id_from: 14,
    city_id_to: 16,
    short_duration: "3 hours",
    long_duration:
      "Dolore cupidatat adipisicing excepteur anim do consectetur officia incididunt. Laborum sit officia est dolore incididunt laborum velit do deserunt eu commodo id. Labore do nostrud officia elit. Excepteur aute nisi velit laboris minim. Incididunt ullamco deserunt pariatur culpa qui duis mollit adipisicing fugiat occaecat non occaecat anim qui.",
    id: 70,
  },
  {
    city_id_from: 14,
    city_id_to: 17,
    short_duration: "4 hours",
    long_duration:
      "Eiusmod ex ipsum exercitation exercitation ullamco enim. Adipisicing fugiat ullamco eiusmod dolor qui qui quis est. Duis nulla qui sit nisi deserunt. Ad labore nisi eu officia deserunt anim laborum nostrud tempor reprehenderit sunt cillum ipsum. Labore cupidatat anim culpa duis reprehenderit minim labore fugiat aliquip. Veniam consectetur mollit duis consequat aliquip incididunt non non ex est ex cillum officia culpa.",
    id: 71,
  },
  {
    city_id_from: 14,
    city_id_to: 19,
    short_duration: "5 hours",
    long_duration:
      "Consectetur ex deserunt quis minim officia cillum incididunt ad voluptate. Non qui non sint laborum nostrud aute officia qui amet ad ad. Est ullamco mollit ipsum veniam excepteur aliquip aliqua. Minim elit laborum sunt sit et consectetur adipisicing cillum. Enim velit cupidatat adipisicing ut do deserunt elit in non cupidatat excepteur ex. Officia sit sunt officia nulla veniam Lorem est. Anim quis laborum est ex anim aliquip proident quis fugiat eu.",
    id: 72,
  },
  {
    city_id_from: 15,
    city_id_to: 16,
    short_duration: "8 hours",
    long_duration:
      "In laboris est mollit ad do. Lorem velit qui ad dolore fugiat ut laborum consectetur excepteur irure aute ipsum labore deserunt. Quis irure eiusmod ea eiusmod reprehenderit amet. Dolor occaecat culpa eu laborum fugiat sint est proident ea ad mollit. Labore consectetur amet nisi laboris aliqua fugiat amet amet occaecat ut. Dolor ad quis ut quis ullamco nisi eu duis aliqua. Cillum est eu reprehenderit in nisi eu magna commodo. Reprehenderit eiusmod labore cupidatat non. Laboris enim cillum exercitation amet dolor. Duis deserunt magna laborum reprehenderit.",
    id: 73,
  },
  {
    city_id_from: 15,
    city_id_to: 17,
    short_duration: "3 hours",
    long_duration:
      "Laborum nisi dolore qui non eiusmod in laborum culpa excepteur. Dolor incididunt incididunt fugiat nostrud. Mollit magna aliquip aliquip cupidatat occaecat quis culpa esse deserunt cillum. Aliqua ipsum sit fugiat eu esse proident duis aute sit. Eu qui excepteur excepteur sint laboris eu non laborum minim.",
    id: 74,
  },
  {
    city_id_from: 15,
    city_id_to: 19,
    short_duration: "4 hours",
    long_duration:
      "Aute minim do enim deserunt et dolore mollit labore consectetur dolor et irure elit. Magna esse cupidatat sint culpa reprehenderit esse incididunt qui officia occaecat sunt consequat non consectetur. Sint nostrud et pariatur quis nisi reprehenderit elit ullamco. Labore nostrud exercitation amet tempor id Lorem tempor officia ad eiusmod officia sit. Sint labore nostrud minim velit reprehenderit esse ut minim cillum consequat. Id incididunt sint irure exercitation enim excepteur officia dolor non occaecat.",
    id: 75,
  },
  {
    city_id_from: 16,
    city_id_to: 17,
    short_duration: "5 hours",
    long_duration:
      "Anim ullamco est laborum dolore consequat ea consectetur commodo do cupidatat tempor excepteur laborum. Tempor incididunt do velit esse consectetur veniam esse. Ut nulla veniam exercitation sit cillum voluptate ad magna commodo est in. Anim Lorem magna in fugiat quis excepteur aute consequat magna exercitation id aliquip elit. Et occaecat in sit incididunt irure deserunt veniam deserunt culpa sit fugiat culpa irure mollit. Quis laborum commodo elit qui et occaecat ut. Quis ad reprehenderit Lorem nisi elit excepteur labore tempor quis cillum.",
    id: 76,
  },
  {
    city_id_from: 16,
    city_id_to: 19,
    short_duration: "8 hours",
    long_duration:
      "Anim aute ullamco velit voluptate cupidatat dolore qui qui eu cillum consectetur do deserunt. Eu Lorem duis aliqua sint. Pariatur reprehenderit pariatur est sint. Aliqua mollit voluptate consequat aliquip reprehenderit deserunt sint eiusmod. Pariatur mollit voluptate officia anim magna irure labore sunt velit et exercitation est veniam. Duis reprehenderit mollit est et adipisicing enim laboris dolore reprehenderit anim elit culpa. Aliquip ut qui ut qui id ipsum ullamco mollit commodo esse aute ipsum exercitation voluptate. Eu consectetur est exercitation anim commodo Lorem Lorem cillum nostrud culpa incididunt. Ipsum nulla proident mollit Lorem veniam. Nostrud cillum officia irure consectetur consequat ipsum officia reprehenderit.",
    id: 77,
  },
  {
    city_id_from: 17,
    city_id_to: 19,
    short_duration: "2 hours",
    long_duration:
      "Ipsum elit ut excepteur aute exercitation tempor ipsum culpa ad irure sunt elit. Qui consectetur ipsum qui eiusmod non cillum ex reprehenderit Lorem elit mollit cupidatat. Proident ullamco consectetur sit fugiat voluptate. Laborum voluptate aliquip irure et ullamco id Lorem sit do quis exercitation eu.",
    id: 78,
  },
  {
    city_id_from: 20,
    city_id_to: 24,
    short_duration: "2 hours",
    long_duration:
      "Labore sit cupidatat dolor aliquip cillum anim sint aliqua fugiat. Laboris laborum Lorem id esse aute est sunt magna tempor veniam. Pariatur est voluptate ullamco est amet labore veniam sint. Id reprehenderit reprehenderit amet anim anim ea.",
    id: 79,
  },
].map((record) => {
  return {
    ...record,
    city_from: cities().find((c) => c.id === record.city_id_from),
    city_to: cities().find((c) => c.id === record.city_id_to),
  };
});

export const supplierRoutesRaw = [
  {
    id: 1,
    supplier_id: 1,
    price: 2926,
    route_id: 26,
  },
  {
    id: 2,
    supplier_id: 1,
    price: 13993,
    route_id: 28,
  },
  {
    id: 3,
    supplier_id: 1,
    price: 2597,
    route_id: 28,
  },
  {
    id: 4,
    supplier_id: 1,
    price: 10680,
    route_id: 13,
  },
  {
    id: 5,
    supplier_id: 1,
    price: 13141,
    route_id: 3,
  },
  {
    id: 6,
    supplier_id: 2,
    price: 14450,
    route_id: 6,
  },
  {
    id: 7,
    supplier_id: 2,
    price: 9263,
    route_id: 37,
  },
  {
    id: 8,
    supplier_id: 2,
    price: 10205,
    route_id: 40,
  },
  {
    id: 9,
    supplier_id: 2,
    price: 12498,
    route_id: 69,
  },
  {
    id: 10,
    supplier_id: 2,
    price: 2396,
    route_id: 54,
  },
  {
    id: 11,
    supplier_id: 3,
    price: 3576,
    route_id: 51,
  },
  {
    id: 12,
    supplier_id: 3,
    price: 6917,
    route_id: 25,
  },
  {
    id: 13,
    supplier_id: 3,
    price: 7478,
    route_id: 36,
  },
  {
    id: 14,
    supplier_id: 3,
    price: 4104,
    route_id: 10,
  },
  {
    id: 15,
    supplier_id: 3,
    price: 9835,
    route_id: 19,
  },
  {
    id: 16,
    supplier_id: 4,
    price: 14557,
    route_id: 11,
  },
  {
    id: 17,
    supplier_id: 4,
    price: 13098,
    route_id: 13,
  },
  {
    id: 18,
    supplier_id: 4,
    price: 13252,
    route_id: 8,
  },
  {
    id: 19,
    supplier_id: 4,
    price: 7433,
    route_id: 13,
  },
  {
    id: 20,
    supplier_id: 4,
    price: 9473,
    route_id: 3,
  },
  {
    id: 21,
    supplier_id: 5,
    price: 3193,
    route_id: 52,
  },
  {
    id: 22,
    supplier_id: 5,
    price: 7178,
    route_id: 69,
  },
  {
    id: 23,
    supplier_id: 5,
    price: 2347,
    route_id: 71,
  },
  {
    id: 24,
    supplier_id: 5,
    price: 12754,
    route_id: 3,
  },
  {
    id: 25,
    supplier_id: 5,
    price: 7297,
    route_id: 75,
  },
  {
    id: 26,
    supplier_id: 6,
    price: 14596,
    route_id: 33,
  },
  {
    id: 27,
    supplier_id: 6,
    price: 9669,
    route_id: 42,
  },
  {
    id: 28,
    supplier_id: 6,
    price: 6424,
    route_id: 44,
  },
  {
    id: 29,
    supplier_id: 6,
    price: 9454,
    route_id: 63,
  },
  {
    id: 30,
    supplier_id: 6,
    price: 14429,
    route_id: 11,
  },
  {
    id: 31,
    supplier_id: 7,
    price: 4253,
    route_id: 13,
  },
  {
    id: 32,
    supplier_id: 7,
    price: 5213,
    route_id: 3,
  },
  {
    id: 33,
    supplier_id: 7,
    price: 8310,
    route_id: 43,
  },
  {
    id: 34,
    supplier_id: 7,
    price: 5963,
    route_id: 55,
  },
  {
    id: 35,
    supplier_id: 7,
    price: 11823,
    route_id: 23,
  },
  {
    id: 36,
    supplier_id: 8,
    price: 4228,
    route_id: 45,
  },
  {
    id: 37,
    supplier_id: 8,
    price: 9334,
    route_id: 77,
  },
  {
    id: 38,
    supplier_id: 8,
    price: 3470,
    route_id: 65,
  },
  {
    id: 39,
    supplier_id: 8,
    price: 3133,
    route_id: 33,
  },
  {
    id: 40,
    supplier_id: 8,
    price: 5299,
    route_id: 20,
  },
  {
    id: 41,
    supplier_id: 9,
    price: 4250,
    route_id: 43,
  },
  {
    id: 42,
    supplier_id: 9,
    price: 5905,
    route_id: 72,
  },
  {
    id: 43,
    supplier_id: 9,
    price: 14816,
    route_id: 48,
  },
  {
    id: 44,
    supplier_id: 9,
    price: 9696,
    route_id: 4,
  },
  {
    id: 45,
    supplier_id: 9,
    price: 5896,
    route_id: 1,
  },
  {
    id: 46,
    supplier_id: 10,
    price: 13602,
    route_id: 31,
  },
  {
    id: 47,
    supplier_id: 10,
    price: 3033,
    route_id: 34,
  },
  {
    id: 48,
    supplier_id: 10,
    price: 5044,
    route_id: 60,
  },
  {
    id: 49,
    supplier_id: 10,
    price: 5884,
    route_id: 13,
  },
  {
    id: 50,
    supplier_id: 10,
    price: 11277,
    route_id: 56,
  },
];

export const supplierRoutes = supplierRoutesRaw.map((supplierRoute) => {
  return {
    ...supplierRoute,
    route: routes.find((route) => route.id === supplierRoute.route_id),
    supplier: suppliers.find((s) => s.id === supplierRoute.supplier_id),
  };
});
