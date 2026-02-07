# HarpElle Website Content & Implementation Guide

## 🎨 Brand Implementation

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Font Import**: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`

### Color Palette
```css
:root {
  --harp-pink: #fd6ba7;
  --elle-purple: #7e39aa;
  --neutral-50: #f8f9fa;
  --neutral-100: #e9ecef;
  --neutral-600: #6c757d;
  --neutral-800: #343a40;
  --success-green: #28a745;
  --warning-orange: #ffc107;
  --white: #ffffff;
  --black: #000000;
}
```

### HarpElle Logo Implementation
```html
<h1 class="text-4xl font-bold">
  <span style="color: var(--harp-pink)">Harp</span><span style="color: var(--elle-purple)">Elle</span>
</h1>
```

---

## 🏠 Homepage Content & Layout

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HarpElle - Custom Mobile Apps & Web Development</title>
  <meta name="description" content="Professional mobile app and web development services. Specializing in sports technology, business solutions, and custom applications.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="icon" href="/assets/favicon.png">
</head>
```

### Hero Section
**Layout**: Full-width hero with background image, centered content
**Background Image**: `assets/images/shutterstock/hero-background.jpg`
**Content**:
```html
<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
    <h1 class="text-5xl md:text-7xl font-bold mb-6">
      <span style="color: #fd6ba7">Harp</span><span style="color: #7e39aa">Elle</span>
    </h1>
    <p class="text-xl md:text-2xl mb-4 font-medium">Custom Mobile Apps & Web Development</p>
    <p class="text-lg md:text-xl mb-8 text-gray-300 italic">Thoughtfully built. Creatively inspired.</p>
    <p class="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
      Transforming ideas into powerful digital solutions. From mobile apps that engage users to websites that drive business growth.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="#portfolio" class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
        View My Work
      </a>
      <a href="#contact" class="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
        Start Your Project
      </a>
    </div>
  </div>
</section>
```

