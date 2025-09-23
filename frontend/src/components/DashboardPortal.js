import React from "react";
import { 
  BarChart3, 
  Shield, 
  Building2, 
  Users, 
  TrendingUp,
  ExternalLink,
  Sparkles,
  Zap,
  Globe
} from "lucide-react";

const dashboardData = [
  {
    name: "PO Dashboard",
    description: "Track purchase orders, supplier performance, and procurement analytics in real-time.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: BarChart3,
    gradient: "from-blue-400 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100"
  },
  {
    name: "QMS Dashboard",
    description: "Monitor quality management system metrics, compliance, and process improvements.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Shield,
    gradient: "from-indigo-400 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100"
  },
  {
    name: "Assets Dashboard",
    description: "Comprehensive asset management, maintenance schedules, and utilization tracking.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Building2,
    gradient: "from-cyan-400 to-cyan-600",
    bgGradient: "from-cyan-50 to-cyan-100"
  },
  {
    name: "Employee Attendance",
    description: "Employee attendance patterns, time tracking, and workforce analytics dashboard.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Users,
    gradient: "from-sky-400 to-sky-600",
    bgGradient: "from-sky-50 to-sky-100"
  },
  {
    name: "PR-Dashboard",
    description: "Public relations metrics, brand analytics, and communication performance insights.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: TrendingUp,
    gradient: "from-purple-400 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100"
  }
];

const DashboardPortal = () => {
  const handleDashboardClick = (url) => {
    console.log('Opening dashboard:', url);
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening dashboard:', error);
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white tracking-wide bg-gradient-to-r from-white to-blue-100 bg-clip-text">
                    DASHBOARD PORTAL
                  </h1>
                  <p className="text-blue-100 mt-2 text-lg font-medium">
                    Your Gateway to Business Intelligence Excellence
                  </p>
                </div>
              </div>
              <div className="text-white text-right bg-white bg-opacity-10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-sm text-blue-100 flex items-center justify-end mb-1">
                  <Globe className="w-4 h-4 mr-2" />
                  Powered by
                </div>
                <div className="font-bold text-lg">Power BI Analytics</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
          <svg viewBox="0 0 1440 120" className="w-full h-16">
            <path fill="rgb(248, 250, 252)" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Available Dashboards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock powerful insights with our comprehensive suite of analytics dashboards. 
            Each dashboard is crafted to deliver actionable business intelligence.
          </p>
        </div>

        {/* Dashboard Cards Container */}
        <div className="relative">
          <div className="absolute inset-0 bg-white bg-opacity-60 rounded-3xl backdrop-blur-sm shadow-2xl"></div>
          <div className="relative z-10 p-8">
            {/* Single Line Dashboard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {dashboardData.map((dashboard, index) => {
                const IconComponent = dashboard.icon;
                
                return (
                  <div key={index} className="group">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Button clicked for:', dashboard.name);
                        handleDashboardClick(dashboard.url);
                      }}
                      className="w-full h-full relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                               transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
                               border border-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-200"
                    >
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${dashboard.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      {/* Card Content */}
                      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                        {/* Icon Section */}
                        <div className="text-center mb-6">
                          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${dashboard.gradient} rounded-2xl shadow-lg mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                            {dashboard.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                            {dashboard.description}
                          </p>
                        </div>
                        
                        {/* CTA Button */}
                        <div className="mt-auto">
                          <div className={`w-full py-3 px-4 bg-gradient-to-r ${dashboard.gradient} text-white rounded-xl 
                                        shadow-lg group-hover:shadow-xl transition-all duration-300
                                        flex items-center justify-center space-x-2 font-medium`}>
                            <span>Open Dashboard</span>
                            <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform rotate-12 group-hover:animate-shine transition-opacity duration-1000"></div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart3,
              title: "Real-time Analytics",
              description: "Get instant insights with live data updates and dynamic visualizations",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level security protocols to protect your sensitive business data",
              color: "from-indigo-500 to-purple-500"
            },
            {
              icon: TrendingUp,
              title: "Performance Intelligence",
              description: "Advanced KPI tracking and predictive analytics for business growth",
              color: "from-purple-500 to-pink-500"
            }
          ].map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full mt-4`}></div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20">
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">Dashboard Portal</div>
              </div>
              <p className="text-blue-200 mb-4">
                Empowering businesses with intelligent analytics and data-driven insights
              </p>
              <div className="flex justify-center items-center space-x-2 text-blue-300">
                <span>Powered by</span>
                <div className="px-4 py-2 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                  <span className="font-semibold text-white">Power BI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPortal;