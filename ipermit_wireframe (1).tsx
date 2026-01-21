import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Plus, Upload, Calendar, DollarSign, CheckCircle2, Sparkles, Zap, Droplet, Wrench, Home, FileText, Users, Building, BarChart3, Phone, Mail, MapPin, AlertCircle, Search, Filter, Clock, TrendingUp, Activity, Eye, Edit, Trash2, Download, Settings, User, LogOut, Bell, Menu, X } from 'lucide-react';

export default function IPermitProComplete() {
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, jobs, analytics, users, company, createJob
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    repipe: true,
    repair: true,
    replace: true,
    fixtures: true,
    waterHeaters: true
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const steps = [
    { id: 1, name: 'Job Details', icon: FileText },
    { id: 2, name: 'Services', icon: Wrench },
    { id: 3, name: 'Equipment', icon: Zap },
    { id: 4, name: 'Review', icon: CheckCircle2 }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({...prev, [section]: !prev[section]}));
  };

  const markStepComplete = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const mockJobs = [
    { id: 1, number: 'PL-2024-001', homeowner: 'John Smith', address: '123 Main St, Los Angeles, CA', type: 'Plumbing', status: 'In Progress', value: '$15,000', date: '2024-01-15' },
    { id: 2, number: 'PL-2024-002', homeowner: 'Sarah Johnson', address: '456 Oak Ave, Beverly Hills, CA', type: 'Plumbing', status: 'Pending', value: '$22,500', date: '2024-01-18' },
    { id: 3, number: 'PL-2024-003', homeowner: 'Michael Brown', address: '789 Pine Rd, Santa Monica, CA', type: 'Plumbing', status: 'Completed', value: '$18,000', date: '2024-01-10' },
    { id: 4, number: 'PL-2024-004', homeowner: 'Emily Davis', address: '321 Elm St, Pasadena, CA', type: 'Plumbing', status: 'In Progress', value: '$12,000', date: '2024-01-20' },
    { id: 5, number: 'PL-2024-005', homeowner: 'Robert Wilson', address: '654 Maple Dr, Glendale, CA', type: 'Plumbing', status: 'Pending', value: '$28,000', date: '2024-01-22' }
  ];

  const mockUsers = [
    { id: 1, name: 'John Contractor', email: 'john@company.com', role: 'Admin', status: 'Active', avatar: 'JC' },
    { id: 2, name: 'Sarah Manager', email: 'sarah@company.com', role: 'Manager', status: 'Active', avatar: 'SM' },
    { id: 3, name: 'Mike Plumber', email: 'mike@company.com', role: 'Technician', status: 'Active', avatar: 'MP' },
    { id: 4, name: 'Lisa Admin', email: 'lisa@company.com', role: 'Admin', status: 'Active', avatar: 'LA' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-300';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  // Header Component
  const Header = () => (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">iPermit Pro</h1>
              <p className="text-xs text-gray-500">Smart Permit Management</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-2">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${currentView === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-white hover:text-blue-600'}`}
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </button>
            <button 
              onClick={() => setCurrentView('analytics')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${currentView === 'analytics' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-white hover:text-blue-600'}`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Analytics</span>
            </button>
            <button 
              onClick={() => setCurrentView('jobs')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${currentView === 'jobs' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-white hover:text-blue-600'}`}
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Jobs</span>
            </button>
            <button 
              onClick={() => setCurrentView('users')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${currentView === 'users' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-white hover:text-blue-600'}`}
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Users</span>
            </button>
            <button 
              onClick={() => setCurrentView('company')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${currentView === 'company' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-white hover:text-blue-600'}`}
            >
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium">Company</span>
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-all">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-xl transition-all">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                JD
              </div>
            </button>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <button 
              onClick={() => { setCurrentView('dashboard'); setMobileMenuOpen(false); }}
              className="flex items-center space-x-2 w-full px-4 py-2 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Dashboard</span>
            </button>
            <button 
              onClick={() => { setCurrentView('analytics'); setMobileMenuOpen(false); }}
              className="flex items-center space-x-2 w-full px-4 py-2 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Analytics</span>
            </button>
            <button 
              onClick={() => { setCurrentView('jobs'); setMobileMenuOpen(false); }}
              className="flex items-center space-x-2 w-full px-4 py-2 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Jobs</span>
            </button>
            <button 
              onClick={() => { setCurrentView('users'); setMobileMenuOpen(false); }}
              className="flex items-center space-x-2 w-full px-4 py-2 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Users</span>
            </button>
            <button 
              onClick={() => { setCurrentView('company'); setMobileMenuOpen(false); }}
              className="flex items-center space-x-2 w-full px-4 py-2 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              <Building className="w-4 h-4" />
              <span className="text-sm font-medium">Company</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );

  // Dashboard View
  const DashboardView = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-2">Welcome back, John! 👋</h2>
          <p className="text-blue-100 text-lg mb-6">Here's what's happening with your permits today</p>
          <button 
            onClick={() => { setCurrentView('createJob'); setCurrentStep(1); setCompletedSteps([]); }}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Create New Job</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12%
            </span>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">Total Jobs</p>
          <p className="text-3xl font-bold text-gray-900">248</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-yellow-600 text-sm font-semibold flex items-center">
              <Activity className="w-4 h-4 mr-1" />
              23
            </span>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">Pending</p>
          <p className="text-3xl font-bold text-gray-900">23</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +8%
            </span>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">Completed</p>
          <p className="text-3xl font-bold text-gray-900">195</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm font-semibold flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +15%
            </span>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">Revenue</p>
          <p className="text-3xl font-bold text-gray-900">$1.2M</p>
        </div>
      </div>

      {/* Recent Jobs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Recent Jobs</h3>
          <button 
            onClick={() => setCurrentView('jobs')}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Job #</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Homeowner</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Address</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Value</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockJobs.slice(0, 5).map(job => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{job.number}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{job.homeowner}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{job.address}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{job.value}</td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => { setSelectedJob(job); setCurrentView('jobDetail'); }}
                      className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-all"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <FileText className="w-10 h-10 mb-4" />
          <h4 className="text-xl font-bold mb-2">View Reports</h4>
          <p className="text-blue-100 text-sm">Generate and download job reports</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <Users className="w-10 h-10 mb-4" />
          <h4 className="text-xl font-bold mb-2">Manage Team</h4>
          <p className="text-purple-100 text-sm">Add or edit team members</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer">
          <Settings className="w-10 h-10 mb-4" />
          <h4 className="text-xl font-bold mb-2">Settings</h4>
          <p className="text-green-100 text-sm">Configure system preferences</p>
        </div>
      </div>
    </div>
  );

  // Analytics View
  const AnalyticsView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <BarChart3 className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Analytics Dashboard</h2>
            <p className="text-purple-100">Performance insights and trends</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Monthly Revenue</h4>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">$425,000</p>
          <p className="text-sm text-green-600 font-semibold">+18% from last month</p>
          <div className="mt-4 h-24 bg-gradient-to-t from-green-100 to-transparent rounded-lg"></div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Avg Job Value</h4>
            <DollarSign className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">$17,250</p>
          <p className="text-sm text-blue-600 font-semibold">+5% from last month</p>
          <div className="mt-4 h-24 bg-gradient-to-t from-blue-100 to-transparent rounded-lg"></div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Completion Rate</h4>
            <CheckCircle2 className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">94.5%</p>
          <p className="text-sm text-purple-600 font-semibold">+2.5% from last month</p>
          <div className="mt-4 h-24 bg-gradient-to-t from-purple-100 to-transparent rounded-lg"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Jobs by Status</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Completed</span>
                <span className="text-sm font-bold text-gray-900">195 (78%)</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{width: '78%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">In Progress</span>
                <span className="text-sm font-bold text-gray-900">30 (12%)</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{width: '12%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Pending</span>
                <span className="text-sm font-bold text-gray-900">23 (10%)</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500" style={{width: '10%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Services</h3>
          <div className="space-y-4">
            {[
              { name: 'Water Heater Installation', jobs: 45, revenue: '$185K' },
              { name: 'Repipe Services', jobs: 38, revenue: '$156K' },
              { name: 'Sewer Line Replacement', jobs: 32, revenue: '$142K' },
              { name: 'Drain Repair', jobs: 28, revenue: '$98K' }
            ].map((service, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                <div>
                  <p className="font-bold text-gray-900">{service.name}</p>
                  <p className="text-sm text-gray-600">{service.jobs} jobs completed</p>
                </div>
                <p className="text-lg font-bold text-blue-600">{service.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Jobs List View
  const JobsView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <FileText className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">All Jobs</h2>
              <p className="text-blue-100">Manage and track all permit jobs</p>
            </div>
          </div>
          <button 
            onClick={() => { setCurrentView('createJob'); setCurrentStep(1); setCompletedSteps([]); }}
            className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>New Job</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            />
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span className="font-semibold">Filter</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span className="font-semibold">Export</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Job #</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Homeowner</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Address</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Type</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Value</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Date</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockJobs.map(job => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{job.number}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{job.homeowner}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{job.address}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{job.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{job.value}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{job.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => { setSelectedJob(job); setCurrentView('jobDetail'); }}
                        className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-700 p-2 hover:bg-green-50 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Job Detail View
  const JobDetailView = () => {
    if (!selectedJob) return null;
    
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-4">
          <button 
            onClick={() => setCurrentView('jobs')}
            className="p-2 hover:bg-gray-100 rounded-xl transition-all"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Job Details</h2>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-indigo-200 text-sm mb-1">Job Number</p>
              <h2 className="text-4xl font-bold">{selectedJob.number}</h2>
            </div>
            <span className={`px-4 py-2 rounded-xl font-bold ${getStatusColor(selectedJob.status)} bg-white`}>
              {selectedJob.status}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-indigo-200 text-sm mb-1">Homeowner</p>
              <p className="font-bold">{selectedJob.homeowner}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-indigo-200 text-sm mb-1">Value</p>
              <p className="font-bold">{selectedJob.value}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-indigo-200 text-sm mb-1">Type</p>
              <p className="font-bold">{selectedJob.type}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-indigo-200 text-sm mb-1">Date</p>
              <p className="font-bold">{selectedJob.date}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Homeowner</p>
                  <p className="font-semibold text-gray-900">{selectedJob.homeowner}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-semibold text-gray-900">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900">homeowner@email.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-semibold text-gray-900">{selectedJob.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Services</h3>
            <div className="space-y-3">
              {['Repipe Fresh Water', 'Repair Drain Line', 'Replace Water Heater'].map((service, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-900">{service}</span>
                  </div>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline</h3>
          <div className="space-y-4">
            {[
              { date: '2024-01-15', event: 'Job Created', user: 'John Contractor' },
              { date: '2024-01-16', event: 'Permit Submitted', user: 'System' },
              { date: '2024-01-18', event: 'Inspection Scheduled', user: 'Sarah Manager' },
              { date: '2024-01-20', event: 'Work Completed', user: 'Mike Plumber' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{item.event}</p>
                  <p className="text-sm text-gray-600">{item.user} • {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Users View
  const UsersView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Team Management</h2>
              <p className="text-purple-100">Manage your team members and permissions</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockUsers.map(user => (
          <div key={user.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                {user.avatar}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">{user.name}</h4>
                <p className="text-sm text-gray-600">{user.role}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                  {user.status}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-blue-50 rounded-lg transition-all">
                    <Edit className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-red-50 rounded-lg transition-all">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Company View
  const CompanyView = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Building className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Company Settings</h2>
            <p className="text-green-100">Manage your company profile and preferences</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Company Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
              <input type="text" value="ProPlumbing Inc." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">License Number</label>
              <input type="text" value="PL-12345-CA" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
              <input type="tel" value="(555) 987-6543" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input type="email" value="info@proplumbing.com" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Business Address</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Street Address</label>
              <input type="text" value="123 Business Ave" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">City</label>
                <input type="text" value="Los Angeles" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-500" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">State</label>
                <input type="text" value="CA" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">ZIP Code</label>
              <input type="text" value="90001" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Notifications</h3>
        <div className="space-y-4">
          {[
            { label: 'Email notifications for new jobs', checked: true },
            { label: 'SMS alerts for urgent updates', checked: true },
            { label: 'Weekly performance reports', checked: false },
            { label: 'Monthly billing summaries', checked: true }
          ].map((setting, i) => (
            <label key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-all">
              <span className="font-semibold text-gray-900">{setting.label}</span>
              <input type="checkbox" className="w-5 h-5 text-green-600 rounded" defaultChecked={setting.checked} />
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg">
          Save Changes
        </button>
      </div>
    </div>
  );

  // Create Job Flow (Steps 1-4) - Same as before but simplified for space
  const CreateJobFlow = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-2">Create New Permit Job</h2>
            <p className="text-blue-100">Step 1: Job Details</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Job Information</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Job Value *</label>
                <input type="text" placeholder="$0.00" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Customer Job Number</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Start Date</label>
                <input type="text" placeholder="MM/DD/YYYY" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none" />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button 
              onClick={() => { markStepComplete(1); setCurrentStep(2); }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Continue</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-2">Select Services</h2>
            <p className="text-orange-100">Step 2: Choose plumbing services</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Repipe Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center p-4 bg-blue-50 rounded-xl border-2 border-blue-200 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="ml-3 font-semibold">Repipe Fresh Water</span>
              </label>
              <label className="flex items-center p-4 bg-blue-50 rounded-xl border-2 border-blue-200 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                <span className="ml-3 font-semibold">Repipe Drains</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between">
            <button 
              onClick={() => setCurrentStep(1)}
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center space-x-2"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              <span>Back</span>
            </button>
            <button 
              onClick={() => { markStepComplete(2); setCurrentStep(3); }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Continue</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-2">Equipment & Fixtures</h2>
            <p className="text-purple-100">Step 3: Add equipment details</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fixtures</h3>
            <div className="grid grid-cols-3 gap-4">
              {['Lavatories', 'Toilet', 'Shower', 'Water Heater', 'Kitchen Sink', 'Other'].map(fixture => (
                <div key={fixture} className="bg-purple-50 p-4 rounded-xl">
                  <label className="block text-sm font-bold text-gray-700 mb-2">{fixture}</label>
                  <input type="number" placeholder="0" className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg outline-none" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button 
              onClick={() => setCurrentStep(2)}
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center space-x-2"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              <span>Back</span>
            </button>
            <button 
              onClick={() => { markStepComplete(3); setCurrentStep(4); }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg flex items-center space-x-2"
            >
              <span>Review</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      );
    }

    // Step 4 - Review
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-center space-x-4">
            <CheckCircle2 className="w-16 h-16" />
            <div>
              <h2 className="text-3xl font-bold">Review & Submit</h2>
              <p className="text-green-100">Step 4: Final review</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Summary</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <p className="text-sm font-bold text-gray-600 mb-1">Job Type</p>
              <p className="text-xl font-bold text-gray-900">Plumbing - Single Family</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <p className="text-sm font-bold text-gray-600 mb-1">Services</p>
              <p className="text-xl font-bold text-gray-900">Repipe, Fixtures</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button 
            onClick={() => setCurrentStep(3)}
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center space-x-2"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span>Back</span>
          </button>
          <button 
            onClick={() => { markStepComplete(4); setCurrentView('dashboard'); setCurrentStep(1); setCompletedSteps([]); }}
            className="px-12 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3"
          >
            <Sparkles className="w-6 h-6" />
            <span>Submit Job</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Progress Steps for Create Job */}
        {currentView === 'createJob' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex items-center space-x-3 flex-1">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      completedSteps.includes(step.id) 
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg' 
                        : currentStep === step.id
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg'
                        : 'bg-gray-100'
                    }`}>
                      {completedSteps.includes(step.id) ? (
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      ) : (
                        <step.icon className={`w-6 h-6 ${currentStep === step.id ? 'text-white' : 'text-gray-400'}`} />
                      )}
                    </div>
                    <div className="hidden md:block">
                      <p className={`font-semibold ${currentStep === step.id ? 'text-blue-600' : completedSteps.includes(step.id) ? 'text-green-600' : 'text-gray-400'}`}>
                        {step.name}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 flex-1 mx-4 rounded-full transition-all ${
                      completedSteps.includes(step.id) ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Render Current View */}
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'analytics' && <AnalyticsView />}
        {currentView === 'jobs' && <JobsView />}
        {currentView === 'jobDetail' && <JobDetailView />}
        {currentView === 'users' && <UsersView />}
        {currentView === 'company' && <CompanyView />}
        {currentView === 'createJob' && <CreateJobFlow />}
      </div>
    </div>
  );
}