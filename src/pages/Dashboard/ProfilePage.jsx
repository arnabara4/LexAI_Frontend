import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import ProfileHeader from "./components/ProfileHeader";
import ProfileStats from "./components/ProfileStats";
import ProfileSettings from "./components/ProfileSettings";
import api from "../../utils/api";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await api.get("/user/profile");
        setStats(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeInUp">
      <ProfileHeader user={user} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileStats stats={stats} loading={loading} />
        <ProfileSettings onLogout={logout} />
      </div>
    </div>
  );
}
