export const appartmentTypeData = [
    {
      id: 1,
      icon: "/images/a1.png",
      type: "House",
      number: 12,
    },
    {
      id: 2,
      icon: "/images/a2.png",
      type: "Appartments",
      number: 22,
    },
    {
      id: 3,
      icon: "/images/a3.png",
      type: "Office",
      number: 14,
    },
    {
      id: 4,
      icon: "/images/a4.png",
      type: "Villa",
      number: 9,
    },
    {
      id: 5,
      icon: "/images/a5.png",
      type: "TownHouse",
      number: 12,
    },
  ];
  
  export const properties = [
    {
      id: 1,
      propertyName: "Equestrian Family Home",
      location: "New York City, CA, USA",
      bedrooms: 1,
      bathrooms: 2,
      size: 1200,
      price: 45000,
      imageUrl: "/images/p1.jpg",
    },
    {
      id: 2,
      propertyName: "Modern Urban Retreat",
      location: "Brooklyn, NY, USA",
      bedrooms: 2,
      bathrooms: 1,
      size: 950,
      price: 50000,
      imageUrl: "/images/p2.jpg",
    },
    {
      id: 3,
      propertyName: "Cozy Countryside Cottage",
      location: "Albany, NY, USA",
      bedrooms: 3,
      bathrooms: 2,
      size: 1300,
      price: 60000,
      imageUrl: "/images/p3.jpg",
    },
    {
      id: 4,
      propertyName: "Luxury Downtown Apartment",
      location: "Manhattan, NY, USA",
      bedrooms: 1,
      bathrooms: 1,
      size: 800,
      price: 75000,
      imageUrl: "/images/p4.jpg",
    },
    {
      id: 5,
      propertyName: "Spacious Suburban House",
      location: "Staten Island, NY, USA",
      bedrooms: 4,
      bathrooms: 3,
      size: 2000,
      price: 90000,
      imageUrl: "/images/p5.jpg",
    },
    {
      id: 6,
      propertyName: "Chic Studio Loft",
      location: "Queens, NY, USA",
      bedrooms: 1,
      bathrooms: 1,
      size: 700,
      price: 48000,
      imageUrl: "/images/p6.jpg",
    },
  ];
  
  export const cities = [
    {
      id: 1,
      image: "/images/c1.jpg",
      cityName: "Ikoyi",
      numberOfProperties: 120,
    },
    {
      id: 2,
      image: "/images/c2.jpg",
      cityName: "Lekki",
      numberOfProperties: 85,
    },
    {
      id: 3,
      image: "/images/c3.jpg",
      cityName: "Victoria Island",
      numberOfProperties: 95,
    },
    {
      id: 4,
      image: "/images/c4.jpg",
      cityName: "Epe",
      numberOfProperties: 60,
    },
  ];
  
  export const buildings = [
    {
      id: 1,
      title: "Secure Parking",
      description: "Safe parking with 24/7 surveillance.",
      image: "/images/h1.png",
    },
    {
      id: 2,
      title: "Luxury Swimming Pool",
      description: "A pristine pool for relaxation.",
      image: "/images/h2.png",
    },
    {
      id: 3,
      title: "24/7 Private Security",
      description: "Round-the-clock private security.",
      image: "/images/h3.png",
    },
    {
      id: 4,
      title: "On-Site Medical Center",
      description: "Immediate medical care on-site.",
      image: "/images/h4.png",
    },
    {
      id: 5,
      title: "Quiet Library Area",
      description: "Peaceful space for reading and study.",
      image: "/images/h5.png",
    },
    {
      id: 6,
      title: "King-Size Comfort Beds",
      description: "Luxurious king-size beds for comfort.",
      image: "/images/h6.png",
    },
  ];
  
  export const blogs = [
    {
      id: 1,
      date: "02 Apr 2024",
      comment: "Comments (3)",
      title: "Find the Perfect Advertiser for Your Needs",
      shortDescription:
        "Find the right advertiser to effectively boost your business.",
      image: "/images/p1.jpg",
    },
    {
      id: 2,
      date: "05 Apr 2024",
      comment: "Comments (2)",
      title: "Maximize Your Business Growth with Smart Marketing",
      shortDescription:
        "Grow your business using smart, effective marketing strategies.",
      image: "/images/p2.jpg",
    },
    {
      id: 3,
      date: "10 Apr 2024",
      comment: "Comments (5)",
      title: "Tips for Choosing the Right Property to Invest In",
      shortDescription:
        "Select the best properties for secure and profitable investments.",
      image: "/images/p3.jpg",
    },
  ];
  
  export const userReviewData = [
    {
      id: 1,
      name: "Hephzibah Ezeikel",
      profession: "Real Estate Agent",
      userImage: "/images/u1.jpg",
      review:
        "A wonderful experience! LekkIkoyi made it easy to find exactly what I needed.",
    },
    {
      id: 2,
      name: "Michael Abang",
      profession: "Property Investor",
      userImage: "/images/u2.jpg",
      review:
        "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      profession: "Home Buyer",
      userImage: "/images/u3.jpg",
      review:
        "The website helped me find my dream home quickly and hassle-free. Exceptional service from LekkIkoyi!",
    },
    {
      id: 4,
      name: "Delight Afolabi",
      profession: "Interior Designer",
      userImage: "/images/u4.jpg",
      review:
        "Fantastic range of properties with clear details. LekkIkoyi is the best for home and design inspiration!",
    },
  ];

  export const listingsData = [
    {
      "id": 1,
      "title": "Modern Family Home in Suburb",
      "type": "house",
      "location": {
        "city": "Los Angeles",
        "state": "CA",
        "neighborhood": "Beverly Hills",
        "address": "123 Maple Street",
        "zip": "90210"
      },
      "price": 1200000,
      "bedrooms":"04",
      "bathrooms": "03",
      "size_sqft": 2500,
      "features": ["garden", "garage", "swimming pool", "fireplace"],
      "images": [
        "/images/p5.jpg",
        "/images/p4.jpg",
        "/images/p3.jpg",
        "/images/p6.jpg",
        "/images/p2.jpg",
        "/images/p1.jpg",
        "/images/p3.jpg",
        "/images/p2.jpg",
        "/images/p1.jpg"
      ],
      "listing_type": "sale",
      "contact": {
        "name": "John Doe",
        "phone": "(123) 456-7890",
        "email": "johndoe@realestate.com"
      },
      "description": "A beautiful, modern home in the heart of Beverly Hills with a spacious garden and a private pool. Perfect for families looking for luxury and comfort."
    },
    {
      "id": 2,
      "title": "Cozy Apartment Downtown",
      "type": "apartment",
      "location": {
        "city": "New York",
        "state": "NY",
        "neighborhood": "Manhattan",
        "address": "45 Elm Street",
        "zip": "10001"
      },
      "price": 3000,
      "bedrooms": "02",
      "bathrooms": "01",
      "size_sqft": 800,
      "features": ["balcony", "city view", "elevator", "gym"],
      "images": [
        "/images/p5.jpg",
        "/images/p4.jpg",
        "/images/p3.jpg",
        "/images/p6.jpg",
        "/images/p2.jpg",
        "/images/p1.jpg",
        "/images/p3.jpg",
        "/images/p2.jpg",
        "/images/p1.jpg"
      ],
      "listing_type": "rent",
      "contact": {
        "name": "Jane Smith",
        "phone": "(987) 654-3210",
        "email": "janesmith@realestate.com"
      },
      "description": "Enjoy city life in this cozy apartment located in the heart of Manhattan, with access to a gym and breathtaking city views."
    },
    {
      "id": 3,
      "title": "Luxury Condo with Ocean View",
      "type": "condo",
      "location": {
        "city": "Miami",
        "state": "FL",
        "neighborhood": "South Beach",
        "address": "789 Ocean Drive",
        "zip": "33139"
      },
      "price": 500000,
      "bedrooms": "03",
      "bathrooms": "02",
      "size_sqft": 1500,
      "features": ["ocean view", "pool", "gym", "balcony"],
      "images": [
        "/images/p3.jpg",
        "/images/p2.jpg",
        "/images/p1.jpg",
        "/images/p3.jpg",
        "/images/p2.jpg",
        "/images/p1.jpg",
        "/images/p3.jpg",
        "/images/p2.jpg",
        "/images/p1.jpg"
      ],
      "listing_type": "sale",
      "contact": {
        "name": "Carlos Martinez",
        "phone": "(555) 123-4567",
        "email": "carlosm@realestate.com"
      },
      "description": "Experience luxury living with this stunning condo in South Beach. Featuring ocean views, a private balcony, and access to a pool and gym."
    }
  ]
  