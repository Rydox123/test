import React from 'react';
import { Trophy, Users, Calendar, DollarSign, ArrowRight, Twitch, BarChart3, Info, Star, Shield, Target, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Target className="w-8 h-8 text-[#FF4D4D]" />
            <span className="text-2xl font-extrabold tracking-tight">GAMESTATS</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://escharts.com/tournaments/warzone/25000-warzone-creators-cup"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#161B22] border-2 border-[#FF4D4D] text-[#FF4D4D] hover:bg-[#1F2937] font-bold py-2 px-6 rounded-full transition duration-300 flex items-center"
            >
              <Shield className="mr-2 w-5 h-5" /> Tournament Hub
            </a>
            <a 
              href="https://www.twitch.tv/esportscharts/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8080] hover:from-[#FF6B6B] hover:to-[#FFA3A3] text-white font-bold py-2 px-6 rounded-full transition duration-300 flex items-center"
            >
              <Zap className="mr-2 w-5 h-5" /> Live Stream
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 17, 23, 0.9), rgba(13, 17, 23, 0.9)), url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/80 to-[#0D1117]"></div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="inline-block mb-8">
            <div className="bg-[#161B22] border-2 border-[#FF4D4D] rounded-full px-6 py-2 text-[#FF4D4D]">
              PRIZE POOL: $25,000
            </div>
          </div>
          <h1 className="text-7xl font-black mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D4D] to-[#FF8080]">
              WARZONE CREATORS
            </span>
            <br />
            <span className="text-white">CHAMPIONSHIP</span>
          </h1>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Experience the ultimate showdown as top gaming creators battle for glory in high-stakes Warzone matches
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://escharts.com/tournaments/warzone/25000-warzone-creators-cup"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#161B22] border-2 border-[#FF4D4D] text-[#FF4D4D] hover:bg-[#1F2937] font-bold py-4 px-8 rounded-full transition duration-300 flex items-center group"
            >
              <Shield className="mr-2" /> View Details
              <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="https://www.twitch.tv/esportscharts/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8080] hover:from-[#FF6B6B] hover:to-[#FFA3A3] text-white font-bold py-4 px-8 rounded-full transition duration-300 flex items-center"
            >
              <Zap className="mr-2" /> Watch Live
            </a>
          </div>
        </div>
      </div>

      {/* Tournament Info */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#161B22] border-2 border-[#21262D] p-8 rounded-2xl transform hover:scale-105 transition duration-300">
            <DollarSign className="w-12 h-12 text-[#FF4D4D] mb-6" />
            <h3 className="text-2xl font-bold mb-3">Prize Pool</h3>
            <p className="text-4xl font-black text-[#FF4D4D]">$25,000</p>
          </div>
          
          <div className="bg-[#161B22] border-2 border-[#21262D] p-8 rounded-2xl transform hover:scale-105 transition duration-300">
            <Star className="w-12 h-12 text-[#FF4D4D] mb-6" />
            <h3 className="text-2xl font-bold mb-3">Format</h3>
            <p className="text-gray-400 text-lg">Elite Competition</p>
          </div>
          
          <div className="bg-[#161B22] border-2 border-[#21262D] p-8 rounded-2xl transform hover:scale-105 transition duration-300">
            <Users className="w-12 h-12 text-[#FF4D4D] mb-6" />
            <h3 className="text-2xl font-bold mb-3">Players</h3>
            <p className="text-gray-400 text-lg">Top Creators</p>
          </div>
          
          <div className="bg-[#161B22] border-2 border-[#21262D] p-8 rounded-2xl transform hover:scale-105 transition duration-300">
            <Trophy className="w-12 h-12 text-[#FF4D4D] mb-6" />
            <h3 className="text-2xl font-bold mb-3">Game</h3>
            <p className="text-gray-400 text-lg">Warzone</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#161B22] border-y-2 border-[#21262D] py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-black mb-8 leading-tight">
                Real-Time
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4D4D] to-[#FF8080]">
                  Tournament Analytics
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Stay ahead of the game with live statistics, player performance metrics, and real-time tournament updates. Don't miss a single moment of the action!
              </p>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://escharts.com/tournaments/warzone/25000-warzone-creators-cup"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0D1117] border-2 border-[#FF4D4D] text-[#FF4D4D] hover:bg-[#1F2937] font-bold py-4 px-8 rounded-full transition duration-300 flex items-center group"
                >
                  <Shield className="mr-2" /> Live Stats
                  <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="https://www.twitch.tv/esportscharts/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#FF4D4D] to-[#FF8080] hover:from-[#FF6B6B] hover:to-[#FFA3A3] text-white font-bold py-4 px-8 rounded-full transition duration-300 flex items-center"
                >
                  <Zap className="mr-2" /> Watch Stream
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-video bg-[#0D1117] border-2 border-[#21262D] rounded-2xl overflow-hidden p-8">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl">
                  <div className="text-center">
                    <Target className="w-20 h-20 text-[#FF4D4D] mx-auto mb-6" />
                    <p className="text-xl text-gray-400">Tournament statistics loading...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;