### Services Overview Section
**Layout**: Three-column grid on desktop, single column on mobile
**Content**:
```html
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">What I Build</h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Specializing in mobile apps and web development that deliver real results for businesses and organizations.
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
          <img src="assets/images/shutterstock/icon-mobile.svg" alt="Mobile App Development" class="w-8 h-8">
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Mobile Apps</h3>
        <p class="text-gray-600 mb-6">
          iOS and Android apps that users love. From sports tracking to business solutions, built with modern frameworks and best practices.
        </p>
        <ul class="text-left text-gray-600 space-y-2">
          <li>• React Native & Expo development</li>
          <li>• App Store optimization</li>
          <li>• User-centered design</li>
          <li>• Performance optimization</li>
        </ul>
      </div>
      
      <div class="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
          <img src="assets/images/shutterstock/icon-web.svg" alt="Web Development" class="w-8 h-8">
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-4">Web Development</h3>
        <p class="text-gray-600 mb-6">
          Professional websites that drive business growth. From small business sites to complex web applications with custom functionality.
        </p>
        <ul class="text-left text-gray-600 space-y-2">
          <li>• Custom web applications</li>
          <li>• Responsive design</li>
          <li>• E-commerce solutions</li>
          <li>• Content management systems</li>
        </ul>
      </div>
      
      <div class="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300">
        <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
          <img src="assets/images/shutterstock/icon-design.svg" alt="UI/UX Design" class="w-8 h-8">
        </div>
        <h3 class="text-2xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
        <p class="text-gray-600 mb-6">
          Beautiful, intuitive interfaces that users love. Every design decision is made with your users and business goals in mind.
        </p>
        <ul class="text-left text-gray-600 space-y-2">
          <li>• User experience research</li>
          <li>• Interface design</li>
          <li>• Prototyping & testing</li>
          <li>• Brand integration</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

### Portfolio Preview Section
**Layout**: Featured project showcase with call-to-action
**Content**:
```html
<section id="portfolio" class="py-20 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
      <p class="text-xl text-gray-600">Recent projects that showcase my development capabilities</p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src="assets/images/portfolio/empowervb/desktop-homepage.png" alt="Empower VB Website" class="w-full h-auto">
        </div>
      </div>
      <div>
        <div class="flex items-center mb-4">
          <img src="assets/images/portfolio/empowervb/logo-empowervb.png" alt="Empower VB Logo" class="w-12 h-12 mr-4">
          <h3 class="text-3xl font-bold text-gray-900">Empower Volleyball Club</h3>
        </div>
        <p class="text-lg text-gray-600 mb-6">
          Complete website development for a new volleyball organization launching in Wisconsin. Built from concept to launch with custom registration systems, team management, and responsive design.
        </p>
        <div class="grid grid-cols-2 gap-4 mb-6">
          <div class="bg-gray-100 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">Technologies</h4>
            <p class="text-sm text-gray-600">HTML, CSS, JavaScript, Responsive Design</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
            <h4 class="font-semibold text-gray-900 mb-2">Features</h4>
            <p class="text-sm text-gray-600">Registration System, Team Management, Mobile-First</p>
          </div>
        </div>
        <div class="flex gap-4">
          <a href="https://empowervb.com" target="_blank" class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
            View Live Site
          </a>
          <a href="pages/portfolio.html" class="border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Case Study
          </a>
        </div>
      </div>
    </div>
    
    <div class="text-center">
      <a href="pages/portfolio.html" class="inline-flex items-center text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors duration-300">
        View All Projects
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
```

### App Showcase Section
**Layout**: Two-column grid showcasing VolleyTally and VolleyTrack
**Content**:
```html
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">My Apps</h2>
      <p class="text-xl text-gray-600">Mobile applications I've developed and published</p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- VolleyTally -->
      <div class="bg-gray-50 rounded-2xl p-8">
        <div class="flex items-center mb-6">
          <img src="assets/VolleyTally-PSD-rounded.png" alt="VolleyTally Logo" class="w-16 h-16 rounded-xl mr-4">
          <div>
            <h3 class="text-2xl font-bold text-gray-900">VolleyTally</h3>
            <p class="text-gray-600">Volleyball Scoreboard App</p>
          </div>
        </div>
        <p class="text-gray-600 mb-6">
          A comprehensive volleyball scoreboard app with customizable settings, multiple set tracking, and intuitive controls. Built with React Native and available on the App Store.
        </p>
        <div class="mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">Key Features:</h4>
          <ul class="text-gray-600 space-y-1">
            <li>• Multiple set tracking</li>
            <li>• Customizable team names</li>
            <li>• Dark mode support</li>
            <li>• Offline functionality</li>
          </ul>
        </div>
        <div class="flex gap-4">
          <a href="https://apps.apple.com/us/app/volleytally/id6743733066" target="_blank" class="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
            App Store
          </a>
          <a href="/volleytally/" class="border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>
      
      <!-- VolleyTrack -->
      <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div class="flex items-center mb-6">
          <img src="assets/VolleyTrack-icon.png" alt="VolleyTrack Logo" class="w-16 h-16 rounded-xl mr-4">
          <div>
            <h3 class="text-2xl font-bold">VolleyTrack</h3>
            <p class="text-purple-100">Advanced Analytics - Coming Soon</p>
          </div>
        </div>
        <p class="text-purple-100 mb-6">
          Next-generation volleyball analytics app with real-time performance tracking, detailed statistics, and team management features. Currently in development.
        </p>
        <div class="mb-6">
          <h4 class="font-semibold mb-2">Planned Features:</h4>
          <ul class="text-purple-100 space-y-1">
            <li>• Real-time match tracking</li>
            <li>• Performance analytics</li>
            <li>• Team management</li>
            <li>• Statistical reports</li>
          </ul>
        </div>
        <a href="https://forms.gle/HRLoQNVKY3hpSGgc8" target="_blank" class="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
          Join Beta List
        </a>
      </div>
    </div>
  </div>
