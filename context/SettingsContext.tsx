"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Settings {
    companyAddress: string;
    companyPhone: string;
    companyEmail: string;
    facebookUrl: string;
    instagramUrl: string;
    twitterUrl: string;
    tiktokUrl: string;
    iosAppUrl: string;
    androidAppUrl: string;
    deliveryFee: number;
    minOrderAmount: number;
    currency: string;
    maintenanceMode: boolean;
}

interface SettingsContextType {
    settings: Settings;
    isLoading: boolean;
}

const defaultSettings: Settings = {
    companyAddress: "",
    companyPhone: "",
    companyEmail: "",
    facebookUrl: "#",
    instagramUrl: "#",
    twitterUrl: "#",
    tiktokUrl: "#",
    iosAppUrl: "#",
    androidAppUrl: "#",
    deliveryFee: 0,
    minOrderAmount: 0,
    currency: "MAD",
    maintenanceMode: false
};

const SettingsContext = createContext<SettingsContextType>({
    settings: defaultSettings,
    isLoading: true
});

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [settings, setSettings] = useState<Settings>(defaultSettings);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch('/api/settings');
                if (res.ok) {
                    const data = await res.json();
                    setSettings(prev => ({ ...prev, ...data }));
                }
            } catch (error) {
                console.error("Failed to fetch settings:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSettings();
    }, []);

    return (
        <SettingsContext.Provider value={{ settings, isLoading }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);
