import React from "react";
import { 
  BarChart3, 
  Shield, 
  Building2, 
  Users, 
  TrendingUp,
  ExternalLink,
  Activity
} from "lucide-react";

const dashboardData = [
  {
    name: "PO Dashboard",
    description: "Track purchase orders, supplier performance, and procurement analytics in real-time.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: BarChart3
  },
  {
    name: "QMS Dashboard",
    description: "Monitor quality management system metrics, compliance, and process improvements.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Shield
  },
  {
    name: "Assets Dashboard",
    description: "Comprehensive asset management, maintenance schedules, and utilization tracking.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Building2
  },
  {
    name: "Employee Attendance",
    description: "Employee attendance patterns, time tracking, and workforce analytics dashboard.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Users
  },
  {
    name: "PR-Dashboard",
    description: "Public relations metrics, brand analytics, and communication performance insights.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: TrendingUp
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  DASHBOARD PORTAL
                </h1>
                <p className="text-blue-100 mt-1">
                  Your Business Intelligence Hub
                </p>
              </div>
            </div>
            <div className="text-white text-right bg-white bg-opacity-10 rounded-lg px-4 py-2">
              <div className="text-sm text-blue-100">Powered by</div>
              <div className="font-semibold">Power BI Analytics</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Available Dashboards
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access comprehensive analytics and insights through our professional dashboard suite
          </p>
        </div>

        {/* Dashboard Cards - Single Line */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                    className="w-full h-full bg-white border-2 border-gray-100 rounded-xl p-6 
                             hover:border-blue-300 hover:shadow-lg transition-all duration-300
                             focus:outline-none focus:ring-4 focus:ring-blue-100 group"
                  >
                    {/* Icon */}
                    <div className="text-center mb-4">
                      <div className="w-14 h-14 bg-blue-500 rounded-lg mx-auto flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {dashboard.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {dashboard.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="inline-flex items-center justify-center w-full py-2 px-4 bg-blue-500 text-white rounded-lg 
                                    hover:bg-blue-600 transition-colors group-hover:shadow-md">
                        <span className="text-sm font-medium mr-2">Open Dashboard</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-time Analytics</h3>
            <p className="text-gray-600 text-sm">Get instant insights with live data updates</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Access</h3>
            <p className="text-gray-600 text-sm">Enterprise-grade security for all your data</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Tracking</h3>
            <p className="text-gray-600 text-sm">Monitor KPIs and business metrics effectively</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">
                © 2024 Dashboard Portal. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Powered by</span>
              <span className="text-white font-semibold bg-blue-600 px-3 py-1 rounded">Power BI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPortal;