// PURPOSE: A placeholder page for authenticated users.
// ===================================================================================
import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome, {user?.username}!</CardTitle>
          <CardDescription>You have successfully logged in.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm">
            <p className="font-semibold text-gray-700 dark:text-gray-300">User ID:</p>
            <p className="text-gray-500 dark:text-gray-400">{user?.id}</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-700 dark:text-gray-300">Email:</p>
            <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold text-gray-700 dark:text-gray-300">Roles:</p>
            <p className="text-gray-500 dark:text-gray-400">{user?.roles?.join(', ')}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={logout} variant="destructive" className="w-full">
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardPage;
