import { Navbar } from '@/components/layout/navbar/guest-navbar';

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}

      {/* <QuestionButton /> */}
    </div>
  );
}
