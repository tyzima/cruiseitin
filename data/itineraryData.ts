import { ItineraryData } from '../types';

export const itineraryData: ItineraryData = {
  "itinerary": [
    {
      "day": "Day 1: Sunday, October 5 - New York, NY",
      "port_address": "Manhattan Cruise Terminal, 711 12th Ave, New York, NY 10019",
      "port_lat": 40.7674,
      "port_lng": -73.9925,
      "return_to": "Manhattan Cruise Terminal, 711 12th Ave, New York, NY 10019",
      "eats": [
        {
          "name": "Mercado Little Spain",
          "address": "10 Hudson Yards, New York, NY 10001",
          "distance": "0.5 miles, 3 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://images.getbento.com/accounts/1657f4f6b3896dd6586d99c265a97178/media/images/9468466255Plaza.jpg?w=1200&fit=crop&auto=compress,format&cs=origin&crop=focalpoint&fp-x=0.5&fp-y=0.0",
          "description": "A vibrant Spanish market from Chef José Andrés, offering a variety of tapas, paella, and other Spanish delicacies in a lively, modern setting.",
          "lat": 40.7533,
          "lng": -74.0016
        },
        {
          "name": "Katz's Delicatessen",
          "address": "205 E Houston St, New York, NY 10002",
          "distance": "4 miles, 15 min drive",
          "type": "tourist",
          "source": "reddit",
          "image_url": "https://d2zyb4ugwufqpc.cloudfront.net/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/b/d/bday_sq.jpg",
          "description": "An iconic NYC institution since 1888, famous for its towering pastrami and corned beef sandwiches served in a bustling, no-frills atmosphere.",
          "lat": 40.7222,
          "lng": -73.9874
        },
        {
          "name": "Wu's Wonton King",
          "address": "165 E Broadway, New York, NY 10002",
          "distance": "4.5 miles, 16 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://static01.nyt.com/images/2017/09/27/dining/27HUNGRY-WU-slide-C20E/27HUNGRY-WU-slide-C20E-superJumbo.jpg",
          "description": "A Chinatown favorite renowned for its authentic Cantonese cuisine, especially its namesake wonton soup and king crab dishes.",
          "lat": 40.7139,
          "lng": -73.9904
        },
        {
          "name": "Prince Street Pizza",
          "address": "27 Prince St A, New York, NY 10012",
          "distance": "3.5 miles, 14 min drive",
          "type": "hidden gem",
          "source": "x",
          "image_url": "https://pyxis.nymag.com/v1/imgs/5d4/b09/3285ab1021882a7c9d95ee66c14e9b770f-prince-street-pizza-01.rsocial.w1200.jpg",
          "description": "Home of the legendary Spicy Spring square slice, this tiny pizzeria serves up some of the city's most sought-after Sicilian-style pizza.",
          "lat": 40.7231,
          // FIX: Corrected a typo in the longitude value which was not a valid number.
          "lng": -73.994
        }
      ],
      "attractions": [
        {
          "name": "Intrepid Sea, Air & Space Museum",
          "address": "Pier 86, W 46th St & 12th Ave, New York, NY 10036",
          "distance": "0.2 miles, 1 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Intrepid_Museum_%2849052290092%29.jpg",
          "description": "Explore history and technology at this museum complex aboard the aircraft carrier Intrepid, featuring the Space Shuttle Enterprise and supersonic jets.",
          "lat": 40.7645,
          "lng": -73.9992
        },
        {
          "name": "Tenement Museum",
          "address": "103 Orchard St, New York, NY 10002",
          "distance": "4.2 miles, 15 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/50/97_Orchard_Street_Front.jpg",
          "description": "Discover the stories of immigrant families who lived in the Lower East Side through guided tours of restored historic tenement buildings.",
          "lat": 40.7188,
          "lng": -73.9901
        },
        {
          "name": "Hudson Yards",
          "address": "20 Hudson Yards, New York, NY 10001",
          "distance": "0.5 miles, 3 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.hudsonyardsnewyork.com/sites/default/files/styles/experience_details/public/2024-03/2019JG10-121%20%281%29.jpg?h=7ed84782&itok=B7E_9vOF",
          "description": "A modern marvel of architecture and engineering, featuring the Vessel, high-end shopping, dining, and the Edge observation deck.",
          "lat": 40.7538,
          "lng": -74.0022
        },
        {
          "name": "Circle Line sightseeing",
          "address": "Pier 83, W 42nd St & 12th Ave, New York, NY 10036",
          "distance": "0.4 miles, 2 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://images.ctfassets.net/kpmk8wktzj4t/7nNIhsqfD9eemjz3LiMm5J/851711e7364c0af311ff4a0ea122c5d0/Lower_Manhattan__All_Cruises__3.jpg",
          "description": "See the iconic NYC skyline and landmarks like the Statue of Liberty and Brooklyn Bridge from the water on a relaxing boat tour.",
          "lat": 40.7621,
          "lng": -74.0016
        },
        {
          "name": "High Line",
          "address": "Gansevoort St to W 34th St, New York, NY 10011",
          "distance": "1.5 miles, 6 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.concordehotelnewyork.com/hs-fs/hubfs/Blog%20Photos/Explore%20Nature%20in%20the%20Sky%20by%20Walking%20the%20High%20Line.jpg?width=1236&height=1472&name=Explore%20Nature%20in%20the%20Sky%20by%20Walking%20the%20High%20Line.jpg",
          "description": "An elevated public park built on a historic freight rail line, offering a unique perspective of the city with gardens, art, and food vendors.",
          "lat": 40.7479,
          "lng": -74.0048
        }
      ]
    },
    {
      "day": "Day 2: Monday, October 6 - Newport, Rhode Island",
      "port_address": "Perrotti Park, 39 America's Cup Ave, Newport, RI 02840",
      "port_lat": 41.4903,
      "port_lng": -71.3183,
      "return_to": "Perrotti Park, 39 America's Cup Ave, Newport, RI 02840",
      "eats": [
        {
          "name": "Brick Alley Pub",
          "address": "140 Thames St, Newport, RI 02840",
          "distance": "0.3 miles, 2 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://resizer.otstatic.com/v3/photos/30459058-3?width=752&height=752&webp=true",
          "description": "A Newport staple with a massive menu, lively atmosphere, and an impressive salad bar, perfect for a casual and satisfying meal.",
          "lat": 41.4862,
          "lng": -71.3134
        },
        {
          "name": "MainSail Restaurant",
          "address": "25 America's Cup Ave, Newport, RI 02840",
          "distance": "0.1 miles, 1 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/1b/6d/4a/the-main-dining-room.jpg?w=900&h=500&s=1",
          "description": "Located in the Newport Marriott, offering upscale dining with stunning harbor views and a focus on fresh, local seafood.",
          "lat": 41.4907,
          "lng": -71.3174
        },
        {
          "name": "Anthony's Seafood",
          "address": "963 Aquidneck Ave, Middletown, RI 02842",
          "distance": "3 miles, 8 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://anthonysseafood.net/wp-content/uploads/2014/05/NOBACKGROUND-EDIT-copy-Medium-Mobile.gif",
          "description": "A no-frills seafood market and restaurant serving incredibly fresh lobster rolls, chowder, and fried clams beloved by locals.",
          "lat": 41.5121,
          "lng": -71.2748
        },
        {
          "name": "Scratch Kitchen",
          "address": "795 Thames St, Newport, RI 02840",
          "distance": "0.8 miles, 4 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/9b/7c/55/photo0jpg.jpg?w=900&h=500&s=1",
          "description": "A cozy spot known for its creative, from-scratch comfort food, from gourmet burgers to inventive brunch dishes.",
          "lat": 41.4795,
          "lng": -71.3146
        }
      ],
      "attractions": [
        {
          "name": "The Breakers mansion",
          "address": "44 Ochre Point Ave, Newport, RI 02840",
          "distance": "2.5 miles, 8 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.newportmansions.org/wp-content/uploads/2022/06/Ashworth-Breakers-2.jpg",
          "description": "The grandest of Newport's summer 'cottages,' this Vanderbilt mansion is a stunning symbol of Gilded Age wealth and opulence.",
          "lat": 41.4704,
          "lng": -71.2985
        },
        {
          "name": "Fort Adams State Park",
          "address": "90 Fort Adams Dr, Newport, RI 02840",
          "distance": "2 miles, 6 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://riparks.ri.gov/sites/g/files/xkgbur881/files/styles/max_325x325/public/2023-09/fort-adams-folk-fest-aerial.jpg?itok=xl9FRqfX",
          "description": "Home to the famous Newport Folk and Jazz Festivals, this historic fort offers panoramic views of Newport Harbor and Narragansett Bay.",
          "lat": 41.476,
          "lng": -71.339
        },
        {
          "name": "Sachuest Point National Wildlife Refuge",
          "address": "769 Sachuest Point Rd, Middletown, RI 02842",
          "distance": "4.5 miles, 12 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Beach_at_Sachuest_Point_National_Wildlife_Refuge.jpg",
          "description": "A beautiful coastal area with walking trails, offering fantastic opportunities for bird watching and enjoying unspoiled natural scenery.",
          "lat": 41.480,
          "lng": -71.242
        },
        {
          "name": "Rosecliff mansion",
          "address": "367 Bellevue Ave, Newport, RI 02840",
          "distance": "1.5 miles, 5 min drive",
          "type": "tourist",
          "source": "x",
          "image_url": "https://www.newportmansions.org/wp-content/uploads/2022/10/Rosecliff-MG-cover-image.jpg",
          "description": "Modeled after the Grand Trianon at Versailles, this elegant mansion is known for its beautiful ballroom and romantic history.",
          "lat": 41.472,
          "lng": -71.303
        },
        {
          "name": "Cliff Walk",
          "address": "Cliff Walk, Newport, RI",
          "distance": "1.8 miles, 6 min drive",
          "type": "tourist",
          "source": "reddit",
          "image_url": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/newportri-redesign/home_076ac0f3-ade6-4494-8757-da0676a0e8cf.jpg",
          "description": "A 3.5-mile public access way that combines the natural beauty of the shoreline with the architectural history of Newport's Gilded Age mansions.",
          "lat": 41.474,
          "lng": -71.297
        }
      ]
    },
    {
      "day": "Day 3: Tuesday, October 7 - Boston, Massachusetts",
      "port_address": "Black Falcon Cruise Terminal, 1 Black Falcon Ave, Boston, MA 02210",
      "port_lat": 42.3444,
      "port_lng": -71.0366,
      "return_to": "Black Falcon Cruise Terminal, 1 Black Falcon Ave, Boston, MA 02210",
      "eats": [
        {
          "name": "Quincy Market",
          "address": "206 S Market St, Boston, MA 02109",
          "distance": "2 miles, 8 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.tclf.org/sites/default/files/thumbnails/image/QuincyMarket_signature_TomKlein_2016.jpg",
          "description": "Part of Faneuil Hall Marketplace, this historic food hall is filled with a huge variety of food stalls, from clam chowder to international cuisine.",
          "lat": 42.3601,
          "lng": -71.0544
        },
        {
          "name": "Legal Sea Foods",
          "address": "255 State St, Boston, MA 02109",
          "distance": "2 miles, 8 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.legalseafoods.com/wp-content/uploads/2025/02/1-18.jpg",
          "description": "A Boston institution famous for its commitment to freshness, offering a classic New England seafood menu in a polished setting.",
          "lat": 42.3592,
          "lng": -71.0518
        },
        {
          "name": "Mike's Pastry",
          "address": "300 Hanover St, Boston, MA 02113",
          "distance": "2.5 miles, 10 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9c/ea/a1/photo1jpg.jpg?w=900&h=500&s=1",
          "description": "A legendary North End bakery where people line up for their famous cannoli, available in many flavors and served in a signature white box.",
          "lat": 42.3644,
          "lng": -71.0551
        },
        {
          "name": "Union Oyster House",
          "address": "41 Union St, Boston, MA 02108",
          "distance": "2 miles, 8 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Union_Oyster_House_2025.jpg",
          "description": "One of America's oldest restaurants, serving traditional New England seafood and Yankee classics in a building steeped in history.",
          "lat": 42.3614,
          "lng": -71.0571
        },
        {
          "name": "Yoma Burmese",
          "address": "5 North Beacon St, Boston, MA 02134",
          "distance": "6 miles, 15 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://static-content.owner.com/funnel/images/b526e1f5-6a7d-4dce-970d-e83610a4dae6?v=5690971923&w=3840&q=80&auto=format",
          "description": "A family-run gem offering authentic Burmese cuisine, with unique flavors like tea leaf salad and flavorful noodle dishes.",
          "lat": 42.356,
          "lng": -71.144
        }
      ],
      "attractions": [
        {
          "name": "Faneuil Hall",
          "address": "1 Faneuil Hall Sq, Boston, MA 02109",
          "distance": "2 miles, 8 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Faneuil_Hall_%285813514354%29.jpg",
          "description": "A historic marketplace and meeting hall that has been a center of commerce and revolutionary activity since 1742.",
          "lat": 42.360,
          "lng": -71.056
        },
        {
          "name": "Boston Public Garden",
          "address": "4 Charles St, Boston, MA 02116",
          "distance": "3 miles, 10 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/4/46/Boston_Common_Lake_April_2025.jpg",
          "description": "The first public botanical garden in America, famous for its Swan Boats, beautiful landscaping, and the 'Make Way for Ducklings' statues.",
          "lat": 42.354,
          "lng": -71.070
        },
        {
          "name": "Mapparium",
          "address": "200 Massachusetts Ave, Boston, MA 02115",
          "distance": "4 miles, 12 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://cdn10.bostonmagazine.com/wp-content/uploads/2015/11/mappariumchristian.jpg",
          "description": "A unique, three-story stained-glass globe that you can walk inside, offering a fascinating perspective on the world of 1935.",
          "lat": 42.346,
          "lng": -71.086
        }
      ]
    },
    {
      "day": "Day 4: Wednesday, October 8 - Bar Harbor, Maine",
      "port_address": "1 West St, Bar Harbor, ME 04609",
      "port_lat": 44.3896,
      "port_lng": -68.2048,
      "return_to": "1 West St, Bar Harbor, ME 04609",
      "eats": [
        {
          "name": "Jordan Pond House",
          "address": "2928 Park Loop Rd, Seal Harbor, ME 04675",
          "distance": "8 miles, 20 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://jordanpondhouse.com/wp-content/uploads/2023/11/Jordan-Pond-House-Lawn-with-Umbrellas-Up.jpg",
          "description": "Famous for its popovers and tea served on the lawn overlooking the scenic Jordan Pond and the Bubbles mountains in Acadia National Park.",
          "lat": 44.321,
          "lng": -68.256
        },
        {
          "name": "Mainely Meat BBQ",
          "address": "15 Knox Rd, Bar Harbor, ME 04609",
          "distance": "6 miles, 15 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://www.atlanticbrewing.com/wp-content/uploads/2017/02/FullSizeRender-1.jpg",
          "description": "A casual, open-air BBQ spot located at Atlantic Brewing Company, serving up delicious smoked meats and local craft beers.",
          "lat": 44.357,
          "lng": -68.283
        },
        {
          "name": "Beal's Lobster Pier",
          "address": "182 Clark Point Rd, Southwest Harbor, ME 04679",
          "distance": "12 miles, 25 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=618532456974830",
          "description": "An authentic, working lobster pier where you can enjoy fresh-off-the-boat lobster, steamers, and other seafood with harbor views.",
          "lat": 44.278,
          "lng": -68.322
        }
      ],
      "attractions": [
        {
          "name": "Cadillac Mountain",
          "address": "Cadillac Summit Rd, Bar Harbor, ME 04609",
          "distance": "8 miles, 20 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.acadia.ws/assets/img/1400x600/cadillac-mountain-m1a2566.jpg",
          "description": "The highest point on the North Atlantic seaboard and the first place to see the sunrise in the U.S. for part of the year. Offers stunning panoramic views.",
          "lat": 44.352,
          "lng": -68.225
        },
        {
          "name": "Thunder Hole",
          "address": "Park Loop Rd, Bar Harbor, ME 04609",
          "distance": "5 miles, 12 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://acadiamagic.com/images/720x480/thunder-hole-m1a7286-new.webp",
          "description": "A natural rock inlet where waves crash with a thunderous boom, especially dramatic in the hours before high tide.",
          "lat": 44.320,
          "lng": -68.188
        },
        {
          "name": "Sieur de Monts Spring",
          "address": "Sieur de Monts Rd, Bar Harbor, ME 04609",
          "distance": "4 miles, 10 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.nps.gov/acad/planyourvisit/images/DSC_4326.JPG",
          "description": "A peaceful area in Acadia featuring the Wild Gardens of Acadia, the Abbe Museum, and the original park Nature Center.",
          "lat": 44.364,
          "lng": -68.207
        },
        {
          "name": "Bar Island",
          "address": "Bridge St, Bar Harbor, ME 04609",
          "distance": "0.5 miles, 2 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://files.aptuitivcdn.com/l4gOa2eDBE-756/images/trails/trail-system/Bar-Harbor-and-the-Bar-2-128.1738866120.jpg",
          "description": "Accessible by a natural land bridge from Bar Harbor during low tide, offering a pleasant hike and great views back at the town.",
          "lat": 44.395,
          "lng": -68.206
        }
      ]
    },
    {
      "day": "Day 6: Friday, October 10 - Halifax, Nova Scotia",
      "port_address": "Halifax Seaport, 1215 Marginal Rd, Halifax, NS B3H 4P6",
      "port_lat": 44.640,
      "port_lng": -63.569,
      "return_to": "Halifax Seaport, 1215 Marginal Rd, Halifax, NS B3H 4P6",
      "eats": [
        {
          "name": "The Bicycle Thief",
          "address": "1475 Lower Water St, Halifax, NS B3J 3Z2",
          "distance": "0.3 miles, 2 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://bicyclethief.ca/wp-content/uploads/2021/07/OpeningPatios-3-845x684.jpg",
          "description": "A bustling and stylish Italian restaurant on the waterfront, known for its vibrant atmosphere, great food, and extensive wine list.",
          "lat": 44.644,
          "lng": -63.571
        },
        {
          "name": "Waterfront Warehouse",
          "address": "1549 Lower Water St, Halifax, NS B3J 1S2",
          "distance": "0.2 miles, 1 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.rcr.ca/content/uploads/2018/02/waterfront-warehouse-wide-1920x1006.jpg",
          "description": "A casual seafood restaurant in a historic building, offering an oyster bar and a menu full of classic maritime dishes.",
          "lat": 44.646,
          "lng": -63.572
        },
        {
          "name": "Dhaba Express",
          "address": "8 Oland Crescent, Halifax, NS B3S 1C6",
          "distance": "5 miles, 12 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://img1.wsimg.com/blobby/go/b621c54b-f04e-44d7-8488-66d51ad916f6/downloads/e8ce42c5-769c-482f-b891-be140c6d8154/outside%20-revised%20dhaba%20menu.jpg?ver=1752287467178",
          "description": "Authentic and flavorful North Indian street food served in a casual, unassuming setting, praised for its curries and biryanis.",
          "lat": 44.649,
          "lng": -63.645
        },
        {
          "name": "Salt + Ash",
          "address": "1741 Lower Water St, Halifax, NS B3J 0J2",
          "distance": "0.4 miles, 2 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://saltashhalifax.com/wp-content/uploads/2022/09/Salt-and-Ash-102-scaled.jpg",
          "description": "A modern waterfront spot focusing on live-fire cooking, offering everything from wood-fired pizzas to grilled seafood with great patio views.",
          "lat": 44.649,
          "lng": -63.573
        }
      ],
      "attractions": [
        {
          "name": "Halifax Waterfront Boardwalk",
          "address": "1655 Lower Water St, Halifax, NS B3J 1S5",
          "distance": "0.2 miles, 1 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Halifax_boardwalk.JPG",
          "description": "One of the world's longest urban boardwalks, bustling with shops, restaurants, museums, and street performers.",
          "lat": 44.647,
          "lng": -63.572
        },
        {
          "name": "Halifax Public Gardens",
          "address": "Spring Garden Rd & Summer St, Halifax, NS B3J 3S9",
          "distance": "1 mile, 5 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Halifax_Public_Gardens_entrance.jpg",
          "description": "A rare example of a formal Victorian public garden, offering a beautiful and serene oasis in the heart of the city.",
          "lat": 44.643,
          "lng": -63.582
        },
        {
          "name": "Art Gallery of Nova Scotia",
          "address": "1723 Hollis St, Halifax, NS B3J 1V9",
          "distance": "0.5 miles, 3 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Art_Gallery_of_Nova_Scotia%2C_Halifax_%283609686370%29.jpg",
          "description": "The provincial art gallery, featuring a collection of regional, Canadian, and international art, including the iconic Maud Lewis House.",
          "lat": 44.648,
          "lng": -63.574
        },
        {
          "name": "Halifax Citadel National Historic Site",
          "address": "5425 Sackville St, Halifax, NS B3J 3Y3",
          "distance": "1 mile, 5 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Citadel_hill.jpg",
          "description": "A star-shaped fort overlooking the city, offering guided tours, historical reenactments, and the firing of the noon gun.",
          "lat": 44.647,
          "lng": -63.580
        },
        {
          "name": "Maritime Museum of the Atlantic",
          "address": "1675 Lower Water St, Halifax, NS B3J 1S3",
          "distance": "0.3 miles, 2 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://maritimemuseum.novascotia.ca/sites/default/files/inline/images/mmaa4950.jpg",
          "description": "Canada's oldest and largest maritime museum, with exhibits on shipwrecks, the Halifax Explosion, and the Titanic.",
          "lat": 44.647,
          "lng": -63.573
        },
        {
          "name": "Horseshoe Island Park",
          "address": "Horseshoe Island, Halifax, NS",
          "distance": "5 miles, 12 min drive",
          "type": "hidden gem",
          "source": "reddit",
          "image_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/10/83/05/horseshoe-island-park.jpg?w=900&h=500&s=1",
          "description": "A small, quiet park on the Northwest Arm offering walking trails and a peaceful escape from the city bustle.",
          "lat": 44.628,
          "lng": -63.593
        }
      ]
    },
    {
      "day": "Day 8: Sunday, October 12 - New York, NY",
      "port_address": "Manhattan Cruise Terminal, 711 12th Ave, New York, NY 10019",
      "port_lat": 40.7674,
      "port_lng": -73.9925,
      "return_to": "Manhattan Cruise Terminal, 711 12th Ave, New York, NY 10019",
      "eats": [
        {
          "name": "The Loeb Boathouse",
          "address": "E 72nd St & Park Drive N, New York, NY 10021",
          "distance": "3 miles, 12 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://pyxis.nymag.com/v1/imgs/5b8/639/42838842668b203c9a6234b6b1585a730c-loeb-boathouse.rsquare.w700.jpg",
          "description": "An iconic restaurant in Central Park with picturesque lake views, offering a classic American menu in a romantic setting.",
          "lat": 40.774,
          "lng": -73.968
        },
        {
          "name": "Chelsea Market",
          "address": "75 9th Ave, New York, NY 10011",
          "distance": "2 miles, 8 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://www.chelseamarket.com/assets/images/photos/_1200x630_crop_center-center_82_none/chelsea-market-photo-gallery-1.jpg?mtime=1612470949",
          "description": "A bustling indoor food hall and shopping mall, offering a wide array of eateries from tacos and lobster to doughnuts and coffee.",
          "lat": 40.742,
          "lng": -74.006
        }
      ],
      "attractions": [
        {
          "name": "Central Park",
          "address": "59th St & 5th Ave, New York, NY 10022",
          "distance": "1.5 miles, 6 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/330px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg",
          "description": "An urban oasis in the heart of Manhattan, offering endless paths for walking, picnicking, visiting attractions like the carousel and zoo, and more.",
          "lat": 40.781,
          "lng": -73.966
        },
        {
          "name": "Metropolitan Museum of Art",
          "address": "1000 5th Ave, New York, NY 10028",
          "distance": "3 miles, 12 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://cdn.sanity.io/images/cctd4ker/production/c47d68fbeb2ac1df1c97065fc4c9576314114ac2-2100x1150.jpg?rect=539,36,1011,1074&w=3840&q=75&fit=clip&auto=format",
          "description": "One of the world's largest and finest art museums, with a collection spanning 5,000 years of art from across the globe.",
          "lat": 40.779,
          "lng": -73.963
        },
        {
          "name": "Staten Island Ferry",
          "address": "4 South St, New York, NY 10004",
          "distance": "6 miles, 20 min drive",
          "type": "tourist",
          "source": null,
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/0/06/Spirit_of_America_-_Staten_Island_Ferry.jpg",
          "description": "A free ferry service that provides stunning views of the Statue of Liberty, Ellis Island, and the Lower Manhattan skyline.",
          "lat": 40.701,
          "lng": -74.013
        }
      ]
    }
  ]
};