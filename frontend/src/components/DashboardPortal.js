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
    url: "https://app.powerbi.com/reportEmbed?reportId=8eff9893-39e5-44ff-8393-eed2716e5c86&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: BarChart3,
    gradient: "from-slate-800 to-slate-900"
  },
  {
    name: "QMS Dashboard",
    description: "Monitor quality management system metrics, compliance, and process improvements.",
    url: "https://app.powerbi.com/reportEmbed?reportId=ff391e55-8a76-42c8-b62c-1c209a6c2663&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: Shield,
    gradient: "from-emerald-800 to-emerald-900"
  },
  {
    name: "Assets Dashboard",
    description: "Comprehensive asset management, maintenance schedules, and utilization tracking.",
    url: "https://app.powerbi.com/reportEmbed?reportId=95bc0742-cbfd-46a6-81da-e05ee4b628e8&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: Building2,
    gradient: "from-amber-800 to-amber-900"
  },
  {
    name: "Employee Attendance",
    description: "Employee attendance patterns, time tracking, and workforce analytics dashboard.",
    url: "https://app.powerbi.com/reportEmbed?reportId=4be8796e-c0a4-4712-879c-9cd9a183e365&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: Users,
    gradient: "from-blue-800 to-blue-900"
  },
  {
    name: "PR-Dashboard",
    description: "Public relations metrics, brand analytics, and communication performance insights.",
    url: "https://app.powerbi.com/reportEmbed?reportId=b9bb2eaa-6315-4235-a051-d41d2219a899&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: TrendingUp,
    gradient: "from-violet-800 to-violet-900"
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
    <div className="dashboard-portal">
      {/* Background Image */}
      <div 
        className="background-image"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_data-dashboard-3d-1/artifacts/pveqax6v_swd.png')`
        }}
      ></div>
      
      {/* Overlay */}
      <div className="overlay"></div>
      
      {/* Header */}
      <div className="header">        
        <div className="container">
          <h1 className="heading">DASHBOARD PORTAL</h1>
          <p className="subheading">
            Access your comprehensive business intelligence dashboards with a single click.
          </p>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        <div className="container">
          <div className="grid">
            {dashboardData.map((dashboard, index) => {
              const IconComponent = dashboard.icon;
              
              return (
                <div 
                  key={index}
                  className="dashboard-card"
                >
                  {/* Animated background gradient */}
                  <div className={`card-gradient bg-gradient-${dashboard.gradient}`}></div>
                  
                  {/* 3D effect overlay */}
                  <div className="card-overlay"></div>
                  
                  <div className="card-content">
                    <div className="card-body">
                      {/* Icon */}
                      <div className="icon-container">
                        <div className="icon-wrapper">
                          <div className="icon-glow"></div>
                          <div className="icon-bg">
                            <IconComponent className="icon" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="card-title">
                        {dashboard.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="card-description">
                        {dashboard.description}
                      </p>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="button-container">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Button clicked for:', dashboard.name);
                          handleDashboardClick(dashboard.url);
                        }}
                        className="dashboard-button"
                      >
                        <span className="button-content">
                          Open Dashboard
                          <ExternalLink className="button-icon" />
                        </span>
                        
                        {/* Button glow effect */}
                        <div className="button-glow"></div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="shine-effect">
                    <div className="shine"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              Powered by Power BI • Business Intelligence Dashboard Portal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPortal;