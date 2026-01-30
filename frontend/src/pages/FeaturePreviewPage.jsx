import React from 'react';
import Navbar from '../components/landing/Navbar';
import FeatureDashboard from '../components/landing/FeatureDashboard';
import FeatureComparison from '../components/landing/FeatureComparison';

const FeaturePreviewPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-20 space-y-20">

                {/* Section 1: Dashboard Feature */}
                <section>
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Component Preview</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-4">Component A</h2>
                        <p className="text-gray-500 mt-2">Description of Component A</p>
                    </div>
                    <FeatureDashboard />
                </section>

                <div className="border-t border-gray-200"></div>

                {/* Section 2: Comparison Feature */}
                <section>
                    <div className="text-center mb-10">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">Component Preview</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-4">Component B</h2>
                        <p className="text-gray-500 mt-2">Comparison of options</p>
                    </div>
                    <FeatureComparison />
                </section>

            </main>
        </div>
    );
};

export default FeaturePreviewPage;
