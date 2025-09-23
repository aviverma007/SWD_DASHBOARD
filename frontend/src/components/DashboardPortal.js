import React from "react";
import { 
  BarChart3, 
  Shield, 
  Building2, 
  Users, 
  TrendingUp,
  ExternalLink
} from "lucide-react";

const dashboardData = [
  {
    name: "PO Dashboard",
    description: "Track purchase orders, supplier performance, and procurement analytics in real-time.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: BarChart3,
    color: "blue"
  },
  {
    name: "QMS Dashboard",
    description: "Monitor quality management system metrics, compliance, and process improvements.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Shield,
    color: "blue"
  },
  {
    name: "Assets Dashboard",
    description: "Comprehensive asset management, maintenance schedules, and utilization tracking.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Building2,
    color: "blue"
  },
  {
    name: "Employee Attendance",
    description: "Employee attendance patterns, time tracking, and workforce analytics dashboard.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: Users,
    color: "blue"
  },
  {
    name: "PR-Dashboard",
    description: "Public relations metrics, brand analytics, and communication performance insights.",
    url: "https://app.powerbi.com/reportEmbed?reportId=one-page-design&autoAuth=true&ctid=one-page-design",
    icon: TrendingUp,
    color: "blue"
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-wide">
                DASHBOARD PORTAL
              </h1>
              <p className="text-blue-100 mt-2 text-lg">
                Access your comprehensive business intelligence dashboards
              </p>
            </div>
            <div className="text-white text-right">
              <div className="text-sm text-blue-100">Powered by</div>
              <div className="font-semibold">Power BI Analytics</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Dashboard Buttons Container */}
        <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Available Dashboards
            </h2>
            <p className="text-gray-600">
              Select any dashboard below to access detailed analytics and reports
            </p>
          </div>

          {/* Single Line Button Layout */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {dashboardData.map((dashboard, index) => {
              const IconComponent = dashboard.icon;
              
              return (
                <div key={index} className="flex-1 min-w-[200px] max-w-[280px]">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Button clicked for:', dashboard.name);
                      handleDashboardClick(dashboard.url);
                    }}
                    className="w-full h-full bg-white border-2 border-blue-200 rounded-lg p-6 
                             hover:border-blue-500 hover:shadow-lg transition-all duration-300 
                             focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500
                             group"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {dashboard.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {dashboard.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium mr-2">Open Dashboard</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Real-time Analytics</h3>
            <p className="text-sm text-gray-600">Get instant insights with live data updates</p>
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Secure Access</h3>
            <p className="text-sm text-gray-600">Enterprise-grade security for all your data</p>
          </div>
          
          <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Performance Tracking</h3>
            <p className="text-sm text-gray-600">Monitor KPIs and business metrics effectively</p>
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
              <span className="text-gray-400 text-sm">Powered by</span>
              <span className="text-white font-semibold">Power BI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPortal;