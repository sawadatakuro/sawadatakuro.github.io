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

    // ——— 本文（見出しごとのセクション。見出しなしにしたい章は headingEn/headingJa を空 "" にする）———
    bodySections: [
      {
        headingEn: "", headingJa: "",
        en: [
          "When our child was born, we rethought what a home should be. The rental we lived in was a typical Japanese \"3LDK\" — a plan valued only by its number of rooms, each of them small, none quite enough for raising a child. We weren't after floor area. We wanted a home where a young child could move freely, and that could be one open space or a set of rooms depending on how the family grew.",
          "We found a 65-square-metre unit in a 1980s wall-type concrete building along the Myoshoji River. Its skeleton was distinctive: fanning open from the entrance toward a wide frontage facing the river. A conventional three-room plan had cut that generous frontage into small compartments. The problem was never the building — it was the plan."
        ],
        ja: [
          "子どもが生まれて、住まいを考え直した。それまでの賃貸は「3LDK」という、部屋数だけで価値が決まる典型的な間取りで、一つひとつの部屋は狭く、子育ての場としては物足りなかった。欲しかったのは広さそのものではない。幼い子が伸びやかに過ごせて、成長や使い方に応じて一体にも個室にもなる、そういう住まいだった。",
          "見つけたのは、妙正寺川沿いに建つ1980年代の壁式RC造マンションの一室、65㎡。玄関から川へ向かって末広がりに開き、川に面する間口が大きく取れる、特徴的な骨格を持っていた。その豊かな間口を、標準的な3LDKの間仕切りが小さな部屋に分断していた。問題は建物ではなく、間取りのほうにあった。"
        ]
      },
      {
        headingEn: "Perpendicular to a found order", headingJa: "発見された構造に、直交する",
        en: [
          "Because of the wall-type structure, large downstand walls — doubling as beams — ran in layers from the entrance to the river-facing window, on an axis parallel to the river. Rather than erase this inherited order, I made it the starting point. Everything added — sliding panels, low hanging walls that loosely define zones, the lighting rail overhead — runs perpendicular to that axis. The building flows quietly in the river's direction; life moves across it."
        ],
        ja: [
          "壁式RC造ゆえに、この住戸には構造梁を兼ねた大きな垂れ壁が、玄関から川側の窓まで層をなして走っていた。それは妙正寺川と平行な軸を持っている。この既存の秩序を消すのではなく、設計の出発点に据えた。新たに加えるものすべて――可動の戸襖、領域をゆるく定義する垂れ壁、天井の照明レール――を、その軸に直交させる。建物は川と同じ方向に静かに流れ、暮らしはその上を横切っていく。"
        ]
      },
      {
        headingEn: "Close it, and it becomes a room", headingJa: "閉じれば部屋になる",
        en: [
          "The movable partitions are a translation of two Japanese fittings, the kamoi lintel and the shikii threshold, into the way we live now: the shikii reduced to an embedded rail with no step underfoot, the kamoi left as it is. They divide without fixing. At the centre of the plan sit an island kitchen of large-format natural stone and an open washbasin, with a circulation loop linking the kitchen and the private quarters running around them. A niche beside the kitchen holds the refrigerator and storage; slide a panel across it and the panel becomes a screen, while the space behind becomes a place for a child to hide. The same panel changes its role with its position. When the child grows and needs a room of their own, no wall has to come down — closing the panels is enough."
        ],
        ja: [
          "可動間仕切りは、日本の鴨居と敷居を今の暮らしに翻訳したものだ。敷居は床の段差を残さず埋め込みレールにとどめ、鴨居はそのまま残した。領域を分けながら、固定はしない。プランの中心には大判の天然石で仕立てた島状のキッチンとアウトベーシンの洗面を据え、その周囲をキッチンとプライベート領域を巡る回遊動線が走る。キッチンの脇のニッチには冷蔵庫や収納を収め、戸襖をそこへ滑らせれば収納の目隠しになり、戸襖とニッチの間は子どもの隠れ場所になる。同じ一枚の戸襖が、置く場所で役割を変える。子どもが育って自分の部屋が要る日が来ても、壁を壊す必要はない。戸襖を閉じれば、そこが部屋になる。"
        ]
      },
      {
        headingEn: "The warmth of the hand against a cold city", headingJa: "都市の冷たさに、手の温度を",
        en: [
          "The main walls are finished in stucco antico, the Italian wet-plaster technique: lime, marble powder and sand, trowelled in layers by hand and polished to a sheen. The city beyond the windows is cool and dry; inside, I wanted the unevenness and warmth of a wall made by hand. The floor is natural linoleum, made from linseed oil, rosin and wood flour — a choice for a safe, soft ground on which a child grows up.",
          "The ceiling is a white plaster finish, subtly weathered, its shallow vault quoting — in reverse — the cross-section of the river's embankment, running continuously across the living, dining and children's zones. It was applied by a different craftsman than the walls. Its outer corners are rounded, softening the line between wall and ceiling and easing the low height. There is not a single downlight. Dimmable indirect light spreads along the curve to fill the space softly, while an adjustable track of spotlights, tracing the outline of each zone, lights only what is needed. The light, too, is never fixed."
        ],
        ja: [
          "主要な壁は、イタリアの湿式左官・スタッコアンティコで仕上げた。石灰・大理石粉・砂をコテで塗り重ね、最後に艶を出す古典的な技法だ。窓の外の都市は寒色で乾いている。その内側に、手で塗られた壁の揺らぎと温度を置きたかった。床は亜麻仁油やロジン、木粉から生まれた天然リノリウム。子どもが育つ環境を、安全でやわらかいものにするための選択だ。",
          "天井は、白を基調とした微妙な風化を持つ左官仕上げ。妙正寺川の護岸の断面を反転して引用した浅いヴォールトが、リビング・ダイニング・子どものための領域を連続して貫く。壁とは別の職人の手による。出隅はアールを描き、壁と天井の境目をぼかして、低い天井の圧迫感を和らげている。ここにダウンライトは一つもない。調光した間接光がアールに沿って広がり、空間全体をやわらかく満たす。それとは別に、各領域の輪郭を縁取るダクトレールの可変スポットが、必要な場所だけを照らす。光もまた、固定されていない。"
        ]
      },
      {
        headingEn: "A destination I arrived at", headingJa: "たどり着いた場所",
        en: [
          "I design hotels for a living, in the design division of a general contractor. People sometimes read this house as an extension of that work; that isn't quite right. I never aimed for a hotel feeling, nor avoided one. I thought only about the contrast this particular place could offer — its structure, its position on the river — and about my family living well. In a hotel you look for an answer comfortable for everyone; in my own home I only had to think about mine. People say it feels like a hotel. That wasn't the destination I aimed for — only one I happened to arrive at.",
          "Like a vessel, the home holds its shape while what happens inside stays free to move. It will keep changing, quietly, with the years of the family it holds."
        ],
        ja: [
          "私は普段、ゼネコンの設計部でホテルを設計している。この家をその延長で語られることがあるが、それは正確ではない。ホテルらしさを目指したのでも、避けたのでもない。考えたのは、この場所――既存の構造、川沿いという文脈――から生まれる対比と、家族が心地よく暮らせることだけだった。ホテルでは、誰にとっても心地よい正解を探す。自分の家では、うちの家族にとっての心地よさだけを考えればよかった。「ホテルみたい」と言われることもある。それは目指した場所ではなく、たどり着いた場所だ。",
          "器のように、形は保ちながら、中身は自由に動ける。この家は、これからの家族の時間に合わせて、少しずつ使い方を変えていく。"
        ]
      }
    ],

    // ——— 章（各章に写真を割り当てる。写真を増やすなら images 配列に足すだけ）———
    chapters: [
      {
        no: "Ⅰ",
        title: "Cross-Current Partition",
        titleJa: "直交する戸襖",
        images: [
          { src: "images/fluid-vessel/05-fusuma-closed.jpg", capEn: "Panels closed/hideout: One panel — a divider, a screen for storage, a child's hiding place.", capJa: "同じ一枚が、仕切りにも、収納の目隠しにも、子どもの隠れ家にもなる。", wide: true },
          { src: "images/fluid-vessel/06-fusuma-open.jpg", capEn: "Panels open: Slide the panels back, and the three zones become one.", capJa: "戸襖を引けば、三つの領域はひとつの場になる。" },
          { src: "images/fluid-vessel/08-partition.jpg", capEn: "All partitions run perpendicular to the beams' river-parallel grain.", capJa: "すべての建具は、川と平行な梁に直交して走る。" }
        ]
      },
      {
        no: "Ⅱ",
        title: "Halo Vault",
        titleJa: "光の逆摺鉢天井",
        images: [
          { src: "images/fluid-vessel/03-living-wide.jpg", capEn: "Overview/living: Partitions removed, life opens across the full width of the river-facing frontage.", capJa: "間仕切りを取り払い、川に面する間口の全幅に暮らしを開く。", wide: true },
          { src: "images/fluid-vessel/02-living-vault.jpg", capEn: "Ceiling (Halo Vault): The river embankment's section, reversed overhead. Light without downlights.", capJa: "護岸の断面を反転して頭上に。ダウンライトを使わない光。" },
          { src: "images/fluid-vessel/14-night-halo.jpg", capEn: "Ceiling at night: Indirect light spreads along the curve. The light is never fixed.", capJa: "間接光がアールに沿って広がる。光は固定されない。" },
          { src: "images/fluid-vessel/04-dining.jpg", capEn: "One vessel, furnished for a family of three.", capJa: "三人家族のための、ひとつの器。" }
        ]
      },
      {
        no: "Ⅲ",
        title: "Material & Circulation",
        titleJa: "素材と回遊",
        images: [
          { src: "images/fluid-vessel/09-kitchen.jpg", capEn: "Kitchen island: A circulation loop turns around the large-format stone island.", capJa: "大判天然石の島を、回遊動線が巡る。", wide: true },
          { src: "images/fluid-vessel/01-entrance.jpg", capEn: "Stucco wall: Hand-trowelled stucco antico — the warmth of the hand against a cold city.", capJa: "手で塗り重ねたスタッコアンティコ。都市の冷たさに、手の温度を返す。" },
          { src: "images/fluid-vessel/11-washbasin.jpg", capEn: "An open washbasin along the circulation loop.", capJa: "回遊動線の傍らのアウトベーシン。" }
        ]
      }
    ],

    planImage: "images/fluid-vessel/15-plan.jpg",
    planCaptionEn: "Plan: Every intervention set perpendicular to the existing structure, which runs parallel to the river.",
    planCaptionJa: "川と平行な既存構造に、すべての介入を直交させる。",

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
