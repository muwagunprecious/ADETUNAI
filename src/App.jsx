import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { DashboardView } from './components/views/DashboardView';
import { GmailView } from './components/views/GmailView';
import { CalendarView } from './components/views/CalendarView';
import { TasksView } from './components/views/TasksView';
import { ChatView } from './components/views/ChatView';
import { InsightsView } from './components/views/InsightsView';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'gmail':
        return <GmailView />;
      case 'calendar':
        return <CalendarView />;
      case 'tasks':
        return <TasksView />;
      case 'chat':
        return <ChatView />;
      case 'insights':
        return <InsightsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <Topbar />

      <main className="pl-64 pt-20">
        <div className="min-h-[calc(100vh-80px)]">
          {renderView()}
        </div>
      </main>
    </div>
  );
}

export default App;