</section>
```

### About Preview Section
**Layout**: Split layout with image and text
**Content**:
```html
<section class="py-20 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">Hi, I'm Jason</h2>
        <p class="text-xl text-gray-600 mb-6">
          A passionate developer who loves creating digital solutions that make a real difference. I specialize in mobile apps and web development, with a particular focus on sports technology and business applications.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          When I'm not coding, you'll find me supporting my daughters in their activities - which is actually how HarpElle got its name! Each letter represents one of my girls, and their favorite colors inspired our brand palette.
        </p>
        <div class="flex gap-4">
          <a href="pages/about.html" class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
            Learn More About Me
          </a>
          <a href="mailto:harpelleapps@gmail.com" class="border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-full font-semibold transition-all duration-300">
            Get In Touch
          </a>
        </div>
      </div>
      <div>
        <img src="assets/images/personal/headshot-professional.jpg" alt="Jason - HarpElle Developer" class="w-full h-auto rounded-2xl shadow-lg">
      </div>
    </div>
  </div>
</section>
```

### Contact CTA Section
**Layout**: Centered call-to-action with contact information
**Content**:
```html
<section id="contact" class="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
  <div class="max-w-4xl mx-auto px-4 text-center text-white">
    <h2 class="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
    <p class="text-xl mb-8">
      Let's discuss how I can help bring your app idea to life or create a website that drives your business forward.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
      <a href="pages/contact.html" class="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300">
        Start a Project
      </a>
      <a href="mailto:harpelleapps@gmail.com" class="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
        Email Me
      </a>
    </div>
    <p class="text-purple-100">
      <strong>harpelleapps@gmail.com</strong> • Available for new projects
    </p>
  </div>
</section>
```

---

## 👨‍💻 About Page Content

### Page Title & Meta
```html
<title>About Jason - HarpElle Mobile App & Web Developer</title>
<meta name="description" content="Learn about Jason, the developer behind HarpElle. Specializing in mobile apps and web development with a focus on sports technology and business solutions.">
```

### Hero Section
```html
<section class="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-5xl font-bold mb-6">About Me</h1>
    <p class="text-xl text-gray-300">
      The story behind HarpElle and my passion for creating digital solutions
    </p>
  </div>
</section>
```

### Main Content
```html
<section class="py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12 items-start mb-16">
      <div>
        <img src="assets/images/personal/headshot-professional.jpg" alt="Jason - HarpElle Developer" class="w-full h-auto rounded-2xl shadow-lg mb-8">
        <div class="bg-gray-50 p-6 rounded-2xl">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
          <ul class="space-y-2 text-gray-600">
            <li><strong>Location:</strong> Available for remote work</li>
            <li><strong>Experience:</strong> Mobile & web development</li>
            <li><strong>Specialties:</strong> React Native, Web Development</li>
            <li><strong>Industries:</strong> Sports tech, business solutions</li>
            <li><strong>Availability:</strong> Currently accepting new projects</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">My Development Journey</h2>
        <p class="text-lg text-gray-600 mb-6">
          I'm a passionate developer who believes in creating digital solutions that make a real difference. My journey into development started with a simple goal: build applications that solve real problems for real people.
        </p>
        <p class="text-lg text-gray-600 mb-6">
          What sets me apart is my focus on understanding not just the technical requirements, but the human needs behind every project. Whether it's a volleyball organization needing a comprehensive website or coaches looking for better ways to track performance, I dive deep into understanding the problem before crafting the solution.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          The name "HarpElle" comes from my two daughters - their names and their favorite colors inspired both the brand name and our signature pink and purple palette. This personal touch reminds me every day that technology should bring people together and make life better.
        </p>
        
        <h3 class="text-2xl font-semibold text-gray-900 mb-4">What I Love About Development</h3>
        <ul class="space-y-3 text-gray-600 mb-8">
          <li class="flex items-start">
            <span class="text-purple-600 mr-2">•</span>
            <span><strong>Problem Solving:</strong> Every project is a puzzle to solve, and I love finding elegant solutions to complex challenges.</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-600 mr-2">•</span>
            <span><strong>User Impact:</strong> Seeing how my apps and websites make people's lives easier or businesses more successful.</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-600 mr-2">•</span>
            <span><strong>Continuous Learning:</strong> Technology evolves constantly, and I'm always exploring new tools and techniques.</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-600 mr-2">•</span>
            <span><strong>Collaboration:</strong> Working with clients to turn their vision into reality is incredibly rewarding.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

