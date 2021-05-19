const labels = [
  "african crowned crane",
  "african firefinch",
  "albatross",
  "alexandrine parakeet",
  "american avocet",
  "american bittern",
  "american coot",
  "american goldfinch",
  "american kestrel",
  "american pipit",
  "american redstart",
  "anhinga",
  "annas hummingbird",
  "antbird",
  "araripe manakin",
  "asian crested ibis",
  "bald eagle",
  "bali starling",
  "baltimore oriole",
  "bananaquit",
  "banded broadbill",
  "bar-tailed godwit",
  "barn owl",
  "barn swallow",
  "barred puffbird",
  "bay-breasted warbler",
  "bearded barbet",
  "belted kingfisher",
  "bird of paradise",
  "black francolin",
  "black skimmer",
  "black swan",
  "black tail crake",
  "black throated warbler",
  "black vulture",
  "black-capped chickadee",
  "black-necked grebe",
  "black-throated sparrow",
  "blackburniam warbler",
  "blue grouse",
  "blue heron",
  "bobolink",
  "brown noody",
  "brown thrasher",
  "cactus wren",
  "california condor",
  "california gull",
  "california quail",
  "canary",
  "cape may warbler",
  "capuchinbird",
  "carmine bee-eater",
  "caspian tern",
  "cassowary",
  "chara de collar",
  "chipping sparrow",
  "chukar partridge",
  "cinnamon teal",
  "cock of the  rock",
  "cockatoo",
  "common firecrest",
  "common grackle",
  "common house martin",
  "common loon",
  "common poorwill",
  "common starling",
  "couchs kingbird",
  "crested auklet",
  "crested caracara",
  "crested nuthatch",
  "crow",
  "crowned pigeon",
  "cuban tody",
  "curl crested aracuri",
  "d-arnauds barbet",
  "dark eyed junco",
  "downy woodpecker",
  "eastern bluebird",
  "eastern meadowlark",
  "eastern rosella",
  "eastern towee",
  "elegant trogon",
  "elliots  pheasant",
  "emperor penguin",
  "emu",
  "enggano myna",
  "eurasian golden oriole",
  "eurasian magpie",
  "evening grosbeak",
  "fire tailled myzornis",
  "flame tanager",
  "flamingo",
  "frigate",
  "gambels quail",
  "gang gang cockatoo",
  "gila woodpecker",
  "gilded flicker",
  "glossy ibis",
  "go away bird",
  "gold wing warbler",
  "golden cheeked warbler",
  "golden chlorophonia",
  "golden eagle",
  "golden pheasant",
  "golden pipit",
  "gouldian finch",
  "gray catbird",
  "gray partridge",
  "great potoo",
  "greator sage grouse",
  "green jay",
  "grey plover",
  "guinea turaco",
  "guineafowl",
  "gyrfalcon",
  "harpy eagle",
  "hawaiian goose",
  "helmet vanga",
  "himalayan monal",
  "hoatzin",
  "hooded merganser",
  "hoopoes",
  "hornbill",
  "horned guan",
  "horned sungem",
  "house finch",
  "house sparrow",
  "imperial shaq",
  "inca tern",
  "indian bustard",
  "indian pitta",
  "indigo bunting",
  "jabiru",
  "java sparrow",
  "javan magpie",
  "kakapo",
  "killdear",
  "king vulture",
  "kiwi",
  "kookaburra",
  "lark bunting",
  "lears macaw",
  "lilac roller",
  "long-eared owl",
  "magpie goose",
  "malabar hornbill",
  "malachite kingfisher",
  "maleo",
  "mallard duck",
  "mandrin duck",
  "marabou stork",
  "masked booby",
  "masked lapwing",
  "mikado  pheasant",
  "mourning dove",
  "myna",
  "nicobar pigeon",
  "noisy friarbird",
  "northern bald ibis",
  "northern cardinal",
  "northern flicker",
  "northern gannet",
  "northern goshawk",
  "northern jacana",
  "northern mockingbird",
  "northern parula",
  "northern red bishop",
  "northern shoveler",
  "ocellated turkey",
  "okinawa rail",
  "osprey",
  "ostrich",
  "oyster catcher",
  "painted buntig",
  "palila",
  "paradise tanager",
  "parus major",
  "peacock",
  "pelican",
  "peregrine falcon",
  "philippine eagle",
  "pink robin",
  "puffin",
  "purple finch",
  "purple gallinule",
  "purple martin",
  "purple swamphen",
  "quetzal",
  "rainbow lorikeet",
  "razorbill",
  "red bearded bee eater",
  "red bellied pitta",
  "red faced cormorant",
  "red faced warbler",
  "red headed duck",
  "red headed woodpecker",
  "red honey creeper",
  "red tailed thrush",
  "red winged blackbird",
  "red wiskered bulbul",
  "regent bowerbird",
  "ring-necked pheasant",
  "roadrunner",
  "robin",
  "rock dove",
  "rosy faced lovebird",
  "rough leg buzzard",
  "ruby throated hummingbird",
  "rufous kingfisher",
  "rufuos motmot",
  "samatran thrush",
  "sand martin",
  "scarlet ibis",
  "scarlet macaw",
  "shoebill",
  "short billed dowitcher",
  "smiths longspur",
  "snowy egret",
  "snowy owl",
  "sora",
  "spangled cotinga",
  "splendid wren",
  "spoon biled sandpiper",
  "spoonbill",
  "sri lanka blue magpie",
  "steamer duck",
  "stork billed kingfisher",
  "strawberry finch",
  "stripped swallow",
  "superb starling",
  "swinhoes pheasant",
  "taiwan magpie",
  "takahe",
  "tasmanian hen",
  "teal duck",
  "tit mouse",
  "touchan",
  "townsends warbler",
  "tree swallow",
  "trumpter swan",
  "turkey vulture",
  "turquoise motmot",
  "umbrella bird",
  "varied thrush",
  "venezuelian troupial",
  "vermilion flycather",
  "victoria crowned pigeon",
  "violet green swallow",
  "vulturine guineafowl",
  "wattled curassow",
  "whimbrel",
  "white cheeked turaco",
  "white necked raven",
  "white tailed tropic",
  "wild turkey",
  "wilsons bird of paradise",
  "wood duck",
  "yellow bellied flowerpecker",
  "yellow cacique",
  "yellow headed blackbird",
];