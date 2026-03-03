import { useNavigate } from 'react-router';
import { GlassCard } from '../components/glass-card';
import { PrimaryButton } from '../components/primary-button';
import { Sparkles, Plus, MapPin, Calendar, TrendingUp, User, Settings, LogOut } from 'lucide-react';
import { motion } from 'motion/react';

export function DashboardPage() {
  const navigate = useNavigate();

  const userProfile = {
    name: 'Alex Rivera',
    travelType: 'Cultural Deep Diver',
    tripsCompleted: 12,
    memberSince: 'January 2026'
  };

  const savedTrips = [
    {
      id: 1,
      destination: 'Kyoto, Japan',
      match: 96,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
      dates: 'Apr 15-22, 2026',
      status: 'Planned'
    },
    {
      id: 2,
      destination: 'Oaxaca, Mexico',
      match: 94,
      image: 'https://images.unsplash.com/photo-1518659095309-7b4c18b01548?w=600&q=80',
      dates: 'Jun 8-15, 2026',
      status: 'Saved'
    },
    {
      id: 3,
      destination: 'Marrakech, Morocco',
      match: 91,
      image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=600&q=80',
      dates: 'Not scheduled',
      status: 'Wishlist'
    }
  ];

  const stats = [
    { label: 'Travel DNA Score', value: '96/100', icon: TrendingUp, color: 'from-blue-600 to-teal-600' },
    { label: 'Countries Matched', value: '24', icon: MapPin, color: 'from-violet-600 to-pink-600' },
    { label: 'Trips Planned', value: '3', icon: Calendar, color: 'from-teal-600 to-green-600' }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-teal-600/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 py-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-violet-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
            TripDNA
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate('/login')}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className="relative z-10 px-8 py-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-2">
                Welcome back, <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{userProfile.name}</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Your Travel Type: <span className="text-violet-400 font-semibold">{userProfile.travelType}</span>
              </p>
            </div>
            <PrimaryButton
              onClick={() => navigate('/quiz')}
              size="lg"
              glow
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New Trip
            </PrimaryButton>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <GlassCard key={index} hover className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
            </GlassCard>
          ))}
        </motion.div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Your Travel Profile</h2>
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-teal-600 flex items-center justify-center text-5xl font-bold">
                <User className="w-16 h-16 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{userProfile.name}</h3>
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-teal-600/20 border border-white/20 mb-4">
                  <span className="text-sm">{userProfile.travelType}</span>
                </div>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start text-gray-400">
                  <div>
                    <span className="font-semibold text-white">{userProfile.tripsCompleted}</span> Trips Completed
                  </div>
                  <div>
                    Member since <span className="font-semibold text-white">{userProfile.memberSince}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <PrimaryButton onClick={() => navigate('/results')} variant="secondary">
                  View Full Profile
                </PrimaryButton>
                <PrimaryButton onClick={() => navigate('/quiz')} variant="outline">
                  Retake Quiz
                </PrimaryButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Saved Trips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Your Trips</h2>
            <button className="text-violet-400 hover:text-violet-300 transition-colors">
              View All
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {savedTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <GlassCard hover className="overflow-hidden cursor-pointer" onClick={() => navigate('/itinerary')}>
                  <div className="relative h-48">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 font-bold text-sm">
                      {trip.match}% Match
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs">
                      {trip.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-violet-400" />
                      {trip.destination}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {trip.dates}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <GlassCard className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for Your Next Adventure?</h3>
            <p className="text-gray-400 mb-6">
              Discover new destinations that match your unique travel personality
            </p>
            <PrimaryButton onClick={() => navigate('/quiz')} size="lg">
              Plan Another Trip
            </PrimaryButton>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
