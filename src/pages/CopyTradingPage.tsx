import { useState } from 'react';
import { ArrowLeft, Users, TrendingUp, BarChart3, Zap, Shield, Clock, Target, ChevronDown, ChevronUp, Settings, DollarSign, Award, LineChart, UserCheck, Copy, Wallet, Sliders, StopCircle, PiggyBank } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../sections/Footer';

const investorBenefits = [
  { text: 'No trading experience needed', icon: UserCheck },
  { text: 'Passive earning opportunity', icon: DollarSign },
  { text: 'Access to professional strategies', icon: Award },
  { text: 'Real-time trade execution', icon: Zap },
  { text: 'Full control anytime', icon: Settings },
];

const providerBenefits = [
  { text: 'Earn performance commission', icon: DollarSign },
  { text: 'Build trading reputation', icon: Award },
  { text: 'Get followers globally', icon: Users },
  { text: 'Scale your strategy', icon: TrendingUp },
  { text: 'Earn from your skills', icon: Target },
];

const performanceMetrics = [
  { label: 'Win Rate', icon: Target, color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { label: 'Profit Percentage', icon: TrendingUp, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { label: 'Drawdown', icon: BarChart3, color: 'text-amber-400', bg: 'bg-amber-500/20' },
  { label: 'Trade History', icon: LineChart, color: 'text-purple-400', bg: 'bg-purple-500/20' },
  { label: 'Risk Score', icon: Shield, color: 'text-red-400', bg: 'bg-red-500/20' },
];

const riskFeatures = [
  { text: 'Adjustable copy lot size', icon: Sliders },
  { text: 'Max loss protection', icon: Shield },
  { text: 'Stop copy anytime', icon: StopCircle },
  { text: 'Balance protection', icon: PiggyBank },
  { text: 'Capital allocation control', icon: Wallet },
];

const steps = [
  { step: '01', title: 'Register Account', description: 'Create your trading account in minutes.', icon: UserCheck },
  { step: '02', title: 'Select Trader', description: 'Browse and choose from top-performing traders.', icon: Users },
  { step: '03', title: 'Activate Copy', description: 'Start copying trades automatically.', icon: Copy },
];

const howItWorks = [
  { text: 'Choose a trader from leaderboard', icon: Users },
  { text: 'Connect your account', icon: Wallet },
  { text: 'Set risk level', icon: Sliders },
  { text: 'Trades copy automatically', icon: Copy },
];

const userTypes = [
  { text: 'Beginners', icon: UserCheck },
  { text: 'Passive investors', icon: PiggyBank },
  { text: 'Busy professionals', icon: Clock },
  { text: 'Non-technical traders', icon: Target },
];

const faqs = [
  { question: 'Can I stop copying anytime?', answer: 'Yes, you can stop instantly. You have full control over your copy trading settings at all times.' },
  { question: 'Is my money safe?', answer: 'Your funds stay in your account at all times. We never have direct access to your trading capital.' },
  { question: 'Do I need trading knowledge?', answer: 'No, the system trades automatically. You simply choose which traders to follow based on their performance.' },
  { question: 'Can I choose risk level?', answer: 'Yes, you control risk settings. You can adjust lot sizes, set maximum loss limits, and more.' },
];

export default function CopyTradingPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0">
          <img 
            src="/copy_trading.png" 
            alt="Copy Trading Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bluestone-deep/60" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              COPY TRADING
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Copy Top Traders<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Automatically</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Connect your account, follow expert traders, and let their strategies trade for you in real time.
            </p>
          </div>
        </div>
      </section>

      {/* What is Copy Trading */}
      <section className="py-20 bg-bluestone-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                What Is <span className="text-cyan-400">Copy Trading?</span>
              </h2>
              <p className="text-white/70 text-lg mb-6">
                Copy trading allows investors to automatically replicate trades executed by professional traders.
              </p>
              <p className="text-white/70 mb-8">
                When a strategy provider opens or closes a trade, the same action is instantly mirrored in your account based on your selected risk level.
              </p>
              <p className="text-white/60 mb-4">This system is designed for:</p>
              <div className="grid grid-cols-2 gap-3">
                {userTypes.map((type) => (
                  <div key={type.text} className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                    <type.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-white/80 text-sm">{type.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Pro Trader</p>
                      <p className="text-white/50 text-sm">Strategy Provider</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">+127.5%</p>
                    <p className="text-white/50 text-xs">This Year</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-cyan-400 font-bold">89%</p>
                    <p className="text-white/50 text-xs">Win Rate</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-blue-400 font-bold">1,247</p>
                    <p className="text-white/50 text-xs">Copiers</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-emerald-400 font-bold">Low</p>
                    <p className="text-white/50 text-xs">Risk</p>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                  <Copy className="w-5 h-5" /> Copy This Trader
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-bluestone-deep">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple. Automated. <span className="text-cyan-400">Powerful.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div
                key={item.text}
                className="relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  {idx + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <p className="text-white font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 mt-8">No manual execution required.</p>
        </div>
      </section>

      {/* Benefits for Investors */}
      <section className="py-20 bg-bluestone-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Benefits for <span className="text-cyan-400">Investors</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {investorBenefits.map((benefit) => (
              <div
                key={benefit.text}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/30 transition-colors">
                  <benefit.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <p className="text-white/90 text-sm font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Strategy Providers */}
      <section className="py-20 bg-bluestone-deep">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Become a <span className="text-blue-400">Strategy Provider</span>
              </h2>
              <p className="text-white/70 mb-8">
                Share your trading expertise and earn commissions when others copy your successful strategies.
              </p>
              <div className="space-y-4">
                {providerBenefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-white/90">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20">
              <div className="text-center">
                <Award className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Become a Top Trader</h3>
                <p className="text-white/60 mb-6">Join our strategy provider program and monetize your skills</p>
                <button className="btn-primary px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 font-semibold">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Transparency */}
      <section className="py-20 bg-bluestone-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Full Transparency & <span className="text-cyan-400">Real Data</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Each trader profile shows complete performance metrics so you can make informed decisions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {performanceMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${metric.bg} flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-7 h-7 ${metric.color}`} />
                </div>
                <p className="text-white font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 mt-8">No hidden performance metrics.</p>
        </div>
      </section>

      {/* Risk Control Features */}
      <section className="py-20 bg-bluestone-deep">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10">
                <div className="space-y-4">
                  {riskFeatures.map((feature, idx) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-white/90">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Risk Control <span className="text-emerald-400">Features</span>
              </h2>
              <p className="text-white/70 mb-6">
                We provide comprehensive risk management tools to ensure you always stay in control of your investments.
              </p>
              <p className="text-emerald-400 font-semibold flex items-center gap-2">
                <Shield className="w-5 h-5" /> You always remain in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start in 3 Steps */}
      <section className="py-20 bg-bluestone-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Start in <span className="text-cyan-400">3 Steps</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                )}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <span className="text-cyan-400 text-4xl font-bold opacity-30">{step.step}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 mt-8">That's it. Trading begins instantly.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-bluestone-deep">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-cyan-400">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/50 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-white/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/20 via-bluestone-deep to-blue-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Copy Trading <span className="text-cyan-400">Today</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of traders growing their accounts by following proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-10 py-4 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300">
              Copy Now
            </button>
            <button className="px-10 py-4 text-lg border border-white/20 rounded-xl text-white hover:bg-white/10 transition-all duration-300">
              View Top Traders
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
