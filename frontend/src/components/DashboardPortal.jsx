import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { 
  BarChart3, 
  Shield, 
  Building2, 
  Users, 
  TrendingUp,
  ExternalLink,
  Layers3
} from "lucide-react";
import { dashboardData } from "../data/mock";

const DashboardPortal = () => {
  const iconMap = {
    "PO Dashboard": BarChart3,
    "QMS Dashboard": Shield,
    "Assets Dashboard": Building2,
    "Employee Attendance": Users,
    "PR-Dashboard": TrendingUp
  };

  const colorMap = {
    "PO Dashboard": "from-slate-800 to-slate-900",
    "QMS Dashboard": "from-emerald-800 to-emerald-900",
    "Assets Dashboard": "from-amber-800 to-amber-900",
    "Employee Attendance": "from-blue-800 to-blue-900",
    "PR-Dashboard": "from-violet-800 to-violet-900"
  };

  const handleDashboardClick = (url) => {
    console.log('Opening dashboard:', url);
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening dashboard:', error);
      // Fallback: try direct navigation
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_data-dashboard-3d-1/artifacts/pveqax6v_swd.png')`
        }}
      ></div>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      
      {/* Header Section */}
      <div className="relative px-6 py-8">        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            DASHBOARD PORTAL
          </h1>
          
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Access your comprehensive business intelligence dashboards with a single click.
          </p>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="relative px-6 pb-24 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {dashboardData.map((dashboard, index) => {
              const IconComponent = iconMap[dashboard.name];
              const gradientColor = colorMap[dashboard.name];
              
              return (
                <Card 
                  key={index}
                  className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 min-h-[380px] flex flex-col"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  {/* 3D effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30 pointer-events-none"></div>
                  
                  <CardContent className="relative p-6 flex flex-col h-full justify-between">
                    <div className="flex flex-col items-center text-center flex-grow">
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                          <div className="relative p-3 rounded-full bg-gradient-to-br from-gray-700/80 to-gray-800/80 backdrop-blur-sm border border-gray-600/50 group-hover:border-gray-500/50 transition-all duration-300">
                            <IconComponent className="h-8 w-8 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white text-center mb-3 group-hover:text-blue-100 transition-colors duration-300">
                        {dashboard.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-center mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm flex-grow">
                        {dashboard.description}
                      </p>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Button clicked for:', dashboard.name);
                          handleDashboardClick(dashboard.url);
                        }}
                        className="relative group/btn bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 px-6 py-3 text-base font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer"
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                        }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Open Dashboard
                          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                        
                        {/* Button glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 blur-sm"></div>
                      </button>
                    </div>
                  </CardContent>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              Powered by Power BI • Business Intelligence Dashboard Portal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPortal;