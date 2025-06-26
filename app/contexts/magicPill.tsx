"use client"
import React, { createContext, useContext, useState } from "react";
import { MagicPillType, Mode, NotificationIcon, CTAIcon, MagicPillNavbarItem } from "magic-pill";
import { updateMode, updateNotificationIcon, updateNotificationMessage, updateCTAIcon, updateCTALabel, updateCTALink, updateInfoTitle, updateInfoContent, updateInfoCloseLabel, updateNavItemLabel, updateNavItemLink, updateNavItemIcon, addNavItem, deleteNavItem } from "magic-pill";

const defaultPillData: MagicPillType = {
  mode: "navbar",
  navbar: {
    navItems: [
      {
        icon: "arrow",
        label: "pomodoro",
        link: "#pomodoro"
      },
      {
        icon: "cross",
        label: "main",
        link: "#main"
      }
    ]
  }
};

interface MagicPillContextType {
  pillData: MagicPillType;
  setPillData: (data: MagicPillType) => void;
  updateMode: (mode: Mode) => void;
  updateNotificationIcon: (icon: NotificationIcon) => void;
  updateNotificationMessage: (message: string) => void;
  updateCTAIcon: (icon: CTAIcon) => void;
  updateCTALabel: (label: string) => void;
  updateCTALink: (link: string) => void;
  updateInfoTitle: (title: string) => void;
  updateInfoContent: (content: string) => void;
  updateInfoCloseLabel: (closeLabel: string) => void;
  updateNavItemLabel: (label: string, index: number) => void;
  updateNavItemLink: (link: string, index: number) => void;
  updateNavItemIcon: (icon: CTAIcon, index: number) => void;
  addNavItem: (navItem: MagicPillNavbarItem) => void;
  deleteNavItem: (index: number) => void;
}

const MagicPillContext = createContext<MagicPillContextType>({
  pillData: defaultPillData,
  setPillData: () => {},
  updateMode: () => {},
  updateNotificationIcon: () => {},
  updateNotificationMessage: () => {},
  updateCTAIcon: () => {},
  updateCTALabel: () => {},
  updateCTALink: () => {},
  updateInfoTitle: () => {},
  updateInfoContent: () => {},
  updateInfoCloseLabel: () => {},
  updateNavItemLabel: () => {},
  updateNavItemLink: () => {},
  updateNavItemIcon: () => {},
  addNavItem: () => {},
  deleteNavItem: () => {},
});

export const useMagicPill = () => {
  const context = useContext(MagicPillContext);
  if (!context) {
    throw new Error("useMagicPill must be used within a MagicPillProvider");
  }
  return context;
};

export const MagicPillProvider = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [pillData, setPillData] = useState<MagicPillType>(defaultPillData);

  const contextValue: MagicPillContextType = {
    pillData,
    setPillData,
    updateMode: (mode: Mode) => updateMode(mode, setPillData),
    updateNotificationIcon: (icon: NotificationIcon) => updateNotificationIcon(icon, setPillData),
    updateNotificationMessage: (message: string) => updateNotificationMessage(message, setPillData),
    updateCTAIcon: (icon: CTAIcon) => updateCTAIcon(icon, setPillData),
    updateCTALabel: (label: string) => updateCTALabel(label, setPillData),
    updateCTALink: (link: string) => updateCTALink(link, setPillData),
    updateInfoTitle: (title: string) => updateInfoTitle(title, setPillData),
    updateInfoContent: (content: string) => updateInfoContent(content, setPillData),
    updateInfoCloseLabel: (closeLabel: string) => updateInfoCloseLabel(closeLabel, setPillData),
    updateNavItemLabel: (label: string, index: number) => updateNavItemLabel(label, index, setPillData),
    updateNavItemLink: (link: string, index: number) => updateNavItemLink(link, index, setPillData),
    updateNavItemIcon: (icon: CTAIcon, index: number) => updateNavItemIcon(icon, index, setPillData),
    addNavItem: (navItem: MagicPillNavbarItem) => addNavItem(navItem, setPillData),
    deleteNavItem: (index: number) => deleteNavItem(index, setPillData),
  };

  return (
    <MagicPillContext.Provider value={contextValue}>
      {children}
      {pillData && <div id="magic-pill-root" />}
    </MagicPillContext.Provider>
  );
};