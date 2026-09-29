export interface Translation {
  navHome: string;
  navAbout: string;
  navServices: string;
  navStats: string;
  navContact: string;
  
  heroName: string;
  heroTitle: string;
  heroOrg: string;
  verifiedBadge: string;
  
  actionCall: string;
  actionWhatsapp: string;
  actionEmail: string;
  actionFacebook: string;
  actionSave: string;
  actionShare: string;
  
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
  aboutRolesLabel: string;
  aboutRoles: string[];
  
  servicesTitle: string;
  servicesSubtitle: string;
  
  statsTitle: string;
  statsSubtitle: string;
  
  videoTitle: string;
  videoSubtitle: string;
  
  qrTitle: string;
  qrSubtitle: string;
  qrScanToSave: string;
  qrCopySuccess: string;
  
  contactTitle: string;
  contactSubtitle: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;
  contactAddressLabel: string;
  contactAddressValue: string;
  contactHoursLabel: string;
  contactHoursValue: string;
  contactMapLabel: string;
  
  footerCopyright: string;
  footerRights: string;
  footerCredit: string;
}

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  labelAr: string;
  labelEn: string;
  value: number;
  suffix: string;
  iconName: string;
}
