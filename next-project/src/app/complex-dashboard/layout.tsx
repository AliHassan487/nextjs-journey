import React from "react";

export default function DashboardLayout({
  children,
  users,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <div>
       <div>{children}</div>
      <div>
        <h2>Users</h2>
        {users}
        <h2>Notifications</h2>
        {notifications}
        <h2>Revenue</h2>
        {revenue}
      </div>
    </div>
  );
}
