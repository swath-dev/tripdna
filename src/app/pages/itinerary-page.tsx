import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../components/glass-card';
import { PrimaryButton } from '../components/primary-button';
import { Sparkles, MapPin, Calendar, Clock, Plane, Hotel, ChevronDown, ChevronUp, Star, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import * as Accordion from '@radix-ui/react-accordion';

export function ItineraryPage() {
  const navigate = useNavigate();
  const [expandedDay, setExpandedDay] = useState<string>('day1');

  const destination = {
    name: 'Kyoto, Japan',
    duration: '7 Days',
    season: 'Spring (Cherry Blossom Season)',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80'
  };

  const itinerary = [
    {
      day: 1,
      title: 'Arrival & Old Town Exploration',
      activities: [
        { time: '09:00', name: 'Arrive at Kansai Airport', description: 'Take express train to Kyoto (75 min)' },
        { time: '12:00', name: 'Check-in & Lunch', description: 'Traditional ramen in Gion district' },
        { time: '14:00', name: 'Kiyomizu-dera Temple', description: 'Historic temple with stunning city views' },
        { time: '17:00', name: 'Ninenzaka & Sannenzaka', description: 'Walk through preserved historic streets' },
        { time: '19:00', name: 'Dinner in Pontocho', description: 'Riverside dining experience' }
      ]
    },
    {
      day: 2,
      title: 'Bamboo Forest & Golden Temple',
      activities: [
        { time: '08:00', name: 'Arashiyama Bamboo Grove', description: 'Early morning visit to avoid crowds' },
        { time: '10:00', name: 'Tenryu-ji Temple', description: 'UNESCO World Heritage garden' },
        { time: '13:00', name: 'Traditional Lunch', description: 'Tofu kaiseki near the river' },
        { time: '15:00', name: 'Kinkaku-ji (Golden Pavilion)', description: 'Iconic gold-leaf covered temple' },
        { time: '18:00', name: 'Nishiki Market', description: 'Kyoto\'s kitchen - street food tasting' }
      ]
    },
    {
      day: 3,
      title: 'Cultural Immersion Day',
      activities: [
        { time: '09:00', name: 'Tea Ceremony Workshop', description: 'Learn traditional matcha preparation' },
        { time: '11:30', name: 'Fushimi Inari Shrine', description: 'Famous thousand torii gates hike' },
        { time: '14:00', name: 'Lunch near shrine', description: 'Inari sushi specialty' },
        { time: '16:00', name: 'Kimono Rental & Photoshoot', description: 'Dress up and explore Higashiyama' },
        { time: '19:00', name: 'Kaiseki Dinner', description: 'Multi-course traditional dining' }
      ]
    }
  ];

  const hotels = [
    {
      name: 'The Ritz-Carlton Kyoto',
      rating: 4.9,
      price: '$650/night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
      features: ['Riverside views', 'Spa', 'Traditional design']
    },
    {
      name: 'Hotel Kanra Kyoto',
      rating: 4.7,
      price: '$320/night',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
      features: ['Modern minimalist', 'Central location', 'Onsen bath']
    },
    {
      name: 'Guesthouse Bon',
      rating: 4.5,
      price: '$85/night',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
      features: ['Budget-friendly', 'Local experience', 'Shared kitchen']
    }
  ];

  const handleSaveTrip = () => {
    toast.success('Trip saved to your dashboard!', {
      description: 'You can access it anytime from your saved trips.'
    });
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-teal-600/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-violet-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
            TripDNA
          </span>
        </div>
        <PrimaryButton onClick={() => navigate('/dashboard')} variant="secondary">
          Back to Dashboard
        </PrimaryButton>
      </nav>

      <div className="relative z-10 px-8 py-12 max-w-6xl mx-auto">
        {/* Destination Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <GlassCard className="overflow-hidden">
            <div className="relative h-64">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
                  <MapPin className="w-10 h-10 text-violet-400" />
                  {destination.name}
                </h1>
                <div className="flex gap-6 text-gray-300">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {destination.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {destination.season}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Itinerary */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Day-by-Day Itinerary</h2>
              <Accordion.Root
                type="single"
                value={expandedDay}
                onValueChange={setExpandedDay}
                className="space-y-4"
              >
                {itinerary.map((day) => (
                  <Accordion.Item key={`day${day.day}`} value={`day${day.day}`}>
                    <GlassCard className="overflow-hidden">
                      <Accordion.Header>
                        <Accordion.Trigger className="w-full p-6 flex justify-between items-center hover:bg-white/5 transition-colors">
                          <div className="text-left">
                            <div className="text-sm text-violet-400 mb-1">Day {day.day}</div>
                            <div className="text-xl font-bold">{day.title}</div>
                          </div>
                          {expandedDay === `day${day.day}` ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="border-t border-white/10">
                        <div className="p-6 space-y-4">
                          {day.activities.map((activity, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="flex-shrink-0 w-20 text-violet-400 font-semibold">
                                {activity.time}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold mb-1">{activity.name}</div>
                                <div className="text-gray-400 text-sm">{activity.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Accordion.Content>
                    </GlassCard>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Route Map</h2>
              <GlassCard className="p-12 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-violet-400" />
                <p className="text-gray-400">Interactive map preview</p>
                <p className="text-sm text-gray-500 mt-2">Available in Pro version</p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <PrimaryButton
                onClick={() => navigate('/pricing')}
                className="w-full"
                size="lg"
              >
                Upgrade to Premium PDF
              </PrimaryButton>
              <PrimaryButton
                onClick={() => window.open('https://www.google.com/flights', '_blank')}
                variant="secondary"
                className="w-full"
              >
                <Plane className="w-5 h-5 mr-2" />
                Book Flights
                <ExternalLink className="w-4 h-4 ml-2" />
              </PrimaryButton>
              <PrimaryButton
                onClick={handleSaveTrip}
                variant="outline"
                className="w-full"
              >
                Save Trip
              </PrimaryButton>
            </motion.div>

            {/* Hotels */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">Suggested Hotels</h3>
              <div className="space-y-4">
                {hotels.map((hotel, index) => (
                  <GlassCard key={index} hover className="overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{hotel.name}</h4>
                        <div className="flex items-center gap-1 text-yellow-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          {hotel.rating}
                        </div>
                      </div>
                      <div className="text-violet-400 font-semibold mb-2">{hotel.price}</div>
                      <div className="flex flex-wrap gap-2">
                        {hotel.features.map((feature, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-white/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
