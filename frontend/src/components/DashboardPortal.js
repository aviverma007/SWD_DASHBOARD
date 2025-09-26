import React from "react";
import { 
  BarChart3, 
  Shield, 
  Building2, 
  TrendingUp,
  ExternalLink
} from "lucide-react";

const dashboardData = [
  {
    name: "PO Dashboard",
    description: "Track purchase orders, supplier performance, and procurement analytics in real-time.",
    url: "https://app.powerbi.com/reportEmbed?reportId=8eff9893-39e5-44ff-8393-eed2716e5c86&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: BarChart3
  },
  {
    name: "QMS Dashboard", 
    description: "Monitor quality management system metrics, compliance, and process improvements.",
    url: "https://app.powerbi.com/reportEmbed?reportId=ff391e55-8a76-42c8-b62c-1c209a6c2663&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: Shield
  },
  {
    name: "Assets Dashboard",
    description: "Comprehensive asset management, maintenance schedules, and utilization tracking.",
    url: "https://app.powerbi.com/reportEmbed?reportId=95bc0742-cbfd-46a6-81da-e05ee4b628e8&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: Building2
  },
  {
    name: "PR Dashboard",
    description: "Public relations metrics, brand analytics, and communication performance insights.",
    url: "https://app.powerbi.com/reportEmbed?reportId=b9bb2eaa-6315-4235-a051-d41d2219a899&autoAuth=true&ctid=711f4066-07b7-45a1-9e32-978e86528cad",
    icon: TrendingUp
  }
];

const DashboardPortal = () => {
  const handleDashboardClick = (url) => {
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
          <img 
            src="https://customer-assets.emergentagent.com/job_one-page-design/artifacts/v6o163ip_swd.jpg" 
            alt="SMART WORLD - iLive. iWork. iPlay."
            style={{ height: '60px', objectFit: 'contain' }}
          />
          <div style={{ color: 'white', textAlign: 'right', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '0.5rem', padding: '0.5rem 1rem' }}>
            <div style={{ fontSize: '0.875rem', color: '#bfdbfe' }}>Powered by</div>
            <div style={{ fontWeight: '600' }}>Power BI Analytics</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '2rem', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {dashboardData.map((dashboard, index) => {
              const IconComponent = dashboard.icon;
              return (
                <button
                  key={index}
                  onClick={(e) => { e.preventDefault(); handleDashboardClick(dashboard.url); }}
                  style={{
                    flex: '1 1 200px',
                    minWidth: '200px',
                    maxWidth: '250px',
                    backgroundColor: 'white',
                    border: '2px solid #f3f4f6',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#93c5fd';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#f3f4f6';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ width: '3.5rem', height: '3.5rem', backgroundColor: '#3b82f6', borderRadius: '0.5rem', margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <IconComponent style={{ width: '1.75rem', height: '1.75rem', color: 'white' }} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>
                    {dashboard.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem', lineHeight: '1.5' }}>
                    {dashboard.description}
                  </p>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                    <span style={{ marginRight: '0.5rem' }}>Open Dashboard</span>
                    <ExternalLink style={{ width: '1rem', height: '1rem' }} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', color: 'white', marginTop: '4rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '2rem 1.5rem', textAlign: 'center' }}>
          <p style={{ color: '#d1d5db', margin: 0 }}>© 2025 Dashboard Portal. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginTop: '0.5rem' }}>
            <span style={{ color: '#9ca3af' }}>Powered by</span>
            <span style={{ color: 'white', fontWeight: '600', backgroundColor: '#2563eb', padding: '0.25rem 0.75rem', borderRadius: '0.25rem' }}>Power BI</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPortal;
