export function randomAnimal(): string {
    return animals[Math.floor(Math.random() * animals.length)];
}

export function randomMythical(): string {
    return mythicalAnimals[Math.floor(Math.random() * mythicalAnimals.length)];
}

export function randomMythicalOrAnimal(): string {
    if(Math.random()>=0.5){
        return randomAnimal();
    } else {
        return randomMythical();
    }
}

export let animals = [
    'Aardvark',
    'Abyssinian',
    'Adelie Penguin',
    'Affenpinscher',
    'Afghan Hound',
    'African Bullfrog',
    'African Bush Elephant',
    'African Civet',
    'African Clawed Frog',
    'African Forest Elephant',
    'African Palm Civet',
    'African Penguin',
    'African Tree Toad',
    'African Wild Dog',
    'Ainu',
    'Airedale Terrier',
    'Airedoodle',
    'Akbash',
    'Akita',
    'Akita Shepherd',
    'Alaskan Malamute',
    'Alaskan Shepherd',
    'Albacore Tuna',
    'Albatross',
    'Aldabra Giant Tortoise',
    'Alligator',
    'Alligator Gar',
    'Alpaca',
    'Alpine Dachsbracke',
    'Alpine Goat',
    'Amazon River Dolphin',
    'American Alsatian',
    'American Bulldog',
    'American Cocker Spaniel',
    'American Coonhound',
    'American Eskimo Dog',
    'American Foxhound',
    'American Hairless Terrier',
    'American Pit Bull Terrier',
    'American Pygmy Goat',
    'American Staffordshire Terrier',
    'American Water Spaniel',
    'Amur Leopard',
    'Anatolian Shepherd Dog',
    'Anchovies',
    'Angelfish',
    'Ant',
    'Anteater',
    'Antelope',
    'Appenzeller Dog',
    'Arapaima',
    'Arctic Fox',
    'Arctic Hare',
    'Arctic Wolf',
    'Armadillo',
    'Asian Elephant',
    'Asian Giant Hornet',
    'Asian Palm Civet',
    'Asiatic Black Bear',
    'Aurochs',
    'Aussiedoodle',
    'Aussiedor',
    'Australian Cattle Dog',
    'Australian Kelpie Dog',
    'Australian Labradoodle',
    'Australian Mist',
    'Australian Retriever',
    'Australian Shepherd',
    'Australian Terrier',
    'Avocet',
    'Axolotl',
    'Aye Aye',
    'Baboon',
    'Bactrian Camel',
    'Badger',
    'Baiji',
    'Balinese',
    'Banded Palm Civet',
    'Bandicoot',
    'Banjo Catfish',
    'Barb',
    'Barn Owl',
    'Barnacle',
    'Barracuda',
    'Barramundi Fish',
    'Barred Owl',
    'Basenji Dog',
    'Basking Shark',
    'Bassador',
    'Basset Fauve de Bretagne',
    'Basset Hound',
    'Bassetoodle',
    'Bat',
    'Bavarian Mountain Hound',
    'Bea-Tzu',
    'Beabull',
    'Beagador',
    'Beagle',
    'Beagle Shepherd',
    'Beaglier',
    'Beago',
    'Bear',
    'Bearded Collie',
    'Bearded Dragon',
    'Beaski',
    'Beaver',
    'Bedlington Terrier',
    'Beetle',
    'Beluga Sturgeon',
    'Bengal Tiger',
    'Bernedoodle',
    'Bernese Mountain Dog',
    'Bernese Shepherd',
    'Bichir',
    'Bichon Frise',
    'Bichpoo',
    'Biewer Terrier',
    'Binturong',
    'Bird',
    'Birds Of Paradise',
    'Birman',
    'Bison',
    'Black Marlin',
    'Black Rhinoceros',
    'Black Russian Terrier',
    'Black Widow Spider',
    'Black-Footed Ferret',
    'Blobfish',
    'Bloodhound',
    'Blue Jay',
    'Blue Lacy Dog',
    'Blue Whale',
    'Bluefin Tuna',
    'Bluetick Coonhound',
    'Bobcat',
    'Boggle',
    'Boglen Terrier',
    'Bolognese Dog',
    'Bombay',
    'Bongo',
    'Bonito Fish',
    'Bonobo',
    'Booby',
    'Borador',
    'Border Collie',
    'Border Terrier',
    'Bordoodle',
    'Borkie',
    'Bornean Orang-utan',
    'Borneo Elephant',
    'Boston Terrier',
    'Bottlenose Dolphin',
    'Bowfin',
    'Bowhead Whale',
    'Boxador',
    'Boxer Dog',
    'Boxerdoodle',
    'Boxsky',
    'Boykin Spaniel',
    'Brazilian Terrier',
    'British Timber',
    'Brown Bear',
    'Brown Hyena',
    'Budgerigar',
    'Buffalo',
    'Bull Shark',
    'Bull Terrier',
    'Bulldog',
    'Bullfrog',
    'Bullmastiff',
    'Bumblebee',
    'Burmese',
    'Burrowing Frog',
    'Bush Baby',
    'Butterfly',
    'Butterfly Fish',
    'Caiman',
    'Caiman Lizard',
    'Cairn Terrier',
    'Camel',
    'Camel Spider',
    'Canaan Dog',
    'Canadian Eskimo Dog',
    'Capybara',
    'Caracal',
    'Carolina Dog',
    'Carp',
    'Cassowary',
    'Cat',
    'Caterpillar',
    'Catfish',
    'Cavador',
    'Cavalier King Charles Spaniel',
    'Cavapoo',
    'Centipede',
    'Cesky Fousek',
    'Cesky Terrier',
    'Chameleon',
    'Chamois',
    'Cheagle',
    'Cheetah',
    'Chesapeake Bay Retriever',
    'Chicken',
    'Chihuahua',
    'Chimaera',
    'Chimpanzee',
    'Chinchilla',
    'Chinese Crested Dog',
    'Chinese Paddlefish',
    'Chinook',
    'Chinstrap Penguin',
    'Chipmunk',
    'Chipoo',
    'Chorkie',
    'Chow Chow',
    'Chow Shepherd',
    'Cicada',
    'Cichlid',
    'Clouded Leopard',
    'Clownfish',
    'Clumber Spaniel',
    'Coati',
    'Cockapoo',
    'Cockatoo',
    'Cockroach',
    'Codfish',
    'Coelacanth',
    'Collared Peccary',
    'Collie',
    'Colossal Squid',
    'Common Buzzard',
    'Common Frog',
    'Common Loon',
    'Common Toad',
    'Cooper’s Hawk',
    'Coral',
    'Corgidor',
    'Corgipoo',
    'Corkie',
    'Corman Shepherd',
    'Cotton-top Tamarin',
    'Cougar',
    'Cow',
    'Coyote',
    'Crab',
    'Crab-Eating Macaque',
    'Crane',
    'Crested Penguin',
    'Crocodile',
    'Cross River Gorilla',
    'Curly Coated Retriever',
    'Cuscus',
    'Cuttlefish',
    'Dachsador',
    'Dachshund',
    'Dalmadoodle',
    'Dalmador',
    'Dalmatian',
    'Darwin’s Frog',
    'Deer',
    'Deer Head Chihuahua',
    'Desert Locust',
    'Desert Rain Frog',
    'Desert Tortoise',
    'Deutsche Bracke',
    'Dhole',
    'Dingo',
    'Discus',
    'Doberman Pinscher',
    'Dodo',
    'Dog',
    'Dogo Argentino',
    'Dogue De Bordeaux',
    'Dolphin',
    'Donkey',
    'Dorkie',
    'Dormouse',
    'Double Doodle',
    'Doxiepoo',
    'Doxle',
    'Dragonfish',
    'Dragonfly',
    'Drever',
    'Drum Fish',
    'Duck',
    'Dugong',
    'Dunker',
    'Dusky Dolphin',
    'Dwarf Crocodile',
    'Eagle',
    'Earwig',
    'Eastern Bluebird',
    'Eastern Gorilla',
    'Eastern Lowland Gorilla',
    'Echidna',
    'Edible Frog',
    'Eel',
    'Egyptian Mau',
    'Electric Eel',
    'Elephant',
    'Elephant Seal',
    'Elephant Shrew',
    'Emperor Penguin',
    'Emperor Tamarin',
    'Emu',
    'English Cocker Spaniel',
    'English Cream Golden Retriever',
    'English Shepherd',
    'English Springer Spaniel',
    'Entlebucher Mountain Dog',
    'Epagneul Pont Audemer',
    'Ermine',
    'Eskimo Dog',
    'Eskipoo',
    'Estrela Mountain Dog',
    'Falcon',
    'Fallow deer',
    'False Killer Whale',
    'Fangtooth',
    'Fennec Fox',
    'Ferret',
    'Field Spaniel',
    'Fin Whale',
    'Finnish Spitz',
    'Fire salamander',
    'Fire-Bellied Toad',
    'Fish',
    'Fishing Cat',
    'Flamingo',
    'Flat-Coated Retriever',
    'Florida Gar',
    'Flounder',
    'Fluke Fish',
    'Fly',
    'Flying Squirrel',
    'Fossa',
    'Fox',
    'Fox Terrier',
    'French Bulldog',
    'Frengle',
    'Frigatebird',
    'Frilled Lizard',
    'Frilled Shark',
    'Frog',
    'Fruit Bat',
    'Fur Seal',
    'Galapagos Penguin',
    'Galapagos Tortoise',
    'Gar',
    'Gecko',
    'Gentoo Penguin',
    'Geoffroys Tamarin',
    'Gerberian Shepsky',
    'Gerbil',
    'German Pinscher',
    'German Shepherd Guide',
    'German Sheppit',
    'German Sheprador',
    'Gharial',
    'Giant African Land Snail',
    'Giant Clam',
    'Giant Panda Bear',
    'Giant Schnauzer',
    'Giant Schnoodle',
    'Gibbon',
    'Gila Monster',
    'Giraffe',
    'Glass Frog',
    'Glass Lizard',
    'Glechon',
    'Glen Of Imaal Terrier',
    'Glow Worm',
    'Goat',
    'Goblin Shark',
    'Goldador',
    'Golden Lion Tamarin',
    'Golden Masked Owl',
    'Golden Oriole',
    'Golden Retriever',
    'Golden Saint',
    'Golden Shepherd',
    'Golden-Crowned Flying Fox',
    'Goldendoodle',
    'Goliath Frog',
    'Goose',
    'Gopher',
    'Gorilla',
    'Gouldian Finch',
    'Grasshopper',
    'Gray Fox',
    'Gray Tree Frog',
    'Great Dane',
    'Great Danoodle',
    'Great Pyrenees',
    'Great White Shark',
    'Greater Swiss Mountain Dog',
    'Green Anole',
    'Green Bee-Eater',
    'Green Frog',
    'Green Tree Frog',
    'Greenland Dog',
    'Grey Mouse Lemur',
    'Grey Reef Shark',
    'Grey Seal',
    'Greyhound',
    'Griffonshire',
    'Grizzly Bear',
    'Grouse',
    'Guinea Fowl',
    'Guinea Pig',
    'Guppy',
    'Hagfish',
    'Hammerhead Shark',
    'Hamster',
    'Hare',
    'Harpy Eagle',
    'Harrier',
    'Havanese',
    'Havapoo',
    'Havashire',
    'Hawaiian Crow',
    'Hedgehog',
    'Hercules Beetle',
    'Hermit Crab',
    'Heron',
    'Herring',
    'Highland Cattle',
    'Himalayan',
    'Hippopotamus',
    'Honduran White Bat',
    'Honey Badger',
    'Honey Bee',
    'Hoopoe',
    'Horn Shark',
    'Hornbill',
    'Horned Frog',
    'Horned Lizard',
    'Horse',
    'Horseshoe Crab',
    'House Finch',
    'Howler Monkey',
    'Human',
    'Humboldt Penguin',
    'Hummingbird',
    'Humpback Whale',
    'Huskador',
    'Husky Jack',
    'Huskydoodle',
    'Hyena',
    'Hagfish',
    'Hammerhead Shark',
    'Hamster',
    'Hare',
    'Harpy Eagle',
    'Harrier',
    'Havanese',
    'Havapoo',
    'Havashire',
    'Hawaiian Crow',
    'Hedgehog',
    'Hercules Beetle',
    'Hermit Crab',
    'Heron',
    'Herring',
    'Highland Cattle',
    'Himalayan',
    'Hippopotamus',
    'Honduran White Bat',
    'Honey Badger',
    'Honey Bee',
    'Hoopoe',
    'Horn Shark',
    'Hornbill',
    'Horned Frog',
    'Horned Lizard',
    'Horse',
    'Horseshoe Crab',
    'House Finch',
    'Howler Monkey',
    'Human',
    'Humboldt Penguin',
    'Hummingbird',
    'Humpback Whale',
    'Huskador',
    'Husky Jack',
    'Huskydoodle',
    'Hyena',
    'Jack Russell',
    'Jackabee',
    'Jackal',
    'Jaguar',
    'Japanese Chin',
    'Japanese Macaque',
    'Japanese Terrier',
    'Javan Rhinoceros',
    'Javanese',
    'Jellyfish',
    'Jerboa',
    'Kakapo',
    'Kangaroo',
    'Kangaroo Rat',
    'Keel-Billed Toucan',
    'Keeshond',
    'Kerry Blue Terrier',
    'Killer Whale',
    'King Cobra',
    'King Crab',
    'King Penguin',
    'Kingfisher',
    'Kinkajou',
    'Kiwi',
    'Koala',
    'Komodo Dragon',
    'Krill',
    'Kudu',
    'Labmaraner',
    'Labradane',
    'Labradoodle',
    'Labrador Retriever',
    'Labraheeler',
    'Ladybug',
    'Lakeland Terrier',
    'Lamprey',
    'Leaf-Tailed Gecko',
    'Lemming',
    'Lemur',
    'Leopard',
    'Leopard Cat',
    'Leopard Frog',
    'Leopard Seal',
    'Leopard Tortoise',
    'Lhasapoo',
    'Liger',
    'Lion',
    'Lionfish',
    'Little Penguin',
    'Lizard',
    'Llama',
    'Loach',
    'Lobster',
    'Locust',
    'Long-Eared Owl',
    'Longnose Gar',
    'Lungfish',
    'Lynx',
    'Macaroni Penguin',
    'Macaw',
    'Magellanic Penguin',
    'Magpie',
    'Maine Coon',
    'Malayan Civet',
    'Malayan Tiger',
    'Malteagle',
    'Maltese',
    'Maltipoo',
    'Manatee',
    'Manchester Terrier',
    'Mandrill',
    'Maned Wolf',
    'Manta Ray',
    'Marine Toad',
    'Markhor',
    'Marmot',
    'Marsh Frog',
    'Masked Palm Civet',
    'Mastador',
    'Mastiff',
    'Mayfly',
    'Meagle',
    'Meerkat',
    'Megalodon',
    'Mexican Free-Tailed Bat',
    'Milkfish',
    'Millipede',
    'Mini Labradoodle',
    'Miniature Bull Terrier',
    'Mink',
    'Minke Whale',
    'Mole',
    'Molly',
    'Monarch Butterfly',
    'Mongoose',
    'Mongrel',
    'Monitor Lizard',
    'Monkey',
    'Monkfish',
    'Monte Iberia Eleuth',
    'Moorhen',
    'Moose',
    'Moray Eel',
    'Morkie',
    'Moth',
    'Mountain Bluebird',
    'Mountain Gorilla',
    'Mountain Lion',
    'Mourning Dove',
    'Mouse',
    'Mule',
    'Muskox',
    'Muskrat',
    'Naked Mole Rat',
    'Narwhal',
    'Neanderthal',
    'Neapolitan Mastiff',
    'Newfoundland',
    'Newfypoo',
    'Newt',
    'Nightingale',
    'Norfolk Terrier',
    'North American Black Bear',
    'Northern Inuit Dog',
    'Norwegian Forest',
    'Norwich Terrier',
    'Numbat',
    'Nurse Shark',
    'Ocelot',
    'Octopus',
    'Okapi',
    'Old English Sheepdog',
    'Olm',
    'Opossum',
    'Orang-utan',
    'Ostrich',
    'Otter',
    'Oyster',
    'Paddlefish',
    'Pademelon',
    'Painted Turtle',
    'Pangolin',
    'Panther',
    'Parrot',
    'Parson Russell Terrier',
    'Patas Monkey',
    'Patterdale Terrier',
    'Peacock',
    'Peagle',
    'Peekapoo',
    'Pekingese',
    'Pelican',
    'Penguin',
    'Pere Davids Deer',
    'Peregrine Falcon',
    'Persian',
    'Petit Basset Griffon Vendéen',
    'Pheasant',
    'Pied Tamarin',
    'Pig',
    'Pigeon',
    'Pika',
    'Pike Fish',
    'Pileated Woodpecker',
    'Pink Fairy Armadillo',
    'Piranha',
    'Pitador',
    'Platypus',
    'Pointer',
    'Poison Dart Frog',
    'Polar Bear',
    'Pomapoo',
    'Pomeagle',
    'Pomeranian',
    'Pomsky',
    'Pond Skater',
    'Poochon',
    'Poodle',
    'Poogle',
    'Pool Frog',
    'Porcupine',
    'Porpoise',
    'Possum',
    'Prairie Dog',
    'Prairie Rattlesnake',
    'Prawn',
    'Proboscis Monkey',
    'Pufferfish',
    'Puffin',
    'Pug',
    'Pugapoo',
    'Puggle',
    'Pugshire',
    'Puma',
    'Purple Emperor Butterfly',
    'Purple Finch',
    'Puss Moth',
    'Pygmy Hippopotamus',
    'Pygmy Marmoset',
    'Pyrador',
    'Pyredoodle',
    'Quail',
    'Quetzal',
    'Quokka',
    'Quoll',
    'Rabbit',
    'Raccoon',
    'Raccoon Dog',
    'Radiated Tortoise',
    'Ragdoll',
    'Raggle',
    'Rat',
    'Rat Terrier',
    'Rattlesnake',
    'Red Finch',
    'Red Fox',
    'Red Knee Tarantula',
    'Red Panda',
    'Red Squirrel',
    'Red Wolf',
    'Red-handed Tamarin',
    'Reindeer',
    'Rhinoceros',
    'River Turtle',
    'Robin',
    'Rock Hyrax',
    'Rockfish',
    'Rockhopper Penguin',
    'Roseate Spoonbill',
    'Rottweiler',
    'Royal Penguin',
    'Russell Terrier',
    'Russian Bear Dog',
    'Russian Blue',
    'Saarloos Wolfdog',
    'Saber-Toothed Tiger',
    'Sable',
    'Saiga',
    'Saint Berdoodle',
    'Saint Bernard',
    'Saint Shepherd',
    'Salamander',
    'Salmon',
    'Samoyed',
    'Sand Lizard',
    'Saola',
    'Sardines',
    'Sawfish',
    'Scarlet Macaw',
    'Schneagle',
    'Schnoodle',
    'Scimitar-horned Oryx',
    'Scorpion',
    'Scorpion Fish',
    'Scottish Terrier',
    'Sea Dragon',
    'Sea Lion',
    'Sea Otter',
    'Sea Slug',
    'Sea Squirt',
    'Sea Turtle',
    'Sea Urchin',
    'Seahorse',
    'Seal',
    'Sealyham Terrier',
    'Serval',
    'Shark',
    'Sheep',
    'Sheepadoodle',
    'Shepadoodle',
    'Shepkita',
    'Shepweiler',
    'Shiba Inu',
    'Shih Poo',
    'Shih Tzu',
    'Shoebill Stork',
    'Shollie',
    'Shrimp',
    'Siamese',
    'Siamese Fighting Fish',
    'Siberian',
    'Siberian Husky',
    'Siberian Tiger',
    'Siberpoo',
    'Silky Terrier',
    'Silver Dollar',
    'Silver Labrador',
    'Skate Fish',
    'Skipjack Tuna',
    'Skunk',
    'Skye Terrier',
    'Sloth',
    'Slow Worm',
    'Smooth Fox Terrier',
    'Snail',
    'Snake',
    'Snapping Turtle',
    'Snorkie',
    'Snow Leopard',
    'Snowshoe',
    'Snowshoe Hare',
    'Snowy Owl',
    'Somali',
    'South China Tiger',
    'Spadefoot Toad',
    'Spanador',
    'Spanish Goat',
    'Sparrow',
    'Spectacled Bear',
    'Sperm Whale',
    'Spider Monkey',
    'Spiny Dogfish',
    'Spixs Macaw',
    'Sponge',
    'Spotted Gar',
    'Springador',
    'Springerdoodle',
    'Squid',
    'Squirrel',
    'Squirrel Monkey',
    'Sri Lankan Elephant',
    'Staffordshire Bull Terrier',
    'Stag Beetle',
    'Starfish',
    'Steller’s Sea Cow',
    'Stick Insect',
    'Stingray',
    'Stoat',
    'Striped Hyena',
    'Striped Rocket Frog',
    'Sturgeon',
    'Sucker Fish',
    'Sugar Glider',
    'Sumatran Elephant',
    'Sumatran Orang-utan',
    'Sumatran Rhinoceros',
    'Sumatran Tiger',
    'Sun Bear',
    'Swai Fish',
    'Swan',
    'Swedish Vallhund',
    'Taco Terrier',
    'Tamaskan',
    'Tang',
    'Tapanuli Orang-utan',
    'Tapir',
    'Tarpon',
    'Tarsier',
    'Tasmanian Devil',
    'Tawny Owl',
    'Teddy Roosevelt Terrier',
    'Tenterfield Terrier',
    'Termite',
    'Terrier',
    'Tetra',
    'Thorny Devil',
    'Tibetan Fox',
    'Tibetan Mastiff',
    'Tibetan Terrier',
    'Tiffany',
    'Tiger',
    'Tiger Salamander',
    'Tiger Shark',
    'Toadfish',
    'Torkie',
    'Tortoise',
    'Toucan',
    'Toy Fox Terrier',
    'Toy Poodle',
    'Tree Frog',
    'Tree Kangaroo',
    'Tropicbird',
    'Tuatara',
    'Tuna',
    'Turkey',
    'Turkish Angora',
    'Uakari',
    'Uguisu',
    'Umbrellabird',
    'Utonagan',
    'Vampire Bat',
    'Vampire Squid',
    'Vaquita',
    'Vervet Monkey',
    'Vulture',
    'Wallaby',
    'Walleye Fish',
    'Walrus',
    'Wandering Albatross',
    'Warthog',
    'Wasp',
    'Water Buffalo',
    'Water Dragon',
    'Water Vole',
    'Weasel',
    'Weimardoodle',
    'Welsh Corgi',
    'Welsh Terrier',
    'West Highland Terrier',
    'Western Gorilla',
    'Western Lowland Gorilla',
    'Westiepoo',
    'Whale Shark',
    'Wheaten Terrier',
    'Whippet',
    'White Rhinoceros',
    'White Tiger',
    'White-Faced Capuchin',
    'White-tail deer',
    'Whoodle',
    'Whooping Crane',
    'Wild Boar',
    'Wildebeest',
    'Wire Fox Terrier',
    'Wolf',
    'Wolf Eel',
    'Wolf Spider',
    'Wolffish',
    'Wolverine',
    'Wombat',
    'Wood Frog',
    'Wood Turtle',
    'Woodlouse',
    'Woodpecker',
    'Woolly Mammoth',
    'Woolly Monkey',
    'Wrasse',
    'Wyoming Toad',
    'X-Ray Tetra',
    'Xerus',
    'Yak',
    'Yellow-Eyed Penguin',
    'Yellowfin Tuna',
    'Yoranian',
    'Yorkie Bichon',
    'Yorkie Poo',
    'Yorkshire Terrier',
    'Yak',
    'Yellow-Eyed Penguin',
    'Yellowfin Tuna',
    'Yoranian',
    'Yorkie Bichon',
    'Yorkie Poo',
    'Yorkshire Terrier'
];