### Skills Section
```html
<section class="py-20 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
      <p class="text-xl text-gray-600">The tools and technologies I use to bring ideas to life</p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Mobile Development</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center">
            <span class="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
            React Native & Expo
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
            iOS & Android Development
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
            App Store Optimization
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
            Push Notifications
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
            In-App Purchases
          </li>
        </ul>
      </div>
      
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Web Development</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            HTML, CSS, JavaScript
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Responsive Design
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Modern CSS Frameworks
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Performance Optimization
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            SEO Best Practices
          </li>
        </ul>
      </div>
      
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Design & UX</h3>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-center">
            <span class="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></span>
            User Interface Design
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></span>
            User Experience Research
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></span>
            Prototyping & Wireframing
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></span>
            Brand Integration
          </li>
          <li class="flex items-center">
            <span class="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-3"></span>
            Accessibility Design
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

---

## 💼 Services Page Content

### Page Title & Meta
```html
<title>Development Services - Mobile Apps & Web Development | HarpElle</title>
<meta name="description" content="Professional mobile app development and web development services. Custom solutions for iOS, Android, and web platforms.">
```

### Services Overview
```html
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">Development Services</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        From concept to launch, I provide comprehensive development services that turn your ideas into powerful digital solutions.
      </p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Mobile App Development -->
      <div class="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
        <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
          <img src="assets/images/shutterstock/icon-mobile.svg" alt="Mobile Development" class="w-8 h-8">
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Mobile App Development</h2>
        <p class="text-lg text-gray-600 mb-6">
          Native-quality apps for iOS and Android using React Native and Expo. From simple utilities to complex business applications.
        </p>
        
        <h3 class="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
        <ul class="space-y-3 text-gray-600 mb-8">
          <li class="flex items-start">
            <span class="text-pink-500 mr-2">✓</span>
            <span>Complete app development from concept to App Store</span>
          </li>
          <li class="flex items-start">
            <span class="text-pink-500 mr-2">✓</span>
            <span>UI/UX design and user experience optimization</span>
          </li>
          <li class="flex items-start">
            <span class="text-pink-500 mr-2">✓</span>
            <span>App Store submission and optimization</span>
          </li>
          <li class="flex items-start">
            <span class="text-pink-500 mr-2">✓</span>
            <span>Performance optimization and testing</span>
          </li>
          <li class="flex items-start">
            <span class="text-pink-500 mr-2">✓</span>
            <span>Post-launch support and updates</span>
          </li>
        </ul>
        
        <div class="bg-white p-6 rounded-xl mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">Perfect For:</h4>
          <p class="text-gray-600">Sports organizations, small businesses, startups, and entrepreneurs with mobile app ideas</p>
        </div>
        
        <a href="#contact" class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
          Discuss Your App Idea
        </a>
      </div>
      
      <!-- Web Development -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
        <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-6">
          <img src="assets/images/shutterstock/icon-web.svg" alt="Web Development" class="w-8 h-8">
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Web Development</h2>
        <p class="text-lg text-gray-600 mb-6">
          Professional websites and web applications that drive business growth. From simple business sites to complex web platforms.
        </p>
        
        <h3 class="text-xl font-semibold text-gray-900 mb-4">What's Included:</h3>
        <ul class="space-y-3 text-gray-600 mb-8">
          <li class="flex items-start">
            <span class="text-purple-500 mr-2">✓</span>
            <span>Custom website design and development</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-500 mr-2">✓</span>
            <span>Responsive design for all devices</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-500 mr-2">✓</span>
            <span>SEO optimization and performance tuning</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-500 mr-2">✓</span>
            <span>Content management systems</span>
          </li>
          <li class="flex items-start">
            <span class="text-purple-500 mr-2">✓</span>
            <span>Ongoing maintenance and support</span>
          </li>
        </ul>
        
        <div class="bg-white p-6 rounded-xl mb-6">
          <h4 class="font-semibold text-gray-900 mb-2">Perfect For:</h4>
          <p class="text-gray-600">Volleyball clubs, sports organizations, small businesses, and professionals needing a strong web presence</p>
        </div>
        
        <a href="#contact" class="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300">
          Start Your Website
        </a>
      </div>
    </div>
  </div>
