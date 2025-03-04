import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Flag,
  Users,
  Sprout,
  BookOpen,
  BarChart,
  HandCoins,
  UserCircle,
  MessageCircle,
  GraduationCap,
} from 'lucide-react';

const readingLists = [
  {
    icon: Flag,
    title: 'Basic Financial Instruments: Shares/Loans/Convertibles',
    articles: 13,
  },
  {
    icon: Users,
    title: 'Startup Survival Guide',
    articles: 43,
  },
  {
    icon: UserCircle,
    title: 'Investor Survival Guide',
    articles: 30,
  },
  {
    icon: Sprout,
    title: 'Startups who Raised Funding on Investly',
    articles: 59,
  },
  {
    icon: MessageCircle,
    title: 'Opinions From Startup Changemakers',
    articles: 119,
  },
  {
    icon: BookOpen,
    title: 'All About Investly',
    articles: 13,
  },
  {
    icon: GraduationCap,
    title: 'User Manuals for Investly Startups',
    articles: 25,
  },
  {
    icon: HandCoins,
    title: 'User Manuals for Investly Investors',
    articles: 20,
  },
  {
    icon: BarChart,
    title: 'State of the Startup Market Reports',
    articles: 15,
  },
];

export default function AcademyPage() {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Reading lists</h1>
          <p className="text-xl text-muted-foreground">Just click to read more.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {readingLists.map((item, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg border-gray-200"
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#FF6B35] flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                <Link
                  href="#"
                  className="text-[#FF6B35] hover:text-[#FF6B35]/80 font-medium inline-flex items-center gap-2"
                >
                  Read {item.articles} articles
                  <span className="text-lg">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
