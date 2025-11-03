import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  base: '/cloud-tax-solutions/',
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://cloudtaxsolutions.com',
      dynamicRoutes: [
        '/',
        '/about-us',
        '/contact',
        '/services',
        '/Accounts_book_keeping',
        '/Payroll_services',
        '/Corporate_tax',
        '/Individual_tax',
        '/Estate_and_tax_planning',
        '/Business_advisory',
        '/Virtual_CFO_services',
        '/Restaurant_franchise_accounting',
        '/HST_rebate',
        '/SRED_consulting',
        '/Small_business_loans',
        '/Business_startup_and_incorporation',
        '/CRA_audits',
        '/Sale_and_purchase_of_business',
      ],
    }),
  ],
});
