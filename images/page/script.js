const suggestions = [
  { name: "Upma", link:"upma.html" },
  { name: "Poha", link: "poha.html" },
  { name: "FriedRice", link: "friedrice.html" },
  { name: "Poori", link: "poori.html" },
  { name: "Thepla", link: "thepla.html" },
  { name: "SabudanaKhichdi", link: "sabudanakhichdi.html" },
  { name: "MoongDalChilla", link: "moongdalchilla.html" },
  { name: "BreadPakora", link: "breadpakora.html" },
  { name: "SavoryFrenchToast", link: "savoryfrenchtoast.html" },

  { name: "EgglessChocolateCake", link: "egglesschocolatecake.html" },
  { name: "BlackForestCake", link: "blackforestcake.html" },
  { name: "CupCakes", link: "cupcakes.html" },
  { name: "Cookies", link: "cookies.html" },
  { name: "BiscuitCake", link: "biscuittcake.html" },
  { name: "ClassicChocolateCake", link: "classicchocolatecake.html" },
  { name: "TuttiFruttiCake", link: "tuttifrutticake.html" },
  { name: "Cheesecake", link: "cheesecake.html" },

  { name: "PaneerButterMasala", link: "paneerbuttermasala.html" },
  { name: "PaneerTikkaMasala", link: "paneertikkamasala.html" },
  { name: "ChanaMasala", link: "chanamasala.html" },
  { name: "KajuCurry", link: "kajucurry.html" },
  { name: "VegKolhapuri", link: "vegkolhapuri.html" },
  { name: "DalMakhani", link: "dalmakhani.html" },
  { name: "DalFry", link: "dalfry.html" },
  { name: "Sambhar", link: "sambhar.html" },

  { name: "Pizza", link: "pizza.html" },
  { name: "Burger", link: "burger.html" },
  { name: "FrenchFries", link: "frenchfries.html" },
  { name: "Sandwich", link: "sandwich.html" },
  { name: "WhiteSaucePasta", link: "whitesaucepasta.html" },
  { name: "MixSaucePasta", link: "mixsaucepasta.html" },
  { name: "VegManchurian", link: "vegmanchurian.html" },
  { name: "GobiManchurian", link: "gobimanchurian.html" },
  { name: "Gobi65", link: "gobi65.html" },
  { name: "HakkaNoodles", link: "hakkanoodles.html" },
  { name: "SchezwanNoodles", link: "schezwannoodles.html" },
  { name: "Taco", link: "taco.html" },
  { name: "Burrito", link: "burrito.html" },

  { name: "GulabJamun", link: "gulabjamun.html" },
  { name: "Kheer", link: "kheer.html" },
  { name: "GajarHalwa", link: "gajarhalwa.html" },
  { name: "KajuKatli", link: "kajukatli.html" },
  { name: "Jalebi", link: "jalebi.html" },
  { name: "Kalakand", link: "kalakand.html" },
  { name: "Rasmalai", link: "rasmalai.html" },
  { name: "ChocolateIceCream", link: "chocolateicecream.html" },
  { name: "Kulfi", link: "kulfi.html" },

  { name: "PavBhaji", link: "pavbhaji.html" },
  { name: "Samosa", link: "samosa.html" },
  { name: "Kachori", link: "kachori.html" },
  { name: "VadaPav", link: "vadapav.html" },
  { name: "Bhel", link: "bhel.html" },
  { name: "Dabeli", link: "dabeli.html" },
  { name: "MasalaPav", link: "masalapav.html" },
  { name: "CrispyCorn", link: "crispycorn.html" },
  { name: "RagdaPattice", link: "ragdapattice.html" },
  { name: "Panipuri", link: "panipuri.html" },
  { name: "Shevpuri", link: "shevpuri.html" },
  { name: "CheeseVadaPav", link: "cheesevadapav.html" },

  { name: "TomatoSoup", link: "tomatosoup.html" },
  { name: "VegSoup", link: "vegsoup.html" },
  { name: "MasalaChai", link: "masalachai.html" },
  { name: "Coffee", link: "coffee.html" },
  { name: "ColdCoffee", link: "coldcoffee.html" },
  { name: "OreoMilkshake", link: "oreomilkshake.html" },
  { name: "Chass", link: "chass.html" },
  { name: "Lassi", link: "lassi.html" },
  { name: "LimbuPani", link: "limbupani.html" }
];


const searchInput = document.getElementById('searchInput');
const autocompleteList = document.getElementById('autocompleteList');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  autocompleteList.innerHTML = '';

  if (!query) {
    autocompleteList.style.display = 'none';
    return;
  }

  const matched = suggestions.filter(s => s.name.toLowerCase().includes(query));

  if (matched.length === 0) {
    autocompleteList.style.display = 'none';
    return;
  }

  matched.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.name;
    li.addEventListener('click', () => {
      window.location.href = item.link;
    });
    autocompleteList.appendChild(li);
  });

  autocompleteList.style.display = 'block';
});

// Optional: Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-box')) {
    autocompleteList.style.display = 'none';
  }
});