</section>
```

### Process Section
```html
<section class="py-20 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">How We Work Together</h2>
      <p class="text-xl text-gray-600">A proven process that ensures your project is delivered on time and exceeds expectations</p>
    </div>
    
    <div class="grid md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">Discovery</h3>
        <p class="text-gray-600">We start with a detailed consultation to understand your goals, target audience, and project requirements.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">Planning</h3>
        <p class="text-gray-600">I create detailed project plans, wireframes, and technical specifications to guide development.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">Development</h3>
        <p class="text-gray-600">Your project is built using modern technologies and best practices, with regular updates on progress.</p>
      </div>
      
      <div class="text-center">
        <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
        <h3 class="text-xl font-semibold text-gray-900 mb-4">Launch</h3>
        <p class="text-gray-600">After thorough testing, we launch your project and provide ongoing support and maintenance.</p>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 Portfolio Page Content

### Page Title & Meta
```html
<title>Portfolio - Mobile Apps & Web Development Projects | HarpElle</title>
<meta name="description" content="View my portfolio of mobile apps and web development projects, including VolleyTally app and Empower VB website.">
```

### Featured Case Study - Empower VB
```html
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <div class="text-center mb-16">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">Portfolio</h1>
      <p class="text-xl text-gray-600">A showcase of recent projects and the results they achieved</p>
    </div>
    
    <!-- Empower VB Case Study -->
    <div class="bg-gray-50 rounded-2xl p-8 mb-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <div class="flex items-center mb-6">
            <img src="assets/images/portfolio/empowervb/logo-empowervb.png" alt="Empower VB Logo" class="w-16 h-16 mr-4">
            <div>
              <h2 class="text-3xl font-bold text-gray-900">Empower Volleyball Club</h2>
              <p class="text-gray-600">Complete Website Development</p>
            </div>
          </div>
          
          <p class="text-lg text-gray-600 mb-6">
            Empower Volleyball Club needed a comprehensive website to launch their new volleyball organization in Wisconsin. The project required everything from brand presentation to complex registration systems.
          </p>
          
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-gray-900 mb-2">Timeline</h4>
              <p class="text-sm text-gray-600">6 weeks from concept to launch</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-semibold text-gray-900 mb-2">Platform</h4>
              <p class="text-sm text-gray-600">Custom HTML/CSS/JavaScript</p>
            </div>
          </div>
          
          <a href="https://empowervb.com" target="_blank" class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
            View Live Site
          </a>
        </div>
        
        <div>
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src="assets/images/portfolio/empowervb/desktop-homepage.png" alt="Empower VB Homepage" class="w-full h-auto">
          </div>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
          <p class="text-gray-600 mb-4">
            Empower Volleyball Club was launching as a new organization and needed a website that would:
          </p>
          <ul class="space-y-2 text-gray-600">
            <li>• Establish credibility and professionalism</li>
            <li>• Handle player registration and team management</li>
            <li>• Provide information about multiple programs</li>
            <li>• Work perfectly on mobile devices</li>
            <li>• Integrate with their existing systems</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">The Solution</h3>
          <p class="text-gray-600 mb-4">
            I created a comprehensive website that serves as both a marketing tool and operational platform:
          </p>
          <ul class="space-y-2 text-gray-600">
            <li>• Clean, professional design that builds trust</li>
            <li>• Custom registration forms and team management</li>
            <li>• Responsive design optimized for all devices</li>
            <li>• SEO-optimized content and structure</li>
            <li>• Easy-to-update content management system</li>
          </ul>
        </div>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <img src="assets/images/portfolio/empowervb/desktop-homepage.png" alt="Desktop View" class="w-full h-auto rounded-lg shadow-md mb-4">
          <h4 class="font-semibold text-gray-900">Desktop Experience</h4>
          <p class="text-sm text-gray-600">Full-featured desktop layout with comprehensive information architecture</p>
        </div>
        
        <div class="text-center">
          <img src="assets/images/portfolio/empowervb/mobile-homepage.png" alt="Mobile View" class="w-full h-auto rounded-lg shadow-md mb-4 max-w-xs mx-auto">
          <h4 class="font-semibold text-gray-900">Mobile Optimized</h4>
          <p class="text-sm text-gray-600">Touch-friendly mobile design with fast loading and easy navigation</p>
        </div>
        
        <div class="text-center">
          <img src="assets/images/portfolio/empowervb/desktop-programs.png" alt="Programs Page" class="w-full h-auto rounded-lg shadow-md mb-4">
          <h4 class="font-semibold text-gray-900">Program Management</h4>
          <p class="text-sm text-gray-600">Detailed program information with registration and scheduling systems</p>
        </div>
      </div>
    </div>
    
    <!-- VolleyTally Case Study -->
    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="flex items-center mb-6">
            <img src="assets/VolleyTally-PSD-rounded.png" alt="VolleyTally Logo" class="w-16 h-16 rounded-xl mr-4">
            <div>
              <h2 class="text-3xl font-bold text-gray-900">VolleyTally</h2>
              <p class="text-gray-600">Mobile App Development</p>
            </div>
          </div>
          
          <p class="text-lg text-gray-600 mb-6">
            A comprehensive volleyball scoreboard app built with React Native. Features customizable settings, multiple set tracking, and an intuitive interface that coaches and players love.
          </p>
          
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-900 mb-2">Platform</h4>
              <p class="text-sm text-gray-600">React Native + Expo</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-900 mb-2">Status</h4>
              <p class="text-sm text-gray-600">Live on App Store</p>
            </div>
          </div>
          
          <div class="flex gap-4">
            <a href="https://apps.apple.com/us/app/volleytally/id6743733066" target="_blank" class="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
              App Store
            </a>
            <a href="/volleytally/" class="border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Learn More
            </a>
          </div>
        </div>
        
        <div>
          <div class="grid grid-cols-3 gap-4">
            <img src="assets/images/portfolio/volleytally/app-home.png" alt="VolleyTally Home Screen" class="w-full h-auto rounded-lg shadow-md">
            <img src="assets/images/portfolio/volleytally/app-scorekeeper.png" alt="VolleyTally Scorekeeper" class="w-full h-auto rounded-lg shadow-md">
            <img src="assets/images/portfolio/volleytally/app-settings.png" alt="VolleyTally Settings" class="w-full h-auto rounded-lg shadow-md">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 📞 Contact Page Content

### Page Title & Meta
```html
<title>Contact - Start Your Mobile App or Web Development Project | HarpElle</title>
<meta name="description" content="Ready to start your mobile app or web development project? Contact Jason at HarpElle for a free consultation.">
```

### Contact Form & Information
```html
<section class="py-20 bg-white">
  <div class="max-w-4xl mx-auto px-4">
    <div class="text-center mb-16">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h1>
      <p class="text-xl text-gray-600">
        Ready to turn your idea into reality? I'd love to hear about your project and discuss how I can help.
      </p>
    </div>
    
    <div class="grid lg:grid-cols-2 gap-12">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p class="text-lg text-gray-600 mb-8">
          Whether you have a detailed project plan or just an idea, I'm here to help. Let's start with a conversation about your goals and how we can achieve them together.
        </p>
        
        <div class="space-y-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900">Email</h3>
              <a href="mailto:harpelleapps@gmail.com" class="text-purple-600 hover:text-purple-700">harpelleapps@gmail.com</a>
            </div>
          </div>
          
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900">Response Time</h3>
              <p class="text-gray-600">Usually within 24 hours</p>
            </div>
          </div>
          
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900">Availability</h3>
              <p class="text-gray-600">Currently accepting new projects</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <form class="bg-gray-50 p-8 rounded-2xl">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">Project Inquiry</h3>
          
          <div class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
            </div>
            
            <div>
              <label for="project-type" class="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
              <select id="project-type" name="project-type" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="">Select a project type</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="website">Website Development</option>
                <option value="both">Both Mobile App & Website</option>
                <option value="consultation">Consultation Only</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="timeline" class="block text-sm font-medium text-gray-700 mb-2">Desired Timeline</label>
              <select id="timeline" name="timeline" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="">Select a timeline</option>
                <option value="asap">As soon as possible</option>
                <option value="1-2-months">1-2 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            
            <div>
              <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <select id="budget" name="budget" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="">Select a budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-plus">$25,000+</option>
                <option value="discuss">Let's discuss</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Tell me about your project</label>
              <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Describe your project, goals, and any specific requirements..."></textarea>
            </div>
            
            <button type="submit" class="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
              Send Project Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
