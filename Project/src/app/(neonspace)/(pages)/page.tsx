import { homeMetadata } from '@/app/(neonspace)/meta/home';

export const metadata = homeMetadata;

export default function Home() {
    return <main className="h-screen w-screen bg-slate-900 flex justify-center items-center">
        <div className="flex flex-col gap-4">
            <h1 className="text-9xl font-bold text-white">W.I.P</h1>
        </div>
    </main>;
}
