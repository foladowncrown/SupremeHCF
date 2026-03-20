# SCHF Website - Production Deployment Guide

## Prerequisites
- Node.js 18+
- PostgreSQL database (or use SQLite for simple deployments)
- Domain name (optional)

## Environment Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd schf-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your production values:
   - `DATABASE_URL` - PostgreSQL connection string
   - `NEXTAUTH_URL` - Your production URL (e.g., https://schf.org)
   - `NEXTAUTH_SECRET` - Generate a secure random string
   - Payment gateway keys (Stripe, Paystack, LemonSqueezy)

4. **Generate Prisma Client**
   ```bash
   npm run db:generate
   ```

5. **Push database schema**
   ```bash
   npm run db:push
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

7. **Start production server**
   ```bash
   npm start
   ```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 2: Docker
```bash
docker build -t schf-website .
docker run -p 3000:3000 schf-website
```

### Option 3: Traditional Server
```bash
npm run build
npm start
```

## First-Time Setup

1. Navigate to `/admin/register` to create your admin account
2. Use access code: `SCHF2024` or `SCHF2025`
3. Configure your site settings
4. Add your content

## Payment Gateway Setup

### Stripe
1. Create account at stripe.com
2. Get API keys from Dashboard
3. Configure webhook URL: `https://yourdomain.com/api/webhooks/stripe`

### Paystack
1. Create account at paystack.com
2. Get API keys from Settings > API Keys
3. Configure webhook URL: `https://yourdomain.com/api/webhooks/paystack`

### LemonSqueezy
1. Create account at lemonsqueezy.com
2. Get API keys from Settings
3. Configure webhook URL: `https://yourdomain.com/api/webhooks/lemonsqueezy`

## Security Checklist
- [ ] Change NEXTAUTH_SECRET to a secure random string
- [ ] Configure ADMIN_ACCESS_CODES with secure codes
- [ ] Set up payment gateway webhook URLs
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS if needed

## Support
For issues, check the GitHub repository or contact the development team.
