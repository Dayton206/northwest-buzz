import React from 'react';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Proof from '../components/Proof';
import FAQ from '../components/FAQ';
import FinalSteps from '../components/FinalSteps';

export default function Home() {
    return (
        <>
            <Hero />
            <Problem />
            <Solution />
            <HowItWorks />
            <Proof />
            <FinalSteps />
            <FAQ />
        </>
    );
}
