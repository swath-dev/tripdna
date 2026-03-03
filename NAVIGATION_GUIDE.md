# TripDNA - Navigation Guide

## Complete Page Flow

### 1. Landing Page (/)
**Features:**
- Hero section with animated gradient background
- Two main CTAs: "Start My Travel Profile" and "See How It Works"
- Three feature cards showcasing the platform
- Stats section with user metrics
- Footer with navigation links

**Navigation:**
- "Start My Travel Profile" → `/quiz`
- "See How It Works" → Scrolls to features section
- "Login" → `/login`
- "Pricing" → `/pricing`

---

### 2. Quiz Page (/quiz)
**Features:**
- Multi-step quiz with 5 questions
- Progress bar showing completion (Step X of 5)
- Different question types: choice cards, sliders, toggles
- Back/Next navigation
- Exit quiz button

**Question Types:**
1. Travel style (structured vs spontaneous)
2. Budget flexibility (slider 1-10)
3. Crowd tolerance (low/medium/high)
4. Food preference (street food vs fine dining)
5. Activity time (morning vs nightlife)

**Navigation:**
- "Back" → Previous question
- "Next" → Next question
- "Generate My Travel DNA" (final step) → `/loading`
- "Exit Quiz" → `/`

---

### 3. Loading Page (/loading)
**Features:**
- Animated gradient loader
- 4 progressive steps with icons
- Auto-redirects after 4 seconds

**Navigation:**
- Automatic redirect → `/results`

---

### 4. Results Page (/results)
**Features:**
- Travel DNA personality type display
- Three personality scores with animated bars
- Travel vibe section with traits
- Top 3 destination matches with images
- Action buttons

**Navigation:**
- "Generate AI Itinerary" → `/itinerary`
- "Download Travel DNA PDF" → Opens pricing modal → `/pricing`
- "Retake Quiz" → `/quiz`
- "Back to Dashboard" → `/dashboard`

---

### 5. Itinerary Page (/itinerary)
**Features:**
- Destination header with image
- Day-by-day itinerary (accordion format)
- Route map placeholder
- Hotel recommendations with ratings
- Action buttons

**Navigation:**
- "Upgrade to Premium PDF" → `/pricing`
- "Book Flights" → External link (Google Flights)
- "Save Trip" → Shows success toast → `/dashboard`
- "Back to Dashboard" → `/dashboard`

---

### 6. Pricing Page (/pricing)
**Features:**
- Three pricing tiers: Free, Pro ($12), Explorer ($29)
- Feature comparison
- Highlighted "Most Popular" plan
- Payment confirmation modal

**Pricing Tiers:**
- **Free**: Basic profile, 1 destination
- **Pro**: Complete profile, 10 destinations, itinerary, PDF
- **Explorer**: Unlimited everything, premium features

**Navigation:**
- "Upgrade Now" → Opens confirmation modal
- After confirmation → `/dashboard` or `/results`
- "Back" → Previous page

---

### 7. Dashboard Page (/dashboard)
**Features:**
- User profile summary
- Travel DNA stats (score, countries, trips)
- Saved trips grid with images
- Quick actions section

**Navigation:**
- "Create New Trip" → `/quiz`
- "View Full Profile" → `/results`
- "Retake Quiz" → `/quiz`
- Click on any saved trip → `/itinerary`
- "Plan Another Trip" → `/quiz`
- Logout button → `/login`

---

### 8. Login/Signup Page (/login)
**Features:**
- Split-screen design
- Social login options (Google, Facebook, Apple)
- Email/password form
- Toggle between login and signup
- Feature highlights on left side

**Navigation:**
- Social login buttons → `/dashboard`
- "Sign In" / "Sign Up" → `/dashboard`
- "Back to Home" → `/`
- Toggle between login/signup modes

---

## Design Features

### Glassmorphism
- Semi-transparent cards with backdrop blur
- White borders with low opacity
- Hover effects that increase brightness

### Gradient Accents
- Blue → Violet → Teal color scheme
- Applied to: buttons, headings, icons, backgrounds

### Animations
- Page transitions with Motion
- Hover scale effects on buttons
- Animated progress indicators
- Rotating gradient backgrounds
- Smooth accordion expansions

### Typography
- Inter font family
- Clean hierarchy with bold headings
- Gradient text for emphasis

### Interactive Elements
- Smooth hover states on all buttons
- Glass card hover effects
- Modal dialogs with backdrop blur
- Toast notifications for feedback
- Progress bars and sliders

---

## Key User Flows

### New User Journey
1. Landing Page → Start My Travel Profile
2. Quiz Page → Answer 5 questions
3. Loading Page → AI processing
4. Results Page → View Travel DNA
5. Itinerary Page → See personalized trip
6. Pricing Page → Upgrade (optional)
7. Dashboard → Manage trips

### Returning User Journey
1. Landing Page → Login
2. Dashboard → View saved trips
3. Click trip → Itinerary Page
4. Or create new trip → Quiz Page

### Premium Upgrade Flow
1. Any page → Locked feature
2. Pricing Modal/Page → Select plan
3. Confirmation → Dashboard

---

## Technical Stack
- **Framework**: React with React Router
- **Styling**: Tailwind CSS v4 + Custom glassmorphism
- **Animations**: Motion (Framer Motion)
- **UI Components**: Radix UI primitives
- **Notifications**: Sonner
- **Typography**: Inter font
