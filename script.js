// カフェデータ（ここにお店を追加していく）
const cafes = [
  { 
      name: "喫茶 ロン", 
      address: "枚方市", 
      rating: 5, 
      hours: "9:00-23:00(日・祝は18:00まで）", 
      menu: "巨大パフェ、オムライス", 
      note: "昔ながらの純喫茶", 
      image: "cafeA.jpg",
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
      image: "cafeB.jpg",
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
      image: "cafeC.jpg",
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
      image: "cafeD.jpg",
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
      image: "cafeE.jpg",
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
            po
