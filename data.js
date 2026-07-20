/* ============================================================
   Takuro Sawada — サイトの内容データ
   ★ 更新は基本このファイルだけ編集すればOK ★

   ・写真を追加     → その作品の photos: [] に1行足す
   ・文章を直す      → 該当の "..." の中を書き換える
   ・作品を追加     → WORKS の配列に { ... } を1つ足す
   ・トップの背景写真 → SITE.heroImage を変える

   ※ 文字の中で " を使いたいときは \" と書く（例: "a \"vessel\""）
   ============================================================ */

const SITE = {
  name: "TAKURO SAWADA",
  nameJa: "沢田拓郎",
  role: "Designer, Tokyo",
  // トップページの全画面背景写真（フェードで切り替わるスライドショー）
  // 1枚だけにしたいときは heroImages の中を1つだけにする
  heroImage: "images/fluid-vessel/00-hero.jpg",
  heroImages: [
    "images/fluid-vessel/00-hero.jpg",
    "images/fluid-vessel/02-living-vault.jpg",
    "images/fluid-vessel/13-living-panorama.jpg",
    "images/fluid-vessel/14-night-halo.jpg"
  ],
  heroHeadingEn: "Spaces drawn from what a site already holds.",
  heroHeadingJa: "その場所がすでに持っているものから、空間を引き出す。",
  email: "hello@takurosawada.com",
  instagram: "https://instagram.com/takurosawada",
  aboutEn: "Takuro Sawada is a Tokyo-based designer. Trained as an architect with a background in hospitality design, his independent work explores how the structures a building already holds can be re-read as the source of domestic comfort.",
  aboutJa: "沢田拓郎 — 東京を拠点とするデザイナー。ホテル設計の経験を背景に、建物がすでに持つ構造を読み替え、住まいの快適さの源泉とする手法を個人名義の活動として探求している。",

  // 問い合わせフォームの送信先設定（Web3Forms・無料）
  // 1. https://web3forms.com を開き、送り先にしたいメールアドレスを入力して送信
  // 2. そのメール宛に届く Access Key をコピーし、下の "" の中に貼り付けて保存
  web3formsKey: "35cdf238-1ef6-469c-a707-4f788273797e"
};

const WORKS = [
  {
    slug: "fluid-vessel",
    title: "Fluid Vessel",
    titleJa: "流動する器",
    subtitleJa: "流れと共に在る暮らし",
    location: "Nakaochiai, Shinjuku, Tokyo",
    year: "2026",
    // 一覧ページのサムネイルに使う写真
    cover: "images/fluid-vessel/02-living-vault.jpg",

    // ——— 本文（章立ての前に置くリード文＋説明）———
    bodyEn: [
      "A 1980s wall-type concrete apartment on the Myoshoji River held a quiet asset: a fan-shaped skeleton widening toward a generous river-facing frontage. The standard 3LDK plan had severed it.",
      "The renovation removes that severance rather than the building. Existing downstand beams run parallel to the river; every new intervention — movable fusuma panels, hanging walls, a lighting rail — runs perpendicular to this grain, letting the 65-square-metre interior read as one vessel that daily life flows through.",
      "Closing the panels is enough — nothing built, nothing demolished. A circulation loop links the kitchen and the private quarters, and an open washbasin sits along it, so that the family's movements, like the river below, keep passing through the space."
    ],
    bodyJa: [
      "妙正寺川に面した1980年代の壁式RC造は、川側へ向かって扇状に広がる骨格という静かな資産を持っていた。標準的な3LDKの間取りが、その伸びやかな間口を断ち切っていた。",
      "改修が取り除いたのは建物ではなく、この断絶である。既存の垂れ壁（梁）は川と平行に走る。可動の戸襖、垂れ壁、照明レール——新たな介入はすべてこの方向に直交して挿入され、65㎡の内部は、暮らしが流れ抜けるひとつの器として読み直される。",
      "引き戸を閉めるだけで部屋になる。何も作らず、何も壊さない。キッチンとプライベート領域を巡る回遊動線の傍らにアウトベーシンが置かれ、家族の動きは眼下の川のように、空間を通り続ける。"
    ],

    // ——— 章（各章に写真を割り当てる。写真を増やすなら images 配列に足すだけ）———
    chapters: [
      {
        no: "Ⅰ",
        title: "Cross-Current Partition",
        titleJa: "直交する戸襖",
        images: [
          { src: "images/fluid-vessel/05-fusuma-closed.jpg", capEn: "Closed, the fusuma panels form a room — a wall of the same hand-finished stucco.", capJa: "閉じれば、左官仕上げの壁として部屋が立ち上がる。", wide: true },
          { src: "images/fluid-vessel/06-fusuma-open.jpg", capEn: "Opened, the frontage returns as one continuous space.", capJa: "開けば、間口はひとつながりの空間に戻る。" },
          { src: "images/fluid-vessel/08-partition.jpg", capEn: "All partitions run perpendicular to the beams' river-parallel grain.", capJa: "すべての建具は、川と平行な梁に直交して走る。" }
        ]
      },
      {
        no: "Ⅱ",
        title: "Halo Vault",
        titleJa: "光の逆摺鉢天井",
        images: [
          { src: "images/fluid-vessel/02-living-vault.jpg", capEn: "Daylight is received by the white-based plaster, its texture subtly weathered.", capJa: "白漆喰のかすかに風化した肌理が昼光を受ける。" },
          { src: "images/fluid-vessel/14-night-halo.jpg", capEn: "At night, indirect light grazes the same surface into a halo.", capJa: "夜は間接光が同じ面を掠め、光輪をつくる。" },
          { src: "images/fluid-vessel/03-living-wide.jpg", capEn: "Existing beams left exposed, parallel to the river.", capJa: "川と平行に走る既存梁は現しのまま。" },
          { src: "images/fluid-vessel/04-dining.jpg", capEn: "One vessel, furnished for a family of three.", capJa: "三人家族のための、ひとつの器。" }
        ]
      },
      {
        no: "Ⅲ",
        title: "Material & Circulation",
        titleJa: "素材と回遊",
        images: [
          { src: "images/fluid-vessel/11-washbasin.jpg", capEn: "An open washbasin along the circulation loop.", capJa: "回遊動線の傍らのアウトベーシン。" },
          { src: "images/fluid-vessel/01-entrance.jpg", capEn: "Hand-troweled terracotta plaster, wall to ceiling.", capJa: "手仕事のテラコッタ左官が壁から天井へ続く。" },
          { src: "images/fluid-vessel/09-kitchen.jpg", capEn: "The kitchen: granite, timber, and the concrete skeleton left legible.", capJa: "花崗岩と木、そして読み取れるまま残された躯体。", wide: true }
        ]
      }
    ],

    planImage: "images/fluid-vessel/15-plan.jpg",

    credits: [
      { role: "Design", value: "Takuro Sawada" },
      { role: "Photography", value: "[Photographer name]" },
      { role: "Plasterwork — walls", value: "[Artisan / workshop]" },
      { role: "Plasterwork — ceiling", value: "[Artisan / workshop]" },
      { role: "Location", value: "Nakaochiai, Shinjuku, Tokyo" },
      { role: "Floor area", value: "65 m² — 5th floor, 1980s wall-type RC" },
      { role: "Completion", value: "2026" },
      { role: "Featured in", value: "—" }
    ]
  }

  /* ——— 次の作品を足すときは、上の } の後にカンマを打ち、
     同じ形の { ... } をコピーして中身を書き換える ———
  ,{
    slug: "next-project",
    title: "Next Project",
    ...
  }
  */
];
