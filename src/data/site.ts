export const BUSINESS = {
  name: "Jai Maa Jwalpa Tour and Travel",
  nameHi: "जय मा ज्वालपा टूर एंड ट्रैवल",
  tagline: "Explore Uttarakhand with Comfort, Safety & Trust",
  phonePrimary: "+91 94111 25316",
  phonePrimaryDigits: "919411125316",
  phoneSecondary: "+91 89233 34391",
  phoneSecondaryDigits: "918923334391",
  email: "taxikotdwar@gmail.com",
  address: "Dhanesh Farm, Near Civil Court, Jhanda Chowk, Kotdwar, Uttarakhand 246149",
  plusCode: "PGW9+4W Kotdwar, Uttarakhand",
  domain: "jaimaajwalpataxiservices.com",
  rating: 4.9,
  reviewCount: 16,
  googleUrl: "https://www.google.com/search?q=Jai+Maa+Jwalpa+Tour+and+Travel+Kotdwar",
  mapsEmbed:
    "https://www.google.com/maps?q=Jhanda+Chowk+Kotdwar+Uttarakhand+246149&output=embed",
  hours: "24 × 7 (round-the-clock enquiries & bookings)",
} as const;

export const waLink = (msg?: string) =>
  `https://wa.me/${BUSINESS.phonePrimaryDigits}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Taxi Services" },
  { to: "/packages", label: "Tour Packages" },
  { to: "/fleet", label: "Fleet" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export type RouteLanding = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
  body: string[];
  price?: string;
  km?: string;
  duration?: string;
  keywords: string[];
};

export const ROUTES: RouteLanding[] = [
  {
    slug: "kotdwar-taxi-service",
    h1: "Kotdwar Taxi Service — Local & Outstation Cabs",
    metaTitle: "Kotdwar Taxi Service | Local & Outstation Cab Booking — Jai Maa Jwalpa",
    metaDescription:
      "Book reliable Kotdwar taxi service for local sightseeing, airport transfer and outstation trips. Sedan, Innova Crysta & Tempo Traveller at transparent fares.",
    intro:
      "Looking for a trusted Kotdwar taxi service? Jai Maa Jwalpa Tour and Travel is a Kotdwar-based operator offering clean, GPS-enabled cabs with courteous, background-verified drivers for every kind of journey — from a quick city errand to a multi-day Char Dham yatra.",
    highlights: [
      "Point-to-point local cabs across Kotdwar, Kaudia, Kanvashram, Sidhbali",
      "Outstation trips to Delhi, Dehradun, Haridwar, Rishikesh, Pauri",
      "Airport & railway pickup with flight-tracking on request",
      "24×7 customer support and transparent, no-hidden-charge pricing",
    ],
    body: [
      "Kotdwar is the gateway to the Garhwal Himalayas, and picking the right taxi partner makes a real difference — especially on winding hill routes where driver experience matters. Our fleet is built around the most-requested vehicles in Uttarakhand: fuel-efficient Dzire and Ertiga sedans for couples and small families, comfortable Innova Crysta for premium comfort, and 14/16/17+1 Seater Tempo Travellers for larger yatri mandals and corporate groups.",
      "Every cab is regularly cleaned, sanitised, GPS-fitted and mechanically inspected. Our drivers are locals who know every shortcut, tea stop and darshan timing between Kotdwar, Devprayag, Rudraprayag, Guptkashi and Badrinath — so you get a stress-free ride that starts on time and stays on schedule.",
      "You can book by call, WhatsApp or the enquiry form on this page. We share a confirmed fare upfront (including toll, parking and driver allowance where applicable), and accept Cash, UPI/GPay and Bank Transfer for advance booking amounts. Prices may vary based on season, vehicle type and exact pickup point — confirm on enquiry.",
    ],
    keywords: [
      "kotdwar taxi service",
      "taxi service in kotdwar",
      "kotdwar cab booking",
      "kotdwar to outstation taxi",
    ],
  },
  {
    slug: "delhi-to-kotdwar-taxi-service",
    h1: "Delhi to Kotdwar Taxi Service",
    metaTitle: "Delhi to Kotdwar Taxi Service | One-Way & Round Trip Cabs",
    metaDescription:
      "Comfortable Delhi to Kotdwar taxi service in sedan, SUV & Tempo Traveller. Transparent one-way and round-trip fares, 24×7 booking, professional drivers.",
    intro:
      "Travel from Delhi to Kotdwar in complete comfort with Jai Maa Jwalpa Tour and Travel. We operate one-way and round-trip cabs from any point in Delhi NCR — including IGI Airport, New Delhi Railway Station, Kashmiri Gate ISBT and Anand Vihar — direct to Kotdwar and onward Garhwal destinations.",
    highlights: [
      "One-way and round-trip Delhi ⇄ Kotdwar service",
      "Sedan, SUV, Innova Crysta and Tempo Traveller options",
      "IGI Airport / Railway Station / ISBT pickup",
      "Trained highway drivers familiar with NH-534 & Najibabad route",
    ],
    body: [
      "The Delhi to Kotdwar drive is roughly 230 km via NH-334 / NH-534 through Meerut, Bijnor and Najibabad, and takes about 6–7 hours depending on traffic. A private cab is the most convenient option for families, senior citizens starting a Char Dham yatra, and pilgrims connecting from Delhi Airport who need door-to-door service without changing vehicles.",
      "We assign clean, well-maintained vehicles and experienced drivers who understand highway driving discipline and hill-road handling. On request, we plan comfortable meal stops around Muzaffarnagar / Najibabad and share live location updates with your family for peace of mind.",
      "Starting fare Delhi → Kotdwar (one-way): ₹4,500 in a sedan. Round-trip, Tempo Traveller and Innova Crysta pricing available on enquiry. Prices may vary based on season, vehicle type and exact pickup point.",
    ],
    price: "From ₹4,500 (one-way sedan)",
    km: "≈ 230 km",
    duration: "6–7 hours",
    keywords: ["delhi to kotdwar taxi", "delhi to kotdwar cab", "airport to kotdwar taxi"],
  },
  {
    slug: "kotdwar-to-delhi-taxi-service",
    h1: "Kotdwar to Delhi Taxi Service",
    metaTitle: "Kotdwar to Delhi Taxi Service | ₹4,500 One-Way Cab | Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Delhi taxi at ₹4,500 (indicative). Sedan, SUV & Tempo Traveller. Sharing cabs available at ₹1,000 per person. 24×7 booking.",
    intro:
      "Book a hassle-free Kotdwar to Delhi taxi with Jai Maa Jwalpa Tour and Travel. We offer both private cabs and shared / pool cabs to Delhi NCR, with drop-off at IGI Airport, New Delhi Railway Station, ISBTs or any address in Delhi, Gurgaon, Noida, Faridabad and Ghaziabad.",
    highlights: [
      "Private one-way Kotdwar → Delhi from ₹4,500",
      "Sharing cab: ₹1,000 per person (based on availability)",
      "Drop at IGI Airport, NDLS, ISBT or any home address",
      "Early-morning and late-night departures available",
    ],
    body: [
      "The Kotdwar to Delhi route runs approximately 230 km through Najibabad, Bijnor and Meerut. Our sedans and SUVs are the most-booked options for couples, small families and business travellers connecting to Delhi Airport for onward flights. For solo travellers on a budget, we also arrange sharing cabs at ₹1,000 per person — a comfortable, cost-effective alternative to bus travel.",
      "All drivers carry valid commercial licences and are trained for long-distance highway driving. Vehicles are AC, cleaned before every trip, GPS-tracked and equipped with first-aid essentials.",
      "Pricing is transparent: fare, toll and parking are shared upfront on enquiry. Accepted payment methods include Cash, UPI/GPay and Bank Transfer. Prices may vary based on season, vehicle type and exact drop point.",
    ],
    price: "₹4,500 (one-way) · Sharing ₹1,000/person",
    km: "≈ 230 km",
    duration: "6–7 hours",
    keywords: ["kotdwar to delhi taxi", "kotdwar to delhi cab", "kotdwar to delhi sharing cab"],
  },
  {
    slug: "kotdwar-to-dehradun-taxi-service",
    h1: "Kotdwar to Dehradun Taxi Service",
    metaTitle: "Kotdwar to Dehradun Taxi | ₹3,500 One-Way | Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Dehradun taxi at ₹3,500 (indicative). Comfortable sedan, Innova Crysta & Tempo Traveller with experienced hill drivers.",
    intro:
      "Travel from Kotdwar to Dehradun with a trusted local operator. Our cabs cover the scenic hill route via Kotdwar–Kalagarh–Kotdwara–Rishikesh–Dehradun or the direct route via Najibabad–Haridwar, based on road conditions and your preference.",
    highlights: [
      "One-way fare from ₹3,500",
      "Sedan, Innova Crysta & Tempo Traveller options",
      "Pickup from any address in Kotdwar",
      "Drop at Dehradun Airport, Railway Station, ISBT or hotel",
    ],
    body: [
      "The Kotdwar to Dehradun journey is roughly 150 km and takes 4–5 hours depending on route choice and traffic. It's a popular corridor for families, students returning to Dehradun campuses, and business travellers connecting through Jolly Grant Airport.",
      "Our drivers know both the scenic and the fastest routes and will suggest the best option on the day of travel. Vehicles are air-conditioned, well-maintained and comfortable for hill sections — with proper luggage capacity for family trips.",
      "Fare shown is indicative for a standard sedan; Innova Crysta and Tempo Traveller pricing is shared on enquiry. Prices may vary based on season, vehicle type and exact pickup point.",
    ],
    price: "From ₹3,500 (one-way sedan)",
    km: "≈ 150 km",
    duration: "4–5 hours",
    keywords: ["kotdwar to dehradun taxi", "kotdwar to dehradun cab", "kotdwar dehradun innova"],
  },
  {
    slug: "kotdwar-to-pauri-taxi-service",
    h1: "Kotdwar to Pauri Taxi Service",
    metaTitle: "Kotdwar to Pauri Taxi Service | ₹3,500 One-Way | Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Pauri Garhwal taxi at ₹3,500. Comfortable hill-route cabs with experienced local drivers. Book by call or WhatsApp 24×7.",
    intro:
      "Take a comfortable Kotdwar to Pauri taxi through one of the most scenic drives in Garhwal. Our local drivers know the Kotdwar–Dugadda–Satpuli–Pauri hill route inside out — ensuring a safe, smooth ride even in monsoon conditions.",
    highlights: [
      "One-way Kotdwar → Pauri from ₹3,500",
      "Sedan, SUV and Tempo Traveller available",
      "Halts for tea, photography and short sightseeing on request",
      "Round-trip and same-day return options",
    ],
    body: [
      "Pauri is around 108 km from Kotdwar and the drive takes about 4 hours through beautiful pine forests and hillside villages. Pauri is a favourite for weekend getaways, government/administrative visits and pilgrims heading toward Khirsu, Ransi and nearby temples.",
      "Our sedans are ideal for couples and small families; Innova Crysta and Tempo Traveller work best for larger groups or when you're carrying more luggage. Every driver is trained for hill sections with proper braking discipline and controlled speeds.",
      "Fare shown is indicative for a standard sedan; final pricing depends on vehicle type and season. Confirm on enquiry via call or WhatsApp.",
    ],
    price: "From ₹3,500 (one-way sedan)",
    km: "≈ 108 km",
    duration: "≈ 4 hours",
    keywords: ["kotdwar to pauri taxi", "kotdwar to pauri cab", "kotdwar pauri garhwal taxi"],
  },
  {
    slug: "char-dham-tempo-traveller",
    h1: "Char Dham Tempo Traveller Booking",
    metaTitle: "Char Dham Tempo Traveller | 14/16/17+1 Seater Yatra Van — Jai Maa Jwalpa",
    metaDescription:
      "Book a luxury Char Dham Tempo Traveller (14/16/17+1 seater) for Yamunotri, Gangotri, Kedarnath & Badrinath. Experienced yatra drivers, transparent pricing.",
    intro:
      "A Char Dham Tempo Traveller is the most comfortable way for families, extended relatives and yatri mandals to complete the four dhams together — in one vehicle, on one shared schedule, without the coordination headaches of multiple cabs.",
    highlights: [
      "14, 16 and 17+1 seater luxury Tempo Travellers",
      "Push-back seats, curtains, AC, music, mobile charging",
      "Experienced Char Dham route drivers with helper on request",
      "Complete 10-day yatra circuit or custom Do Dham / Teen Dham",
    ],
    body: [
      "Our Tempo Travellers are configured with high-back push-back seats, LED lighting, curtains, roof storage, ample luggage space and reliable air-conditioning — essential comfort on the long Haridwar → Barkot → Uttarkashi → Guptkashi → Pipalkoti → Haridwar circuit.",
      "Every Char Dham departure is driven by a route-experienced driver who has completed multiple yatra seasons. He assists with hotel check-ins at Barkot, Uttarkashi, Guptkashi/Fata and Pipalkoti, manages darshan timing at Yamunotri, Gangotri, Kedarnath and Badrinath, and knows the safest tea and lunch halts.",
      "Featured 10-day Char Dham package: ₹19,500 per person including transport, hotel stay (4/6-bed sharing) and breakfast + dinner. Pony/palki/helicopter charges, first-day lunch and personal expenses are not included. Advance booking amount is non-refundable if cancelled.",
    ],
    price: "Char Dham 10D/9N: ₹19,500 per person",
    keywords: [
      "char dham tempo traveller",
      "tempo traveller for char dham",
      "17 seater char dham",
      "char dham yatra tempo",
    ],
  },
  {
    slug: "kotdwar-tempo-traveller",
    h1: "Kotdwar Tempo Traveller on Rent",
    metaTitle: "Kotdwar Tempo Traveller on Rent | 14/16/17+1 Seater | Jai Maa Jwalpa",
    metaDescription:
      "Hire a luxury Tempo Traveller in Kotdwar for weddings, family trips, corporate groups and pilgrimage tours. 14, 16 & 17+1 seater with AC and push-back seats.",
    intro:
      "Hire a Kotdwar Tempo Traveller for weddings, family functions, corporate outings, school picnics and hill-station tours. Our 14, 16 and 17+1 seater luxury Tempo Travellers keep the entire group together in comfort — from pickup to drop.",
    highlights: [
      "14 / 16 / 17+1 Seater options",
      "AC, push-back seats, curtains, LED lights",
      "Per-day, per-km and package rental options",
      "Local Kotdwar sightseeing + outstation & multi-day tours",
    ],
    body: [
      "Whether it's a baraat from Kotdwar to Najibabad, a corporate team visiting Sidhbali & Kanvashram, or a joint-family holiday to Nainital, our Tempo Travellers keep everyone together, comfortable and on the same schedule.",
      "Every vehicle is inspected before every trip, comes with a background-verified driver, and is available on flexible packages: per-day, per-km, or all-inclusive tour package. GPS tracking is standard, and we can add a helper for luggage-heavy or multi-day trips.",
      "Share your dates, group size and destination on WhatsApp for a firm quote. Prices may vary based on season, vehicle configuration and exact route.",
    ],
    keywords: [
      "kotdwar tempo traveller",
      "tempo traveller on rent kotdwar",
      "17 seater tempo traveller kotdwar",
    ],
  },
  {
    slug: "kotdwar-to-vaishno-devi-temple",
    h1: "Kotdwar to Vaishno Devi Temple Package",
    metaTitle: "Kotdwar to Vaishno Devi Temple Package | Cab & Tour — Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Vaishno Devi Temple (Katra) tour package with private cab or Tempo Traveller. Comfortable multi-day pilgrimage tour with hotel & darshan support.",
    intro:
      "Plan a peaceful Kotdwar to Vaishno Devi (Katra) pilgrimage with Jai Maa Jwalpa Tour and Travel. We arrange the complete transport, hotel and darshan logistics so your family can focus on the yatra.",
    highlights: [
      "Private sedan, SUV or Tempo Traveller",
      "Kotdwar → Katra via Haridwar / Ambala / Jammu",
      "Hotel arrangements in Katra on request",
      "Darshan planning and helicopter booking assistance",
    ],
    body: [
      "Vaishno Devi is roughly 700+ km from Kotdwar. Our multi-day pilgrimage package covers comfortable overnight halts, base-camp check-in at Katra, and assistance with darshan slot planning. Vehicles are chosen based on group size — sedan for couples, Innova Crysta for small families, Tempo Traveller for larger yatri groups.",
      "Advance booking is recommended during Navratri and long-weekend windows when Katra hotels fill early. Share your travel dates and passenger count to receive a firm quote.",
      "Pricing depends on vehicle type, hotel category and number of nights. Prices may vary based on season and confirm on enquiry.",
    ],
    keywords: ["kotdwar to vaishno devi", "vaishno devi package from kotdwar", "kotdwar katra taxi"],
  },
  {
    slug: "dehradun-to-char-dham-yatra",
    h1: "Dehradun to Char Dham Yatra Package",
    metaTitle: "Dehradun to Char Dham Yatra | 10 Days Package — Jai Maa Jwalpa",
    metaDescription:
      "Dehradun to Char Dham Yatra 10-day package with Tempo Traveller / Innova, hotel stay, breakfast & dinner. Yamunotri, Gangotri, Kedarnath, Badrinath.",
    intro:
      "Start your Char Dham Yatra directly from Dehradun with our fully organised 10-day package covering Yamunotri, Gangotri, Kedarnath and Badrinath — perfect for pilgrims flying into Jolly Grant Airport.",
    highlights: [
      "10 Days / 9 Nights complete Char Dham circuit",
      "Pickup from Dehradun airport, railway station or hotel",
      "Hotel stay + breakfast + dinner included",
      "Experienced yatra driver in luxury Tempo Traveller",
    ],
    body: [
      "The Dehradun departure route joins the classic yatra circuit at Barkot on Day 1 via Mussoorie and Kempty Falls, then continues through Uttarkashi, Guptkashi and Pipalkoti before concluding at Haridwar on Day 10.",
      "The package includes transport, hotel stay (4/6-bed sharing), breakfast and dinner. Pony/palki/helicopter charges, first-day lunch and personal expenses are not included. Aadhaar is mandatory and advance booking is non-refundable if cancelled.",
      "Featured price: ₹19,500 per person for our standard sharing package. Custom private packages, senior-citizen-friendly slower itineraries and helicopter add-ons available on request.",
    ],
    price: "₹19,500 per person (10D/9N)",
    duration: "10 Days / 9 Nights",
    keywords: ["dehradun to char dham yatra", "char dham package from dehradun"],
  },
  {
    slug: "haridwar-to-char-dham-yatra",
    h1: "Haridwar to Char Dham Yatra Package",
    metaTitle: "Haridwar to Char Dham Yatra Package | 10 Days — Jai Maa Jwalpa",
    metaDescription:
      "Haridwar to Char Dham Yatra 10-day package with Tempo Traveller, hotel stay, breakfast & dinner. Traditional start point for Yamunotri, Gangotri, Kedarnath, Badrinath.",
    intro:
      "Haridwar is the traditional starting point for Char Dham Yatra. Our 10-day package begins in Haridwar and covers Yamunotri, Gangotri, Kedarnath and Badrinath — with hotel stay, breakfast and dinner arranged throughout.",
    highlights: [
      "Traditional Haridwar → Barkot → Uttarkashi → Kedarnath → Badrinath → Haridwar loop",
      "Comfortable Tempo Traveller with experienced yatra driver",
      "Hotels booked at Barkot, Uttarkashi, Guptkashi/Fata, Pipalkoti",
      "Breakfast and dinner included",
    ],
    body: [
      "Day 1 begins in Haridwar with a scenic drive to Barkot via Mussoorie and Kempty Falls (approx. 220 km / 8–9 hrs). The circuit proceeds through Yamunotri, Uttarkashi, Gangotri, Guptkashi, Kedarnath, Pipalkoti and Badrinath before concluding at Haridwar on Day 10 with Devprayag darshan on the return leg.",
      "Package includes transport, hotel stay (4/6-bed sharing), and breakfast + dinner. Not included: pony/palki/helicopter, first-day lunch, personal expenses. Aadhaar mandatory. Advance non-refundable if cancelled.",
      "Featured price: ₹19,500 per person. Custom private packages available.",
    ],
    price: "₹19,500 per person (10D/9N)",
    duration: "10 Days / 9 Nights",
    keywords: ["haridwar to char dham yatra", "char dham package from haridwar"],
  },
  {
    slug: "kotdwar-to-char-dham-yatra",
    h1: "Kotdwar to Char Dham Yatra Package",
    metaTitle: "Kotdwar to Char Dham Yatra Package | Tempo Traveller — Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Char Dham Yatra package with Tempo Traveller, hotel stay, breakfast & dinner. Local Kotdwar operator with experienced yatra drivers.",
    intro:
      "As a Kotdwar-based operator, we run Char Dham Yatra packages that pick you up directly from your Kotdwar address — no additional travel required to Haridwar or Dehradun before the yatra begins.",
    highlights: [
      "Pickup from your Kotdwar home / hotel",
      "Full 10-day Char Dham circuit",
      "Hotel stay + breakfast + dinner",
      "Experienced local drivers",
    ],
    body: [
      "The Kotdwar departure joins the classic circuit at Haridwar on Day 1 morning, then proceeds via Barkot, Uttarkashi, Guptkashi and Pipalkoti before concluding at Haridwar and driving back to Kotdwar.",
      "Package covers transport, hotel stay (4/6-bed sharing) and breakfast + dinner. Pony/palki/helicopter charges, first-day lunch and personal expenses are not included. Aadhaar mandatory; advance non-refundable if cancelled.",
      "Featured price: ₹19,500 per person. Do Dham (Kedarnath + Badrinath) and Teen Dham packages also available.",
    ],
    price: "₹19,500 per person (10D/9N)",
    duration: "10 Days / 9 Nights",
    keywords: ["kotdwar to char dham yatra", "char dham from kotdwar"],
  },
  {
    slug: "delhi-to-char-dham-yatra",
    h1: "Delhi to Char Dham Yatra Package",
    metaTitle: "Delhi to Char Dham Yatra Package | 10 Days — Jai Maa Jwalpa",
    metaDescription:
      "Delhi to Char Dham Yatra package with pickup from Delhi, Tempo Traveller, hotel stay, breakfast & dinner. 10 days covering all four dhams.",
    intro:
      "Start your Char Dham Yatra with door-to-door pickup from Delhi NCR. Our 10-day package handles the Delhi → Haridwar transfer, the complete Yamunotri, Gangotri, Kedarnath and Badrinath circuit, and the return leg to Delhi.",
    highlights: [
      "Pickup anywhere in Delhi / NCR",
      "Delhi → Haridwar → full Char Dham → Delhi",
      "Luxury Tempo Traveller",
      "Hotel stay + breakfast + dinner included",
    ],
    body: [
      "The Delhi departure adds a Delhi → Haridwar transfer on Day 0 (approx. 220 km / 5–6 hrs). From Day 1 you follow the classic yatra circuit through Barkot, Uttarkashi, Guptkashi and Pipalkoti, before returning via Devprayag and Haridwar back to Delhi.",
      "Package includes transport, hotel stay (4/6-bed sharing), breakfast and dinner. Pony/palki/helicopter, first-day lunch and personal expenses not included. Aadhaar mandatory. Advance non-refundable if cancelled.",
      "Featured price starts at ₹19,500 per person for our standard sharing package (Delhi transfer surcharge on request).",
    ],
    price: "From ₹19,500 per person",
    duration: "10 Days / 9 Nights",
    keywords: ["delhi to char dham yatra", "char dham package from delhi"],
  },
  {
    slug: "kotdwar-to-pauri-garhwal",
    h1: "Kotdwar to Pauri Garhwal Tour & Taxi",
    metaTitle: "Kotdwar to Pauri Garhwal Taxi & Tour — Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Pauri Garhwal taxi and sightseeing tour with local drivers. Sedan, Innova Crysta and Tempo Traveller for family and group trips.",
    intro:
      "Pauri Garhwal is a serene hill town famous for panoramic Himalayan views and nearby destinations like Khirsu, Ransi and Kandoliya Temple. Our Kotdwar to Pauri Garhwal service covers point-to-point taxi and full-day sightseeing.",
    highlights: [
      "Scenic Kotdwar → Dugadda → Satpuli → Pauri route",
      "Full-day and multi-day tour options",
      "Local sightseeing at Khirsu, Kandoliya, Ransi",
      "Experienced hill drivers",
    ],
    body: [
      "The drive from Kotdwar to Pauri is around 108 km and takes roughly 4 hours. Pauri is a peaceful weekend base, ideal for a 2N/3D itinerary combining Pauri town, Khirsu meadows and Kandoliya Temple sunrise views.",
      "We offer flexible vehicle choices — sedan for couples, Innova Crysta for families with luggage, Tempo Traveller for groups of 10+. Fare from Kotdwar to Pauri starts at ₹3,500 for a standard sedan.",
      "Prices may vary based on season, vehicle type and exact pickup point. Confirm on enquiry.",
    ],
    price: "From ₹3,500 (one-way sedan)",
    keywords: ["kotdwar to pauri garhwal", "pauri garhwal tour", "kotdwar pauri khirsu"],
  },
  {
    slug: "kotdwar-to-kathmandu",
    h1: "Kotdwar to Kathmandu Tour Package",
    metaTitle: "Kotdwar to Kathmandu Tour Package | Nepal Yatra — Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Kathmandu (Nepal) tour package with transport, hotel stay and Pashupatinath darshan. Custom itinerary for families and groups.",
    intro:
      "Plan a peaceful Kotdwar to Kathmandu tour with Pashupatinath darshan, Muktinath (on extended packages) and Kathmandu / Pokhara sightseeing. We arrange the complete road/rail combination and Nepal-side transport & hotels.",
    highlights: [
      "Kotdwar → Gorakhpur/Sonauli → Kathmandu combination",
      "Pashupatinath, Boudhanath, Swayambhunath darshan",
      "Hotel arrangements in Kathmandu",
      "Extended Pokhara / Muktinath itineraries on request",
    ],
    body: [
      "Nepal is a treasured pilgrimage destination for many families in Uttarakhand. Our tour combines comfortable long-distance transport with careful hotel selection in Kathmandu, and pre-planned darshan timings at major temples.",
      "Documentation is simple for Indian nationals — Aadhaar or voter ID is accepted at the border. We assist with border formalities and share a detailed day-wise plan before confirmation.",
      "Package pricing depends on group size, vehicle type and hotel category. Share dates and passenger count for a firm quote.",
    ],
    keywords: ["kotdwar to kathmandu", "nepal tour from kotdwar", "pashupatinath package"],
  },
  {
    slug: "kotdwar-to-banaras",
    h1: "Kotdwar to Banaras (Varanasi) Tour Package",
    metaTitle: "Kotdwar to Banaras Tour Package | Kashi Vishwanath — Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Banaras (Varanasi) tour package with Kashi Vishwanath darshan, Ganga Aarti and Sarnath sightseeing. Comfortable transport and hotel stay.",
    intro:
      "Combine spiritual Kashi with peaceful Uttarakhand hills — our Kotdwar to Banaras tour package covers Kashi Vishwanath darshan, Dashashwamedh Ghat Ganga Aarti, and Sarnath.",
    highlights: [
      "Kashi Vishwanath Corridor darshan",
      "Evening Ganga Aarti at Dashashwamedh Ghat",
      "Sarnath sightseeing",
      "Hotel arrangements in Varanasi",
    ],
    body: [
      "Varanasi is one of the oldest continuously inhabited cities in the world and holds deep spiritual significance for devotees across India. Our package plans your darshan slots, ghat visits and Sarnath excursion in a comfortable 3–5 day itinerary.",
      "Transport is via a combination of road (Kotdwar → suitable railhead) and rail/road to Varanasi, based on the group's preference. Hotel category is chosen to match your budget.",
      "Pricing depends on group size, transport mix and hotel category. Confirm on enquiry.",
    ],
    keywords: ["kotdwar to banaras", "kotdwar to varanasi package", "kashi vishwanath tour"],
  },
  {
    slug: "kotdwar-to-ayodhya",
    h1: "Kotdwar to Ayodhya Tour Package",
    metaTitle: "Kotdwar to Ayodhya Tour Package | Ram Mandir Darshan — Jai Maa Jwalpa",
    metaDescription:
      "Kotdwar to Ayodhya tour package with Shri Ram Mandir darshan, Hanumangarhi & Kanak Bhawan. Comfortable transport and hotel arrangements.",
    intro:
      "Take your family to Ayodhya for Shri Ram Janmabhoomi darshan with our Kotdwar to Ayodhya tour package. We handle transport, hotel arrangements and darshan planning end-to-end.",
    highlights: [
      "Shri Ram Mandir darshan",
      "Hanumangarhi and Kanak Bhawan",
      "Sarayu Aarti in the evening",
      "Hotel arrangements in Ayodhya",
    ],
    body: [
      "Ayodhya has seen a dramatic increase in pilgrims since the Ram Mandir opening, and advance planning is essential — especially for darshan slots and hotels. Our team pre-books the trip so your visit is calm and organised.",
      "Package covers transport (road + rail combination as suited), hotel stay and local sightseeing. Extended packages combine Ayodhya with Varanasi and Prayagraj (Triveni Sangam).",
      "Share your travel dates and passenger count to receive a customised itinerary and firm quote.",
    ],
    keywords: ["kotdwar to ayodhya", "ayodhya tour package", "ram mandir darshan package"],
  },
];

type Pkg = { title: string; duration: string; price: string; covers: string; incl: string; slug: string; featured?: boolean };
export const PACKAGES: Pkg[] = [
  {
    title: "Char Dham Yatra Tour Package",
    duration: "10 Days / 9 Nights",
    price: "₹19,500 / person",
    featured: true,
    covers: "Yamunotri · Gangotri · Kedarnath · Badrinath",
    incl: "Transport · Hotel · Breakfast · Dinner",
    slug: "kotdwar-to-char-dham-yatra",
  },
  {
    title: "Teen Dham Yatra Tour Package",
    duration: "8 Days / 7 Nights",
    price: "Contact for best price",
    covers: "Yamunotri · Gangotri · Kedarnath / Badrinath",
    incl: "Custom hotel + transport",
    slug: "kotdwar-to-char-dham-yatra",
  },
  {
    title: "Kedarnath and Badrinath Package",
    duration: "6 Days / 5 Nights",
    price: "Contact for best price",
    covers: "Do Dham — Kedarnath & Badrinath",
    incl: "Transport + hotel arrangements",
    slug: "kotdwar-to-char-dham-yatra",
  },
  {
    title: "Yamunotri and Gangotri Package",
    duration: "5 Days / 4 Nights",
    price: "Contact for best price",
    covers: "Yamunotri & Gangotri",
    incl: "Transport + hotel arrangements",
    slug: "kotdwar-to-char-dham-yatra",
  },
];

export const DESTINATIONS = [
  "Kedarnath", "Badrinath", "Gangotri", "Yamunotri", "Haridwar",
  "Rishikesh", "Mussoorie", "Nainital", "Auli", "Jim Corbett",
  "Char Dham", "Banaras", "Vaishno Devi", "Ayodhya", "Dehradun",
] as const;

export const TESTIMONIALS = [
  {
    name: "Monu Bhatia",
    rating: 5,
    text:
      "Really good experience — drivers were professional, punctual and courteous throughout the trip. Would definitely recommend for anyone planning a Uttarakhand tour.",
  },
  {
    name: "Samaksh Bhatia",
    rating: 5,
    text:
      "Very positive experience. Drivers were professional and on time, and the vehicle was clean and comfortable. Made the trip completely stress-free.",
  },
  {
    name: "Aditya Sajwan",
    rating: 5,
    text:
      "The best tour operator in Kotdwar. Trip was well arranged, accommodations were good and transportation was smooth. Will definitely book with them again.",
  },
] as const;

export const FAQS = [
  {
    q: "How do I book a taxi with Jai Maa Jwalpa Tour and Travel?",
    a: "You can book by calling +91 94111 25316, sending a WhatsApp message, or filling out the enquiry form on this website. We confirm the fare and vehicle upfront.",
  },
  {
    q: "Are Char Dham Yatra packages available?",
    a: "Yes. Our featured 10-day Char Dham package is ₹19,500 per person including transport, hotel stay (4/6-bed sharing), breakfast and dinner. Custom Do Dham and Teen Dham packages are also available.",
  },
  {
    q: "Do you offer airport and railway station pickup?",
    a: "Yes — we offer pickup and drop from Dehradun (Jolly Grant) Airport, Delhi IGI Airport, and all major railway stations including Kotdwar, Haridwar and Dehradun.",
  },
  {
    q: "Can I customise my itinerary?",
    a: "Absolutely. Share your travel dates, group size and preferred destinations and we'll build a custom itinerary — including senior-citizen-friendly slower schedules.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, UPI / GPay and Bank Transfer for advance booking amounts. A confirmation receipt is shared over WhatsApp.",
  },
  {
    q: "Are your vehicles sanitised and well-maintained?",
    a: "Yes. Every vehicle is cleaned before each trip, mechanically inspected regularly, and equipped with GPS and first-aid essentials.",
  },
  {
    q: "Do you have Tempo Travellers for large groups?",
    a: "Yes — we operate 14, 16 and 17+1 seater luxury Tempo Travellers with push-back seats, AC, curtains and LED lighting, ideal for family and yatri mandal trips.",
  },
  {
    q: "Do you offer 24×7 customer support?",
    a: "Yes. Our team is available round-the-clock on +91 94111 25316 for booking help, travel queries and on-road support.",
  },
  {
    q: "What is the fare for Kotdwar to Delhi / Dehradun / Pauri?",
    a: "Indicative one-way fares: Kotdwar → Delhi ₹4,500; Kotdwar → Dehradun ₹3,500; Kotdwar → Pauri ₹3,500. A sharing cab to Delhi is available at ₹1,000 per person. Prices may vary based on season and vehicle type.",
  },
  {
    q: "What is included in the Char Dham price?",
    a: "Transport, hotel stay (4/6-bed sharing) and breakfast + dinner. Pony/palki/helicopter charges, the first day's lunch and personal expenses are not included.",
  },
  {
    q: "Do you have transparent pricing?",
    a: "Yes. We share the confirmed fare including toll, parking and driver allowance upfront. There are no hidden charges.",
  },
];
