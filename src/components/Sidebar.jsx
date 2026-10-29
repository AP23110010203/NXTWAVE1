import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, GitBranch, Calendar, BarChart3,
  Bot, BookOpen, FlaskConical, FileText, ChevronLeft, ChevronRight,
  Zap, Menu, X
} from 'lucide-react';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/register', icon: Users, label: 'Registration' },
  { path: '/referral', icon: GitBranch, label: 'Referral Engine' },
  { path: '/campaign', icon: Calendar, label: 'Campaign Planner' },
  { path: '/channels', icon: BarChart3, label: 'Channel Strategy' },
  { path: '/copilot', icon: Bot, label: 'AI Copilot' },
  { path: '/thinking', icon: BookOpen, label: 'My Growth Thinking' },
  { path: '/simulation', icon: FlaskConical, label: 'Simulation Controls' },
  { path: '/submission', icon: FileText, label: 'Submission Kit' },
];

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="btn-secondary"
        style={{ position: 'fixed', top: 16, left: 16, zIndex: 200, display: 'none', padding: '8px' }}
        id="mobile-menu-btn"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 150 }}
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside style={{
        width: collapsed ? '64px' : '240px',
        minHeight: '100vh',
        background: '#0d0d0d',
        borderRight: '1px solid #1e1e1e',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.2s ease',
        flexShrink: 0,
        position: 'relative',
        zIndex: 100,
      }}>
        {/* Logo */}
        <div style={{ padding: collapsed ? '20px 12px' : '20px 16px', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, flexShrink: 0,
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Zap size={18} color="#0a0a0a" />
          </div>
          {!collapsed && (
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#e8e8e8', lineHeight: 1.2 }}>NxtWave</div>
              <div style={{ fontSize: 11, color: '#707070', fontWeight: 500 }}>GrowthOS</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navItems.map(({ path, icon: Icon, label }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`sidebar-item${active ? ' active' : ''}`}
                title={collapsed ? label : undefined}
              >
                <Icon size={18} style={{ flexShrink: 0 }} />
                {!collapsed && <span>{label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div style={{ padding: '12px 16px', borderTop: '1px solid #1e1e1e' }}>
            <div style={{ fontSize: 11, color: '#505050', lineHeight: 1.5 }}>
              ⚠️ Demo prototype for<br />NxtWave Growth Intern Challenge.<br />Not an official NxtWave product.
            </div>
          </div>
        )}

        {/* Collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)',
            width: 24, height: 24, borderRadius: '50%',
            background: '#1e1e1e', border: '1px solid #303030',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#707070', zIndex: 10,
          }}
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>
    </>
  );
}
