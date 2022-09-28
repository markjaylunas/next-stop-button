import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/Button';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Stop Button</title>
                <meta
                    name="description"
                    content="Create a centered “STOP” button that doubles in size"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col justify-center items-center gap-5 min-h-screen min-w-screen bg-slate-800">
                <Button />
            </main>
        </div>
    );
};

export default Home;