```

---

## 🔧 Technical Implementation Notes

### Required CSS Custom Properties
```css
:root {
  --harp-pink: #fd6ba7;
  --elle-purple: #7e39aa;
  --gradient-primary: linear-gradient(135deg, var(--harp-pink) 0%, var(--elle-purple) 100%);
  --neutral-50: #f8f9fa;
  --neutral-100: #e9ecef;
  --neutral-600: #6c757d;
  --neutral-800: #343a40;
  --success-green: #28a745;
  --warning-orange: #ffc107;
  --white: #ffffff;
  --black: #000000;
}
```

### JavaScript Functionality Required
1. **Smooth Scrolling**: For navigation links
2. **Form Handling**: Contact form submission
3. **Image Optimization**: Lazy loading for portfolio images
4. **Mobile Menu**: Responsive navigation
5. **Analytics**: Google Analytics integration

### Performance Optimizations
1. **Image Compression**: All images should be optimized for web
2. **Lazy Loading**: Implement for portfolio images
3. **Minification**: CSS and JavaScript minification
4. **CDN**: Consider using a CDN for static assets

### SEO Requirements
1. **Meta Tags**: Proper title and description for each page
2. **Schema Markup**: Structured data for business information
3. **Sitemap**: XML sitemap generation
4. **Alt Text**: Descriptive alt text for all images

---

## 📋 Content Management

### Updating Portfolio
When adding new projects, follow this structure:
1. Create new folder in `assets/images/portfolio/[project-name]/`
2. Add project images following naming convention
3. Update portfolio page with new case study section
4. Add project to homepage portfolio preview if featured

### Brand Consistency
- Always use Inter font family
- Maintain HarpElle pink (#fd6ba7) and purple (#7e39aa) colors
- Use consistent spacing and component styles
- Follow established typography hierarchy

### Content Updates
- All content should be updated in this document first
- Maintain consistent tone: professional, approachable, results-focused
- Include specific metrics and results where possible
- Always include clear calls-to-action

---

*This document serves as the complete content and implementation guide for the HarpElle website revamp. All agentic AI tools should reference this document for exact copy, layout specifications, and implementation details.*
