// カフェデータ（ここにお店を追加していく）
const cafes = [
  { 
      name: "喫茶 ロン", 
      address: "枚方市", 
      rating: 5, 
      hours: "9:00-23:00(日・祝は18:00まで）", 
      menu: "巨大パフェ、オムライス", 
      note: "昔ながらの純喫茶", 
      image: "images/cafeA.jpg",
      sns: {
        website: "https://building3.hirakata-sunplaza.com/floor/3f/20230710-85/"
      }
  },
  { 
      name: "neel", 
      address: "大阪市北区 中崎町", 
      rating: 4, 
      hours: "10:00-20:30(L.O.20:00)", 
      menu: "抹茶ラテ、クレープ、ヒレカツサンド", 
      note: "中崎町カフェ巡りの定番！", 
      image: "images/cafeB.jpg",
      sns: {
        instagram: "https://www.instagram.com/neel_nakazaki/",
        website: "https://neel.coffee/"
      }
  },
    { 
      name: "MOTO COFFEE", 
      address: "大阪市中央区 北浜", 
      rating: 4, 
      hours: "11:00-18:00(L.O.17:30)", 
      menu: "自家焙煎珈琲、プリン、ティラミス", 
      note: "川沿いにあるテラス席でまったり～(^^)", 
      image: "images/cafeC.jpg" ,
      sns: {
        instagram: "https://www.instagram.com/motocoffee_osaka/",

      }
  },
  { 
      name: "sh:rock coffee(シロックコーヒー）", 
      address: "大阪市中央区 釣鐘町", 
      rating: 3, 
      hours: "9:00-17:30(土日祝は18:00まで）", 
      menu: "バスクチーズケーキ、ティラミス", 
      note: "インスタ映え✨ 絶品スイーツ＆モーニングが楽しめるお店", 
      image: "images/cafeD.jpg" ,
       sns: {
        instagram: "https://www.instagram.com/shirockcoffee/",

      }
  },
  { 
      name: "心斎橋　ミツヤ", 
      address: "大阪市中央区", 
      rating: 4, 
      hours: "11:00-22:00", 
      menu: "オムライス、スパゲティ", 
      note: "昔懐かしの鉄板スパゲティ😋　昭和を感じさせるレトロな内装", 
      image: "images/cafeE.jpg" ,
       sns: {
        instagram: "https://www.instagram.com/mitsuya_official/",
        website: "https://www.mitsuya.co.jp/"
      }

      }
];

const cafeList = document.getElementById("cafe-list");
const searchInput = document.getElementById("search-input");
const areaFilter = document.getElementById("area-filter");
const sortFilter = document.getElementById("sort-filter");

const popup = document.getElementById("popup");
const popupName = document.getElementById("popup-name");
const popupAddress = document.getElementById("popup-address");
const popupRating = document.getElementById("popup-rating");
const popupHours = document.getElementById("popup-hours");
const popupMenu = document.getElementById("popup-menu");
const popupNote = document.getElementById("popup-note");
const popupImage = document.getElementById("popup-image");
const closePopup = document.getElementById("close-popup");


// 喫茶店カードを作成して表示
function getStars(rating) {
    return "⭐".repeat(Math.floor(rating)) + (rating % 1 ? "✩" : "");
}

function displayCafes(list) {
    cafeList.innerHTML = "";
    list.forEach(cafe => {
        const div = document.createElement("div");
        div.className = "cafe";
        div.innerHTML = `
            <img src="${cafe.image}" alt="${cafe.name}">
            <div>
                <h2>${cafe.name}</h2>
                <p>${cafe.address}</p>
                <p>おすすめ: ${cafe.menu}</p>
                <p>評価: ${cafe.rating}</p>
            </div>
        `;

        div.addEventListener("click", () => {
            popupName.textContent = cafe.name;
            popupAddress.textContent = "住所: " + cafe.address;
            popupRating.textContent = "評価: " + getStars(cafe.rating) + ` (${cafe.rating}/5)`;
            popupHours.textContent = "営業時間: " + cafe.hours;
            popupMenu.textContent = "おすすめメニュー: " + cafe.menu;
            popupNote.textContent = "備考: " + cafe.note;
            popupImage.src = cafe.image;
                // ⭐ SNSリンクを表示
const popupSns = document.getElementById("popup-sns");
popupSns.innerHTML = ""; // いったん空にする

if (cafe.sns) {
    if (cafe.sns.instagram) {
        popupSns.innerHTML += `<a href="${cafe.sns.instagram}" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>`;
    }
    if (cafe.sns.twitter) {
        popupSns.innerHTML += `<a href="${cafe.sns.twitter}" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>`;
    }
    if (cafe.sns.website) {
        popupSns.innerHTML += `<a href="${cafe.sns.website}" target="_blank">
            <i class="fas fa-globe"></i>
        </a>`;
    }
}

            popup.classList.remove("hidden");
        });

        cafeList.appendChild(div);
    });
}

// 絞り込み・検索・ソート
function filterCafes() {
    const keyword = searchInput.value.toLowerCase();
    const area = areaFilter.value;
    const sort = sortFilter.value;

    let filtered = cafes.filter(cafe => {
       const matchesKeyword = 
    cafe.name.toLowerCase().includes(keyword) ||
    cafe.address.toLowerCase().includes(keyword) ||
    cafe.menu.toLowerCase().includes(keyword) ||
    cafe.note.toLowerCase().includes(keyword);

        const matchesArea = area === "" || cafe.address.includes(area);
        return matchesKeyword && matchesArea;
    });

    if (sort === "asc") filtered.sort((a,b)=>a.rating-b.rating);
    if (sort === "desc") filtered.sort((a,b)=>b.rating-a.rating);

    displayCafes(filtered);
}

// イベントリスナー
searchInput.addEventListener("input", filterCafes);
areaFilter.addEventListener("change", filterCafes);
sortFilter.addEventListener("change", filterCafes);
closePopup.addEventListener("click", () => popup.classList.add("hidden"));

// 初回表示
displayCafes(cafes);
