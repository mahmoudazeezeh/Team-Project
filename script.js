document.addEventListener("DOMContentLoaded", () => {
  // Language Toggle
  const languageToggle = document.querySelector(".language-toggle")
  const htmlElement = document.documentElement
  const currentLang = document.querySelector(".current-lang")

  // Language translations
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.featured": "Featured",
      "nav.arrivals": "Arrivals",
      "nav.reviews": "Reviews",
      "nav.blog": "Blog",
      "hero.welcome": "WELCOME TO",
      "hero.bookstore": "BOOK STORE",
      "hero.description":
        "Discover a world of stories waiting to be explored. From bestsellers to hidden gems, we have something for every reader. Browse our collection and find your next favorite book today.",
      "hero.learnMore": "Learn More",
      "features.delivery": "Fast Delivery",
      "features.deliveryDesc": "Get your books delivered to your doorstep within 2-3 business days",
      "features.service": "24/7 Service",
      "features.serviceDesc": "Our customer support team is available round the clock to assist you",
      "features.deal": "Best Deal",
      "features.dealDesc": "Enjoy competitive prices and regular discounts on your favorite titles",
      "features.payment": "Secure Payment",
      "features.paymentDesc": "Shop with confidence with our secure and encrypted payment options",
      "about.title": "About Us",
      "about.description":
        "Founded in 2010, our bookstore has been a haven for book lovers for over a decade. We started with a simple mission: to connect readers with stories that inspire, entertain, and transform. Our carefully curated collection spans across genres, from timeless classics to contemporary bestsellers.",
      "about.readMore": "Read More",
      "featured.title": "Featured Books",
      "featured.bookTitle1": "The Great Adventure",
      "featured.author1": "John Smith",
      "featured.bookTitle2": "Mystery Island",
      "featured.author2": "Emily Johnson",
      "featured.bookTitle3": "The Lost City",
      "featured.author3": "Robert Brown",
      "featured.bookTitle4": "Eternal Wisdom",
      "featured.author4": "Sarah Wilson",
      "featured.bookTitle5": "Ocean Secrets",
      "featured.author5": "Michael Davis",
      "featured.bookTitle6": "Mountain Tales",
      "featured.author6": "Jennifer Lee",
      "featured.bookTitle7": "Desert Journey",
      "featured.author7": "David Miller",
      "featured.bookTitle8": "Forest Whispers",
      "featured.author8": "Lisa Thompson",
      "arrivals.title": "New Arrivals",
      "arrivals.bookTitle1": "The Silent Echo",
      "arrivals.author1": "Alexandra Rivers",
      "arrivals.bookTitle2": "Midnight Shadows",
      "arrivals.author2": "Thomas Wright",
      "arrivals.bookTitle3": "Beyond the Horizon",
      "arrivals.author3": "Sophia Martinez",
      "arrivals.bookTitle4": "Whispers in the Wind",
      "arrivals.author4": "Daniel Cooper",
      "arrivals.bookTitle5": "The Last Voyage",
      "arrivals.author5": "Olivia Parker",
      "arrivals.bookTitle6": "Eternal Flames",
      "arrivals.author6": "Nathan Reed",
      "reviews.title": "Reviews",
      "reviews.reviewer1": "John Doe",
      "reviews.review1":
        "I've been a loyal customer for years, and I'm always impressed by the selection and service. The staff recommendations have introduced me to some of my favorite authors that I might have otherwise missed.",
      "reviews.reviewer2": "Jane Smith",
      "reviews.review2":
        "The online ordering process is seamless, and my books always arrive earlier than expected. I also love the monthly book club discussions - they've really enriched my reading experience.",
      "reviews.reviewer3": "Robert Johnson",
      "reviews.review3":
        "As a parent, I appreciate the thoughtfully curated children's section. The staff is incredibly helpful in finding age-appropriate books that my kids actually enjoy reading. The loyalty program is a nice bonus too!",
      "reviews.reviewer4": "Emily Davis",
      "reviews.review4":
        "I discovered this bookstore last year and it's become my favorite place to shop for gifts. The packaging is beautiful, and they offer personalized recommendations that have made me the gift-giving hero among my friends.",
      "digital.title": "DIGITAL BOOKS",
      "digital.description":
        "Embrace the future of reading with our extensive collection of e-books and audiobooks. Enjoy instant access to thousands of titles, read anywhere, and save shelf space while helping the environment.",
      "digital.learnMore": "Browse Digital Library",
      "blog.title": "From Our Blog",
      "blog.post1Title": "Summer Reading List 2023",
      "blog.post1":
        "Discover our top picks for beach reads this summer. From thrilling mysteries to heartwarming romances, we've curated the perfect collection to accompany your vacation.",
      "blog.post2Title": "Meet the Author: Sarah Johnson",
      "blog.post2":
        'We sat down with bestselling author Sarah Johnson to discuss her creative process, upcoming projects, and the inspiration behind her award-winning novel "The Silent Path."',
      "blog.post3Title": "The Art of Building a Home Library",
      "blog.post3":
        "Creating a personal library is about more than just collecting books. Learn how to curate a collection that reflects your interests and creates a cozy reading sanctuary in your home.",
      "blog.readMore": "Read More",
      "footer.description":
        "We're more than just a bookstore - we're a community of readers, writers, and dreamers. Join us in celebrating the magic of literature and the joy of discovering new worlds through the pages of a book.",
      "footer.quickLinks": "Quick Links",
      "footer.contactInfo": "Contact Info",
      "footer.address": "123 Reading Lane, Bookville, BK 12345",
      "footer.phone": "+1 (555) 123-4567",
      "footer.email": "hello@bookstore.com",
      "footer.followUs": "Follow Us",
      "footer.newsletter": "Newsletter",
      "footer.emailPlaceholder": "Enter your email",
      "footer.subscribe": "Subscribe",
      "footer.copyright": "	© 2025 Book Store. All Rights Reserved.",
    },
 
  }



 

   

  // Theme Toggle
 

 



 



 



  

   

  


 
})
