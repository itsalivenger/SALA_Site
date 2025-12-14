"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import StatusPopup, { PopupType } from "@/components/StatusPopup/StatusPopup";

interface PopupOptions {
    type: PopupType;
    title: string;
    message: string;
    duration?: number;
}

interface PopupContextType {
    showPopup: (options: PopupOptions) => void;
    hidePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: ReactNode }) {
    const [popup, setPopup] = useState<PopupOptions | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const hidePopup = useCallback(() => {
        setIsOpen(false);
        setTimeout(() => setPopup(null), 500); // Clear data after animation
    }, []);

    const showPopup = useCallback(({ type, title, message, duration = 2500 }: PopupOptions) => {
        setPopup({ type, title, message, duration });
        setIsOpen(true);

        if (duration > 0) {
            setTimeout(() => {
                setIsOpen(false);
            }, duration);
        }
    }, []);

    return (
        <PopupContext.Provider value={{ showPopup, hidePopup }}>
            {children}
            {popup && (
                <StatusPopup
                    type={popup.type}
                    title={popup.title}
                    message={popup.message}
                    isOpen={isOpen}
                    onClose={hidePopup}
                />
            )}
        </PopupContext.Provider>
    );
}

export function usePopup() {
    const context = useContext(PopupContext);
    if (context === undefined) {
        throw new Error("usePopup must be used within a PopupProvider");
    }
    return context;
}
