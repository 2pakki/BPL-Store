/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingCart, X, User, ChevronRight, ChevronLeft, Gamepad2, Info, Users, HelpCircle, LogOut, CheckCircle, ShieldCheck, Clock, ThumbsUp, ThumbsDown, CreditCard } from 'lucide-react';
import { games, formatINR, calculateDiscountedPrice, Game, Review } from './data/games';

type ViewState = 'store' | 'game' | 'community' | 'about' | 'support' | 'checkout' | 'success';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('store');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState<Game[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigateTo = (view: ViewState, game?: Game) => {
    setCurrentView(view);
    if (game) setSelectedGame(game);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (game: Game) => {
    if (!cart.find(item => item.id === game.id)) {
      setCart([...cart, game]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (gameId: string) => {
    setCart(cart.filter(item => item.id !== gameId));
  };

  const cartTotal = cart.reduce((total, game) => total + calculateDiscountedPrice(game.price, game.discountPercent), 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigateTo('checkout');
  };

  const handleConfirmPayment = () => {
    setCart([]);
    navigateTo('success');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-bpl-bg text-slate-200 selection:bg-bpl-accent selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-bpl-bg/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Nav */}
            <div className="flex items-center gap-10">
              <div 
                className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
                onClick={() => navigateTo('store')}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-bpl-accent to-purple-800 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all shadow-lg shadow-bpl-accent/20">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-extrabold text-white tracking-tight">BPL Store</span>
              </div>
              
              <nav className="hidden md:flex space-x-1">
                <NavButton active={currentView === 'store'} onClick={() => navigateTo('store')}>Store</NavButton>
                <NavButton active={currentView === 'community'} onClick={() => navigateTo('community')}>Community</NavButton>
                <NavButton active={currentView === 'about'} onClick={() => navigateTo('about')}>About</NavButton>
                <NavButton active={currentView === 'support'} onClick={() => navigateTo('support')}>Support</NavButton>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex relative group">
                <input
                  type="text"
                  placeholder="Search games..."
                  className="bg-bpl-surface text-white placeholder-slate-500 rounded-full pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-bpl-accent/50 w-64 text-sm transition-all group-hover:bg-bpl-surface-hover"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-2.5" />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <button 
                className="relative p-2 text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-bpl-accent text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                    {cart.length}
                  </span>
                )}
              </button>
              
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-tr from-emerald-400 to-cyan-400 rounded-full p-0.5 cursor-pointer">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full bg-bpl-surface rounded-full" />
                  </div>
                  <button onClick={() => setIsLoggedIn(false)} className="text-sm text-slate-400 hover:text-white">
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoginOpen(true)}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-full transition-colors"
                >
                  <User className="w-4 h-4" />
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === 'store' && <StoreView key="store" searchQuery={searchQuery} onGameClick={(g) => navigateTo('game', g)} onAddToCart={addToCart} />}
          {currentView === 'game' && selectedGame && <GameDetailView key="game" game={selectedGame} onAddToCart={addToCart} onBack={() => navigateTo('store')} />}
          {currentView === 'community' && <CommunityView key="community" />}
          {currentView === 'about' && <AboutView key="about" />}
          {currentView === 'support' && <SupportView key="support" />}
          {currentView === 'checkout' && <CheckoutView key="checkout" cart={cart} total={cartTotal} onConfirm={handleConfirmPayment} onBack={() => navigateTo('store')} />}
          {currentView === 'success' && <SuccessView key="success" onBackToStore={() => navigateTo('store')} />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-bpl-surface py-12 border-t border-white/5 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Gamepad2 className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">BPL Store</span>
          </div>
          <p className="text-sm text-slate-500 text-center md:text-left">
            © 2026 BPL Store. All rights reserved. Prices include VAT where applicable.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        onRemove={removeFromCart} 
        total={cartTotal} 
        onCheckout={handleCheckout}
      />

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsLoginOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-bpl-surface border border-white/10 rounded-2xl p-8 shadow-2xl"
            >
              <button onClick={() => setIsLoginOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-bpl-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                <p className="text-slate-400 text-sm mt-2">Sign in to access your games and community.</p>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email or Username</label>
                  <input type="text" required className="w-full bg-bpl-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bpl-accent focus:ring-1 focus:ring-bpl-accent transition-colors" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                  <input type="password" required className="w-full bg-bpl-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bpl-accent focus:ring-1 focus:ring-bpl-accent transition-colors" placeholder="••••••••" />
                </div>
                <button type="submit" className="w-full py-3 bg-bpl-accent hover:bg-bpl-accent-hover text-white font-semibold rounded-lg transition-colors mt-6">
                  Sign In
                </button>
              </form>
              <p className="text-center text-sm text-slate-500 mt-6">
                Don't have an account? <a href="#" className="text-bpl-accent hover:underline">Sign up</a>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Sub-components & Views ---

function NavButton({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {children}
    </button>
  );
}

function StoreView({ searchQuery, onGameClick, onAddToCart }: { key?: React.Key, searchQuery: string, onGameClick: (g: Game) => void, onAddToCart: (g: Game) => void }) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const featuredGames = games.filter(g => g.featured);
  const specialOffers = games.filter(g => g.discountPercent > 0).sort((a, b) => b.discountPercent - a.discountPercent).slice(0, 4);
  const trendingGames = games.slice(0, 8);

  if (searchQuery) {
    const results = games.filter(g => 
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      g.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">Search Results for "{searchQuery}"</h2>
        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map(game => (
              <GameCard key={game.id} game={game} onClick={() => onGameClick(game)} onAddToCart={() => onAddToCart(game)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No games found matching your search.</p>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Featured & Recommended</h2>
          <div className="flex gap-2">
            <button onClick={() => setCurrentHeroIndex((p) => (p - 1 + featuredGames.length) % featuredGames.length)} className="p-2 rounded-full bg-bpl-surface hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setCurrentHeroIndex((p) => (p + 1) % featuredGames.length)} className="p-2 rounded-full bg-bpl-surface hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative bg-bpl-surface rounded-3xl overflow-hidden shadow-2xl cursor-pointer group" onClick={() => onGameClick(featuredGames[currentHeroIndex])}>
          <AnimatePresence mode="wait">
            <motion.div key={currentHeroIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3 relative aspect-video lg:aspect-auto lg:h-[480px]">
                <img src={featuredGames[currentHeroIndex].heroImage || featuredGames[currentHeroIndex].image} alt={featuredGames[currentHeroIndex].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-bpl-surface via-transparent to-transparent" />
              </div>
              <div className="lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-bpl-surface z-10">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider">Featured</span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">{featuredGames[currentHeroIndex].title}</h3>
                <p className="text-slate-400 mb-8 line-clamp-3 leading-relaxed">{featuredGames[currentHeroIndex].description}</p>
                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <PriceDisplay game={featuredGames[currentHeroIndex]} size="lg" />
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onAddToCart(featuredGames[currentHeroIndex]); }}
                    className="w-full py-4 bg-white text-black hover:bg-slate-200 font-bold rounded-xl transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Special Offers */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialOffers.map(game => (
            <GameCard key={game.id} game={game} onClick={() => onGameClick(game)} onAddToCart={() => onAddToCart(game)} />
          ))}
        </div>
      </section>

      {/* Trending */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Trending Now</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingGames.map(game => (
            <GameCard key={game.id} game={game} onClick={() => onGameClick(game)} onAddToCart={() => onAddToCart(game)} compact />
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function GameDetailView({ game, onAddToCart, onBack }: { key?: React.Key, game: Game, onAddToCart: (g: Game) => void, onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="pb-20">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <img src={game.heroImage || game.image} alt={game.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-bpl-bg via-bpl-bg/60 to-transparent" />
        </div>
        <div className="absolute top-8 left-4 sm:left-8 z-10">
          <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/80 backdrop-blur rounded-full text-white text-sm font-medium transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Store
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">{game.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
              {game.developer && <span>Developer: <span className="text-white">{game.developer}</span></span>}
              {game.publisher && <span>Publisher: <span className="text-white">{game.publisher}</span></span>}
              {game.releaseDate && <span>Release Date: <span className="text-white">{game.releaseDate}</span></span>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col lg:flex-row gap-12">
        {/* Left Column: Details & Media */}
        <div className="lg:w-2/3 space-y-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {game.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-bpl-surface border border-white/5 text-slate-300 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* About */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">About this game</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              {game.description || "No description available for this title."}
            </p>
          </section>

          {/* Screenshots */}
          {game.screenshots && game.screenshots.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.screenshots.map((img, idx) => (
                  <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} className="w-full rounded-xl shadow-lg border border-white/5" />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Purchase Card */}
        <div className="lg:w-1/3">
          <div className="sticky top-28 bg-bpl-surface border border-white/10 rounded-3xl p-6 shadow-2xl">
            {game.offerEnds && (
              <div className="bg-bpl-accent/20 border border-bpl-accent/50 text-bpl-accent px-4 py-2 rounded-lg mb-4 flex items-center gap-2 text-sm font-bold">
                <Clock className="w-4 h-4" />
                {game.offerEnds}
              </div>
            )}
            <img src={game.image} alt={game.title} className="w-full rounded-xl mb-6 shadow-md" />
            
            {game.ratingSummary && (
              <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-sm text-slate-400 mb-1">Recent Reviews:</div>
                <div className="font-bold text-bpl-accent">{game.ratingSummary}</div>
                <div className="text-xs text-slate-500 mt-1">({game.reviewCount?.toLocaleString()} reviews)</div>
              </div>
            )}

            <div className="flex items-end justify-between mb-6">
              <PriceDisplay game={game} size="lg" />
            </div>
            <button 
              onClick={() => onAddToCart(game)}
              className="w-full py-4 bg-bpl-accent hover:bg-bpl-accent-hover text-white font-bold rounded-xl transition-colors shadow-lg shadow-bpl-accent/25 mb-4"
            >
              Add to Cart
            </button>
            <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-colors mb-6">
              Add to Wishlist
            </button>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>14-Day Refund Policy</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4 text-sm text-slate-400">
              <div className="flex justify-between">
                <span>Features</span>
                <span className="text-white text-right">Single-player<br/>Cloud Saves</span>
              </div>
              <div className="flex justify-between">
                <span>Platform</span>
                <span className="text-white">Windows</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          Customer Reviews
          <span className="text-sm font-normal text-slate-400 bg-white/10 px-3 py-1 rounded-full">
            {game.reviewCount?.toLocaleString() || 0}
          </span>
        </h2>
        
        {game.reviews && game.reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {game.reviews.map((review: Review) => (
              <div key={review.id} className="bg-bpl-surface border border-white/5 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full bg-bpl-bg" />
                    <div>
                      <div className="text-white font-bold">{review.author}</div>
                      <div className="text-xs text-slate-500">{review.date}</div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-bold ${review.rating === 'positive' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {review.rating === 'positive' ? <ThumbsUp className="w-4 h-4" /> : <ThumbsDown className="w-4 h-4" />}
                    {review.rating === 'positive' ? 'Recommended' : 'Not Recommended'}
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {review.content}
                </p>
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-slate-500 rounded-full" />
                  {review.helpfulCount.toLocaleString()} people found this helpful
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-bpl-surface border border-white/5 p-8 rounded-2xl text-center">
            <p className="text-slate-400">No reviews yet for this title.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CommunityView() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <Users className="w-16 h-16 text-bpl-accent mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">BPL Community</h1>
        <p className="text-slate-400 text-lg">Join millions of players. Share screenshots, write reviews, and find your next co-op partner.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-bpl-surface rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-700 rounded-full" />
              <div>
                <div className="text-white font-medium">Player_{i}99</div>
                <div className="text-xs text-slate-500">2 hours ago</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">Just finished Cyberpunk 2077. What an absolute masterpiece of a game! Highly recommend it to anyone who likes RPGs.</p>
            <div className="h-40 bg-bpl-bg rounded-xl mb-4 overflow-hidden">
              <img src={games[0].image} className="w-full h-full object-cover opacity-70" alt="Post media" />
            </div>
            <div className="flex gap-4 text-sm text-slate-400">
              <button className="hover:text-white">👍 24</button>
              <button className="hover:text-white">💬 5</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function AboutView() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <Info className="w-16 h-16 text-bpl-accent mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-white mb-8">About BPL Store</h1>
      <div className="prose prose-invert mx-auto text-slate-300 text-lg leading-relaxed space-y-6">
        <p>
          BPL Store is the ultimate destination for playing, discussing, and creating games. We believe in providing a seamless, modern experience for gamers worldwide.
        </p>
        <p>
          Founded in 2026, our mission is to connect players with the games they love through a beautiful, fast, and reliable platform. With localized pricing in INR and regular discounts, we make gaming accessible to everyone.
        </p>
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="bg-bpl-surface p-6 rounded-2xl border border-white/5">
            <div className="text-4xl font-bold text-white mb-2">50M+</div>
            <div className="text-sm text-slate-400">Active Users</div>
          </div>
          <div className="bg-bpl-surface p-6 rounded-2xl border border-white/5">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-sm text-slate-400">Games Available</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SupportView() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <HelpCircle className="w-16 h-16 text-bpl-accent mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">BPL Support</h1>
        <p className="text-slate-400 text-lg">What do you need help with?</p>
      </div>
      <div className="space-y-4">
        {['Purchases & Refunds', 'Account Security', 'Technical Support', 'Community Guidelines'].map((topic, i) => (
          <button key={i} className="w-full flex items-center justify-between p-6 bg-bpl-surface hover:bg-bpl-surface-hover border border-white/5 rounded-2xl transition-colors text-left group">
            <span className="text-lg font-medium text-white">{topic}</span>
            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

// --- Shared Components ---

function GameCard({ game, onClick, onAddToCart, compact = false }: { key?: React.Key, game: Game, onClick: () => void, onAddToCart: () => void, compact?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-bpl-surface rounded-2xl overflow-hidden shadow-lg group flex flex-col h-full cursor-pointer border border-white/5 hover:border-white/10 transition-all"
      onClick={onClick}
    >
      <div className="relative aspect-[460/215] overflow-hidden bg-bpl-bg">
        <img 
          src={game.image} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div className="mb-4">
          <h3 className={`font-bold text-white mb-1 line-clamp-1 ${compact ? 'text-base' : 'text-lg'}`}>{game.title}</h3>
          {!compact && <p className="text-xs text-slate-500">{game.developer}</p>}
        </div>
        <div className="flex items-end justify-between mt-auto">
          <PriceDisplay game={game} size={compact ? 'sm' : 'md'} />
        </div>
      </div>
    </motion.div>
  );
}

function PriceDisplay({ game, size = 'md' }: { game: Game, size?: 'sm' | 'md' | 'lg' }) {
  const isFree = game.price === 0;
  const hasDiscount = game.discountPercent > 0;
  const discountedPrice = calculateDiscountedPrice(game.price, game.discountPercent);

  const sizeClasses = {
    sm: { container: 'text-sm', discount: 'px-1.5 py-0.5 text-xs', original: 'text-[10px]', final: 'text-sm' },
    md: { container: 'text-base', discount: 'px-2 py-1 text-sm', original: 'text-xs', final: 'text-base' },
    lg: { container: 'text-xl', discount: 'px-3 py-1.5 text-lg', original: 'text-sm', final: 'text-2xl' }
  };

  const classes = sizeClasses[size];

  if (isFree) {
    return <div className={`text-white font-bold ${classes.final}`}>Free</div>;
  }

  if (!hasDiscount) {
    return <div className={`text-white font-bold ${classes.final}`}>{formatINR(game.price)}</div>;
  }

  return (
    <div className={`flex items-center gap-2 ${classes.container}`}>
      <div className={`bg-bpl-discount text-black font-extrabold rounded-md ${classes.discount}`}>
        -{game.discountPercent}%
      </div>
      <div className="flex flex-col items-end">
        <span className={`text-slate-500 line-through leading-none ${classes.original}`}>
          {formatINR(game.price)}
        </span>
        <span className={`text-white font-bold leading-none mt-1 ${classes.final}`}>
          {formatINR(discountedPrice)}
        </span>
      </div>
    </div>
  );
}

function CartSidebar({ isOpen, onClose, cart, onRemove, total, onCheckout }: any) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-bpl-surface shadow-2xl z-50 flex flex-col border-l border-white/10"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/5">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-bpl-accent" />
                Your Cart
              </h2>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center text-slate-500 mt-20">
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                  <p>Your cart is empty.</p>
                  <button onClick={onClose} className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((game: Game) => (
                  <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} key={game.id} className="flex gap-4 bg-bpl-bg p-3 rounded-xl border border-white/5">
                    <img src={game.image} alt={game.title} className="w-24 h-14 object-cover rounded-lg" />
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-white line-clamp-1">{game.title}</h4>
                        <button onClick={() => onRemove(game.id)} className="text-slate-500 hover:text-red-400 text-xs ml-2">
                          Remove
                        </button>
                      </div>
                      <div className="self-end mt-2">
                        <PriceDisplay game={game} size="sm" />
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-bpl-bg border-t border-white/5">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-400">Estimated Total</span>
                  <span className="text-2xl font-bold text-white">{formatINR(total)}</span>
                </div>
                <button onClick={onCheckout} className="w-full py-4 bg-bpl-accent hover:bg-bpl-accent-hover text-white font-bold rounded-xl transition-colors shadow-lg shadow-bpl-accent/20">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CheckoutView({ cart, total, onConfirm, onBack }: { key?: React.Key, cart: Game[], total: number, onConfirm: () => void, onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back to Store
      </button>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
          
          <form onSubmit={(e) => { e.preventDefault(); onConfirm(); }} className="space-y-8">
            <section className="bg-bpl-surface p-6 rounded-2xl border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-bpl-accent" /> Billing Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">First Name</label>
                  <input type="text" required className="w-full bg-bpl-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bpl-accent transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Last Name</label>
                  <input type="text" required className="w-full bg-bpl-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bpl-accent transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                  <input type="email" required className="w-full bg-bpl-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bpl-accent transition-colors" />
                </div>
              </div>
            </section>

            <section className="bg-bpl-surface p-6 rounded-2xl border border-white/5">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-bpl-accent" /> Payment Method
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Card Number</label>
                  <input type="text" required placeholder="0000 0000 0000 0000" className="w-full bg-bpl-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bpl-accent transition-colors font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Expiry Date</label>
                    <input type="text" required placeholder="MM/YY" className="w-full bg-bpl-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bpl-accent transition-colors font-mono" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">CVC</label>
                    <input type="text" required placeholder="123" className="w-full bg-bpl-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-bpl-accent transition-colors font-mono" />
                  </div>
                </div>
              </div>
            </section>

            <button type="submit" className="w-full py-4 bg-bpl-accent hover:bg-bpl-accent-hover text-white font-bold rounded-xl transition-colors shadow-lg shadow-bpl-accent/25 text-lg">
              Confirm Payment - {formatINR(total)}
            </button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <ShieldCheck className="w-4 h-4" /> Payments are secure and encrypted.
            </div>
          </form>
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-28 bg-bpl-surface border border-white/10 rounded-3xl p-6 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map(game => (
                <div key={game.id} className="flex justify-between items-start">
                  <div className="text-sm text-slate-300 pr-4">{game.title}</div>
                  <div className="text-sm font-bold text-white whitespace-nowrap">
                    {formatINR(calculateDiscountedPrice(game.price, game.discountPercent))}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-slate-400">
                <span>Subtotal</span>
                <span>{formatINR(total)}</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-white pt-4 border-t border-white/10 mt-4">
                <span>Total</span>
                <span className="text-bpl-accent">{formatINR(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SuccessView({ onBackToStore }: { key?: React.Key, onBackToStore: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto px-4 py-24 text-center">
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
      >
        <CheckCircle className="w-12 h-12 text-emerald-400" />
      </motion.div>
      <h1 className="text-4xl font-bold text-white mb-4">Payment Successful!</h1>
      <p className="text-slate-400 text-lg mb-8">
        Thank you for your purchase. Your games have been added to your library and a receipt has been sent to your email.
      </p>
      <div className="bg-bpl-surface border border-white/5 rounded-2xl p-6 mb-8 inline-block text-left">
        <div className="text-sm text-slate-500 mb-1">Order Number</div>
        <div className="text-lg font-mono text-white">BPL-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
      </div>
      <div>
        <button onClick={onBackToStore} className="px-8 py-4 bg-bpl-accent hover:bg-bpl-accent-hover text-white font-bold rounded-xl transition-colors shadow-lg shadow-bpl-accent/25">
          Return to Store
        </button>
      </div>
    </motion.div>
  );
}

