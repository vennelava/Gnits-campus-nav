import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, MapPin, Calendar, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            GNITS Campus Navigation
          </h1>
          <p className="text-xl text-gray-600">
            Your Complete Campus Assistant
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Campus Navigation Card */}
          <div 
            onClick={() => navigate('/navigation')}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-transparent hover:border-indigo-500"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
              <Navigation className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Campus Navigation
            </h2>
            <p className="text-gray-600 mb-6">
              Find the shortest path between any two locations on campus. Get turn-by-turn directions with floor plans.
            </p>
            <div className="flex items-center text-indigo-600 font-semibold">
              Navigate Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Indoor & Outdoor Routes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span> Floor to Floor Navigation</span>
              </div>
              
            </div>
          </div>

          {/* Classroom Occupancy Card */}
          <div 
            onClick={() => navigate('/occupancy')}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 border-transparent hover:border-purple-500"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Classroom Occupancy
            </h2>
            <p className="text-gray-600 mb-6">
              Check real-time classroom availability, view schedules, and request room bookings for your events.
            </p>
            <div className="flex items-center text-purple-600 font-semibold">
              Check Availability
              <ArrowRight className="w-5 h-5 ml-2" />
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Real-time Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Weekly Schedules</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p>Developed for GNITS Hyderabad</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;