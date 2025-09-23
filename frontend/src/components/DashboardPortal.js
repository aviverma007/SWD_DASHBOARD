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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)' }}>
      {/* Header */}
      <header style={{ 
        background: 'linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)', 
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="https://customer-assets.emergentagent.com/job_one-page-design/artifacts/v6o163ip_swd.jpg" 
                alt="SMART WORLD - iLive. iWork. iPlay."
                style={{ 
                  height: '60px', 
                  width: 'auto', 
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
          <div style={{ 
            color: 'white', 
            textAlign: 'right', 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            borderRadius: '0.5rem', 
            padding: '0.5rem 1rem' 
          }}>
            <div style={{ fontSize: '0.875rem', color: '#bfdbfe' }}>Powered by</div>
            <div style={{ fontWeight: '600' }}>Power BI Analytics</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Dashboard Cards - Horizontal Layout */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '1rem', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
          padding: '2rem', 
          marginBottom: '3rem' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '1.5rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center'
          }}>
            {dashboardData.map((dashboard, index) => {
              const IconComponent = dashboard.icon;
              
              return (
                <div key={index} style={{ flex: '1 1 200px', minWidth: '200px', maxWidth: '250px' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Button clicked for:', dashboard.name);
                      handleDashboardClick(dashboard.url);
                    }}
                    style={{
                      width: '100%',
                      height: 'auto',
                      backgroundColor: 'white',
                      border: '2px solid #f3f4f6',
                      borderRadius: '0.75rem',
                      padding: '1.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#93c5fd';
                      e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#f3f4f6';
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Icon */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ 
                        width: '3.5rem', 
                        height: '3.5rem', 
                        backgroundColor: '#3b82f6', 
                        borderRadius: '0.5rem', 
                        margin: '0 auto', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        marginBottom: '0.75rem' 
                      }}>
                        <IconComponent style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: '600', 
                        color: '#1f2937', 
                        marginBottom: '0.75rem' 
                      }}>
                        {dashboard.name}
                      </h3>
                      <p style={{ 
                        fontSize: '0.875rem', 
                        color: '#6b7280', 
                        marginBottom: '1rem', 
                        lineHeight: '1.5' 
                      }}>
                        {dashboard.description}
                      </p>
                      
                      {/* CTA */}
                      <div style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        width: '100%', 
                        padding: '0.5rem 1rem', 
                        backgroundColor: '#3b82f6', 
                        color: 'white', 
                        borderRadius: '0.5rem', 
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>
                        <span style={{ marginRight: '0.5rem' }}>Open Dashboard</span>
                        <ExternalLink style={{ width: '1rem', height: '1rem' }} />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ 
            flex: '1 1 300px', 
            textAlign: 'center', 
            padding: '1.5rem', 
            backgroundColor: 'white', 
            borderRadius: '0.75rem', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
          }}>
            <div style={{ 
              width: '3rem', 
              height: '3rem', 
              backgroundColor: '#dbeafe', 
              borderRadius: '0.5rem', 
              margin: '0 auto 1rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <BarChart3 style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Real-time Analytics</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Get instant insights with live data updates</p>
          </div>
          
          <div style={{ 
            flex: '1 1 300px', 
            textAlign: 'center', 
            padding: '1.5rem', 
            backgroundColor: 'white', 
            borderRadius: '0.75rem', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
          }}>
            <div style={{ 
              width: '3rem', 
              height: '3rem', 
              backgroundColor: '#dbeafe', 
              borderRadius: '0.5rem', 
              margin: '0 auto 1rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Shield style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Secure Access</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Enterprise-grade security for all your data</p>
          </div>
          
          <div style={{ 
            flex: '1 1 300px', 
            textAlign: 'center', 
            padding: '1.5rem', 
            backgroundColor: 'white', 
            borderRadius: '0.75rem', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
          }}>
            <div style={{ 
              width: '3rem', 
              height: '3rem', 
              backgroundColor: '#dbeafe', 
              borderRadius: '0.5rem', 
              margin: '0 auto 1rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <TrendingUp style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} />
            </div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>Performance Tracking</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Monitor KPIs and business metrics effectively</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', color: 'white', marginTop: '4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div>
              <p style={{ color: '#d1d5db', margin: 0 }}>
                © 2024 Dashboard Portal. All rights reserved.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: '#9ca3af' }}>Powered by</span>
              <span style={{ 
                color: 'white', 
                fontWeight: '600', 
                backgroundColor: '#2563eb', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '0.25rem' 
              }}>Power BI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPortal;