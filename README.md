# Frontend Infrastructure Template

A complete, production-ready frontend infrastructure template using Vite + React + TypeScript + Supabase + Shadcn/UI that serves as a standardized starting point for multiple projects.

## 🚀 Features

- **Modern Stack**: Vite, React 18+, TypeScript, Tailwind CSS
- **Authentication**: Complete auth flows with Supabase (sign-in, sign-up, password reset)
- **Protected Routing**: React Router v6 with route guards and loading states
- **UI Components**: Shadcn/UI with dark/light mode support
- **State Management**: Zustand for client state, TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Error Handling**: React Error Boundary with user-friendly fallbacks
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Developer Experience**: ESLint, TypeScript strict mode, hot reload

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn/UI components
│   ├── layout/                # Layout components (Header, Sidebar, Footer)
│   ├── auth/                  # Authentication components
│   └── common/                # Common reusable components
├── pages/                     # Route page components
│   ├── auth/                  # Authentication pages
│   └── dashboard/             # Protected dashboard pages
├── hooks/                     # Custom React hooks
├── lib/
│   ├── supabase/              # Supabase client and services
│   ├── stores/                # Zustand stores (client state only)
│   ├── utils/                 # Utility functions
│   └── constants/             # App constants and routes
├── types/                     # TypeScript definitions
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
└── router.tsx                 # Router configuration
```

## 🛠️ Tech Stack

### Core
- **Vite** - Build tool and dev server
- **React 18+** - UI framework
- **TypeScript** - Type safety
- **React Router v6** - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/UI** - Component library
- **Lucide React** - Icons
- **next-themes** - Theme management

### Authentication & Database
- **Supabase** - Authentication, database, real-time features

### State Management
- **Zustand** - Client-side state (UI state only)
- **TanStack Query** - Server state management

### Forms & Validation
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Developer Experience
- **ESLint** - Code linting
- **TypeScript Strict Mode** - Enhanced type checking
- **Hot Module Replacement** - Fast development

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd frontend-template
npm install
```

### 2. Environment Setup

Copy the environment example file:

```bash
cp .env.example .env
```

Update `.env` with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_NAME=Your App Name
VITE_APP_URL=http://localhost:3000
VITE_ENVIRONMENT=development
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Copy your project URL and anon key to `.env`
3. Run the database migrations (if you have any)

### 4. Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Architecture Overview

### State Management Strategy

**Client State (Zustand)**
- UI state (sidebar open/closed, theme, modals)
- Form state
- Temporary application state

**Server State (TanStack Query)**
- User profiles
- API data
- Database queries
- Cache management

### Authentication Flow

1. **Initialization**: Check for existing session on app load
2. **Sign In/Up**: Forms with validation and error handling
3. **Protected Routes**: Automatic redirects for unauthenticated users
4. **Session Management**: Automatic token refresh
5. **State Persistence**: Auth state persisted across browser sessions

### Component Patterns

- **Layout Components**: Reusable layout structures
- **Page Components**: Route-level components
- **Feature Components**: Business logic components
- **UI Components**: Pure presentational components
- **Form Components**: Form handling with validation

## 🔐 Authentication Features

- ✅ Email/Password sign-in
- ✅ User registration
- ✅ Password reset flow
- ✅ Protected routes
- ✅ Session persistence
- ✅ Auto token refresh
- ✅ Loading states
- ✅ Error handling

## 🎨 UI Features

- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ Mobile navigation
- ✅ Collapsible sidebar
- ✅ Toast notifications
- ✅ Loading spinners
- ✅ Error boundaries
- ✅ 404 page

## 🛡️ Security Features

- Environment variables for sensitive data
- Supabase Row Level Security (RLS) ready
- Protected route authentication
- Input validation with Zod
- XSS protection via React

## 📱 Responsive Design

- Mobile-first approach
- Responsive breakpoints:
  - `sm`: 640px
  - `md`: 768px  
  - `lg`: 1024px
  - `xl`: 1280px

## 🧪 Development Guidelines

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route to `src/router.tsx`
3. Update `src/lib/constants/routes.ts`
4. Add navigation link if needed

### Adding New Components

1. Create component in appropriate directory
2. Export from index file if applicable
3. Follow naming conventions
4. Include TypeScript interfaces

### State Management

- Use Zustand for client-side UI state only
- Use TanStack Query for all server data
- Never mix server data in Zustand stores
- Keep stores focused and modular

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Use Shadcn/UI components when possible
- Maintain consistent spacing with 8px grid
- Test both light and dark themes

## 🚀 Deployment

This template is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any static hosting provider

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🔧 Customization

### Changing Theme Colors

Update `tailwind.config.js` and CSS variables in `src/index.css`

### Adding New Authentication Providers

Extend `src/lib/supabase/auth.ts` with additional providers

### Customizing Layout

Modify components in `src/components/layout/`

### Adding New Routes

1. Add route constant to `src/lib/constants/routes.ts`
2. Create page component
3. Add route to `src/router.tsx`

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com/)
- [TanStack Query Documentation](https://tanstack.com/query)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This template is available under the MIT License.