export let mythicalAnimals = [
    'Ababil',
    'Abaia',
    'Abath',
    'Abatwa',
    'Adlet',
    'Aethon',
    'Afanc',
    'Ahuizotl',
    'Ajatar',
    'Akhlut',
    'Akkorokamui',
    'Al-mi\'raj',
    'Alan',
    'Alectryon',
    'Alicanto',
    'Alkonost',
    'Allocamelus',
    'Amalthea',
    'Amarok',
    'Amefurikozō',
    'Ammit',
    'Ammut',
    'Amphisbaena',
    'Amphithere',
    'Anansi',
    'Androktasiai',
    'Angel',
    'Anggitay',
    'Anubis',
    'Anzû',
    'Apep',
    'Arachne',
    'Argus Panoptes',
    'Aries',
    'Arion',
    'Asena',
    'Aspidochelone',
    'Asteria',
    'Asura',
    'Aswang',
    'Auðumbla',
    'Automaton',
    'Axehandle hound',
    'Azeban',
    'Azure Dragon',
    'Baba Yaga',
    'Bahamut',
    'Bai Ze',
    'Bake-kujira',
    'Bakeneko',
    'Bakonawa',
    'Baku',
    'Bakunawa',
    'Balayang',
    'Balor',
    'Banshee',
    'Barbegazi',
    'Bare-fronted Hoodwink',
    'Basan',
    'Basilisk',
    'Bastet',
    'Beast of Bodmin',
    'Beast of Gévaudan',
    'Behemoth',
    'Bennu',
    'Bicorn and Chichevache',
    'Bigfoot',
    'Biscione',
    'Bishop-fish',
    'Black dog',
    'Black Tortoise',
    'Blodeuwedd',
    'Bloody Bones',
    'Błudnik',
    'Blue Mountains panther',
    'Bluecap',
    'Bogeyman',
    'Boggart',
    'Bonnacon',
    'Boto',
    'Brazen head',
    'Brownie',
    'Bugbear',
    'Buggane',
    'Bunyip',
    'Buraq',
    'Cactus cat',
    'Cai Cai-Vilu',
    'Cait Sidhe',
    'Caladrius',
    'Callisto',
    'Calydonian Boar',
    'Camazotz',
    'Camenae',
    'Capricorn',
    'Capricornus',
    'Carbuncle',
    'Carbunclo',
    'Cath Palug',
    'Catoblepas',
    'Ceffyl Dŵr',
    'Centaur',
    'Cerberus',
    'Ceryneian Hind',
    'Cetan',
    'Cetus',
    'Chalkydri',
    'Chamrosh',
    'Charybdis',
    'Cherub',
    'Cherufe',
    'Cheval Gauvin',
    'Cheval Mallet',
    'Chimera',
    'Chinese dragon',
    'Chiron',
    'Chol',
    'Chollima',
    'Chonchon',
    'Chronos',
    'Chrysomallos',
    'Chupacabra',
    'Cinnamon bird',
    'Cipactli',
    'Cockatrice',
    'Coi Coi-Vilu',
    'Coi Coi-Vilu|Cai Cai-Vilu',
    'Crinaeae',
    'Crocotta',
    'Cu Sith',
    'Cupid',
    'Curupira',
    'Cyclopes',
    'Cynocephaly',
    'Daemon',
    'Dahu',
    'Davy Jones\' Locker',
    'Death',
    'Deer Woman',
    'Deity',
    'Demon',
    'Demon Cat',
    'Deva',
    'Devil',
    'Devil Bird',
    'Dhampir',
    'Dingonek',
    'Dobhar-chú',
    'Domovoi',
    'Double-headed eagle',
    'Dragon',
    'Dragon King',
    'Dragon|Water Dragon',
    'Draug',
    'Draugr',
    'Drop Bear',
    'Dryad',
    'Duende',
    'Dullahan',
    'Dvergr',
    'Dvorovoi',
    'Dwarf',
    'Dökkálfar',
    'Each uisge',
    'Echidna',
    'Eikþyrnir',
    'Elemental',
    'Elf',
    'Encantado',
    'Ennedi tiger',
    'Erinyes',
    'Eros',
    'Erymanthian Boar',
    'Euryale',
    'Extraterrestrial life|Alien',
    'Fafnir',
    'Fairy',
    'Familiar',
    'Father Time',
    'Faun',
    'Feathered Serpent',
    'Feng Huang',
    'Fenghuang',
    'Fenrir',
    'Fext',
    'Fur-bearing trout',
    'Futakuchi-onna',
    'Galatea',
    'Gallic rooster',
    'Gamayun',
    'Gandabherunda',
    'Gargouille',
    'Gargoyle',
    'Garmr',
    'Garuda',
    'Gashadokuro',
    'Gef',
    'Gelert',
    'Genie',
    'German',
    'Geryon',
    'Ghillie Dhu',
    'Ghost',
    'Ghoul',
    'Giant',
    'Gilled Antelope',
    'Gingerbread man',
    'Gnome',
    'Goblin',
    'Goldhorn',
    'Golem',
    'Gorgon',
    'Green Man',
    'Gremlin',
    'Griffin',
    'Grindylow',
    'Grootslang',
    'Gullinkambi',
    'Haetae',
    'Haizum',
    'Hamadryad',
    'Harionago',
    'Harpy',
    'Heavenly Llama',
    'Heiðrún',
    'Hekatonkheires',
    'Hell Hound',
    'Hellhound',
    'Hibagon',
    'Hipag',
    'Hippocamp',
    'Hippogriff',
    'Hitotsume-kozou',
    'Homunculus',
    'Honey Island Swamp monster',
    'Hoop snake',
    'Horus',
    'Hræsvelgr',
    'Huang Long',
    'Hudhud',
    'Hugin and Munin',
    'Hulder',
    'Huli jing',
    'Hydra',
    'Hysminai',
    'Iara',
    'Ibong Adarna|Adarna',
    'Ichneumon',
    'Ichthyocentaur',
    'Ichthyocentaurs',
    'Ifrit',
    'Ijiraq',
    'Ika-Roa',
    'Incubus',
    'Ipotane',
    'Isonade',
    'Itsumade',
    'Jackalope',
    'Jaculi',
    'Jade rabbit',
    'Japanese raccoon dog',
    'Jasconius',
    'Jengu',
    'Jiangshi',
    'Jiaolong',
    'Jikininki',
    'Jinn',
    'Jormungand',
    'Jorōgumo',
    'Jubokko',
    'Jueyuan',
    'Jörmungandr',
    'Jötunn|Hrimthurs',
    'Jötunn|Jotun',
    'Jötunn|Mountain Giant',
    'Kamaitachi',
    'Kappa',
    'Karkadann',
    'Karkinos',
    'Kelpie',
    'Keres',
    'Khepri',
    'Khnum',
    'Kishi',
    'Kitsune',
    'Knucker',
    'Kobold',
    'Kodama',
    'Kraken',
    'Kua Fu',
    'Kuchisake-onna',
    'Kui',
    'Kumiho',
    'Kurma',
    'Kushtaka',
    'Ladon',
    'Lake monster',
    'Lamassu',
    'Lamia',
    'Lampades',
    'Lampetia',
    'Lavellan',
    'Leib-Olmai',
    'Lemures',
    'Leprechaun',
    'Lernaean Hydra',
    'Lernaean Hydra|Hydra',
    'Leshy',
    'Leutogi',
    'Leviathan',
    'Lich',
    'Lindworm',
    'Ljósálfar',
    'Loch Ness monster',
    'Longma',
    'Lorelei',
    'Loveland frog',
    'Lusca',
    'Lynx',
    'Madame White Snake',
    'Maenad',
    'Magician',
    'Makara',
    'Makhai',
    'Maltese tiger',
    'Manananggal',
    'Mandrake',
    'Mandurugo',
    'Manticore',
    'Mapinguari',
    'Mare',
    'Medusa',
    'Melusine',
    'Meretseger',
    'Merlion',
    'Mermaid',
    'Merman',
    'Merrow',
    'Minokawa',
    'Minotaur',
    'Minyades',
    'Mizuchi',
    'Mokele Mbembe',
    'Mokele-mbembe',
    'Mokumokuren',
    'Mongolian Death Worm',
    'Monopod',
    'Monster',
    'Moon rabbit',
    'Morgens',
    'Mothman',
    'Muc-sheilch',
    'Mugwump',
    'Mujina',
    'Mummy',
    'Myling',
    'Myrmecoleon',
    'Myrmidons',
    'Nachtkrapp',
    'Naga',
    'Naiad',
    'Namazu',
    'Nandi bull',
    'Narasimha',
    'Neck',
    'Nekomata',
    'Nemean lion',
    'Nephele',
    'Nereid',
    'Nereids',
    'Nguruvilu',
    'Níðhöggr',
    'Nine-headed Bird',
    'Ningyo',
    'Noppera-bō',
    'Nuckelavee',
    'Nue',
    'Nukekubi',
    'Nyctimene',
    'Nymph',
    'Näkki',
    'Ogopogo',
    'Ogre',
    'Ondine',
    'Oni',
    'Onocentaur',
    'Onryō',
    'Oozlum bird',
    'Oread',
    'Orthrus',
    'Ouroboros',
    'Owlman',
    'Ox-Head and Horse-Face',
    'Pabilsaĝ',
    'Pamola',
    'Panther',
    'Patupaiarehe',
    'Pegasus',
    'Peluda',
    'Penanggalan',
    'Peng',
    'Penghou',
    'Peryton',
    'Phantom cat',
    'Phoenix',
    'Phonoi',
    'Piasa',
    'Pisces',
    'Pixiu',
    'Poltergeist',
    'Pombero',
    'Ponaturi',
    'Pontianak',
    'Popobawa',
    'Potamoi',
    'Potamus',
    'Preta',
    'Púca',
    'Qilin',
    'Qiqirn',
    'Ra',
    'Raiju',
    'Raijū',
    'Rain Bird',
    'Rainbow crow',
    'Rainbow serpent',
    'Ramidreju',
    'Rat king',
    'Ratatoskr',
    'Redcap',
    'Roc',
    'Rokurokubi',
    'Rooster of Barcelos',
    'Rusalka',
    'Ryujin',
    'Saci',
    'Salamander',
    'Salawa',
    'Salmon of Wisdom',
    'Samebito',
    'Sandman',
    'Sankai',
    'Sarangay',
    'Sarimanok',
    'Sasquatch',
    'Satan',
    'Satori',
    'Satyr',
    'Saumen Kar',
    'Scorpion man',
    'Sea monk',
    'Sea monster',
    'Sea serpent',
    'Sea-lion',
    'Sekhmet',
    'Selket',
    'Selkie',
    'Serpopard',
    'Sewer alligator',
    'Shabti',
    'Shachihoko',
    'Shadow People',
    'Shangyang',
    'Shedu',
    'Shellycoat',
    'Shen',
    'Shesha',
    'Shōjō',
    'Shug Monkey',
    'Sidehill gouger',
    'Sigbin',
    'Silenus',
    'Simurgh',
    'Siren',
    'Sirin',
    'Skeleton',
    'Skin-walker',
    'Skvader',
    'Slavic fairies|Wili',
    'Sleipnir',
    'Sobek',
    'Sphinx',
    'Spirit',
    'Spriggan',
    'Sprite',
    'Stheno',
    'Strix',
    'Stymphalian birds',
    'Succubus',
    'Surrey Puma',
    'Swamp monster',
    'Swan maiden',
    'Taniwha',
    'Tanngrisnir',
    'Tarasque',
    'Taweret',
    'Ten Ten-Vilu',
    'Tengu',
    'Tennin',
    'Thoth',
    'Three-legged bird',
    'Thunderbird',
    'Tiamat',
    'Tikbalang',
    'Tilberi',
    'Tizheruk',
    'Tjinimin',
    'Tokeloshe',
    'Tomte',
    'Triton',
    'Troll',
    'Tsuchigumo',
    'Tsuchinoko',
    'Tsukumogami',
    'Tulpa',
    'Tupilaq',
    'Turul',
    'Tyger',
    'Typhon',
    'Ubume',
    'Uchchaihshravas',
    'Umibōzu',
    'Undead',
    'Underwater panther',
    'Undine',
    'Unicorn',
    'Ushabti',
    'Ushi-oni',
    'Valkyrie',
    'Vampire',
    'Vanara',
    'Vǎrkolak',
    'Vegetable Lamb of Tartary',
    'Vengeful ghost',
    'Vermilion Bird',
    'Vetala',
    'Víðópnir',
    'Vodyanoy',
    'Vucub Caquix',
    'Wanyūdō',
    'Water leaper',
    'Water spirit',
    'Water sprite',
    'Wechuge',
    'Wendigo',
    'Werehyena',
    'Werejaguar',
    'Werewolf',
    'Wewe Gombel',
    'White stag',
    'White Tiger',
    'Wild Hunt',
    "Will o' the wisp",
    'Wolpertinger',
    'World Elephant',
    'World Tree',
    'World Turtle',
    'Wyvern',
    'Xing Tian',
    'Yacuruna',
    'Yakshini',
    'Yamata no Orochi',
    'Yaoguai',
    'Yatagarasu',
    'Yeren',
    'Yeti',
    'Ymir',
    'Yokai',
    'Yōkai',
    'Yowie',
    'Yuki-onna',
    'Yurei',
    'Zahhak',
    'Zaratan',
    'Zashiki-warashi',
    'Zemepatis',
    'Zhenniao',
    'Zhu Bajie',
    'Zilant',
    'Ziz',
    'Zombie',
    'Zu'
];
